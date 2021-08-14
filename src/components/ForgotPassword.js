import React from "react";

const ForgotPassword = () => {
    return (
        <div>
            <div className="forgotPassword loginRegister fullscreen">
                <div className="loginRegisterContainer container">
                    <div className="title row">
                        <div className="col-12">
                            <h2>Password Recovery</h2>
                        </div>
                    </div>
                    <div className="loginRegisterContent row">
                        <div className="col-12">
                            <input type="text" placeholder="e-mail" />
                        </div>
                    </div>
                    <div className="loginRegisterContent row">
                        <div className="col-12">
                            <button className="btnType1">Send Password Recovery Link</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;