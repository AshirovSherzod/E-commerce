import { memo } from "react";

import "./article.scss";
import { BsArrowRight } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const Article = ({ one, two, three }) => {
  const { pathname } = useLocation();
  return (
    <section className="article">
      {!pathname.includes("/blog") && (
        <div className="article__top">
          <h1>Article</h1>
          <button type="button">
            More Article <BsArrowRight />
          </button>
        </div>
      )}
      <div className="article__cards">
        <div className="article__card">
          <div className="article__card-img">
            <img src={one} alt="7 ways to deco home" />
          </div>
          <div className="article__card-title">
            <h2>7 ways to deco home</h2>
            <button type="button">
              Read More <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="article__card">
          <div className="article__card-img">
            <img src={two} alt="Kitchen organization" />
          </div>
          <div className="article__card-title">
            <h2>Kitchen organization</h2>
            <button type="button">
              Read More <BsArrowRight />
            </button>
          </div>
        </div>
        <div className="article__card">
          <div className="article__card-img">
            <img src={three} alt="Decor your bedroom" />
          </div>
          <div className="article__card-title">
            <h2>Decor your bedroom</h2>
            <button type="button">
              Read More <BsArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Article);
