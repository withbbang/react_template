import { connect } from "react-redux";
import { example_1, example_2 } from "../../module/exampleModule";
import IndexCT from "./IndexCT";

const mapStateToProps = (state) => {
  const { examples } = state;
  return {
    isFetching: examples.isFetching,
    value_1: examples.value_1,
    value_2: examples.value_2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    example_1: (value) => {
      dispatch(example_1.request(value));
    },
    example_2: (value) => {
      dispatch(example_2.request(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndexCT);
