import { AnimatePresence, motion } from "motion/react";
import { ButtonProps } from "./Button.props";
import { ButtonStyled } from "./Button.styled";
import Loader from "../Loader/Loader";
import useIsMobile from "../../hooks/useIsMobile";

const Button = ({ children, loadingChildren, variant = "primary", loading = false, onClick }: ButtonProps) => {
    const isMobile = useIsMobile();

    return (
        <ButtonStyled variant={variant} isMobile={isMobile} loading={loading} onClick={onClick}>
            <AnimatePresence mode="popLayout">
                {!loading ? (
                    <motion.span
                        key="button-content"
                        className="motion-content"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.12, ease: "easeOut" }}
                    >
                        {children}
                    </motion.span>
                ) : (
                    <motion.span
                        key="loading-content"
                        className="motion-content"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.12, ease: "easeOut" }}
                    >
                        <Loader />
                        {loadingChildren}
                    </motion.span>
                )}
            </AnimatePresence>
        </ButtonStyled>
    );
};

export default Button;
