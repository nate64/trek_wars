import React from 'react' 
import {
  Header,
  Segment,
  List, 
  Image,
} from 'semantic-ui-react';
//import axios from 'axios';
import Startreklogo from '../images/treklogo.png';
import Location from './Location'; 
import { fetchLocations } from '../reducers/locations';
import { connect } from 'react-redux';

class StartrekLocations extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchLocations("startrek"))
    // axios.get('/api/locations?nerd_type=startrek')
    //  .then( res => {
    //    this.setState({ locations: res.data })
    //  })
    //  .catch( err => {
    //    console.log(err)
    //  })
  }

//    resetLocationState = (id) => {
//    const { locations } = this.state
//    this.setState({
//      locations: locations.filter(c => c.id !== id)
//    })
//  }

  displayLocations = () => {
    //    return this.state.locations.map( location => {
    return this.props.locations.map( location => {
      return(
        <Location Location={location} resetLocations={this.resetLocationState} />
      )
    })
  }

  render() {
    return(
      <Segment>
        <Header as='h2'>Star Trek</Header>
        <Image src={Startreklogo} /> 
        <List bulleted>
          { this.displayLocations() }
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
  }
}

export default connect(mapStateToProps)(StartrekLocations);

