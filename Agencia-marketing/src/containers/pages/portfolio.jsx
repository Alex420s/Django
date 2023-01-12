import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/footer"
function Portfolio (){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-36 pl-3">
             Portfolio
             <Footer/>
            </div>
        </Layout>
    )
}
export default Portfolio 