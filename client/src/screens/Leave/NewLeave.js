import React, { useState } from 'react';

const NewLeave = () => {
  const [formData, setFormData] = useState({
    employeeName: '',
    leaveType: '',
    startDate: '',
    endDate: '',
    reason: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit form data
    console.log(formData);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Apply for Leave</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Employee Name:</label>
          <input type="text" name="employeeName" value={formData.employeeName} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid rgba(0, 0, 0, 0.1)', background: 'rgba(255, 255, 255, 0.5)' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Leave Type:</label>
          <select name="leaveType" value={formData.leaveType} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid rgba(0, 0, 0, 0.1)', background: 'rgba(255, 255, 255, 0.5)' }} required>
            <option value="">Select Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Vacation Leave">Vacation Leave</option>
            <option value="Personal Leave">Personal Leave</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Start Date:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid rgba(0, 0, 0, 0.1)', background: 'rgba(255, 255, 255, 0.5)' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>End Date:</label>
          <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid rgba(0, 0, 0, 0.1)', background: 'rgba(255, 255, 255, 0.5)' }} required />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', color: '#555' }}>Reason:</label>
          <textarea name="reason" value={formData.reason} onChange={handleChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid rgba(0, 0, 0, 0.1)', background: 'rgba(255, 255, 255, 0.5)' }} required></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: '#009688', color: '#fff', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '16px' }}>Submit</button>
      </form>
    </div>
  );
}

export default NewLeave;
