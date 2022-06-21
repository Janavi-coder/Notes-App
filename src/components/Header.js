import React from 'react'

export default function Header({ handleDarkMode }) {
    return (
        <div className='header'>
            <h1>Notes App</h1>
            <button onClick={() => handleDarkMode((previousMode) => !previousMode)} className='save'>Toggle Mode</button>
        </div>
    )
}
