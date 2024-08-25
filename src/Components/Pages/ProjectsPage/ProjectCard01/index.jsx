import { alpha, Box, Button, Chip, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { FaReact } from 'react-icons/fa6'
// import { motion } from 'framer-motion';
import { GoDotFill } from 'react-icons/go'
import CardSwiper from './CardSwiper';

const ProjectCard01 = () => {

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          width: '350px',
          p: 2,
          borderRadius: 3,
          backgroundColor: (theme) => alpha(theme.palette.mypresetcolor.foregroundColor, 0.5),
          // boxShadow: '1px 1px 5px rgba(0,0,0,0.3)',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(5px)'
        }}
      >
        <Box sx={{
          height: 100,
          width: 100,
          backgroundColor: 'mypresetcolor.highlightColor',
          borderRadius: '50%',
          position: 'absolute',
          left: -15,
          top: -15,
          zIndex: -1,
          filter: 'blur(50px)'
        }} />

        {
          true ? (<CardSwiper />) : (
            <Paper sx={{
              height: 150,
              boxShadow: 'none',
              color: 'gray',
              fontWeight: 'bold',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }} >
              <Typography variant='h4'>Image</Typography>
            </Paper>
          )
        }
        <Box mt={1}>
          <Typography variant='h5' fontWeight={'bold'}>Project Title</Typography>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography component={'p'} variant='caption' fontWeight={'bold'} color={'gray'}>3 year ago</Typography>
            <Stack direction={'row'} gap={0.5} alignItems={'center'}>
              <GoDotFill color='lightgreen' />
              <Typography variant='caption' color={'gray'}>Completed</Typography>
            </Stack>
          </Stack>
          <Typography variant='caption' fontWeight={'bold'} color={'gray'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sequi fugiat, provident voluptates ipsa excepturi sit id molestias dolorem eaque modi a quae in neque cum quaerat dicta placeat aliquid.
          </Typography>

          <Stack direction={'row'} alignItems={'center'} flexWrap={'wrap'} gap={1} mt={1}>
            <Typography variant='body2' fontWeight={'bold'}>Tech : </Typography>
            <Chip
              size='small'
              label='React'
              icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
            <Chip
              size='small'
              label='React'
              icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
            <Chip
              size='small'
              label='Nodejs'
              icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
            <Chip
              size='small'
              label='Material UI'
              icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
            <Chip
              size='small'
              label='3+ More'
              // icon={<FaReact size={15} />}
              sx={{
                fontSize: '0.65rem'
              }}

            />
          </Stack>

          <Stack
            direction={'row'}
            alignItems={'center'}
            justifyContent={'space-between'}
            mt={1}
            sx={{
              '& button': {
                fontSize: '0.65rem',
                fontWeight: 'bold',
                borderRadius: 5,
                letterSpacing: 1.5,
                textTransform: 'none'
              }
            }}
          >
            <Stack direction={'row'} alignItems={'center'} gap={1}>
              <Button className='live-btn' variant='contained'>Live</Button>
              <Button className='github-btn' variant='outlined'>GitHUB</Button>
            </Stack>
            <Button sx={{ overflow: 'hidden' }}>
              Details
            </Button>
          </Stack>
        </Box>
      </Paper>
      {/* <br />
      <Paper 
        elevation={3}
        sx={{
          width: '350px',
          p: 2,
          borderRadius: 3,
          backgroundColor: (theme) => alpha(theme.palette.mypresetcolor.foregroundColor, 0.5),
        }}
      >
        <Typography variant='h5' fontWeight={'bold'}>Project Title</Typography>
      </Paper> */}
    </>
  )
}

export default ProjectCard01