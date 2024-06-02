import {FC, useEffect, useRef, useState} from "react";
import 'xterm/css/xterm.css';
import {io, Socket} from 'socket.io-client';
import {Terminal as Xterm} from 'xterm';
import './terminal.scss'
import Layout from "../../components/Layout/Layout.tsx";

interface TerminalProps {
    ipAddress: string
    port: string
    username: string
}

const Terminal: FC<TerminalProps> = ({ipAddress, port, username}) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const termRef = useRef<Xterm | null>(null);
    const terminalContainerRef = useRef<HTMLDivElement | null>(null);
    const cellWidth = 9; // Adjust based on your font size
    const cellHeight = 17;

    // TODO: add chain execution on init 
    // useEffect(() => {
    //     window.location.href = "http://localhost:5000/"
    // })

    return (
        <Layout>
            <div>
                <h2 className={'terminal_title'}>Command Line</h2>
                <div id="terminal" ref={terminalContainerRef}></div>
            </div>
        </Layout>
    );
};

export default Terminal;
