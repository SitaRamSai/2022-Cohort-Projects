import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  // margin-right: -24px;

  /* Second Nav */
  margin-right: 24px; 

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const SubBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  padding: 10px;
  

  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const SubBtnLink = styled(Link)`
  border-radius: 4px;
  background: #000;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  /* Second Nav */
  margin-left: 24px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const HomeMain = styled.main`
  display: row;

`;

export const SubHeader = styled.div`
    background-color: wheat;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 25rem;
    padding: 0 10%;

`;

export const SubHeaderOutline = styled.div`
    display: flex;
    width: 100%;
    box-sizing: inherit;
    flex-direction: row;
    justify-content: space-between;
    // border: 1px solid black;

    
`;

export const SubHeaderTitle = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;


`;

export const SubHeaderImage = styled.img`
    margin-right: 10rem;
    height: 12rem;
    width: auto;
    right: 0px;
    // border: 1px solid black;


`;

export const Trending = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
  height: 25rem;
  padding: 10px;
  top: 20%;
  overflow: auto;

`;


export const TrendingTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 16px;
  margin-left: 10rem;
  margin-right: 10rem;
  padding-top: 40px;
  padding-top: 15px;
  width: 80%;
  border: 1px solid black;


`;

export const AllPosts = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 10%;
  border: 1px solid red;


`;

export const PostListWrap = styled.div`
  display: flex;  
  width: 50%;
  border: 1px solid black;

`;

export const Tags = styled.div`
  
  display: flex;
  flex-direction: column;
  border: 1px solid black;


`;

export const TagTitle = styled.h3`

`;

export const TagList = styled.ul`

`;