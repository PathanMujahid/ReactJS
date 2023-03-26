import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <  >
                <div style={{ backgroundColor: "black", alt: "cristiano Ronaldo", display: 'flex', gap: "25rem", position: "fixed", top: "0", width: "99%", padding: "15px" }}>
                    <div >
                        <img src="https://www.cristianoronaldo.com/assets/logos/cr7.svg" alt='headinglogo' />
                    </div>
                    <div style={{ display: 'flex', gap: '2.5rem', float: 'right' }}>
                        <a style={{ color: 'white' }}>CR7</a>
                        <a style={{ color: 'white' }}>#EARLY lIFE</a>
                        <a style={{ color: 'white' }}>CLUB CAREER</a>
                        <a style={{ color: 'white' }}>HONOURS</a>
                        <a style={{ color: 'white' }}>PLAYER PROFILE</a>
                    </div>




                </div>

            </>





        )
    }
}
export default Header;