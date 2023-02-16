import React, {useState} from "react";
import Heart from "./Heart";
import { loginAccount } from "../api/api";
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN } from "../constants/constant";
import FacebookLogin from "react-facebook-login";
import "../css/loginForm.css" 

export default function LoginForm({ Login }) {
  const [details, setDetail] = useState({username: "", password: ""});
  const navigate = useNavigate();
  const submitHander = async e => {
    e.preventDefault();
    const data = details;
    const response = await loginAccount(data);
    localStorage.setItem(ACCESS_TOKEN, response.data['access_token']);
    return navigate('/');
  }
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState('');
  
  const responseFacebook = (response) => {
    setData(response);
    setPicture(response.picture.data.url);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <section className="vh-100 login">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6 position-relative">
            <img
              src="./../../images/hot-girl.jpeg"
              className="img-fluid"
              alt="Phone image"
            />
          <Heart></Heart>
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form onSubmit={ submitHander }>
              <div className="form-outline mb-4">
                <label className="form-label fw-bold" htmlFor="form1Example13">
                  UserName
                </label>
                <input
                  type="username"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  onChange={e => setDetail({...details, username: e.target.value})} 
                  value={details.userName}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label fw-bold" htmlFor="form1Example23">
                  Password
                </label>
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  onChange={e => setDetail({...details, password: e.target.value})} 
                  value={details.password}
                />
              </div>
              <div className="d-flex justify-content-around align-items-center mb-4">
                <a href="#!">Forgot password?</a>
              </div>

              <input
                type="submit" value="Sign in"
                className="btn btn-success btn-lg btn-block w-100 fw-bold text-uppercase"
              />

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted w-100">OR</p>
              </div>

              <FacebookLogin
              className="btn btn-primary btn-lg btn-block text-uppercase w-100 mb-2"
              appId="746835330339854"
              autoLoad={true}
              fields="name,email,picture"
              scope="public_profile,user_friends"
              callback={responseFacebook}
              icon="fa-facebook" />
            
              <a
                className="btn btn-danger btn-lg btn-block text-uppercase w-100 mb-2"
                href="#!"
                role="button"
              >
                <i className="fab fa-twitter me-2"></i>Continue with Twitter
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
