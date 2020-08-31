import React from "react";
import "./style.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      age: null
    };
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
    alert("enter your name");
  };
  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <h1>This is tudo list {this.state.username}</h1>
        <p>Enter your name:</p>
        <input type="text" name="username" onChange={this.myChangeHandler} />

        <br />
        <br />
        <input type="submit" />
      </form>
    );
  }
}
export default Form;
