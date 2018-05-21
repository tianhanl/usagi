import React from 'react';
import { connect } from 'react-redux';
import { fetchLabels } from '../actions';
import LabelList from '../components/LabelList';

class LabelListContainer extends React.Component {
  componentDidMount() {
    const { fetchLabels } = this.props;
    fetchLabels();
  }

  handleLabelClick = id => () => {};

  render() {
    const { items } = this.props.labels;
    return (
      <LabelList labels={items} handleLabelClick={this.handleLabelClick} />
    );
  }
}

const mapStateToProps = ({ labels }) => ({
  labels
});
const mapDispatchToProps = dispatch => ({
  fetchLabels: () => dispatch(fetchLabels())
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelListContainer);
