import { useState } from "react";

import { assignments }
from "../data";

function Assignments() {

  const [submitted,
  setSubmitted]

  = useState([]);

  function submit(id){

    setSubmitted(

      [...submitted,id]

    );
  }

  return (

    <div className="page">

      <h1>

        Assignments

      </h1>

      {

        assignments.map(

          assignment=>(

          <div

            key={assignment.id}

            className="card"

          >

            <h2>

              {assignment.title}

            </h2>

            <p>

              Due:

              {assignment.due}

            </p>

            {

              submitted.includes(

                assignment.id

              )

              ?

              <p>

                ✅ Submitted

              </p>

              :

              <button

                onClick={()=>

                  submit(

                    assignment.id

                  )

                }

              >

                Submit

              </button>

            }

          </div>

        ))

      }

    </div>
  );
}

export default Assignments;