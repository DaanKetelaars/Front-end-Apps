export const AlbumData = async () =>
  fetch(
    "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=kanye&api_key=7ebc4d450f175fa75d3260763df487fb&format=json"
  )
    .then((res) => res.json())
    .then((json) => {
      let data = json;
      let allAlbums = data.topalbums.album;
      allAlbums.sort((a, b) => b.playcount - a.playcount);
      const size = 3;
      const topThree = allAlbums.slice(0, size);
      return topThree;
    })
    .catch((error) => {
      console.log(error);
    });
