import Footer from "./Footer"

const Layout = ({ children }) => {
    return (  
        <div className="vierer">
            { children }
            <Footer />
        </div>
    );
}

export default Layout;