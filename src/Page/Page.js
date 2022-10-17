export const Page = ({title, children}) => {
    return(
        <>
        <h1> {title ? title : 'Default page title'} </h1>

       {children}

        </>
    )
} 