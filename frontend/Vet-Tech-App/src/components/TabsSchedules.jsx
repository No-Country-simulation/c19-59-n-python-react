export const TabsSchedules = (props) => {
  const { label, dataTime, paramsList, timeSchedule } = props;
  return (
    <article key={dataTime} className="timeCheckbox" >
      <div>
        <input
          type="checkbox"
          name={paramsList.CheckboxName}
          data-time={dataTime}
          onChange={(e) => timeSchedule.handleCheckBoxChange(dataTime, e.target.checked, paramsList.Type)}
        />
        <span>{label}</span>
      </div>
    </article>
  )
}
