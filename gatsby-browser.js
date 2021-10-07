const addScript = (url, innerHTML) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  if (url) {
    script.src = url;
  }
  if (innerHTML) {
    script.innerHTML = innerHTML;
  }
  document.body.appendChild(script);
  script.async = true;
  script.defer = true;
};

exports.onInitialClientRender = () => {
  document.onscroll = function () {
    addScript('https://mms.user.com/widget.js');
    addScript(
      null,
      `
      window.civchat = {
      apiKey: "PJCwx7",
      };`
    );
    addScript(
      '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
    );
  };
  addScript('//cdn.dni.nimbata.com/288803921.min.js');
};
