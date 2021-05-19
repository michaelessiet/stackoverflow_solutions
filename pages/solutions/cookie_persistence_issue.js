import React from "react";
import { useState, useEffect } from "react";
import { Component } from "react";

class SignOut extends React.Component {
  render() {
    return (
      <div>
        <h1>Michael </h1>
        <button onClick={this.props.Setauth}>Sign Out</button>
      </div>
    );
  }
}

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign in to see your name</h1>
        <button onClick={this.props.Setauth}>Sign In</button>
      </div>
    );
  }
}

export default function Rendermenu() {
  const [state, setState] = useState({ authstate: false });
  const [authState, setAuthstate] = useState(true);

  if(typeof window !== "undefined"){
    useEffect(() => {
      localStorage.getItem("auth");
      console.log(localStorage.getItem("auth"));
    });

    function Setauth() {
      localStorage.setItem("auth", authState);
      setAuthstate(!authState);
      console.log(authState);
      console.log(localStorage.getItem("auth"));
    }

    function reset() {
      localStorage.clear();
      window.location.reload();
    }

    if (localStorage.getItem("auth") === "true")
      return (
        <div>
          <SignOut Setauth={Setauth} />
          <button onClick={reset}>clear</button>
        </div>
      );
    return (
      <div>
        <SignIn Setauth={Setauth} />
        <button onClick={reset}>clear</button>
      </div>
    );
  }

  return <div></div>
}



