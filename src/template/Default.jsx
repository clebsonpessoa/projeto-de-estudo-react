import Footer from "../components/Footer"
import Header from "../components/Header"

function Default({ Children }) {
    return(
      <>
        <Header />
        { Children }
        <Footer />
      </>
    )
    
}

export default Default 