import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";
import iceCreamReducer from "../redux/iceCream/iceCreamReducer";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icecreams - {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

//This is often extracted into a different file called "selectors"
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(
    mapStateToProps, mapDispatchToProps
    )(IceCreamContainer);
