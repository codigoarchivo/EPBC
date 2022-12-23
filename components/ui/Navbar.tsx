import { useContext, useState } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import AppBar from '@mui/material/AppBar';
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
    const { push } = useRouter();
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

    const dataCategory = [
        {
            name: 'moda',
            type: 'gender',
            serch: ['men', 'women', 'kid'],
        }
    ]

    return (
        <AppBar
            style={{ borderRadius: 0 }}
            className={`box-shadow bg--${theme.palette.mode}`}
        >
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
                            <Badge badgeContent={
                                numberOfItems > 9
                                    ? '+9'
                                    : numberOfItems
                            } color={'secondary'}>
                                <ShoppingCartOutlined />
                            </Badge>
                        </IconButton>
                    </Box>
                </NextLink>
                <div className={'icon-Badge'}>
                    <BadgeStyled
                        onClick={toggleSideMenu}
                        overlap="circular"
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right'
                        }}
                        variant="dot"
                    >
                        <Avatar alt="Remy Sharp" src="https://bit.ly/dan-abramov" />
                    </BadgeStyled>
                </div>
            </Toolbar>
            <nav>
                {
                    dataCategory.map((data) => (
                        <ul className="dropdown">
                            <button className={`dropbtn text-${theme.palette.mode}`}>{data.name}</button>
                            <li className={`dropdown-content box-shadow  bg--${theme.palette.mode}`}>
                                {data.serch.map((serch) => (
                                    <NextLink
                                        href={{
                                            pathname: '/category/[section]/[...slug]',
                                            query: {
                                                section: data.name,
                                                slug: [serch, data.type]
                                            }
                                        }}
                                        className={`text-${theme.palette.mode} ultimo`}
                                        passHref>
                                        <span className={`span-${theme.palette.mode}`}>
                                            {serch}
                                        </span>
                                    </NextLink>
                                ))}
                            </li>
                        </ul>

                    ))
                }
            </nav>
        </AppBar >
    )
};