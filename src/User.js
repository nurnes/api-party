import React, {Component} from 'react'

class User extends Component {
    state = {
        user: {
            avatar_url: '',
            login: '',
            followers: '',
            following: '',
            location: '',
            html_url: ''
        }
    }

    componentWillMount = () => {
        this.fetchData(this.props)
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location;
        if(locationChanged){
            this.fetchData(nextProps)
        }
    }

    fetchData(props){
        fetch(`https://api.github.com/users/${props.match.params.user}`)
            .then(response => response.json())
            .then(user => this.setState({ user }))
    }
    render () {
        const {user} = this.state
        return(
            <div>
                <img src={user.avatar_url} alt="user" />
                <h2>{user.login}</h2>
                <h3>Followers: {user.followers}</h3>
                <h3>Following: {user.following}</h3>
                <h3>Location: {user.location}</h3>
                <a href={user.html_url} target="_">Link to {user.login}'s profile</a>
            </div>
        )
    }
}

export default User