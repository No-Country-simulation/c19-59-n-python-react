import dayjs from "dayjs";

const useSchedulesHandles = (setFormData) => {
    const handleEmergencyTimeChange = ({ name, alt, newValue }) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            availability: prevFormData.availability.map((avail) => {
                if (avail.emergency_guard) {
                    const updatedTimes = [...(avail.emergency_guard[name] || ['00:00', '00:00'])];
                    updatedTimes[alt] = dayjs(newValue).format('HH:mm');
                    return {
                        ...avail,
                        emergency_guard: {
                            ...avail.emergency_guard,
                            [name]: updatedTimes
                        }
                    };
                }
                return avail;
            })
        }));
    }
    const handleTitleChange = (e) => {
        const { value } = e.target;
        setFormData((prevFormData)=>({
            ...prevFormData,
            availability:prevFormData.availability.map((avail)=>{
                if(avail.consult){
                    return {
                        ...avail,
                        consult:{
                            ...avail.consult,
                            title:value
                        }
                    }
                }
                return avail;
            })
        }))
    }
    const handleDateChange = (newDate) => {
        setFormData((prevFormData)=>({
            ...prevFormData,
            availability:prevFormData.availability.map((avail)=>{
                if(avail.consult){
                    return{
                        ...avail,
                        consult:{
                            ...avail.consult,
                            selectedDays:[...avail.consult.selectedDays,dayjs(newDate).format('YYYY-MM-DD')]
                        }
                    }
                }
                return avail;
            })
        }))
    }
    const handleDateRemove = (dateToRemove) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            availability: prevFormData.availability.map((avail) => {
                if (avail.consult) {
                    return {
                        ...avail,
                        consult: {
                            ...avail.consult,
                            selectedDays: avail.consult.selectedDays.filter(date => date !== dateToRemove)
                        }
                    };
                }
                return avail;
            })
        }));
    }

    return {
        handleTitleChange,
        handleEmergencyTimeChange,
        handleDateChange,
        handleDateRemove
    }
}
export default useSchedulesHandles;