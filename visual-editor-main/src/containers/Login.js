import { useEffect, useState } from "react";
import { Link, useHistory as useNavigate } from "react-router-dom";
//import { toast } from "react-toastify";
import React from "react";

const Login = () => {

    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate = useNavigate();

    useEffect( () => {
        sessionStorage.clear();
    }, []);

    const ProceedLogin = (e) => {
        e.preventDefault();

        if(validate()) {
            if(username === "admin" && password === "admin@123"){
                usenavigate.push('/home');
            }
            else{
                console.log("Enter Valid username and password");
            }
        }

        // if(validate()) {
        //     //Implimant Login Functionality
        //     //console.log("Proceeed");
        //     fetch("http://localhost:8000/users/"+username).then( (res)=> {
        //         return res.json();
        //     }).then( (resp) => {
        //         console.log(resp);
        //         if(Object.keys(resp).length === 0){
        //             //toast.error("Please Enter valid username");
        //             console.log("please enter valid username");
        //         }else{
        //             if(resp.password === password) {
        //                 //console.log("login successfully");
        //                 //toast.success("success");
        //                 sessionStorage.setItem('username', username);
        //                 usenavigate.push('/home');

        //             }else{
        //                 //toast.error("Please enter valid Credentials");
        //                 console.log("please enter valid credentials");
        //             }
        //         }
        //     }).catch( (err) => {
        //         //toast.error("Login Failed due to :"+err.message);
        //         console.log("Login failed dut to :"+err.message);
        //     });

        // }
    }

    const validate = () => {
        let result = true;

        if(username === "" || username === null) {
            result = false;
            //toast.warning("Please Enter Username");

        }

        if(password === "" || password === null) {
            result = false;
            //toast.warning("Please Enter Password");
        }
        return result;
    }

    return (
        <div className="row justify-content-center">
        <h1><i>Website Builder Login</i></h1>
            <div className="offset-lg-3 col-lg-6">
                <form onSubmit = {ProceedLogin}>
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>User Name <span className="errmsg">*</span></label>
                                <input value = {username} onChange={ e => usernameupdate(e.target.value) } className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type = "password" value = {password} onChange={ e => passwordupdate(e.target.value) } className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type = "submit" className="btn btn-primary m-2">Login</button>
                            <Link to={'/register'} className="btn btn-success">New User</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;