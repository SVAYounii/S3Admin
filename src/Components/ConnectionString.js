export const ConnectionString = () => {// Initialize state with an initial value
    if (process.env.REACT_APP_API !== undefined) {
        console.log(process.env.REACT_APP_API);
        return (process.env.REACT_APP_API); // Update the state value using the setUrl function
    }
    else {
        //console.log("https://q3.testenvi.nl/%22)
        return ("https://localhost:7094");
    } 
}