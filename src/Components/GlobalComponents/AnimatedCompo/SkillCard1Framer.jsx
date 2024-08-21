import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SkillCard1Framer = ({children, dVal=0.5}) => {
    const control = useAnimation();
    const [ref, inView] = useInView({  triggerOnce: true , threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const cardVarients = {
        hidden: {
            scale: 0.5,
            opacity: 0,
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: dVal,
                duration: 0.4,
                ease: "easeInOut",
                type: 'spring',
                bounce: 0.2,
                stiffness: 200,
                damping: 20,
            }
        }
    };

    return (
        <>
            <div ref={ref}>
                <motion.div
                    variants={cardVarients}
                    initial="hidden"
                    animate={control}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default SkillCard1Framer