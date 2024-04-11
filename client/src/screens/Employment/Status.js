import React, { useState } from 'react';

const Status = () => {
  const [employeeStatus, setEmployeeStatus] = useState([
    { id: 1, name: 'John Doe', status: 'Active', lastUpdated: '2024-04-10' },
    { id: 2, name: 'Alice Smith', status: 'Inactive', lastUpdated: '2024-04-09' },
    { id: 3, name: 'Bob Johnson', status: 'Meeting', lastUpdated: '2024-04-08' },
  ]);

  const [newStatus, setNewStatus] = useState({ name: '', status: '', lastUpdated: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStatus({ ...newStatus, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = employeeStatus.length + 1;
    const updatedStatus = [...employeeStatus, { id, ...newStatus }];
    setEmployeeStatus(updatedStatus);
    setNewStatus({ name: '', status: '', lastUpdated: '' });
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Employee Status</h1>
      <div style={contentStyle}>
        {employeeStatus.map((status) => (
          <div key={status.id} style={{ ...statusItemStyle, borderColor: getStatusColor(status.status) }}>
            <div style={statusItemContentStyle}>
              <span style={statusTextStyle}>Employee Name:</span> {status.name}<br />
              <span style={statusTextStyle}>Status:</span> {status.status}<br />
              <span style={statusTextStyle}>Last Updated:</span> {status.lastUpdated}<br />
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input type="text" name="name" value={newStatus.name} onChange={handleInputChange} placeholder="Employee Name" style={inputStyle} />
        <select name="status" value={newStatus.status} onChange={handleInputChange} style={inputStyle}>
          <option value="">Select Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Meeting">Meeting</option>
        </select>
        <input type="date" name="lastUpdated" value={newStatus.lastUpdated} onChange={handleInputChange} style={inputStyle} />
        <button type="submit" style={buttonStyle}>Add New Status</button>
      </form>
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: '10px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
};

const headingStyle = {
  textAlign: 'center',
  marginBottom: '20px',
  color: 'black', 
};
const contentStyle = {
  marginBottom: '20px',
};

const statusItemStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  padding: '10px',
  borderRadius: '5px',
  marginBottom: '10px',
  border: '1px solid',
};

const statusItemContentStyle = {
  padding: '10px',
};

const statusTextStyle = {
  fontWeight: 'bold',
  marginRight: '10px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  margin: '10px 0',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
  transition: 'background-color 0.3s, color 0.3s',
};


const getStatusColor = (status) => {
  switch (status) {
    case 'Active':
      return '#00cc00';
    case 'Inactive':
      return '#ff3333';
    case 'Meeting':
      return '#3399ff';
    default:
      return '#fff';
  }
};

export default Status;
