import { TabsSchedules } from "./TabsSchedules";

const ContainerSchedules = (props) => {
    const { paramsList, timeSchedule, contentRef, timeRef, id } = props;
    return (
        <div className="sheduleContent" ref={contentRef}>
            <div id={id} ref={timeRef} >
                {
                    timeSchedule.generateTimeRange().map(({ label, dataTime }, i) =>
                        <TabsSchedules
                            label={label}
                            dataTime={dataTime}
                            paramsList={paramsList}
                            timeSchedule={timeSchedule}
                            key={i}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default ContainerSchedules