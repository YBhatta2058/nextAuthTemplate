"use client"
import React, { useEffect , useState} from 'react'
import {getProviders , signIn , signOut , useSession} from 'next-auth/react'

const Nav = () => {
    const [providers, setProviders ] = useState(null)
    
    const {data: session} = useSession()
    useEffect(()=>{
        const setUpProviders = async ()=>{
            const response = await getProviders()
            setProviders(response)
        }
        setUpProviders();
    },[])
  return (
    <div className = "float-end p-4">
        {session?.user ? (<div>
            {session.user?.name}
            <img className = "rounded-full outline-none overflow-hidden" src={session.user?.image} alt="" />
            <button
             className = "p-4 text-2xl border-2 rounded-3xl bg-black text-white hover:text-black hover:bg-orange-500"
             onClick = {signOut}
            >Sign Out</button>
        </div>):
        <button 
        className = "p-4 text-2xl border-2 rounded-3xl bg-black text-white hover:text-black hover:bg-orange-500"
        onClick = {signIn}
        >
            Sign In
        </button>
    }
        
    </div>
  )
}

export default Nav