import { Button, Container, Typography } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import React from 'react'
import Question from './Question'
const useStyles = makeStyles((theme)=>({
root:{
  padding:0,
  marginTop:'65px' ,
  height:'72px',
  width: '100%',
 
  // overflowX: 'hidden',
  backgroundColor:'#FFFFFF',
  borderTop:'2px solid lightgray',
  borderBottom:'2px solid lightgray ',
  display:'flex',
  justifyContent:'flex-end',
  
},
buttonContainer:{
  
  display: 'flex',
  justifyContent:'space-between',
  alignItems:'center',
  
},
cancelButton:{
  width: '48px',
  height: '48px',
  margin: '10px',
  color: '#FF5C00',
  borderColor: '#FF5C00',
  borderRadius:'8px',
  
},
saveButton:{
  height: '48px',
  width:'150px',
  color:'white',
  backgroundColor:'#FF5C00',
  marginRight: '24px',
  borderRadius:'8px'
},
formBox:{
  borderRadius:'10px 10px 0 0',
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly',
  height: '144px',
  width: '100%',
  backgroundColor:'#FFFFFF',
  marginTop:'20px'
 
},
formTitle:{
 marginLeft:'24px',
 marginRight:'24px'

},
textField:{
 width: '100%',
}

}))
const Save = () => {
  const classes = useStyles()
 return (
 <>
<Container className={classes.root} maxWidth='xl'>

     <Box className={classes.buttonContainer}>
      <Button variant='outlined' className={classes.cancelButton}>cancel</Button>
<Button variant='outlined' className={classes.saveButton}>Save</Button>
     </Box>
 
</Container>

<Container  maxWidth="xl">
  <Box  className={classes.formBox}>
<Box className={classes.formTitle} >
 <Typography >Questionaire details</Typography>
 </Box>
<Box className={classes.formTitle} >
 <TextField className={classes.textField} label="Name" variant="outlined" />
 </Box>

  </Box>
</Container>

<Question/>

</>
 )
}

export default Save
