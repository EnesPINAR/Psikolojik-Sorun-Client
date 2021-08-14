import React from "react";
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className="loginRegister fullscreen">
            <div className="loginRegisterContainer container">
                <div className="title row">
                    <div className="col-12">
                        <h2>Login</h2>
                    </div>
                </div>
                <div className="loginRegisterContent row">
                    <div className="col-12">
                        <input type="text" placeholder="E-mail" />
                    </div>
                    <div className="col-12">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="col-12">
                        <button className="btnType1">Login</button>
                    </div>
                </div>
                <div className="loginRegisterFooter row">
                    <div className="col-6">
                        <Link to="/ForgotPassword">
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="col-6">
                        <Link to="/Register">
                            Register for Psikolojik Sorun
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;