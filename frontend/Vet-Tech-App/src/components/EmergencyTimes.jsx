import React from 'react'
import { TimeField } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

const EmergencyTimes = ({ title,name,formData,handleEmergencyTimeChange }) => {
    const emergencyTimes = formData.availability[0]?.emergency_guard[name] ||[];
    
    return (
        <div className='w-full mt-2 '>
            <h5>{title}</h5>
            <div className='flex flex-row justify-between mt-3'>
                <div className='relative w-1/2 mr-1 '>
                    <TimeField 
                        label="Inicio"
                        value={dayjs(emergencyTimes[0],'HH:mm')}
                        onChange={(newValue)=>handleEmergencyTimeChange({name,alt:0,newValue})}
                    />
                </div>
                <div className='relative w-1/2 ml-1 '>
                    <TimeField 
                        className=''
                        label="Final"
                        value={dayjs(emergencyTimes[1],'HH:mm')}
                        onChange={(newValue)=>handleEmergencyTimeChange({name,alt:1,newValue})}
                    />
                </div>
            </div>
        </div>
    )
}

export default EmergencyTimes