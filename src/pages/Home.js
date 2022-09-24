import Navigation from "../components/Navigation";
import HomeHeader from "../components/HomeHeader";
import HomeCollections from "../components/HomeCollections";
import HomeCTA from "../components/HomeCTA";
import Footer from "../components/Footer";

export default function Home(){
    return (
        <>
            <Navigation />
            <HomeHeader />
            <HomeCollections />
            <HomeCTA />
            <Footer />
        </>
    );
}