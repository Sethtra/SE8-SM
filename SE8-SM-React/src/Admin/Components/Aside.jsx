import React from 'react'
import Nav from './Nav';

function Aside() {
  return (

      <aside
        className="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-start ms-2  bg-white my-2"
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          />
          <a
            className="navbar-brand px-4 py-3 m-0"
            href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
            target="_blank"
          >
            <img
              src="../assets/img/logo-ct-dark.png"
              className="navbar-brand-img"
              width={26}
              height={26}
              alt="main_logo"
            />
            <span className="ms-1 text-sm text-dark">Creative Tim</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0 mb-2" />
        <div
          className="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active bg-gradient-dark text-white"
                href="../pages/dashboard.html"
              >
                <i className="material-symbols-rounded opacity-5">dashboard</i>
                <span className="nav-link-text ms-1">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="../pages/tables.html">
                <i className="material-symbols-rounded opacity-5">table_view</i>
                <span className="nav-link-text ms-1">Tables</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="../pages/billing.html">
                <i className="material-symbols-rounded opacity-5">
                  receipt_long
                </i>
                <span className="nav-link-text ms-1">Billing</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="../pages/virtual-reality.html"
              >
                <i className="material-symbols-rounded opacity-5">view_in_ar</i>
                <span className="nav-link-text ms-1">Virtual Reality</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="../pages/rtl.html">
                <i className="material-symbols-rounded opacity-5">
                  format_textdirection_r_to_l
                </i>
                <span className="nav-link-text ms-1">RTL</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-dark"
                href="../pages/notifications.html"
              >
                <i className="material-symbols-rounded opacity-5">
                  notifications
                </i>
                <span className="nav-link-text ms-1">Notifications</span>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs text-dark font-weight-bolder opacity-5">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="../pages/profile.html">
                <i className="material-symbols-rounded opacity-5">person</i>
                <span className="nav-link-text ms-1">Profile</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="../pages/sign-in.html">
                <i className="material-symbols-rounded opacity-5">login</i>
                <span className="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="../pages/sign-up.html">
                <i className="material-symbols-rounded opacity-5">assignment</i>
                <span className="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer position-absolute w-100 bottom-0 ">
          <div className="mx-3">
            <a
              className="btn btn-outline-dark mt-4 w-100"
              href="https://www.creative-tim.com/learning-lab/bootstrap/overview/material-dashboard?ref=sidebarfree"
              type="button"
            >
              Documentation
            </a>
            <a
              className="btn bg-gradient-dark w-100"
              href="https://www.creative-tim.com/product/material-dashboard-pro?ref=sidebarfree"
              type="button"
            >
              Upgrade to pro
            </a>
          </div>
        </div>
      </aside>
    
  );
}

export default Aside