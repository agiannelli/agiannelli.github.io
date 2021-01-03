import React from 'react';

const ProjectInfo = ({ children }, props) => {

  return (
    <div className="project-info">
      <h1>Project Info:</h1>
      <p>Based off of:
          <a className="project-link" href="{props.url}">Simple User Authentication in React</a>
      </p>
      {children}
    </div>
  );
};

export default ProjectInfo;