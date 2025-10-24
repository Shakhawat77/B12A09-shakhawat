import { useContext } from "react";
import { AuthContext } from "../context/authContext/AuthContext";

const Profile = () => {
  const { user } = useContext(AuthContext);


  if (!user) {
    return (
      <div className="profile-container text-center py-20">
        <h2 className="text-2xl font-bold text-red-500">
          You need to login to view your profile!
        </h2>
      </div>
    );
  }

  return (
   <div className="flex flex-col mx-auto items-center py-20">
 <h2 className="font-bold text-6xl text-teal-500 pb-20">My Profile</h2>

<div className="hero pb-20">
  <div className="hero-content flex-col lg:flex-row">
    <img
     src={user?.photoURL}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{user?.displayName}</h1>
      <p className="py-6">
       {user?.email}
      </p>
      <div className="tooltip " data-tip="Are You Sure!!!">
  <button className="btn bg-emerald-700 text-white">Update Profile</button>
</div>
      
    </div>
  </div>
</div>





  
   </div>
  );
};

export default Profile;
