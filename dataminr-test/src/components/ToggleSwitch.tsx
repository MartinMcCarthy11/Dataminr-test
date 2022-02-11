import styled from 'styled-components';

interface toggleProps {
	toggled: boolean;
	name: string;
	// disabled: boolean;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

function ToggleSwitch({ toggled, name, onChange }: toggleProps) {
	console.log(toggled);

	return (
		<ToggleContainer>
			<Toggle
				type='checkbox'
				name={name}
				id={name}
				defaultChecked={toggled}
				onChange={onChange}
			/>
			<ToggleLabel htmlFor={name} />
		</ToggleContainer>
	);
}

const ToggleContainer = styled.div`
	position: relative;
`;

const ToggleLabel = styled.label`
	position: absolute;
	top: 0;
	left: 0;
	width: 42px;
	height: 26px;
	border-radius: 15px;
	background: #bebebe;
	cursor: pointer;
	&::after {
		content: '';
		display: block;
		border-radius: 50%;
		width: 18px;
		height: 18px;
		margin: 3px;
		background: #ffffff;
		box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
		transition: 0.2s;
	}
`;

const Toggle = styled.input`
	opacity: 0;
	z-index: 1;
	border-radius: 15px;
	width: 42px;
	height: 26px;
	&:checked + ${ToggleLabel} {
		background: #4fbe79;
		&::after {
			content: '';
			display: block;
			border-radius: 50%;
			width: 18px;
			height: 18px;
			margin-left: 21px;
			transition: 0.2s;
		}
	}
`;

export default ToggleSwitch;
