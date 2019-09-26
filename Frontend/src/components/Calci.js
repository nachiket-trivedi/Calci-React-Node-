
import React, { Component } from "react";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";

class Calci extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: ""
    };
    this.fieldChangeHandler = this.fieldChangeHandler.bind(this);
    this.calculate = this.calculate.bind(this);
  }
  componentWillMount() {}

  fieldChangeHandler = e => {
    this.setState({
      field: e.target.value
    });
  };

  fieldUpdate = num => {
    if (num == "C") {
      this.field.value = "";
      this.setState({
        field: this.field.value
      });
    } else if (num == "B") {
      let str = this.field.value;
      let newstr = str.substring(0, str.length - 1);
      this.field.value = newstr;
      this.setState({
        field: newstr
      });
    } else {
      this.field.value += num;
      this.setState({
        field: this.field.value
      });
    }
  };

  calculate = e => {
    e.preventDefault();
    const data = {
      eq: this.state.field
    };
    //set the with credentials to true
    axios.defaults.withCredentials = true;
    //make a post request with the user data
    axios
      .post("http://localhost:3001/calc", data)
      .then(response => {
        if(response.data=="error"
        ){
          alert("Invalid :(");
        this.field.value = "";
        this.setState({
          field: this.field.value
        });
        }
        else{this.field.value = response.data;
          this.setState({
            field: this.field.value
          });}
        
      })
  };

  render() {
    let redirectVar = null;
    return (
      <div class="main-div">
        <div class="panel">
          <h2> Calculator </h2> 
        </div> 
        <form name="calculator" class="form" onSubmit={this.calculate}>
          <div class="textBoxOut">
            <input
              ref={ref => (this.field = ref)}
              onChange={this.fieldChangeHandler}
              type="text"
              class="textBox"
              name="field"
              placeholder="Type here "
              required
              autoFocus
            />
           </div>
          <div class="inpBtns">
            <tr>
              <td>
              <input
                type="button"
                value=" 1 "
                onClick={this.fieldUpdate.bind(this, "1")}
              /></td>
              <td><input
                type="button"
                value=" 2 "
                onClick={this.fieldUpdate.bind(this, "2")}
              /> </td><td>
              <input
                type="button"
                value=" 3 "
                onClick={this.fieldUpdate.bind(this, "3")}
              /> </td><td>
              <input
                type="button"
                value=" + "
                onClick={this.fieldUpdate.bind(this, "+")}
              /></td>
            </tr>
            <tr>
            <td><input
                type="button"
                value=" 4 "
                onClick={this.fieldUpdate.bind(this, "4")}
              /> </td><td>
              <input
                type="button"
                value=" 5 "
                onClick={this.fieldUpdate.bind(this, "5")}
              /> </td><td>
              <input
                type="button"
                value=" 6 "
                onClick={this.fieldUpdate.bind(this, "6")}
              /> </td><td>
              <input
                type="button"
                value=" - "
                onClick={this.fieldUpdate.bind(this, "-")}
              /></td>
            </tr>
            <tr>
            <td><input
                type="button"
                value=" 7 "
                onClick={this.fieldUpdate.bind(this, "7")}
              /> </td><td>
              <input
                type="button"
                value=" 8 "
                onClick={this.fieldUpdate.bind(this, "8")}
              /> </td><td>
              <input
                type="button"
                value=" 9 "
                onClick={this.fieldUpdate.bind(this, "9")}
              /> </td><td>
              <input
                type="button"
                value=" * "
                onClick={this.fieldUpdate.bind(this, "*")}
              /></td>
            </tr>
            <tr><td>
              <input
                type="button"
                value=" ( "
                onClick={this.fieldUpdate.bind(this, "(")}
              /> </td><td>
              <input
                type="button"
                value=" 0 "
                onClick={this.fieldUpdate.bind(this, "0")}
              /> </td><td>
              <input
                type="button"
                value=" ) "
                onClick={this.fieldUpdate.bind(this, ")")}
              /> </td><td>
              <input
                type="button"
                value=" / "
                onClick={this.fieldUpdate.bind(this, "/")}
              /> </td>
            </tr>
            <tr>
              <td><input
                type="button"
                value=" C "
                onClick={this.fieldUpdate.bind(this, "C")}
              /> </td><td>
              <input
                type="button"
                value="← "
                onClick={this.fieldUpdate.bind(this, "B")}
              /> </td><td>
              <input
                type="button"
                value=" . "
                onClick={this.fieldUpdate.bind(this, ".")}
              /> </td><td>
              <button type="submit" class="submitBtn">
                = 
              </button> </td>
            </tr>
          </div>
        </form> 
      </div>
    );
  }
}
export default Calci;
