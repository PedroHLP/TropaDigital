import React from 'react';
import '../styles/login.css';
import Logo from '../img/logo.png';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Height, MicNone } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Laptop from '../img/laptop.png';
import {Link} from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      
    },
    buttonAcessar:{
        backgroundColor: '#2EAFB2',
        marginLeft: '4ch',
        color: '#FFF',
        textDecoration: 'none',
    },
    margin: {
      margin: theme.spacing(1),
      
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
      
    },
    textField: {
      width: '40ch',
      marginLeft: '4ch',
    },
    
    
  }));

const Login = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
  
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
   
    return(
      <div className="orange-background">

        
        <div className="container">
           
            <div id="box-login">
                <div id="logo">
                    <img id="logo-fit-login" src={Logo}></img>
                </div>
                <div id="text-fit">
                Bem Vindo Ao <span id="text-fit-painel">Painel</span>
                </div>
                <div>
                        <TextField 
                    
                    label="Digite seu e-mail"
                    id="outlined-margin-normal"
                    className={classes.textField}

                    variant="outlined"
                    />
                </div>
                <div>
                <FormControl className={clsx(classes.margin, classes.textField, )} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Digite sua senha</InputLabel>
            <OutlinedInput 
            id="outlined-adornment-password"
            label="Digite sua senha"
            
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
                </div>
              <Link className="underline-button" to='/Painel'><Button className={classes.buttonAcessar} variant="contained">
                    Acessar
                </Button>
              </Link>
                
            </div>
            <div id="box-laptop">
            <img id="laptop-fit" src={Laptop}>
                </img>
            
            </div>
            
            
            
        </div>
        </div>
    )
}
export default Login;
    
