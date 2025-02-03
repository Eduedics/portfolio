import "./ProjectCardStyles.css"

import React from 'react'


import { NavLink } from "react-router-dom"

const ProjectCard = (props) => {
  return (
    <div className="Project-card">
                <img src={props.imgsrc} alt="project-img" />
                <h2 className="Project-title">{props.title}</h2>
                <div className="project-details">
                    <p>{props.description}.</p>
                    <div className="pro-btns">
                        <NavLink className="btn" to={props.viewurl} >View</NavLink>
                        <NavLink className="btn" to={props.srcurl}>Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default ProjectCard