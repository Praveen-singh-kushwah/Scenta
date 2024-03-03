import React from "react";
import { FiUser } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineClear } from "react-icons/md";
import sideimg from './login_img/sideimg.png';
import "./login.css";

export default function Login({openlogin,setOpenlogin}) {
  return (
    <div className="login_outercontainer">
      <div className="login_main">
        <div className="login_sideimg">
          <img src={sideimg}/>
        </div>
        <div className="login_content">
          <div className="login_innercontent">
            <div className="login_heading">
              <h1>Login</h1>
            </div>
            <div className="login_from">
              <form>
                <div className="login_username">
                  <div className="usericon">
                    <FiUser />
                  </div>
                  <div className="userinpt">
                    <input type="text" placeholder="Enter your username" />
                  </div>
                </div>

                <div className="login_passwd">
                  <div className="passwdicon">
                    <AiOutlineLock />
                  </div>
                  <div className="userinpt">
                    <input type="password" placeholder="Enter your password" />
                  </div>
                </div>

                <div className="forgot_psswdcontianer">
                  <p>Forgot Password ?</p>
                </div>

                <div className="login_btn">
                  <button>Login</button>
                </div>
                <div className="loginWithGoogle">
                  <div className="googleicon">
                    <FcGoogle />
                  </div>
                  <div className="googlecontent">
                    <h3>Login With Google.</h3>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="cancel_login">
            <MdOutlineClear onClick={()=>{setOpenlogin(false)}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
