import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MuiCard from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import { AuthContext } from '../../contexts/AuthContext';
import { Snackbar } from '@mui/material';



const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

export default function SignInCard() {
  const [usernameError, setusernameError] = React.useState(false);
  const [usernameErrorMessage, setusernameErrorMessage] = React.useState('');
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
  const [open, setOpen] = React.useState(false);

  //changed part by me
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [name, setName] = React.useState();

  const [error, setError] = React.useState();
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0);
  const [open2, setOpen2] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  let handleAuth = async () => {
    try {
      if (formState === 0) {
        let result = await handleLogin(username, password);
      }
      if (formState === 1) {
        let result = await handleRegister(name, username, password);
        console.log(result);
        setMessage(result);
        setOpen2(true);
        setError("");
        setFormState(0);
        setPassword("");
      }
    }
    catch (error) {
      let message = (error.response.data.message);
      setError(message);
    }
  }
  //------------------
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    if (usernameError || passwordError) {
      event.preventDefault();
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  const validateInputs = () => {
    const username = document.getElementById('username');
    const password = document.getElementById('password');

    let isValid = true;

    if (!username.value) {
      setusernameError(true);
      setusernameErrorMessage('Please enter a valid username address.');
      isValid = false;
    } else {
      setusernameError(false);
      setusernameErrorMessage('');
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Password must be at least 6 characters long.');
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage('');
    }

    return isValid;
  };




  return (
    <Card variant="outlined">
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <SitemarkIcon />
      </Box>
      <Typography
        component="h1"
        variant="h4"
        sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
      >
        {formState === 0 ? "Sign In" : "Sign Up"}
      </Typography>

      {/* changed part by me */}
      <div>
        <Button varient={formState === 0 ? 'contained' : 'outlined'} onClick={() => setFormState(0)}>
          Sign In
        </Button>
        <Button varient={formState === 1 ? 'contained' : 'outlined'} onClick={() => setFormState(1)}>
          Sign Up
        </Button>

      </div>
      {/* ------------------- */}

      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
      >
        {formState === 1 ?
          <FormControl>
            <FormLabel htmlFor="name">name</FormLabel>
            <TextField
              id="name"
              type="name"
              name="name"
            value={name}

              placeholder="name"
              autoComplete="name"
              autoFocus
              required
              fullWidth
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl> : <> </>
        }


        <FormControl>
          <FormLabel htmlFor="username">username</FormLabel>
          <TextField
            error={usernameError}
            helperText={usernameErrorMessage}
            id="username"
            type="username"
            name="username"
            value={username}
            placeholder="username"
            autoComplete="username"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={usernameError ? 'error' : 'primary'}
            onChange={(e) => setUsername(e.target.value)}

          />
        </FormControl>
        <FormControl>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <FormLabel htmlFor="password">Password</FormLabel>

          </Box>
          <TextField
            error={passwordError}
            helperText={passwordErrorMessage}
            name="password"
            value={password}
            placeholder="••••••"
            type="password"
            id="password"
            autoComplete="current-password"
            autoFocus
            required
            fullWidth
            variant="outlined"
            color={passwordError ? 'error' : 'primary'}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />

        <p style={{ color: "red" }}>{error}</p>

        <Button type="submit" fullWidth variant="contained" onClick={validateInputs} onClick={handleAuth}>
          {formState === 0 ? "Sign In" : "Sign Up"}
        </Button>
        {/* <Typography sx={{ textAlign: "center" }}>
          {formState === 0 ? (
            <>
              Don't have an account?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => setFormState(1)}
              >
                Register
              </Link>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <Link
                component="button"
                variant="body2"
                onClick={() => setFormState(0)}
              >
                Sign In
              </Link>
            </>
          )}
        </Typography> */}
      </Box>
      <Divider>or</Divider>
      {/* <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Google')}
          startIcon={<GoogleIcon />}
        >
          Sign in with Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert('Sign in with Facebook')}
          startIcon={<FacebookIcon />}
        >
          Sign in with Facebook
        </Button>
      </Box> */}

      <Snackbar open={open2} autoHideDuration={4000} message={message} onClose={() => setOpen2(false)} />
    </Card>
  );
}