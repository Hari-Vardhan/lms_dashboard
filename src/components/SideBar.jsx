
import { AccountCircle, CalendarMonth, Explore, Group, Home, Inbox, LibraryBooks } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function SideBar() {
  return (
    <Box flex={1} p={1} sx={{display:{xs:"none",sm:"block"}}}>
      <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#home'>
              <ListItemIcon>
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Courses'>
              <ListItemIcon>
                <LibraryBooks/>
              </ListItemIcon>
              <ListItemText primary="Courses" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Calender'>
              <ListItemIcon>
                <CalendarMonth/>
              </ListItemIcon>
              <ListItemText primary="Calender" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Explore'>
              <ListItemIcon>
                <Explore/>
              </ListItemIcon>
              <ListItemText primary="Explore"/>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#Community'>
              <ListItemIcon>
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Community" />
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href='#profile'>
              <ListItemIcon>
                <AccountCircle/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
  )
}

export default SideBar
