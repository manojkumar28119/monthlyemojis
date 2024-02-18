import './index.css'

const EmojiItem = props => {
  const {item, isActive, onChangeActiveEmoji} = props
  const {emojiName, emojiUrl, id} = item

  const imageClassName = isActive && 'active-image'

  const onClickEmoji = () => {
    onChangeActiveEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <p className="emoji-name">{emojiName}</p>
        <img
          className={`emojiImg ${imageClassName}`}
          src={emojiUrl}
          alt={emojiName}
        />
      </button>
    </li>
  )
}

export default EmojiItem
