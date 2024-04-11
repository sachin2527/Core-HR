import React from 'react';

const LeaveStatus = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '20px auto', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: '#e6f4ff', border: '1px solid #b3d9ff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Leave Status</h2>
      {/* Employee 1 */}
      <div style={{ marginBottom: '20px', padding: '20px', borderRadius: '10px', background: '#ccebff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ color: '#3366cc', marginBottom: '10px', borderBottom: '1px solid #b3d9ff', paddingBottom: '10px' }}>John Doe</h3>
        <div style={{ marginBottom: '10px' }}>
          <p><span style={{ fontWeight: 'bold' }}>Leave Request ID:</span> 12345</p>
          <p><span style={{ fontWeight: 'bold' }}>Leave Type:</span> Annual Leave</p>
          <p><span style={{ fontWeight: 'bold' }}>Start Date:</span> 2024-04-01</p>
          <p><span style={{ fontWeight: 'bold' }}>End Date:</span> 2024-04-05</p>
          <p><span style={{ fontWeight: 'bold' }}>Status:</span> Approved</p>
        </div>
      </div>
      {/* Employee 2 */}
      <div style={{ marginBottom: '20px', padding: '20px', borderRadius: '10px', background: '#ccebff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ color: '#3366cc', marginBottom: '10px', borderBottom: '1px solid #b3d9ff', paddingBottom: '10px' }}>Alice Smith</h3>
        <div style={{ marginBottom: '10px' }}>
          <p><span style={{ fontWeight: 'bold' }}>Leave Request ID:</span> 67890</p>
          <p><span style={{ fontWeight: 'bold' }}>Leave Type:</span> Sick Leave</p>
          <p><span style={{ fontWeight: 'bold' }}>Start Date:</span> 2024-04-10</p>
          <p><span style={{ fontWeight: 'bold' }}>End Date:</span> 2024-04-11</p>
          <p><span style={{ fontWeight: 'bold' }}>Status:</span> Pending</p>
        </div>
      </div>
    </div>
  );
}

export default LeaveStatus;
