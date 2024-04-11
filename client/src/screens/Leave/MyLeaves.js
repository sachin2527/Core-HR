import React from 'react';

const MyLeaves = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%',
          maxWidth: '1200px',
          borderRadius: '10px',
          padding: '40px',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ fontSize: '36px', marginBottom: '20px', textAlign: 'center', color: '#333' }}>My Leaves</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            gap: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: '#e6f4ff',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#444' }}>Annual Leave</h2>
              <p>You have taken <span style={{ fontWeight: 'bold', color: '#007bff' }}>10 days</span> of annual leave this year.</p>
            </div>
            <div>
              <p>Oct 1, 2023</p>
              <p>Personal</p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
              borderRadius: '8px',
              backgroundColor: '#e6f4ff',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#444' }}>Sick Leave</h2>
              <p>You have taken <span style={{ fontWeight: 'bold', color: '#007bff' }}>3 days</span> of sick leave this year.</p>
            </div>
            <div>
              <p>Sep 15, 2023</p>
              <p>Medical</p>
            </div>
          </div>
          {/* Add more leave items here */}
        </div>
      </div>
    </div>
  );
};

export default MyLeaves;
