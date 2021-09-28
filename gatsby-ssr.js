import React from 'react';
import { v4 } from 'uuid';

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key={v4()}
      async={true}
      defer={true}
      data-cfasync={false}
      type={`text/javascript`}
      dangerouslySetInnerHTML={{
        __html: `
            window.civchat = {
              apiKey: "PJCwx7",
            };`,
      }}
    />,
    <script
      key={v4()}
      async={true}
      defer={true}
      data-cfasync={false}
      type={`text/javascript`}
      src={`https://mms.user.com/widget.js`}
    />,
  ]);
};
