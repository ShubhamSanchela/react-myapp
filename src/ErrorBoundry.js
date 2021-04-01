import React, { Component } from 'react'
import girl1 from './girl1.jpg'
import girl2 from './girl2.jpg'
import Image from './Image'
import Error from './Error'

export default class ErrorBoundry extends Component {
    render() {
        return (
            <div>
                <Error>
                <Image girls={girl1} />  <br />
                </Error>

                <Error>
                <Image girls={girl2} />  <br />
                </Error>

                <Error>
                <Image girls="NoImage"/>  <br />
                </Error>
                
            </div>
        )
    }
}
