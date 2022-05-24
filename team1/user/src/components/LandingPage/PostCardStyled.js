import { HiTrendingUp } from 'react-icons/hi'
import styled from 'styled-components';

export const Posts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;


export const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border: 1px solid #000;
    
`;

export const Wrap = styled.div`
    width: 73%;
    border: 1px solid #000;

    
`

export const UserDiv = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    padding-top: 1.5rem;
`;

export const UserImg = styled(HiTrendingUp)`
    margin: 0 1.5rem;
`;

export const UserName = styled.h4`
    margin: 0 1rem;

    &:hover {
        cursor: pointer;
    }
`;

export const PostInfo = styled.div`
    

`;

export const PostTitle = styled.h3`

`;

export const PostSubTitle = styled.h4`
    
`;

export const PostImage = styled.img`
    height: 100%;
    width: 25%;
    border: 1px solid #000;
`;

export const Container = styled.div`
    display: flex;
    padding: .5rem 0;
    border: 1px solid #000;
`

export const DateCreated = styled.p`
    margin: 0 1rem;
`;

export const ReadLength = styled.p`
margin: 0 1rem;
`;