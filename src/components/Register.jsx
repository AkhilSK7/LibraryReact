import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adduser } from "../services/Apicalls";

function Register() {
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  });

  const navigate = useNavigate();

  async function postuser(event) {
    event.preventDefault();
    let res = await adduser(user);
    console.log(res.data);
    if (res.status == 201) {
      navigate("/login");
    } else {
      alert("can't enter data");
    }
  }

  return (
    <div>
      <h1 class="text-center fs-3 fw-bold">Register</h1>
      <div class="d-flex justify-content-center align-items-center w-100 h-100 mt-5 mb-5 ">
        <form class="w-50  border border-2 p-3 bg-light" onSubmit={postuser}>
          <div class="form-group ">
            <label for="username">Username</label>
            <input
              type="text"
              class="form-control"
              id="username"
              onChange={(event) => {
                setuser({ ...user, username: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="email"
              onChange={(event) => {
                setuser({ ...user, email: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="password"
              onChange={(event) => {
                setuser({ ...user, password: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="firstName">First name</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="firstname"
              onChange={(event) => {
                setuser({ ...user, first_name: event.target.value });
              }}
            ></input>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="lastname"
              onChange={(event) => {
                setuser({ ...user, last_name: event.target.value });
              }}
            ></input>
          </div>

          <button type="submit" class="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
