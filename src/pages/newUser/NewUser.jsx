import React from 'react'
import './newUser.css'
import { Link } from 'react-router-dom'

export default function NewUser() {
    return (
        <>
        <div className="row">
            <div className="col-12">
                <div className="page-title-box d-flex align-items-center justify-content-between">
                    <h4 className="mb-0 font-size-18">Add User</h4>

                    <div className="page-title-right">
                        <ol className="breadcrumb m-0">
                            <li className="breadcrumb-item"><Link to="/">Sage</Link></li>
                            <li className="breadcrumb-item active">Create</li>
                        </ol>
                    </div>

                </div>
            </div>
        </div>


        <div className="row">
             <div className="col-xl-12 col-md-12">
                    <div className="kt-portlet">
                        <div className="kt-portlet__head">
                            <div className="kt-portlet__head-label">
                                <h3 className="kt-portlet__head-title">
                                    New User
                                </h3>
                            </div>
                        </div>

                        <div className="kt-portlet__body">
                            <form className="needs-validation" noValidate>
                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="fname">First name</label>
                                    <input type="text" className="form-control" id="fname" placeholder="First name" required/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="lname">Last name</label>
                                    <input type="text" className="form-control" id="lname" placeholder="Last name" required/>
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="username">Username</label>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        </div>
                                        <input type="text" className="form-control" id="username" placeholder="Username" aria-describedby="inputGroupPrepend" required/>
                                        <div className="invalid-feedback">
                                        Please choose a username.
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                    </div>

                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="mobno">Phone Number</label>
                                    <input type="text" className="form-control" id="mobno" placeholder="Phone Number" required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid Number.
                                    </div>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="Address" required/>
                                    <div className="invalid-feedback">
                                        Please provide a valid Number.
                                    </div>
                                    </div>
                                </div>

                                


                                
                                <button className="btn btn-primary btn-wide" type="submit">Add User</button>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
           
        </>
    )
}
