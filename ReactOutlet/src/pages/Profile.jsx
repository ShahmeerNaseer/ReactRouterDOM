import { useState } from "react";

function Profile() {

  const [editing, setEditing] =
    useState(false);

  const [name, setName] =
    useState("John Doe");

  return (

    <div className="page">

      <h1>Profile</h1>

      <img

        className="profile-image"

        src="https://via.placeholder.com/150"

        alt="profile"

      />

      {

        editing

        ?

        <input

          value={name}

          onChange={(e)=>

            setName(
              e.target.value
            )

          }

        />

        :

        <h2>

          {name}

        </h2>

      }

      <button

        onClick={()=>

          setEditing(!editing)

        }

      >

        {

          editing

          ?

          "Save"

          :

          "Edit"

        }

      </button>

    </div>
  );
}

export default Profile;