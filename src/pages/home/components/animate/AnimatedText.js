import React from "react";
import {motion} from "framer-motion";

// Word wrapper
const Wrapper = (props) => {
    // We'll do this to prevent wrapping of words using CSS
    return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = (props) => {
    // Framer Motion variant object, for controlling animation
    const item = {
        hidden: {
            y: "200%",
            color: "#ffffff",
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
        },
        visible: {
            y: 0,
            color: "#ffffff",
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75}
        }
    };
    const paragraph = {
        hidden: {
            y: "200%",
            color: "#ffffff",
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85}
        },
        visible: {
            y: 0,
            color: "#ffffff",
            transition: {ease: [0.455, 0.03, 0.515, 0.955], duration: 0.40}
        }
    }

    //  Split each word of props.text into an array
    const splitWords = props.text.split(" ");

    // Create storage array
    const words = [];
    const smallWords = []

    // Push each word into words array
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    for (const [, paragraph] of splitWords.entries()) {
        smallWords.push(paragraph.split(""));
    }

    // Add a space ("\u00A0") to the end of each word
    words.map((word) => {
        return word.push("\u00A0");
    });
    smallWords.map((word) => {
        return word.push("\u00A0");
    });

    const firstLine = words.slice(0, 3)
    const secondLine = words.slice(3, 6)
    const thirdLine = words.slice(6, 7)
    const fourthLine = smallWords.slice(7)
    console.log(fourthLine)

    // const secondLine = words.slice(3, 3)

    return (
        <div className="d-flex flex-column">
            <div className="first-line">
                {firstLine.map((word, index) => {
                    return (
                        <Wrapper key={index}>
                            {firstLine[index].flat().map((element, index) => {
                                return (
                                    <>
                                        <h1 style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                            <motion.span style={{display: "inline-block"}} variants={item}>
                                                {element}
                                            </motion.span>
                                        </h1>
                                    </>
                                );
                            })}
                        </Wrapper>
                    );
                })}
            </div>
            <div className="second-line">
                {secondLine.map((word, index) => {
                    return (
                        <Wrapper key={index}>
                            {secondLine[index].flat().map((element, index) => {
                                return (
                                    <>
                                        <h1 style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                            <motion.span style={{display: "inline-block"}} variants={item}>
                                                {element}
                                            </motion.span>
                                        </h1>
                                    </>
                                );
                            })}
                        </Wrapper>
                    );
                })}
            </div>
            <div className='d-flex align-items-center justify-content-center'>
                <div className="third-line">
                    {thirdLine.map((word, index) => {
                        return (
                            <Wrapper key={index}>
                                {thirdLine[index].flat().map((element, index) => {
                                    return (
                                        <>
                                            <h1 style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                                <motion.span style={{display: "inline-block"}} variants={item}>
                                                    {element}
                                                </motion.span>
                                            </h1>
                                        </>
                                    );
                                })}
                            </Wrapper>
                        );
                    })}
                </div>
                <div className="fourth-line">
                    {fourthLine.map((word, index) => {
                        return (
                            <Wrapper key={index}>
                                {fourthLine[index].flat().map((element, index) => {
                                    return (
                                        <>
                                            <p style={{overflow: "hidden", display: "inline-block"}} key={index}>
                                                <motion.span style={{display: "inline-block"}} variants={paragraph}>
                                                    {element}
                                                </motion.span>
                                            </p>
                                        </>
                                    );
                                })}
                            </Wrapper>
                        );
                    })}
                </div>
            </div>
            {/* {} */}
        </div>
    );
};

export default AnimatedCharacters;