import React from 'react';
import { connect } from 'react-redux';
import { fetchLabels, selectLabel, deselectLabel } from '../actions';
import LabelList from '../components/LabelList';

class LabelListContainer extends React.Component {
  componentDidMount() {
    const { fetchLabels } = this.props;
    fetchLabels();
  }

  handleLabelClick = id => () => {
    const { selectedItems } = this.props.labels;
    const { selectLabel, deselectLabel } = this.props;
    if (selectedItems[id]) {
      deselectLabel(id);
    } else {
      selectLabel(id);
    }
  };

  render() {
    const { items, selectedItems } = this.props.labels;
    return (
      <LabelList
        labels={items}
        selectedLabels={selectedItems}
        handleLabelClick={this.handleLabelClick}
      />
    );
  }
}

const mapStateToProps = ({ labels }) => ({
  labels
});
const mapDispatchToProps = dispatch => ({
  fetchLabels: () => dispatch(fetchLabels()),
  selectLabel: id => dispatch(selectLabel(id)),
  deselectLabel: id => dispatch(deselectLabel(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelListContainer);
