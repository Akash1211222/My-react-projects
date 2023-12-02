import React from "react";

function Filter({ filterData }) {
  return (
    <>
      {filterData.map((data) => {
        return <button key={data.id}>{data.title}</button>;
      })}
    </>
  );
}

export default Filter;
