import React from 'react'
import './error_page.css'

function ErrorPage() {
    return (
        <div className="App-header" >
            <div className=" align-items-center ">
                <div className="container">
                    {/* <div className="spider">
                        <i className="fas fa-spider"></i>
                    </div> */}
                    {/* style={{backgroundImage: "url('/assets/error/bg2.jpg')"}} */}

                    <img src='/assets/404-error.svg'/>

                    <p>Sorry, the page you are trying to view is not available.</p>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
