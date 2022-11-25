import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';



export const StickyFooter = () => {
    return (

        <Box
            component="footer"
        >

            <Container maxWidth="sm">
                <Typography variant="body1">
                    My sticky footer can be found here.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {'Copyright © '}
                    <Link color="inherit" href="https://mui.com/">
                        Your Website
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Container>
        </Box>
    );
}

