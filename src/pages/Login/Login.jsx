import React from "react";
import AppButton from "../../components/commons/button";
const Login = () => {
  const handleSubmitClick = (event) => {
    console.log("form submit button clicked");
  };

  return (
    <React.Fragment>
      <section className="container-fluid">
        <form className="app-login my-4">
          <h2 className="text-capitalize text-center fs-2 my-3">
            login to continue
          </h2>
          <section className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label fw-light">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </section>
          <section className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label fw-light"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </section>
          <section className="d-flex align-items-center justify-content-center">
            <AppButton
              text="login"
              className="btn-primary text-capitalize w-100"
              disabled={false}
              onClick={(event) => {
                handleSubmitClick(event);
              }}
            />
          </section>
        </form>
      </section>
    </React.Fragment>
  );
};

export default Login;
