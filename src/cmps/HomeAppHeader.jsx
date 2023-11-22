import { useState } from "react"

export function HomeAppHeader({ scrolled }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId)
        if (section) {
            window.scrollTo({
                top: section.offsetTop - 100,
                behavior: 'smooth'
            })
            setIsMenuOpen(false)
        }
    }

    function ToggleMenu(isChecked) {
        isChecked ? setIsMenuOpen(true) : setIsMenuOpen(false)
        console.log('isMenuOpen:', isMenuOpen)
    }

    return (
        <div className={"home-header full main-layout " + (scrolled ? 'scrolled' : '')}>
            <div className="home-header-content">
                <p onClick={() => scrollToSection('home')}>Gal Ben Natan</p>
                <div className="nav-contianer">
                    <span onClick={() => scrollToSection('home')}>Home</span>
                    <span onClick={() => scrollToSection('about')}>About</span>
                    <span onClick={() => scrollToSection('projects')}>Projects</span>
                    <span onClick={() => scrollToSection('contact')}>Contact</span>
                </div>

                <div id="menuToggle"  >
                    <input type="checkbox" checked={isMenuOpen} onChange={(event) => ToggleMenu(event.target.checked)} />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                    </ul>
                </div>
            </div>

             <div className={"menu-in-mq " + (isMenuOpen ? 'open' : '')}>
                <p onClick={() => scrollToSection('home')}>Home</p>
                <p onClick={() => scrollToSection('about')}>About</p>
                <p onClick={() => scrollToSection('projects')}>Projects</p>
                <p onClick={() => scrollToSection('contact')}>Contact</p>
            </div>
        </div >
    )
}



