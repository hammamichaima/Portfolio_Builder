import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import "./Dashboard.css"; // Optional styling
const templates = [
    {
        id: 1,
        name: "Classic Resume",
        description: "A clean, professional layout for any industry.",
        image: "/images/classic-template.png",
    },
    {
        id: 2,
        name: "Creative Portfolio",
        description: "Bold design with sections for projects and skills.",
        image: "/images/creative-template.png",
    },
    {
        id: 3,
        name: "Modern CV",
        description: "Sleek layout with modern typography and icons.",
        image: "/images/modern-template.png",
    },
];


const Dashboard = () => {
    const navigate = useNavigate();
    const { templateId } = useParams();
    const id = templateId ?? "default";
   const handleSelectTemplate = (templateId) => {
         //Navigate to portfolio builder with selected template

       //navigate(`/builder/:templateId`);
       navigate(`/builder/${templateId}`);
    };


    return (
        <div className="dashboard-container">
            <h2>Welcome to Your Portfolio Builder</h2>
            <p>Select a template to get started:</p>

            <div className="template-grid">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="template-card"
                        onClick={() => handleSelectTemplate(template.id)}
                    >
                        <img src={template.image} alt={template.name} />
                        <h3>{template.name}</h3>
                        <p>{template.description}</p>
                        <button>Select</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
