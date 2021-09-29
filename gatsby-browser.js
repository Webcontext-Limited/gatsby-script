const addScript = (url) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
};

exports.onInitialClientRender = () => {
  window.onload = () => {
    addScript(
      '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    );
  };
};
