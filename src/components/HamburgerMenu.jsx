import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

export default function HamburgerMenu() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <div onClick={() => setOpen(!open)} style={{ cursor: "pointer", fontSize: 24 }}>
                <img src={'/src/assets/images/menu.png'} width={'100px'} height={'100px'} alt={'hamburger-menu-icon'} />
            </div>

            {open && (
                <div
                    style={{
                        position: "absolute",
                        top: 40,
                        right: 10,
                        backgroundColor: "#0249ab",
                        border: "1px solid #ccc",
                        padding: 10,
                    }}
                >
                    <div style={{ padding: 8 }} onClick={() => navigate('/newanime')}>New Anime Entry</div>
                    <div style={{ padding: 8 }} onClick={() => alert("Profile clicked")}>Profile</div>
                    <div style={{ padding: 8 }} onClick={() => alert("Logout clicked")}>Logout</div>
                </div>
            )}
        </div>
    );
};
