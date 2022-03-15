import React, { FC } from "react";
import GalleryRowHeader from "components/Gallery/GalleryRowHeader";
import GalleryItem from "components/Gallery/GalleryItem";

import { GalleryRow } from "modal/Gallery";

const GalleryRow: FC<GalleryRow> = ({ title, items }) => {
  return (
    <div className="flex flex-col">
      <GalleryRowHeader title={title} />
      <div className="grid grid-cols-3 gap-3 mt-4">
        {items.map((item, index) => (
          <GalleryItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default GalleryRow;
