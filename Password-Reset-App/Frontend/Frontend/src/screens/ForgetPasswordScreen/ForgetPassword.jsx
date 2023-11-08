import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { forgetPassword } from '../../actions/userActions';
import ErrorMessage from '../../components/ErrorMessage';
import MainScreen from '../../components/MainScreen';
import { useNavigate } from 'react-router-dom';

const ForgetPasswordScreen = ({userInfo}) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const userReset = useSelector((state) => state.userReset);
  const { loading, success, error } = userReset;
  const navigate = useNavigate();


  useEffect(() => {
    if(userInfo) {
      navigate('/forgetpassword');
    }
  }, [userInfo])
  


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(forgetPassword(email));
  };

  return (
    <MainScreen title = "Forget Password">
    <div>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {success ? (
        <div>Password reset instructions sent to your email.</div>
      ) : (
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={loading}>
            Reset Password
          </Button>
        </Form>
      )}
    </div>
    </MainScreen>
  );
};

export default ForgetPasswordScreen;
