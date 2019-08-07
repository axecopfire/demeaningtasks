import React from "react";
import '../styles/sass/crt.scss';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

export default function() {
  return (
    <>
      <input
        css={css`
          display: none;
          background: red;
        `}
        type="checkbox"
        id="switch"
        checked
      />
      <label
        css={css`
          display: none;
        `}
        for="switch"
        class="switch-label"
      >
        Turn
      </label>

      <div class="container">
        <iframe
          title="codepen"
          src="https://codepen.io"
          class="screen"
          width="800"
          height="600"
        />
        <div class="overlay">AV-1</div>
      </div>
    </>
  );
}
