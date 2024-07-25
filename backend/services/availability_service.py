from datetime import datetime, timedelta
import calendar
import pandas as pd
from typing import List, Dict

# Definición del formato de fecha y los mapeos
formatdate = "%Y-%m-%d"
month_mapping = {
    "JAN": "01",
    "FEB": "02",
    "MAR": "03",
    "APR": "04",
    "MAY": "05",
    "JUN": "06",
    "JUL": "07",
    "AUG": "08",
    "SEP": "09",
    "OCT": "10",
    "NOV": "11",
    "DEC": "12",
}

day_mapping = {
    "MO": "Monday",
    "TU": "Tuesday",
    "WE": "Wednesday",
    "TH": "Thursday",
    "FR": "Friday",
    "SA": "Saturday",
    "SU": "Sunday",
}

data = {
    "id_veterinarian": 1,
    "availability": {
        "id": 1,
        "configurations": [
            {
                "emergency_guard": {
                    "morning": ["08:00", "12:00"],
                    "afternoon": ["12:00", "16:00"],
                    "evening": ["16:00", "20:00"],
                },
                "consult": {
                    "title": "Veterinarian",
                    "selectedDays": ["2024-07-01", "2024-07-02"],
                    "schedules": {
                        "morning": ["09:00", "10:00"],
                        "afternoon": ["13:00", "14:00"],
                        "evening": ["18:00"],
                    },
                    "repeat_months": ["JUL", "JAN"],
                    "repeat_days_ofweek": ["MO", "TU"],
                },
            }
        ],
    },
}


def get_dates_for_month(
    year: int, month_num: int, day_names: List[str]
) -> List[datetime]:
    """
    Genera todas las fechas de un mes que coinciden con los días de la semana especificados.

    @param year: Año para generar las fechas.
    @param month_num: Número del mes para generar las fechas.
    @param day_names: Lista de nombres de los días de la semana a considerar.
    @return: Lista de fechas que coinciden con los días de la semana especificados.
    """
    dates = []
    # Genera todas las fechas del mes especificado
    date_range = pd.date_range(
        start=f"{year}-{month_num:02d}-01",
        end=f"{year}-{month_num:02d}-{calendar.monthrange(year, month_num)[1]}",
    )
    for date in date_range:
        if date.strftime("%A") in day_names:
            dates.append(date)
    return dates


def get_availabilities_veterinarian(
    data: Dict, simplified: bool = False, order: str = "asc"
) -> Dict:
    """
    Procesa las configuraciones de disponibilidad para generar todas las fechas y horarios correspondientes.

    @param data: Diccionario con la configuración de disponibilidad.
    @param simplified: Si es True, los horarios se simplificarán en una sola lista.
    @param order: Orden de las fechas, puede ser "asc" o "desc". Predeterminado es "asc".
    @return: Diccionario con todas las fechas y sus horarios correspondientes.
    """
    configurations = data["availability"]["configurations"]
    all_dates = []
    dates_collection = {}

    current_year = datetime.now().year
    current_month_num = datetime.now().month

    for config in configurations:
        consult = config["consult"]
        selected_days = [
            datetime.strptime(day, formatdate) for day in consult["selectedDays"]
        ]
        schedules = consult["schedules"]
        repeat_months = consult["repeat_months"]
        repeat_days_ofweek = [day_mapping[day] for day in consult["repeat_days_ofweek"]]

        # Procesar selectedDays
        for day in selected_days:
            date_str = day.strftime(formatdate)
            if date_str not in dates_collection:
                dates_collection[date_str] = (
                    schedules if not simplified else sum(schedules.values(), [])
                )
                all_dates.append(date_str)

        # Procesar repeat_months
        for month in repeat_months:
            month_num = int(month_mapping[month])
            for day in selected_days:
                future_date = day.replace(month=month_num, year=current_year)
                # Si el mes ya pasó, se genera la fecha para el año siguiente
                if month_num < current_month_num:
                    future_date = day.replace(month=month_num, year=current_year + 1)
                date_str = future_date.strftime(formatdate)
                if date_str not in dates_collection:
                    dates_collection[date_str] = (
                        schedules if not simplified else sum(schedules.values(), [])
                    )
                    all_dates.append(date_str)

        # Procesar repeat_days_ofweek
        for month in repeat_months:
            month_num = int(month_mapping[month])
            # Generar fechas solo para el año siguiente si el mes ya pasó
            years = (
                [current_year] if month_num >= current_month_num else [current_year + 1]
            )
            for year in years:
                valid_dates = get_dates_for_month(year, month_num, repeat_days_ofweek)
                for date in valid_dates:
                    date_str = date.strftime(formatdate)
                    if date_str not in dates_collection:
                        dates_collection[date_str] = (
                            schedules if not simplified else sum(schedules.values(), [])
                        )
                        all_dates.append(date_str)

    # Ordenar las fechas
    all_dates = sorted(
        all_dates,
        key=lambda x: (
            datetime.strptime(x, formatdate).year != current_year,
            datetime.strptime(x, formatdate),
        ),
        reverse=(order == "desc"),
    )

    result = {
        "all": all_dates,
        "datesCollection": {date: dates_collection[date] for date in all_dates},
    }

    return result


# Ejemplo de uso con simplified = False
result_detailed = get_availabilities_veterinarian(data, simplified=False, order="desc")
print(result_detailed)

# Ejemplo de uso con simplified = True
result_simplified = get_availabilities_veterinarian(data, simplified=True, order="desc")
print(result_simplified)
