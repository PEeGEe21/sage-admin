import React from 'react'
import { Link } from 'react-router-dom'
import './user.css'

export default function User() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="page-title-box d-flex align-items-center justify-content-between">
                        <h4 className="mb-0 font-size-18">Edit Users</h4>

                        <div className="page-title-right">
                            <Link to="/new-user">
                            <button type="button" className="btn btn-success btn-wide">Create</button>
                            </Link>                     
                        </div>

                    </div>
                </div>
            </div>
            {/* kt-portlet--height-fluid */}
            <div className="row">
                <div className="col-xl-4 col-md-6">
                    <div className="kt-portlet ">
                        <div className="kt-portlet__head">
                            <div className="kt-portlet__head-label">
                                <h3 className="kt-portlet__head-title">
                                    User Details
                                </h3>
                            </div>
                            <div className="kt-portlet__head-toolbar">
                                <a href="#" className="btn btn-label-brand btn-sm  btn-bold dropdown-toggle" data-toggle="dropdown">
                                    Export
                                </a>
                                <div className="dropdown-menu dropdown-menu-fit dropdown-menu-right">
                                    <ul className="kt-nav">
                                        <li className="kt-nav__section kt-nav__section--first">
                                            <span className="kt-nav__section-text">Finance</span>
                                        </li>
                                        <li className="kt-nav__item">
                                            <a href="#" className="kt-nav__link">
                                                <i className="kt-nav__link-icon flaticon2-graph-1"></i>
                                                <span className="kt-nav__link-text">Statistics</span>
                                            </a>
                                        </li>
                                        <li className="kt-nav__item">
                                            <a href="#" className="kt-nav__link">
                                                <i className="kt-nav__link-icon flaticon2-calendar-4"></i>
                                                <span className="kt-nav__link-text">Events</span>
                                            </a>
                                        </li>
                                        <li className="kt-nav__item">
                                            <a href="#" className="kt-nav__link">
                                                <i className="kt-nav__link-icon flaticon2-layers-1"></i>
                                                <span className="kt-nav__link-text">Reports</span>
                                            </a>
                                        </li>
                                        <li className="kt-nav__section kt-nav__section--first">
                                            <span className="kt-nav__section-text">HR</span>
                                        </li>
                                        <li className="kt-nav__item">
                                            <a href="#" className="kt-nav__link">
                                                <i className="kt-nav__link-icon flaticon2-calendar-4"></i>
                                                <span className="kt-nav__link-text">Notifications</span>
                                            </a>
                                        </li>
                                        <li className="kt-nav__item">
                                            <a href="#" className="kt-nav__link">
                                                <i className="kt-nav__link-icon flaticon2-file-1"></i>
                                                <span className="kt-nav__link-text">Files</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="kt-portlet__body">
                            <div className="kt-widget13">
                                
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', paddingBottom: '10px'}}>
                                    <img src="/assets/users/avatar-6.jpg" alt="image" className="img-fluid rounded-circle" width="120"/>
                                </div>
                                <div className="kt-widget13__item">
                                    <span className="kt-widget13__desc">
                                        Username
                                    </span>
                                    <span className="kt-widget13__text kt-widget13__text--bold">
                                        Snow Jon
                                    </span>
                                </div>
                                <div className="kt-widget13__item">
                                    <span className="kt-widget13__desc">
                                        Fist Name:
                                    </span>
                                    <span className="kt-widget13__text ">
                                        Udeh
                                    </span>
                                </div>
                                <div className="kt-widget13__item">
                                    <span className="kt-widget13__desc">
                                        Last Name:
                                    </span>
                                    <span className="kt-widget13__text ">
                                        Praise
                                    </span>
                                </div>
                                <div className="kt-widget13__item">
                                    <span className="kt-widget13__desc">
                                        Email:
                                    </span>
                                    <span className="kt-widget13__text">
                                        jon@gmail.com
                                    </span>
                                </div>
                                <div className="kt-widget13__item">
                                    <span className="kt-widget13__desc">
                                        Phone:
                                    </span>
                                    <span className="kt-widget13__text ">
                                        (+234) 902 895 0691
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-xl-8 col-md-6">
                    <div className="kt-portlet">
                        <div className="kt-portlet__head">
                            <div className="kt-portlet__head-label">
                                <h3 className="kt-portlet__head-title">
                                    Update User
                                </h3>
                            </div>
                        </div>

                        <div className="kt-portlet__body">
                            <form className="needs-validation" noValidate>
                                <div className="form-row mb-3">
                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="fname">First name</label>
                                    <input type="text" className="form-control" id="fname" placeholder="First name"/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="lname">Last name</label>
                                    <input type="text" className="form-control" id="lname" placeholder="Last name"/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="username">Username</label>
                                    {/* <div className="input-group"> */}
                                        {/* <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        </div> */}
                                        <input type="text" className="form-control" id="username" placeholder="Username" aria-describedby="inputGroupPrepend"/>
                                        <div className="invalid-feedback">
                                        Please choose a username.
                                        </div>
                                    {/* </div> */}
                                    </div>
                                </div>

                                <div className="form-row mb-3">
                                    <div className="col-md-6 mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email"/>
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                    </div>

                                    <div className="col-md-6 mb-3">
                                    <label htmlFor="mobno">Phone Number</label>
                                    <input type="text" className="form-control" id="mobno" placeholder="Phone Number"/>
                                    <div className="invalid-feedback">
                                        Please provide a valid Number.
                                    </div>
                                    </div>
                                </div>


                                <div className="form-row mb-3">
                                    <div className="col-md-12" style={{display: 'flex', alignItems: 'center', justifyContent: 'start', marginBottom: '20px', marginTop: '10px', paddingBottom: '10px'}}>
                                    <div >
                                        <img src="/assets/users/avatar-6.jpg" alt="image" className="img-fluid rounded-circle" width="120"/>
                                    </div>

                                        <label htmlFor="img">
                                            <div className="updateUploadIcon">
                                                <svg xmlns="http://www.w3.org/2000/svg"width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                                    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                        <rect id="bound" x="0" y="0" width="24" height="24"/>
                                                        <path d="M2,13 C2,12.5 2.5,12 3,12 C3.5,12 4,12.5 4,13 C4,13.3333333 4,15 4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 C2,15 2,13.3333333 2,13 Z" id="Path-57" fill="#000000" fillRule="nonzero" opacity="0.3"/>
                                                        <rect id="Rectangle" fill="#000000" opacity="0.3" x="11" y="2" width="2" height="14" rx="1"/>
                                                        <path d="M12.0362375,3.37797611 L7.70710678,7.70710678 C7.31658249,8.09763107 6.68341751,8.09763107 6.29289322,7.70710678 C5.90236893,7.31658249 5.90236893,6.68341751 6.29289322,6.29289322 L11.2928932,1.29289322 C11.6689749,0.916811528 12.2736364,0.900910387 12.6689647,1.25670585 L17.6689647,5.75670585 C18.0794748,6.12616487 18.1127532,6.75845471 17.7432941,7.16896473 C17.3738351,7.57947475 16.7415453,7.61275317 16.3310353,7.24329415 L12.0362375,3.37797611 Z" id="Path-102" fill="#000000" fillRule="nonzero"/>
                                                    </g>
                                                </svg>
                                            </div>

                                        </label>
                                        <input type="file" className="form-control d-none" id="img"/>
                                        <div className="invalid-feedback">
                                            Please provide a valid city.
                                        </div>
                                    </div>

                                </div>


                                
                                <button className="btn btn-primary btn-wide" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
