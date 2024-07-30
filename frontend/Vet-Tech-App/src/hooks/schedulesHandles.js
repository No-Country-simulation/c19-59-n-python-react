import dayjs from "dayjs";

const useSchedulesHandles = (setFormData) => {
    const handleEmergencyTimeChange = ({ name, alt, newValue }) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            availability: {
                ...prevFormData.availability,
                emergency_guard: {
                    ...prevFormData.availability.emergency_guard,
                    [name]: {
                        ...prevFormData.availability.emergency_guard[name],
                        [alt]: dayjs(newValue).format('HH:mm')
                    }
                }
            }
        }));
    }
    const handleTitleChange = (e) => {
        const { value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            availability: {
                ...prevFormData.availability,
                title: value
            }
        }))
    }
    const handleDateChange = (newDate) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            availability: {
                ...prevFormData.availability,
                consult: {
                    ...prevFormData.availability.consult,
                    selectedDays: [...prevFormData.availability.consult.selectedDays, dayjs(newDate).format('YYYY-MM-DD')]
                }
            }
        }))
    }
    const handleDateRemove = (dateToRemove) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            availability: {
                ...prevFormData.availability,
                consult: {
                    ...prevFormData.availability.consult,
                    selectedDays: prevFormData.availability.consult.selectedDays.filter(date => date !== dateToRemove)
                }
            }
        }))
    }

    return {
        handleTitleChange,
        handleEmergencyTimeChange,
        handleDateChange,
        handleDateRemove
    }
}
export default useSchedulesHandles;