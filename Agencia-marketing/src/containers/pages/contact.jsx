import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/footer"
function Contact (){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-36 pl-3">
                Contact
             <Footer/>
            </div>
        </Layout>
    )
}
export default Contact 