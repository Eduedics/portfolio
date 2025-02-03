import "./ProjectCardStyles.css"
import ProjectCardData from "./ProjectCardData.js"
import ProjectCard from "./ProjectCard.js"

import React from 'react'



const project = () => {
  return (
    <div className="container">
        <h1 className="Project-heading">Projects</h1>
        <div className="Project-container">
            {ProjectCardData.map((Value,index) =>{
                return(
                    <ProjectCard 
                        key={index}
                        title = {Value.title}
                        description ={Value.description}
                        viewurl = {Value.viewurl}
                        srcurl = {Value.srcurl}
                    />
                )
            })}
        </div>
    </div>
  )
}

export default project;