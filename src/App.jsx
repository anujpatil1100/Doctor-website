import { useState } from 'react'
import Doctorspage from './pages/Doctorspage'
import Background1 from './components/Background1'
import Profilepage from './pages/Profilepage'
import Updatingsetting from './components/Updatingsetting'
import Info from './components/Info'
import AppointmentHistory from './pages/AppointmentHistory'
import Updatesetting2 from './components/Updatesetting2'
import Appointmentpage from './pages/Appointmentpage'
import AppointmentCard from './components/AppointmentCard'
import AppointmentBooked from './pages/AppointmentBooked'
import Paymentpage from './pages/Paymentpage'
import Landingpage from './pages/Landingpage'
import toast, { Toaster } from 'react-hot-toast';

function App() {
 
  return (
   <>
   {/* <Doctorspage/> */}
   {/* <Profilepage/> */}
   {/* <AppointmentHistory/> */}
   {/* <Appointmentpage/> */}
   {/* <AppointmentBooked/> */}
   {/* <Paymentpage/> */}
   <Landingpage/>
   <div><Toaster/></div>
   </>
  )
}

export default App
