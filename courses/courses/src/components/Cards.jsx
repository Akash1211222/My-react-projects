import React from "react";
import Card from "./Card";

function Cards({ courses }) {
  let allCourses = [];
  const getCourses = () => {
    Object.values(courses).forEach((courseCatogery) => {
      courseCatogery.forEach((course) => { 
        allCourses.push(course);
      })
    })
    return allCourses;
  }

  
  return (
    <div>
      {getCourses().map((courses) => {
        return <Card key = {course.id} course={course} />
      })
      }
    </div>
  );
}

export default Cards;
