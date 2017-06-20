import React, {Component} from 'react'
import './Github.css'

class Github extends Component {
    render() {
        return (
            <div className="github">
                <img src="http://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png" alt="GitHub logo" className="github-logo" />
                <form>
                    <input type="text" />
                    <button type="submit">Look up Github user</button>
                </form>
            </div>
        )
    }
}

export default Github