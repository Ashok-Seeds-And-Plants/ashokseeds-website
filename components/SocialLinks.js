import React from "react";

const SocialLinks = ({ style }) => {

    return (
        <>
        <ul className={`social-profile list-style ${style}`}>
            <li>
                <a target="_blank" href="https://www.facebook.com/ashokseedplant">
                    <i className="ri-facebook-fill"></i>
                </a>
            </li>
            <li>
                <a target="_blank" href="https://www.instagram.com/ashokseedplant/">
                    <i className="ri-instagram-line"></i>
                </a>
            </li>
            <li>
                <a target="_blank" href="https://x.com/ashokseedplant">
                    <i className="ri-twitter-x-line"></i>
                </a>
            </li>
        </ul>
        </>
    )
}

export default SocialLinks