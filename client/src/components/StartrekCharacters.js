import React from 'react' 
import {
  Header,
  Segment,
  List, 
  Image,
} from 'semantic-ui-react';
import axios from 'axios';
import Startreklogo from '../images/treklogo.png';
import Character from './Character'; 
import { fetchCharacters } from '../reducers/characters';
import { connect } from 'react-redux';

class StartrekCharacters extends React.Component {
  state = { characters: [] }

  componentDidMount() {
    // const { dispatch } = this.props
    // dispatch(fetchCharacters("startrek"))
    axios.get('/api/characters?nerd_type=startrek')
     .then( res => {
       this.setState({ characters: res.data })
     })
     .catch( err => {
       console.log(err)
     })
  }

//    resetCharacterState = (id) => {
//    const { characters } = this.state
//    this.setState({
//      characters: characters.filter(c => c.id !== id)
//    })
//  }

  displayCharacters = () => {
    //    return this.state.characters.map( character => {
    return this.state.characters.map( character => {
      return(
        <Character character={character} resetCharacters={this.resetCharacterState} />
      )
    })
  }

  render() {
    return(
      <Segment>
        <Header as='h2'>Star Trek</Header>
        <Image src={Startreklogo} /> 
        <List bulleted>
          { this.displayCharacters() }
        </List>
      </Segment>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     characters: state.characters,
//   }
// }

export default StartrekCharacters;
//redux
//export default connect(mapStateToProps)(StartrekCharacters)
