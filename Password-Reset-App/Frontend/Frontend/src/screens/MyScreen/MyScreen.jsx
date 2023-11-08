import React, { useEffect } from 'react';
import MainScreen from '../../components/MainScreen';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function MyScreen() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const noteList = useSelector(state => state.noteList);

  const userLogin = useSelector((state) => state.userLogin);
  const userInfo = userLogin.userInfo; // Access userInfo from userLogin state

  useEffect(() => {
    if (userInfo) {
      navigate("/myscreen");
    }
  }, [userInfo]);

  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      {/* Your component content */}
    </MainScreen>
  );
}

export default MyScreen;
