import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { LoginPage, LoginPageDiv } from "./styles.js"
import { handleLogin, handleRegister } from "../services/UserService"
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return name.length > 0 && password.length > 0;
  }

  function SubmitLogin(event) {
    const response = handleLogin(name, password)
    if (!response.name) {
      navigate("/login");
    }
    const user = {name: response.name, id: response.id}
    localStorage.setItem('user', JSON.stringify(user));
    navigate("/home");
    return false;
  }

  function SubmitRegister(event) {
    const response = handleRegister(name, password)
    if (!response.name) {
      navigate("/login");
    }
    const user = {name: name, id: response.id}
    localStorage.setItem('user', JSON.stringify(user));
    navigate("/home");
    return false;
  }

  return (
      <LoginPage>
        <Form>
            <h2>Welcome back!</h2>
            <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
                autoFocus
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            </Form.Group>
            <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            </Form.Group>
        </Form>
        <Button disabled={!validateForm()} onClick={SubmitLogin}>
            Login
            </Button>
            <Button disabled={!validateForm()} onClick={SubmitRegister}>
            Register
            </Button>
    </LoginPage>
  );
}