import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import './Homework.css'
import Zip from './Zip'

class Homework extends Component {
  state = {
    zipCode: ''
  }

  handleChange = (ev) => {
        const zipCode = ev.currentTarget.value
        this.setState({ zipCode })
    }
  
  handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/dierbergs/${this.state.zipCode}`)
    }
  
  render() {
    return (
      <div className="homework">
                  <img src="https://upload.wikimedia.org/wikipedia/en/e/e6/Dierbergs-Logo.jpg" alt="Dierbergs logo" />
                  <form onSubmit={this.handleSubmit}>
                      <input type="text" placeholder="Hint: 63017" value={this.state.zipCode} onChange={this.handleChange} />
                      <button type="submit">Search Zip Code</button>
                  </form>
                  <Route exact path='/dierbergs' render={() => <h3>Please enter a zip code in the United States. </h3>} />
                  <Route path='/dierbergs/:zipCode' component={Zip} />
              </div>
    )
  }
}

export default Homework

