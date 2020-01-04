import React from 'react';
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { setRegister } from '../../_actions/user'

import { Button, Dialog, IconButton, Typography, TextField, FormControl, InputLabel, Input, InputAdornment } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function Register(props) {
  const { register, handleSubmit, watch, errors } = useForm()

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const onRegister = values => {
    // console.log(values)
    props.setRegister(values)
  }

  return (
    <div>
      
      <Button variant="outlined" color="inherit" style={{ textTransform: 'none' }} onClick={handleClickOpen}>
        <i class="fas fa-user-plus" style={{ fontSize: 18, marginRight: 8 }}></i> Register
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <div style={{ backgroundColor: '#f5e0df' }}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose} style={{ textAlign: 'center' }}>
            Join Dumb-Tick.
          </DialogTitle>
            <form onClick={handleSubmit(onRegister)}>
              <DialogContent style={{ display: 'flex', flexDirection: 'column', width: 500 }}>
                <TextField id="standard-basic" label="Name" name='name' inputRef={register}/>
                <TextField id="standard-basic" label="Email" name='email' inputRef={register}/>
                <TextField id="standard-basic" label="Username" name='username' inputRef={register}/>
                <FormControl> 
                  <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                  <Input
                    name='password' inputRef={register}
                    id="standard-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </DialogContent>
              <DialogActions style={{ display: 'flex', justifyContent: 'center' }}>
                <Button autoFocus onClick={handleClose} type='submit' style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', textTransform: 'none', width: 100 }}>
                  Register
                </Button>
              </DialogActions>
            </form>
        </div>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setRegister: data => {
      dispatch(setRegister(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)