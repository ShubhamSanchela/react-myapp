import React, { Component } from 'react'
import './App.css';
import UserStyle from './UserStyle';
import Styles from './App.module.css'

export default class ExternalSyle extends Component {
    render() {
        
        let style = false;

        return (
            <div>
                <h1 className="txt txts">Hello React Application</h1>
                <h1 className={Styles.txt}>Hello React Application</h1>
                <UserStyle rang={style ? "txtb" : "txtg"} name="Shubham" />
            </div>
        )
    }
}
