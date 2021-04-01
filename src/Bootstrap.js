import React, { Component } from 'react'
import pic from './pic.jpg'
import  './App.css'

export default class Bootstrap extends Component {
    render() {
        return (
            <div>

                <button className="btn btn-danger">Normal Button</button> <br/> <br/>

                <div className="img">
                            {/* Image Inside Public Folder */}
                <img 
                src={process.env.PUBLIC_URL + "./image/pic.jpg"} 
                alt="my pic"
                width="100px"
                height="100px"
                />
                <br/><br/>

                        {/* Image Inside src folder */}
                <img src={pic} alt="my pic" width="100px" height="100px" />
                </div>
                

            </div>
        )
    }
}
