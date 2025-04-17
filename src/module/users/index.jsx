import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Users() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(JSON.parse(localStorage.getItem("user")));
  }, []);
  console.log(users);

  const handleEdit = (id) => {
    navigate(`/contact?id=${id}`);
  };

  const handleDelete = (id) => {
    const isAns = window.confirm('Are you sure you want to delete this data?')
    if (isAns) {
      // delete the data
      const storedData = JSON.parse(localStorage.getItem("user"))
      const filteredData = storedData.filter(el => el.id !== id)
      localStorage.setItem('user', JSON.stringify(filteredData))
      setUsers(filteredData)
    }
  }

  return (
    <div>
      {users?.length > 0 ? (
        <>
          <span onClick={() => navigate("/contact")}>contact us</span>
          <table>
            <thead>
              <tr align="left">
                <th>first name</th>
                <th>last name</th>
                <th>E-mail</th>
                <th>password</th>
                <th>Edit</th>
                <th>Delete</th>
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
                    <td>
                      <button onClick={() => handleEdit(user.id)}>Edit</button>
                    </td>
                    <td>
                      <button onClick={() => handleDelete(user.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <>
          No data available go to{" "}
          <span onClick={() => navigate("/contact")}>contact us</span>
        </>
      )}
    </div>
  );
}
