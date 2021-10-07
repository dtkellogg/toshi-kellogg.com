import React, {useState, useEffect} from "react";

// prop-types
import PropTypes from "prop-types";

// styles
const styles = {
  content: {
    fontSize: "15px",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "10rem",
    textAlign: "center",
  },
};

export default function Loading({ text = "Loading", speed = 300 }) {
  const [content, setContent] = useState(text);

  if(document.title !== "Toshi Kellogg | Developer") {
    document.title = "Toshi Kellogg | Developer";
  }

  useEffect(() => {
    if (content.charAt(0) !== "L") {
      document.title = "Toshi Kellogg | Developer";
    } else {
      document.title = content;
    }

    console.log(`content: ${content.charAt(0)}`)
  }, [content]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);
  

  // return <p style={styles.content}>{content}</p>;
  return <div className="dots-loader"></div>;
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
