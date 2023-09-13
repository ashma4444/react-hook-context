import { Form } from "react-bootstrap";
import React from "react";
import { useThemeContext } from "../contexts/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div>
      Navbar Theme: {theme}{" "}
      <Form.Check type="switch" label="Toggle theme" onClick={toggleTheme} />
    </div>
  );
}

export default Navbar;
