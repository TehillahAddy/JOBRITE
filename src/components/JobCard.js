import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div>
      <h3>{job.title}</h3>
      <p>{job.company}</p>
      <p>{job.description}</p>
      <Link to={`/job/${job.id}`}>View Details</Link>
    </div>
  );
};

export default JobCard;
