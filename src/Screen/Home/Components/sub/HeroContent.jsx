import { motion } from 'framer-motion';
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from '../../../../utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';

const HeroContent = () => {
    
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px] text-white">
              Fullstack Developer Portfolio
            </h1>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
            <span>
              Providing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {' '}
                the best{' '}
              </span>
              exprience
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            As a dedicated Full Stack Web Applications Developer, I bring a
            comprehensive understanding of end-to-end web development processes.
            My expertise spans front-end to back-end development, ensuring
            seamless, efficient, and high-quality web application delivery. I am
            adept at creating responsive, user-friendly interfaces, and robust
            backend functionalities. Recently, I have developed a keen interest
            in creative coding, which has further enhanced my ability to build
            visually appealing and innovative websites. I invite you to explore
            my portfolio to witness the blend of creativity and technical acumen
            in my projects.
          </motion.p>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Learn More!
          </motion.a>
        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full flex justify-center items-center"
        >
          <img
            src="/mainIconsdark.svg"
            alt="work icons"
            className="h-[650px] w-[650px]"
          />
        </motion.div>
      </motion.div>
    );
}

export default HeroContent