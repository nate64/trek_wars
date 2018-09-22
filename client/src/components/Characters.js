import React from 'react';
import StarwarsCharacters from './StarwarsCharacters';
import StartrekCharacters from './StartrekCharacters';
import {
  Button,
  Segment,
} from 'semantic-ui-react';

class Characters extends React.Component {
  state = { starwars: true }

  toggleNerds = () => {
    this.setState({ starwars: !this.state.starwars })
  }

  render() {
    if (this.state.starwars)
      return(
        <Segment>
          <Button onClick={this.toggleNerds}>Toggle Star Trek</Button>
          <StarwarsCharacters />
        </Segment>
      )
    else
      return(
        <Segment>
          <Button onClick={this.toggleNerds}>Toggle Star Wars</Button>
          <StartrekCharacters />
        </Segment>
      )
  }
}

export default Characters;

