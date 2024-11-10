import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomeScreen } from '../pages/HomeScreen'

export const MainRouter = () => {
  return (
    <>
        <Routes>
          <Route path='/'element={<HomeScreen/>}></Route>
        </Routes>
    </>
  )
}
