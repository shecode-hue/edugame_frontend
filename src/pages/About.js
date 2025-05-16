import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="about-hero-content">
          <h1>About Edu-Game Namibia</h1>
          <p>
            Empowering young minds through game development and creative
            technology education.
          </p>
        </div>
      </div>

      <div className="about-content">
        <section className="about-mission">
          <div className="container">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>
                At Edu-Game Namibia, we're on a mission to bridge the gap
                between education and technology for Namibian youth. We believe
                that learning through game development and creative digital arts
                provides children with valuable skills for the future digital
                economy while nurturing their creativity, problem-solving
                abilities, and technical knowledge.
              </p>
            </div>
            <div className="mission-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </section>

        <section className="about-vision">
          <div className="container reversed">
            <div className="vision-content">
              <h2>Our Vision</h2>
              <p>
                We envision a future where Namibian youth are empowered to be
                creators, not just consumers, of technology. By equipping
                children with game development skills today, we're preparing
                them to become innovators who can develop solutions for
                tomorrow's challenges in an increasingly digital world.
              </p>
            </div>
            <div className="vision-image">
              <div className="image-placeholder"></div>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Our Team</h2>
          <div className="team-container">
            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Sarah Johnson</h3>
              <p className="member-title">Founder & Lead Instructor</p>
              <p className="member-bio">
                With over 10 years of experience in game development and
                education, Sarah founded Edu-Game Namibia to inspire the next
                generation of digital creators in her home country.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>David Nangolo</h3>
              <p className="member-title">Animation & Design Instructor</p>
              <p className="member-bio">
                David is an accomplished animator with a passion for teaching
                young minds the art of visual storytelling through animation and
                stop-motion techniques.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Emma Tjiueza</h3>
              <p className="member-title">Game Development Instructor</p>
              <p className="member-bio">
                A software engineer specializing in game development, Emma
                brings her technical expertise and creative approach to teaching
                coding and game design to students of all ages.
              </p>
            </div>

            <div className="team-member">
              <div className="member-avatar"></div>
              <h3>Michael Haufiku</h3>
              <p className="member-title">Educational Director</p>
              <p className="member-bio">
                With a background in education and technology integration,
                Michael ensures our curriculum meets educational standards while
                remaining engaging and accessible.
              </p>
            </div>
          </div>
        </section>

        <section className="about-approach">
          <h2>Our Educational Approach</h2>
          <div className="approach-cards">
            <div className="approach-card">
              <div className="card-icon">
                <div className="icon-placeholder learning-icon"></div>
              </div>
              <h3>Learning by Creating</h3>
              <p>
                We believe children learn best when they're creating something
                they care about. Our project-based approach keeps students
                engaged as they build real games and animations.
              </p>
            </div>

            <div className="approach-card">
              <div className="card-icon">
                <div className="icon-placeholder skills-icon"></div>
              </div>
              <h3>Balanced Skill Development</h3>
              <p>
                Our curriculum balances technical skills with creative
                expression, critical thinking, and collaborative abilities
                essential for success in the digital age.
              </p>
            </div>

            <div className="approach-card">
              <div className="card-icon">
                <div className="icon-placeholder growth-icon"></div>
              </div>
              <h3>Growth Mindset</h3>
              <p>
                We foster a growth mindset where challenges are opportunities to
                learn, mistakes are valuable lessons, and persistence leads to
                improvement.
              </p>
            </div>
          </div>
        </section>

        <section className="about-testimonials">
          <h2>What Parents & Students Say</h2>
          <div className="testimonials-container">
            <div className="testimonial">
              <div className="quote">"</div>
              <p>
                My daughter used to just play games, but now she's creating
                them! The confidence she's gained through Edu-Game's courses has
                been incredible to watch.
              </p>
              <div className="testimonial-author">
                <p className="author-name">Maria K.</p>
                <p className="author-relation">Parent of Beginners student</p>
              </div>
            </div>

            <div className="testimonial">
              <div className="quote">"</div>
              <p>
                The instructors make learning coding fun and not intimidating. I
                never thought I could build my own game, but now I've created
                three!
              </p>
              <div className="testimonial-author">
                <p className="author-name">Thomas N.</p>
                <p className="author-relation">Intermediate student, age 13</p>
              </div>
            </div>

            <div className="testimonial">
              <div className="quote">"</div>
              <p>
                As a parent concerned about screen time, I appreciate that
                Edu-Game teaches my son to be a creator rather than just a
                consumer of technology.
              </p>
              <div className="testimonial-author">
                <p className="author-name">John M.</p>
                <p className="author-relation">Parent of Advanced student</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-stats">
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Students Taught</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Schools Partnered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">1,000+</div>
            <div className="stat-label">Games Created</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">3</div>
            <div className="stat-label">Years of Excellence</div>
          </div>
        </section>

        <section className="about-cta">
          <h2>Join the Edu-Game Community</h2>
          <p>
            Ready to start your child's journey into the exciting world of game
            development and digital creativity? Explore our courses or get in
            touch to learn more about how we can nurture your child's technical
            skills and creative potential.
          </p>
          <div className="cta-buttons">
            <button className="explore-btn">Explore Courses</button>
            <button className="contact-btn">Contact Us</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
