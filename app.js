fetch("https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay")
  .then((response) => response.json())
  .then((data) => console.log(data));
