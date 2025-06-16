import './Profile.css'
import { useContext} from 'react';
import { AuthContext } from '../hooks/AuthContext';
import { Link } from 'react-router-dom';

const Profile = () => {
    const {user, logout, favs} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    const infoFavs=()=>{
        if(Array.isArray(favs)){
        return(
            <>
            {favs.map((fav, index)=>(
                <div className='ap_fav' style={{transform: `translateY(${10+(6 * (index))}px)`}} key={index}>{fav.study} - {fav.location}</div>
            ))
        }
        </>)
    }}

    return (
        <div className='content'>
            <img className='logo_perfil' src={user.avatar} alt='Foto de perfil'></img>
            <div className="info_perfil">
                <p className='text_perfil'>{user.name} {user.surname}</p>
                <p className='button text_perfil'><Link to={'/edituser'} className='link'>Editar perfil</Link></p>
            </div>
            <div className="info_perfil">
                <p className='text_perfil'>Fecha de nacimiento: {new Date(user.date_birth).toLocaleDateString()}</p>
                <p className='text_perfil'>Correo electrónico: {user.email}</p>
            </div>
            <div className='favourites'>
                <Link to={`studies/favourites/${user.user_id}`} style={{ all: "unset", width: "80%"}}>
                <div className='cab_fav' >VER ESTUDIOS FAVORITOS</div></Link>
                <div className='aps_fav'>
                    {infoFavs()}
                </div>
                <div style={{backgroundColor: "var(--color-fondo-1)", height: "30px", width: "100%"}}></div>
            </div>
            <p className='signout text_perfil link' onClick={handleLogout}>Cerrar sesión</p>
            
        </div>
    );
};

export default Profile;