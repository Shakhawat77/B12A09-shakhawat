import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext/AuthContext";
import { useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleReset = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    setLoading(true);
    try {
      await resetPassword(email);
      toast.success("Password reset email sent!");
      setTimeout(() => {
        window.location.href = "https://mail.google.com";
      }, 1500);
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <ToastContainer position="top-center" autoClose={2000} />
      <form
        onSubmit={handleReset}
        className="card w-full max-w-md shadow-xl bg-white p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-emerald-600">
          Reset Password
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="btn btn-success w-full"
          disabled={loading}
        >
          {loading ? "Sending..." : "Reset Password"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
