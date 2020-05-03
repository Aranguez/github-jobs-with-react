import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// import passport from "passport";
// import { Strategy as LocalStrategy } from "passport-local";

// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "passwd",
//       session: false,
//     },
//     (username, password, done) => {}
//   )
// );

// app.use(passport.initialize());
// app.use(passport.session());

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
