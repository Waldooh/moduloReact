const PrimaryButton = ({text, type}) => {
    return (
        <a href="https://kodemia.mx" className={`btn btn-${type}`}>
            {text}
        </a>
    );
};

export default PrimaryButton