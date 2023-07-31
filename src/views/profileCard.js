import React, { useState, useEffect, useCallback } from "react";
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

const { fetchUserData } = require('../helpers/userData');

const ProfileCard = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    updateUser();
  }, []);

  const updateUser = () => {
    try {
      let data = fetchUserData();
      setUserData(data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const toggleView = () => {
    //TODO
  }

  if (!userData) return <Spinner animation="border" role="status" />;
  return (
    <>
      <div className="Profile-card">
        <img className="Profile-image" src={userData.picture.medium} />
        <p className="Profile-title">{userData.name.first + " " + userData.name.last}</p>
        <div className="Profile-body">
          <p>{userData.login.username}</p>
          <p>{userData.email}</p>
        </div>
      </div>
      <div className="Button-container">
        <Button variant="primary" onClick={toggleView}>Hide Profile</Button>
      </div>
    </>
  );
}

export default ProfileCard;
