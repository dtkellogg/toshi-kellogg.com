import React, {useState, useEffect} from "react";

// prop-types
import PropTypes from "prop-types";


export default function Loading({ text = "Loading", speed = 300 }) {
  const [content, setContent] = useState(text);

  if(document.title !== "Toshi Kellogg | Web Developer") {
    document.title = "Toshi Kellogg | Web Developer";
  }

  useEffect(() => {
    if (content.charAt(0) !== "L") {
      document.title = "Toshi Kellogg | Web Developer";
    } else {
      document.title = content;
    }
  }, [content]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);
  

  return <div className="dots-loader"></div>;
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
