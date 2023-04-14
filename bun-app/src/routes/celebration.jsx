import { useState, useEffect } from 'react';
import { PartyHeader, ContentDiv } from '../styledComponents';

export default function Celebration() {
    const [color, setColor] = useState('black');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(getRandomColor());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const getRandomColor = () => {
        const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div style={{ justifyContent: 'center' }}>
            <ContentDiv>
                <PartyHeader style={{ color }}>Happy Birthday Bunbuns!</PartyHeader>
                <p>
                    Welcome to my secret little birthday page! Thought i'd just make a small note saying some stuff lol. This has been quite the journey making this website. I'm kinda glad you don't like code, cause if you started looking at what i've made you'd quickly see just how fucking messy it is lmao. BUT it's 100% been worth it. Partly because i'm a nerd so i enjoyed the challenge of learning all this, even tho it's resulted in numerous headaches cause i forget what breaks are lmao. But mainly because it's been a gift for my best fried! and i felt like creating something was the perfect gift for artsy bunbuns (and we're already doing bunbun subscription lmao)
                </p>
                <p>
                    Now for the sappy stuff :) we've known eachother for years now and while we had some moments of not talking much, we've gotten to a point where NOT spending my day with you feels weird. I am forever grateful for you opening up to me recently, it means a lot to me that you felt comfortable enough to do so. I feel like we grow even closer every day and i enjoy it a lot. You're perfect for me. You can make me die laughing, you can share the most beautiful pieces of art you make, you can teach me about much of the world i dont know. Idk where im going with this other than i love ya buns! or as a wise woman once said: "love you NEERD!" 
                </p>
            </ContentDiv>
        </div>
    );
}