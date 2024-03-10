import React from 'react'
import "./sidebar.css"
import JakeInactive from "../assets/Jake.jpg"
import JakeActive from "../assets/JakeWallpaper.jpg"
import Home from "../assets/home.png"
import Portfolio from "../assets/open-book.png"
import Scroll from "../assets/scroll.png"
import User from "../assets/user.png"

const Sidebar = () => {

    const [hovered, setHover] = React.useState(false)
    const mouseOvered = () => {
        setHover(true)
        console.log(hovered)
    }

    const notMouseOvered = () => {
        setHover(false)
        console.log(hovered)
    }

    return (
        <aside onMouseEnter={mouseOvered} onMouseLeave={notMouseOvered} className="aside">
            <a href="#home" className="nav__logo">
                <img src={hovered ?JakeActive : JakeInactive} width="100%" height="auto" alt="" />
            </a>


                    <div className="sidebarDiv">
                        {hovered ?
                            <a href="#about" className="nav__link">
                                <img className='icons_out' src={Home} width="40px" height="40px"></img>
                                <p>About</p>
                            </a>
                            :
                            <img className='icons' src={Home} width="40px" height="40px"></img>
                        }
                    </div>

                    <div className="sidebarDiv">
                        {hovered ? <a href="#portfolio" className="nav__link">
                            <img className='icons' src={Portfolio} width="40px" height="40px"></img>
                            <p>Portfolio</p>
                        </a>
                            :
                            <img className='icons' src={Portfolio} width="40px" height="40px"></img>
                        }
                    </div>

                    <div className="sidebarDiv">
                        {hovered ?
                            <a href="#resume" className="nav__link">
                                <img className='icons' src={Scroll} width="40px" height="40px"></img>
                                <p>Resume</p>
                            </a>
                            :
                            <img className='icons' src={Scroll} width="40px" height="40px"></img>
                        }
                    </div>

                    <div className="sidebarDiv">
                        <a href="#contact" className="nav__link">
                            {hovered ?
                                <a href="#contact" className="nav__link">
                                    <img className='icons_out' src={User} width="40px" height="40px"></img>
                                    <p>
                                        Contact
                                    </p>
                                </a>
                                :
                                <img className='icons' src={User} width="40px" height="40px"></img>
                            }
                        </a>
                    </div>




            {/* <div className='nav__footer'>
                <span className="copyright">&copy; Alden Maiyor 2024</span>
            </div> */}
        </aside>
    )
}

export default Sidebar
