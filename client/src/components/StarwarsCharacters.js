import React from 'react'
import {
  Header,
  Segment,
  List,
  Image,
} from 'semantic-ui-react';
//import axios from 'axios';
import StarwarsLogo from '../images/starwarslogo.png';
import Character from './Character';
import { fetchCharacters } from '../reducers/characters';
import { connect } from 'react-redux';

class StarwarsCharacters extends React.Component {
  state = { characters: [] }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCharacters("starwars"))
  //  axios.get('/api/characters?nerd_type=starwars')
  //    .then( res => {
  //      this.setState({ characters: res.data })
  //    })
  //    .catch( err => {
  //      console.log(err)
  //    })
  }

//  resetCharacterState = (id) => {
//    const { characters } = this.state
//    this.setState({
//      characters: characters.filter(c => c.id !== id)
//    })
//  }

  displayCharacters = () => {
//    return this.state.characters.map( character => {
    return this.props.characters.map( character => {
      return(
        <Character character={character} resetCharacters={this.resetCharacterState} />
      )
    })
  }

  render() {
    return(
      <Segment>
        <Header as='h2'>Star Wars</Header>
        <Image src={StarwarsLogo} size="small" />
        <List bulleted>
          { this.displayCharacters() }
        </List>
      </Segment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.characters,
  }
}

export default connect(mapStateToProps)(StarwarsCharacters);

