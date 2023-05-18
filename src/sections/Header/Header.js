import { Link } from "react-router-dom"

import "./Header.css"

import logo from "../../assets/images/logo.png" 

import NavItem, {NavItemDropDwon} from "../../components/NavItem/NavItem"

const Header = () => {
  return(
    <div className="navbar navbar-expand-md  navbar-dark cyborg-navbar">
        <div className="container">
            <a href="/" className='navbar-brand'>
              <img src={logo} alt="" />
            </a>
            <hr />
            <div class="search-input">
                <form id="search" action="#">
                  <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword" onkeypress="handle" />
                  <i class="fa fa-search"></i>
                </form>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <NavItem>
                      <Link to="/" className="nav-link active">Home</Link>
                    </NavItem>

                    <NavItem>
                      <Link to="/#" className="nav-link">Browse</Link>
                    </NavItem>

                    <NavItemDropDwon>
                        <a href="/#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Details</a>
                        <ul className="dropdown-menu">
                            <li><a href="/#" className="dropdown-item">Streams</a></li>
                            <li><a href="/#" className="dropdown-item">Where to go next</a></li>
                        </ul>
                    </NavItemDropDwon>

                    <NavItem>
                      <Link to="/#" className="nav-link">Streams</Link>
                    </NavItem>

                    <NavItem>
                      <Link to="/Profile" className="nav-link">Profile</Link>
                    </NavItem>
                    
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header