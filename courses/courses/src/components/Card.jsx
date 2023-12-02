import React from "react";
import { FcLike } from "react-icons/fc";

function Card() {
  return( <div>

    <img src={course.image.url} alt={course.image.alt} />


    <div>

      <button>
          <FcLike fontSize="1.75rem"/>
      </button>

    </div>

    <div>
      <p>{course.title }</p>
      <p>{course.description }</p>
    </div>

  </div>
  )
}

export default Card;
