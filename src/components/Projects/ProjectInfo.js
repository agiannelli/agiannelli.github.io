import React from 'react';

const ProjectInfo = (props) => {

  return (
    <div className="project-info">
      <h1>Project Info:</h1>
      <p>Based on:
          <a href={props.url} target="_blank">{props.title}</a>
      </p>
      {props.nextUp === undefined || props.nextUp === null ? null :
      <p>Next up: {props.nextUp}</p> }
    </div>
  );
};

export default ProjectInfo;