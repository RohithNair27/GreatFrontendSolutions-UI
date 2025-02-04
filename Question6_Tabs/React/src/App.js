import { useState, useEffect } from "react";
export default function App() {
  const tabDefaultState = {
    html: {
      name: "HTML",
      isActive: false,
    },
    css: {
      name: "CSS",
      isActive: false,
    },
    js: {
      name: "JavaScript",
      isActive: false,
    },
  };
  const [tabState, setTabState] = useState(tabDefaultState);
  function onClickTab(param) {
    if (param === tabState.html.name) {
      setTabState({
        ...tabDefaultState,
        html: { isActive: true, name: "HTML" },
      });
    } else if (param === tabState.css.name) {
      setTabState({ ...tabDefaultState, css: { isActive: true, name: "CSS" } });
    } else {
      setTabState({
        ...tabDefaultState,
        js: { isActive: true, name: "JavaScript" },
      });
    }
  }
  useEffect(() => {
    setTabState({ ...tabDefaultState, html: { isActive: true, name: "HTML" } });
  }, []);
  return (
    <div>
      <div>
        <button
          className={tabState.html.isActive ? "active" : ""}
          onClick={() => onClickTab("HTML")}
        >
          HTML
        </button>
        <button
          className={tabState.css.isActive ? "active" : ""}
          onClick={() => onClickTab("CSS")}
        >
          CSS
        </button>
        <button
          className={tabState.js.isActive ? "active" : ""}
          onClick={() => onClickTab("JavaScript")}
        >
          JavaScript
        </button>
      </div>
      <div>
        {tabState.html.isActive && (
          <p>
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}
        {tabState.css.isActive && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}
        {tabState.js.isActive && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}
