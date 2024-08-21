import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const TranslateXFramer = ({ children, XVal='100vw', durVal=1, fullHeight }) => {
    const control = useAnimation();
    const [ref, inView] = useInView({  triggerOnce: true, threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    const translateXVarients = {
        hidden: {
            x: XVal,
            opacity: 0,
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                deley: 0.5,
                duration: durVal,
            }
        }
    };

    return (
        <>
            <div className='transXframer-outer' ref={ref} style={{ height: fullHeight && '100%'}}>
                <motion.div
                    className='transXframer-inner'
                    variants={translateXVarients}
                    animate={control}
                    style={{ height: fullHeight && '100%'}}
                >
                    {children}
                </motion.div>
            </div>
        </>
    )
}

export default TranslateXFramer;