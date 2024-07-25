import { useEffect, useRef, useState } from "react";
import UseTimeScheduleSelector from "../../hooks/UseTimeSchedulesSelector";
import UseScheduleManager from "../../hooks/UseScheduleManager";
import schedulesHandles from '../../hooks/schedulesHandles';
import TabsMonthDays from "../../components/TabsMonthDays";
import ContainerSchedules from "../../components/ContainerSchedules";
import EmergencyTimes from "../../components/EmergencyTimes";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { getUserData } from "../../hooks/userData";
import axios from "axios";
import { PrimaryButton } from "../../components";

const ScheduleManagementVet = () => {
    const [formData, setFormData] = useState({
        id_veterinarian: "",
        availability: {
            id: 1,
            title: "Veterinarian",
            configurations: {
                emergency_guard: {
                    morning: {
                        start: dayjs("08:00", "HH:mm"),
                        end: dayjs("12:00", "HH:mm")
                    },
                    afternoon: {
                        start: dayjs("12:00", "HH:mm"),
                        end: dayjs("16:00", "HH:mm")
                    },
                    evening: {
                        start: dayjs("16:00", "HH:mm"),
                        end: dayjs("20:00", "HH:mm")
                    }
                },
                consult: {
                    selectedDays: [],
                    schedules: {
                        morning: [],
                        afternoon: [],
                        evening: []
                    },
                    repeat_months: [],
                    repeat_days_ofweek: []
                }
            }
        }
    })
    const contentRef = useRef([]);
    const tabsRef = useRef([]);
    const contentsSchedulesRef = useRef(null);
    const mainContainerRef = useRef(null);
    const morningTimeRefs = useRef(null);
    const afternoonTimeRef = useRef(null);
    const eveningTimeRef = useRef(null);

    const { handleClick } = UseScheduleManager(contentRef.current, tabsRef.current);
    const { handleDateChange, handleDateRemove, handleEmergencyTimeChange, handleTitleChange } = schedulesHandles(setFormData)
    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = {
            ...formData
        };
        axios.post('http://localhost:8000/users', dataToSend, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log('Success:', response.data);
            })
            .catch(error => {
                console.error('Error: ', error);
            })
    }

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userData = await getUserData();
                const id = userData.id;
                setFormData((prevFormData) => ({
                    ...prevFormData,
                    id_veterinarian: id.toString()
                }))
                console.log(id);
            } catch (error) {
                console.error('error data:', error);
            }
        }
        fetchUser();
    }, [])


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
        <div className="pt-3">
            {/* <button id="showModal" onClick={() => handleClickShowData(mainContainerRef.current, contentsSchedulesRef.current)} >llenar data</button> */}
            <h3 className="font-alata text-menuColor-3 text-center text-xl">Eliga su disponibilidad horaria de atencion</h3>
            <form
                className="flex flex-col mt-5 items-center  m-auto max-w-72 pb-20"
                onSubmit={handleSubmit}
            >
                <div id="shedules" ref={contentsSchedulesRef} className=" flex flex-col items-center w-full">
                    <input
                        type="text"
                        name="title"
                        placeholder="Titulo"
                        value={formData.title} onChange={handleTitleChange}
                        className="w-full rounded p-1  bg-transparent border-slate-400 border-1"
                    />
                    <h3 className="mt-3 ">Horario de Emergencias</h3>
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
                        {formData.availability.configurations.consult.selectedDays.map((date, i) => (
                            <li key={i}>
                                {date}
                                <button type="button" onClick={() => handleDateRemove(date)} >delete</button>
                            </li>
                        ))}
                    </ul>
                    <br />
                    <div className="shedulesLeyends flex flex-row justify-around w-full">
                        <div className="shedule text-center active " ref={el => tabsRef.current[0] = el} onClick={handleClick} >Morning</div>
                        <div className="shedule text-center " ref={el => tabsRef.current[1] = el} onClick={handleClick}>Afternoon</div>
                        <div className="shedule text-center " ref={el => tabsRef.current[2] = el} onClick={handleClick}>Evening</div>
                    </div>
                    <div className="shedulesContents flex">
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
                <PrimaryButton type="submit" >Enviar</PrimaryButton>
            </form>
        </div>
    )
}
export default ScheduleManagementVet;
