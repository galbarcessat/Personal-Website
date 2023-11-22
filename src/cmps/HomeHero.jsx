import GalImg from '../assets/imgs/GalImg.jpg'
import { ArrowsDown } from './ArrowsDown'
export function HomeHero() {

    return (
        <section id="home" className="hero-section">
            <div className='hero-text-container'>
                <p>Hey, </p>
                <p>I am Gal. </p>
                <p>Full Stack developer </p>
            </div>
            <img src={GalImg} alt="Gal's Img" />
            <ArrowsDown />
        </section>
    )
}