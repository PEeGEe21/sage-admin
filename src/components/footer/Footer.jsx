import React from 'react'
import './footer.css'

export default function Footer() {
    return (
        <>
          <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 copyright">
                            2020 &copy; Sage.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-right d-none d-sm-block">
                                Designed &amp; Developed by <a href="peegee.netlify.app">peegee</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>  
        </>
    )
}
