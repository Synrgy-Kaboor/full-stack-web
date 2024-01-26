import { Container } from '@mui/material';
import Sidebar from '../../components/shared/Profil/Sidebar';
import  ChangeProfile  from '../../components/ui/ChangeProfile';
import { Outlet, useLocation } from 'react-router-dom';


export default function Profil () {
    const location = useLocation();
    return (
        <>
        <Container maxWidth={'xl'} sx={{display: 'flex', gap: '16px'}}>
            <Sidebar/>
            {location.pathname === '/profil/' && <ChangeProfile />}
            <Outlet/>
        </Container>
        </>
    )
}