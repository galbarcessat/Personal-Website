import GalSurfingImg from '../assets/imgs/GalSurfingImg.jpg'

export function AboutMe() {
    return (
        <div id='about' className="about-me-section">
            <h1>About Me</h1>
            <div className='about-me-content'>
                <p>I am a Frontend/Full Stack Developer with experience in writing single-page
                    applications {`(SPAs)`} using the latest WEB technologies. <br />
                    <br />
                    I am a graduate of the Coding Academy, an intensive coding bootcamp consisting of
                    640 hours that qualifies Full Stack developers. <br />
                    <br />
                    Hardworking and responsible, a good team player, excellent self-learning ability, good interpersonal skills,
                    High capability of working under pressure. <br />
                    <br />
                    I am passionate about learning and eager to apply my skills and knowledge to a new
                    role as a front/full stack developer.
                    <br />
                    <br />
                    Some of my hobbies include wave surfing, training in the gym, and attending festivals. My previous job was as a personal trainer.
                </p>
                <img className='surfing-img' src={GalSurfingImg} alt="" />
            </div>
        </div>
    )
}