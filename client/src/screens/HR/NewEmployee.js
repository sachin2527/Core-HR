import React, { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Button, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const NewEmployee = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const totalSlides = 4;

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setIsSubmitOpen(true);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleCloseSubmit = () => {
    setIsSubmitOpen(false);
  };

  const forms = [
    {
      title: 'User Information',
      fields: [
        { label: 'First Name:', placeholder: 'First Name' },
        { label: 'Last Name:', placeholder: 'Last Name' },
        { label: 'User Name:', placeholder: 'user_name' },
        { label: 'Password:', placeholder: 'At Least 8 Characters' },
        { label: 'Email:', placeholder: 'abc@gmail.com' }
      ]
    },
    {
      title: 'Address Information',
      fields: [
        { label: 'Street:', placeholder: '123 Main Street' },
        { label: 'City:', placeholder: 'City Name' },
        { label: 'State:', placeholder: 'CA' },
        { label: 'Zip Code:', placeholder: '5555' },
        { label: 'Country:', placeholder: 'Country' }
      ]
    },
    {
      title: 'Employee Information',
      fields: [
        { label: 'Joining Date:', placeholder: 'MM/DD/YYYY' },
        { label: 'Leave Date:', placeholder: 'MM/DD/YYYY' },
        { label: 'Employee ID:', placeholder: 'OE-012' },
        { label: 'Blood Group:', placeholder: 'Select Blood Group' },
        { label: 'Employee Status:', placeholder: 'Select Status' },
        { label: 'Department:', placeholder: 'Select Department' },
        { label: 'Role:', placeholder: 'Select Role' },
        { label: 'Shift:', placeholder: 'Select Shift' },
        { label: 'Leave Policy:', placeholder: 'Select Leave Policy' },
        { label: 'Weekly Holiday:', placeholder: 'Select Weekly Holiday' }
      ]
    },
    {
      title: 'Designation & Salary Information',
      fields: [
        { label: 'Designation:', placeholder: 'Select Designation' },
        { label: 'Designation Start Date:', placeholder: 'MM/DD/YYYY' },
        { label: 'Designation End Date:', placeholder: 'MM/DD/YYYY' },
        { label: 'Salary:', placeholder: '50000' },
        { label: 'Salary Start Date:', placeholder: 'MM/DD/YYYY' },
        { label: 'Salary End Date:', placeholder: 'MM/DD/YYYY' },
        { label: 'Salary Comment:', placeholder: 'Type Here..' }
      ]
    }
  ];

  return (
    <Box sx={{ height: '100%', backgroundColor: 'white', padding: '20px' }}>
      <Box sx={{ backgroundColor: 'white', borderRadius: '10px', height: 70, mt: 0, padding: '10px' }}>
        <Box sx={{ display: 'inline-flex', mt: 1.3, p: 1.2, px: 2.5 }}>
          <ArrowBackIcon sx={{ fontSize: 23, mt: 0.5 }} />
          <Typography style={{ marginLeft: 4, fontFamily: 'Arial, sans-serif', fontSize: 21, marginTop: 3 }} variant='h5'>Back</Typography>
        </Box>
      </Box>
      <Typography sx={{ textAlign: 'center', background: 'yellowgreen', mt: 3, fontFamily: 'Arial, sans-serif', fontWeight: '100', borderRadius: '10px', padding: '10px' }} variant='h5'>Add New Employee</Typography>
      <Box sx={{ backgroundColor: 'white', mt: 1.5, p: 4, borderRadius: '10px' }}>
        <Grid container spacing={2}>
          {forms[currentSlide].fields.map((field, index) => (
            <Grid key={index} item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Typography variant='body1' sx={{ color: 'red', mr: 1 }}>*</Typography>
                <Typography variant='body1'>{field.label}</Typography>
                <input type='text' placeholder={field.placeholder} sx={{ ml: 2, width: 300, height: 35, borderRadius: '5px', border: '1px solid #ccc', p: 1 }} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button variant='contained' onClick={handlePrev} sx={{ mr: 2, backgroundColor: 'yellowgreen', color: 'white', borderRadius: '5px' }}>Previous</Button>
        <Button variant='contained' onClick={handleNext} sx={{ backgroundColor: 'yellowgreen', color: 'white', borderRadius: '5px' }}>Next</Button>
      </Box>
      <Dialog open={isSubmitOpen} onClose={handleCloseSubmit}>
        <DialogTitle>Submit Form</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Are you sure you want to submit the form?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSubmit} color="primary">Cancel</Button>
          <Button onClick={handleCloseSubmit} color="primary" variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default NewEmployee;
