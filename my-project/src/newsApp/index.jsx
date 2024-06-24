import { useEffect, useState } from "react";

const News = () => {
  // State
  const [news, setNews] = useState([]);
  const [searchQuery, setSearchQuery] = useState("react");
  const [url,setUrl] = useState(`https://api.allorigins.win/raw?url=http://hn.algolia.com/api/v1/search?query=${searchQuery}`)

  // Fetch news
  const fetchNews = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setNews(data.hits))
  };

  // Effect
  useEffect(() => {
    fetchNews();
  }, [url]);

  // Handle input change
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://api.allorigins.win/raw?url=http://hn.algolia.com/api/v1/search?query=${searchQuery}`)
    fetchNews();
  };

  return (
    <div>
      <h2>News</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchQuery} onChange={handleChange} />
        <button type="submit">Search News</button>
      </form>
      {news.map((n, i) => (
        <p key={i}>{n.title}</p>
      ))}
    </div>
  );
};

export default News;
