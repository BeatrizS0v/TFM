import { useContext } from 'react';
import logo from '../assets/logo.png'
import './ProfileBar.css'
import Login from './Login';
import Profile from './Profile';
import { AuthContext } from '../hooks/AuthContext';
import { ColorContext } from '../hooks/ColorContext';
import { SidebarContext } from '../hooks/SidebarContext';
import { Link } from 'react-router-dom';

const ProfileBar = () => {
    const { user } = useContext(AuthContext);
    const { lightMode, togglelightMode } = useContext(ColorContext);
    const {isOpen, closeSidebar}=useContext(SidebarContext);

    return (
        <div className='inicio' style={{transform: isOpen ? "translateX(0px)" : "translateX(-300px)", transition: "transform 300ms ease-in-out", boxShadow: isOpen ? "0 0 10px 1px var(--color-primario)" : "none"}}>
            <div className='close' onClick={closeSidebar}>
                <svg viewBox="0 0 329.26933 329" className='close_icon' xmlns="http://www.w3.org/2000/svg"><path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/></svg>
            </div>
            <Link to={"/"}>
                <img className='icono_web' src={logo} alt='Logo de la web'></img>
            </Link>
            {user ? <Profile /> : <Login />}
            <label className="switch">
                <input type="checkbox" checked={lightMode} onChange={togglelightMode}/>
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default ProfileBar;