import "./Hero.scss";

import ArrowBtn from "../../assets/arrow_btn.png";
import PlayIcon from "../../assets/play_icon.png";
import PauseIcon from "../../assets/pause_icon.png";

const Hero = ({
    HeroData,
    setHeroCount,
    HeroCount,
    setPlayStatus,
    PlayStatus,
}) => {
    return (
        <div className="hero">
            <div className="hero__text">
                <p>{HeroData.text1}</p>
                <p>{HeroData.text2}</p>
            </div>
            <div className="hero__explore">
                <p>Explore the Features</p>
                <img src={ArrowBtn} alt="" />
            </div>
            <div className="hero__dot-play">
                <ul className="hero__dots">
                    <li
                        onClick={() => setHeroCount(0)}
                        className={HeroCount === 0 ? "hero__dot orange" : "hero__dot"}
                    ></li>
                    <li
                        onClick={() => setHeroCount(1)}
                        className={HeroCount === 1 ? "hero__dot orange" : "hero__dot"}
                    ></li>
                    <li
                        onClick={() => setHeroCount(2)}
                        className={HeroCount === 2 ? "hero__dot orange" : "hero__dot"}
                    ></li>
                </ul>
                <div className="hero__play">
                    <img
                        onClick={() => setPlayStatus(!PlayStatus)}
                        src={PlayStatus ? PauseIcon : PlayIcon}
                        alt="Icon"
                    />
                    <p>See the Video</p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
