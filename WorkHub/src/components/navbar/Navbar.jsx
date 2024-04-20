import React, { useEffect, useState } from 'react'
import "./navbar.css"
const Navbar = () => {

    const [active,setActive] = useState(false);
    const isActive = ()=>{
        window.scrollY > 0 ? setActive(true): setActive(false)
    }

    useEffect(()=>{
        window.addEventListener("scroll", isActive);
        return ()=>{
            window.removeEventListener("scroll", isActive);
        }
    },[])
    const currentUser = { id: 1, username: "Anna", isSeller: true, };
  return (
    <div className={active? "navbar active" : " navbar"}>
      <div className="container">
        <div className="logo">
            {/* <link to="./"> */}
            <span>WorkHub</span>
            {/* </link> */}
        </div>
        <div className="links">
            <span>WorkHub Business</span>
            <span>Explore</span>
            <span>English</span>
            <span>Sign_in</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && <button>Join</button>}
            {currentUser &&
            (<div className="user">
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fayayyuki%2Fart%2FToon-Link-Profile-Pic-commission-781975060&psig=AOvVaw3zQxS4uVfuOZ05TpcTZR9h&ust=1713726324010000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKCcspi-0YUDFQAAAAAdAAAAABAE" alt="" />
                <span>{currentUser?.username}</span>
                <div className="options">
                {
                    currentUser?.isSeller &&(
                        <>
                        <span>Gigs</span>
                        <span>Add New Gig</span>
                        </>
                    )
                }
                <span>Orders</span>
                <span>Messages</span>
                <span>Logout</span>
                </div>
            </div>

            )}
        </div>
      </div>
      {active &&(
      <>
      <hr />
      <div className="menu">
        <span>Graphics & Design</span>
        <span>TEST2</span>
        <span>TEST</span>
        <span>TEST2</span>
        <span>TEST</span>
        <span>TEST2</span>
      </div>
      </>
      )}
    </div>

  )
}

export default Navbar
