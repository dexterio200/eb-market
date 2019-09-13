import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

function AdList(props) {
    const { ads } = props
    
    return (
        <div>
            <Header />
            {ads && ads.map(ad =>
                <div key={ad.id}>
                    <Link to={`/ad/${ad.id}`}><img src={ad.url} alt={ad.title}></img></Link>
                    <h3>
                        <Link to={`/ad/${ad.id}`}>{ad.title}</Link>
                    </h3>
                    <p>€{ad.price}</p>
                    <br />
                </div>
            )}
        </div>
    )
}

export default AdList