import React from 'react'



export default function Login() {
  return (
    <>
      <div className="container">
        <p>
          <img
            src="https://cdn3.iconfinder.com/data/icons/web-and-mobile-colored-icons-vol-3/128/152-256.png"
            alt="Sorry Image not Found"
            width={"100px"}
          />
        </p>
        <h3>Welcome to TAJ </h3>

        <form className="form">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <center>
            <button type="submit" class="btn btn-secondary">
              Submit
            </button>
          </center>
        </form>
      </div>
    </>
  );
}
