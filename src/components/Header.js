import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import { Toolbar, Typography } from '@material-ui/core'
import Save from './Save'





const useStyles = makeStyles((theme)=>({
 root:{
padding:0,
backgroundColor:'#FFFFFF',
height:'64px',
width: '100%',
display: 'flex',
position: 'fixed',
top:'0',
zIndex:100
 },

title:{
 display: 'flex',
alignItems: 'center',
marginLeft:'24px' ,


},
text:{
 alignItems:'center'
}
}))
const Header = () => {
 const classes = useStyles()
 return (
  <>
  <Container  className={classes.root} maxWidth="xl">
<Box className={classes.title}><Typography className={classes.text} >🦊 Foxbith Questionnaire</Typography></Box>
</Container>
<Save/>
</>


 )
}

export default Header
