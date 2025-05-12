const videoIds = [
  "QkS2BVjd7fM", //  video IDs
  "jDQF3iVrGYw",
  "kOjtaGxlTPs",
  "PKHLqDjDvjE",
  "ZIHVWUk1_PA",
  "yoHCaZ8vH30",
  //"Z1JCegYb06s",
  //"dJ8Xt6tAzzI",
  //"ZXW2S2ZHXbA",
  //"el8BvF9RN24"

];

const Video = () => {
  return (
    <div className="container py-4">
      <h2 className="text-light mb-4">🎬 All Videos</h2>
      <div className="row">
        {videoIds.map((id, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="ratio ratio-16x9">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`YouTube video ${index}`}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video;
