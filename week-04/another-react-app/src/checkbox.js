import React from 'react';
import PropTypes from 'prop-types';

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    const { checked } = this.props;
    this.state = { checked };
  }

  handleChange() {
    const { checked } = this.state;
    this.setState({
      checked: !checked,
    });
  }

  render() {
    const { name } = this.props;
    const { checked } = this.state;
    return (
      <label htmlFor={name}>
        <input id={name} type="checkbox" checked={checked} value={name} onChange={this.handleChange.bind(this)} />
        {name}
      </label>
    );
  }
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
