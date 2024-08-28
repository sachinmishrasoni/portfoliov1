import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const WavyText = ({ variant = 'body1', text = "Hello World! Welcome to Wavy Text Animation" }) => {
    // Split the text into words
    const words = text.split(' ');

    // Initialize animation control
    const controls = useAnimation();
    
    // Set up the intersection observer
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    // Animation variants for each word
    const wordVariants = {
        hidden: { opacity: 0, y: '100%', scale: 1.3 },
        visible: { opacity: 1, y: '0%', scale: 1 }
    };

    // Start animation when in view
    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return (
        <Typography
            ref={ref} // Attach ref to Typography for in-view detection
            component={motion.p}
            variant={variant}
            initial="hidden"
            animate={controls}
            transition={{ staggerChildren: 0.08 }} // Stagger word animations
            style={{ display: 'flex', flexWrap: 'wrap' }} // Ensure words wrap
        >
            {
                words.map((word, index) => (
                    <motion.span
                        key={`${word}-${index}`} // Ensure unique key for each word
                        variants={wordVariants} // Apply animation variants
                        transition={{ 
                            duration: 0.5, 
                            // ease: 'easeInOut' 
                            ease: [0.25, 0.1, 0.25, 1]
                            }} // Define duration of the transition
                        style={{ marginRight: '5px', display: 'inline-block' }} // Adjust spacing and inline block for words
                    >
                        {word}
                    </motion.span>
                ))
            }
        </Typography>
    );
};

export default WavyText;
