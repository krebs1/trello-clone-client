'use client'
import React from 'react'
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Skeleton,
  Toolbar,
  Tooltip,
  Typography
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import {useSession, signOut} from 'next-auth/react'
import NextLink from "next/link";
import {useRouter} from "next/navigation";

const Header = () => {
  const router = useRouter();

  const {update, data, status} = useSession()

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar position='relative'>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography
            variant='h6'
            noWrap
            component={NextLink}
            href='/'
            sx={{
              mr: 2,
              display: {xs: 'none', md: 'flex'},
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>

          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon/>
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left'
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'}
              }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign='center'
                              component={NextLink}
                              href='/boards'
                              sx={{
                                color: 'inherit',
                                textDecoration: 'none'
                              }}
                  >
                    Доски
                  </Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant='h5'
            noWrap
            component='a'
            href='#app-bar-with-responsive-menu-2'
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            LOGO
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            <Typography textAlign='center'
                        component={NextLink}
                        href='/boards'
                        sx={{
                          my: 2,
                          display: 'block',
                          color: 'inherit',
                          textDecoration: 'none'
                        }}
            >
              Доски
            </Typography>
          </Box>

          <Box sx={{flexGrow: 0}}>
            {status === 'loading' && (
              <Box>
                <Skeleton variant='circular' width={40} height={40}/>
              </Box>
            )}
            {status === 'authenticated' && (
              <Box>
                <Tooltip title='Профиль'>
                  <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                    <Avatar
                      alt={data?.user?.name ?? undefined}
                      src={data?.user?.image ?? undefined}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{mt: '45px'}}
                  id='menu-appbar'
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu()
                    }}
                  >
                    <Typography textAlign='center'>Профиль</Typography>
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu()
                      signOut({callbackUrl: '/'})
                    }}
                  >
                    <Typography textAlign='center'>Выйти</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
            {status === 'unauthenticated' && (
              <Box>
                <Typography textAlign='center'
                            component={NextLink}
                            href='/login'
                            sx={{
                              mr: '20px',
                              color: 'inherit',
                              textDecoration: 'none',
                              '&:hover': {
                                textDecoration: 'underline'
                              }
                            }}
                >
                  Войти2
                </Typography>
                <Link component={NextLink} className='tw-mr-5' href='/login' underline='hover' color='inherit'>
                  Войти
                </Link>
                <Link component={NextLink}  href='/signup' underline='hover' color='inherit'>
                  Зарегистрироваться
                </Link>
              </Box>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
