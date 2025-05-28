import { useState, useEffect } from "react";
import axios from "axios";
import cls from "../components/UserProfile.module.css";

const UserProfile = () => {
  const [userStatus, setUserStatus] = useState(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api");
      setUserStatus(response.data.results[0]);
      console.log("User data", response.data);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("Request completed");
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      {userStatus ? (
        <div className={cls.user_profile}>
          <img src={userStatus.picture.large} alt="User Profile" />
          <h2>
            {userStatus.name.first} {userStatus.name.last}
          </h2>
          <p>Email: {userStatus.email}</p>
          <p>Phone: {userStatus.phone}</p>
          <button onClick={fetchUser}>Load New User</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserProfile;
