import React from "react";
import "./tags.css"
import graph from '../../style/images/graphic.png'
import telephone from '../../style/images/telephone.png'
import local from '../../style/images/localization.png'
import add from '../../style/images/add.png'

//tags that should be showed into the project
const Tags = (props) => {
    const [tags, setTags] = React.useState([
        {icon: graph, text: 'micro'},
        {icon: local, text: '46534'},
        {icon: telephone, text: '6308165790'}

    ]);

    // add tags function
    const handleTags =  event => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, {icon: add, text: event.target.value}]);
            event.target.value = "";
        }    
    };

    return (
        <div className="tags">
            {tags.map((tag, index) => (
                <div className="single-tag" key={index}>
                    <img src={tag.icon} alt="icons" /> 
                    <span>{tag.text}</span>
                </div>
            ))}
            
            <div className="new-tag"> 
            <img src={add} alt="plus icon" /> 
            <input 
                type="text"
                onKeyDown={event => handleTags(event)}
                placeholder="add more"
            />
            </div>
        </div> 
    );
};
export default Tags;

