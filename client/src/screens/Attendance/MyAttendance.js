import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import BAGrid from '../../components/BSGrid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const MyAttendance = () => {
  const users = [
    { id: 1, name: "Alex Costa", inTime: "22-01-2024, 10:00 AM", outTime: "22-10-2023, 6:00 PM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'green', color: 'green' }}>ON TIME</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'blue', color: 'blue' }}>EARLY</Button>, PunchBy: "IGNEK", TotalHour: 8 },
    { id: 2, name: "John Doe", inTime: "22-01-2024, 10:05 AM", outTime: "22-10-2023, 6:00 PM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "IGNEK", TotalHour: 8 },
    { id: 3, name: "Aston Martin", inTime: "22-01-2024, 10:00 AM", outTime: "22-10-2023, 6:00 PM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'green', color: 'green' }}>ON TIME</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "IGNEK", TotalHour: 8 },
    { id: 4, name: "Sachin Kumar", inTime: "22-01-2024, 10:00 AM", outTime: "22-10-2023, 6:00 PM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'green', color: 'green' }}>ON TIME</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "IGNEK", TotalHour: 8 },
    { id: 5, name: "Mitali gehlot", inTime: "22-01-2024, 10:00 AM", outTime: "22-10-2023,6:00 PM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>ON TIME</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "IGNEK", TotalHour: 8 },
    { id: 6, name: "Alex", inTime: "22-01-2024, 11:00 AM", outTime: "22-10-2023, 6:00 PM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "IGNKE", TotalHour: 7 },
    { id: 7, name: "Aman", inTime: "22-01-2024, 10:00 AM", outTime: "22-10-2023, 7:00 PM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'green', color: 'green' }}>ON TIME</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'grey', color: 'green' }}>NONE</Button>, PunchBy: "IGNEK", TotalHour: 9 },
    { id: 8, name: "Sam Altman", inTime: "22-01-2024, 10:00 AM", outTime: "22-10-2023, 6:00 PM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'green', color: 'green' }}>ON TIME</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'blue', color: 'blue' }}>EARLY</Button>, PunchBy: "IGNEK", TotalHour: 8 },
// za Kamelen", inTime: "22-10-2023, 12:00 AM", outTime: "22-10-2023, 12:00 AM", inStatus: <Button sx={{ border: 1, height: 23, borderColor: 'red', color: 'red' }}>LATE</Button>, outStatus: <Button sx={{ border: 1, height: 23, borderColor: 'blue', color: 'blue' }}>EARLY</Button>, PunchBy: "Hamza Tech", TotalHour: 12 },

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
      label: "inTime",
      key: "inTime",
    },
    {
      label: "outTime",
      key: "outTime",
    },
    {
      label: "In Status",
      key: "inStatus",
    },
    {
      label: "Out Status",
      key: "outStatus",
    },
    {
      label: "Punch By",
      key: "PunchBy",
    },
    {
      label: "Total Hour",
      key: "TotalHour",
    }
  ];

  return (<>
    <Box sx={{ backgroundColor: 'white', borderRadius: 1.5, height: 70, mt: -4 }}>
      <Box sx={{ display: 'inline-flex', mt: 1.3, p: 1.2, px: 2.5 }} >
        <ArrowBackIcon sx={{ fontSize: 23, mt: 0.5 }} />
        <Typography style={{ marginLeft: 4, fontFamily: 'poppins', fontSize: 21, marginTop: 1.6 }} variant='h5'>Back</Typography>
      </Box>
    </Box>
    <Box sx={{ backgroundColor: 'white', fontFamily: 'poppins', borderRadius: 3, mt: 5 }}>
      <h4 className='px-4 fw-light pt-4'>Attendance History</h4>
      <Box sx={{ p: 2, pt: 4 }}>
        <BAGrid datasource={users} gridCols={cols} />
      </Box>
    </Box>
    <Box>
      <Typography style={{ fontFamily: 'poppins', marginTop: 85, textAlign: 'center' }}>2023 Omega Solution One stop solution.</Typography>
    </Box>

  </>
  )
}

export default MyAttendance