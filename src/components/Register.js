import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="loginRegister fullscreen">
            <div className="loginRegisterContainer container">
                <div className="title row">
                    <div className="col-12">
                        <h2>Register</h2>
                    </div>
                </div>
                <div className="loginRegisterContent row">
                    <div className="col-12">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="col-12">
                        <input type="text" placeholder="Surname" />
                    </div>
                    <div className="col-12">
                        <input type="text" placeholder="E-mail" />
                    </div>
                    <div className="col-12">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="col-12">
                        <input type="password" placeholder="Password again" />
                    </div>
                    <div className="col-12">
                        <button className="btnType1">Register</button>
                    </div>
                </div>
                <div className="loginRegisterFooter row">
                    <div className="col-6">
                        <Link to="/Login">
                            You have a account ?
                        </Link>
                    </div>
                    <div className="col-6">
                        <p>By registering you accept the <Link to="/Privacy" className="important">PRIVACY AGREEMENT</Link> and the <Link to="/Terms" className="important">TERMS OF USAGE</Link>.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;