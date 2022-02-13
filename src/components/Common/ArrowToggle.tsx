import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import styled from 'styled-components';

interface ArrowToggleProps extends StyleProps {
	onClick: React.MouseEventHandler<HTMLDivElement>;
	arrowOrientation: string;
}

interface StyleProps {
	isDisabled: boolean;
}

function ArrowToggle({
	onClick,
	isDisabled,
	arrowOrientation,
}: ArrowToggleProps) {
	return (
		<IconContainer
			isDisabled={isDisabled}
			onClick={onClick}
			id='ArrowToggleId'
		>
			{arrowOrientation === 'up' && isDisabled ? (
				<BsChevronUp />
			) : (
				<BsChevronDown />
			)}
		</IconContainer>
	);
}

const IconContainer = styled.div<StyleProps>`
	svg {
		${({ isDisabled }: StyleProps) =>
			isDisabled ? 'cursor:pointer;' : 'cursor:default;'};
	}
`;

export default ArrowToggle;
