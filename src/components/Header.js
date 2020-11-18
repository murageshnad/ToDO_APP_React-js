import React, { Component } from "react";
import { withStyles, AppBar } from "@material-ui/core";
import PropTypes from "prop-types";

import Styles from "../style/Styles";

class Header extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static" className={classes.appBar}>
        <div className={classes.logo}>
         <h1>Todo App</h1>
        </div>
      </AppBar>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(Styles)(Header);
