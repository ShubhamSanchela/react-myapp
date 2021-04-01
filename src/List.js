import React, { Component } from 'react'

export default class List extends Component {

    state = {
        users: [
            {id: 101, name:"Shubham" , password: "12665"},
            {id: 102, name:"Akash" , password: "45668"},
            {id: 103, name:"Rahul" , password: "8746"}
        ],
        isLoggedIn : false
    }

    render() {

        // usning Props
        // const arr = this.props.numbers;
        // const arr = [10, 20, 30, 40]
        // const newArr = arr.map((num) => {
        //    console.log("Num =", num)
        // return <li>{num * 2}</li>
        // });
        // console.log("Old Array",arr);
        // console.log("New Array",newArr);
        // return <ul>{newArr}</ul>
        
        // return(
        //     <ul>
        //         {arr.map( num => <li>{num * 2}</li> )}
        //     </ul>
        // )

        const newUsers = this.state.users.map(user => {
            console.log(user);
            return(
                <h1>
                    ID:{user.id} Name:{user.name} Password: {user.password} 
                </h1>
            )
        });
    return <div>{newUsers}</div>
    }
}
