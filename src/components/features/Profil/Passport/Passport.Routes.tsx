import { Routes, Route } from 'react-router-dom';
import CreatePassport from './Passport.Create';
import Passport from './Passport.Main';

export default function PassportRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Passport />} />
        <Route path="/create/" element={<CreatePassport />} />
      </Routes>
    </>
  );
}
