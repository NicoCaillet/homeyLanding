import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const wrapperVariants = {
    open: {
      scaleY: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    closed: {
      scaleY: 0,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  const itemVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        when: 'beforeChildren',
      },
    },
    closed: {
      opacity: 0,
      y: -15,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const actionIconVariants = {
    open: { scale: 1, y: 0 },
    closed: { scale: 0, y: -7 },
  };

  const Option = ({ text }: any) => {
    const asd = () => {
      setOpen(false);
      window.scrollTo({ top: 6000, behavior: 'smooth' });
    };
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => asd()}
        className="flex w-full cursor-pointer items-center gap-2 whitespace-nowrap rounded-md p-[0.1rem] text-xs font-medium text-slate-700 transition-colors hover:text-indigo-500"
      >
        <motion.span variants={actionIconVariants}></motion.span>
        <span className="text-lg text-white">{text}</span>
      </motion.li>
    );
  };

  return (
    <div className="flex items-center justify-center ">
      <motion.div animate={open ? 'open' : 'closed'} className="relative -mt-8">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className={
            'flex h-12 items-center gap-2 rounded-t-3xl bg-primary-button px-11 py-8 text-indigo-50 transition-colors hover:bg-primary-button'
          }
        >
          <span className="text-2xl font-medium">Choose city</span>
          <motion.span variants={iconVariants}>
            <FaAngleDown size={20} />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: 'top', translateX: '-50%' }}
          className="absolute left-[50%] top-[100%] flex w-[100%] flex-col gap-1 overflow-hidden rounded-b-3xl bg-primary-button p-2 shadow-xl  hover:bg-indigo-100"
        >
          <Option setOpen={setOpen} text="Madrid" />
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default StaggeredDropDown;
