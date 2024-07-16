import { useRef,useState } from "react";

const UseMonthsAndDaysSchedule=({preselected=[],listString,id})=>{
    const months = listString.split(",");
    const [selections, setSelections] = useState(preselected);
    const [showOptions, setShowOptions] = useState(preselected.length > 0);
    const containerRef = useRef(null);

    const handleMainCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setShowOptions(isChecked);
        if (!isChecked) {
            setSelections([]);
            console.log("lista checked false");
        } 

    };

    const handleCheckboxChange = (month, isChecked) => {
        setSelections((prevSelections) => {
            if (isChecked) {
                console.log("checked true");
                return [...prevSelections, month];
            } else {
                console.log("checked false");
                return prevSelections.filter((t) => t !== month);
            }
        })
    };

    const getNumberMonth = (m) => {
        m = m.toUpperCase();
        const monthsMap = {};
        months.forEach((month, idx) => (monthsMap[month] = (idx + 1).toString().padStart(2, "0")));
        return monthsMap[m] || false;
    };
    const renderMainCheckbox = () => (
        <div className="mainCheckbox">
            <input
                type="checkbox"
                id={`toggleAll${id}`}
                checked={showOptions}
                onChange={handleMainCheckboxChange}
            />
            <label htmlFor="toggleAllMonths">Apply the same schedule for these months</label>
        </div>
    );

    const renderMonthCheckboxes = () => (
        showOptions && (
            <div className="optionsContainer" style={{ display: 'table-row-group' }}>
                {
                    months.map((month) => (
                        <article key={month} className="monthCheckbox">
                            <div>
                                <input
                                    type="checkbox"
                                    name="monthCheckbox"
                                    data-month={getNumberMonth(month)}
                                    checked={selections.includes(month)}
                                    onChange={(e) => handleCheckboxChange(month, e.target.checked)}
                                />
                                <span>{month}</span>
                            </div>
                        </article>
                    ))
                }
            </div>
        )
    );
    return {
        containerRef,
        renderMainCheckbox,
        renderMonthCheckboxes,
        selections,
    };
}
export default UseMonthsAndDaysSchedule;