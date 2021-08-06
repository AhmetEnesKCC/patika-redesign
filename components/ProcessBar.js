function ProcessBar({ title, percentage }) {
  return (
    <div className="process-bar">
      <div className="title">{title}</div>
      <div className="bar text-white relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {percentage < 20 && percentage + "%"}
        </div>
        <div
          className="h-full bg-purple-main flex text-white items-center justify-center"
          style={{ width: percentage + "%" }}
        >
          {percentage >= 20 && percentage + "%"}
        </div>
      </div>
    </div>
  );
}

export default ProcessBar;
