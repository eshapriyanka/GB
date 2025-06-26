import { useEffect, useState } from "react";

const NewsTicker = () => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Temporary: use local JSON or replace with your backend endpoint
    fetch("/opportunities.json")
      .then((res) => res.json())
      .then((data) => setNewsItems(data))
      .catch((err) => console.error("Failed to fetch news:", err));
  }, []);

  return (
    <div className="gradient-bg py-3 text-white overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...newsItems, ...newsItems].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="news-ticker mx-8 text-lg font-medium hover:underline"
          >
            🔗 {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
