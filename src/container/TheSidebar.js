import logo from '../assets/svgs/logo2.svg'
import React from "react";


const TheSidebar = () => {
  return (
    <>
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary ">
        {/* Brand Logo */}

        <a href="/" className="brand-link">
          <img
            src={logo}
            alt={"eShaafi Logo"}
            className={"brand-image"}
            width={90}
            height={80}
          />
          <span className="brand-text font-weight-light">eShaafi.com</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class with font-awesome or any other icon font library */}
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="nav-icon fas fa-user-md" />
                  <p>
                    Doctors
                  </p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default TheSidebar;
