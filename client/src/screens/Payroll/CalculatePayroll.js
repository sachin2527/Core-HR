import React from 'react';

const CalculatePayroll = () => {
  // Dummy data for tables
  const employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', salary: 50000 },
    { id: 2, name: 'Alice Smith', position: 'HR Manager', salary: 60000 },
    { id: 3, name: 'Bob Johnson', position: 'Full Stack Developer', salary: 45000 },
    { id: 4, name: 'Niha Bansal', position: 'Product Manager', salary: 43000 },
    { id: 5, name: 'Nikita Sharma', position: 'Project Manager', salary: 45000 },
    { id: 6, name: 'Aman ', position: 'BDE', salary: 40000 },
    { id: 7, name: 'Sachin Kumar', position: 'Android Developer ', salary: 60000 },
    { id: 8, name: 'Mitali Gehlot', position: 'Sales Representative', salary: 45000 },
    { id: 9, name: 'Alex Costa', position: 'Sales Recruiter', salary: 55000 },
  ];

  // Dummy function to handle payroll calculation
  const calculatePayroll = () => {
    // Perform payroll calculation logic here
    alert('Payroll calculation completed!');
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Calculate Payroll</h1>

      {/* Table of employees */}
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: 'lightgray' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Position</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Salary (INR)</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{employee.id}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{employee.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{employee.position}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Button to calculate payroll */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button 
          onClick={calculatePayroll}
          style={{ 
            backgroundColor: 'yellowgreen', 
            color: 'white', 
            padding: '10px 20px', 
            borderRadius: '5px', 
            border: 'none', 
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Calculate Payroll
        </button>
      </div>

      {/* Input field for additional payroll information */}
      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="additionalInfo" style={{ display: 'block', marginBottom: '5px', fontSize: '16px' }}>Additional Payroll Information:</label>
        <input type="text" id="additionalInfo" style={{ width: '100%', padding: '8px', fontSize: '16px' }} />
      </div>
    </div>
  );
}

export default CalculatePayroll;
