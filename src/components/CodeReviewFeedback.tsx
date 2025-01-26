import React, { useState } from "react";
const initialAspects = [
  { id: 0, title: "Readability", upvote: 0, downvote: 0 },
  { id: 1, title: "Performance", upvote: 0, downvote: 0 },
  { id: 2, title: "Security", upvote: 0, downvote: 0 },
  { id: 3, title: "Documentation", upvote: 0, downvote: 0 },
  { id: 4, title: "Testing", upvote: 0, downvote: 0 },
];
const CodeReviewFeedback = () => {
  const [aspects, setAspects] = useState(initialAspects);
  const handleUpVote = (id) => {
    setAspects((prevAspects) =>
      prevAspects.map((aspect) =>
        aspect.id === id ? { ...aspect, upvote: aspect.upvote + 1 } : aspect
      )
    );
  };
  const handleDownVote = (id) => {
    setAspects((prevAspects) =>
      prevAspects.map((aspect) =>
        aspect.id === id ? { ...aspect, downvote: aspect.downvote + 1 } : aspect
      )
    );
  };
  return (
    <div className="cards" style={{ display: "block", textAlign: "center" }}>
      {aspects.map((aspect) => (
        <div
          key={aspect.id}
          className="card"
          style={{
            width: "30rem",
            textAlign: "center",
            padding: "20px",
            display: "inline-block",
            margin: "20px",
          }}
        >
          <h2>{aspect.title}</h2>
          <div className="flex my-30 mx-0 justify-content-around">
            <button
              style={{ margin: "10px", padding: "25px" }}
              onClick={() => handleUpVote(aspect.id)}
              className="bg-success"
              data-testid={`upvote-btn-${aspect.id}`}
            >
              👍 Upvote
            </button>
            <button
              style={{ margin: "10px", padding: "25px" }}
              onClick={() => handleDownVote(aspect.id)}
              className="bg-danger"
              data-testid={`downvote-btn-${aspect.id}`}
            >
              👎 Downvote
            </button>
          </div>
          <p className="my-10 mx-0" data-testid={`upvote-count-${aspect.id}`}>
            Upvotes: <strong>{aspect.upvote}</strong>
          </p>
          <p className="my-10 mx-0" data-testid={`downvote-count-${aspect.id}`}>
            Downvotes: <strong>{aspect.downvote}</strong>
          </p>
        </div>
      ))}
    </div>
  );
};

export default CodeReviewFeedback;
