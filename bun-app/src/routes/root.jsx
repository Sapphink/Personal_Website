import {
  Outlet,
  NavLink,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getContacts } from "../contacts";
import { getPaintings } from "../paintings";
import { createGlobalStyle } from 'styled-components'
import * as sc from '../styledComponents'
import fireballSvg from '../assets/fireball.svg'
import { FireballLeft, FireballRight, LeftArrow, RightArrow } from "../fireball";

export async function action() {
  //const contact = await createContact();
  return;
}

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  const paintings = await getPaintings();

  paintings.sort((a, b) => {
    // Compare tags
    if (a.tags < b.tags) return -1;
    if (a.tags > b.tags) return 1;

    // If tags are equal, compare names
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;

    // If names are equal, return 0
    return 0;
  });

  return { contacts, paintings, q };
}





export default function Root() {
  const { contacts, paintings, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has(
      "q"
    );

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <GlobalStyle />
      <div id="sidebar">
        {/* <h1>React Router Contacts</h1> */}
        <sc.HomeSearch>
          <h2><NavLink to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" height="42" viewBox="0 96 960 960" width="42"><path d="M225.385 870.615h155.77v-245h197.69v245h155.77V488.693L480 296.77 225.385 488.564v382.051Zm-45.384 45.384V466.001L480 240.233l299.999 225.768v449.998H533.462v-245H426.538v245H180.001ZM480 583.385Z" /></svg>
          </NavLink></h2>
          <div className="form-container">
            <Form id="search-form" role="search">
              <input
                id="q"
                className={searching ? "loading" : ""}
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
                defaultValue={q}
                onChange={(event) => {
                  const isFirstSearch = q == null;
                  submit(event.currentTarget.form, {
                    replace: !isFirstSearch,
                  });
                }}
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={!searching}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </Form>
          </div>
        </sc.HomeSearch>
        {(q == "celebration") ?
        
        <NavLink to={`celebration`} ><sc.PartyButton>Super Secret Button</sc.PartyButton></NavLink>
        
        : null
        }
        
        <sc.NoScrollNav>
          <sc.NavH1>
            Games
          </sc.NavH1>
          {contacts.length ? (
            
              <sc.ContentUl>
                {contacts.map((contact) => (
                  <li key={contact.id}>
                    <NavLink to={`contacts/${contact.id}`}
                      className={({ isActive, isPending }) =>
                        isActive
                          ? "active"
                          : isPending
                            ? "pending"
                            : ""
                      }
                    >
                      {contact.title ? (
                        <>
                          {contact.title}
                        </>
                      ) : (
                        <i>No Name</i>
                      )}{" "}
                    </NavLink>
                  </li>
                ))}
              </sc.ContentUl>
            
          ) : (
            <p>
              <i>No games found</i>
            </p>
          )}
        </sc.NoScrollNav>
        
      
          <Paintings />
        
      </div>
      <div
        id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >

        <Outlet />
      </div>
    </>
  );
}



const GlobalStyle = createGlobalStyle`
    body {
      //font-family: 'Playfair Display', serif;
      //font-family: 'Jim Nightshade';
      font-family: 'Josefin Sans';
      //font-family: 'Lavishly Yours';
      //font-family: 'Tillana';
    }
       
  `



const Paintings = () => {
  const [selectedTag, setSelectedTag] = useState("Discovery");
  const { paintings } = useLoaderData();
  const paintingsByTags = paintings.reduce((acc, painting) => {
    const { tags, ...rest } = painting;
    if (!acc[tags]) {
      acc[tags] = [];
    }
    acc[tags].push(rest);
    return acc;
  }, {});

  const containerRef = useRef(null);
  const [isEndReached, setIsEndReached] = useState(false);
  const [isStartReached, setIsStartReached] = useState(true);

  const handleSelect = (tag) => {
    setSelectedTag(tag);
    const buttons = document.querySelectorAll(".selected");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  const selectedButton = document.querySelector(`button[value="${tag}"]`);
  if (selectedButton) {
    selectedButton.classList.add("selected");
  }
  };

  const handleScroll = () => {


    const container = containerRef.current;
    console.log(container.scrollLeft + " : " + (container.scrollWidth - container.clientWidth) + " : " + container.clientWidth)
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 1) {
      setIsEndReached(true);
      console.log("here")

    }
    else if (container.scrollLeft < 1) {
      setIsStartReached(true);
      console.log("here2")

    }
    else {
      setIsStartReached(false);
      setIsEndReached(false);
    }
  };

  return (
    <sc.NoScrollNavBottom>
      <sc.NavH1>
        Paintings
      </sc.NavH1>
      <sc.TagUlDiv>
      {!isStartReached ?
          <LeftArrow/>
        : null
      }
      
      <sc.TagsUl ref={containerRef} onWheel={(e) => {
    const container = e.currentTarget;
    const containerScrollPosition = container.scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY,
      behavior: 'smooth'
    });
  }} onScroll={handleScroll}>
        {Object.keys(paintingsByTags).map((tag) => (
          <Tag
          key={tag}
          tag={tag}
          active={tag === selectedTag}
          onClick={() => handleSelect(tag)}
        />
        ))}
      </sc.TagsUl>
      
      {!isEndReached ?
          <RightArrow/>
          : null
      }
      </sc.TagUlDiv>

      <sc.UlWrapper> 
      {selectedTag && (
  
          <sc.PaintingsUl>
            {paintingsByTags[selectedTag].map((painting) => (
              <li key={painting.id}>
                <NavLink to={`paintings/${painting.id}`}
                  className={({ isActive, isPending }) =>
                    isActive
                      ? "active"
                      : isPending
                        ? "pending"
                        : ""
                  }
                >
                  {painting.title ? (
                    <>
                      {painting.title}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                </NavLink>
              </li>
            ))}
          </sc.PaintingsUl>

      )}
      </sc.UlWrapper>
     </sc.NoScrollNavBottom>
  );
};

function Tag({ tag, active, onClick }) {
  return (
    <li>
      <sc.TagButton onClick={onClick} active={active}>
        {tag}
      </sc.TagButton>
    </li>
  );
}