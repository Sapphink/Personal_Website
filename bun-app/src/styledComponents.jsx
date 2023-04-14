import styled, { keyframes } from 'styled-components';
import { GameIFrame } from "./routes/contact";
import { NavLink } from 'react-router-dom';
import DownloadSvg from "./assets/download.svg"
import { MyComponent } from './routes';
import { FireballLeft, FireballRight } from './fireball';

export const PaintingFrame = styled.img`
  width: auto;
  height: auto;
  max-height: 80vh;
  max-width: 100%;
`

export const HorzPaintingFrame = styled(PaintingFrame)`
    flex: 1;
    max-height: 600px;
    height: 100%;
    max-width: auto;
    width: auto;
    border-radius: 8px;
    //disable blue highlight
  -webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-tap-highlight-color: transparent;
-webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
`;

export const GameContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 5em;
    overflow-x: scroll;
    margin: 5em;
    margin-left: 0;
    margin-right: 0;
    border-radius: 8px;
    overscroll-behavior-y: contain;
    /* disable browser scroll when scrolling over the container */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  //disable blue highlight
  -webkit-tap-highlight-color: rgba(0,0,0,0);
-webkit-tap-highlight-color: transparent;

`;

export const BackgroundDiv = styled.div`
        min-width: 100vw;
        height: 105vh;
        position: fixed;
        top: -1em;
        left: 10em;
        z-index: -1;
        background: no-repeat;
        background-size: cover;
        filter: blur(5px) grayscale(40%) brightness(50%);
        flex: 1
`;

export const ContentDiv = styled.div`
   padding: 5vw;
    padding-top: 0;
    max-width: 80rem;
    justify-content: center;
    margin: auto;
`;

export const SocialsDiv = styled.ul`
  border-radius: 5px;
  background-color: #fff8e7;
  flex: 1;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  & li {
    display: inline-block;
  }
  & li a {
    display: inline-block;
    text-align: center;
    color: purple;
    padding: 2rem;
    //padding-left: 5rem;
    //padding-right: 5rem;
    text-decoration: none;
  }
`;
export const NavH1 = styled.h3`
  border-bottom: solid 2px #e3e3e3;
  //position: fixed;
  margin: 0.5rem;
  margin-left: 0;
`
export const ContentUl = styled.ul`
flex: 2;
  margin: 0;
  //margin-top: 4em;
  padding: 0;
  padding-bottom: 3em;
  list-style: none;
  overflow: scroll;
  height: 100%;
  position: relative; /* add relative position to the parent element */
  /* disable browser scroll when scrolling over the container */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  
  /* &::after {
    pointer-events: none;
    position: absolute;
  content:'';
  width:100%;
  height:5em;    
  left: 0;
    bottom: 0em;
  background:linear-gradient(rgba(255,255,255,0) 15px, #ee0707);
  } */
`

export const PaintingsUl = styled(ContentUl)`
height: 20em;
padding-bottom: 0em;
`

export const UlWrapper = styled.div`
  flex: content;
`

export const NoScrollNav = styled.nav`
  flex: 10;
  overflow: auto;
  padding-top: 1rem;
  overflow-y: hidden;


  
  //overflow: hidden;
    /* disable browser scroll when scrolling over the container */
  /* &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none; */
`

export const NoScrollNavBottom = styled(NoScrollNav)`
  flex:13;
`

export const DownloadButton = styled.button`
  //position: fixed;
  margin: 0.5rem;
  padding: 1rem;
  border: 2px solid #fff8e724;
  text-align: center;
`

export const DownloadIcon = styled.svg`

	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='48' viewBox='0 96 960 960' width='48'%3E%3Cpath d='M237.694 875.999q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611V693.769h45.384v124.537q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h484.612q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V693.769h45.384v124.537q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H237.694ZM480 725.691l-165.69-165.69 32.614-32.23L457.308 637.77V269.078h45.384V637.77l110.384-109.999 32.614 32.23L480 725.691Z'/%3E%3C/svg%3E");
width: 1.2rem;
  height: 1.2rem;
  position: relative;
  display: inline-block;
  margin: 0.1rem;
`

export const HomeSearch = styled.div`
  //position: fixed;
  display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    border-bottom: 1px solid #e3e3e3;
    transform: translate(-5%, 0%);
`

export const LeftInlineButton = styled.button`
  //position: fixed;
    display: flex;
    position: absolute;
    left: 20em;
    flex: 1;
    transform: translate(0%, 0%);
    background: rgba(0,0,0, 0)
`

export const RigthInlineButton = styled.button`
  //position: fixed;
    display: flex;
    position: absolute;
    right: 2em;
    flex: 1;
    transform: translate(0%, 0%);
    background: rgba(0,0,0, 0)
`

export const TestDiv = styled.div`
  width: 100%;
  height: 37vh;
  overflow-x: auto;
  overflow-y: hidden;
  margin-bottom: 10px;
`;

export const ContentContainer = styled.div`
  margin-top: 4em;
  padding-bottom: 2em; /* Add some bottom padding */
  height: calc(100vh - 4em - 2em); /* Calculate height based on remaining space */
  overflow-y: auto; /* Enable vertical scrolling */
  -webkit-overflow-scrolling: touch; /* for smooth scrolling on iOS devices */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Showcase = styled(MyComponent)`
 width: 100%;
`;

export const TagButton = styled.button`
  /* button styles here */
  background-color: ${({ active }) => (active ? "#f08f34d3" : "#fffaef")};
  color: ${({ active }) => (active ? "white" : "black")};
`;

export const FrontpageHeader = styled.h1`
     //font-family: 'Playfair Display', serif;
     //font-family: 'Jim Nightshade';
     //font-family: 'Josefin Sans';
     font-family: 'Lavishly Yours', sans-serif;
     //font-family: 'Tillana';
  font-size: 4rem;
  text-align: center;
  color: #fff8e7;
  text-shadow: 5px 5px 0px rgba(0,0,0,1);
  margin-top: 2rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
 flex: 1;
`;

export const StyledFireballLeft = styled(FireballLeft)`
display: inline;
margin-right: 1rem; /* adjust as necessary */
`;

export const IconDiv = styled.div`
margin-top: 2.7rem;
`;

export const HeaderDiv = styled.div`
display: flex;

`;

export const TagsUl = styled.ul`
margin: 0;
padding-left: 0.5em;
padding-right: 0.5em;
  list-style: none;
  white-space: nowrap;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch; /* for smooth scrolling on iOS devices */
  display: flex;
  flex: 1;
    justify-content: space-between;
    gap: 1em;
    overflow-y: hidden;

    overscroll-behavior-y: contain;
  /* disable browser scroll when scrolling over the container */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`
export const LeftArrowDiv = styled.div`


`;

export const RightArrowDiv = styled.div`


`;

export const TagUlDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  // add these styles to position the arrow divs absolutely
  & > ${LeftArrowDiv}, & > ${RightArrowDiv} {
    position: absolute;
    top: 0;
  }

  & > ${LeftArrowDiv} {
    left: 0;
    transform: translateX(-100%) translateY(25%);

  }

  & > ${RightArrowDiv} {
    right: 0;
    transform: translateX(100%) translateY(25%);

  }
`;

export const PartyButton = styled.button`
padding: 0.5em 1em 0.5em 1em;
margin-top: 0.5em;
background-color: pink;
color: black;
`;

const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-5deg);
  }
  20% {
    transform: rotate(5deg);
  }
  30% {
    transform: rotate(-5deg);
  }
  40% {
    transform: rotate(5deg);
  }
  50% {
    transform: rotate(-2deg);
  }
  60% {
    transform: rotate(2deg);
  }
  70% {
    transform: rotate(-2deg);
  }
  80% {
    transform: rotate(2deg);
  }
  90% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const PartyHeader = styled.h1`
  font-size: 3rem;
  animation: ${shake} 4s ease-in-out infinite;
`;