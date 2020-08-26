import React, { Component } from 'react';
import axios from 'axios';

class ListData extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        const apiUrl = 'https://reqres.in/api/users';
        const arunData = this;
        axios.get(apiUrl, {})
            .then(function (response) {
                console.log('+++++++---', response.data.data);
                arunData.setState({ userList: response.data.data });

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log('----------------> ', this.state.userList);

        var userListArray = this.state.userList;
        var tableuserList = [];

        for (var i = 0; i < userListArray.length; i++) {
            tableuserList.push(

                <tr className="info">
                    <td>{userListArray[i].id}</td>
                    <td>{userListArray[i].first_name}</td>
                    <td>{userListArray[i].last_name}</td>
                    <td>{userListArray[i].email}</td>
                    <td><img src={userListArray[i].avatar} style={{height:"50px"}} /></td>
                </tr>

            )
        }

        return (
            <div className="container" style={{ padding: "100px" }}>

                <p>User Data</p>
                <table className="table">
                    <thead>
                        <tr>
                            <th> ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Avatar</th>

                        </tr>
                    </thead>
                    <tbody>
                        {tableuserList}

                    </tbody>
                </table>
            </div>



        );
    }


}

export default ListData;