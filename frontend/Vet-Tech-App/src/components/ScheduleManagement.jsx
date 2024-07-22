import { useRef } from "react";
import UseTimeScheduleSelector from "../hooks/UseTimeSchedulesSelector";
import UseScheduleManager from "../hooks/UseScheduleManager";
import ContainerSchedules from "./ContainerSchedules";
import { TabsMonthDays } from "./TabsMonthDays";
const ScheduleManagement = () => {
    const contentRef = useRef([]);
    const tabsRef = useRef([]);
    const contentsSchedulesRef = useRef(null);
    const mainContainerRef = useRef(null);

    const { handleClick, handleClickShowData } = UseScheduleManager(
        contentRef.current,
        tabsRef.current
    );

    const morningTimeRefs = useRef(null);
    const afternoonTimeRef = useRef(null);
    const eveningTimeRef = useRef(null);

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

    return (
        <>
            <button id="showModal" onClick={()=>handleClickShowData(mainContainerRef.current,contentsSchedulesRef.current)}>Llenar Data</button>
            <div id="shedules" ref={contentsSchedulesRef} className="hide">
                <div className="shedulesLeyends">
                    <div className="shedule active" ref={el => tabsRef.current[0] = el} onClick={handleClick} >Morning</div>
                    <div className="shedule" ref={el => tabsRef.current[1] = el} onClick={handleClick}>Afternoon</div>
                    <div className="shedule" ref={el => tabsRef.current[2] = el} onClick={handleClick}>Evening</div>
                </div>
                <div className="shedulesContents">
                    <ContainerSchedules
                        paramsList={morningParams}
                        timeSchedule={morningSchedule}
                        contentRef={el => contentRef.current[0] = el}
                        timeRef={morningTimeRefs}
                        id="morningTime"
                    />
                    <ContainerSchedules
                        paramsList={afternoonParams}
                        timeSchedule={afternoonSchedule}
                        contentRef={el => contentRef.current[1] = el}
                        timeRef={afternoonTimeRef}
                        id="afternoonTime"
                    />
                    <ContainerSchedules
                        paramsList={eveningParams}
                        timeSchedule={eveningSchedule}
                        contentRef={el => contentRef.current[2] = el}
                        timeRef={eveningTimeRef}
                        id="eveningTime"
                    />
                </div>
            </div>
            <div className="main_container hide" ref={mainContainerRef} >
                <TabsMonthDays items="JAN,FEB,MAR,APR,MAY,JUN,JUL,AUG,SEP,OCT,NOV,DEC" preselected={['JAN', 'FEB']} idx='Month' /><br />

                <TabsMonthDays items="MO,TU,WE,TH,FR,SA,SU" preselected={["MO", 'WE', 'FR']} idx='Day' />
            </div>
        </>
    )
}
export default ScheduleManagement;