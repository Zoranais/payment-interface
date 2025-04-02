import styled from "styled-components";

const LoaderWrapper = styled.div`
    width: 18px;
    height: 18px;

    animation: 1s linear 0s infinite normal both running spinner;

    @keyframes spinner {
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;

const Loader = () => {
    return (
        <LoaderWrapper>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2ZM0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9Z"
                    fill="white"
                    fillOpacity="0.16"
                />
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 1C8 0.447715 8.44772 0 9 0C13.9706 0 18 4.02944 18 9C18 9.55229 17.5523 10 17 10C16.4477 10 16 9.55229 16 9C16 5.13401 12.866 2 9 2C8.44772 2 8 1.55228 8 1Z"
                    fill="white"
                />
            </svg>
        </LoaderWrapper>
    );
};

export default Loader;
