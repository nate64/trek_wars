import React from 'react'; 
import {
  List,
  Button,
  Input,
} from 'semantic-ui-react';
//import axios from 'axios';
import { deleteLocation, updateLocation } from '../reducers/locations';
import { connect } from 'react-redux';

class Location extends React.Component {
  state = { editing: false, name: this.props.location.name }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  cancelEdit = () => {
    this.setState({ editing: false, name: this.props.location.name})
  }

  editLocation = () => {
    const { dispatch } = this.props
    let id = this.props.location.id
    let location = { name: this.state.name }
    dispatch(updateLocation(location, id));
    this.toggleEdit();

//    axios.put(`/api/locations/${id}`, { location: { name: this.state.name } })
//      .then( res => {
//        this.setState({name: res.data.name})
//        this.toggleEdit()
//      })
//      .catch( err => {
//        console.log(err)
//      })
  }

  deleteLocation = () => {
    const { dispatch } = this.props;
    let id = this.props.location.id
    dispatch(deleteLocation(id))
    this.toggleEdit();
//    axios.delete(`/api/locations/${id}`, { location: { name: this.state.name } })
//      .then( res => {
//        this.toggleEdit()
//        this.props.resetLocations(id)
//      })
//      .catch( err => {
//        console.log(err)
//      })
  }

  render() {
    if(this.state.editing)
      return(
        <List.Item as='h3'>
          <Input type='text' defaultValue={this.state.name} onChange={this.handleChange} />
          <Button onClick={this.cancelEdit}>Cancel</Button>
          <Button primary onClick={this.editLocation}>Save</Button>
          <Button color="red" onClick={this.deleteLocation}>Delete</Button>
        </List.Item>
      )
    return(
      <List.Item as='h3' onClick={this.toggleEdit}>
        {this.state.name}
      </List.Item>
    )
  }
}

export default connect()(Location);

