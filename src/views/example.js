import React, { useState, useEffect, useCallback } from "react";
import Button from 'react-bootstrap/Button';

const Example = () => {
  const userDataExample = {
    view: {
      detail: true,
    }
  }
  const [userData, setUserData] = useState(userDataExample);

  useEffect(() => {
    updateUser();
  });

  const updateUser = (userDataExample) => {
    setUserData(userDataExample);
  };

  const handleOnClick = () => {
    userDataExample.view.detail = !userDataExample.view.detail;
  }

  return (
    <>
      <div className="Button-container">
        <Button variant="primary" onClick={handleOnClick}>{userDataExample.view.detail}</Button>
      </div>
    </>
  );
}

export default Example;
