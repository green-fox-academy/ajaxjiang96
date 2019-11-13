import React from 'react';

export default ({ title, body }) => (
  <li>
    <section>
      <h1>
        {title}
      </h1>
      <p>
        {body}
      </p>
    </section>
  </li>
);
