import { useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();   

    return (
        <div className="Header">
            <a href="/" className={location.pathname === '/' ? 'ActiveHeaderLink' : 'HeaderLink'}>Home</a>
            <a href="/timeline" className={location.pathname === '/timeline' ? 'ActiveHeaderLink' : 'HeaderLink'}>Timeline</a>
            <a href="/quiz" className={location.pathname === '/quiz' ? 'ActiveHeaderLink' : 'HeaderLink'}>Quiz</a>
        </div>
    );
}; export default Header;