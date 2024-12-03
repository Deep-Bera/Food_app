import { useState } from "react";
import "../Pages/Styles/SignUp.css";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const phoneRegex = /^\d{10}$/;

  // Regex for validating email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // if (name.trim() === "") {
  //   alert("Name cannot be empty.");
  //   return;
  // }
  const handleSignIn = async (e) => {
    e.preventDefault(); // Prevent refreshing the page
    // setError("");

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
          phoneNumber,
        }
      );

      alert(response.data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
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

    if (!phoneRegex.test(phoneNumber)) {
      alert("Phone number must be 10 digits.");
      return;
    }

    console.log("Sign-up successful with:", {
      name,
      email,
      password,
      phoneNumber,
    });
    alert("Sign-up successful!");
    setName("");
    setEmail("");
    setPassword("");
    setPhoneNumber("");
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
              <form onSubmit={handleSignIn}>
                <p style={{ textAlign: "left", fontSize: "10px" }}>Name</p>
                <input
                  type="text"
                  placeholder="e.g., John A"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <p style={{ textAlign: "left", fontSize: "10px" }}>
                  Phone Number
                </p>
                <input
                  type="text"
                  name="Phone"
                  placeholder="Enter your 10 digit mobile number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
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
                    Sign up
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
                Already have an account? <Link to="/">Sign In</Link>
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

export default SignUn;
