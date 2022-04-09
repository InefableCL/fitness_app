import style from './footer.module.scss';

const Footer = ({ bgcWhite=true }) => {
    return (
        <div className={`${style.footer} ${bgcWhite ? '' : style.footer_black}`}>
            <h2 className={`${style.footer__title} ${bgcWhite ? '' : style.footer__title_while}`}>
                Around the web
            </h2>
            <ul className={`${style.footer__socialNetwork} ${style.socialNetwork__list}`}>
                <li className={`${style.socialNetwork__item} ${style.facebook__item}`}>
                    <a href="https://www.facebook.com/" className={`${style.socialNetwork__link} ${bgcWhite ? '' : style.socialNetwork__link_white}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">
                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h7.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H19c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z"/>
                        </svg>
                    </a>
                </li>
                <li className={`${style.socialNetwork__item} ${style.youtube__item}`}>
                    <a href="https://www.youtube.com/" className={`${style.socialNetwork__link} ${bgcWhite ? '' : style.socialNetwork__link_white}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">
                            <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z"/>
                        </svg>
                    </a>
                </li>
                <li className={`${style.socialNetwork__item} ${style.vk__item}`}>
                    <a href="https://vk.com/" className={`${style.socialNetwork__link} ${bgcWhite ? '' : style.socialNetwork__link_white}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">
                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M17.907,15.684 l-1.735,0.024c0,0-0.374,0.073-0.864-0.265c-0.649-0.446-1.261-1.606-1.738-1.455c-0.484,0.154-0.469,1.198-0.469,1.198 s0.004,0.184-0.107,0.304c-0.12,0.129-0.355,0.116-0.355,0.116h-0.777c0,0-1.714,0.142-3.225-1.433 c-1.646-1.717-3.1-5.106-3.1-5.106S5.452,8.853,5.543,8.744C5.646,8.623,5.924,8.62,5.924,8.62l1.857-0.009 c0,0,0.175,0.031,0.301,0.123c0.103,0.076,0.162,0.219,0.162,0.219s0.3,0.761,0.698,1.45c0.776,1.343,1.137,1.637,1.4,1.493 c0.384-0.21,0.269-1.898,0.269-1.898s0.007-0.613-0.193-0.886C10.262,8.899,9.969,8.836,9.84,8.82 c-0.105-0.014,0.066-0.257,0.289-0.367c0.334-0.163,0.925-0.173,1.622-0.166c0.543,0.006,0.7,0.039,0.912,0.091 c0.641,0.155,0.423,0.753,0.423,2.188c0,0.46-0.083,1.106,0.248,1.319c0.143,0.092,0.491,0.014,1.36-1.466 c0.413-0.702,0.722-1.527,0.722-1.527s0.068-0.147,0.173-0.21c0.108-0.065,0.253-0.045,0.253-0.045l1.955-0.012 c0,0,0.587-0.071,0.683,0.196c0.1,0.279-0.219,0.93-1.018,1.995c-1.311,1.75-1.457,1.587-0.368,2.599 c1.04,0.967,1.255,1.437,1.291,1.496C18.815,15.627,17.907,15.684,17.907,15.684z"/>
                        </svg>
                    </a>
                </li>
                <li className={`${style.socialNetwork__item} ${style.tiktok__item}`}>
                    <a href="https://www.tiktok.com/" className={`${style.socialNetwork__link} ${bgcWhite ? '' : style.socialNetwork__link_white}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">
                            <path d="M 6 3 C 4.3550302 3 3 4.3550302 3 6 L 3 18 C 3 19.64497 4.3550302 21 6 21 L 18 21 C 19.64497 21 21 19.64497 21 18 L 21 6 C 21 4.3550302 19.64497 3 18 3 L 6 3 z M 12 7 L 14 7 C 14 8.005 15.471 9 16 9 L 16 11 C 15.395 11 14.668 10.734156 14 10.285156 L 14 14 C 14 15.654 12.654 17 11 17 C 9.346 17 8 15.654 8 14 C 8 12.346 9.346 11 11 11 L 11 13 C 10.448 13 10 13.449 10 14 C 10 14.551 10.448 15 11 15 C 11.552 15 12 14.551 12 14 L 12 7 z"/>
                        </svg>
                    </a>
                </li>
                <li className={`${style.socialNetwork__item} ${style.twitter__item}`}>
                    <a href="https://twitter.com/" className={`${style.socialNetwork__link} ${bgcWhite ? '' : style.socialNetwork__link_white}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">
                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M17.05,9.514 c0,0.086,0,0.171,0,0.343c0,3.257-2.486,7.029-7.029,7.029c-1.371,0-2.657-0.429-3.771-1.114c0.171,0,0.429,0,0.6,0 c1.114,0,2.229-0.429,3.086-1.029c-1.114,0-1.971-0.771-2.314-1.714c0.171,0,0.343,0.086,0.429,0.086c0.257,0,0.429,0,0.686-0.086 c-1.114-0.257-1.971-1.2-1.971-2.4c0.343,0.171,0.686,0.257,1.114,0.343c-0.686-0.6-1.114-1.286-1.114-2.143 c0-0.429,0.086-0.857,0.343-1.2c1.2,1.457,3,2.486,5.057,2.571c0-0.171-0.086-0.343-0.086-0.6c0-1.371,1.114-2.486,2.486-2.486 c0.686,0,1.371,0.257,1.8,0.771c0.6-0.086,1.114-0.343,1.543-0.6c-0.171,0.6-0.6,1.029-1.114,1.371 c0.514-0.086,0.943-0.171,1.457-0.429C17.907,8.743,17.479,9.171,17.05,9.514z"/>
                        </svg>
                    </a>
                </li>
                <li className={`${style.socialNetwork__item} ${style.instagram__item}`}>
                    <a href="https://www.instagram.com/" className={`${style.socialNetwork__link} ${bgcWhite ? '' : style.socialNetwork__link_white}`}>
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="48px" height="48px">
                            <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Footer;
