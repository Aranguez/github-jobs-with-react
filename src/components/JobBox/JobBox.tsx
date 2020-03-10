import React, { useState } from "react";
import { MappedJob } from "../../utils/types";

export type Props = {
  item: MappedJob;
  setLikedJobs: React.Dispatch<React.SetStateAction<MappedJob[]>>;
  isLiked: boolean;
};

const JobBox: React.FC<Props> = ({ item, setLikedJobs, isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  const toggleLike = () => {
    const totalLikes: MappedJob[] = JSON.parse(window.localStorage.getItem("likes")!) || [];

    if (liked) {
      setLiked(false);
      const filteredLikes = totalLikes.filter(likedItem => likedItem.id !== item.id)
      setLikedJobs(filteredLikes);
      window.localStorage.setItem(
        "likes",
        JSON.stringify(filteredLikes)
      );
    } else {
      setLiked(true);
      setLikedJobs([...totalLikes, item]);
      window.localStorage.setItem(
        "likes",
        JSON.stringify([...totalLikes, item])
      );
    }

    
  };

  const { id, title, company } = item;
  const iconClass = liked ? "fa-heart" : "fa-heart-o";

  return (
    <div className="job-box" key={id}>
      <div id={id} className="content">
        <h3>{title}</h3>
        <p>{company}</p>
      </div>
      <div className="like">
        <i
          className={`fa ${iconClass}`}
          id={`${id}-liked`}
          data-testid="likeBtn"
          onClick={toggleLike}
        ></i>
      </div>
    </div>
  );
};

export default JobBox;
