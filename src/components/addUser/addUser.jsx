import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addUser.css";
import axios from "axios";


function AddUser() {
    const navigate = useNavigate();

    const [input, setInput] = useState([]);

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInput({
            ...input,
            [name]: value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        axios.post("http://localhost/react-crud-server/api/", input)
            .then(response => {
                console.log("Success:", response.config.data);
                navigate("/");
                
                // Handle success response here
            })
            .catch(error => {
                console.error("Error:", error);
                // Handle error here
            });
    }




    return (
        <div className="addUser">
            <h3>Add User</h3>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label>Name</label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mail</label>
                            </th>
                            <td>
                                <input type="text" name="mail" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Phone Number</label>
                            </th>
                            <td>
                                <input type="text" name="phone_number" onChange={handleChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddUser;

