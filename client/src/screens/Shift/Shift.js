import React, { useState } from 'react';

const Shift = () => {
  // State to store shifts
  const [shifts, setShifts] = useState([
    { id: 1, name: 'Morning Shift', time: '9:00 AM - 5:00 PM' },
    { id: 2, name: 'Night Shift', time: '6:00 PM - 2:00 AM' },
  ]);

  // State to manage form input values
  const [formData, setFormData] = useState({ name: '', time: '' });
  
  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission for adding or editing shifts
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.time) {
      const newShifts = [...shifts];
      const existingShiftIndex = newShifts.findIndex(shift => shift.id === formData.id);
      if (existingShiftIndex !== -1) {
        // Edit existing shift
        newShifts[existingShiftIndex] = formData;
      } else {
        // Add new shift
        const newId = newShifts.length > 0 ? newShifts[newShifts.length - 1].id + 1 : 1;
        newShifts.push({ ...formData, id: newId });
      }
      setShifts(newShifts);
      setFormData({ name: '', time: '' });
    }
  };

  // Function to handle editing a shift
  const handleEditShift = (id) => {
    const shiftToEdit = shifts.find(shift => shift.id === id);
    setFormData({ ...shiftToEdit });
  };

  // Function to handle deleting a shift
  const handleDeleteShift = (id) => {
    const updatedShifts = shifts.filter(shift => shift.id !== id);
    setShifts(updatedShifts);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(135deg, #ffffff 30%, #e5e5e5 100%)' }}>
      <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '15px', backdropFilter: 'blur(20px)', boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Shift Management</h1>

        {/* Display existing shifts */}
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>Current Shift Schedule</h2>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {shifts.map(shift => (
              <li key={shift.id} style={{ marginBottom: '10px', backgroundColor: '#fff', padding: '15px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{shift.name}</strong> - {shift.time}
                </div>
                <div>
                  <button onClick={() => handleEditShift(shift.id)} style={{ marginRight: '10px', backgroundColor: '#4caf50', color: '#fff', borderRadius: '20px', border: 'none', cursor: 'pointer', padding: '10px 20px', transition: 'background-color 0.3s', marginLeft: '10px' }}>Edit</button>
                  <button onClick={() => handleDeleteShift(shift.id)} style={{ backgroundColor: '#f44336', color: '#fff', borderRadius: '20px', border: 'none', cursor: 'pointer', padding: '10px 20px', transition: 'background-color 0.3s' }}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Add or edit shift form */}
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', backdropFilter: 'blur(20px)' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '10px', color: '#333' }}>Add or Edit Shift</h2>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <label style={{ marginBottom: '10px', color: '#333' }}>
              Shift Name:
              <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '300px' }} required />
            </label>
            <label style={{ marginBottom: '10px', color: '#333' }}>
              Shift Time:
              <input type="text" name="time" value={formData.time} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '10px', border: '1px solid #ccc', width: '300px' }} required />
            </label>
            <button type="submit" style={{ backgroundColor: '#2196f3', color: '#fff', borderRadius: '10px', border: 'none', cursor: 'pointer', padding: '10px 20px', marginTop: '10px', transition: 'background-color 0.3s' }}>Save Shift</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shift;
