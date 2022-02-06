import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Preloader from '../components/preloader.js'
import SubgenresVoteTooltip from '../components/subgenres-vote-tooltip.js';
import PopularityResponsiveBar from '../components/popularity-responsive-bar.js';

export default function ArtistCard () {
 
    let { artistUuid } = useParams();
    // console.log("id artista je: " + artistUuid)
    const baseURL = 'https://run.mocky.io/v3/';
    const artistURL = `${baseURL}${artistUuid}`; 

    const [artistsData, setArtistsData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true);

      useEffect(() => {
        setLoading(true);
        axios.get(artistURL).then((response) => {
          setArtistsData(response.data);
          setLoading(false);
        }).catch(error => {
          setError(error);
          setLoading(false);
        });
      }, [artistURL]);
  

if (isLoading) {return <Preloader />;}
if (error) return <div className = "error"><div className ="error-msg"> Error: {error.message}</div></div>;
if (!artistsData) return <div className = "error"><div className ="error-msg"> "No post!"</div></div>;
//   console.log(artistsData.data.genre.id)

    return(
    <div className="page">     
        <div className="col visual">
            <figure>
                <img src={artistsData.data.image} alt={artistsData.data.name} />
                <figcaption>
                    <button className="btn btn-claim-music-id">Claim music_id</button>
                </figcaption>
            </figure>   
        </div>
       
        <div className="col-wrapper">      
            <div className="col info">
                <div className="col-content">            
                    <div className="info-wrapper">
                        <div className="title-wrapper">
                            <button className="btn btn-solid border btn-booking-request">Booking Request</button>
                            <h1 className="title">
                                { artistsData.data.name } {" "}
                                <div className="tooltip-wrapper"> 
                                    <span className="profile-claimed">Profile claimed</span> 
                                    <SubgenresVoteTooltip subgenres = {artistsData.data.subgenres} /> 
                                </div> {" "}
                                <span className="trending-icon">Trending</span> 
                            </h1>
                        </div>

                        <div className="row">
                            <button className="btn btn-save long">Follow</button>
                            <button className="btn btn-share">
                                Share
                                <span>Link copied to clipboard</span>
                            </button>
                        </div>

                        <div className="row">
                            <label>Origin</label>
                            <span className="btn btn-filter-tag">{artistsData.data.country.name}</span>
                        </div>

                        <div className="row">
                            <label>Genre</label>
                            <span className="btn btn-filter-tag">{artistsData.data.genre.name}</span>
                        </div>

                        <div className="row">
                            <label>Subgenres</label>
                            {artistsData.data.subgenres.map((subgenre) => 
                                  <span className="btn btn-filter-tag" key = {subgenre.id}>{subgenre.name}</span>
                            )}
                            <div className="tooltip-wrapper">
                                <button className="btn btn-add">Add subgenre</button>
                                <SubgenresVoteTooltip subgenres = {artistsData.data.subgenres} />
                            </div>
                        </div>
                    </div>
                    <div className="footer-detail">
                        <ul className="social-list">
                            {artistsData.data.social_links.map((socialMedia) => 
                                <li key = {socialMedia.channel}>
                                    <a href={socialMedia.link} className={`btn social-icon ${socialMedia.channel}`}>{socialMedia.channel}</a>
                                </li>
                            )}
                        </ul>

                        <div className="tooltip-wrapper">
                                <button className="btn btn-add">Add links</button>
                                <div className="tooltip">
                                    <h3>Got more info?</h3>
                                    <p>Add Place's links so everyone can see their social media highlights.</p>
                                    <p>
                                        <button className="btn btn-shadow">Add links</button>
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="col stats">
                <div className="col-content">
                   <div className="stats-sheet">
                        <label>Most popular in</label>
                        <PopularityResponsiveBar popularityData = {artistsData.data.popularity} />
                    </div> 
                </div>
            </div>
        </div>
        <button className="btn btn-scroll-down">Scroll down</button>
    </div>
    )
};
    
