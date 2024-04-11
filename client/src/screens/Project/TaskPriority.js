import React, { useState } from 'react';
import { Typography, TextField, MenuItem, Button, IconButton, Tooltip, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const TaskPriority = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', priority: 'High', description: 'This task requires immediate attention.', assignedTo: 'John Doe', dueDate: '2024-12-31', details: '', isEditing: false },
    { id: 2, name: 'Task 2', priority: 'Medium', description: 'This task should be addressed soon but is not as urgent as high priority tasks.', assignedTo: 'Alice Smith', dueDate: '2024-12-15', details: '', isEditing: false },
    { id: 3, name: 'Task 3', priority: 'Low', description: 'This task can be addressed later and does not require immediate attention.', assignedTo: 'Bob Johnson', dueDate: '2024-12-28', details: '', isEditing: false }
  ]);

  const handleChangePriority = (taskId, newPriority) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, priority: newPriority };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleAddDetails = (taskId, details) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, details, isEditing: false };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleEditDetails = (taskId) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isEditing: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    const newId = tasks.length + 1;
    setTasks([...tasks, {
      id: newId,
      name: `Task ${newId}`,
      priority: '',
      description: '',
      assignedTo: '',
      dueDate: '',
      details: '',
      isEditing: false
    }]);
  };

  const getBorderStyle = (priority) => {
    switch (priority) {
      case 'High':
        return '2px solid red';
      case 'Medium':
        return '2px solid yellow';
      case 'Low':
        return '2px solid green';
      default:
        return '2px solid transparent';
    }
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', height: '100vh' }}>
      <Typography variant="h4" style={{ marginBottom: '20px', color: '#333' }}>Task Priority</Typography>
      {tasks.map((task, index) => (
        <div key={task.id} style={{ borderRadius: '10px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: getBorderStyle(task.priority), marginBottom: index === tasks.length - 1 ? '20px' : '10px', margin: '10px' }}>
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <Typography variant="body1" style={{ marginRight: '10px', width: '120px' }}>{task.name}</Typography>
              <TextField
                select
                label="Priority"
                variant="outlined"
                value={task.priority}
                onChange={(e) => handleChangePriority(task.id, e.target.value)}
                style={{ minWidth: '150px', marginRight: '10px' }}
              >
                <MenuItem value="High">High</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Low">Low</MenuItem>
              </TextField>
            </div>
            <Typography variant="body2" style={{ marginLeft: '130px', color: '#666' }}>{task.description}</Typography>
          </div>
          {task.isEditing ? (
            <div style={{ marginBottom: '10px' }}>
              <TextField
                label="Details"
                variant="outlined"
                value={task.details}
                onChange={(e) => setTasks(tasks.map(t => (t.id === task.id ? { ...t, details: e.target.value } : t)))}
                fullWidth
                multiline
                rows={3}
                style={{ marginBottom: '10px' }}
              />
              <Button variant="contained" color="primary" onClick={() => handleAddDetails(task.id, task.details)}>Save Details</Button>
            </div>
          ) : (
            <Box style={{ marginBottom: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <Typography variant="body2" style={{ color: '#666' }}>Assigned To: {task.assignedTo}</Typography>
                <Typography variant="body2" style={{ color: '#666' }}>Due Date: {task.dueDate}</Typography>
              </div>
              <div style={{ position: 'relative' }}>
                <Tooltip title="Edit Details">
                  <IconButton onClick={() => handleEditDetails(task.id)} style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)' }}>
                    <EditIcon fontSize="small" style={{ color: '#3366cc' }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Box>
          )}
          <div style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', marginBottom: '10px' }}>
            <Typography variant="body2" style={{ color: '#333' }}>Details:</Typography>
            <Typography variant="body2">{task.details}</Typography>
          </div>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={handleAddTask} style={{ marginBottom: '20px' }}>Add Task</Button>
    </div>
  );
}

export default TaskPriority;
