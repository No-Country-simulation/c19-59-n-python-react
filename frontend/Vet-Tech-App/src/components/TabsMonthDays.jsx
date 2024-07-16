import UseMonthsAndDaysSchedule from "../hooks/UseMonthsAndDaysSchedule"

export const TabsMonthDays = ({ items, preselected, idx }) => {
    const { containerRef, renderMainCheckbox, renderMonthCheckboxes } = UseMonthsAndDaysSchedule({
        preselectedMonths: preselected,
        listString: items,
        id: idx,
    })
    return (
        <div ref={containerRef} >
            {renderMainCheckbox()}
            {renderMonthCheckboxes()}
        </div>
    )
}
