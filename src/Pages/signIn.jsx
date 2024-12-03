import { useState } from "react";
import "../Pages/Styles/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  // Regex for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent refreshing the page
    // setError("");

    try {
      const response = await axios.post("https://food-app-8m9s.onrender.com", {
        email,
        password,
      });

      if (response.data.success) {
        // If login is successful, store JWT token in localStorage or cookies
        localStorage.setItem("token", response.data.token); // Save JWT token
        // Redirect to Home page
        navigate("/home");
      } else {
        // If login failed, show the error message from server
        alert("Invalid email or password. Please try again.");
      }

      alert(response.data.message);
      console.log("Token:", response.data.token); // You can store the token in localStorage if needed
      setEmail("");
      setPassword("");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    // Validation to email
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }

    // If all validations pass
    // console.log("Sign-in successful with:", { email, password });
    // alert("Sign-in successful!");
    // Reset form fields
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="mainDiv">
        <div className="upperDiv">
          <div className="leftSide">
            <div className="innerLeftSide">
              <div>
                <img src="/public/Images/FrontPageLOGO 1.png" alt="" />
              </div>
              <h1
                style={{
                  textAlign: "left",
                }}
              >
                Welcome Back 👋
              </h1>
              <p
                style={{
                  textAlign: "left",
                  fontSize: "0.8rem",
                }}
              >
                Today is a new day. It&apos;s your day. You shape it. Sign in to
                start ordering.
              </p>
              <form
                onSubmit={handleSignIn}
                style={{ height: "32%", width: "100%" }}
              >
                <p style={{ textAlign: "left", fontSize: "10px" }}>Email</p>
                <input
                  type="text"
                  name="email"
                  placeholder="Example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p style={{ textAlign: "left", fontSize: "10px" }}>Password</p>
                <input
                  type="password"
                  name="password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div style={{ marginTop: "15px" }}>
                  <button className="btnSignIn" type="submit">
                    Sign In
                  </button>
                </div>
              </form>
              {/* {error && (
                <p
                  style={{ color: "red", fontSize: "12px", textAlign: "left" }}
                >
                  {error}
                </p>
              )} */}
              <p style={{ fontSize: "10px", textAlign: "center" }}>
                Don&apos;t you have an account?{" "}
                <Link to="/signup">Sign up</Link>
              </p>
            </div>
          </div>
          <div className="rightSide">
            <img src="/Images/FrontPGbackGround.png" alt="Background" />
          </div>
        </div>
        <div className="lowerDiv">{/* Footer Section */}</div>
      </div>
    </>
  );
};

export default SignIn;
