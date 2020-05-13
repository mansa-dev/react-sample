import React from 'react';
import user from './images/user.png';
import Loginmodal from './Loginmodal.js';
import './App.css';
import "./style.css";
const App = () => {

return (
  <div className="App">

    <div className="wrapper">
        <div className="form_section">
            <div className="container">
                <div className="log_in_form_popup">

                    <button type="button" className="btn user_login_btn" data-toggle="modal" data-target="#user_login">
                        Login
                    </button>

                    <Loginmodal></Loginmodal>


                </div>
            </div>
        </div>
    </div>
  </div>
  );
 };
 export default App;
