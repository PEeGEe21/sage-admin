import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import React from 'react'
import './../../components/style.css'
import './home.css'
import './../../components/chart/chart'
import Chart from './../../components/chart/chart'

import { userData } from '../../dummyData'
import SinglePopularProduct from './components/singlePopularProduct'
import NewUser from './components/newUser'
import BestSellers from './components/bestSellers'
function Home() {
    return (
        <>

                    <div className="row">
                        <div className="col-12">
                            <div className="page-title-box d-flex align-items-center justify-content-between">
                                <h4 className="mb-0 font-size-18">Dashboard</h4>

                                <div className="page-title-right">
                                    <ol className="breadcrumb m-0">
                                        <li className="breadcrumb-item"><a href="/">Sage</a></li>
                                        <li className="breadcrumb-item active">Analytics</li>
                                    </ol>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6">
                            <div className="card card-animate">
                                <div className="card-body">
                                    <div className="avatar-sm float-right">
                                        <span className="avatar-title bg-soft-primary rounded-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"/>
                                                <circle id="Oval-47" fill="#000000" opacity="0.3" cx="20.5" cy="12.5" r="1.5"/>
                                                <rect id="Rectangle-162" fill="#000000" opacity="0.3" transform="translate(12.000000, 6.500000) rotate(-15.000000) translate(-12.000000, -6.500000) " x="3" y="3" width="18" height="7" rx="1"/>
                                                <path d="M22,9.33681558 C21.5453723,9.12084552 21.0367986,9 20.5,9 C18.5670034,9 17,10.5670034 17,12.5 C17,14.4329966 18.5670034,16 20.5,16 C21.0367986,16 21.5453723,15.8791545 22,15.6631844 L22,18 C22,19.1045695 21.1045695,20 20,20 L4,20 C2.8954305,20 2,19.1045695 2,18 L2,6 C2,4.8954305 2.8954305,4 4,4 L20,4 C21.1045695,4 22,4.8954305 22,6 L22,9.33681558 Z" id="Combined-Shape" fill="#000000"/>
                                            </g>
                                        </svg>

                                        </span>
                                    </div>
                                    <h6 className="text-muted text-uppercase mt-0">Project Income</h6>
                                    <h3 className="my-3 d-flex align-items-center">$4,514 <ArrowUpward className="featuredIcon positive"/></h3>
                                    <span className="badge rate badge-soft-primary mr-1"> +11% </span> <span className="text-muted">From previous period</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div className="card card-animate">
                                <div className="card-body">
                                    <div className="avatar-sm float-right">
                                        <span className="avatar-title bg-soft-primary rounded-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg"  width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"/>
                                                <rect id="Rectangle" fill="#000000" opacity="0.3" x="11.5" y="2" width="2" height="4" rx="1"/>
                                                <rect id="Rectangle-Copy-3" fill="#000000" opacity="0.3" x="11.5" y="16" width="2" height="5" rx="1"/>
                                                <path d="M15.493,8.044 C15.2143319,7.68933156 14.8501689,7.40750104 14.4005,7.1985 C13.9508311,6.98949895 13.5170021,6.885 13.099,6.885 C12.8836656,6.885 12.6651678,6.90399981 12.4435,6.942 C12.2218322,6.98000019 12.0223342,7.05283279 11.845,7.1605 C11.6676658,7.2681672 11.5188339,7.40749914 11.3985,7.5785 C11.2781661,7.74950085 11.218,7.96799867 11.218,8.234 C11.218,8.46200114 11.2654995,8.65199924 11.3605,8.804 C11.4555005,8.95600076 11.5948324,9.08899943 11.7785,9.203 C11.9621676,9.31700057 12.1806654,9.42149952 12.434,9.5165 C12.6873346,9.61150047 12.9723317,9.70966616 13.289,9.811 C13.7450023,9.96300076 14.2199975,10.1308324 14.714,10.3145 C15.2080025,10.4981676 15.6576646,10.7419985 16.063,11.046 C16.4683354,11.3500015 16.8039987,11.7268311 17.07,12.1765 C17.3360013,12.6261689 17.469,13.1866633 17.469,13.858 C17.469,14.6306705 17.3265014,15.2988305 17.0415,15.8625 C16.7564986,16.4261695 16.3733357,16.8916648 15.892,17.259 C15.4106643,17.6263352 14.8596698,17.8986658 14.239,18.076 C13.6183302,18.2533342 12.97867,18.342 12.32,18.342 C11.3573285,18.342 10.4263378,18.1741683 9.527,17.8385 C8.62766217,17.5028317 7.88033631,17.0246698 7.285,16.404 L9.413,14.238 C9.74233498,14.6433354 10.176164,14.9821653 10.7145,15.2545 C11.252836,15.5268347 11.7879973,15.663 12.32,15.663 C12.5606679,15.663 12.7949989,15.6376669 13.023,15.587 C13.2510011,15.5363331 13.4504991,15.4540006 13.6215,15.34 C13.7925009,15.2259994 13.9286662,15.0740009 14.03,14.884 C14.1313338,14.693999 14.182,14.4660013 14.182,14.2 C14.182,13.9466654 14.1186673,13.7313342 13.992,13.554 C13.8653327,13.3766658 13.6848345,13.2151674 13.4505,13.0695 C13.2161655,12.9238326 12.9248351,12.7908339 12.5765,12.6705 C12.2281649,12.5501661 11.8323355,12.420334 11.389,12.281 C10.9583312,12.141666 10.5371687,11.9770009 10.1255,11.787 C9.71383127,11.596999 9.34650161,11.3531682 9.0235,11.0555 C8.70049838,10.7578318 8.44083431,10.3968355 8.2445,9.9725 C8.04816568,9.54816454 7.95,9.03200304 7.95,8.424 C7.95,7.67666293 8.10199848,7.03700266 8.406,6.505 C8.71000152,5.97299734 9.10899753,5.53600171 9.603,5.194 C10.0970025,4.85199829 10.6543302,4.60183412 11.275,4.4435 C11.8956698,4.28516587 12.5226635,4.206 13.156,4.206 C13.9160038,4.206 14.6918294,4.34533194 15.4835,4.624 C16.2751706,4.90266806 16.9686637,5.31433061 17.564,5.859 L15.493,8.044 Z" id="Combined-Shape" fill="#000000"/>
                                            </g>
                                        </svg>
                                        </span>
                                    </div>
                                    <h6 className="text-muted text-uppercase mt-0">Net Revenue</h6>
                                    <h3 className="my-3 d-flex align-items-center">$85,365 <ArrowDownward className="featuredIcon negative"/></h3>
                                    <span className="badge rate badge-soft-primary mr-1"> -29% </span> <span className="text-muted">This Month</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6">
                            <div className="card card-animate">
                                <div className="card-body">
                                    <div className="avatar-sm float-right">
                                        <span className="avatar-title bg-soft-primary rounded-circle">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" className="kt-svg-icon">
                                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <rect id="bound" x="0" y="0" width="24" height="24"/>
                                                <rect id="Rectangle-62-Copy" fill="#000000" opacity="0.3" x="12" y="4" width="3" height="13" rx="1.5"/>
                                                <rect id="Rectangle-62-Copy-2" fill="#000000" opacity="0.3" x="7" y="9" width="3" height="8" rx="1.5"/>
                                                <path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" id="Path-95" fill="#000000" fillRule="nonzero"/>
                                                <rect id="Rectangle-62-Copy-4" fill="#000000" opacity="0.3" x="17" y="11" width="3" height="6" rx="1.5"/>
                                            </g>
                                        </svg>

                                        </span>
                                    </div>
                                    <h6 className="text-muted text-uppercase mt-0">Sales</h6>
                                    <h3 className="my-3 d-flex align-items-center">$<span>9.94</span> <ArrowUpward className="featuredIcon positive" /></h3>
                                    <span className="badge rate badge-soft-primary mr-1"> +4% </span> <span className="text-muted">This Month</span>
                                </div>
                            </div>
                        </div>

                    </div>
                        <div className="row">

                            <div className="col-lg-8 ">
                                <Chart data={userData} dataKey="Active User" grid title="Total Revenue" extra price="2000" total_number="26"/>
                            </div> 

                            
                                <SinglePopularProduct />
                                
                        </div>

                        <div className="row" style={{height: 'calc(100% - 20px)'}}>
								<div className="col-xl-8">

									<BestSellers />

								</div>
								<div className="col-xl-4">

									<NewUser/>

								</div>
							</div>

                    

                    <div className="row">
                        <div className="col-lg-4">
                             <div className="card card-animate">
                                <div className="card-body">
                                    <div className="dropdown float-right position-relative">
                                        <a href="#" className="dropdown-toggle h4 text-muted" data-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a href="#" className="dropdown-item">Action</a></li>
                                            <li><a href="#" className="dropdown-item">Another action</a></li>
                                            <li><a href="#" className="dropdown-item">Something else here</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a href="#" className="dropdown-item">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <h4 className="card-title d-inline-block mb-3">Team Members - Messages</h4>

                                    <div data-simplebar style={{maxHeight: '380px'}}>
                                        <a href="#" className="d-flex align-items-center border-bottom py-3">
                                            <div className="mr-3">
                                                <img src="assets/images/users/avatar-2.jpg" className="rounded-circle avatar-sm" alt="user"/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1">Leonardo Payne</h6>
                                                    <p className="text-muted font-size-11 mb-0">12.30 PM</p>
                                                </div>
                                                <p className="text-muted font-size-13 mb-0">Hey! there I'm available...</p>
                                            </div>
                                        </a>
    
                                        <a href="#" className="d-flex align-items-center border-bottom py-3">
                                            <div className="mr-3">
                                                <img src="assets/images/users/avatar-3.jpg" className="rounded-circle avatar-sm" alt="user"/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1">Soren Drouin</h6>
                                                    <p className="text-muted font-size-11 mb-0">09.30 PM</p>
                                                </div>
                                                <p className="text-muted font-size-13 mb-0">Completed "Design new idea"....</p>
                                            </div>
                                        </a>
    
                                        <a href="#" className="d-flex align-items-center border-bottom py-3">
                                            <div className="mr-3">
                                                <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-sm" alt="user"/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1">Anne Simard</h6>
                                                    <p className="text-muted font-size-11 mb-0">10.30 PM</p>
                                                </div>
                                                <p className="text-muted font-size-13 mb-0">Assigned task "Poster illustation design"...</p>
                                            </div>
                                        </a>
    
                                        <a href="#" className="d-flex align-items-center border-bottom py-3">
                                            <div className="mr-3">
                                                <img src="assets/images/users/avatar-5.jpg" className="rounded-circle avatar-sm" alt="user"/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1">Nicolas Chartier</h6>
                                                    <p className="text-muted font-size-11 mb-0">02.00 PM</p>
                                                </div>
                                                <p className="text-muted font-size-13 mb-0">Completed "Drinking bottle graphics"...</p>
                                            </div>
                                        </a>
    
                                        <a href="#" className="d-flex align-items-center border-bottom py-3">
                                            <div className="mr-3">
                                                <img src="assets/images/users/avatar-6.jpg" className="rounded-circle avatar-sm" alt="user"/>
                                            </div>
                                            <div className="w-100">
                                                <div className="d-flex justify-content-between">
                                                    <h6 className="mb-1">Gano Cloutier</h6>
                                                    <p className="text-muted font-size-11 mb-0">05.30 PM</p>
                                                </div>
                                                <p className="text-muted font-size-13 mb-0">Assigned task "Hyper app design"...</p>
                                            </div>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div> 

                        <div className="col-lg-8">
                             <div className="card card-animate">
                                <div className="card-body">
                                    <div className="dropdown float-right position-relative">
                                        <a href="#" className="dropdown-toggle h4 text-muted" data-toggle="dropdown"
                                            aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-right">
                                            <li><a href="#" className="dropdown-item">Action</a></li>
                                            <li><a href="#" className="dropdown-item">Another action</a></li>
                                            <li><a href="#" className="dropdown-item">Something else here</a></li>
                                            <li className="dropdown-divider"></li>
                                            <li><a href="#" className="dropdown-item">Separated link</a></li>
                                        </ul>
                                    </div>
                                    <h4 className="card-title d-inline-block">All Projects</h4>

                                    <div className="table-responsive">
                                        <table className="table table-borderless table-hover mb-0">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th>No</th>
                                                    <th>Project Name</th>
                                                    <th>Client Name</th>
                                                    <th>Deadline</th>
                                                    <th>Income</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>1</th>
                                                    <td>App design and development</td>
                                                    <td>Arthur Powell</td>
                                                    <td>Sun, 08/10</td>
                                                    <td>$8,532</td>
                                                    <td className="text-warning">In Process</td>
                                                </tr>
                                                <tr>
                                                    <th>2</th>
                                                    <td>Coffee detail page - Main Page</td>
                                                    <td>Joan Lennox</td>
                                                    <td>Fri, 17/10</td>
                                                    <td>$5,350</td>
                                                    <td className="text-success">Done</td>
                                                </tr>
                                                <tr>
                                                    <th>3</th>
                                                    <td>Poster illustation design</td>
                                                    <td>Ronald Roesler</td>
                                                    <td>Tue, 13/08</td>
                                                    <td>$2,250</td>
                                                    <td className="text-danger">Hold</td>
                                                </tr>
                                                <tr>
                                                    <th>4</th>
                                                    <td>Drinking bottle graphics</td>
                                                    <td>Mickey Cochran</td>
                                                    <td>Mon, 10/08</td>
                                                    <td>$4,532</td>
                                                    <td className="text-success">Done</td>
                                                </tr>
                                                <tr>
                                                    <th>5</th>
                                                    <td>Landing page design - Home</td>
                                                    <td>Barry Trahan</td>
                                                    <td>Thus, 03/09</td>
                                                    <td>$1,555</td>
                                                    <td className="text-warning">In Process</td>
                                                </tr>
                                                <tr>
                                                    <th>6</th>
                                                    <td>Company logo design</td>
                                                    <td>James Grimes</td>
                                                    <td>Sat, 07/19</td>
                                                    <td>$9,352</td>
                                                    <td className="text-success">Done</td>
                                                </tr>
                                                <tr>
                                                    <th>7</th>
                                                    <td>Product page redesign</td>
                                                    <td>Philip Jetton</td>
                                                    <td>Wed, 09/08</td>
                                                    <td>$6,895</td>
                                                    <td className="text-danger">Hold</td>
                                                </tr>
                                                <tr>
                                                    <th>8</th>
                                                    <td>Hero page - Main Page</td>
                                                    <td>Amanda Salinas</td>
                                                    <td>Sun, 02/20</td>
                                                    <td>$3,895</td>
                                                    <td className="text-success">Done</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div> 

                    </div>
        </>
    )
}

export default Home
