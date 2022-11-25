import { useState } from "react";
import { useRouter } from "next/router";
import { IconButton, Input, InputAdornment } from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearOutlined from "@mui/icons-material/ClearOutlined";

export const SerchNabvar = () => {
    const { push } = useRouter();
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const onSearchTerm = () => {
        if (searchTerm.trim().length === 0) return;

        push(`/search/${searchTerm}`);
    }
    return (
        <>
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
        </>
    )
}
