import React from "react";
import Footer from "../components/pages/Footer";
import { LoginForm } from "../components/Form";
import Header from "../components/pages/Header";

function Login() {
    return (
        <div className="main">
            <Header />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default Login;
