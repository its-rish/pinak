import { primaryColors } from '@/themes/palette'
import styled from '@emotion/styled'
import {  Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'



const LoginWrapper=styled(Box)`
    padding: 20px 10px;
    .signinWrappertext{
        h1{
            color: ${primaryColors.primaryGray};
            font-size: 40px;
        }
    }
     
`

function login() {
  return (
    <LoginWrapper>
        <Box className="signinWrappertext">
            <Typography variant='h1'>SignIn</Typography>
        </Box>

    </LoginWrapper>
  )
}

export default login