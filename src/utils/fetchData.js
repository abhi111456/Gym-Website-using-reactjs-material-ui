export const exerciseOptions={
    method: 'GET',
    
    params: {limit: '10'},
    headers: {
      'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'e0bd9c65b5msh6f502da7d93e949p1fb7f6jsn20a2f23e1359',
    },
  };
export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };