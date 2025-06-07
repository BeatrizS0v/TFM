import { useState } from "react";
import { createUser } from "../extras/api";
import './VSignUp.css';

const VSignUp = () => {
  const [newName, setNewName]=useState("");
  const [newSurname, setNewSurName]=useState("");
  const [newDate, setNewDate]=useState("");
  const [newEmail, setNewEmail]=useState("");
  const [newPassword, setNewPassword]=useState("");
  const [newPassCheck, setNewPassCheck]=useState("");

  const signUp = async ()=>{
    if(newPassword===newPassCheck){
      const newUser = {
            user_id: Math.floor(Math.random() * 10) + 10,
            name: newName,
            surname: newSurname,
            date_birth: newDate,
            email: newEmail,
            password: newPassword,
            avatar: "",
            role: "user"
        };
    await createUser(newUser);
    console.log("Nuevo usuario:", newUser);
    }else{
      alert("Comprueba que las contraseñas coincidan");
    }
  }

  return (
    <div className="cont">
      <div className="signUp">
      <h2>Registrarse</h2>
      <label>Nombre:</label>
      <input
          type="name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="search enterText"
          style={{ color: "white" }}
          required
        />
        <label>Apellidos:</label>
        <input
          type="surname"
          value={newSurname}
          onChange={(e) => setNewSurName(e.target.value)}
          className="search enterText"
          style={{ color: "white" }}
          required
        />
        <label>Año de nacimiento:</label>
        <input
          type="date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="search enterText"
          style={{ color: "white" }}
          required
        />
        <label>Correo electrónico:</label>
        <input
          type="email"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
          className="search enterText"
          style={{ color: "white" }}
          required
        />
        <label>Contraseña:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="search enterText"
          style={{ color: "white" }}
          required
        />
        <label>Vuelva a introducir la contraseña:</label>
        <input
          type="password"
          value={newPassCheck}
          onChange={(e) => setNewPassCheck(e.target.value)}
          className="search enterText"
          style={{ color: "white" }}
          required
        />
        <button onClick={signUp}>Registrarse</button>
        </div>
    </div>
  );
};

export default VSignUp;