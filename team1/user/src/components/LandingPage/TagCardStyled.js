import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Tags = styled.ul`

`;
export const TagButton = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding: 10px;

    @media screen and (max-width: 768px) {
        display: none;
`;

export const TagButtonLink = styled(Link)`
    border-radius: 4px;
    border: 1px solid black;
    background: #000;
    padding: 10px 22px;
    color: #fff;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
`;