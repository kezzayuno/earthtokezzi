import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <h1>earthtokezzi</h1>
      <p>probably in space.</p>
      <nav>
        <ul>
          <li>
            <a href="/music">all things music</a>
          </li>
          <li>
            <a href="/cooking">all things cooking</a>
          </li>
          <li>
            <a href="/tech-writing">all things tech writing</a>
          </li>
          <li>
            <a href="/league">all things league of legends</a>
          </li>
          <li>
            <a href="/style">earthtokezzi style guides</a>
          </li>
          <li>
            <a href="/about">all things about me</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};