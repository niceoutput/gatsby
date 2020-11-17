import React from 'react';
import { ItemsGrid, ItemStyles } from '../styles/Grids';

const LoadingGrid = ({ count }) => (
  <ItemsGrid>
    {Array.from({ length: count }, (_, i) => (
      <div>
        <ItemStyles>
          <p>
            <span className="mark">loading ...</span>
          </p>
          <img
            src="data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAECAQAAADsOj3LAAAADklEQVR42mNkgANGQkwAAJoABWH6GPAAAAAASUVORK5CYII="
            className="loading"
            alt="loading"
            width="500"
            height="400"
          />
        </ItemStyles>
      </div>
    ))}
  </ItemsGrid>
);

export default LoadingGrid;
