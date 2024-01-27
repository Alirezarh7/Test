import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "../user.type";

const Read = () => {
  const [data, setData] = useState<User[]>([]);

  const getData = () => {
    axios.get("http://localhost:5000/user").then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id: string) => {
    if (window.confirm("Are You sure want to delete?")) {
      axios
        .delete(`http://localhost:5000/user/${id}`)
        .then(() => {
          getData();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="my-4">
        <h1 className="text-2xl font-bold mb-4">Contact List</h1>
        <Link to={"/"}>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            Go back to Register
          </button>
        </Link>
      </div>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Phone Number</th>
            <th className="py-2 px-4 border-b">Actions</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.fullname}</td>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.phonenumber}</td>
              <td className="py-2 px-4 border-b">
                <Link
                  to={`/update/${user.id}`}
                  className="bg-blue-500 text-white py-1 px-2 rounded-md hover:bg-blue-600"
                >
                  Edit
                </Link>
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-600"
                  onClick={() => handleDelete(user.id!)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Read;
