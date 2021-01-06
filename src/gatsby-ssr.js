import React from "react";

export function onRenderBody({
  setHeadComponents,
  setPreBodyComponents,
  setPostBodyComponents
}) {

  setHeadComponents([
    <script
      key="woopra"
      type="text/javascript"
      src="js/woopra.js"
    />,
  ]);

  setPreBodyComponents([

  ]);

  setPostBodyComponents([

  ]);
};