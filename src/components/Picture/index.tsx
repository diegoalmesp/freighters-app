// 563492ad6f91700001000001dc9aa6b52d8246b1a454f08bde71b654
import React, { useEffect, useState } from "react";

import { createClient, PhotosWithTotalResults, ErrorResponse } from "pexels";

/**
 * Diego:
 * in a bigger app I would move the process env constants to a config file
 */
const client = createClient(process.env.REACT_APP_PEXELS_API as string);

const Picture: React.FC<{ search: string }> = ({ search }) => {
  const [image, setImage] = useState<PhotosWithTotalResults>();
  const query = `${search} cargo`;

  useEffect(() => {
    async function fetchPhoto() {
      try {
        const photos = await client.photos.search({ query, per_page: 1 });
        setImage(photos as PhotosWithTotalResults);
      } catch (error: any) {
        const err = error as ErrorResponse;
        console.error(err.error);
      }
    }
    fetchPhoto();
  }, [search, query]);

  const alt = image?.photos[0].url;

  return <img src={image?.photos[0]?.src.landscape} alt={alt} width="600" />;
};

export default Picture;
