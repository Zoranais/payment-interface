import { useFieldContext } from "../../hooks/useAppForm";
import { formatCardNumber } from "../../utils/cardNumberUtils";
import Input from "../Input/Input";

const CardNumberInput = () => {
    const field = useFieldContext<string>();

    return (
        <Input
            title="Card Number"
            onChange={field.handleChange}
            value={field.state.value}
            placeholder="1234 1234 1234 1234"
            error={field.state.meta.errors[0]?.message}
            format={formatCardNumber}
        />
    );
};

export default CardNumberInput;
