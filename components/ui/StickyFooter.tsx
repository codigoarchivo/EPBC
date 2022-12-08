import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { facebook, instagram, twiter } from '../../utils';

export const StickyFooter = () => {
    const Facebook = (props: SvgIconProps) => (
        <SvgIcon style={{ color: 'currentcolor' }} {...props}>
            {facebook}
        </SvgIcon>
    );

    const Instagram = (props: SvgIconProps) => (
        <SvgIcon style={{ color: 'currentcolor' }} {...props}>
            {instagram}
        </SvgIcon>
    );

    const Twiter = (props: SvgIconProps) => (
        <SvgIcon style={{ color: 'currentcolor' }} {...props}>
            {twiter}
        </SvgIcon>
    );

    return (
        <Container component={'footer'} maxWidth='xl'>
            <Stack
                spacing={0}
                py={3}
                className='box-shadow'
                bgcolor={'primary.main'}
                textAlign={'center'}
            >
                <Typography variant='body1'>
                    Location New Jersey, USA. Tel +1 9085316962
                </Typography>

                <Stack flexDirection={'row'} justifyContent={'center'}>
                    <a href='https://www.facebook.com/edgar.marcanosantodomingo' target={'_blank'}>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                    </a>
                    <a href='https://www.instagram.com/p/CYcsvrVgEC5/?utm_medium=share_sheet' target={'_blank'}>
                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </a>
                    <a href='https://twitter.com/edgarspendulum?t=PmWj-xl1JJ407GU2Lk8wDg&s=09' target={'_blank'}>
                        <IconButton>
                            <Twiter />
                        </IconButton>
                    </a>
                </Stack>


                <Typography variant='body2' color='text.secondary'>
                    {'Copyright © '}
                    <Link color='inherit' href='https://mui.com/'>
                        Brandchakras
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Stack>
            <Stack py={2} alignItems={'center'} flexDirection={'row'} spacing={0}>
                <GTranslateIcon
                    sx={{
                        width: 20,
                        height: 20,
                        marginLeft: 2,
                    }}
                />
                <IconButton
                    size='small'
                    sx={{ marginLeft: 2, fontSize: 16 }}
                >
                    en
                </IconButton>
                <IconButton
                    size='small'
                    sx={{ marginLeft: 1, fontSize: 16 }}
                >
                    es
                </IconButton>

            </Stack>
        </Container>
    );
};
