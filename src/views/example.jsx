import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

const Example = () => {
  const userDataExample = {
    view: {
      detail: 'Original detail',
    }
  }
  const [userData, setUserData] = useState(userDataExample);

  useEffect(() => {
    updateUser();
  });

  const updateUser = (userData) => {
    setUserData(userData);
  };

  const handleOnClick = () => {
    userData.view.detail = 'New detail';
    setUserData(userData);
  }

  return (
    <>
      <div className="Button-container">
        <Button variant="primary" onClick={handleOnClick}>{userData.view.detail}</Button>
      </div>
    </>
  );
}

export default Example;
