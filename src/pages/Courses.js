import React from 'react';
import '../styles/Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Game Development & Gamification',
      level: 'Beginners',
      price: 'N$1100 per month',
      schedule: 'Twice a week',
      duration: '3 months',
      ageRange: '7-18 years',
      requirements:
        'Students need their own laptop and basic computer literacy.',
      image: 'game-dev-beginners.jpg',
      description:
        'Introduction to game development concepts, basic programming logic, and simple game creation using beginner-friendly tools. Students will learn the fundamentals of game design while developing creative thinking and problem-solving skills.',
      curriculum: [
        'Introduction to game design principles',
        'Basic programming concepts with visual tools',
        'Creating simple 2D games',
        'Character and environment design basics',
        'Introduction to Roblox Studio',
      ],
    },
    {
      id: 2,
      title: 'Game Development & Gamification',
      level: 'Intermediate',
      price: 'N$1300 per month',
      schedule: 'Twice a week',
      duration: '6 months',
      ageRange: '7-18 years',
      requirements:
        'Students need their own laptop and beginners understanding of coding knowledge.',
      image: 'game-dev-intermediate.jpg',
      description:
        'Building on foundational knowledge, students will explore more complex game mechanics, intermediate programming concepts, and start creating more sophisticated games with customized features.',
      curriculum: [
        'Intermediate programming techniques',
        'Game physics and mechanics',
        'User interface design for games',
        'Introduction to 3D game environments',
        'Advanced Roblox Studio and introduction to Unity',
      ],
    },
    {
      id: 3,
      title: 'Game Development & Gamification',
      level: 'Advanced',
      price: 'N$18000 per month',
      schedule: 'Twice a week',
      duration: '6 months',
      ageRange: '7-18 years',
      requirements:
        'Students need their own laptop, intermediate understanding of coding languages (Lua, C#, Java), 3D Modeling, animation.',
      image: 'game-dev-advanced.jpg',
      description:
        'For experienced young developers, this course covers advanced game development techniques, sophisticated programming patterns, and professional game development workflows. Students will create complex games with advanced features.',
      curriculum: [
        'Advanced programming and algorithms',
        'Game optimization techniques',
        '3D modeling and animation integration',
        'Multiplayer game development',
        'Extended Unity and introduction to XR development',
      ],
    },
    {
      id: 4,
      title: 'Art & Stop-Motion Animation',
      level: 'Beginners',
      price: 'N$1300 per month',
      schedule: 'Twice a week',
      duration: '3 months',
      ageRange: '7-18 years',
      requirements: 'Basic arts understanding.',
      image: 'animation.jpg',
      description:
        'This course introduces students to the magical world of animation, focusing on traditional art techniques and stop-motion animation. Students will create their own animated shorts using various materials and techniques.',
      curriculum: [
        'Introduction to animation principles',
        'Character design for animation',
        'Storyboarding techniques',
        'Stop-motion production basics',
        'Editing and sound design for animation',
      ],
    },
    {
      id: 5,
      title: 'Board Game Creation',
      level: 'Creative',
      price: 'N$1600 per month',
      schedule: 'Twice a week',
      duration: '3 months',
      ageRange: '7-18 years',
      requirements: 'No specific requirements.',
      image: 'board-game.jpg',
      description:
        'Students will learn the art of designing engaging, balanced, and fun board games. This course combines creativity with critical thinking as students develop their own board games from concept to playable prototype.',
      curriculum: [
        'Board game mechanics and dynamics',
        'Game balance and playtesting',
        'Designing game components',
        'Rulebook writing and game instructions',
        'Prototyping and production techniques',
      ],
    },
  ];

  return (
    <div className="courses-page">
      <div className="courses-hero">
        <div className="courses-hero-content">
          <h1>Our Gaming Courses</h1>
          <p>
            Explore our range of courses designed to develop technical skills,
            creativity, and problem-solving abilities in young game developers.
          </p>
        </div>
      </div>

      <div className="courses-filter">
        <h2>Find Your Perfect Course</h2>
        <div className="filter-options">
          <select defaultValue="">
            <option value="">All Levels</option>
            <option value="beginners">Beginners</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
            <option value="creative">Creative</option>
          </select>
          <select defaultValue="">
            <option value="">All Age Groups</option>
            <option value="7-10">Ages 7-10</option>
            <option value="11-14">Ages 11-14</option>
            <option value="15-18">Ages 15-18</option>
          </select>
        </div>
      </div>

      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <div
              className="course-image"
              style={{ backgroundImage: `url(/images/${course.image})` }}
            >
              <span className="course-level">{course.level}</span>
            </div>
            <div className="course-content">
              <h3>{course.title}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-details">
                <div className="detail">
                  <span>Price:</span> {course.price}
                </div>
                <div className="detail">
                  <span>Schedule:</span> {course.schedule}
                </div>
                <div className="detail">
                  <span>Duration:</span> {course.duration}
                </div>
                <div className="detail">
                  <span>Ages:</span> {course.ageRange}
                </div>
                <div className="detail">
                  <span>Requirements:</span> {course.requirements}
                </div>
              </div>
              <div className="course-curriculum">
                <h4>What You'll Learn</h4>
                <ul>
                  {course.curriculum.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <button className="enroll-btn">Enroll Now</button>
            </div>
          </div>
        ))}
      </div>

      <div className="courses-cta">
        <div className="cta-content">
          <h2>Not Sure Which Course Is Right?</h2>
          <p>
            Contact us for a free consultation, and we'll help you choose the
            perfect program for your child's interests and skill level.
          </p>
          <button className="contact-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
