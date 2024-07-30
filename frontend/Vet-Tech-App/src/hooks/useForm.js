import { useState } from 'react';
import { CountriesList } from "../constants/constants";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    const onCountryChange = ({ target }) => {
        const { name, value } = target;
        const selectedCountry = CountriesList.find(c => c.iso3 == value);
        if(value){
            setFormState({
                ...formState,
                country_residence: selectedCountry.name,
                iso3: value,
                country_flag: selectedCountry.flag
            });
        }else{
            setFormState({
                ...formState,
                country_residence: '',
                iso3: '',
                country_flag: ''
            });
        }
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        onCountryChange
    }
}
