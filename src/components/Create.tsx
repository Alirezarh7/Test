import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/user", {
        fullname,
        username,
        phonenumber,
      })
      .then(() => navigate("/read"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Create</h2>
      <form className="container">
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            id="fullname"
            placeholder="Enter Your Full Name here........"
            onChange={(e) => setFullname(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">
            User Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
            id="email"
            placeholder="Enter Your User Name here ........."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-600">
            Phone Number
          </label>
          <input
            type="phonenumber"
            className="mt-1 p-2 border rounded-md w-full"
            id="phonenumber"
            placeholder="Phone Number"
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
