import { useState, useContext } from "react";
import { modifyUser } from "../extras/api";
import './VSignUp.css';
import { AuthContext } from "../hooks/AuthContext";


const VEditUser = () => {
  const {user}=useContext(AuthContext);
  const [newName, setNewName]=useState(user.name);
  const [newSurname, setNewSurName]=useState(user.surname);
  const [newDate, setNewDate]=useState(user.date_birth);
  const [newEmail, setNewEmail]=useState(user.email);
  const [newPassword, setNewPassword]=useState(user.password);
  const [newPassCheck, setNewPassCheck]=useState(user.password);

  const editUser = async ()=>{
    if(newPassword===newPassCheck){
      const newUser = {
            user_id: user.user_id,
            name: newName,
            surname: newSurname,
            date_birth: newDate,
            email: newEmail,
            password: newPassword,
            avatar: user.avatar,
            role: user.role
        };
    await modifyUser(newUser);
    console.log("Usuario editado:", newUser);
    }else{
      alert("Comprueba que las contraseñas coincidan");
    }
  }

  return (
    <div className="cont">
      <div className="signUp">
      <h2>Edita tu usuario</h2>
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
        <button onClick={editUser}>Editar usuario</button>
        </div>
    </div>
  );
};

export default VEditUser;