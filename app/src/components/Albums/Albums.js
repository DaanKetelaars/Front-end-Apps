import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  const [result, setResults] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${result}&api_key=7ebc4d450f175fa75d3260763df487fb&format=json`
    )
      .then((res) => res.json())
      .then((json) => {
        let data = json;
        let albumsArray = data.topalbums.album;
        console.log(albumsArray);
        albumsArray.sort((a, b) => b.playcount - a.playcount);
        const size = 3;
        const topThreeAlbums = albumsArray.slice(0, size);
        setAlbums(topThreeAlbums);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [result]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="search"
            placeholder="search for artist..."
            onChange={(e) => setResults(e.target.value)}
            value={result}
          />
        </div>
      </form>
      <Link to="/album-info">
        <div className="albumCovers">
          {albums.map((album) => (
            <article key={album.name}>
              <ul>
                <li>
                  <h4>Album:</h4>
                  <h3>{album.name}</h3>

                  <img
                    src={album.image[3]["#text"]}
                    alt={`Cover album of ${album.name}`}
                  />
                  <p>
                    <span>Listeners:</span>
                    <br />
                    {album.playcount.toLocaleString("en-US")}
                  </p>
                </li>
              </ul>
            </article>
          ))}
        </div>
      </Link>
    </>
  );
};

export default Albums;
