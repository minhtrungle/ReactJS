// todo: Buổi 9 props
/*import React from "react";

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Trung" }
  }
  componentWillMount() {
    this.setState({ name: "Minh" })
  }
  render() {
    return <h1>Hello {this.state.name}</h1>;
  }

  componentDidMount() {

  }
  componentDidUpdate() {

  }
}
export default Social;*/


// todo: Buổi 10 useEffect, useState

import React, { PureComponent } from "react";

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Minh Trung " };
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.textSocial !== nextProps.textSocial) {
      return true;
    }
    return false;
  }
  componentWillMount() {
    console.log("Chạy lại");
  }
  render() {
    return <h1>Hello {this.props.textSocial}</h1>;
  }
  componentDidUpdate() {
    console.log("Update thành công");
  }
}
export default Social;
