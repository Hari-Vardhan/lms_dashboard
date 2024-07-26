import { Box, Button, Card, CardMedia,Grid,Typography } from '@mui/material'
import React from 'react'



function Feed() {
  return (

    
    <Box bgcolor="white" flex={13} padding={3}>
      <Typography variant='h5'>
      Recently Viewed Products
      </Typography>
      <Box sx={{paddingTop:4}}>
      <Card sx={{maxWidth:280}} >
        
        <CardMedia
        component={'img'}
        height='170'
        sx={{p:'2'}}
        image='#'
        />
        <CardMedia >
          <Typography padding={2} fontWeight={'bold'} fontSize={'0.9rem'} component={"h7"}>
              ReactJs
          </Typography>
          </CardMedia>
          
          <CardMedia>
          <Grid sx={{p:2}}>
          <Button variant='contained'  fullWidth color="primary" sx={{ borderRadius: 56}}>
            View Course
          </Button>
          </Grid>
        </CardMedia>
      </Card>
      </Box>
      <Box sx={{paddingTop:3}}>
      <Button variant='outlined' color="primary" sx={{ borderRadius: 56}}>
            View Course
      </Button>
      </Box>
    </Box>
  )
}

export default Feed
