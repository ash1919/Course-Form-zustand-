import React from "react";
import useCourseStore from "../app/CourseStore";

const CourseList = () => {
  const { courses, removeCourse, toggleCourseStatus } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      toggleCourseStatus: state.toggleCourseStatus,
    })
  );
  console.log(courses);
  return (
    <>
      <ul>
        {courses.map((course, id) => {
          return (
            <React.Fragment key={id}>
              <li
                className="course-item"
                style={{
                  backgroundColor:course.completed?"lightgreen":"white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    type="checkbox"
                    checked={course?.completed}
                    onClick={() => {
                      toggleCourseStatus(course.id);
                    }}
                  />
                </span>
                <span style={{ color:"black" }}>{course?.title}</span>
                <button
                  className="delete-btn"
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                >
                  Remove
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </>
  );
};

export default CourseList;
