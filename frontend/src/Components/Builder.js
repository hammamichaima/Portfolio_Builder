import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Builder.css";
import { useAuth } from "../Context/authContext"; // Adjust path

const Builder = () => {
    const { templateId } = useParams();
    const { token } = useAuth(); // 🔐 Get token from context



    const [formData, setFormData] = useState({
        fullName: "",
        bio: "",
        experience: "",
        skills: "",
        projectImage: null,
        projectVideo: null,
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            fullName: formData.fullName,
            bio: formData.bio,
            experience: formData.experience,
            skills: formData.skills,
        };

        console.log("📤 Payload to send:", payload);

        try {
            const res = await axios.post(`http://localhost:8082/api/portfolio`, payload, {
               // headers: {
                 //   Authorization: `Bearer ${token}`,
                   // "Content-Type": "application/json",
               // },
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                }
            });

            console.log("✅ Server response:", res.data);
            alert("Portfolio saved!");
        } catch (err) {
            console.error("❌ Error response:", err.response?.data || err.message);
            alert("Failed to save portfolio.");
        }
    };

    useEffect(() => {
        console.log("🧩 Template ID:", templateId);
        console.log("🔑 Auth token:", token);

        if (!templateId) {
            console.error("❌ No templateId in URL");
            alert("No templateId provided!");
        }
    }, [templateId]);




    return (
        <div className="builder-container">
            <h2>🛠️ Build Your Portfolio (Template {templateId})</h2>

            <form onSubmit={handleSubmit} className="builder-form">
                <label>
                    Full Name:
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Bio:
                    <textarea
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        rows={3}
                    />
                </label>

                <label>
                    Experience:
                    <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        rows={4}
                    />
                </label>

                <label>
                    Skills (comma separated):
                    <input
                        type="text"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Project Screenshot (PNG only):
                    <input
                        type="file"
                        accept="image/png"
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                projectImage: e.target.files[0],
                            }))
                        }
                    />
                </label>

                <label>
                    Project Demo Video (MP4):
                    <input
                        type="file"
                        accept="video/mp4"
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                projectVideo: e.target.files[0],
                            }))
                        }
                    />
                </label>


                <button type="submit" className="submit-btn">🚀 Generate Portfolio</button>
            </form>
            {formData.projectImage && (
                <div>
                    <p><strong>Screenshot Preview:</strong></p>
                    <img
                        src={URL.createObjectURL(formData.projectImage)}
                        alt="Project Screenshot"
                        style={{ width: "300px", borderRadius: "8px" }}
                    />
                </div>
            )}

            {formData.projectVideo && (
                <div>
                    <p><strong>Video Preview:</strong></p>
                    <video
                        src={URL.createObjectURL(formData.projectVideo)}
                        controls
                        width="400"
                    />
                </div>
            )}

            <div className="preview">
                <h3>🔍 Preview</h3>
                <p><strong>Name:</strong> {formData.fullName}</p>
                <p><strong>Bio:</strong> {formData.bio}</p>
                <p><strong>Experience:</strong> {formData.experience}</p>
                <p><strong>Skills:</strong> {formData.skills}</p>
            </div>
        </div>
    );
};

export default Builder;
