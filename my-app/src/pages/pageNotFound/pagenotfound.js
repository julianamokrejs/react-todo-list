import React from 'react'
import './pagenotfound.css'
import NotFoundImage from './notfound.png'

function pageNotFound(props) {
    return (
        <div className='page-not-found'>
        <h1>Oops</h1>
        <p>Página não encontrada!</p>
        <img src={NotFoundImage}/>
        </div>
    )
}

export default pageNotFound