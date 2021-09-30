import * as yup from 'yup'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TextField from '@mui/material/TextField'
import {useState, forwardRef} from 'react'

import DialogComponent from '../DialogComponent'

let UsernameSchema = yup.object().shape({
  username: yup.string().required('kindly enter your username').min(3, ' username must be minimum of 3 characters').max(6, ' username must be maximum of 6 characters'),
  
});


const AlertBox = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const GameOverDialog = ({
  open,
  close,
  score,
  handleTryAgain
},) => {
  const [username, setUsername] = useState('')
  const [alert, setAlert] = useState({
    openAlert: false,
    severity: String,
    alertMessage: String
  })
 

  const {openAlert, severity, alertMessage} = alert


  const onChange = e => {
    setUsername(e.target.value)
  }

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert({ openAlert:false});
  };

  const onSubmit = async(e) => {
    e.preventDefault();
   
 try {

  await  UsernameSchema.validate({ username })

  let dataToSend = {
      username: username,
      highestScore: score
    }

     
  const res = await axios.post('http://localhost:8000/api/leaderboard', dataToSend)

 setAlert({openAlert: true, severity:'success', alertMessage: res.data})
   
 } catch (err) {
  setAlert({openAlert: true, severity:'error', alertMessage: err?.errors})
   if(err.response?.status === 400){
     setAlert({openAlert:true, severity:'error', alertMessage:err.response.data.errors[0].msg})
   }
 
 
 }

 


 
  
  // console.log(validateTextfield.err.validationError)
  // .catch(function (err) {
  //    return setError(err.errors)
  //   });.catch(function (err) {
  //    return setError(err.errors)
  //   });
   
    // let dataToSend = {
    //   username,
    //   highestScore: score
    // }

    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // };

    // axios.post('http://localhost:8000/api/leaderboard', dataToSend, config)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log('this is error',error);
    // });

   
  }



  return (
    <>
    <DialogComponent
      title='Game Over'
      open={open}
      content={`Your score is ${score}`}
      actionButtons={
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <form onSubmit={(e) => onSubmit(e)}>
            <Box>
              <TextField
                sx={{
                  '& .MuiOutlinedInput-input': {
                    background: 'white'
                  }
                }}
                type='text'
                id='username'
                placeholder='your username'
                value={username}
                onChange={onChange}
              />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <Box sx={{ paddingTop: '20px' }}>
                <Button
                  variant='contained'
                  onClick={handleTryAgain}
                  sx={{
                    backgroundColor: 'buttonDanger.main',
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'buttonDanger.main'
                    }
                  }}
                >
                  Play Again
                </Button>
              </Box>
              <Box sx={{ paddingTop: '20px' }}>
                <Button
                type='submit'
                  variant='contained'
                  sx={{
                    backgroundColor: 'buttonSuccess.main',
                    '&:hover': {
                      backgroundColor: 'buttonSuccess.main'
                    }
                  }}
                >
                  Save
                </Button>
              </Box>
            </Box>
            </form>
          </Box>
        </>
      }
    />
    <Box>
      <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose} >
         <AlertBox onClose={handleAlertClose} severity={severity} sx={{ width: '100%' }}>
         {alertMessage}
        </AlertBox>
      </Snackbar>   
        </Box>
    </>
  )
}

export default GameOverDialog