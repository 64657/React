import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { resetPassword } from '../../actions/userActions';
import ErrorMessage from '../../components/ErrorMessage';
import MainScreen from '../../components/MainScreen';
import { useNavigate, useSearchParams } from 'react-router-dom'; 

const ResetPasswordScreen = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userReset = useSelector((state) => state.userReset);
  const { loading, success, error } = userReset;
  const [token]  = useSearchParams();
  console.log(token);

  // useEffect(() => {
  //   if(userInfo) {
  //     navigate('/myscreen');
  //   }
  // }, [userInfo])

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Make an API call to fetch user data or retrieve it from your state.
        const response = await fetchUserInfoFromAPI(token.get('token'));
        if (response.success) {
          const userInfo = response.data;
          if (userInfo) {
            navigate('/myscreen');
          }
        }
      } catch (error) {
        // Handle any errors from the API call
        console.error('Error fetching user data', error);
      }
    };

    fetchUserInfo(); // Call the function to fetch user data when the component mounts
  }, [token.get('token')]); // Include token in the dependency array to re-fetch when the token changes

  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(password, token.get("token")));
  };

  return (
    <MainScreen title="Reset Password">
      <div>
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {success ? (
          <div>Password has been successfully reset.</div>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="password">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

export default ResetPasswordScreen;
