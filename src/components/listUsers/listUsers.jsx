import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './listUsers.css';

function ListUsers() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([{ name: "", email: "", id: "", subscibed_at: "" }]);

    useEffect(() => {
        getusers();
    }
    , []);

    function getusers() {
        axios.get("http://localhost/react-crud-server/api/users")
            .then(response => {
                setUsers(response.data);

            })
            .catch(error => {
                console.error("Error:", error);
            });
    }

    function handleDeleteButton(id) {
        axios.delete(`http://localhost/react-crud-server/api/${id}/delete`)
            .then(response => {
                getusers();
                console.log("Success:", response.data);
                // Handle success response here
            })
            .catch(error => {
                console.error("Error:", error);
                // Handle error here
            });
    }

    function handleEditButton(user) {
        navigate(`user/${user.id}/edit/`, { state: { user: user } } );
    }



    return (
        <div className="ListUsers">
            <h1>list of users</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Mail</th>
                        <th>Phone_number</th>
                        <th>Subscibed At</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.mail}</td>
                            <td>{user.phone_number}</td>
                            <td>{user.subsribed_at}</td>
                            <td><button onClick={() => handleEditButton(user)}>Edit</button></td>
                            <td><button onClick={() => handleDeleteButton(user.id)}>🗑</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
};

export default ListUsers;

