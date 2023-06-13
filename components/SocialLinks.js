const SocialLinks = ({ style }) => {
const styleName = style;
console.log(styleName);
    return (
        <ul className="social-profile {styleName} list-style">
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
    )
}

export default SocialLinks