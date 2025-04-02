import { ChangeEvent, useCallback, useState } from "react";
import { InputProps } from "./Input.props";
import { ErrorText, InputField, InputWrapper, Label, Tooltip, TooltipIcon } from "./Input.styled";
import { autoPlacement, offset, useFloating, useHover, useInteractions } from "@floating-ui/react";
import { Info } from "../SVG/SVG";

const Input = ({ title, placeholder, error, value, tooltip, onChange, format }: InputProps) => {
    const handleChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const inputValue = e.target.value;

            const value = format ? format(inputValue) : inputValue;
            onChange(value);
        },
        [format, onChange]
    );

    const [isOpen, setIsOpen] = useState(false);

    const { refs, floatingStyles, context } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "top",
        middleware: [autoPlacement({ allowedPlacements: ["top", "bottom"] }), offset(6)],
    });

    const hover = useHover(context);

    const { getReferenceProps, getFloatingProps } = useInteractions([hover]);

    return (
        <InputWrapper>
            <Label>{title}</Label>
            <div style={{ position: "relative" }}>
                <InputField type="text" value={value} onChange={handleChange} placeholder={placeholder} hasError={!!error} />
                {tooltip && (
                    <>
                        <TooltipIcon ref={refs.setReference} {...getReferenceProps()}>
                            <Info />
                        </TooltipIcon>
                        {isOpen && (
                            <Tooltip ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()}>
                                {tooltip}
                            </Tooltip>
                        )}
                    </>
                )}
            </div>
            {error && <ErrorText>{error}</ErrorText>}
        </InputWrapper>
    );
};

export default Input;
