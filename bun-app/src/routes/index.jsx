import { paintings } from '../paintings';
import { GameIFrame } from './contact';
import { contacts } from '../contacts';
import * as sc from '../styledComponents'
import { useState, useEffect, useRef, createRef, useMemo } from 'react';
import { FireballLeft, FireballRight } from '../fireball';


function getImageFromTag(matchingPaintings) {
  let painting;
  painting = matchingPaintings[getRandomInt(0, matchingPaintings.length)];
  return painting;
}


export default function Index() {

  const painting = paintings[getRandomInt(0, paintings.length)]
  const matchingPaintings = paintings.filter((p) =>
  p.tags.includes("Discovery")
)
  return (
    <div style={{ justifyContent: 'center' }}>
      <sc.BackgroundDiv style={{ backgroundImage: `url(${getImageFromTag(matchingPaintings
).imgSource})` }} />
      <sc.ContentDiv>
        <sc.HeaderDiv>
        <FireballLeft/>
        <sc.FrontpageHeader>SapphInk's Lair of Wonders</sc.FrontpageHeader>
        <FireballRight/>
        </sc.HeaderDiv>
        <sc.SocialsDiv>
          <li><a href='https://twitter.com/Sapph_Ink'>Twitter:<br />@Sapph_Ink</a></li>
          <li><a href='https://sapph1nk.tumblr.com/'>Tumblr:<br />@sapph1nk</a></li>
          <li><a href='https://www.tiktok.com/@sapph_ink'>Tiktok:<br />@sapph_ink</a></li>
          <li><a href='https://mastodon.gamedev.place/@Sapph_Ink'>Mastadon:<br />@Sapph_Ink</a></li>
        </sc.SocialsDiv>
        <div>
          <sc.Showcase tags="Discovery"></sc.Showcase>
          <sc.Showcase tags="Rage"></sc.Showcase>
          <sc.Showcase tags="Ttrpg"></sc.Showcase>
          <sc.Showcase tags="Megacorp"></sc.Showcase>
        </div>
        <p id="zero-state">
          This website was created by SapphInk's friend Nico
        </p>
      </sc.ContentDiv>
    </div>
  );
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const ScrollerWrapper = (props) => {

  return
}

export const MyComponent = (props) => {
  const myRef = createRef();
  const [isEndReached, setIsEndReached] = useState(false);
  const [isStartReached, setIsStartReached] = useState(true);
  const containerRef = useRef(null);
  let timeoutRef = useRef(null);
  let selectedPaintings2;


  const selectedPaintings = useMemo(() => {
    const uniqueImages = [];

    const matchingPaintings = paintings.filter((p) =>
    p.tags.includes(props.tags)
  );

    while (uniqueImages.length < 3) {
      const newImage = getImageFromTag(matchingPaintings);
      if (!uniqueImages.includes(newImage)) {
        uniqueImages.push(newImage);
      }
    };
    
    return uniqueImages;
  }, [props.tags]);

  console.log(selectedPaintings);

  const handleScroll = () => {


    const container = containerRef.current;
    console.log(container.scrollLeft + " : " + (container.scrollWidth - container.clientWidth) + " : " + container.clientWidth)
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 100) {
      setIsEndReached(true);
      console.log("here")

    }
    else if (container.scrollLeft < 100) {
      setIsStartReached(true);
      console.log("here2")

    }
    else {
      setIsStartReached(false);
      setIsEndReached(false);
    }
  };

  const handleWheel = (event) => {
    const container = containerRef.current;
    const delta = event.deltaY || event.detail || event.wheelDelta;

    // calculate the maximum scroll position of the container
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    // calculate the new scroll position after the user has scrolled
    const newScrollLeft = container.scrollLeft + delta;

    if (newScrollLeft < 0 || newScrollLeft > maxScrollLeft) {
      // release the scrolling so the parent component can handle it
      container.style.overscrollYBehavior = 'none';
    } else {
      // scroll the container by the same amount as the delta
      container.scrollLeft += delta;
      // prevent the browser from scrolling the page
      //event.preventDefault();

      // Add a timeout to reset the overflow style after a short delay
      // to prevent issues with the overscroll effect lingering
      container.style.overscrollYBehavior = 'contain';

      // clearTimeout(timeoutRef.current);
      // timeoutRef.current = setTimeout(() => {
      //   containerRef.style.overscrollYBehavior = 'contain';
      // }, 100);
    }
  };

  const handleRightArrowClick = () => {
    const container = containerRef.current;
    console.log(((container.scrollWidth - container.clientWidth) / 2))
    console.log(container.scrollLeft < ((container.scrollWidth - container.clientWidth) / 2))
    console.log((container.scrollLeft >= (((container.scrollWidth - container.clientWidth) / 2)-100)))

    if (container.scrollLeft < (((container.scrollWidth - container.clientWidth) / 2)-100)) {
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    } else if (container.scrollLeft >= (((container.scrollWidth - container.clientWidth) / 2)-100)) {
      container.scrollLeft = (container.scrollWidth - container.clientWidth)
    }
  }

  const handleLeftArrowClick = () => {
    const container = containerRef.current;
    if (container.scrollLeft > ((container.scrollWidth - container.clientWidth) / 2)+100) {
      container.scrollLeft = (container.scrollWidth - container.clientWidth) / 2;
    } else if (container.scrollLeft <= (((container.scrollWidth - container.clientWidth) / 2)+1200)) {
      container.scrollLeft = 0
    }
  }

  useEffect(() => {
    const container = containerRef.current;
    container.addEventListener('wheel', handleWheel);

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center"}}>
      {!isStartReached ?
        <sc.LeftInlineButton onClick={handleLeftArrowClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path fill="#fffaef" d="M560.615 802.153 333.847 575.385l226.768-227.153 32.615 32.614-194.154 194.539L593.23 769.538l-32.615 32.615Z" /></svg>
        </sc.LeftInlineButton>
        : null
      }
      <sc.GameContainer ref={containerRef} onWheel={handleWheel} onScroll={handleScroll}>
        {selectedPaintings.map((painting) => (
          <sc.HorzPaintingFrame key={painting.id} src={painting.imgSource} alt={painting.title} />
        ))}
      </sc.GameContainer>
      {!isEndReached ?
        <sc.RigthInlineButton onClick={handleRightArrowClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path fill="#fffaef" d="m375.385 802.153-32.615-32.615 194.154-194.153L342.77 380.846l32.615-32.614 226.768 227.153-226.768 226.768Z" /></svg>
        </sc.RigthInlineButton>
        : null}
    </div>
  );
};