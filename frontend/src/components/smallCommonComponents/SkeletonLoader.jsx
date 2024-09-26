// import { cn } from "@/lib/utils"

// function Skeleton({
//   className,
//   ...props
// }) {
//   return (<div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />);
// }

// export { Skeleton }


import React from "react";
import { cn } from "@/lib/utils";

function Skeleton({ className, size = 40, ...props }) {
  return (
    <div
      className={cn("circle-loader", className)}
      style={{ width: size, height: size }}
      {...props}
    >
      <div className="spinner" />
    </div>
  );
}

export { Skeleton };


