import { useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { LayananTambahan } from './pages/Checkout'
import { Beranda } from './pages/Beranda'

const router = createBrowserRouter([
  {
    path: "/layanan-tambahan",
    element: <LayananTambahan />
  },
  {
    path: "/beranda",
    element: <Beranda />
  }
])

function App() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
