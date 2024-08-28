import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import splitStringUsingRegex from '../../../utils/splitStringUsingRegex';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const AnimatedText = ({ variant = 'body1', text = "Enum Sam", }) => {
    
    const textChar = splitStringUsingRegex(text) || [];
    
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

    const charVarients = {
        hidden: { opacity: 0,  y: '0.25em' },
        reveal: { opacity: 1,  y: '0em' },
        // transition: {
        //     duration: 1,
        //     ease: [0.2, 0.65, 0.3, 0.9]
        // }
    }

    useEffect(() => {
        if (inView) {
            controls.start('reveal');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <Typography
            ref={ref}
            component={motion.p}
            variant={variant}
            initial="hidden"
            animate={controls}
            // whileInView={"reveal"}
            transition={{ staggerChildren: 0.02 }}
        >
            {
                textChar.map((char, index) => (
                    <motion.span
                        key={`${char}-${index}`}
                        variants={charVarients}
                        transition={{ duration: 0.02 }}
                    >
                        {char}
                    </motion.span>
                ))
            }
        </Typography>
    )
}

export default AnimatedText;