import React from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import styled from 'styled-components';

interface ArrowToggleProps extends StyleProps {
	onClick: React.MouseEventHandler<SVGElement>;
}

interface StyleProps {
	isDisabled: boolean;
}

function ArrowToggle({ onClick, isDisabled }: ArrowToggleProps) {
	return (
		<IconContainer isDisabled={isDisabled}>
			{isDisabled ? (
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
			isDisabled ? 'cursor:default;' : 'cursor:pointer;'};
	}
`;

export default ArrowToggle;
