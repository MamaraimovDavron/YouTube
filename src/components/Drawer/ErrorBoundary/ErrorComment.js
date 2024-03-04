import React, { Component } from "react";

// export const ErrorBoundary = () => {
//   return <div></div>;
// };

class ErrorComment extends Component {
  constructor() {
    super();
    this.state = { error: false };
  }

  //   static getDerivedStateFromError() {
  //     return {
  //       error: true,
  //     };
  //   }

  componentDidCatch() {
    this.setState({ error: true });
  }

  render() {
    if (!this.state.error)
      return (
        <p
          style={{
            color: "red",
            fontFamily: "fantasy",
            fontSize: "30px",
            textAlign: "center",
          }}
        >
          Data from api is not connecting properly with your comment box !!!
        </p>
      );
    else return <p style={{ color: "green" }}>Everything is OK!</p>;
  }
}

export default ErrorComment;
