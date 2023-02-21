import { useState, useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image"
import Link from "next/link";
import {
    Avatar,
    Badge,
    useTheme,
    Input,
    InputAdornment,
    Button,
    IconButton
} from "@mui/material";
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearOutlined from "@mui/icons-material/ClearOutlined";
import { ShoppingCartOutlined } from "@mui/icons-material";
import DehazeIcon from '@mui/icons-material/Dehaze';
import { StyledBadge } from "../../utils/styled";
import { CartContext, UiContext } from "../../context";

export const BaseNavbar = () => {
    const { toggleSideMenu } = useContext(UiContext);
    const { numberOfItems } = useContext(CartContext);
    const { push } = useRouter();
    const theme = useTheme();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);


    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;

        push(`/search/${searchTerm}`);
    }

    const BadgeStyled = StyledBadge('#44b700', '#44b700');
    

    return (
        <>
            <header className={`header box-shadow bg--${theme.palette.mode}`}>

                <div className="logo">
                    <Link href={'/store'} passHref>
                        <Image
                            src={`/img/${theme.palette.mode}.png`}
                            width={100}
                            height={100}
                            alt={'Not foto'}
                        />
                    </Link>
                    <Button size="small" onClick={() => push('/store')} sx={{ marginLeft: '15px' }} variant="contained" color="secondary">Category</Button>
                </div>

                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                    <IconButton component={'div'}>
                        <DehazeIcon />
                    </IconButton>
                </label>
                <ul className="menu fadeIn">
                    <li>
                        <>
                            {/* Pantallas pequeñas */}
                            {
                                isSearchVisible
                                    ? <Input
                                        sx={{ display: { xs: 'none', sm: 'flex' } }}
                                        className='fadeIn in-con'
                                        autoFocus
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' ? onSearchTerm() : ''}
                                        type='text'
                                        placeholder="Buscar..."
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <div
                                                    className='fadeIn'
                                                    onClick={() => setIsSearchVisible(false)}
                                                    style={{ cursor: 'pointer' }}
                                                >

                                                    <ClearOutlined />
                                                </div>
                                            </InputAdornment>
                                        }
                                    />
                                    : (
                                        <IconButton component={'div'}
                                            className='fadeIn in-con'
                                            onClick={() => setIsSearchVisible(true)}
                                            style={{ cursor: 'pointer' }}
                                        >

                                            <SearchOutlinedIcon />
                                        </IconButton>

                                    )
                            }
                        </>
                    </li>
                    <li>
                        <Link href={'/cart'} passHref>
                            <IconButton component={'div'}>
                                <Badge badgeContent={numberOfItems > 9 ? '+9' : numberOfItems} color={'secondary'}>
                                    <ShoppingCartOutlined />
                                </Badge>
                            </IconButton>
                        </Link>
                    </li>
                    <li>
                        <Link href={'/auth'} passHref>
                            <IconButton component={'div'}>
                                <VpnKeyIcon />
                            </IconButton>
                        </Link>
                    </li>
                    <li>
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
                    </li>
                </ul>
            </header>
        </>

    )
}
