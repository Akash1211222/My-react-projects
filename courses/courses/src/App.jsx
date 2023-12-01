import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";

const App = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // save data
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Filter filterData={filterData} />

      <Cards courses={courses} />
    </>
  );
};

export default App;



// Authorization authantictation diff
// jwt token
// bcript salt
// cookies

aut