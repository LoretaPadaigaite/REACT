export const Input = ({label}) => {
    return (
        <>
        {label && <label data-testId='label'>{label}</label>}
        <input data-testId='input'/>
        </>

    )
}