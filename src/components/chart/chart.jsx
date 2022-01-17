import React from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts'
import './chart.css'

export default function Chart({title, data, dataKey, grid, extra, price, total_number}) {
    
    return (
        <>
            <div className="card card-animate " >
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
                    <h4 className="card-title d-inline-block">{title}</h4>


                    <ResponsiveContainer width="100%" aspect={2/1}>
                        <LineChart data={data} height={300}>
                            <XAxis dataKey="name" stroke="#5550bd" />
                            <Line type="monotone" dataKey={dataKey} stroke="#5550bd"/>
                            {/* <YAxis/> */}
                            <Tooltip />

                            {grid && <CartesianGrid stroke="#e0dfcf" strokeDasharray="5 5" />}

                        </LineChart>
                    
                    </ResponsiveContainer>



                    {/* <div id="morris-line-example" className="morris-chart" style={{height: '350px'}}></div> */}
{extra && 
    <div className="row text-center mt-4">
                        <div className="col-6">
                            <h4>$ {price }</h4>
                            <p className="text-muted mb-0">Total Revenue</p>
                        </div>
                        <div className="col-6">
                            <h4>{total_number}</h4>
                            <p className="text-muted mb-0">Meals Sold</p>
                        </div>
                    </div>
}
                    
                </div>
            </div>
            
        </>
    )
}
