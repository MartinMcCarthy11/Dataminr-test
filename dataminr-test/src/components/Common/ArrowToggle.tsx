import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import styled from 'styled-components';

interface ArrowToggleProps extends StyleProps {
	onClick: React.MouseEventHandler<SVGElement>;
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
		<IconContainer isDisabled={isDisabled}>
			{arrowOrientation === 'up' && isDisabled ? (
				<BsChevronUp onClick={onClick} />
			) : (
				<BsChevronDown onClick={onClick} />
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
