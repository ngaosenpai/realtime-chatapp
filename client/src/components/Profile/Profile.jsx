import React from 'react'
import './Profile.scss'
function Profile(props) {
    
    return(
        <div className="profile">
            <div className="profile-background-img">
                <img 
                    src="https://picsum.photos/200" 
                    alt="backgroung-img"/>
            </div>
            <div className="profile-front">
                <div className="profile-front-img">
                    <img 
                        src="https://picsum.photos/200" 
                        alt="profile-img"/>
                </div>
                <div className="profile-front-info">
                    <div className="profile-front-info-name">
                        <h1>
                            Name of User
                        </h1>
                    </div>
                    <div className="profile-front-info-action">
                        {/* <button>Add Friend</button> */}
                        <a href="/chat/0">
                            <button>Message</button>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile