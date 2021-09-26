import { Avatar, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { LockOutlined} from '@mui/icons-material';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
const baseApi=process.env.REACT_APP_BASE_API;
const Login = () => {
    const {values,errors,handleChange,handleBlur,touched,handleSubmit} = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema:Yup.object({
            email:Yup.string().email("Must be an valid Email").required("Email is required"),
            password:Yup.string().required("password is required")
        }),
        onSubmit: values => {
            console.log('submit')
            login(values)
        },
      });
      const login=(data:any)=>{
          axios.post(`${baseApi}/user/local/signIn`,{
              email:data.email,
             password:data.password
          }).then(res=>{
              console.log(res)
          }).catch(err=>{
              console.log(err)
          })
      }
    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://www.reflektive.com/wp-content/uploads/2020/03/HR-inspiring-quotes-1536x1024.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: (t) =>
                    t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
             <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                    my: 8,
                    mx: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Sign in
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                        autoFocus
                        error={touched.email&&errors.email?true:false}
                    />
                    {/* <ErrorMessage name="email">{msg => <div>{msg}</div>}</ErrorMessage> */}

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password&&errors.password?true:false}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/* {touched.password&&errors.password&&<ErrorMessage name="password">{msg => <div>{msg}</div>}</ErrorMessage>} */}

                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login
