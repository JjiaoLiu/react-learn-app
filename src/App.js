import * as React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ThemedButton } from "./ThemedButton";
import { renderRoutes } from "react-router-config";
import { ThemeContext, themes } from "./context";
import "./App.css";

export default function App(props) {
  let [themeObject, setTheme] = useState({
    theme: themes.dark,
  });
  const toggleThemeContext = (_themes) => {
    themeObject.theme != _themes && setTheme({ theme: _themes });
  };
  const listItems = () => {
    let list = [];
    for (const key in themes) {
      const element = (
        <button onClick={(e) => toggleThemeContext(themes[key], e)} key={key}>
          {themes[key].name}
        </button>
      );
      list.push(element);
    }
    return list;
  };
  return (
    <ThemeContext.Provider value={themeObject}>
      <div className="App">
        <h1>Welcome to React Router!</h1>
        <div>{listItems()}</div>
        <ThemedButton>显示动态 Context</ThemedButton>
        <div>
          <NavLink exact activeStyle={{ color: "" }} to="/">
            app
          </NavLink>{" "}
          |
          <NavLink activeStyle={{ color: "" }} to="/about">
            about
          </NavLink>{" "}
          |
          <NavLink activeStyle={{ color: "" }} to="/home">
            home
          </NavLink>
        </div>
        {renderRoutes(props.route.routes)}
      </div>
    </ThemeContext.Provider>
  );
}
