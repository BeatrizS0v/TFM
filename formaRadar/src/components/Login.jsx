import { useState, useContext } from 'react';
import './Login.css';
import { AuthContext } from '../hooks/AuthContext';
import {getUsers} from '../extras/api';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        try{
        const users= await getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            login(user);
        } else {
            setError('Credenciales incorrectas');
        }
    }
    catch(err){
        setError('Error al obtener usuario');
    }
    };

    return (
        <div className='cont_login'>
            <p>Bienvenido</p>
            <form onSubmit={handleLogin}>
                <div className='formu'>
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    className="enterText login"
                    style={{color: "white"}}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input
                    type="password"
                    value={password}
                    placeholder="Contraseña"
                    className="enterText login"
                    style={{color: "white"}}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button type="submit" style={{margin: "20px"}}>Iniciar sesión</button>
                <p>¿No tienes una cuenta? <Link to={"/signup"}>Regístrate</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;