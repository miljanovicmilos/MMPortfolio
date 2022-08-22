import {Container} from "react-bootstrap";
import {motion} from "framer-motion";
import AnimatedText from "./animate/AnimatedText";
import {BsArrowRightShort} from "react-icons/bs";


function Hero() {

    const placeholderText = [
        {text: "I DESIGNED UNIQUE WEB / GRAPHIC EXPERIENCES Crafting digital experiences for businesses with a user interface and user experience focused approach"},
    ];
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    };

    return (
        <motion.div
            className="background-dark height100vh"
            initial="hidden"
            animate="visible"
            variants={container}
        >
            <div className="container heading-text">
                {placeholderText.map((item, index) => {
                    return <AnimatedText {...item} key={index}/>;
                })}

                <div className="w-auto d-flex mt-5 align-items-center justify-content-center">

                    <button className='button'>
                        <span className="button__hover-fill"></span>
                        <span className='button__pseudo' data-content='Button'>
                             <span className='button__text'>Button</span>
                        </span>
                    </button>
                </div>
            </div>

        </motion.div>
    );


}

export default Hero