import React from 'react';

export default function SubgenresVoteTooltip(props) {

    return(
            <div className="tooltip">
                <h3>Vote for subgenres</h3>
                <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
                <div className="stats-sheet">                                            
                {props.subgenres.map((subgenre) =>
                    <div className="row" key = {subgenre.id}>
                        <h5>{subgenre.name}</h5>
                        <div className="graph-line">
                            <span className="line" style={{width: subgenre.score}}>{`${subgenre.score}%`}</span>
                        </div>
                    </div>    
                    )}
                </div>
                <p>
                    <button className="btn btn-shadow">Vote now</button>
                </p>
            </div>
        
    
        )
    };
