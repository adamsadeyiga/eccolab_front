import React from "react";
import AppButton from "../../components/commons/button";
import { Link} from "react-router-dom"; 'react-router-dom'
import Swal from 'sweetalert2'
function showAlert(e) {
  e.preventDefault()
  Swal.fire({
      title: 'Login To Your Account',
      html: 
          '<li class="list-signup">Student</li>' +
            '<li class="list-signup">Admin</li>'
    })
}
const Login = () => {
  const handleSubmitClick = (event) => {
    console.log("form submit button clicked");
  };

  return (
    <React.Fragment>
      <section className="container w-60">
        <form className="app-login my-4">
          <h2 className="text-capitalize text-center fs-2 my-3">
            login to continue
          </h2>
          <section className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label fw-900">
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
              className="form-label fw-900"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </section>
          <Link to="/" onClick={(event) => { showAlert(event) }}>SignUp</Link>
          <section className="d-flex align-items-center justify-content-center">
            <AppButton
              text="login"
              className="btn-secondary btn-block text-capitalize w-100"
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

// import React from 'react'
// import Button from '../../components/Button'
// import Input from '../../components/Input'
// import Swal from 'sweetalert2'

// // import { WEBSITE_NAME } from '../App'
// const WEBSITE_NAME = 'Eccowas College'

// function showAlert() {
//     Swal.fire({
//         title: 'Login To Your Account',
//         html: 
//             '<li class="list-signup">Student</li>' +
//             '<li class="list-signup">Admin</li>'
//     })
// }

// const Login = () => {
//   return (
//     <div>
//         <div className="login-section">
//             <div className="login-img">
//                 <img src="../../public/img/computer labs.svg" />
//             </div>
//             <div className="login-content">
//                 <h2>Log In</h2>
//                 <div>
//                     <Input type="username" title='Username' />
//                     <Input type="password" title='Password' />
//                 </div>
//                 <a href="signup">SignUp</a>
//                 <Button click={showAlert} />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Login;
