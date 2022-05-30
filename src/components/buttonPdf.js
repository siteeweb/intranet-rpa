import React from 'react';
import { Link } from "react-router-dom";


const ButtonPdf = (props) => {
  return (
    <Link
      exact to={props.url}
      target="_blank"
      className="btn btn-rpa">
        {props.content}
    </Link>
  );
}

export default ButtonPdf;