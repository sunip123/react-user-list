import React, { useState, useEffect } from "react";
import '../css/App.scss';

export default function Component({ page }) {
  const [users, setUsers] = useState([]);

   useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${page}`)
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      });
  }, [page]);

  const usersDOM = users.map(user => (
    <div className="container">
    <p key={user.id}>
    <div className="card">
    <div><img src={user.avatar}  alt={user.first_name} style={{ height: 100, width: 100 }} /></div>
    <div>{user.first_name} {user.last_name}</div> 
    <div>{user.email}</div> 
    </div>
    </p>
    </div>
  ));

  return <div>{usersDOM}</div>;
}