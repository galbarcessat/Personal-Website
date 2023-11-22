import { Skill } from "./Skill";

export function SkillsSection() {
    return (
        <div className="skills-section">
            <p>Skills</p>
            <div className="skills-container">
            <Skill text={'HTML'}/>
            <Skill text={'CSS'}/>
            <Skill text={'JS'}/>
            <Skill text={'ReactJS'}/>
            <Skill text={'NodeJS'}/>
            <Skill text={'ExpressJS'}/>
            <Skill text={'MongoDB'}/>
            <Skill text={'Redux'}/>
            <Skill text={'WebSockets'}/>
            <Skill text={'SASS'}/>
            <Skill text={'Rest APIs'}/>
            <Skill text={'Atlas'}/>
            <Skill text={'Git/Github'}/>
            <Skill text={'AJAX'}/>
            </div>
        </div>
    )
}