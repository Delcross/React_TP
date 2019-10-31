import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessageItem } from './../actions/ItemMessage';
import PropTypes from "prop-types";

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
  color: '#000000',
  fontWeight: 'bold',
  padding: 10,
  flexGrow: 1,
  border: '1px solid #000000',
};

class MessageBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

    this.state = { message: '' };
  }

  handleChange(e) {
    this.setState({ message: e.target.value });
  }

   handleSubmit(e) {
  //   e.preventDefault();

  //   if (this.state.message !== '') {
  //     this.props.onAddMessageItem(this.state.message, 'Robin');
  //     this.setState({ message: '' });
  //   }
   }

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value, hasError: false });
  };


  //Non fonctionnel
  handleOnSubmit(e) {
    e.preventDefault();

    if (this.state.message.length > 200){
      console.log("Erreur");
      this.setState({ message: '' });
      if (this.state.message) {
        this.props.handleOnSubmit(this.state.message);
      } else {
        this.setState({ hasError: true }); 
      }
    }
    else if (this.state.message !== '') {
      this.props.onAddMessageItem(this.state.message, 'Robin');
      this.setState({ message: '' });
    }
  }

  render() {
    return (
      <div style={{ display: "flex", padding: 10 }}>
        <form onSubmit={this.handleOnSubmit}>
          <input
            id="message"
            value={this.state.message}
            onChange={this.handleOnChange}
            placeholder="Votre message"
            type="text"
            style={messageStyle}
          />

          <input
            id="username"
            value={this.state.username}
            onChange={this.handleOnChange}
            placeholder="User"
            type="text"
            style={messageStyle}
          />

          <button type="submit" style={buttonStyle}>
            Envoyer
          </button>
          <br />
          {this.state.hasError && <span>Veuillez écrire un message de moins de 200 caractères</span>}
        </form>
      </div>
    );
  }

  render() {
    return (
      <form
        onSubmit={this.handleOnSubmit}
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
        <button type="submit" style={buttonStyle}>SEND</button>
      </form>
    );
  }
}

MessageBar.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onAddMessageItem: (message, username) => {
      dispatch(addMessageItem(message, username));
    },
  };
};

const connectComponent = connect(null, mapDispatchToProps);

export default connectComponent(MessageBar);
