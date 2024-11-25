import React, { memo } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CountryTileProps } from "../../types";
import { createWikiLink, numberWithSeparator } from "../../helpers";

const CountryTile: React.FC<CountryTileProps> = memo(({ country }) => {
  const {
    name: { common },
    capital,
    area,
    flags: { png },
  } = country;

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border hover:shadow-md">
      <div className="flex h-16 w-full gap-2 pb-2">
        <div className="max-w-16 rounded-lg object-fill">
          <LazyLoadImage
            src={png}
            width={64}
            className="h-full max-w-16 rounded-lg object-fill"
            alt={`Flag of $
          {common}`}
          />
        </div>

        <h2 className="grow overflow-hidden text-center text-xl font-bold">
          {common}
        </h2>
      </div>
      <div className="flex grow flex-col justify-between p-1">
        <div className="flex flex-col border-t">
          <p>
            Capital:<b> {capital}</b>
          </p>
          <p>
            Area:{" "}
            <b>
              {numberWithSeparator(area)} km<sup>2</sup>
            </b>
          </p>
        </div>
        <a
          href={createWikiLink(common)}
          className="pt-2 text-center font-thin text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          more in Wikipedia...
        </a>
      </div>
    </div>
  );
});

export default CountryTile;
