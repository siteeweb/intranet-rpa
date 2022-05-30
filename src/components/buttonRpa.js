import React from 'react';
import { Link } from "react-router-dom";

const ButtonRpa = (props) => {
  return (
    <Link
      exact to={props.url}
      className="btn btn-rpa">
        {props.content}
    </Link>
  );
}

export default ButtonRpa;