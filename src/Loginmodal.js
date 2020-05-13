import React from 'react';
import ReactDOM from 'react-dom';

class Loginmodal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  email: '',
                    password: '',
                    show:false,
                    type:'password',
                     };
  }
  emailHandler = (event) => {
    this.setState({email: event.target.value});
  }
  passwordHandler = (event) => {
    this.setState({password: event.target.value});
  }
  showHandler = (event) => {
    event.preventDefault();
    this.setState({show: true});
    this.setState({type: 'text'});
  }
  hideHandler = (event) => {
    event.preventDefault();
    this.setState({show: false});
    this.setState({type: 'password'});
  }
  render() {
    return (
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
                                <form>
                                  <div className="form-group">
                                      <input type="email" id="emails" onChange={this.emailHandler} name="emails" className="form-control" placeholder="E-mail" />
                                  </div>
                                  <div className="input-group form-group position-relative" id="show_hide_password">
                                      <input className="form-control" onChange={this.passwordHandler} type={this.state.type} placeholder="Password" />
                                      <div className="input-group-addon position-absolute">
                                          {this.state.show === false && <a href="#" onClick={this.showHandler} className="black_color"><i className="fa fa-eye-slash" aria-hidden="true"></i></a>}
                                          {this.state.show === true && <a href="#" onClick={this.hideHandler} className="black_color"><i className="fa fa-eye" aria-hidden="true"></i></a>}
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
                                </form>
                                <div className="text-center mt-4">
                                    <span>Not a member yet?</span> <a href="#" className="signup_btn pl-5 black_color">Sign up</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default Loginmodal;

/*{this.state.show == true && <a href="" onClick={this.showHandler} className="black_color"><i className="fa fa-eye-slash" aria-hidden="true"></i></a>}
                                          {this.state.show == false && <a href="" onClick={this.hideHandler} className="black_color"><i className="fa fa-eye" aria-hidden="true"></i></a>}*/