import React, { Component } from 'react';
import swal from 'sweetalert';

import axios from 'axios';

class AddData extends Component {

    sendFormInfo() {

        const name = document.getElementById('name').value;
        const job = document.getElementById('job').value;

        var formData = {
            name: name,
            job: job
        }

        const apiUrl = 'https://reqres.in/api/users';
        axios.post(apiUrl, formData)
            .then(function (response) {
                console.log(response);
                swal("Success", "User Added Successfully", "success");
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        return (
            <form>
                <div id="page-content-wrapper" style={{ padding: "120px" }}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="form-group">
                                            <label> Name</label>
                                            <input type="text" name="name" placeholder="User name" className="form-control" id="name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="form-group">
                                            <label>Job</label>
                                            <input type="text" name="job" placeholder="Job" className="form-control" id="job" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col col-md-6">
                                        <div className="form-group">

                                            <button type="button" className="form-control btn btn-sm btn-primary" onClick={this.sendFormInfo}>Submit</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </form>
        );
    }


}

export default AddData;