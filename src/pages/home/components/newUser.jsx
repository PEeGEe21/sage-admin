import React, { useEffect, useState } from 'react'
import { userRequest } from '../../../requestMethods'

export default function NewUser() { 
    const [users, setUsers] = useState([])


    useEffect(()=>{
        const getUsers = async ()=>{
            try{
                const res = await userRequest.get("users/?new/true")
                setUsers(res.data)
            }catch{

            }
        };
        getUsers();
    }, []);

    return (
        <>
                <div className="kt-portlet kt-portlet--tabs kt-portlet--height-fluid card-animate">
                    <div className="kt-portlet__head">
                        <div className="kt-portlet__head-label">
                            <h3 className="kt-portlet__head-title">
                                New Users
                            </h3>
                        </div>
                        
                    </div>
                    <div className="kt-portlet__body">

                        <div className="kt-widget4">
                            <div className="kt-widget4__item">
                                <div className="kt-widget4__pic kt-widget4__pic--pic">
                                    <img src="/assets/users/avatar-1.jpg" alt=""/>
                                </div>
                                <div className="kt-widget4__info">
                                    <a href="#" className="kt-widget4__username">
                                        Anna Strong
                                    </a>
                                    <p className="kt-widget4__text">
                                        Visual Designer,Google Inc
                                    </p>
                                </div>
                                <a href="#" className="btn btn-sm btn-label-brand btn-bold">Follow</a>
                            </div>
                            <div className="kt-widget4__item">
                                <div className="kt-widget4__pic kt-widget4__pic--pic">
                                    <img src="/assets/users/avatar-2.jpg" alt=""/>
                                </div>
                                <div className="kt-widget4__info">
                                    <a href="#" className="kt-widget4__username">
                                        Milano Esco
                                    </a>
                                    <p className="kt-widget4__text">
                                        Product Designer, Apple Inc
                                    </p>
                                </div>
                                <a href="#" className="btn btn-sm btn-label-warning btn-bold">Follow</a>
                            </div>
                            <div className="kt-widget4__item">
                                <div className="kt-widget4__pic kt-widget4__pic--pic">
                                <img src="/assets/users/avatar-3.jpg" alt=""/>
                                </div>
                                <div className="kt-widget4__info">
                                    <a href="#" className="kt-widget4__username">
                                        Nick Bold
                                    </a>
                                    <p className="kt-widget4__text">
                                        Web Developer, Facebook Inc
                                    </p>
                                </div>
                                <a href="#" className="btn btn-sm btn-label-danger btn-bold">Follow</a>
                            </div>
                            <div className="kt-widget4__item">
                                <div className="kt-widget4__pic kt-widget4__pic--pic">
                                <img src="/assets/users/avatar-4.jpg" alt=""/>
                                </div>
                                <div className="kt-widget4__info">
                                    <a href="#" className="kt-widget4__username">
                                        Wiltor Delton
                                    </a>
                                    <p className="kt-widget4__text">
                                        Project Manager, Amazon Inc
                                    </p>
                                </div>
                                <a href="#" className="btn btn-sm btn-label-success btn-bold">Follow</a>
                            </div>
                            <div className="kt-widget4__item">
                                <div className="kt-widget4__pic kt-widget4__pic--pic">
                                <img src="/assets/users/avatar-5.jpg" alt=""/>
                                </div>
                                <div className="kt-widget4__info">
                                    <a href="#" className="kt-widget4__username">
                                        Nick Stone
                                    </a>
                                    <p className="kt-widget4__text">
                                        Visual Designer, Github Inc
                                    </p>
                                </div>
                                <a href="#" className="btn btn-sm btn-label-primary btn-bold">Follow</a>
                            </div>
                        </div>
                        
                    </div>
				</div>
        </>
    )
}
