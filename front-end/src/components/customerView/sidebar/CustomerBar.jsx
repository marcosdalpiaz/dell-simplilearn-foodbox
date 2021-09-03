import React from 'react';
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  Divider
}
from '@material-ui/core';

class CustomerBar extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h3><b><i>Customer Navegation</i></b></h3>
        <br />
        <List component="nav">
          <Link to={"/customer/home"} className="link">
            <ListItem>
              <ListItemText primary={"Main Page"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/customer/cart"} className="link">
            <ListItem>
              <ListItemText primary={"My Cart"} />
            </ListItem>
            <Divider />
          </Link>
          <Link to={"/customer/orders"} className="link">
            <ListItem>
              <ListItemText primary={"My Orders"} />
            </ListItem>
            <Divider />
          </Link>          
        </List>
      </div>
    );
  }
}

export default CustomerBar;