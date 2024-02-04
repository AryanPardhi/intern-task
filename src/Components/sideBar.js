import React from 'react'

const sideBar = () => {
  return (
    <>
        <div className='' style={{padding:"65px 30px 0px", width:"20%",height:"100%", backgroundColor:"salmon" , position:"fixed"}}>
            <ul className="flex justify-center items-start flex-col gap-10" style={{padding:"25px 10px 0px 10px"}}>
                <a href='#'><button className='bg-'>Dashboard</button></a>
                <a href='#'><button className=''>Content</button></a>
                <a href='#'><button className=''>Team</button></a>
                <a href='#'><button className=''>User</button></a>
                <a href='#'><button className=''>App/Web</button></a>
                <a href='#'><button className=''>Analytics</button></a>
                <a href='#'><button className=''>Media</button></a>
                <a href='#'><button className=''>Notification</button></a>
                <a href='#'><button className=''>Settings</button></a>
            </ul>
        </div>
    </>
  )
}

export default sideBar
