function FlexContainer({ children, className }) {
    return (
        <div className={className} style={{ display: 'flex' }}>
            {children}
        </div>
    );
}

export default FlexContainer;
