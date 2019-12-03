import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { NavLink as RouteNavLink } from "react-router-dom";
import {  NavLink, Button, Col } from "shards-react";

const NavButton = ({ item, className }) => {
  const classes = classNames(
    className,
  );
  return (
    <Col xs="12" sm="8" className={classes}>
      <NavLink tag={RouteNavLink} to={item.to}>
        <Button outline theme="accent" size="sm">
            <i className="material-icons">add</i> {item.title && <span>{item.title}</span>}
        </Button>
      </NavLink>
    </Col>
  )
}

NavButton.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default NavButton;
