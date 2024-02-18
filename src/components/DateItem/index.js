import './index.css'

const DateItem = props => {
  const {dateItem, onClickDate} = props
  const {date, emojiUrl, emojiName, id} = dateItem

  const onClickDateBtn = () => {
    onClickDate(id)
  }

  const image = emojiUrl.length !== 0 && (
    <img src={emojiUrl} alt={emojiName} className="emoji-img" />
  )

  return (
    <li className="list-item">
      <button type="button" className="date-item" onClick={onClickDateBtn}>
        <p className="date-text">{date}</p>
        {image}
      </button>
    </li>
  )
}

export default DateItem
