import React from "react";
import { MappedJob } from "../../utils/types";
import JobBox from "../JobBox/JobBox";

type Props = {
  items: MappedJob[];
  setLikedJobs: React.Dispatch<React.SetStateAction<MappedJob[]>>;
};

const JobsList: React.FC<Props> = ({ items, setLikedJobs }) => {
  return (
    <>
      {items.map(item => {
        const isLiked = JSON.parse(window.localStorage.getItem("likes")!).find(
          (likedItem: MappedJob) => likedItem.id === item.id
        );

        return <JobBox key={item.id} item={item} setLikedJobs={setLikedJobs} isLiked={isLiked} />;
      })}
    </>
  );
};

export default JobsList;
