//This component is only for learn MaterialUI 

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';


const MaterialUI = () => {
  return (
    <>
    MaterialUI
    <div>
        <Button variant="contained" color="success" size='large' endIcon={<SendIcon />}>
        Send
      </Button>

      <div className='m-4'>
          <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
      </div>
      </div>
      </>
  )
}

export default MaterialUI