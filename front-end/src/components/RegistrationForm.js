import axios from 'axios';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

function CustomizedDialogs({open, setOpen}) {
  const handleClose = () => {
    window.location.href = '/'
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Success!
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            You have successfully registered!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Got it!
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}



const RegistrationForm = () => {
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        cpassword: '',
    })
    const [errors, setErrors] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if(values.password !== values.cpassword) {setErrors([{field: 'Confirm Passowrd', message: 'Password must match Confirm Password'}])
            return;
        }
        axios.post('http://localhost:5000/customers/register', values).then((res)=>{
            setOpen(true)
        }).catch(err=>{
            setErrors(err.response.data.data);
        })
    }
    const handleChange = (e)=>{
        const {name, value} = e.target
        setValues(v => {
            let obj = {...v};
            obj[name] = value;
            return obj;
        })
    }

  return (
    <section id="register-section">

    <div className= "container">
        
        <h1>Register</h1>
        {errors.length ? <ul style={{color:'red'}}>
            {errors.map(v=><li>{v.field} - {v.message}</li>)}
        </ul> : ""}
        <form action="" onSubmit={handleSubmit}>

            <div className="form-control">
                <label htmlFor="firstName">First Name</label>
                <input name='firstName' onChange={handleChange} value={values.firstName} type="text" id="firstName" />
            </div>

            <div className="form-control">
                <label htmlFor="lastName">Last Name</label>
                <input name='lastName' onChange={handleChange} value={values.lastName} type="text" id="lastName" />
            </div>

            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="text"  onChange={handleChange} value={values.email} id="email" name='email' />
            </div>


            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="text" type="password" onChange={handleChange} value={values.password} id="password" name='password' />
            </div>

            <div className="form-control">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="text" type="password" onChange={handleChange} value={values.cpassword} id="password" name='cpassword' />
            </div>


            <div className="form-control">
                <button className="btn" type="submit">Create Account</button>
            </div>

        </form>
        <CustomizedDialogs open={open} setOpen={setOpen} />
    </div>

</section>


  )
}

export default RegistrationForm