export const validateLuhn = (cardNumber: string) => {
    const digits = cardNumber.replace(/\D/g, "").split("").map(Number);
    let sum = 0;
    let isEven = false;

    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];

        if (isEven) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }

        sum += digit;
        isEven = !isEven;
    }

    return sum % 10 === 0;
};

export const formatCardNumber = (value: string) => {
    const result = value.replace(/\D/g, "");

    return result
        .replace(/(\d{4})/g, "$1 ")
        .trim()
        .substring(0, 23);
};

export const formatCVC = (value: string) => {
    return value.replace(/\D/g, "").trim().substring(0, 3);
};

export const formatExpDate = (value: string) => {
    return value
        .replace(/\D/g, "")
        .trim()
        .replace(/(\d{2})(\d{0,2})/, (_, p1, p2) => (p2 ? `${p1}/${p2}` : p1))
        .substring(0, 5);
};
