import LinkedinIcon from '../assets/imgs/LinkedinIcon.png'
import GithubIcon from '../assets/imgs/GithubIcon.png'
import EmailIcon from '../assets/imgs/EmailIcon.png'

export function ContactMe({ openLinkNewTab }) {

    function openEmailClient() {
        const mailtoLink = `mailto:galbarcessat1@gmail.com`;
        window.open(mailtoLink, '_blank');
    }
    

    return (
        <div id='contact' className="contact-me-section">
            <h1>Contact Me</h1>
            <div className="contact-me-content">

                <div className='social-links'>
                    <div className="icon-btn linkedin-button button" onClick={() => openLinkNewTab('https://www.linkedin.com/in/gal-ben-natan-232342251/')}>
                        <img className='icon button-content' src={LinkedinIcon} alt="" />
                        <span className='button-content'>Linkedin</span>
                    </div>

                    <div className="icon-btn github-button button" onClick={() => openLinkNewTab('https://github.com/galbarcessat')}>
                        <img className='icon button-content' src={GithubIcon} alt="" />
                        <span className='button-content'>Github</span>
                    </div>

                    <div title='galbarcessat1@gmail.com' className="icon-btn email-button button" onClick={() => openEmailClient()}>
                        <img className='icon button-content' src={EmailIcon} alt="" />
                        <span className='button-content'>Email</span>
                    </div>
                </div>

                <img className='contact-me-img' src="https://img.freepik.com/free-vector/programmer-concept-illustration_114360-2417.jpg?w=1060&t=st=1676314565~exp=1676315165~hmac=e260e0dd4919ff600bc5dae678c97a73cc98b7b2b94d52f6113defedbf5d4197" alt="" />
            </div>
        </div>
    )
}