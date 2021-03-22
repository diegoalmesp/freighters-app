// 563492ad6f91700001000001dc9aa6b52d8246b1a454f08bde71b654
import React, { useEffect, useState } from "react";

import { createClient } from "pexels";

const client = createClient(
  "563492ad6f91700001000001dc9aa6b52d8246b1a454f08bde71b654"
);

const Picture: React.FC<{ search: string }> = ({ search }) => {
  const [image, setImage] = useState<any>();
  const query = `${search} cargo`;

  useEffect(() => {
    if (search) {
      client.photos.search({ query, per_page: 1 }).then((photos) => {
        setImage(photos);
      });
    }
  }, [search, query]);

  return (
    // eslint-disable-next-line jsx-a11y/img-redundant-alt
    <img
      src={image?.photos[0]?.src.landscape}
      alt={image?.photos[0]?.url}
      width="600"
    />
  );
};

export default Picture;
