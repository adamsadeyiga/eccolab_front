import React, {useContext} from 'react';
import AuthContext from '../../contexts/AuthContext';

const MainApp = () => {
  const {authenticated} =  useContext(AuthContext);
  return (
    <React.Fragment>
      this is the main app component you are logged in
      logged in value is {(authenticated) ? "true" : "false"}
    </React.Fragment>
  );
}

export default MainApp;
