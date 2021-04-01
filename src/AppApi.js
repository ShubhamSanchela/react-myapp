import React, { Component } from 'react'
import UserApi from './UserApi'

// creating contextApi and export
export const MyContext = React.createContext();

export default class AppApi extends Component {

    state = {
        name : "Shubham",
        value : 101
    };

    handleClickContext = () => {
        this.setState({ value: this.state.value + 1 });
    };
    
    render() {

        const contextValue = {
            data : this.state,
            handleClick : this.handleClickContext
        }

        return(
            <MyContext.Provider value={contextValue}>
            <UserApi />
            </MyContext.Provider>
        )
    }
}
