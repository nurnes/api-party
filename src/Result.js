import React, {Component} from 'react'

class Result extends Component{
    state = {
        res: this.props.result
    }
    componentWillReceiveProps(nextProps){
        this.setState({res: nextProps.result})
    }
    render(){
        return (
            <li>
                {this.state.res}
            </li>
        )
    }
}

export default Result