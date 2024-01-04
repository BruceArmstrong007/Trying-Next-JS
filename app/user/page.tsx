import React from "react";
import ProductCard from "./components/ProductCard/ProductCard";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <div>
      <h1>Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ProductCard />
    </div>
  );
};

export default UserPage;
