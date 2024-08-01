import React, { useState } from 'react';
import dayjs from 'dayjs';
/* import 'dayjs/locale/es'; */ // Importa el idioma español si lo necesitas

const Calendar = ({availableDates }) => {
    const [currentMonth, setCurrentMonth] = useState(dayjs());
    const [selectedDate, setSelectedDate] = useState(null);

    const startOfMonth = currentMonth.startOf('month');
    const endOfMonth = currentMonth.endOf('month');
    const startDate = startOfMonth.startOf('week');
    const endDate = endOfMonth.endOf('week');
    const daysInMonth = [];

    for (let day = startDate; day.isBefore(endDate); day = day.add(1, 'day')) {
        daysInMonth.push(day);
    }

    const handlePrevMonth = () => {
        setCurrentMonth(currentMonth.subtract(1, 'month'));
    };

    const handleNextMonth = () => {
        setCurrentMonth(currentMonth.add(1, 'month'));
    };

    const handleDateClick = (date) => {
        setSelectedDate(date);
    };
    const isDateAvailable=(date)=>{
        return availableDates.includes(date.format('YYYY-MM-DD'));
    }

    return (
        <div className="calendar mx-auto max-w-md rounded-2xl overflow-hidden">
            <header className="flex justify-between  p-2 items-center bg-violet-300 mb-1 border-1 ">
                <button onClick={handlePrevMonth} className="text-xl font-bold">{'<'}</button>
                <h2 className="text-lg font-semibold">{currentMonth.format('MMMM YYYY')}</h2>
                <button onClick={handleNextMonth} className="text-xl font-bold">{'>'}</button>
            </header>
            <div className="grid p-2 grid-cols-7 gap-1 text-center bg-menuColor-4">
                {['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'].map((day) => (
                    <div key={day} className="font-semibold">{day}</div>
                ))}
                {daysInMonth.map((day, index) => (
                    <div
                        key={index}
                        className={`p-2 cursor-pointer rounded ${
                            day.isSame(dayjs(), 'day') ? 'bg-blue-200' : ''
                        } ${
                            day.isSame(selectedDate, 'day') ? 'bg-blue-400 text-white' : ''
                        } ${
                            day.month() !== currentMonth.month() ? 'text-slate-600' : 'text-black'
                        } ${
                            isDateAvailable(day) ? 'bg-green-200' : ''
                        }`}
                        onClick={() => handleDateClick(day)}
                    >
                        {day.date()}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
