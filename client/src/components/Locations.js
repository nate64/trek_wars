import React from 'react';
import StarwarsLocations from './Starwarslocations';
import StartrekLocations from './Startreklocations';
import {
  Button,
  Segment,
} from 'semantic-ui-react';

class Locations extends React.Component {
  state = { starwars: true }

  toggleNerds = () => {
    this.setState({ starwars: !this.state.starwars })
  }

  render() {
    if (this.state.starwars)
      return(
        <Segment>
          <Button onClick={this.toggleNerds}>Toggle Star Trek</Button>
          <StarwarsLocations />
        </Segment>
      )
    else
      return(
        <Segment>
          <Button onClick={this.toggleNerds}>Toggle Star Wars</Button>
          <StartrekLocations />
        </Segment>
      )
  }
}

export default Locations;

