import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BAGrid from '../../components/BSGrid';

const Department = () => {
  const users = [
    { id: 1, name: "Alex Costa", username: "alex11", designation: "COO", eStatus: "Permanent", department: "Management", shift: "Day", action: "1234567890" },
    { id: 2, name: "Sachin Kumar", username: "sachin25", designation: "Full Stack Developer", eStatus: "Permanent", department: "Development", shift: "Day", action: "1234567890" },
    { id: 3, name: "John Doe", username: "doejohn", designation: "BDE", eStatus: "Intern", department: "Marketing", shift: "Night", action: "1234567890" },
    { id: 4, name: "Dev Singh", username: "devss", designation: "Application Developer", eStatus: "Terminated", department: "Development", shift: "Night", action: "1234567890" },
    { id: 5, name: "Mitali Gehlot", username: "mit.11", designation: "Java Developer", eStatus: "Permanent", department: "Development", shift: "Day", action: "1234567890" },
    { id: 6, name: "Nikita Sharma", username: "niki", designation: "Product Manager", eStatus: "Permanent", department: "Product Development", shift: "Night", action: "1234567890" },
    { id: 7, name: "Aman Chaudhary", username: "aman", designation: "Devops Engineer", eStatus: "Permanent", department: "Project Delivery", shift: "Day", action: "1234567890" },
    { id: 8, name: "Niha Bansal", username: "nihabnsl", designation: "Project Manager", eStatus: "Terminated", department: "Project Department", shift: "Day", action: "1234567890" },
    { id: 9, name: "Vedika Bansal", username: "bnslVed", designation: "HR", eStatus: "Intern", department: "HR Department", shift: "Day", action: "" },
    { id: 10, name: "Jishan Gul Khan", username: "jishan", designation: "Front-End Developer", eStatus: "Permanent", department: "Development", shift: "Night", action: "1234567890" },
  ];

  const cols = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Created At", key: "CreatedAt" },
    { label: "Action", key: "action" }
  ];

  return (
    <>
      <Box sx={{ backgroundColor: 'white', borderRadius: '10px', height: '70px', marginTop: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1.3, padding: 1.2, paddingLeft: 2.5 }}>
          <ArrowBackIcon sx={{ fontSize: 23 }} />
          <Typography variant='h5' style={{ marginLeft: 4, fontFamily: 'poppins', fontSize: 21, marginTop: 1.6 }}>Back</Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', marginTop: 5, padding: '1rem' }}>
        <Typography variant='h5' className='fs-5 fw-bold text-center' style={{ fontFamily: 'poppins' }}>Add Department</Typography>
        <Box sx={{ marginTop: 1.5 }}>
          <Box sx={{ marginBottom: 2 }}>
            <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
            <Typography variant='p'>Name:</Typography>
            <input style={{ width: '100%', maxWidth: '330px', height: '35px', border: 'solid 1px lightgrey', fontSize: '15px', borderRadius: '5px', padding: '4px', backgroundColor: 'white', fontFamily: 'poppins' }} type='text' />
          </Box>
          <Button style={{ width: '100%', maxWidth: '320px', marginTop: 2, backgroundColor: '#1890ff', color: 'white', fontFamily: 'poppins' }}>Add New Department</Button>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', fontFamily: 'poppins', borderRadius: 3, marginTop: 5 }}>
        <Typography variant='h6' className='px-4 pt-4'>Role List</Typography>
        <Box sx={{ p: 2, pt: 4 }}>
          <BAGrid datasource={users} gridCols={cols} />
        </Box>
      </Box>
    </>
  );
}

export default Department;
