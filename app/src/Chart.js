import React, { useState, useEffect } from "react";

const GetData = () => {
  const [albums, setArtist] = useState([]);

  useEffect(() => {
    fetch(
      "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=kanye&api_key=7ebc4d450f175fa75d3260763df487fb&format=json"
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setArtist(res.data);
      })
      // let data = json;
      // let allAlbums = data.topalbums.album;
      // allAlbums.sort((a, b) => b.playcount - a.playcount);
      // const size = 3;
      // const topThree = allAlbums.slice(0, size);
      // console.log(topThree);
      // const [item] = topThree;
      // console.log(item);
      // setArtist();
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ul>
        {albums &&
          albums.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
    </div>
    // <div>
    //   {album && (
    //     <div>
    //       <img src={album.image[3]["#text"]} alt="" />
    //     </div>
    //   )}
    // </div>
  );
};
export default GetData;
