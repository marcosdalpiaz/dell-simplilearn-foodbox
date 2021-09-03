import React from 'react';
import { Typography, Divider } from '@material-ui/core';
const axios = require('axios').default;

class RestaurantHome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant : undefined
    }
    this.getRestaurant = this.getRestaurant.bind(this);
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant() {
    let restaurantId = this.props.currentUser.id;
    axios.get("/api/restaurant/" + restaurantId).then(
      response => {
        this.setState({restaurant : response.data});
      }
    ).catch(err => console.log(err));
  }

  render() {
    return this.state.restaurant ? (
      <div>
        <Typography paragraph variant="h5">Welcome to Foodbox!</Typography>
        <Divider />
        <br />
        <div>Restaurant Status : 
        {this.state.restaurant.information !== null ? <Typography color="primary">Open</Typography> : <Typography color="error">Close</Typography>}
        </div>
      </div>
    ) : <div />;
  }
}

export default RestaurantHome;