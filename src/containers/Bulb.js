import { connect } from "react-redux";
import Bulb from "../components/Bulb";

const mapStateToProps = (state) => {
  return {
    bulbsInfo: state.bulb,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    changeBulbStatus: (id) =>
      dispatch({
        type: "CHANGE/BULB-STATUS",
        payload: props.id,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bulb);
