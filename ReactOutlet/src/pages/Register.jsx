import { useState } from "react";

import { useNavigate } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [name,setName]=useState("");

  const [email,setEmail]=useState("");

  const [password,setPassword]=useState("");

  const [confirmPassword,

  setConfirmPassword]

  = useState("");

  function handleRegister(){

    if(

      !name ||

      !email ||

      !password ||

      !confirmPassword

    ){

      alert("Fill all fields");

      return;
    }

    if(

      password !== confirmPassword

    ){

      alert("Passwords do not match");

      return;
    }

    localStorage.setItem(

      "registeredUser",

      JSON.stringify({

        name,

        email,

        password

      })

    );

    alert(

      "Registration Successful"

    );

    navigate("/login");
  }

  return(

    <div className="page">

      <h1>

        Register

      </h1>

      <input

        placeholder="Name"

        value={name}

        onChange={(e)=>

          setName(

            e.target.value

          )

        }

      />

      <input

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

      <input

        type="password"

        placeholder="Confirm Password"

        value={confirmPassword}

        onChange={(e)=>

          setConfirmPassword(

            e.target.value

          )

        }

      />

      <button

        onClick={handleRegister}

      >

        Register

      </button>

    </div>

  );
}

export default Register;