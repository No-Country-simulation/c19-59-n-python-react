import { useEffect, useRef, useState } from "react";
import UseTimeScheduleSelector from "../../hooks/UseTimeSchedulesSelector";
import UseScheduleManager from "../../hooks/UseScheduleManager";
import schedulesHandles from '../../hooks/schedulesHandles';
import TabsMonthDays from "../../components/TabsMonthDays";
import ContainerSchedules from "../../components/ContainerSchedules";
import EmergencyTimes from "../../components/EmergencyTimes";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import axios from "axios";
import { PrimaryButton } from "../../components/PrimaryButton";
import { LogoVetTech } from "../../components/LogoVetTech";
import {useCheckAuth} from '../../hooks/useCheckAuth';
import {useNavigate} from 'react-router-dom';
const BASE_URL = 'https://c19-59-n-python-react.onrender.com'

const ScheduleManagementVet = () => {
    const [formData, setFormData] = useState({
        id_veterinarian: 0,
        availability: [{
            id: 1,
            emergency_guard: {
                morning: [
                    dayjs("08:00", "HH:mm"),
                    dayjs("12:00", "HH:mm")
                ],
                afternoon: [
                    dayjs("12:00", "HH:mm"),
                    dayjs("17:00", "HH:mm")
                ],
                evening: [
                    dayjs("18:00", "HH:mm"),
                    dayjs("22:00", "HH:mm")
                ]
            },
            consult: {
                title: "",
                selectedDays: [],
                schedules: {
                    morning: [],
                    afternoon: [],
                    evening: []
                },
                repeat_months: [],
                repeat_days_ofweek: []
            }
        }]
    })
    const contentRef = useRef([]);
    const tabsRef = useRef([]);
    const contentsSchedulesRef = useRef(null);
    const mainContainerRef = useRef(null);
    const morningTimeRefs = useRef(null);
    const afternoonTimeRef = useRef(null);
    const eveningTimeRef = useRef(null);

    const navigate = useNavigate();
    /* const {status,role}=useCheckAuth();

    useEffect(()=>{
        if(status === 'authenticated'){
            setFormData(prevFormData=>({
                ...prevFormData,
                id_veterinarian:role.id
            }))
        }
    },[status,role]); */

    const { handleClick } = UseScheduleManager(contentRef.current, tabsRef.current);
    const { handleDateChange, handleDateRemove, handleEmergencyTimeChange, handleTitleChange } = schedulesHandles(setFormData)
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            ...formData
        };
        axios.post(`${BASE_URL}/availability/`, dataToSend, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log('Success:', response.data);
                navigate('/veterinary/home')
            })
            .catch(error => {
                console.error('Error: ', error);
            })
    }


    const morningParams = {
        container: morningTimeRefs,
        duration: '00:30', // en minutos
        hrInitial: '08:00',
        hrFinal: '12:00',
        checkboxName: 'morningTimes',
        type: 'morning',
        preselectedTimes: ['08:00', '09:30', '06:30']
    };

    const afternoonParams = {
        container: afternoonTimeRef,
        duration: '01:00', // en minutos
        hrInitial: '12:00',
        hrFinal: '18:00',
        checkboxName: 'afternoonTimes',
        type: 'afternoon',
        preselectedTimes: []
    };

    const eveningParams = {
        container: eveningTimeRef,
        duration: '00:30', // en minutos
        hrInitial: '18:00',
        hrFinal: '22:00',
        checkboxName: 'eveningTimes',
        type: 'evening',
        preselectedTimes: []
    };
    const morningSchedule = UseTimeScheduleSelector(morningParams);
    const afternoonSchedule = UseTimeScheduleSelector(afternoonParams);
    const eveningSchedule = UseTimeScheduleSelector(eveningParams);
    const allToParams = [
        {
            paramsList: morningParams,
            timeSchedule: morningSchedule,
            contentRef: el => contentRef.current[0] = el,
            timeRef: morningTimeRefs,
            id: "morningTime"
        },
        {
            paramsList: afternoonParams,
            timeSchedule: afternoonSchedule,
            contentRef: el => contentRef.current[1] = el,
            timeRef: afternoonTimeRef,
            id: "afternoonTime"
        },
        {
            paramsList: eveningParams,
            timeSchedule: eveningSchedule,
            contentRef: el => contentRef.current[2] = el,
            timeRef: eveningTimeRef,
            id: "eveningTime"
        },
    ]
    const emergencyTimeConfigs = [
        { title: "Morning", name: "morning" },
        { title: "Afternoon", name: "afternoon" },
        { title: "Evening", name: "evening" }
    ]

    return (
        <div className="pt-2  w-full">
            <div className="flex items-center m-auto max-w-72 ">
                <LogoVetTech className="w-[60px] h-[60px]" />
                <h2 className="font-alata text-[25px] pl-2 antialiased font-bold text-titleColor">Vet-Tech</h2>
            </div>
            <form
                className="flex flex-col mt-5 items-center  m-auto max-w-72 pb-20"
                onSubmit={handleSubmit}
            >
                <div id="shedules" ref={contentsSchedulesRef} className=" flex flex-col items-center w-full">
                    <h3 className="mt-3">Horarios de Emergencias</h3>
                    {
                        emergencyTimeConfigs.map(({ title, name }) => (
                            <EmergencyTimes
                                key={name}
                                title={title}
                                name={name}
                                formData={formData}
                                handleEmergencyTimeChange={handleEmergencyTimeChange}
                            />
                        ))
                    }
                    <br />
                    <input
                        type="text"
                        name="title"
                        placeholder="Titulo"
                        value={formData.availability[0]?.consult?.title || ""} onChange={handleTitleChange}
                        className="w-full rounded p-1  bg-transparent border-slate-400 border-1"
                    />
                    <br />
                    <label htmlFor="">Seleccionar fechas</label>
                    <DatePicker
                        value={null}
                        onChange={(newDate) => handleDateChange(newDate)}
                        slotProps={{
                            textField: {
                                variant: 'outlined'
                            }
                        }}
                    />
                    <br />
                    <ul>
                        {formData.availability[0]?.consult?.selectedDays?.map((date, i) => (
                            <li key={i} className="text-blackText font-semibold">
                                {date}
                                <button
                                    type="button"
                                    className="transition-all bg-secondaryColor text-center text-whiteText text-[12px] ml-3 my-1 w-[80px] p-2 rounded-[30px] font-manrope"
                                    onClick={() => handleDateRemove(date)} >delete</button>
                            </li>
                        ))}
                    </ul>
                    <br />
                    <div className="shedulesLeyends flex flex-row justify-around w-full">
                        <div className="shedule text-center transition active border-b-3 border-menuColor-3" ref={el => tabsRef.current[0] = el} onClick={handleClick} >Morning</div>
                        <div className="shedule text-center transition" ref={el => tabsRef.current[1] = el} onClick={handleClick}>Afternoon</div>
                        <div className="shedule text-center transition" ref={el => tabsRef.current[2] = el} onClick={handleClick}>Evening</div>
                    </div>
                    <div className="shedulesContents flex mt-2">
                        {
                            allToParams.map(({ paramsList, timeSchedule, contentRef, timeRef, id }) =>
                                <ContainerSchedules
                                    key={id}
                                    paramsList={paramsList}
                                    timeSchedule={timeSchedule}
                                    contentRef={contentRef}
                                    timeRef={timeRef}
                                    id={id}
                                    formData={formData}
                                    setFormData={setFormData}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="main_container mb-5" ref={mainContainerRef} >
                    <TabsMonthDays items="JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC" preselected={[]} idx='Month' setFormData={setFormData} /><br />
                    <TabsMonthDays items="MO,TU,WE,TH,FR,SA,SU" preselected={[]} idx='Day' setFormData={setFormData} />
                </div>
                {/* <PrimaryButton type="submit" >Enviar</PrimaryButton> */}
            </form>
        </div>
    )
}
export default ScheduleManagementVet;
