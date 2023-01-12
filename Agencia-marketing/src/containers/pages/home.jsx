import Header from "components/home/Header"
import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/footer"
import Incentives from "components/home/Incentives"
import UseCases from "components/home/UseCases"
import Features from "components/home/Features"
import CTA from "components/home/CTA"
import LogoCloud from "components/home/LogoCloud"
import BlogList from "components/home/BlogList"
function Home (){ 
    return(
        <Layout>
            <Navbar/>

            <div className="pt-36 pl-3">
                <Header/>
                <Incentives/>
                <UseCases/>
                <Features/>
                <CTA/>
                <LogoCloud/>
                <BlogList/>
                
             <Footer/>
            </div>
        </Layout>
    )
}
export default Home 