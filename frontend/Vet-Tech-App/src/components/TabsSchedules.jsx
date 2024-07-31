export const TabsSchedules = (props) => {
  const { label, dataTime, paramsList, setFormData } = props;

  const handleCheckBox = (time, checked, type) => {
    setFormData((prevFormData)=>{
      const updatedAvailability = prevFormData.availability.map(avail =>{
        if(avail.consult){
          return {
            ...avail,
            consult:{
              ...avail.consult,
              schedules:{
                ...avail.consult.schedules,
                [type]:checked
                  ? [...avail.consult.schedules[type],time]
                  :avail.consult.schedules[type].filter(t=> t !== time)
              }
            }
          }
        }
        return avail;
      });
      return {
        ...prevFormData,
        availability:updatedAvailability
      }
    })
    /* if (checked) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        availability: {
          ...prevFormData.availability,
          consult: {
            ...prevFormData.availability.consult,
            schedules: {
              ...prevFormData.availability.consult.schedules,
              [type]: [...prevFormData.availability.consult.schedules[type], time]
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
          consult: {
            ...prevFormData.availability.consult,
            schedules: {
              ...prevFormData.availability.consult.schedules,
              [type]: prevFormData.availability.consult.schedules[type].filter(t => t !== time)
            }
          }
        }
      }))
      console.log(checked);
    } */
  }
  return (
    <article
      key={dataTime}
      className="timeCheckbox  m-1 w-20" >
      <div className="border-1   border-slate-400 rounded ">
        <input
          type="checkbox"
          className="peer opacity-0 absolute"
          name={paramsList.CheckboxName}
          data-time={dataTime}
          onChange={(e) => handleCheckBox(dataTime, e.target.checked, paramsList.type)}
        />
        <span className="peer-checked:text-white peer-checked:font-semibold px-3 py-2 peer-checked:bg-menuColor-3 block w-full text-center cursor-pointer">{label}</span>
      </div>
    </article>
  )
}
