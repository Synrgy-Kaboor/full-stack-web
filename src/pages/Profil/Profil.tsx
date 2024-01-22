import { Container } from '@mui/material';
import Sidebar from '../../components/shared/Profil/Sidebar';
import { Outlet } from 'react-router-dom';


export default function Profil () {

    return (
        <>
        <Container maxWidth={'xl'} sx={{display: 'flex', gap: '16px'}}>
            <Sidebar/>
            <Outlet/>
        </Container>
        </>
    )
}