import './App.css';
import {Sidebar} from "./components/Sidebar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Airdrops from "./components/Airdrops";
import Farms from "./components/Farms";
import InfoHeader from "./components/InfoHeader";
import ErrorPage from "./components/ErrorPage";
import {GlobalContext} from "./components/GlobalContext";
import {useContext, useEffect, useState} from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        prevWidth: undefined,
        height: undefined,
        prevHeight: undefined
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize(prevState => ({
                width: window.innerWidth,
                prevWidth: prevState.width,
                height: window.innerHeight,
                prevHeight: prevState.height
            }));
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

function App() {

    const [connected, setConnected] = useState(false)
    const [sidebar, setSidebar] = useState(true)
    const state = useContext(GlobalContext)

    const size = useWindowSize();

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        if (size.prevWidth > 720 && size.width <= 720) {
            setSidebar(false)
        }
        if (size.prevWidth < 720 && size.width >= 720) {
            setSidebar(true)
        }
    }, [size])

    return (

        <Router>
            <GlobalContext.Provider value={{connected, setConnected, sidebar, setSidebar}}>
                <div className={sidebar ? "App SidebarOn" : "App"}>
                    <Sidebar/>
                    <div className="AppContent">
                        {/*<InfoHeader/>*/}
                        <Routes>
                            <Route path="/airdrops" element={<Airdrops/>}/>
                            <Route exact path="/farms" element={<Farms/>}/>
                            <Route path="/dashboard" element={<Dashboard/>}/>
                            <Route path="*" element={<ErrorPage/>}/>
                        </Routes>
                    </div>
                </div>
            </GlobalContext.Provider>
        </Router>
    );
}

export default App;
