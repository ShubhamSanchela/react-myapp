import React, { Component, StrictMode } from 'react'
import StrictUser from './StrictUser'

export default class StrictMode extends Component {
    render() {
        return (
          <StrictMode>
              <StrictUser />
            </StrictMode>
        )
    }
}
