import React from 'react'
import { TimeField } from '@mui/x-date-pickers'
import dayjs from 'dayjs'

const EmergencyTimes = ({ title,name,formData,handleEmergencyTimeChange }) => {
    return (
        <div className='w-full mt-2 '>
            <h5>{title}</h5>
            <div className='flex flex-row justify-between mt-3'>
                <div className='relative w-1/2 mr-1 '>
                    <TimeField 
                        label="Inicio"
                        value={dayjs(formData.availability.emergency_guard[name].start,'HH:mm')}
                        onChange={(newValue)=>handleEmergencyTimeChange({name,alt:'start',newValue})}
                    />
                </div>
                <div className='relative w-1/2 ml-1 '>
                    <TimeField 
                        className=''
                        label="Final"
                        value={dayjs(formData.availability.emergency_guard[name].end,'HH:mm')}
                        onChange={(newValue)=>handleEmergencyTimeChange({name,alt:'end',newValue})}
                    />
                </div>
            </div>
        </div>
    )
}

export default EmergencyTimes