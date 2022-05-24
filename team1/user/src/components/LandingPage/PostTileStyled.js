import styled from 'styled-components';
import { HiTrendingUp } from 'react-icons/hi'

export const Posts = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 80%;
    border:1px solid yellow;


  @media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    flex-direction: column;
    font-size: 1.7rem;
    cursor: pointer;
  }
`;

export const Num = styled.div`
    display: flex;
    width: 30%;
    margin: .5rem;
    border: 1px solid white;
`;

export const PostCount = styled.h2`
    
`;

export const Tile = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const UserDiv = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    border: 1px solid black;
`;

export const UserImg = styled(HiTrendingUp)`
    align-items: center;
    margin: 0 1rem;
`;

export const PostInfo = styled.div`
    display: flex;

`;

export const DateCreated = styled.p`

`;

export const ReadLength = styled.p`

`;




