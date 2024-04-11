import React from 'react';

const LeavePolicy = () => {
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
          width: '80%',
          maxWidth: '1200px',
          borderRadius: '10px',
          padding: '40px',
          backgroundColor: '#fff',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h1 style={{ fontSize: '36px', marginBottom: '20px', textAlign: 'center', color: '#333' }}>Leave Policy</h1>
        <div
          style={{
            backgroundColor: '#e6f4ff',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#444' }}>Annual Leave</h2>
          <p>
            Employees are entitled to <span style={{ fontWeight: 'bold', color: '#007bff' }}>20 days</span> of annual leave per year, which accrues progressively throughout the year.
            Leave must be requested and approved in advance, preferably through the company's HR system.
          </p>
        </div>
        <div
          style={{
            backgroundColor: '#e6f4ff',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#444' }}>Sick Leave</h2>
          <p>
            Sick leave is provided for illness or injury that prevents an employee from performing their duties.
            Employees are entitled to <span style={{ fontWeight: 'bold', color: '#007bff' }}>10 days</span> of sick leave per year, which can be extended with proper medical documentation.
          </p>
        </div>
        <div
          style={{
            backgroundColor: '#e6f4ff',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#444' }}>Maternity/Paternity Leave</h2>
          <p>
            Maternity leave is available for pregnant employees for a period of up to <span style={{ fontWeight: 'bold', color: '#007bff' }}>12 weeks</span>.
            Paternity leave is also available for new fathers for up to <span style={{ fontWeight: 'bold', color: '#007bff' }}>2 weeks</span>.
            Additional parental leave may be taken in accordance with company policies and applicable laws.
          </p>
        </div>
        <div
          style={{
            backgroundColor: '#e6f4ff',
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '20px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '24px', marginBottom: '10px', color: '#444' }}>Public Holidays</h2>
          <p>
            Employees are entitled to public holidays as per government regulations.
            Any work performed on public holidays may be eligible for additional compensation or time off in lieu.
          </p>
        </div>
        <div style={{ marginTop: '40px', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px', textAlign: 'center', color: '#333' }}>Additional Information</h2>
          <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#666' }}>
            In addition to the above policies, employees may also be eligible for special leave, such as compassionate leave, 
            study leave, or unpaid leave, depending on individual circumstances and company policies. 
            Employees are encouraged to refer to the employee handbook or consult HR for further details.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeavePolicy;
