import React, { useEffect, useState } from 'react'
import './App.css'
import CardsWrapper from './Cards/CardsWrapper'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import ThemeChanger from './ThemeChanger/ThemeChanger'
import jwtDecode from "jwt-decode"
import secrets from '../secrets.json'
import LoginWrapper from './LoginWrapper/LoginWrapper'
import loginWrapper from './LoginWrapper/LoginWrapper'

interface UserObject {
    email: string,
    email_verified: boolean,
    given_name: string,
    name: string,
    picture: string
}

// const google = window.google;

function App() {

    const [user, setUser] = useState<UserObject>()

    useEffect(() => {

        let connectCount = 0;

        connectToGoogle()

        function connectToGoogle() {
            connectCount++
            /* global google */
            if(typeof google !== 'undefined'){
                google.accounts.id.initialize({
                    client_id: secrets.googleOAuth.client_id,
                    callback: handleCallbackResponse
                })
                google.accounts.id.prompt()
                google.accounts.id.renderButton(
                    document.getElementById("googleSignIn"),
                    { theme: "filled_black", shape: ""}
                )
                console.log("google var initialized")
            } else {
                if(connectCount < 10){
                    setTimeout(() => connectToGoogle(), 10)
                }
            }
            }
    }, [])

    function handleCallbackResponse(response: any) {
        const userObject: UserObject = jwtDecode(response.credential)
        // console.log(userObject)
        setUser(userObject)
    }

    function handleSignOut() {
        setUser(undefined)
    }
  
  return (
    <div>
      <Navbar user={user} handleSignOut={() => handleSignOut()}/>
      <CardsWrapper />
      <ThemeChanger />
      {/* <Footer /> */}
    </div>
  )
}

export default App
