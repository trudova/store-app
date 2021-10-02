import React from 'react'
import { useLocation } from 'react-router'

export default function Success() {
    const location = useLocation();
    const data = location.state.data
    console.log(location)
    return (
        <div>
            succsess full
        </div>
    )
}
