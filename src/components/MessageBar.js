import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessageItem } from './../actions/ItemMessage';

const messageStyle = {
  border: 'none',
  fontSize: 16,
  padding: 10,
  marginRight: 10,
  flexGrow: 1,
};
const buttonStyle = {
  cursor: 'pointer',
  fontSize: 20,
  color: '#345675',
  fontWeight: 'bold',
  padding: 10,
  flexGrow: 1,
  border: '3px solid #000000',
};

class MessageBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { message: '' };
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.message !== '') {
      this.props.onAddMessageItem(this.state.message, 'Robin');
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ display: 'flex', padding: 10 }}
      >
        <input
          value={this.state.message}
          onChange={this.handleChange}
          placeholder="Votre message"
          type="text"
          style={messageStyle}
        />
        <br />
        <button type="submit" style={buttonStyle}>Envoyer</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddMessageItem: (message, username) => {
      dispatch(addMessageItem(message, username));
    },
  };
};

const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(MessageBar);
