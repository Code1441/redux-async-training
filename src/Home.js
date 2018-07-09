import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section>
      <ul className="projects-wrapper">
        PROJECTS' LINKS
        <Link to="/dog-saga"><li>Dog-saga</li></Link>
      </ul>
    </section>
  )
}

export default Home;
