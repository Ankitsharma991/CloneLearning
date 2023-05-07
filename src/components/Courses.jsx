import React, { useEffect, useState } from "react";
import Card from "./course/card";
import "./universal.css";

const Courses = () => {
  const [course, setCourses] = useState([]);
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch(
          "https://api-language-learning-app.onrender.com/course"
        );
        const { course } = await res.json();
        setCourses(course);
      } catch (error) {
        console.log(error);
      }
    };
    init();
  }, []);
  return (
    <div className="container">
      <section className="grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-5">
        {course.map((e) => (
          <Card course={e} />
        ))}
      </section>
    </div>
  );
};

export default Courses;
