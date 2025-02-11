import { useState } from "react";

function Table({ num }) {
  return <div className="box">{num}</div>;
}

export default function App() {
  const [rows, setRows] = useState(null);
  const [columns, setColumns] = useState(null);
  const [boxes, setBoxes] = useState({
    rowCount: null,
    columnCount: null,
  });

  function handleSubmit(event) {
    event.preventDefault();
    setBoxes({ rowCount: rows, columnCount: columns });
    console.log("done");
  }

  return (
    <div className="page-container">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="rows-input">Rows</label>
          <input
            type="number"
            id="rows-input"
            value={rows}
            required
            onChange={(event) => setRows(event.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="columns-input">Columns</label>
          <input
            type="number"
            id="columns-input"
            value={columns}
            required
            onChange={(event) => setColumns(event.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
      <div
        className="table-container"
        style={{
          width: "fit-content",
          display: "grid",
          gridTemplateRows: `repeat(${boxes.rowCount}, 1fr)`,
          gridAutoFlow: "column",
        }}
      >
        {[...Array(boxes.rowCount * boxes.columnCount)].map(
          (element, index) => {
            return <Table num={index + 1} />;
          },
        )}
      </div>
    </div>
  );
}
