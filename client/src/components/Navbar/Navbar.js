import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Button } from '../Button/Button';
import { logout } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';
import './Navbar.css'


const Navbar = () => {

 /*   const { userData, setUserData } = useContext(UserContext);

  const logOut = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
  };*/
  const dispatch = useDispatch()
  const history = useHistory();
    const [click, setClick]=useState (false);
    const [button, setButton] = useState(true);

    
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
      };

      window.addEventListener('resize', showButton);
        let token=localStorage.getItem('token')
    
      const handleLogOutClick =()=>{ dispatch(logout())}
    return (
        <>
            <nav className="navbar">
            {token? 
            <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> AGRI GAFSA <i class="fab fa-typo3"/></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about-us" className='nav-links' onClick={closeMobileMenu}>About us</Link>
                        </li>
                            <li className='nav-item'>
                            <Link to="/login" className='nav-links' onClick={closeMobileMenu}>profile</Link>
                        </li>
                        <li className='nav-item'>
                            <Link className='nav-links-mobile' onClick={()=>{
                             closeMobileMenu();
                             handleLogOutClick();
                            history.push('/login')
                            window.location.reload();}
                            }>logout</Link>
                       </li> 
                        </ul> 
                    {button && <Button buttonStyle='btn--outline' onClick={()=>{
                             closeMobileMenu();
                             handleLogOutClick();
                            history.push('/login')
                             window.location.reload();}
                            } >logout</Button>}
                </div>:    <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> AGRI GAFSA <i class="fab fa-typo3"/></Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to="/" className='nav-links' onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about-us" className='nav-links' onClick={closeMobileMenu}>About us</Link>
                        </li>
                            <li className='nav-item'>
                            <Link to="/login" className='nav-links' onClick={closeMobileMenu}>Sign In</Link>
                        </li>
                        
                        </ul> 
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>}
            </nav>
        </>
    )
}

export default Navbar
