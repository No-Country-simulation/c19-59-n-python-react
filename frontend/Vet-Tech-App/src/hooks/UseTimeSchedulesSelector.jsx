import { useState } from "react";

const UseTimeScheduleSelector =(params)=>{
    //inicializamos seleccion horaria en estados vacios []
    const [selections,setSelections]=useState({
        morning:[],
        afternoon:[],
        evening:[]
    });
    //Método timeStringToMinutes Convierte una cadena de tiempo en formato HH:mm a minutos desde la medianoche.
    const timeStringToMinutes  =(timeString)=>{
        const [hours, minutes] = timeString.split(":").map((str) => parseInt(str, 10));
        return hours * 60 + minutes;
    };
    //Método formatTime Formatea un tiempo en minutos a un formato legible de hora (12 horas o 24 horas).
    const formatTime=(minutes,withSuffix=false)=>{
        const hours = Math.floor(minutes/60);
        const mins=minutes % 60;
        let formattedHour=hours % 12 || 12;// Convierte 0 a 12 para el formato de 12 horas.
        // Agrega el sufijo AM o PM si es necesario.
        if(withSuffix){
            const suffix= hours >=12? "PM":"AM";
            return `${formattedHour.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")} ${suffix}`;
        }else{
            return `${formattedHour.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
        };
    };
    //Método generateTimeRange Genera un rango de horarios basado en los parámetros de configuración.
    const generateTimeRange =()=>{
        const times=[];
        let currentHr = timeStringToMinutes(params.hrInitial);
        // Itera sobre las horas desde hrInitial hasta hrFinal con intervalos de duración.
        while(currentHr < timeStringToMinutes(params.hrFinal)){
            const label = formatTime(currentHr);
            const hours= Math.floor(currentHr/60);
            const mins= currentHr % 60;

            // Agrega el horario al array de tiempos con formato específico.
            times.push({
                label:label,
                time:formatTime(currentHr,true),
                dataTime:`${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`
            });
            currentHr += timeStringToMinutes(params.duration);// Avanza al siguiente intervalo de duración.
        };
        if(currentHr === timeStringToMinutes(params.hrFinal)){
            const label = formatTime(currentHr);
            const hours= Math.floor(currentHr/60);
            const mins= currentHr % 60;
            times.push({
                label:label,
                time:formatTime(currentHr,true),
                dataTime:`${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`
            });
            currentHr += timeStringToMinutes(params.duration);
        }
        return times;
    };
    const resetSelections =()=>{
        setSelections({
            morning:[],
            afternoon:[],
            evening:[]
        });
    };
    const handleCheckBoxChange=(time,checked,type)=>{
        setSelections((prevSelections)=>{
            const newSelections = {...prevSelections};
            
            if(!newSelections[type]){
                newSelections[type]=[];
            }

            if(checked){
                newSelections[type]=[...newSelections[type],time];
                console.log(" true checked");
            }else{
                newSelections[type]=newSelections[type].filter((t)=>t !== time);
                console.log(" false checked");
            }
            return newSelections;
        });
    };
    return {
        selections,
        resetSelections,
        generateTimeRange,
        handleCheckBoxChange
    };
}
export default UseTimeScheduleSelector;