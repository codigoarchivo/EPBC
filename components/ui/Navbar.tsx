import { useContext, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import ClearOutlined from '@mui/icons-material/ClearOutlined';
import { Avatar, Input, useTheme } from '@mui/material';
import { CartContext, UiContext } from '../../context';
import { StyledBadge } from '../../utils/styled';

export const Navbar = () => {
    const { asPath, push } = useRouter();
    const { toggleSideMenu } = useContext(UiContext);
    const { numberOfItems } = useContext(CartContext);
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);
    
    const BadgeStyled = StyledBadge('#44b700', '#44b700');
    
    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;

        push(`/search/${searchTerm}`);
    }

    return (
        <AppBar className={`box-shadow bg--${theme.palette.mode}`}>
            <Toolbar>

                <div className="logo">
                    <NextLink href={'/'} passHref>
                        <Image
                            src={`/img/${theme.palette.mode}.png`}
                            width={200}
                            height={35}
                            alt={'Not foto'}
                        />
                    </NextLink>
                </div>


                <Box flex={1} />

                <Box className='fadeIn' sx={{ display: isSearchVisible ? 'none' : { xs: 'none', sm: 'flex' } }}>
                    <NextLink href={'/category/men'} passHref>
                        <Box>
                            <Button color={asPath === '/category/men' ? 'primary' : 'info'}>Hombre</Button>
                        </Box>
                    </NextLink>
                    <NextLink href={'/category/women'} passHref>
                        <Box>
                            <Button color={asPath === '/category/women' ? 'primary' : 'info'}>Mujeres</Button>
                        </Box>
                    </NextLink>
                    <NextLink href={'/category/kid'} passHref>
                        <Box>
                            <Button color={asPath === '/category/kid' ? 'primary' : 'info'}>Niños</Button>
                        </Box>
                    </NextLink>
                </Box>

                <Box flex={1} />

                {/* Pantallas pequeñas */}
                {
                    isSearchVisible
                        ? <Input
                            sx={{ display: { xs: 'none', sm: 'flex' } }}
                            className='fadeIn'
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : ''}
                            type='text'
                            placeholder="Buscar..."
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setIsSearchVisible(false)}
                                    >
                                        <ClearOutlined />
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        : (
                            <IconButton
                                sx={{ display: { xs: 'none', sm: 'flex' } }}
                                className='fadeIn'
                                onClick={() => setIsSearchVisible(true)}
                            >
                                <SearchOutlinedIcon />
                            </IconButton>
                        )
                }
                <IconButton
                    sx={{ display: { xs: 'flex', sm: 'none' } }}
                    onClick={toggleSideMenu}
                >
                    <SearchOutlinedIcon />
                </IconButton>
                <NextLink href={'/cart'} passHref>
                    <Box>
                        <IconButton>
                            <Badge badgeContent={numberOfItems > 9 ? '+9' : numberOfItems} color={'secondary'}>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Box>
                </NextLink>
                <div className={'icon-Badge'}>
                    <BadgeStyled
                        onClick={toggleSideMenu}
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Remy Sharp" src="https://bit.ly/dan-abramov" />
                    </BadgeStyled>
                </div>
            </Toolbar>
        </AppBar >
    )
};