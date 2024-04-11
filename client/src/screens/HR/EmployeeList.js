import React from 'react'
import './HR.css'
import BAGrid from '../../components/BSGrid';
import { Box } from '@mui/material';

const EmployeeList = () => {
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
      label: "User Name",
      key: "username",
    },
    {
      label: "Designation",
      key: "designation",
    },
    {
      label: "E-Status",
      key: "eStatus",
    },
    {
      label: "Department",
      key: "department",
    },
    {
      label: "Shift",
      key: "shift",
    },
    {
      label: "Action",
      key: "action",
    }
  ];

  return (<>
  <Box sx={{backgroundColor:'white',fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',borderRadius:3,mt:5}}>
  <h4 className='px-4 fw-light pt-4'>Employee List</h4>
  <Box sx={{p:2,pt:4}}>
  <BAGrid  datasource={users} gridCols={cols}  />
  </Box>    
  </Box>
  {/* <Box>
    <Typography style={{fontFamily:'Cambria, Cochin, Georgia, Times, Times New Roman, serif',marginTop:85,textAlign:'center'}}>2023 Omega Solution One stop solution.</Typography>
  </Box> */}

    </>
  )
}

export default EmployeeList