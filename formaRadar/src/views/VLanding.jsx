import logo from '../assets/logo.png'

const VLanding = () => {
    return (
            <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <img style={{width: "350px", marginBottom: "30px"}} src={logo} alt='logo'/>
                <p style={{color: "var(--color-texto)", fontSize: "large"}}>Activa tu radar de formación y da el siguiente paso en tu futuro</p>
            </div>
    );
};

export default VLanding;