import React from "react";
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <section class="loginRegister fullscreen">
            <div class="loginRegisterContainer container">
                <div class="title row">
                    <div class="col-12">
                        <h2>Register</h2>
                    </div>
                </div>
                <div class="loginRegisterContent row">
                    <div class="col-12">
                        <input type="text" placeholder="Name" />
                    </div>
                    <div class="col-12">
                        <input type="text" placeholder="Surname" />
                    </div>
                    <div class="col-12">
                        <input type="text" placeholder="E-mail" />
                    </div>
                    <div class="col-12">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div class="col-12">
                        <input type="password" placeholder="Password again" />
                    </div>
                    <div class="col-12">
                        <button class="btnType1">Register</button>
                    </div>
                </div>
                <div class="loginRegisterFooter row">
                    <div class="col-6">
                        <Link to="/Login">
                            <a href="#">You have a account ?</a>
                        </Link>
                    </div>
                    <div class="col-6">
                        <p>By registering you accept the <a className="important" href="#">PRIVACY AGREEMENT</a> and the <a className="important" href="#">TERMS OF USE</a>.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;