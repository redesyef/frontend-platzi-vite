import React, { useState } from "react";
import "./Auth.css";
import logo from "../image/Logos/logo_yard_sale.svg"
const Auth = () => {
  const [datos, setDatos] = useState("");
  const data = (value:string) => {
    console.log(value);
  };
 
  return (
    <div>
      <div>
        <div className="login">
          <div className="form-container">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">Crear nueva contraseña</h1>
            <p className="subtitle">Ingresar nueva contraseña</p>
            <form action="" className="form"></form>
            <label htmlFor="password" className="label">
              Contraseña
            </label>
            <input
              type="password"
              className="input input-pasword"
              id="password"
              placeholder="********"
            />
            <label htmlFor="new-password" className="label">
              Repetir contraseña
            </label>
            <input
              type="password"
              className="input input-pasword"
              id="new-password"
              placeholder="********"
            />
            <input
              type="submit"
              value="Confirmar"
              className="primary-button login-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
