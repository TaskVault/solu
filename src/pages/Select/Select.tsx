import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import {BlockchainContext} from "../../App.tsx";
import ethereum from '../../assets/ethereum.svg';
import icp from '../../assets/icp.svg';
import polygon from '../../assets/polygon.png';
import Layout from "../../components/Layout/Layout.tsx";
import './Select.scss';

export const blockchainsData: any = [
	{
		id: 1,
		title: 'Ethereum',
		img: ethereum
	},
	{
		id: 2,
		title: 'Internet Computer Protocol',
		img: icp
	},
	{
		id: 3,
		title: 'Polygon',
		img: polygon
	}
]

const Select = () => {
	// @ts-ignore
	const {blockhain, setBlockhain} = useContext(BlockchainContext)
	
	const navigate = useNavigate();
	
	const onSelect = (e: any) => {
		// setBlockhain(e.target.innerText)
		navigate("/nodes");
	}
	
	return (
		<Layout>
			<div className={'select__container'}>
				<h2 className={'select__title'}>Select network</h2>
				<div className={'select__wrapper'}>
					{blockchainsData.map((blockchainItem: any) => (
						<button key={blockchainItem.id} className={'select__blockhain'} onClick={(e) => onSelect(e)}>
							<img src={blockchainItem.img} alt="blockchain"/>
							<p>{blockchainItem.title}</p>
						</button>
					))}
				</div>
			</div>
		</Layout>
	);
};

export default Select;
