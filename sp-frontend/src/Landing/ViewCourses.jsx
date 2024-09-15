import "../LandingStyles/ViewCourses.css";
import { useCallback, useState, useEffect } from 'react';

function determineClasses(indexes, cardIndex) {
  if (indexes.currentIndex === cardIndex) {
    return "active";
  } else if (indexes.nextIndex === cardIndex) {
    return "next";
  } else if (indexes.previousIndex === cardIndex) {
    return "prev";
  }
  return "inactive";
}







export default function ViewCourses() {
  const cardItems = [
    {
      id: 1,
      title: "Introduction to AI",
      description: "Learn the basics of artificial intelligence, machine learning, and neural networks.",
    },
    {
      id: 2,
      title: "Data Science Essentials",
      description: "An introductory course on data analysis, statistics, and visualizations with Python.",
    },
    {
      id: 3,
      title: "Web Development",
      description: "Master the fundamentals of web development with HTML, CSS, and JavaScript.",
    }, 
    {
      id: 4,
      title: "Machine Learning",
      description: "Explore supervised and unsupervised learning, including algorithms like decision trees.",
    }

  ];

  const [indexes, setIndexes] = useState({
    previousIndex: 0,
    currentIndex: 0,
    nextIndex: 1,
  });

  const handleCardTransition = useCallback(() => {
    // If we've reached the end, start again from the first card,
    // but carry previous value over
    if (indexes.currentIndex >= cardItems.length - 1) {
      setIndexes({
        previousIndex: cardItems.length - 1,
        currentIndex: 0,
        nextIndex: 1,
      });
    } else {
      setIndexes((prevState) => ({
        previousIndex: prevState.currentIndex,
        currentIndex: prevState.currentIndex + 1,
        nextIndex:
          prevState.currentIndex + 2 === cardItems.length
            ? 0
            : prevState.currentIndex + 2,
      }));
    }
  }, [indexes.currentIndex, cardItems.length]);


// useEffect(() => {
//   const transitionInterval = setInterval(() => {
//     handleCardTransition();
//   }, 4000); // The interval value could also be a prop

//   // Clear the interval when the component unmounts!
//   return () => clearInterval(transitionInterval);
// }, [handleCardTransition, indexes]);


  return (
    <section id="view">
      <h1>Our Courses</h1>

      <div className="view-container">
        <p className="view-container-p">
          Explore our comprehensive course catalog, covering a wide range of
          subjects and topics. Whether you&apos;re looking to enhance your
          skills, pursue a new hobby, or expand your knowledge, we have
          something for everyone.
        </p>
      </div>

      {/* I want to create a card carousel */}
      <div className="container">
        {/* <button onClick={handleCardTransition}>Transition to Next</button> */}
        <ul className="card-carousel">
          {cardItems.map((card, index) => (
            <li
              key={card.id}
              className={`card ${determineClasses(indexes, index)}`}
              onClick={handleCardTransition}
            >
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

{
  /* <Slider {...settings}>
  {courses.map((course, index) => (
    <div key={index} className="course-card">
      <div className="course-content">
        <h3>{course.title}</h3>
        <p>{course.description}</p>
      </div>
    </div>
  ))}
</Slider>; */
}
