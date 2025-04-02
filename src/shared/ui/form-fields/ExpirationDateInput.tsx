import { useFieldContext } from "../../hooks/useAppForm";
import { formatExpDate } from "../../utils/cardNumberUtils";
import Input from "../Input/Input";

const ExpirationDateInput = () => {
    const field = useFieldContext<string>();

    return (
        <Input
            title="Expiration Date"
            onChange={field.handleChange}
            value={field.state.value}
            placeholder="MM/YY"
            error={field.state.meta.errors[0]?.message}
            format={formatExpDate}
        />
    );
};

export default ExpirationDateInput;
