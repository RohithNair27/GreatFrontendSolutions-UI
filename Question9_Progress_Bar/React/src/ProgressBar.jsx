export default function ProgressBar({ percent }) {
    let precentValue = percent > 100 || percent < 0 ? 0 : `${percent}%`;
    return (
      <div className="progress">
        <div className="real-progress" style={{ width: precentValue }}>
          {precentValue!==0?<span>{precentValue}</span>:''}
        </div>
      </div>
    );
  }
  