import Header from "./Header";
import NoteList from "./NoteList";
// import  { useState } from 'react';

const Home = ({ notes, setNotes, createAndNavigateToNewNote }) => {
  const isNoteEmpty = notes.length === 0;
  return (
    <>
      <Header createAndNavigateToNewNote={createAndNavigateToNewNote} />
      <div className="home-content">
        {isNoteEmpty ? (
          <div className="wrapper">
            <svg
              className="logo scribble-animation"
              xmlns="http://www.w3.org/2000/svg"
              width="244"
              height="145"
              viewBox="0 0 244 145"
              fill="none"
            >
              <path
                d="M142.556 14.2295C83.2875 17.4332 33.3868 111.108 114.111 125.785C139.9 130.474 158.999 122.059 181.667 113.341C196.556 107.614 194.556 69.0428 194.556 56.0073C194.556 39.7331 180.331 25.3391 166.111 18.2295C148.447 9.3974 106.877 -5.68838 88.3337 6.67392C68.9782 19.5776 37.7291 43.1463 34.7782 68.2295C30.737 102.579 80.284 106.229 103.889 106.229C123.504 106.229 141.308 108.863 156.778 94.2295C167.037 84.5249 194.683 68.2616 185.667 50.2295C173.764 26.423 142.091 45.9344 130.111 58.2295C119.405 69.2176 115.355 93.6482 112.778 108.007C112.258 110.905 109.138 145.246 113.223 142.674C129.305 132.548 142.542 109.014 153.667 94.2295C165.252 78.8336 174.556 68.1294 174.556 48.6739C174.556 12.2965 115.15 57.4865 106.778 74.2295C88.3002 111.185 134.26 77.1414 141.889 60.4517C146.73 49.8634 151.461 22.2295 132.778 22.2295C122.951 22.2295 111.373 20.5414 101.667 22.2295C86.6761 24.8366 140.351 66.2427 143 68.2295C171.21 89.3866 201.862 108.323 233.223 124.452C252.061 134.14 237.404 123.426 228.778 118.229C210.797 107.397 191.775 98.6358 171.889 92.0073C126.399 76.8438 78.5372 68.9582 33.667 52.0073C29.0513 50.2635 10.2185 32.8973 4.77816 34.4517C-2.8698 36.6368 7.46247 47.1748 9.66705 48.6739C34.9092 65.8386 60.9192 75.0454 91.4448 77.3406C136.868 80.7559 165.939 72.2166 200.778 45.3406C216.126 33.5005 206.336 22.0173 189.667 19.1184C143.256 11.0469 134.896 75.667 111.445 99.1184C96.8149 113.748 55.5356 56.3341 73.667 35.785C92.2629 14.7097 117.287 -14.3862 134.556 16.4517C143.676 32.7372 158.556 69.939 158.556 88.2295C158.556 102.33 162.503 125.66 142.556 126.229C133.094 126.5 123.577 126.229 114.111 126.229C87.1222 126.229 109.286 127.376 122.556 123.563C138.891 118.869 256.359 65.3508 198.556 42.2295"
                stroke="#d7f5b8"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <h2 className="word-mark-logo">Scribble</h2>
            <button className="startScribbling" onClick={createAndNavigateToNewNote}>
              Start Scribbling
            </button>
          </div>
        ) : (
          <NoteList notes={notes} />
        )}
      </div>
    </>
  );
};

export default Home;
