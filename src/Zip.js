import React, {Component} from 'react'
import GoogleMap from './GoogleMap'

class Zip extends Component {
    state = {
        placeName: '',
        longitude: '',
        latitude: '',
        state: ''
    }

    componentWillMount = () => {
        this.fetchMap(this.props)
    }

    componentWillReceiveProps(nextProps){
        const locationChanged = nextProps.location !== this.props.location;
        if(locationChanged){
            this.fetchMap(nextProps)
        }
    }

  setZip(zip){
        this.setState({placeName: zip.places[0]['place name'], longitude: zip.places[0].longitude, latitude: zip.places[0].latitude, state: zip.places[0].state})
        console.log(this.state.latitude)
        console.log(this.state.longitude)
        
    }
    
    fetchMap(props){
        console.log(props.match.params)
        fetch(`http://api.zippopotam.us/us/${props.match.params.zipCode}`).then(response => response.json()).then(zip => this.setZip(zip)).catch(err => alert("Please enter a valid US zipcode."))
    }

    render() {
        return (
        <div>
            {(this.state.latitude !== '') ? <GoogleMap lat={this.state.latitude} long={this.state.longitude} placeName={this.state.placeName}/> : null}
        </div>
        )
    }
    
}

export default Zip