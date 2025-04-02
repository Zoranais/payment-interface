export interface InputProps {
    title?: string;
    placeholder?: string;
    error?: string;
    value: string;
    tooltip?: string;
    onChange: (value: string) => void | Promise<void>;
    format?: (value: string) => string;
}
