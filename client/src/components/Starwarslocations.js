import React from 'react'
import {
  Header,
  Segment,
  List,
  Image,
} from 'semantic-ui-react';
import axios from 'axios';
import StarwarsLogo from '../images/starwarslogo.png';
import Location from './Location';
import { fetchLocations } from '../reducers/locations';
import { connect } from 'react-redux';

class StarwarsLocations extends React.Component {
  state = { locations: [] }

  componentDidMount() {
    // const { dispatch } = this.props
    // dispatch(fetchLocations("starwars"))
   axios.get('/api/locations?nerd_type=starwars')
     .then( res => {
       this.setState({ locations: res.data })
     })
     .catch( err => {
       console.log(err)
     })
  }

//  resetLocationLocationState = (id) => {
//    const { locations } = this.state
//    this.setState({
//      locations: locations.filter(c => c.id !== id)
//    })
//  }

  displayLocations = () => {
//    return this.props.locations.map( location => {
    return this.state.locations.map( location => {
      return(
        <Location location={location} resetLocations={this.resetLocationState} />
      )
    })
  }

  render() {
    return(
      <Segment>
        <Header as='h2'>Star Wars</Header>
        <Image src={StarwarsLogo} size="small" />
        <List bulleted>
          { this.displayLocations() }
        </List>
      </Segment>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     locations: state.locations,
//   }
// }

export default StarwarsLocations;
//export default connect(mapStateToProps)(StarwarsLocations);

