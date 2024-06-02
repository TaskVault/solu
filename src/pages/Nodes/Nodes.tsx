import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {BlockchainContext} from "../../App.tsx";
import change from '../../assets/change.svg';
import node from "../../assets/node.svg";
import Layout from "../../components/Layout/Layout.tsx";
import {blockchainsData} from "../Select/Select.tsx";

const Nodes = () => {
	// @ts-ignore
	const {blockhain, setBlockhain} = useContext(BlockchainContext);
	
	const [currentBlockhain, setCurrentBlockhain] = useState<any>(blockchainsData[0]);
	
	useEffect(() => {
		blockchainsData.filter((blockchainItem: any) => {
			if (blockchainItem.title === blockhain) {
				setCurrentBlockhain(blockchainItem);
			}
		});
		
		fetch(`http://localhost:3000/ssh-nodes/${currentBlockhain.title}/0x173920A5F6a57715B3242BE61F10b482C0A50A8A`)
			.then(response => response.json())
			.then(data => console.log(data))
			.catch((error) => {
				console.error('Error:', error);
			});
	}, []);
	
	const navigate = useNavigate();
	
	
	return (
		<Layout>
			<div className={"select__container"}>
				<div className={"select__back"}>
					<button onClick={() => navigate("/")}>
						<img src={change} alt="change"/>
					</button>
					
					
					<img className={'select__logo'} src={currentBlockhain?.img} alt="blockchain"/>
				</div>
				
				<h2 className={"select__title"}>List of nodes</h2>
				<div className={"select__wrapper"}>
					<button onClick={() => navigate('/terminal')} className={"select__blockhain"}>
						<img src={node} alt="blockchain"/>
						<p>Node 1</p>
					</button>
					
					<button className={"select__blockhain"}>
						<img src={node} alt="blockchain"/>
						<p>Node 2</p>
					</button>
					
					<button className={"select__blockhain"}>
						<img src={node} alt="blockchain"/>
						<p>Node 3</p>
					</button>
					
					<button className={"select__blockhain"}>
						<img src={node} alt="blockchain"/>
						<p>Node 4</p>
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default Nodes;
