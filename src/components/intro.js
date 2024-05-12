import { motion } from "framer-motion"

export default function Intro() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
            >
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-primary">
                        What kind of nonsense is this
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 1.5 }}
            >
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-secondary">
                        Put me on the Council and not make me a Master!?
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4, duration: 1.5 }}
            >
                <div className="chat chat-start">
                    <div className="chat-bubble chat-bubble-accent">
                        That's never been done in the history of the Jedi. It's insulting!
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 5.5, duration: 1.5 }}
            >
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-info">
                        Calm down, Anakin.
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 7, duration: 1.5 }}
            >
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-success">
                        You have been given a great honor.
                    </div>
                </div>
            </motion.div>


            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 8.5, duration: 1.5 }}
            >
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-warning">
                        To be on the Council at your age.
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 10, duration: 1.5 }}
            >
                <div className="chat chat-end">
                    <div className="chat-bubble chat-bubble-error">
                        It's never happened before.
                    </div>
                </div>
            </motion.div>


        </>
    );
}
