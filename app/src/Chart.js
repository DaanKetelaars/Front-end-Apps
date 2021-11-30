import { useState, useEffect } from "react";

const GetData = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(
      "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=kanye&api_key=7ebc4d450f175fa75d3260763df487fb&format=json"
    )
      .then((res) => res.json())
      .then((json) => {
        let data = json;
        let albumsArray = data.topalbums.album;
        albumsArray.sort((a, b) => b.playcount - a.playcount);
        const size = 3;
        const topThreeAlbums = albumsArray.slice(0, size);
        console.log(topThreeAlbums);
        setAlbums(topThreeAlbums);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      {albums.map((album) => (
        <p>{album.name}</p>
      ))}
    </div>
  );
};

export default GetData;
