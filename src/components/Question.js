import React from 'react'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Typography,Box, TextField } from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
 quesBox:{
 display:'flex',
  flexDirection:'column',
  justifyContent:'space-evenly',
  height: '421px',
  backgroundColor:'#FFFFFF' ,
  borderTop: '2px solid lightgray',

},
titleBox:{

  marginLeft:'24px',
 marginRight:'24px',

},
textField:{
 width: '100%',
},
descriptionBox:{
 display: 'flex',
 alignItems:'center'
},
CheckCircleIcon:{
 marginRight:'26px',
 color:' #00C62B'

},
deleteIcon:{
 marginLeft:'26px'
}



}))
const Question = () => {
 const classes = useStyles()
 return(
 <Container maxWidth="xl">
<Box className={classes.quesBox}>
 <Box className={classes.titleBox}>
  <Typography>Question 1</Typography>
 </Box>
 <Box className={classes.titleBox}>
  <TextField className={classes.textField}label="Name" variant="outlined"></TextField>
 </Box>

  <Box className={classes.titleBox}>
   <Box className={classes.descriptionBox}><CheckCircleIcon className={classes.CheckCircleIcon}/>
     <TextField className={classes.textField} label="Description"  helperText='SSSSS'  variant="outlined"></TextField>
     <DeleteOutlineIcon className={classes.deleteIcon}/>
   </Box>
   </Box>

     <Box className={classes.titleBox}>
   <Box className={classes.descriptionBox}>
    < RadioButtonUncheckedIcon className={classes.CheckCircleIcon} style={{color:'black'}}/>
     <TextField className={classes.textField} label="Description"  variant="outlined"></TextField>
     <DeleteOutlineIcon className={classes.deleteIcon}/>
   </Box>
   </Box>

 <Box className={classes.titleBox}>
  
 </Box>

</Box>

</Container>
)

}

export default Question
