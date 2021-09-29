import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          src='text/javascript'
          src='//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
          async
          defer
        />
        <script
          async
          defer
          data-cfasync={false}
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `
            window.civchat = {
              apiKey: "PJCwx7",
            };`,
          }}
        />
        ,
        <script
          async
          defer
          data-cfasync={false}
          type='text/javascript'
          src='https://mms.user.com/widget.js'
        />
        <script
          async
          defer
          type='text/javascript'
          src='//cdn.dni.nimbata.com/288803921.min.js'
        />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
