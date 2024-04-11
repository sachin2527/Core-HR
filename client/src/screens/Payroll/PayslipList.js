import React, { useState } from 'react';

const PayslipList = () => {
  const [payslips, setPayslips] = useState([
    { id: 1, employeeName: 'John Doe', month: 'January', year: 2024, amount: 2500 },
    { id: 2, employeeName: 'Alice Smith', month: 'January', year: 2024, amount: 2800 },
    { id: 2, employeeName: 'Alice Smith', month: 'January', year: 2024, amount: 2800 },
    { id: 3, employeeName: 'Bob Johnson', month: 'January', year: 2024, amount: 2300 },
    { id: 3, employeeName: 'Bob Johnson', month: 'January', year: 2024, amount: 2300 },
    { id: 3, employeeName: 'Bob Johnson', month: 'January', year: 2024, amount: 2300 },
    { id: 3, employeeName: 'Bob Johnson', month: 'January', year: 2024, amount: 2300 },
    { id: 3, employeeName: 'Bob Johnson', month: 'January', year: 2024, amount: 2300 },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newPayslip, setNewPayslip] = useState({
    employeeName: '',
    month: '',
    year: '',
    amount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPayslip({ ...newPayslip, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = payslips.length + 1;
    const updatedPayslips = [...payslips, { id, ...newPayslip }];
    setPayslips(updatedPayslips);
    setShowForm(false);
    setNewPayslip({ employeeName: '', month: '', year: '', amount: '' });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Payslip List</h1>

      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: 'lightgray' }}>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>ID</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Employee Name</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Month</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Year</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Amount ($)</th>
            <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {payslips.map(payslip => (
            <tr key={payslip.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{payslip.id}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{payslip.employeeName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{payslip.month}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{payslip.year}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>{payslip.amount}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid black' }}>
                <button onClick={() => alert(`View details for Payslip ID: ${payslip.id}`)} style={{ marginRight: '10px', backgroundColor: 'yellowgreen', color: 'white', borderRadius: '20px', padding: '8px 16px', border: 'none', cursor: 'pointer' }}>View Details</button>
                <button onClick={() => alert(`Print Payslip ID: ${payslip.id}`)} style={{ backgroundColor: 'yellowgreen', color: 'white', borderRadius: '20px', padding: '8px 16px', border: 'none', cursor: 'pointer' }}>Print</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm ? (
        <form onSubmit={handleSubmit}>
          <label>
            Employee Name:
            <input type="text" name="employeeName" value={newPayslip.employeeName} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Month:
            <input type="text" name="month" value={newPayslip.month} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Year:
            <input type="number" name="year" value={newPayslip.year} onChange={handleInputChange} required />
          </label>
          <br />
          <label>
            Amount ($):
            <input type="number" name="amount" value={newPayslip.amount} onChange={handleInputChange} required />
          </label>
          <br />
          <button type="submit" style={{ backgroundColor: 'yellowgreen', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '16px', padding: '10px 20px', marginTop: '10px' }}>Add Payslip</button>
        </form>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <button onClick={() => setShowForm(true)} style={{ backgroundColor: 'yellowgreen', color: 'white', borderRadius: '5px', border: 'none', cursor: 'pointer', fontSize: '16px', padding: '10px 20px' }}>Add New Payslip</button>
        </div>
      )}
    </div>
  );
}

export default PayslipList;
