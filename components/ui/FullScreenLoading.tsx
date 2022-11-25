import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { FC } from 'react';

interface Props {
    height?: string
}

export const FullScreenLoading: FC<Props> = ({ height = 'calc(100vh - 200px)' }) => {
    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            height={height}
        >
            <CircularProgress color='primary' thickness={2} />
        </Box>
    )
}
