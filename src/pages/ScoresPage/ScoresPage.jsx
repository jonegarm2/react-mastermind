import React from 'react';

const ScoresPage = (props) => {
    return (
        <div>
            <h1>Scores Pages</h1>
            {props.scores.length ?
               props.scores.map(s => <p key={s._id}>Player:&nbsp;{s.initials}&nbsp;Guesses:&nbsp;{s.numGuesses}&nbsp;Time:&nbsp;{s.seconds}</p>)
            :
               <h2>No High Scores Yet</h2>}
        </div>
    );
}
    
export default ScoresPage;