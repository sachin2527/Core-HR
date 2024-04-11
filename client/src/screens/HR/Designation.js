import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BAGrid from '../../components/BSGrid';

const Designation = () => {
  const users = [
    // User data...

    {id:1, name: "Alex Costa", username: "alex11",designation: "COO",eStatus: "Permanent",department: "Management", shift: "Day",action: "1234567890" },
    {id:2, name: "Sachin Kumar", username: "sachin25",designation: "Full Stack Developer",eStatus: "Permanent",department: "Development", shift: "Day",action: "1234567890" },
    {id:3, name: "John Doe", username: "doejohn",designation: "BDE",eStatus: "Intern",department: "Marketing", shift: "Night",action: "1234567890" },
    {id:4, name: "Dev Singh", username: "devss",designation: "Application Developer",eStatus: "Terminated",department: "Development", shift: "Night",action: "1234567890" },
    {id:5, name: "Mitali Gehlot", username: "mit.11",designation: "Java Developer",eStatus: "Permanent",department: "Development", shift: "Day",action: "1234567890" },
    {id:6, name: "Nikita Sharma", username: "niki",designation: "Product Manager",eStatus: "Permanent",department: "Product Development", shift: "Night",action: "1234567890" },
    {id:7, name: "Aman Chaudhary", username: "aman  ",designation: "Devops Engineer",eStatus: "Permanent",department: "Project Delivery", shift: "Day",action: "1234567890" },
    {id:8, name: "Niha Bansal", username: "nihabnsl",designation: "Project Manager",eStatus: "Terminated",department: "Project Department", shift: "Day",action: "1234567890" },
    {id:9, name: "Vedika Bansal", username: "bnslVed",designation: "HR",eStatus: "Intern",department: "HR Department", shift: "Day",action: "" },
    {id:10, name: "Jishan Gul Khan", username: "jishan",designation: "Front-End Developer",eStatus: "Permanent",department: "Development", shift: "Night",action: "1234567890" },
  

    
  ];

  const cols = [
    { label: "ID", key: "id" },
    { label: "Name", key: "name" },
    { label: "Action", key: "action" }
  ];

  return (
    <>
      <Box sx={{ backgroundColor: 'white', borderRadius: 1.5, height: 70, mt: 0 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1.3, p: 1.2, px: 2.5 }}>
          <ArrowBackIcon sx={{ fontSize: 23 }} />
          <Typography style={{ marginLeft: 4, fontFamily: 'poppins', fontSize: 21, marginTop: 1.6 }} variant='h5'>Back</Typography>
        </Box>
      </Box>
      <Box sx={{ mt: 5, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography className='fs-5 fw-bold' style={{ fontFamily: 'poppins' }}>Add Designation</Typography>
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
          <Typography style={{ color: 'red', marginRight: 5 }}>*</Typography>
          <input style={{ width: 500, height: 50, border: '1px solid lightgrey', fontSize: 18, borderRadius: 8, padding: 10, backgroundColor: 'white', fontFamily: 'poppins' }} type='text' placeholder='Designation Name' />
        </Box>
        <Button style={{ background: 'yellowgreen', width: 200, marginTop: 25, color: 'white', fontFamily: 'poppins' }}>Add Designation</Button>
      </Box>
      <Box sx={{ backgroundColor: 'white', fontFamily: 'poppins', borderRadius: 3, mt: 5 }}>
        <Typography variant='h6' className='px-4 pt-4'>Designation List</Typography>
        <Box sx={{ p: 2 }}>
          <BAGrid datasource={users} gridCols={cols} />
        </Box>
      </Box>
    </>
  );
}

export default Designation;
