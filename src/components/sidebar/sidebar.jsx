import React from 'react'
import { Link } from 'react-router-dom'
import './../style.css'
import './sidebar.css'

export default function SideBar() {
    return (
        <>
            <div className="vertical-menu">

                <div data-simplebar className="h-100">

                    <div className="navbar-brand-box">
                        <a href="index.html" className="logo">
                            <img src="/assets/logo/logo.svg" />
                        </a>
                    </div>

                    <div id="sidebar-menu">
                        <ul className="metismenu list-unstyled" id="side-menu">
                            <li className="menu-title">Menu</li>
                            
                            <li className="menu-list-item">
                                <Link to="/" className="waves-effect">
                                    <i className='bx bx-home-smile'></i>
                                    <span className="badge badge-pill badge-primary float-right">3</span>
                                    <span>Dashboard</span>
                                </Link>
                            </li>

                            <li className="menu-list-item">
                                <Link to="/analytics" className="waves-effect">
                                    <span className="sidebar-svg">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
												<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
													<rect id="bound" x="0" y="0" width="24" height="24"></rect>
													<rect id="Combined-Shape" fill="#000000" opacity="0.3" x="2" y="3" width="20" height="18" rx="2"></rect>
													<path d="M9.9486833,13.3162278 C9.81256925,13.7245699 9.43043041,14 9,14 L5,14 C4.44771525,14 4,13.5522847 4,13 C4,12.4477153 4.44771525,12 5,12 L8.27924078,12 L10.0513167,6.68377223 C10.367686,5.73466443 11.7274983,5.78688777 11.9701425,6.75746437 L13.8145063,14.1349195 L14.6055728,12.5527864 C14.7749648,12.2140024 15.1212279,12 15.5,12 L19,12 C19.5522847,12 20,12.4477153 20,13 C20,13.5522847 19.5522847,14 19,14 L16.118034,14 L14.3944272,17.4472136 C13.9792313,18.2776054 12.7550291,18.143222 12.5298575,17.2425356 L10.8627389,10.5740611 L9.9486833,13.3162278 Z" id="Path-108" fill="#000000" fillRule="nonzero"></path>
													<circle id="Oval" fill="#000000" opacity="0.3" cx="19" cy="6" r="1"></circle>
												</g>
											</svg>
                                    </span>
                                    <span>Analytics</span>
                                </Link>
                            </li>

                            <li className="menu-list-item">
                                <Link to="/sales" className="waves-effect">
                                    <i className='bx bx-home-smile'></i>
                                    <span>Sales</span>
                                </Link>
                            </li>
                            <li className="menu-list-item">
                                <Link to="/editor" className="waves-effect">
                                    <i className='bx bx-home-smile'></i>
                                    <span>Editor</span>
                                </Link>
                            </li>


                            <li className="menu-title">More</li>


                            <li className="menu-list-item">
                                <Link to="/users" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Users</span>
                                </Link>
                            </li>

                            <li className="menu-list-item">
                                <Link to="/products" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Products</span>
                                </Link>
                            </li>
                            <li className="menu-list-item">
                                <Link to="/categories" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Categories</span>
                                </Link>
                            </li>
                            <li className="menu-list-item">
                                <Link to="/reports" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Reports</span>
                                </Link>
                            </li>


                            <li className="menu-title">Notifications</li>


                            <li className="menu-list-item">
                                <Link to="/mail" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Mail</span>
                                </Link>
                            </li>

                            <li className="menu-list-item">
                                <Link to="/feedback" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Feedback</span>
                                </Link>
                            </li>

                            <li className="menu-list-item">
                                <Link to="/messages" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Messages</span>
                                </Link>
                            </li>
                            



                            <li className="menu-title">Notifications</li>

                            <li className="menu-list-item">
                                <Link to="/manage" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Manage</span>
                                </Link>
                            </li>

                            <li className="menu-list-item">
                                <Link to="/analytics" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Analytics</span>
                                </Link>
                            </li>

                            <li className="menu-list-item">
                                <Link to="/reports" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Reports</span>
                                </Link>
                            </li>
                            <li className="menu-list-item">
                                <Link to="/reports" className=" waves-effect">
                                    <i className="bx bx-calendar"></i>
                                    <span>Staff</span>
                                </Link>
                            </li>

                            

                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    )
}
