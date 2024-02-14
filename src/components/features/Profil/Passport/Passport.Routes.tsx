import { Routes, Route } from 'react-router-dom';
import CreatePassport from './Passport.Create';
import Passport from './Passport.Main';
import UpdatePassport from './Passport.Update';

export default function PassportRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Passport />} />
        <Route path="/create/" element={<CreatePassport />} />
        <Route path="/:id" element={<UpdatePassport />} />
      </Routes>
    </>
  );
}
