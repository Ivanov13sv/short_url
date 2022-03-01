import styled from 'styled-components';

export const Input = (props) => <StyledInput {...props} />;

const StyledInput = styled.input`
	width: 100%;
	outline: none;
	border: none;
	padding: .9rem;
	border-radius: 0.5rem;
	font-size: var(--fs-md);
	font-family: var(--family);
    border: 2px solid transparent;
	@media (min-width: 680px) {
        :hover{
            background: #f3f3f3;
        }
        :focus{
            border: 2px solid teal;
        }
	}
`;
