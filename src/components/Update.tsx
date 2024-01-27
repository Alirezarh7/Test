import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../user.type";

const Update = () => {
  const value = { fullname: "", username: "", phonenumber: "" };
  const [data, setData] = useState<User>(value);
  const { fullname, username, phonenumber } = data;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/user/${id}`).then((res) => {
      setData(res.data);
    });
  }, []);

  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleUpdate = (id: string, newData: User) => {
    axios.put(`http://localhost:5000/user/${id}`, newData).then(() => {
      navigate("/read");
    });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Update</h2>
      <form className="container">
        <div className="mb-3">
          <label htmlFor="fullname" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control mt-1 p-2 border rounded-md w-full"
            id="fullname"
            name="fullname"
            value={fullname}
            onChange={onValueChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control mt-1 p-2 border rounded-md w-full"
            id="username"
            name="username"
            value={username}
            onChange={onValueChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phonenumber" className="form-label">
            Phone Number
          </label>
          <input
            type="text"
            className="form-control mt-1 p-2 border rounded-md w-full"
            id="phonenumber"
            name="phonenumber"
            value={phonenumber}
            onChange={onValueChange}
          />
        </div>

        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={() => handleUpdate(id, data)}
        >
          Update
        </button>
      </form>
    </>
  );
};

export default Update;
