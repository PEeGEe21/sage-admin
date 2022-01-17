import React from 'react'
import './../style.css'
import './header.css'
import {Add, NotificationsNone} from '@material-ui/icons'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <>
            <header id="page-topbar">
            <div className="navbar-header">

                <div className="d-flex align-items-left">
                    <button type="button" className="  btn btn-sm mr-2 d-lg-none px-3 font-size-16 header-item waves-effect" id="vertical-menu-btn">
                        <i className="fa fa-fw fa-bars"></i>
                    </button>

                    <div className="dropdown d-none d-sm-inline-block show">
                        <button type="button" className="topbar_create_btn btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
							<Add className="add-icon"/> Add New
                            <i className="fa fa-chevron-down d-none d-sm-inline-block"></i>
                        </button>
                        <div className="dropdown-menu ">

                            
                            <Link to="/new-product" className="dropdown-item notify-item">
                                Product
                            </Link>

                            
                            <Link to="/new-user " className="dropdown-item notify-item">
                                User
                            </Link>

                            <Link to="/new-category " className="dropdown-item notify-item">
								Category
                            </Link>

                        

                            
                        </div>
                    </div>
                </div>

                <div className="d-flex align-items-center">

                    {/* <div className="dropdown d-none d-sm-inline-block ml-2">
                        <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="mdi mdi-magnify"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">

                            <form className="p-3">
                                <div className="form-group m-0">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> */}

                    <div className="kt-header__topbar-item kt-header__topbar-item--search dropdown" id="kt_quick_search_toggle">
								<div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px" aria-expanded="false">
									<span className="kt-header__topbar-icon">
										<svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
											<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
												<rect id="bound" x="0" y="0" width="24" height="24"></rect>
												<path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" id="Path-2" fill="#000000" fillRule="nonzero" opacity="0.3"></path>
												<path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" id="Path" fill="#000000" fillRule="nonzero"></path>
											</g>
										</svg> </span>
								</div>
								<div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0" aria-labelledby="page-header-search-dropdown">

									<form className="p-3">
										<div className="form-group m-0">
											<div className="input-group">
												<input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username"/>
												<div className="input-group-append">
													<button className="btn btn-primary" type="submit"><i className="fa fa-search"></i></button>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>


                            <div className="kt-header__topbar-item dropdown">
								<div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="30px,0px" aria-expanded="false">
									<span className="kt-header__topbar-icon kt-pulse kt-pulse--brand">
										<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
											<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
												<rect id="bound" x="0" y="0" width="24" height="24"></rect>
												<path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
												<path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" id="Combined-Shape" fill="#000000"></path>
											</g>
										</svg> <span className="kt-pulse__ring"></span>
									</span>

                {/* <span className="kt-badge kt-badge--dot kt-badge--notify kt-badge--sm kt-badge--brand"></span> */}
        
								</div>
								<div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-lg" x-placement="bottom-end" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(44px, 64px, 0px)'}}>
									<form>

										<div className="kt-head kt-head--skin-dark kt-head--fit-x kt-head--fit-b" style={{backgroundImage: 'url(../assets/media/misc/bg-1.jpg)'}}>
											<h3 className="kt-head__title">
												User Notifications
												&nbsp;
												<span className="btn btn-success btn-sm btn-bold btn-font-md">23 new</span>
											</h3>
											<ul className="nav nav-tabs nav-tabs-line nav-tabs-bold nav-tabs-line-3x nav-tabs-line-success kt-notification-item-padding-x" role="tablist">
												<li className="nav-item">
													<a className="nav-link active show" data-toggle="tab" href="#topbar_notifications_notifications" role="tab" aria-selected="true">Alerts</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" data-toggle="tab" href="#topbar_notifications_events" role="tab" aria-selected="false">Events</a>
												</li>
												<li className="nav-item">
													<a className="nav-link" data-toggle="tab" href="#topbar_notifications_logs" role="tab" aria-selected="false">Logs</a>
												</li>
											</ul>
										</div>

										<div className="tab-content">
											<div className="tab-pane active show" id="topbar_notifications_notifications" role="tabpanel">
												<div className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll ps" data-scroll="true" data-height="300" data-mobile-height="200" style={{height: '300px', overflow: 'hidden'}}>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-line-chart kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New order has been received
															</div>
															<div className="kt-notification__item-time">
																2 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-box-1 kt-font-brand"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New customer is registered
															</div>
															<div className="kt-notification__item-time">
																3 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-chart2 kt-font-danger"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																Application has been approved
															</div>
															<div className="kt-notification__item-time">
																3 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-image-file kt-font-warning"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New file has been uploaded
															</div>
															<div className="kt-notification__item-time">
																5 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-bar-chart kt-font-info"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New user feedback received
															</div>
															<div className="kt-notification__item-time">
																8 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-pie-chart-2 kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																System reboot has been successfully completed
															</div>
															<div className="kt-notification__item-time">
																12 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-favourite kt-font-danger"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New order has been placed
															</div>
															<div className="kt-notification__item-time">
																15 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item kt-notification__item--read">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-safe kt-font-primary"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																Company meeting canceled
															</div>
															<div className="kt-notification__item-time">
																19 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-psd kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New report has been received
															</div>
															<div className="kt-notification__item-time">
																23 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon-download-1 kt-font-danger"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																Finance report has been generated
															</div>
															<div className="kt-notification__item-time">
																25 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon-security kt-font-warning"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New customer comment recieved
															</div>
															<div className="kt-notification__item-time">
																2 days ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-pie-chart kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New customer is registered
															</div>
															<div className="kt-notification__item-time">
																3 days ago
															</div>
														</div>
													</a>
												
												</div>
											</div>
											<div className="tab-pane" id="topbar_notifications_events" role="tabpanel">
												<div className="kt-notification kt-margin-t-10 kt-margin-b-10 kt-scroll ps" data-scroll="true" data-height="300" data-mobile-height="200" style={{height: '300px', overflow: 'hidden'}}>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-psd kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New report has been received
															</div>
															<div className="kt-notification__item-time">
																23 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon-download-1 kt-font-danger"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																Finance report has been generated
															</div>
															<div className="kt-notification__item-time">
																25 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-line-chart kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New order has been received
															</div>
															<div className="kt-notification__item-time">
																2 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-box-1 kt-font-brand"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New customer is registered
															</div>
															<div className="kt-notification__item-time">
																3 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-chart2 kt-font-danger"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																Application has been approved
															</div>
															<div className="kt-notification__item-time">
																3 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-image-file kt-font-warning"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New file has been uploaded
															</div>
															<div className="kt-notification__item-time">
																5 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-bar-chart kt-font-info"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New user feedback received
															</div>
															<div className="kt-notification__item-time">
																8 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-pie-chart-2 kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																System reboot has been successfully completed
															</div>
															<div className="kt-notification__item-time">
																12 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-favourite kt-font-brand"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New order has been placed
															</div>
															<div className="kt-notification__item-time">
																15 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item kt-notification__item--read">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-safe kt-font-primary"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																Company meeting canceled
															</div>
															<div className="kt-notification__item-time">
																19 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-psd kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New report has been received
															</div>
															<div className="kt-notification__item-time">
																23 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon-download-1 kt-font-danger"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																Finance report has been generated
															</div>
															<div className="kt-notification__item-time">
																25 hrs ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon-security kt-font-warning"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New customer comment recieved
															</div>
															<div className="kt-notification__item-time">
																2 days ago
															</div>
														</div>
													</a>
													<a href="#" className="kt-notification__item">
														<div className="kt-notification__item-icon">
															<i className="flaticon2-pie-chart kt-font-success"></i>
														</div>
														<div className="kt-notification__item-details">
															<div className="kt-notification__item-title">
																New customer is registered
															</div>
															<div className="kt-notification__item-time">
																3 days ago
															</div>
														</div>
													</a>
												
												
												</div>
											</div>
											<div className="tab-pane" id="topbar_notifications_logs" role="tabpanel">
												<div className="kt-grid kt-grid--ver" style={{minHeight: '200px'}}>
													<div className="kt-grid kt-grid--hor kt-grid__item kt-grid__item--fluid kt-grid__item--middle">
														<div className="kt-grid__item kt-grid__item--middle kt-align-center">
															All caught up!
															<br/>No new notifications.
														</div>
													</div>
												</div>
											</div>
										</div>
									</form>
								</div>
							</div>

                    <div className="kt-header__topbar-item kt-header__topbar-item--quick-panel" >
								<span className="kt-header__topbar-icon" id="kt_quick_panel_toggler_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
										<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
											<rect id="bound" x="0" y="0" width="24" height="24"></rect>
											<rect id="Rectangle-7" fill="#000000" x="4" y="4" width="7" height="7" rx="1.5"></rect>
											<path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" id="Combined-Shape" fill="#000000" opacity="0.3"></path>
										</g>
									</svg> 
                                </span>
							</div>

                    

                            <div className="kt-header__topbar-item kt-header__topbar-item--langs">
								<div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="10px,0px">
									<span className="kt-header__topbar-icon">
										<img className="" src="/assets/flags/us.jpg" alt=""/>
									</span>
								</div>
								<div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround">
									<ul className="kt-nav kt-margin-t-10 kt-margin-b-10">
										<li className="kt-nav__item kt-nav__item--active">
											<a href="#" className="kt-nav__link">
												<span className="kt-nav__link-icon"><img src="/assets/flags/germany.jpg" alt=""/></span>
												<span className="kt-nav__link-text">Germany</span>
											</a>
										</li>
										<li className="kt-nav__item">
											<a href="#" className="kt-nav__link">
												<span className="kt-nav__link-icon"><img src="/assets/flags/spain.jpg" alt=""/></span>
												<span className="kt-nav__link-text">Spanish</span>
											</a>
										</li>
										<li className="kt-nav__item">
											<a href="#" className="kt-nav__link">
												<span className="kt-nav__link-icon"><img src="/assets/flags/italy.jpg" alt=""/></span>
												<span className="kt-nav__link-text">Italy</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
                    {/* <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="" src="/assets/flags/us.jpg" alt="Header Language" height="16"/>
                            <span className="d-none d-sm-inline-block ml-1">English</span>
                            <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" >

                        
                            <a href=" " className="dropdown-item notify-item">
                                <img src="/assets/flags/germany.jpg" alt="user-image" className="mr-1" height="12"/>
                                <span className="align-middle">Spanish</span>
                            </a>

                            
                            <a href=" " className="dropdown-item notify-item">
                                <img src="/assets/flags/germany.jpg" alt="user-image" className="mr-1" height="12"/>
                                <span className="align-middle">German</span>
                            </a>

                            <a href=" " className="dropdown-item notify-item">
                                <img src="/assets/flags/italy.jpg" alt="user-image" className="mr-1" height="12"/>
                                <span className="align-middle">Italian</span>
                            </a>

                            <a href=" " className="dropdown-item notify-item">
                                <img src="/assets/flags/russia.jpg" alt="user-image" className="mr-1" height="12"/>
                                <span className="align-middle">Russian</span>
                            </a>
                        </div>
                    </div> */}

							<div className="kt-header__topbar-item kt-header__topbar-item--quick-panel" >
								<span className="kt-header__topbar-icon " id="kt_quick_panel_toggler_btn">
								<svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
									<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
										<path d="M17,12 L18.5,12 C19.3284271,12 20,12.6715729 20,13.5 C20,14.3284271 19.3284271,15 18.5,15 L5.5,15 C4.67157288,15 4,14.3284271 4,13.5 C4,12.6715729 4.67157288,12 5.5,12 L7,12 L7.5582739,6.97553494 C7.80974924,4.71225688 9.72279394,3 12,3 C14.2772061,3 16.1902508,4.71225688 16.4417261,6.97553494 L17,12 Z" id="Combined-Shape" fill="#000000"/>
										<rect id="Rectangle-23" fill="#000000" opacity="0.3" x="10" y="16" width="4" height="4" rx="2"/>
									</g>
								</svg>

									<span className="topIconBadge">3</span>
                                </span>
								
							</div>


                    <div className="kt-header__topbar-item kt-header__topbar-item--user">
								<div className="kt-header__topbar-wrapper" data-toggle="dropdown" data-offset="0px,0px">
									<div className="kt-header__topbar-user">
										<span className="kt-header__topbar-welcome kt-hidden-mobile">Hi,</span>
										<span className="kt-header__topbar-username kt-hidden-mobile">Jamie D. </span>
                                        {/* <span className="kt-badge kt-badge--username kt-badge--unified-success kt-badge--lg kt-badge--rounded kt-badge--bold"> D.</span> */}
                                        <img className="rounded-circle header-profile-user" src="/assets/users/avatar-3.jpg" alt="Header Avatar"/>
										
									</div>
								</div>
								<div className="dropdown-menu dropdown-menu-fit dropdown-menu-right dropdown-menu-anim dropdown-menu-top-unround dropdown-menu-xl">

									
									<div className="kt-user-card kt-user-card--skin-dark kt-notification-item-padding-x" style={{backgroundImage: 'url(../assets/media/misc/bg-1.jpg)'}}>
										<div className="kt-user-card__avatar">
											<img className="kt-hidden" alt="Pic" src=""/>

											<span className="kt-badge kt-badge--lg kt-badge--rounded kt-badge--bold kt-font-success">S</span>
										</div>
										<div className="kt-user-card__name">
											Sean Stone
										</div>
										<div className="kt-user-card__badge">
											<span className="btn btn-success btn-sm btn-bold btn-font-md">23 messages</span>
										</div>
									</div>

									<div className="kt-notification">
										<a href="#" className="kt-notification__item">
											<div className="kt-notification__item-icon">
												<i className="flaticon2-calendar-3 kt-font-success"></i>
											</div>
											<div className="kt-notification__item-details">
												<div className="kt-notification__item-title kt-font-bold">
													My Profile
												</div>
												<div className="kt-notification__item-time">
													Account settings and more
												</div>
											</div>
										</a>
										<a href="#" className="kt-notification__item">
											<div className="kt-notification__item-icon">
												<i className="flaticon2-mail kt-font-warning"></i>
											</div>
											<div className="kt-notification__item-details">
												<div className="kt-notification__item-title kt-font-bold">
													My Messages
												</div>
												<div className="kt-notification__item-time">
													Inbox and tasks
												</div>
											</div>
										</a>
										<a href="#" className="kt-notification__item">
											<div className="kt-notification__item-icon">
												<i className="flaticon2-rocket-1 kt-font-danger"></i>
											</div>
											<div className="kt-notification__item-details">
												<div className="kt-notification__item-title kt-font-bold">
													My Activities
												</div>
												<div className="kt-notification__item-time">
													Logs and notifications
												</div>
											</div>
										</a>
										<a href="#" className="kt-notification__item">
											<div className="kt-notification__item-icon">
												<i className="flaticon2-hourglass kt-font-brand"></i>
											</div>
											<div className="kt-notification__item-details">
												<div className="kt-notification__item-title kt-font-bold">
													My Tasks
												</div>
												<div className="kt-notification__item-time">
													latest tasks and projects
												</div>
											</div>
										</a>
										<div className="kt-notification__custom">
											<a href="custom_user_login-v2.html" target="_blank" className="btn btn-label-brand btn-sm btn-bold">Sign Out</a>
										</div>
									</div>

								</div>
							</div>


                    {/* <div className="dropdown d-inline-block">
                        <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="rounded-circle header-profile-user" src="/assets/users/avatar-1.jpg" alt="Header Avatar"/>
                            <span className="d-none d-sm-inline-block ml-1">Jamie D.</span>
                            <i className="mdi mdi-chevron-down d-none d-sm-inline-block"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" >
                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="">
                                <span>Inbox</span>
                                <span>
                                    <span className="badge badge-pill badge-soft-primary">3</span>
                                </span>
                            </a>
                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="">
                                <span>Profile</span>
                                <span>
                                    <span className="badge badge-pill badge-soft-danger">1</span>
                                </span>
                            </a>
                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="">
                                Settings
                            </a>
                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="">
                                <span>Lock Account</span>
                            </a>
                            <a className="dropdown-item d-flex align-items-center justify-content-between" href="">
                                <span>Log Out</span>
                            </a>
                        </div>
                    </div> */}

                </div>
            </div>
        </header>
        </>
    )
}

export default Header
