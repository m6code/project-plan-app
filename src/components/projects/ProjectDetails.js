import React from 'react'

const ProjectDetails = (props) => {
    //console.log(props)
    const id = props.match.params.id;
    return (
        <div className="cotainer section project-details">
            <div className='card z-depth-0'>
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Some Random NOte goes here lorem no gree work for me so I typed it out myself ooo, no time to waste</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Sabi Boy</div>
                    <div>5th August, 2020</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
