import './index.css'
import DayItem from '../DayItem'
import DateItem from '../DateItem'

const MonthCalender = props => {
  const {initialDatesList, daysList, onClickDate} = props

  return (
    <div className="cal-bg-col">
      <div className="dates-card">
        <h1 className="month-heading">January</h1>
        <ul className="days-list-card">
          {daysList.map(each => (
            <DayItem dayItem={each} key={each.id} />
          ))}
        </ul>
        <ul className="date-list-card">
          {initialDatesList.map(each => (
            <DateItem dateItem={each} key={each.id} onClickDate={onClickDate} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default MonthCalender
