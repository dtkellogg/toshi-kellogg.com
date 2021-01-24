import React from "react";

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
  const [content, setContent] = React.useState(text);

  React.useEffect(() => {
    if (content !== "Loading") {
      document.title = content;
    }
  });

  console.log(content);

  React.useEffect(() => {
    const id = window.setInterval(() => {
      setContent((content) => {
        return content === `${text}...` ? text : `${content}.`;
      });
    }, speed);

    return () => window.clearInterval(id);
  }, [text, speed]);

  // return <p style={styles.content}>{content}</p>;
  return <div class="dots-loader"></div>;
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
