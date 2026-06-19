import {

  Link,

  Outlet,

  useNavigate

} from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  function logout(){

    localStorage.removeItem(

      "isLoggedIn"

    );

    navigate("/login");
  }

  return(

    <>

      <nav className="navbar">

        <div className="logo">

          Student LMS

        </div>

        <div className="nav-links">

          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/dashboard">Dashboard</Link>

          <Link to="/courses">Courses</Link>

          <Link to="/profile">Profile</Link>

          <Link to="/assignments">Assignments</Link>

          <Link to="/settings">Settings</Link>

          <button

            onClick={logout}

          >

            Logout

          </button>

        </div>

      </nav>

      <Outlet />

    </>

  );
}

export default Navbar;