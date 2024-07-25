import { TabsSchedules } from "./TabsSchedules";

const ContainerSchedules = (props) => {
    const { paramsList,timeSchedule,contentRef,timeRef,id,formData,setFormData } =props;

    const listTimeSchedule= timeSchedule.generateTimeRange();

    return (
        <div className="sheduleContent" ref={ contentRef}>
            <div id={id} ref={timeRef} className="flex flex-wrap justify-between" >
                {
                    listTimeSchedule.map(({ label, dataTime },i) => 
                        <TabsSchedules 
                            label={label} 
                            dataTime={dataTime} 
                            paramsList={paramsList}  
                            timeSchedule={timeSchedule} 
                            key={i}
                            formData={formData}
                            setFormData={setFormData}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ContainerSchedules