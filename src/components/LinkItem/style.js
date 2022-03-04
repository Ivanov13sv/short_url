import styled from "styled-components";

export const StyledLink = styled.li`
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
    color: ${({theme}) => theme.colorLink};
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