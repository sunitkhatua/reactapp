import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    id:"",
    name: "",
    email: "",
    phone:"",
    address:"",
    communication_history: "",
    purchase_history: "",
  });

  const { name, email, phone, address, communication_history, purchase_history } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                E-mail
              </label>
              <input
                type={"email"}
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="Phone" className="form-label">
                Phone
              </label>
              <input
                type={"number"}
                className="form-control"
                placeholder="Enter your phone number"
                name="phone"
                value={phone}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Address"
                name="address"
                value={address}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="communication_history" className="form-label">
              Communication History
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Communication History"
                name="communication_history"
                value={communication_history}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="purchase_history" className="form-label">
              Purchase History
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Communication History"
                name="purchase_history"
                value={purchase_history}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>

            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}