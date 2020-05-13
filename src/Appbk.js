import React from 'react';
import logo from './logo.svg';
import user from './images/user.png';
import Popup from "reactjs-popup";
import Content from "./Content.js";
import { Container } from './Container';
import { Filler } from './Filler'
import './App.css';
import "./style.css";
const App = () => {

const triggerText = 'Open Form';
   const onSubmit = (event) => {
   event.preventDefault(event);
   console.log(event.target.name.value);
   console.log(event.target.email.value);
 };
return (
  <div className="App">

    <div className="wrapper">
        <div className="form_section">
            <div className="container">
                <div className="log_in_form_popup">

                    <button type="button" className="btn user_login_btn" data-toggle="modal" data-target="#user_login">
                        <img src={user} alt="user_icon" />
                    </button>
                   
                    <div className="modal fade" id="user_login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="login_header text-center">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <h4 className="mb-3">Log in</h4>
                                    <p>Lorem Ipsum is simply dummy text of<br /> the printing <br />
                                        and typesetting industry. Lorem Ipsum </p>

                                </div>
                                <div className="modal-body">
                                    <div className="form mt-3">
                                        <div className="form-group">
                                            <input type="email" id="emails" name="emails" className="form-control" placeholder="E-mail" />
                                        </div>
                                        <div className="input-group form-group position-relative" id="show_hide_password">
                                            <input className="form-control" type="password" placeholder="Password" />
                                            <div className="input-group-addon position-absolute">
                                                <a href="" className="black_color"><i className="fa fa-eye-slash" aria-hidden="true"></i></a>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                                <label className="custom-control-label" htmlFor="customControlInline">Keep me signed in</label>
                                                <a href="#" className="forgot_pswd float-right">Forgot password?</a>
                                            </div>
                                        </div>
                                        <div className="form-group submit_button mt-5">
                                            <input type="submit" name="submit" className="btn w-100" value="Sign in" />
                                        </div>
                                        <div className="text-center mt-4">
                                            <span>Not a member yet?</span> <a href="#" className="signup_btn pl-5 black_color">Sign up</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    </div>
  </div>
  );
 };
 export default App;
/*
<Popup modal trigger={<button type="button" className="btn user_login_btn">Login</button>}>
                       {close => <Content close={close} />}
                    </Popup>

<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Popup modal trigger={<button>Login</button>}>
          {close => <Content close={close} />}
        </Popup>

        <Container triggerText={triggerText} onSubmit={onSubmit} />  
        
      </header>
      */