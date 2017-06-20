import React, {Component} from 'react'
import Result from './Result'

class GoogleMap extends Component {
    state = {
        results: [],
        placeName: ''
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
        this.setState({placeName: props.placeName})
        console.log(props)
        fetch(
            `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${props.lat},${props.long}&radius=50000&name=Dierbergs&key=AIzaSyBKm2Xp9Gan7Hhgc5OAeAtOKbZ6C6gcuH8`
        ).then(response => response.json()).then(map => this.setState({results: map.results}))
    }
    render () {
        return (
            <div>
                <h2>Dierbergs near {this.state.placeName}</h2>
                {(this.state.results.length > 0) ? <ul id="results">
                    { this.state.results.map((result, i) => 
                        <Result key={i} result={result.vicinity} />
                    ) }
                </ul> : <p>None. Sorry.</p>}
                
            </div>
        )
    }
}

export default GoogleMap