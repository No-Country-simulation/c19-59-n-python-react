import { useState } from "react";

const useMonthsAndDaysSchedule = ({ preselectedMonths = [], listString, id, setFormData }) => {
    const months = listString;
    const [selections, setSelections] = useState(preselectedMonths);
    const [showOptions, setShowOptions] = useState(preselectedMonths.length > 0);

    const handleMainCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setShowOptions(isChecked);
        if (!isChecked) {
            setSelections([]);
        }
    };

    const handleCheckboxChange = (month, isChecked) => {
        if (isChecked) {
            if (id === 'Month') {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    availability: {
                        ...prevFormData.availability,
                        consult: {
                            ...prevFormData.availability.consult,
                            repeat_months: [...prevFormData.availability.consult.repeat_months, month]
                        }
                    }
                }))
            } else if (id === "Day") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    availability: {
                        ...prevFormData.availability,
                        consult: {
                            ...prevFormData.availability.consult,
                            repeat_days_ofweek: [...prevFormData.availability.consult.repeat_days_ofweek, month]
                        }
                    }
                }))
            }
        } else {
            if (id === 'Month') {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    availability: {
                        ...prevFormData.availability,
                        consult: {
                            ...prevFormData.availability.consult,
                            repeat_months: prevFormData.availability.consult.repeat_months.filter(md => md !== month)
                        }
                    }
                }))
            } else if (id === "Day") {
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    availability: {
                        ...prevFormData.availability,
                        consult: {
                            ...prevFormData.availability.consult,
                            repeat_days_ofweek: prevFormData.availability.consult.repeat_days_ofweek.filter(md => md !== month)
                        }
                    }
                }))
            }
        }
    };

    const getNumberMonth = (m) => {
        m = m.toUpperCase();
        const monthsMap = {};
        months.forEach((month, idx) => (monthsMap[month] = (idx + 1).toString().padStart(2, "0")));
        return monthsMap[m] || false;
    };

    return {
        showOptions,
        getNumberMonth,
        handleCheckboxChange,
        handleMainCheckboxChange,
        selections,
    };

}
export default useMonthsAndDaysSchedule;