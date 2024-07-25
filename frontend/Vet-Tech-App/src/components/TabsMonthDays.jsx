import useMonthsAndDaysSchedule from "../hooks/UseMonthsAndDaysSchedule";
import { useRef } from "react";
const TabsMonthDays = ({ items, preselected, idx, setFormData }) => {
    const monthsAndDays = items.split(",")
    const containerRef = useRef();
    const {showOptions,getNumberMonth,handleCheckboxChange,handleMainCheckboxChange } = useMonthsAndDaysSchedule({
        preselectedMonths: preselected,
        listString: monthsAndDays,
        id: idx,
        setFormData: setFormData
    })
    
    return (
        <div ref={containerRef} >
            <div className="mainCheckbox">
                <input
                    type="checkbox"
                    id={`toggleAll${idx}`}
                    checked={showOptions}
                    onChange={handleMainCheckboxChange}
                />
                <label htmlFor="toggleAllMonths">Apply the same schedule for these months</label>
            </div>
            {
                showOptions && (
                    <div className="optionsContainer flex flex-wrap justify-between" >
                        {
                            monthsAndDays.map((month) => (
                                <article key={month} className="monthCheckbox m-1 w-20 text-center">
                                    <div className="border-1 border-slate-400 rounded px-3 py-2">
                                        <input
                                            type="checkbox"
                                            name="monthCheckbox"
                                            /* className="peer hidden" */
                                            data-month={getNumberMonth(month)}
                                            onChange={(e) => handleCheckboxChange(month, e.target.checked)}
                                            
                                        />
                                        <span>{month}</span>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                )
            }
            
        </div>
    )
}
export default TabsMonthDays;