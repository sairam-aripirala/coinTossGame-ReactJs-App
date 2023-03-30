// Write your code here
import {Component} from 'react'
import './index.css'

const headsUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    coinUrl: headsUrl,
  }

  onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        coinUrl: headsUrl,
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        coinUrl: tailsUrl,
      }))
    }
  }

  render() {
    const {heads, tails, coinUrl} = this.state
    const total = heads + tails

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <div className="img-container">
            <img src={coinUrl} alt="toss result" className="image" />
          </div>
          <button className="button" type="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
