import { Login } from '@mui/icons-material'
import { Menu } from '@mui/material'
import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Register from '../Auth/Register'
import { Header } from '../header/Header'
import { Home } from './Home'
import Page from './Page'
import Spending from './Spending'

export const AuthScreens = () => {
    return (
        <HashRouter>
            

            <Routes>
                <Route path="/" element={<Page component={Home} title={"Home Screen"} />}/>
                <Route path="/spending" element={<Page component={Spending} title={"Spending"} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} /> 
            </Routes>
            
        </HashRouter>
    )
}
