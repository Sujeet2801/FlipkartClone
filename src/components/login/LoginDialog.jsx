
import { useState, useContext } from 'react';

import {Box, Dialog, TextField, Typography, Button, styled} from '@mui/material';

import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    padding: 0;
    Padding-top: 0;
`
const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 78.6%;
    width: 28%;
    padding: 45px 35px;
     & > p, & > h5{
         color: #ffffff;
         font-weigt: 600;
     }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 2px 35px;
    flex:1 ;
    // overflow: auto;
    & > div, & > button, & > p{
         margin-top: 13px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB6418;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const accountIntialValues = {
    login:{
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your orders, wishlist and Recommendation'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you are new here",
        subHeading: "Sign up with your mobile number to get started"
    }
}

const signupIntianValue = {
    firstname: '',
    lastname: '',
    username:'',
    email: '',
    password: '',
    phone: ''
}

const loginIntialValues = {
    username: '',
    password: ''
}

const LoginDialog = ({open, setopen}) => 
{

    const[account, toggleAccount] = useState(accountIntialValues.login);
    const[signup, setSignup] = useState(signupIntianValue);
    const[login, setLogin] = useState(loginIntialValues);
    const[error, setError] = useState(false);

    const {setAccount} = useContext(DataContext);

    const handleClose = () => {
        setopen(false);
        toggleAccount(accountIntialValues.login);
        setError(false);
    }
    const toggleSignup = () => {
        toggleAccount(accountIntialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({...signup, [e.target.name]: e.target.value});
        
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }

    const loginUser = async() => {
         let response = await authenticateLogin(login);
         console.log(response);
         if(response.status === 200){
             handleClose();
             setAccount(response.data.data.firstname);
         } else{
             setError(true);
         }
     }

    // return (
    //     <Dialog open={open} onClose={handleClose} PaperProps={{ sx: {maxWidth: 'unset'}}}>
    //         <Component>
    //             <Box style={{display: 'flex', height: '100%'}}>
    //                 <Image>
    //                     <Typography variant="h5">{account.heading}</Typography>
    //                     <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
    //                 </Image>
    //                 {
    //                     account.view === 'login' ?
    //                     <Wrapper>
    //                         <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label="Username"/>
    //                         { error && <Error>Please enter valid username or password</Error>}
                            
    //                         <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Enter Password"/>
    //                         <Text>By contuning, you agree to flipkart terms and services </Text>
    //                         <LoginButton onClick={() => loginUser()}>Login</LoginButton>
    //                         <Typography style={{textAlign: 'center'}}>OR</Typography>
    //                         <RequestOTP>Request OTP</RequestOTP>
    //                         <CreateAccount onClick={() => toggleSignup()}>New to lipkart? Create an account</CreateAccount>
    //                     </Wrapper>
    //                 :
    //                     <Wrapper> 
    //                     <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname'label="Enter Firstname"/>
    //                     <TextField variant='standard' onChange={(e) => onInputChange(e)}name='lastname' label="Enter Lastname"/>
    //                     <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username'label="Enter Username"/>
    //                     <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email'label="Enter Email"/>
    //                     <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password'label="Enter Password"/>
    //                     <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone'label="Enter Phone"/>
    //                     <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
    //                     </Wrapper>
    //                 }
    //             </Box>    
    //         </Component>
    //     </Dialog>
    // )



    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
            <Component>
                <Box style= {{display: 'flex', height: '100%'}}> 
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name = 'username' label="Username"/>
                            
                            { error && <Error>Please enter valid username or password</Error>}
                            
                            <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Password"/>
                            <Text>By continuing, you agree to Flipkart's Terms of use and Privacy Policy</Text>
                            <LoginButton onClick={() => loginUser()}>Login</LoginButton>
                            <Typography style={{textAlign: 'center'}}>OR</Typography>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                        </Wrapper>
                    :
                        <Wrapper> 
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='firstname'label="Enter Firstname"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)}name='lastname' label="Enter Lastname"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='username'label="Enter Username"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='email'label="Enter Email"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='password'label="Enter Password"/>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name='phone'label="Enter Phone"/>
                            <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )



}

export default LoginDialog;