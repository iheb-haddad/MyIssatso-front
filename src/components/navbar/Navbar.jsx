import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
const  Navbar = (props) => {

  return (
  <div style={{display:"flex"}}>
    <div className="navbar">
        <div className="head"> 
          <div className="logo">MyIssatSo</div>
          {/* <div className="croix"><FontAwesomeIcon icon={faX} style={{cursor:'pointer'}} onClick={props.showNavbar}/></div> */}
        </div>
        <div className="navbarBody">
            <Link to="/" className={`navLine ${props.navLineClicked === 'home' ? 'navClicked' : 'notClicked'}`} onClick={props.clickHome}>
                    <img src="./assets/dashIcon.png" alt="" />
                    <div className="title" >Tableau de bord</div>
            </Link>
            <Link to="/GestionMapping" className={`navLine ${props.navLineClicked === 'dashboard' ? 'navClicked' : 'notClicked'}`} onClick={props.clickDashboard}>
                    <img src="./assets/scheduleIcon.png" alt="" />
                    <div className="title" >Calendrier</div>
            </Link>
            <Link to="/GestionMapping" className={`navLine ${props.navLineClicked === 'dashboard' ? 'navClicked' : 'notClicked'}`} onClick={props.clickDashboard}>
                    <img src="./assets/absenceIcon.png" alt="" />
                    <div className="title" >Absences</div>
            </Link>
            <Link to="/GestionMapping" className={`navLine ${props.navLineClicked === 'dashboard' ? 'navClicked' : 'notClicked'}`} onClick={props.clickDashboard}>
                    <img src="./assets/coursIcon.png" alt="" />
                    <div className="title" >Support du cours</div>
            </Link>
            <Link to="/GestionMapping" className={`navLine ${props.navLineClicked === 'dashboard' ? 'navClicked' : 'notClicked'}`} onClick={props.clickDashboard}>
                    <img src="./assets/settingsIcon.png" alt="" />
                    <div className="title" >Paramètres</div>
            </Link>
        </div>      
    </div>
    <div className="blur-overlay" onClick={props.showNavbar}></div>
  </div>
  )
}

export default Navbar