import { ReactNode } from "react";

export interface ButtonProps {
    children: ReactNode;
    loadingChildren?: ReactNode;
    variant?: "primary" | "secondary";
    loading?: boolean;
    onClick?: () => void | Promise<void>;
}
