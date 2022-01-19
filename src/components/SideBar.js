import React from 'react';
import image from '../assets/images/logo.png';
import TopBar from './TopBar';


import {Link,Route,Routes} from 'react-router-dom';

import ContentWrapper from './ContentWrapper';

import AllUsers from './AllUsers';
import AllProducts from './AllProducts';
import NotFound from './NotFound';

function SideBar(){
    return(
        <React.Fragment>


            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-25" src={image} alt="LuanaCake"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-cookie-bite"></i>
                        <span> Admin Dashboard</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Bienvenido</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="AllUsers">
                        <i className="fas fa-users"></i>
                        <span>Todos los Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="AllProducts">
                        <i className="fas fa-box-open"></i>
                        <span>Todos los Productos</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            <Routes>
                <Route exact path="/" element={<ContentWrapper/>} />
                <Route  path="/AllUsers" element={<AllUsers/>} />
                <Route  path="/AllProducts" element={<AllProducts/>} />
                <Route  path="*" element={<NotFound/>} />

            </Routes>

        </React.Fragment>
    )
}
export default SideBar;