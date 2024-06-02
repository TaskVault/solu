import {createContext, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import Nodes from "./pages/Nodes/Nodes.tsx";
import Select from "./pages/Select/Select.tsx";
import Terminal from "./pages/Terminal/Terminal.tsx";
import {useEthereum} from "./hooks/useEthereum.ts";
import './main.scss'

export const BlockchainContext: any = createContext(null);

const App = () => {
	const [chain, setChain] = useState('ethereum')
    const {account} = useEthereum();

    // temporary
    const address = '172.20.10.4';
    const port = '22';
    const username = 'solarnode';
    //

    return (
        <BlockchainContext.Provider value={{chain, setChain}}>
            <Router>
                <Routes>
                    <Route path="/" element={<Select/>}/>
                    <Route path="/nodes" element={<Nodes/>}/>
                    <Route path="/terminal" element={<Terminal ipAddress={address} port={port} username={username}/>}/>
                </Routes>
            </Router>
        </BlockchainContext.Provider>
    );
};

export default App;
