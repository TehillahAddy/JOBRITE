import React from 'react';
import JobCard from './JobCard';

const JobList = ({ searchQuery }) => {
  const jobs = [
    { id: 1, title: 'Software Engineer', company: 'Company A', description: 'A great job opportunity' },
    { id: 2, title: 'Frontend Developer', company: 'Company B', description: 'Build amazing interfaces' },
    { id: 3, title: 'Backend Developer', company: 'Company C', description: 'Work on server-side logic' },
  ];

  const filteredJobs = jobs.filter((job) => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {filteredJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
