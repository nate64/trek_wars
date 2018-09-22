import React from 'react'; 
import {
  List,
  Button,
  Input,
} from 'semantic-ui-react';
//import axios from 'axios';
import { deleteCharacter, updateCharacter } from '../reducers/characters';
import { connect } from 'react-redux';

class Character extends React.Component {
  state = { editing: false, name: this.props.character.name }

  toggleEdit = () => {
    this.setState({ editing: !this.state.editing })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  cancelEdit = () => {
    this.setState({ editing: false, name: this.props.character.name})
  }

  editCharacter = () => {
    const { dispatch } = this.props
    let id = this.props.character.id
    let character = { name: this.state.name }
    dispatch(updateCharacter(character, id));
    this.toggleEdit();

//    axios.put(`/api/characters/${id}`, { character: { name: this.state.name } })
//      .then( res => {
//        this.setState({name: res.data.name})
//        this.toggleEdit()
//      })
//      .catch( err => {
//        console.log(err)
//      })
  }

  deleteCharacter = () => {
    const { dispatch } = this.props;
    let id = this.props.character.id
    dispatch(deleteCharacter(id))
    this.toggleEdit();
//    axios.delete(`/api/characters/${id}`, { character: { name: this.state.name } })
//      .then( res => {
//        this.toggleEdit()
//        this.props.resetCharacters(id)
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
          <Button primary onClick={this.editCharacter}>Save</Button>
          <Button color="red" onClick={this.deleteCharacter}>Delete</Button>
        </List.Item>
      )
    return(
      <List.Item as='h3' onClick={this.toggleEdit}>
        {this.state.name}
      </List.Item>
    )
  }
}

export default connect()(Character);

