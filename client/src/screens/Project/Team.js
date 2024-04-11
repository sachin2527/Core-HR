import React, { useState } from 'react';
import { IconButton, TextField, Button, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { Add, Delete } from '@mui/icons-material';

const Team = () => {
  const [teams, setTeams] = useState([
    { teamName: '', project: '' },
  ]);

  const [assignedProjects, setAssignedProjects] = useState([]);

  const handleTeamNameChange = (index, teamName) => {
    const updatedTeams = [...teams];
    updatedTeams[index].teamName = teamName;
    setTeams(updatedTeams);
  };

  const handleProjectChange = (index, project) => {
    const updatedTeams = [...teams];
    updatedTeams[index].project = project;
    setTeams(updatedTeams);
  };

  const handleAddTeam = () => {
    setTeams([...teams, { teamName: '', project: '' }]);
  };

  const handleRemoveTeam = (index) => {
    const updatedTeams = [...teams];
    updatedTeams.splice(index, 1);
    setTeams(updatedTeams);
  };

  const handleSave = () => {
    const newAssignedProjects = [...assignedProjects, ...teams];
    setAssignedProjects(newAssignedProjects);
    setTeams([{ teamName: '', project: '' }]);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', paddingTop: '10px' }}>Assigned Projects</h2>
      {teams.map((team, index) => (
        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <TextField
            label={`Team Name ${index + 1}`}
            value={team.teamName}
            onChange={(e) => handleTeamNameChange(index, e.target.value)}
            style={{ marginRight: '10px', flex: 1 }}
          />
          <FormControl style={{ marginRight: '10px', minWidth: '120px' }}>
            <InputLabel>Project</InputLabel>
            <Select
              value={team.project}
              onChange={(e) => handleProjectChange(index, e.target.value)}
              style={{ minWidth: '120px' }}
            >
              <MenuItem value="">Select Project</MenuItem>
              <MenuItem value="Project A">Project A</MenuItem>
              <MenuItem value="Project B">Project B</MenuItem>
              <MenuItem value="Project C">Project C</MenuItem>
            </Select>
          </FormControl>
          <IconButton onClick={() => handleRemoveTeam(index)} style={{ padding: '8px', borderRadius: '5px', background: '#cc3333', color: '#fff', border: 'none', cursor: 'pointer' }}>
            <Delete />
          </IconButton>
        </div>
      ))}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <IconButton onClick={handleAddTeam} style={{ marginRight: '10px', borderRadius: '5px', background: '#3366cc', color: '#fff', border: 'none', cursor: 'pointer' }}>
          <Add />
        </IconButton>
        <Button onClick={handleSave} variant="contained" style={{ borderRadius: '5px', background: '#0056b3', color: '#fff', border: 'none', cursor: 'pointer', padding: '8px', backgroundColor: '#4CAF50' }}>Save</Button>
      </div>
      {assignedProjects.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <Typography variant="h5" style={{ marginBottom: '10px', color: '#333' }}>Assigned Projects</Typography>
          {assignedProjects.map((assignedProject, index) => (
            <div key={index} style={{ background: '#f7f7f7', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
              <Typography variant="body1">{`Team Name: ${assignedProject.teamName}`}</Typography>
              <Typography variant="body1">{`Project: ${assignedProject.project}`}</Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Team;
