import React from 'react'
import './Profile.css'
import profileimg from '../../assets/ProfileImg/profileimg.svg'
function Profile() {
    return (
        <div>
            <section className="bg-white text-dark p-5 text-center text-sm-start">
                <div className="container">
                    <div className="d-sm-flex">
                        <div>
                            <h1 className="mt-5">Want anything to be<br/>easy with Laseles<b>VPN</b></h1>
                            <p className="my-4">
                                Provide a network for all your needs with ease and fun using <b>LaslesVPN </b> discover intresting features from us
                            </p>
                            <button className="btn btn-danger btn-lg shadow">
                                Get Started
                            </button>
                        </div>
                        <img className="img-fluid w-40 d-none d-sm-block" src={profileimg} alt="no-internet-connection" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Profile
