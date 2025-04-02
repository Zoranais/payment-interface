import { useFieldContext } from "../../hooks/useAppForm";
import { formatCVC } from "../../utils/cardNumberUtils";
import Input from "../Input/Input";

const CVCInput = () => {
    const field = useFieldContext<string>();

    return (
        <Input
            title="CVC"
            onChange={field.handleChange}
            value={field.state.value}
            placeholder="•••"
            error={field.state.meta.errors[0]?.message}
            format={formatCVC}
            tooltip="CVC is the last three digits on the back of your credit card"
        />
    );
};

export default CVCInput;
