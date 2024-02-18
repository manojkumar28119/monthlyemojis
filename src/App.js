import {Component} from 'react'

import './App.css'
import MonthCalender from './components/MonthCalender'
import EmojiItem from './components/EmojiItem'

// These are the lists used in the application. You can move them to any component needed.
const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

const daysList = [
  {
    id: '3639dd44-a5d5-11ec-b909-0242ac120002',
    day: 'Sun',
  },
  {
    id: '3639e17c-a5d5-11ec-b909-0242ac120002',
    day: 'Mon',
  },
  {
    id: '3639e37a-a5d5-11ec-b909-0242ac120002',
    day: 'Tue',
  },
  {
    id: '3639e532-a5d5-11ec-b909-0242ac120002',
    day: 'Wed',
  },
  {
    id: '3639e8c0-a5d5-11ec-b909-0242ac120002',
    day: 'Thu',
  },
  {
    id: '3639ea32-a5d5-11ec-b909-0242ac120002',
    day: 'Fri',
  },
  {
    id: '3639eb90-a5d5-11ec-b909-0242ac120002',
    day: 'Sat',
  },
]

const initialDatesList = [
  {
    id: '380e6b12-a454-11ec-b909-0242ac120002',
    date: '01',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6cac-a454-11ec-b909-0242ac120002',
    date: '02',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6de2-a454-11ec-b909-0242ac120002',
    date: '03',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e6efa-a454-11ec-b909-0242ac120002',
    date: '04',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7012-a454-11ec-b909-0242ac120002',
    date: '05',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e712a-a454-11ec-b909-0242ac120002',
    date: '06',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7454-a454-11ec-b909-0242ac120002',
    date: '07',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7576-a454-11ec-b909-0242ac120002',
    date: '08',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e768e-a454-11ec-b909-0242ac120002',
    date: '09',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e77a6-a454-11ec-b909-0242ac120002',
    date: '10',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e78b4-a454-11ec-b909-0242ac120002',
    date: '11',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e79d6-a454-11ec-b909-0242ac120002',
    date: '12',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7aee-a454-11ec-b909-0242ac120002',
    date: '13',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7c06-a454-11ec-b909-0242ac120002',
    date: '14',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7ec2-a454-11ec-b909-0242ac120002',
    date: '15',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e7fda-a454-11ec-b909-0242ac120002',
    date: '16',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e80e8-a454-11ec-b909-0242ac120002',
    date: '17',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8282-a454-11ec-b909-0242ac120002',
    date: '18',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e83e0-a454-11ec-b909-0242ac120002',
    date: '19',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8516-a454-11ec-b909-0242ac120002',
    date: '20',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8638-a454-11ec-b909-0242ac120002',
    date: '21',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e88cc-a454-11ec-b909-0242ac120002',
    date: '22',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e89f8-a454-11ec-b909-0242ac120002',
    date: '23',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8b1a-a454-11ec-b909-0242ac120002',
    date: '24',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8c32-a454-11ec-b909-0242ac120002',
    date: '25',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8d40-a454-11ec-b909-0242ac120002',
    date: '26',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8e4e-a454-11ec-b909-0242ac120002',
    date: '27',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e8f70-a454-11ec-b909-0242ac120002',
    date: '28',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e90e2-a454-11ec-b909-0242ac120002',
    date: '29',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e94de-a454-11ec-b909-0242ac120002',
    date: '30',
    emojiUrl: '',
    emojiName: '',
  },
  {
    id: '380e96be-a454-11ec-b909-0242ac120002',
    date: '31',
    emojiUrl: '',
    emojiName: '',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeEmoji: emojisList[0].id,
    activeDay: daysList[0].day,
    datesList: initialDatesList,
    activeEmojiOption: emojisList[0].emojiName,
    count: 0,
  }

  onChangeActiveEmoji = id => {
    this.setState({activeEmoji: id}, this.onClickDate())
  }

  onClickDate = id => {
    const {activeEmoji} = this.state

    const activeEmojiData = emojisList.filter(each => each.id === activeEmoji)
    console.log(activeEmojiData)
    const {emojiUrl, emojiName} = activeEmojiData[0]

    this.setState(prevState => ({
      datesList: prevState.datesList.map(each => {
        if (each.id === id) {
          const imageUrl = each.emojiUrl !== emojiUrl ? emojiUrl : ''
          return {
            id: each.id,
            date: each.date,
            emojiUrl: imageUrl,
            emojiName,
          }
        }
        return each
      }),
    }))
  }

  onChangeEmojiOption = event => {
    this.setState({activeEmojiOption: event.target.value})
  }

  renderCountValue = () => {
    const {activeDay, datesList} = this.state
    console.log(activeDay)

    const dates = datesList.map(each => parseInt(each.date))

    let startingDate

    if (activeDay === 'Sun') {
      startingDate = 1
    } else if (activeDay === 'Mon') {
      startingDate = 2
    } else if (activeDay === 'Tue') {
      startingDate = 3
    } else if (activeDay === 'Wed') {
      startingDate = 4
    } else if (activeDay === 'Thu') {
      startingDate = 5
    } else if (activeDay === 'Fri') {
      startingDate = 6
    } else {
      startingDate = 7
    }

    let arr = []

    for (let index = 0; index < daysList.length; index + 1) {
      startingDate += 7
      arr += startingDate
    }

    console.log(arr)
  }

  onChangeDay = event => {
    this.setState({activeDay: event.target.value})
  }

  render() {
    const {
      activeEmoji,
      activeDay,
      datesList,
      activeEmojiOption,
      count,
    } = this.state

    console.log(activeDay)
    this.renderCountValue()

    return (
      <div className="bg-img">
        <h1 className="heading">Monthly Emojis</h1>
        <div className="monthly-emojis-card">
          <MonthCalender
            daysList={daysList}
            onClickDate={this.onClickDate}
            initialDatesList={datesList}
          />
          <div className="main-card-emojis">
            <ul className="emojis-card">
              {emojisList.map(each => (
                <EmojiItem
                  item={each}
                  isActive={activeEmoji === each.id}
                  key={each.id}
                  onChangeActiveEmoji={this.onChangeActiveEmoji}
                />
              ))}
            </ul>
            <div className="date-emojis-count-card">
              <div className="select-options-card">
                <select
                  className="select-option"
                  onChange={this.onChangeEmojiOption}
                  value={activeEmojiOption}
                >
                  {emojisList.map(each => (
                    <option value={each.emojiName} key={each.id}>
                      {each.emojiName}
                    </option>
                  ))}
                </select>
                <select
                  className="select-option"
                  value={activeDay}
                  onChange={this.onChangeDay}
                >
                  {daysList.map(each => (
                    <option value={each.day} key={each.id}>
                      {each.day}
                    </option>
                  ))}
                </select>
              </div>
              <h1 className="emojis-count">{count}</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
