import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Number of Ice cream - {props.numberOfIcecream}</h2>
      <button onClick={props.buyIceCream}>Buy Ice cream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIcecream: state.icecream.numberOfIcecream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
