import React, { Component } from "react";

// export const ErrorBoundary = () => {
//   return <div></div>;
// };

class ErrorBoundary extends Component {
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
          You have an Error!!!
        </p>
      );
    else return <p style={{ color: "green" }}>Nothing</p>;
  }
}

export default ErrorBoundary;
