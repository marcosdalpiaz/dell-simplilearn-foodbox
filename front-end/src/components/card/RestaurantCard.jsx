import React from 'react';
import { Link } from "react-router-dom";
import {
    Typography,
    Card,
    CardHeader,
    CardContent,
    Collapse,
    IconButton,
    Avatar,
    Grid,
    Box,
    MobileStepper,
    Button
        } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import "./Card.css";
const axios = require('axios').default;

class RestaurantCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments : undefined,
      expanded: false,
      activeStep: 0,
      maxSteps: 0
    }
    this.findComments = this.findComments.bind(this);
    this.handleExpandClick = this.handleExpandClick.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    this.findComments();
  }

  findComments() {
    axios.get("/api/restaurant/getComments/" + this.props.restaurantId).then(
      response => {
        this.setState({comments : response.data, maxSteps: response.data.length});
      }
    ).catch(err => console.log(err));
  }

  handleExpandClick() {
    this.setState({expanded : !this.state.expanded});
  }

  handleNext() {
    this.setState({activeStep: this.state.activeStep + 1});
  }

  handleBack() {
    this.setState({activeStep: this.state.activeStep - 1});
  }

  render() {
    return this.props.userId && this.props.restaurantId && this.props.restaurantInfo && this.state.comments ? (
      <Card>
        <CardHeader
          style={{backgroundColor: "#FFD700", height: "40px"}}          
          action={
            this.props.restaurantInfo.open ? (<Typography color="primary">Open</Typography>) : <Typography color="secondary">Closed</Typography>}
            titleTypographyProps={{variant:'h5'}}
            title={this.props.restaurantInfo.restaurantName}
        />
        <Link to={"/customer/restaurant/" + this.props.restaurantId} className="link">
          <img className="photoCardImage" src= {this.props.restaurantInfo.imageUrl} alt={this.props.restaurantInfo.restaurantName} />
        </Link>
        <CardContent style={{backgroundColor: "#FFD700"}}>
          <Typography variant="body1" color="textSecondary" component="p">
            <i>{this.props.restaurantInfo.description}</i>
          </Typography>
      </CardContent>         
      </Card>
    ) : <div />;
  }
}

export default RestaurantCard;