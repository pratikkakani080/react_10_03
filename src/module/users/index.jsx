import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr align="left">
            <th>first name</th>
            <th>last name</th>
            <th>E-mail</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr align="left">
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
