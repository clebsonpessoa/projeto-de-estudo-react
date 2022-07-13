import Footer from "./Footer"
import Header from "../Header/Header"

    const Template = ({ children }) => {
    return(
        <>
            <Header />
            { children }
            <Footer />
        </>
    )
}

export default Template