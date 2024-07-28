from pydantic import BaseModel, Field
from typing import List, Optional

class EmergencyGuard(BaseModel):
    """
    Representa el horario de guardia de emergencia para un veterinario, dividido en tres bloques:
    
    Atributos:
        morning (Optional[List[str]]): Horario de guardia en la mañana, lista de horas en formato "HH:MM". Ejemplo: ["08:00", "12:00"].
        afternoon (Optional[List[str]]): Horario de guardia en la tarde, lista de horas en formato "HH:MM". Ejemplo: ["12:00", "16:00"].
        evening (Optional[List[str]]): Horario de guardia en la noche, lista de horas en formato "HH:MM". Ejemplo: ["16:00", "20:00"].
    """
    morning: Optional[List[str]] = Field(None, example=["08:00", "12:00"])
    afternoon: Optional[List[str]] = Field(None, example=["12:00", "16:00"])
    evening: Optional[List[str]] = Field(None, example=["16:00", "20:00"])

class ConsultationSchedule(BaseModel):
    """
    Representa el horario de consultas de un veterinario, dividido en tres bloques:
    
    Atributos:
        morning (List[str]): Horario de atencion en la mañana, lista de horas en formato "HH:MM". Ejemplo: ["09:00", "10:00"].
        afternoon (List[str]): Horario de atencion en la tarde, lista de horas en formato "HH:MM". Ejemplo: ["13:00", "14:00"].
        evening (List[str]): Horario de atencion en la noche, lista de horas en formato "HH:MM". Ejemplo: ["18:00"].
    """
    morning: List[str] = Field(..., example=["09:00", "10:00"])
    afternoon: List[str] = Field(..., example=["13:00", "14:00"])
    evening: List[str] = Field(..., example=["18:00"])

class Consult(BaseModel):
    """
    Representa la configuración de una consulta específica de un veterinario:
    
    Atributos:
        title (str): etiqueta descriptiva de la configuracion de disponibilidad.
        selectedDays (List[str]): Días seleccionados para dar consulta, en formato "YYYY-MM-DD". Ejemplo: ["2024-07-01", "2024-07-02"].
        schedules (ConsultationSchedule): Horarios de disponibilidad para consultas divididos en mañana, tarde y noche.
        repeat_months (List[str]): Meses en los que se repite la configuración de la disponibilidad. Ejemplo: ["JUL", "JAN"].
        repeat_days_ofweek (List[str]): Días de la semana en los que se repite la configuracion de la disponibilidad. Ejemplo: ["MO", "TU"].
    """
    title: Optional[str]
    selectedDays: List[str] = Field(..., example=["2024-07-01", "2024-07-02"])
    schedules: ConsultationSchedule
    repeat_months: List[str] = Field(..., example=["JUL", "JAN"])
    repeat_days_ofweek: List[str] = Field(..., example=["MO", "TU"])

class AvailabilityConfig(BaseModel):
    """
    Representa la configuración de disponibilidad de un veterinario para guardias de emergencia y consultas:
    
    Atributos:
        id (int): Identificador único de la configuración de disponibilidad.
        emergency_guard (EmergencyGuard): Horario de guardia de emergencia.
        consult (Consult): Configuración de consulta.
    """
    id: int
    emergency_guard: EmergencyGuard
    consult: Consult

class AvailabilityVeterinarian(BaseModel):
    """
    Representa la disponibilidad completa de un veterinario:
    
    Atributos:
        id_veterinarian (int): Identificador único del veterinario.
        availability (List[AvailabilityConfig]): Lista de configuraciones de disponibilidad.
    """
    id_veterinarian: int
    availability: List[AvailabilityConfig]
