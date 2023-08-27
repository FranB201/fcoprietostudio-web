import React from 'react'

import TextField from "@mui/material/TextField";

export const SingUp = () => {
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
              <h2 className="fw-bold mb-5">Registrate ahora</h2>
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <TextField label="Nombre" variant="filled" color="secondary"  required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                    <TextField label="Apellido" variant="filled" color="secondary"  required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                <TextField label="Correo" variant="filled" color="secondary"  required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
                </div>

                <div className="form-outline mb-4">
                <TextField label="Contraseña" variant="filled" color="secondary"  required InputLabelProps={{ style: { color: 'white' } }} InputProps={{ style: { color: 'white' } }} fullWidth />
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example33"
                    checked
                  />
                  <label className="form-check-label" for="form2Example33">
                    Subscribe to our newsletter
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign up
                </button>

                <div className="text-center">
                  <p>or sign up with:</p>
                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-google"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-link btn-floating mx-1"
                  >
                    <i className="fab fa-github"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
