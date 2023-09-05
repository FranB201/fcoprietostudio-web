import React from "react";
import TextField from "@mui/material/TextField";

import img from "../../../assets/HomeImage/homeImg5.jpg";
export const Login = ({ onClickCreateAccount }) => {

    const openSingUp = () => {
       
    }
  return (
    <section className="text-center">
      {/*<div className="p-5 bg-image" style={{backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')", height: 300}}></div>*/}
      <div
        className="p-5 bg-image"
        style={{ backgroundColor: "black", height: 300 }}
      ></div>

      <div
        className="card mx-4 mx-md-5 shadow-5-strong"
        style={{
          marginTop: -100,
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)"
        }}
      >
        <div className="card-body py-5 px-md-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8">
              <h2 className="fw-bold mb-5">Login</h2>
              <form>

                <div className="form-outline mb-4">
                <TextField label="Correo" variant="filled" color="secondary"  required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
                </div>

                <div className="form-outline mb-4">
                <TextField label="Contraseña" variant="filled" color="secondary"  required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
                </div>

                <div onClick={onClickCreateAccount} className="form-check d-flex justify-content-center mb-4">
                  <label className="form-check-label" >
                    Crear cuenta
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Registraste
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
