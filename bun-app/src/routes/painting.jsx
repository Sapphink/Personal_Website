import { Form, useLoaderData, useFetcher, } from "react-router-dom";
import { getPainting } from "../paintings";
import styled from 'styled-components';
import { DownloadButton, DownloadIcon, PaintingFrame } from "../styledComponents";
import DownloadSvg from "../assets/download.svg"
import React, { useState } from 'react';

export async function loader({ params }) {
    const painting = await getPainting(params.paintingId);
    return { painting };
}

export async function action({ request, params }) {
    
}


export default function Painting() {
    const { painting } = useLoaderData();
  const [overlay, setOverlay] = useState(false);

  function toggleOverlay() {
    setOverlay(!overlay);
  }
    

    return (
        <div>
            <div>
                <h1>
                    {painting.title ? (
                        <>
                            {painting.title}
                        </>
                    ) : (
                        <i>No Nasdme</i>
                    )}{" "}
                </h1>
            </div>
            <div>
            <PaintingFrame src={overlay ? (painting.imgSource2 ? painting.imgSource2 : painting.imgSource) : painting.imgSource} alt={painting.title}/>
                {painting.imgSource2 ? (
                    <DownloadButton onClick={toggleOverlay}>Toggle Overlay</DownloadButton>
                ) : (
                    <></>
                )}{" "}
                {painting.download ? (
                    <a href={overlay ? (painting.imgSource2 ? painting.imgSource2 : painting.imgSource) : painting.imgSource} download>
                        <DownloadButton>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 96 960 960" width="48"><path d="M237.694 875.999q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611V693.769h45.384v124.537q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846h484.612q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V693.769h45.384v124.537q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H237.694ZM480 725.691l-165.69-165.69 32.614-32.23L457.308 637.77V269.078h45.384V637.77l110.384-109.999 32.614 32.23L480 725.691Z"/></svg>
                            Download Image
                            </DownloadButton>
                        </a>
                ) : (
                    <></>
                )}{" "}
                
            </div>
        </div>
    );
}