import React from "react";

const SocialLinks = ({ style }) => {

    return (
        <>
        <ul className={`social-profile list-style ${style}`}>
            <li>
                <a href="https://facebook.com">
                    <i className="ri-facebook-fill"></i>
                </a>
            </li>
            <li>
                <a href="https://twitter.com">
                    <i className="ri-twitter-fill"></i>
                </a>
            </li>
            <li>
                <a href="https://instagram.com">
                    <i className="ri-instagram-line"></i>
                </a>
            </li>
        </ul>
        </>
    )
}

export default SocialLinks