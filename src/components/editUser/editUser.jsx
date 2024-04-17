import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./editUser.css";
import axios from "axios";


function EditUser() {
    const navigate = useNavigate();
    const location   = useLocation();
    const user = location.state?.user || null;


    const [input, setInput] = useState({
        name: user.name || "",
        mail: user.mail || "",
        phone_number: user.phone_number || "",
        id: user.id || ""
    });
    

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
        axios.put(`http://localhost/react-crud-server/api/${user.id}/edit`, input )
            .then(response => {
                console.log("Success:", input);
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
            <h3>Edit User</h3>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <th>
                                <label>Name</label>
                            </th>
                            <td>
                                <input type="text" name="name" value={input.name} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mail</label>
                            </th>
                            <td>
                                <input type="text" name="mail" value={input.mail} onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Phone Number</label>
                            </th>
                            <td>
                                <input type="text" name="phone_number" value={input.phone_number} onChange={handleChange} />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default EditUser;

