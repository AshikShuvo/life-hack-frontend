import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../Login/Index'
import Register from '../Register/Index'
import HomeBody from './HomeComponents/HomeBody'
import NavBar from './HomeComponents/NavBar'

const Home = () => {
    return (
        <>
            <NavBar/>
            <Switch>
                <Route exact  path="/">
                    <HomeBody/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/register">
                    <Register/>
                </Route>
            </Switch>
        </>
    )
}

export default Home
