import { courses } from "../data";

function Courses() {

  return (

    <div className="page">

      <h1>Courses</h1>

      {

        courses.map((course) => (

          <div
            key={course.id}
            className="card"
          >

            <h2>

              {course.title}

            </h2>

            <div className="progress">

              <div

                className="bar"

                style={{
                  width:
                  `${course.progress}%`,
                }}

              ></div>

            </div>

            <p>

              {course.progress}%

            </p>

          </div>

        ))

      }

    </div>
  );
}

export default Courses;