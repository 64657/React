import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
import "./LoginScreen.css";
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import {useDispatch, useSelector} from "react-redux"
import { login } from '../../actions/userActions';

const LoginScreen = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch()
  // using dispatch to call the user actions

  const userLogin = useSelector((state) => state.userLogin);
  // useSelector to access our states
  const {loading, error, userInfo} = userLogin;

  const navigate = useNavigate();

  useEffect(() => {
    if(userInfo) {
      navigate("/myscreen")
    }
    // else {
    //   navigate("/homepage")
    // }
  },[userInfo])

  const submitHandler = async(e) => {
    e.preventDefault()

    dispatch(login(email, password))
    // to call our actions
  }
    // console.log(email, password);

  
  return (
    <MainScreen title= "LOGIN">
      <div className="loginContainer">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId= "formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
            type="email"
            value = {email}
            placeholder= "Enter email"
            onChange = {(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId= "formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control
            type="password"
            value = {password}
            placeholder= "Password"
            onChange = {(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link><br/>
            Forget password?<Link to='/forgetpassword'>Click Here</Link>
          </Col>
        </Row>

      </div>
    </MainScreen>
  )
}

export default LoginScreen