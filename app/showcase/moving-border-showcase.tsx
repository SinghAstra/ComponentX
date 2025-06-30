import React from "react";
import MovingBorder from "../ui/moving-border";
import ShowCase from "./showcase";

const MovingBorderShowCase = () => {
  return (
    <ShowCase>
      <MovingBorder className="rounded">
        <div className="bg-muted/70 backdrop-blur-sm px-3 py-1">
          Moving Border
        </div>
      </MovingBorder>
    </ShowCase>
  );
};

export default MovingBorderShowCase;
