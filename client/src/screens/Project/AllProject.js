import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const AllProjects = () => {
  // Dummy data for projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: 'Project 1',
      deadline: '2024-12-31',
      teamName: 'Team A',
      teamMembers: ['John Doe', 'Alice Smith'],
      technology: 'React',
      clientName: 'Client X',
      status: 'Completed',
    },
    {
      id: 2,
      projectName: 'Project 2',
      deadline: '2024-11-30',
      teamName: 'Team B',
      teamMembers: ['Bob Johnson', 'Emma Brown', 'Harry Jones'],
      technology: 'Angular',
      clientName: 'Client Y',
      status: 'Pending',
    },
  ]);

  // Function to handle changing project status
  const handleStatusChange = (projectId) => {
    setProjects(projects.map(project => {
      if (project.id === projectId) {
        project.status = project.status === 'Completed' ? 'Pending' : 'Completed';
      }
      return project;
    }));
  };

  // Function to remove completed project
  const handleRemoveProject = (projectId) => {
    setProjects(projects.filter(project => project.id !== projectId));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', padding: '10px 0', borderRadius: '5px 5px 0 0' }}>All Projects</h2>
      {projects.map(project => (
        <div key={project.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', position: 'relative' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, backgroundColor: 'transparent', borderRight: `5px solid ${project.status === 'Completed' ? '#4caf50' : '#ff9800'}`, borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}></div>
          <h3 style={{ color: '#333', marginBottom: '10px', paddingLeft: '10px', fontFamily: 'Arial, sans-serif' }}>{project.projectName}</h3>
          <p><strong>Deadline:</strong> {project.deadline}</p>
          <p><strong>Team Name:</strong> {project.teamName}</p>
          <p><strong>Team Members:</strong> {project.teamMembers.join(', ')}</p>
          <p><strong>Technology:</strong> {project.technology}</p>
          <p><strong>Client Name:</strong> {project.clientName}</p>
          <p>
            <strong>Status:</strong>
            <button onClick={() => handleStatusChange(project.id)} style={{ marginLeft: '10px', padding: '5px 10px', border: `1px solid ${project.status === 'Completed' ? '#4caf50' : '#ff9800'}`, borderRadius: '5px', color: '#333', backgroundColor: 'transparent', cursor: 'pointer' }}>
              {project.status === 'Completed' ? 'Completed' : 'Pending'}
            </button>
          </p>
          <button onClick={() => handleRemoveProject(project.id)} style={{ position: 'absolute', top: '5px', right: '5px', padding: '5px', border: 'none', borderRadius: '50%', color: '#fff', backgroundColor: '#f44336', cursor: 'pointer' }}>
            <DeleteIcon />
          </button>
        </div>
      ))}
    </div>
  );
}

export default AllProjects;
