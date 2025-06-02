import logo from '../assets/logo.png'

const VLanding = () => {
    return (
            <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <img style={{width: "350px", marginBottom: "30px"}} src={logo} alt='logo'/>
                <p style={{color: "var(--color-texto)", fontSize: "large"}}>Encuentra la mejor formación que encaje con tus expectativas</p>
            </div>
    );
};

export default VLanding;