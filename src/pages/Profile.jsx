import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { updateProfile } from "firebase/auth";
import "swiper/css/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");
  const [error, setError] = useState("");

  const handleUpdate = (event) => {
    event.preventDefault();

    if (name.trim() === "" || photo.trim() === "") {
      setError("Fields cannot be empty.");
      return;
    }

    if (name === user?.displayName && photo === user?.photoURL) {
      toast.warning("Please change your information to update!");
      return;
    }

    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("Profile updated successfully!");
        setError("");
        setEditMode(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="flex flex-col mx-auto items-center bg-sky-50 py-20">
      <ToastContainer />

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

            {!editMode ? (
              <button
                onClick={() => setEditMode(true)}
                className="btn bg-emerald-700 text-white"
              >
                Update Profile
              </button>
            ) : (
              <form onSubmit={handleUpdate} className="mt-4 space-y-3">
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setError("");
                  }}
                  placeholder="Enter new name"
                  required
                />

                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={photo}
                  onChange={(e) => {
                    setPhoto(e.target.value);
                    setError("");
                  }}
                  placeholder="New Photo URL"
                  required
                />

                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}

                <button type="submit" className="btn btn-primary btn-sm w-full">
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditMode(false);
                    setError("");
                    setName(user?.displayName);
                    setPhoto(user?.photoURL);
                  }}
                  className="btn btn-outline btn-sm w-full"
                >
                  Cancel
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
