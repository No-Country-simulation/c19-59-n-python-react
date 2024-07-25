export const TabsSchedules = (props) => {
  const { label, dataTime, paramsList, setFormData } = props;

  const handleCheckBox = (time, checked, type) => {
    if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        availability: {
          ...prevFormData.availability,
          configurations: {
            ...prevFormData.availability.configurations,
            consult: {
              ...prevFormData.availability.configurations.consult,
              schedules: {
                ...prevFormData.availability.configurations.consult.schedules,
                [type]: [...prevFormData.availability.configurations.consult.schedules[type], time]
              }
            }
          }
        }
      }));
      console.log(checked);
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        availability: {
          ...prevFormData.availability,
          configurations: {
            ...prevFormData.availability.configurations,
            consult: {
              ...prevFormData.availability.configurations.consult,
              schedules: {
                ...prevFormData.availability.configurations.consult.schedules,
                [type]: prevFormData.availability.configurations.consult.schedules[type].filter(t => t !== time)
              }
            }
          }
        }
      }))
      console.log(checked);
    }
  }
  return (
    <article
      key={dataTime}
      className="timeCheckbox  m-1 w-20" >
      <div className="border-1 border-slate-400 rounded px-3 py-2">
        <input
          type="checkbox"
          /* className="peer hidden" */
          name={paramsList.CheckboxName}
          data-time={dataTime}
          onChange={(e) => handleCheckBox(dataTime, e.target.checked, paramsList.type)}
        />
        <span>{label}</span>
      </div>
    </article>
  )
}
