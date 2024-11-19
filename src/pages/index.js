import React from 'react';
import Link from '@docusaurus/Link'

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>earthtokezzi</h1>
      <p>probably in space.</p>
      <nav>
        <ul>
          <li>
            <Link to="/music">all things music</Link>
          </li>
          <li>
            <Link to="/cooking">all things cooking</Link>
          </li>
          <li>
            <Link to="/tech-writing">all things tech writing</Link>
          </li>
          <li>
            <Link to="/league">all things league of legends</Link>
          </li>
          <li>
            <Link to="/style">earthtokezzi style guides</Link>
          </li>
          <li>
            <Link to="/about">all things about me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};