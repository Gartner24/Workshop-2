import React from 'react'
import NavbarInferior from '../components/NavbarInferior'

import styled from 'styled-components'
import { Avatar, IconButton, Stack } from '@mui/material'
import CardPost from '../components/CardPost'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';


const Container = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
margin-top: 2rem;
margin-bottom: 1.5rem;
`

const Home = () => {
  return (
    <>
    <Container>
      <div>
        <span>LOGO</span>
        <span>Findy</span>
      </div>

      <div>
        <IconButton aria-label="favorite">
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton aria-label="chat">
          <ForumOutlinedIcon />
        </IconButton>
      </div>
    </Container>

    <div style={{display: 'flex', justifyContent:'center', marginBottom:'1.5rem'}}>
      <Stack direction="row" spacing={2}>

        <Stack direction="column" spacing={1}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <span>Travis</span>
      </Stack>

      <Stack direction="column" spacing={1}>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <span>Howard</span>
      </Stack>

      <Stack direction="column" spacing={1}>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <span>Camilo</span>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <span>Baker</span>
      </Stack>
      <Stack direction="column" spacing={1}>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <span>Cindy</span>
      </Stack>
    </Stack></div>

    <div>
      <CardPost/>
    </div>

      <NavbarInferior/>
    </>
  )
}

export default Home
