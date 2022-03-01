import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';
import { IoCopyOutline } from 'react-icons/io5';
import { Button } from './UI/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export const LinkItem = ({ link, deleteUrl }) => {
	const { id, full_link, short_link } = link;

	const shortOriginalLink = (url) => {
		return url.length > 20 ? url.slice(0, 25) + '...' : url;
	};

	return (
		<StyledLink key={id}>
			<span> {shortOriginalLink(full_link)}</span>
			<a href={full_link} rel='noreferrer' target='_blank'>
				{short_link}
			</a>
			<div>
				<CopyToClipboard text={short_link}>
					<Button
						onClick={() =>
							navigator.clipboard.writeText(short_link)
						}
					>
						Copy
					</Button>
				</CopyToClipboard>
                <AiOutlineDelete onClick={() => deleteUrl(id)}/>
			</div>

		</StyledLink>
	);
};

const StyledLink = styled.li`
	background: ${({ theme }) => theme.colorUi};
    width: 100%;
	list-style: none;
	padding: 1rem;
	border-radius: 0.5rem;
	font-size: var(--fs-md);
	font-family: var(--family);
	display: flex;
	flex-direction: column;
	position: relative;
    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        >:last-child{
            margin: 0 0 0 1rem;
        }
    }
	span {
		display: block;
		align-self: start;
		margin-left: 3rem;
	}

	a {
		text-decoration: none;
		color: blue;
		cursor: pointer;

	}
	> *:not(:last-child) {
		margin: 0 0 0.5rem 0;
	}
	svg {
		position: absolute;
		top: 10%;
		right: 5%;
	}
	@media (min-width: 680px) {
		flex-direction: row;
		align-items: center;
		padding: 1rem 2rem;
		justify-content: space-between;
		svg {
            cursor: pointer;
			position: static;
            font-size: 1.3rem;
            @keyframes rotate{
                0%{
                    transform: rotate(0);
                }
                25%{
                    transform: rotate(-30deg);
                }
                50%{
                    transform: rotate(0);
                }
                75%{
                    transform: rotate(30deg);
                }
                100%{
                    transform: rotate(0);
                }
            }
            :hover{

                animation: .45s ease-in  rotate;
            }
		}
        span{
            width: 220px;
        }

		> :first-child {
			align-self: center;
		}

		button {
			width: 100px;
		}
		> *:not(:last-child) {
			margin: 0;
		}
        a{
            padding: 0 0 0 1rem;
            flex: 0 0 10%;
        }
	}
`;

// const OldUrl = styled.span`
// 	display: block;
// 	align-self: start;
// 	margin-left: 3rem;
// `;

// const NewUrl = styled.a`
// 	text-decoration: none;
// 	color: blue;
// 	cursor: pointer;

// 	@media (min-width: 680px) {
// 		/* border-left: 2px solid #ada8a8;
// 		padding: .5rem 0 .5rem 2rem; */
// 		padding: 0 0 0 1rem;
// 	}
// `;
