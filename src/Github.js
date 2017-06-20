import React, {Component} from 'react'
import './Github.css'
import {Route} from 'react-router-dom'

class Github extends Component {
    state = {
        username: ''
    }

    handleChange = (ev) => {
        const username = ev.currentTarget.value
        this.setState({ username })
    }

    render() {
        return (
            <div className="github">
                <img src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="GitHub logo" className="github-logo" />
                <form>
                    <input type="text" value={this.state.username} onChange={this.handleChange} />
                    <button type="submit">Look up Github user</button>
                </form>
                <Route exact path='/github' render={() => <h3>Please enter a username to search on GitHub</h3>} />
            </div>
        )
    }
}

export default Github