export const CardPersonelVariants = {
    on:{
        y: 0,
        opacity : 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    off : {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
}

export const groupCardVariants = {
    on: {
        transition: {
            staggerChildren: 0.17,
            delayChildren: 0.2,
        }
    },
    off: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
            display: {
              when: "afterChildren" // delay: 1 - will work
            }
        }
    }
};

