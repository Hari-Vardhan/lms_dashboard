import { MenuBook, Mail, Notifications } from '@mui/icons-material'
import { AppBar,Avatar,Badge,Box,InputBase,MenuItem,styled, Toolbar, Typography } from '@mui/material'
import Menu from '@mui/material/Menu';
import React, { useState } from 'react'

const StyledToolbar=styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between",
})

const Sidebutton= styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
}))

const Search= styled("div")(({theme})=>({
    backgroundColor:"white",
    padding:"0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"30%"
}))
const Icons= styled(Box)(({theme})=>({
display:"none",
alignItems:'center',
gap:"20px",
[theme.breakpoints.up("sm")]:{
    display:"flex"
}
}))

const Userbox= styled(Box)(({theme})=>({
    display:"flex",
    alignItems:'center',
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
    }))

function Navbar() {
    const [open,setOpen]=useState(false)
  return (
    <AppBar position='sticky'>
        <StyledToolbar>
            <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>
                Dashboard
            </Typography>
            <MenuBook sx={{display:{xs:"block", sm:"none"}}}/>
            <Search>
                <InputBase placeholder='Search'/>
            </Search>
            <Icons>
                <Badge badgeContent={2} color='error'padding={2}>
                    <Mail/>
                </Badge>
                <Badge badgeContent={1} color='error'padding={2}>
                    <Notifications/>
                </Badge>
               <Avatar sx={{width:30,height:30}} 
               
               onClick={e=>setOpen(true)}
                />
            </Icons>
            <Userbox onClick={e=>setOpen(true)}>
                <Avatar sx={{width:30,height:30}} src=""/>
                <Typography variant='span'>User</Typography>

            </Userbox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
)
}

export default Navbar