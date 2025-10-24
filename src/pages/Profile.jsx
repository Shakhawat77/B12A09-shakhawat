import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext/AuthContext";
import "swiper/css/navigation";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/Signin"); 
    }
  }, [user, navigate]);

  if (!user) {
    return null; 
  }

  return (
    <div className="flex flex-col mx-auto items-center bg-sky-50 py-20">
      <h2 className="font-bold text-6xl text-teal-500 pb-20">My Profile</h2>

      <div className="hero pb-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={user?.photoURL}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Profile"
          />
          <div>
            <h1 className="text-5xl font-bold">{user?.displayName}</h1>
            <p className="py-6">{user?.email}</p>
            <div className="tooltip" data-tip="Are You Sure!!!">
              <button className="btn bg-emerald-700 text-white">
                Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
