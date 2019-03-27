import React from "react";
import styled from "styled-components";

const Criteria = props => (
  <li className={props.check[0].toString()}>{props.check[1]}</li>
);

const Checklist = props => (
  <div className={props.className}>
    <ul>
      {props.result &&
        props.result[1].map((check_i, index) => <Criteria check={check_i} />)}
    </ul>
  </div>
);

const StyledChecklist = styled(Checklist)`
  li {
    font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  }

  li.false {
    color: #ff0066;
  }
  li.true {
    color: #00ff99;
    opacity: 0.8;
  }
`;

export default StyledChecklist;
