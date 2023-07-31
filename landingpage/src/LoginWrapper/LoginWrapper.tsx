import React from "react"

interface Props {
    user: any, 
    handleSignOut: Function
}

export default function loginWrapper(props: Props) {
    return (
        <div className='loginWrapper'>
            <div id="googleSignIn" hidden={props.user? true: false}></div>
            { props.user &&
                <div>
                    <li className="nav-item dropdown">
                        <img src={props.user.picture} className="dropdown-toggle profile-pic" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
                        <div className="dropdown-menu sign-out-btn" aria-labelledby="profile dropdown">
                            <button className="dropdown-item" onClick={() => props.handleSignOut()}>Sign out</button>
                        </div>
                    </li>
                </div>
            }
        </div>
    )
}