import { GetServerSideProps } from 'next';

import { useState, useContext } from 'react';

import { useRouter } from 'next/router';

import NextLink from 'next/link';

import { getSession, signIn } from 'next-auth/react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';

import Button from '@mui/material/Button';

import Chip from '@mui/material/Chip';

import ErrorOutline from '@mui/icons-material/ErrorOutline';

import { useForm } from 'react-hook-form';

import { AuthContext } from '../../context';

import { AuthLayout } from '../../components/layouts';

import { validations } from '../../utils';


import { epbcApi } from '../../api';

type FormData = {
    name: string,
    email: string,
    password: string,
};

const RegisterPage = () => {

    const [showError, setShowError] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const { replace, query } = useRouter();

    const { registerUser } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();


    const onRegisterForm = async ({ name, email, password }: FormData) => {
        setShowError(false);
        const { hasError, message } = await registerUser(name, email, password);

        if (hasError) {
            setShowError(true);
            setErrorMessage(message!);
            setTimeout(() => { setShowError(false) }, 3000);
            return;
        };

        await signIn('credentials', { email, password });

        // const destination = query.p?.toString() || '/';
        // replace(destination);
    };

    return (
        <AuthLayout title={'Ingresar'}>
            <form onSubmit={handleSubmit(onRegisterForm)} noValidate>
                <Box sx={{ width: 350, padding: '10px 20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h1' component='h1'>Crear cuenta</Typography>


                            <Chip
                                label='No reconocemos ese usuario / contraseña'
                                color='error'
                                icon={<ErrorOutline />}
                                className='fadeIn'
                                sx={{ display: showError ? 'flex' : 'none' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type='text'
                                label="Nombre completo"
                                variant="filled"
                                fullWidth
                                {...register('name', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 2, message: 'Minimo 2 caracteres' }
                                })}
                                error={!!errors.name}
                                helperText={errors.name?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                type="email"
                                label="Correo"
                                variant="filled"
                                fullWidth
                                {...register('email', {
                                    required: 'Este campo es requerido',
                                    validate: validations.isEmail,
                                })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Contraseña"
                                type='password'
                                variant="filled"
                                fullWidth
                                {...register('password', {
                                    required: 'Este campo es requerido',
                                    minLength: { value: 6, message: 'Minimo 6 caracteres' }
                                })}
                                error={!!errors.password}
                                helperText={errors.password?.message}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                color="secondary"
                                className='circular-btn'
                                size='large'
                                fullWidth
                            >
                                Create
                            </Button>
                        </Grid>

                        <Grid item xs={12} display='flex' justifyContent='end'>
                            <NextLink
                                href={query.p ? `/auth/login?p=${query.p?.toString()}` : '/auth/login'}
                                passHref
                            >
                                <Link underline='always'>
                                    ¿Ya tienes cuenta?
                                </Link>
                            </NextLink>
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </AuthLayout>
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const session = await getSession({ req: ctx.req })

    const { p = '/' } = ctx.query

    if (session) {
        return {
            redirect: {
                destination: p.toString(),
                permanent: false,
            }
        }
    };

    return {
        props: {
            session
        }
    }
}


export default RegisterPage