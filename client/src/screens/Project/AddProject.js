import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

const AddProject = () => {
  const [project, setProject] = useState({
    projectName: '',
    teamName: '',
    teamMembers: [''],
    technology: '',
    clientName: '',
  });

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const updatedTeamMembers = [...project.teamMembers];
    updatedTeamMembers[index] = value;
    setProject({ ...project, teamMembers: updatedTeamMembers });
  };

  const handleAddTeamMember = () => {
    setProject({ ...project, teamMembers: [...project.teamMembers, ''] });
  };

  const handleRemoveTeamMember = (index) => {
    const updatedTeamMembers = [...project.teamMembers];
    updatedTeamMembers.splice(index, 1);
    setProject({ ...project, teamMembers: updatedTeamMembers });
  };

  const handleSubmit = () => {
    const isConfirmed = window.confirm('Are you sure you want to add this project?');
    if (isConfirmed) {
      console.log('Project:', project);
      setProject({
        projectName: '',
        teamName: '',
        teamMembers: [''],
        technology: '',
        clientName: '',
      });
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', paddingTop: '10px' }}>Add New Project</h2>
      <input type="text" name="projectName" placeholder="Project Name" value={project.projectName} onChange={(e) => setProject({ ...project, projectName: e.target.value })} style={{ marginBottom: '10px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      <input type="text" name="teamName" placeholder="Team Name" value={project.teamName} onChange={(e) => setProject({ ...project, teamName: e.target.value })} style={{ marginBottom: '10px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      {project.teamMembers.map((teamMember, index) => (
        <div key={index} style={{ display: 'flex', marginBottom: '10px' }}>
          <input type="text" placeholder={`Team Member ${index + 1}`} value={teamMember} onChange={(e) => handleInputChange(e, index)} style={{ flex: 1, marginRight: '5px', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
          {index > 0 && (
            <IconButton onClick={() => handleRemoveTeamMember(index)} style={{ padding: '8px', borderRadius: '5px', background: '#cc3333', color: '#fff', border: 'none', cursor: 'pointer' }}>
              <Delete />
            </IconButton>
          )}
        </div>
      ))}
      <button onClick={handleAddTeamMember} style={{ marginBottom: '10px', padding: '8px 16px', borderRadius: '5px', background: '#3366cc', color: '#fff', border: 'none', cursor: 'pointer' }}>Add Team Member</button>
      <input type="text" name="technology" placeholder="Technology" value={project.technology} onChange={(e) => setProject({ ...project, technology: e.target.value })} style={{ marginBottom: '10px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      <input type="text" name="clientName" placeholder="Client Name" value={project.clientName} onChange={(e) => setProject({ ...project, clientName: e.target.value })} style={{ marginBottom: '10px', width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleSubmit} style={{ padding: '8px 16px', borderRadius: '5px', background: '#0056b3', color: '#fff', border: 'none', cursor: 'pointer' }}>Submit</button>
      </div>
    </div>
  );
}

export default AddProject;
