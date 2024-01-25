import "./Background.scss";

import Video1 from "../../assets/video1.mp4";
import Image1 from "../../assets/image1.png";
import Image2 from "../../assets/image2.png";
import Image3 from "../../assets/image3.png";


const Background = ({ PlayStatus, HeroCount }) => {
    if (PlayStatus) {
        return (
            <video className="background fade__in" autoPlay loop muted>
                <source src={Video1} type="video/mp4" />
            </video>
        );
    } else if (HeroCount === 0) {
        return <img src={Image1} className="background fade__in" alt="background" />;
    } else if (HeroCount === 1) {
        return <img src={Image2} className="background fade__in" alt="background" />;
    } else if (HeroCount === 2) {
        return <img src={Image3} className="background fade__in" alt="background" />;
    }
};

export default Background;
