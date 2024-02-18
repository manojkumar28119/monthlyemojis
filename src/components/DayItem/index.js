import './index.css'

const DayItem = props => {
  const {dayItem} = props
  const {day} = dayItem

  return (
    <li className="day-item">
      <p>{day}</p>
    </li>
  )
}

export default DayItem
