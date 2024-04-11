import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import BAGrid from '../../components/BSGrid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const RoleAndPermission = () => {
  const users = [
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
    {
      label: "ID",
      key: "id",
    },
    {
      label: "Name",
      key: "name",

    },
    {
      label: "Created At",
      key: "CreatedAt",
    },
    {
      label: "Action",
      key: "action",
    }
  ];

  return (
    <>
      <Box sx={{ backgroundColor: 'white', borderRadius: 1.5, height: 70, mt: -4 }}>
        <Box sx={{ display: 'inline-flex', mt: 1.3, p: 1.2, px: 2.5 }} >
          <ArrowBackIcon sx={{ fontSize: 23, mt: 0.5 }} />
          <Typography style={{ marginLeft: 4, fontFamily: 'poppins', fontSize: 21, marginTop: 1.6 }} variant='h5'>Back</Typography>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: 'white', mt: 5, height: 250, width: 600, padding: 6 }}>
        <Typography className='fs-5 fw-bold text-center' style={{ fontFamily: 'poppins' }}>Add New Role</Typography>
        <Box sx={{ marginLeft: 5, fontFamily: 'poppins', mt: 1.5, display: 'flex', flexDirection: 'row' }}>
          <Typography style={{ color: 'red', margin: 2 }}>*</Typography>
          <Typography variant='p'>
            Name:
            <input style={{ marginLeft: 5, width: 330, height: 35, border: 'solid 1px lightgrey', fontSize: 15, borderRadius: 5, padding: 4, backgroundColor: 'white', fontFamily: 'poppins' }} type='text' />
          </Typography>
        </Box>
        <Button style={{backgroundColor:'#1890ff',width:320,marginTop:25,marginLeft:112,textAlign:'center',color:'white',fontFamily:'poppins'}}>Add New Role</Button>
      </Box>
      <Box sx={{ backgroundColor: 'white', fontFamily: 'poppins', borderRadius: 3, mt: 5 }}>
        <h4 className='px-4 fw-light pt-4'>Role List</h4>
        <Box sx={{ p: 2, pt: 4 }}>
          <BAGrid datasource={users} gridCols={cols} />
        </Box>
      </Box>
     
    </>
  )
}

export default RoleAndPermission