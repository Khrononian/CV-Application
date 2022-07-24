import React from 'react'

const Header = (props) => {
    return (
        <header className='heading'>
            <h2>{props.name}</h2>
            <h3>{props.profession}</h3>
        </header>
    )
}

export default Header