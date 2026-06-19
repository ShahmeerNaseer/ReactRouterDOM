import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function handleLogin() {

    if (!email || !password) {

      alert("Fill all fields");

      return;
    }

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );

    localStorage.setItem(
      "email",
      email
    );

    navigate("/dashboard");
  }

  return (

    <div className="page">

      <h1>Login</h1>

      <input

        type="email"

        placeholder="Email"

        value={email}

        onChange={(e)=>

          setEmail(
            e.target.value
          )

        }

      />

      <input

        type="password"

        placeholder="Password"

        value={password}

        onChange={(e)=>

          setPassword(
            e.target.value
          )

        }

      />

      <button

        onClick={handleLogin}

      >

        Login

      </button>

    </div>

  );
}

export default Login;