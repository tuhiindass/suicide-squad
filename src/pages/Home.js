import { useState } from "react";
import { newsAPI } from "../services/api";

const Home = () => {
  const [news, setNews] = useState([]);

  const getNews = (e) => {
    var data = fetch(`${newsAPI}science`)
      .then((respnse) => respnse.json())
      .then((data) => {
        var newNews = data.data.map((e) => e);
        var news = newNews.map((e) => e);
        setNews(news);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <button
          onClick={getNews()}
          style={{
            padding: "16px",
            color: "green",
            margin: "16px",
          }}
        >
          GET ALL NEWS
        </button>
      </div>
      <div>
        {news.map((element, index) => {
          return (
            <div
              key={index}
              style={{
                maxWidth: "360px",
                margin: "auto",
              }}
            >
              <img
                src={element.imageUrl}
                alt=""
                width={360}
                height="360px"
              ></img>{" "}
              <h1>{element.author}</h1>
              <p>{element.content}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Home;
