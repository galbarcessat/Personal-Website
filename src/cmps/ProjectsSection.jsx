import { Skill } from "./Skill";
import FundayImg from '../assets/imgs/FundayImg.png'
import AppSusImg from '../assets/imgs/AppSusImg.png'
import AppSusImg2 from '../assets/imgs/AppSusImg2.png'
import MemeGeneratorImg from '../assets/imgs/MemeGeneratorImg.png'
import SpaceInvadersImg from '../assets/imgs/SpaceInvadersImg.png'
export function ProjectsSection({openLinkNewTab}) {

    return (
        <section id="projects" className="projects-section">
            <h1>Projects</h1>
            <div className="projects-container">

                <div className='funday-container'>
                    <div className="project-layout-container">
                        <div className="project-description">
                            <p className="project-title">Funday</p>
                            <div className='skills-container'>
                                <Skill text={'ReactJS'} />
                                <Skill text={'Redux'} />
                                <Skill text={'NodeJs'} />
                                <Skill text={'ExpressJS'} />
                                <Skill text={'MongoDB'} />
                                <Skill text={'Atlas'} />
                                <Skill text={'WebSockets'} />
                                <Skill text={'SASS'} />
                            </div>
                            <p>Funday is a Monday clone developed using React, Redux, SASS, Socket.io, Node.js,
                                MongoDB, and many more technologies. <br />
                                It is designed to manage large projects and tasks efficiently, allowing users to assign
                                individuals to each task, change its status, priority, due date, and much more. <br />
                                The application provides live updates through sockets, an AI helper feature, and many
                                other functionalities.
                            </p>
                            <div className="btns-container">
                                <button className="button" onClick={()=> openLinkNewTab('https://github.com/jinja-ninja/monday')}>
                                    <span className="button-content">Github</span>
                                </button>
                                <button className="button" onClick={()=> openLinkNewTab('https://funday-k1un.onrender.com/')}>
                                    <span className="button-content">Demo</span>
                                </button>
                            </div>
                        </div>
                        <img src={FundayImg} alt="" />
                    </div>
                </div>

                <div className='appsus-container'>
                    <div className="project-layout-container">
                        <div className="project-description">
                            <p className="project-title">AppSus</p>
                            <div className='skills-container'>
                                <Skill text={'ReactJS'} />
                                <Skill text={'CSS'} />
                                <Skill text={'API'} />
                            </div>
                            <p>AppSus is a Google Gmail , Keeps clone and a book shop all combined into one app.<br />
                                In this app you can write emails and intergrate between the Gmail and Keeps apps.

                            </p>
                            <div className="btns-container">
                                <button className="button"  onClick={()=> openLinkNewTab('https://github.com/galbarcessat/AppSus')}>
                                    <span className="button-content">Github</span>
                                </button>
                                <button className="button"  onClick={()=> openLinkNewTab('https://galbarcessat.github.io/AppSus/')}>
                                    <span className="button-content">Demo</span>
                                </button>
                            </div>
                        </div>
                        <img src={AppSusImg2} alt="" />
                    </div>
                </div>

                <div className='meme-container'>
                    <div className="project-layout-container">
                        <div className="project-description">
                            <p className="project-title">Meme Generator</p>
                            <div className='skills-container'>
                                <Skill text={'HTML'} />
                                <Skill text={'CSS'} />
                                <Skill text={'JS'} />
                            </div>
                            <p>Meme Generator App built using vanilla JS, HTML, and CSS. <br />
                                With this app, you can easily create cool memes.<br />
                                The meme editor is powered by Canvas, providing a userfriendly interface for meme creation.
                            </p>
                            <div className="btns-container">
                                <button className="button" onClick={()=> openLinkNewTab('https://github.com/galbarcessat/MemeGeneratorV1')}>
                                    <span className="button-content">Github</span>
                                </button>
                                <button className="button" onClick={()=> openLinkNewTab('https://galbarcessat.github.io/MemeGeneratorV1/')}>
                                    <span className="button-content">Demo</span>
                                </button>
                            </div>
                        </div>
                        <img src={MemeGeneratorImg} alt="" />
                    </div>
                </div>

                <div className='space-invaders-container'>
                    <div className="project-layout-container">
                        <div className="project-description">
                            <p className="project-title">Space Invaders</p>
                            <div className='skills-container'>
                                <Skill text={'HTML'} />
                                <Skill text={'CSS'} />
                                <Skill text={'JS'} />
                            </div>
                            <p>Space Invaders is one of the first projects I built. <br />
                                It was constructed using vanilla HTML, CSS, and JS.  <br />
                                It posed a challenge to make the aliens move from side to side, but I managed to make it work with intervals.
                            </p>
                            <div className="btns-container">
                                <button className="button" onClick={()=> openLinkNewTab('https://github.com/galbarcessat/Space-invaders')}>
                                    <span className="button-content">Github</span>
                                </button>
                                <button className="button" onClick={()=> openLinkNewTab('https://galbarcessat.github.io/Space-invaders/')}>
                                    <span className="button-content">Demo</span>
                                </button>
                            </div>
                        </div>
                        <img src={SpaceInvadersImg} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}