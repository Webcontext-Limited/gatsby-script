const addScript = (url, innerHTML) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = url;
  script.innerHTML = innerHTML;
  document.body.appendChild(script);
};

exports.onInitialClientRender = () => {
  addScript('//cdn.dni.nimbata.com/288803921.min.js');
  addScript('//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js');
  addScript('https://mms.user.com/widget.js');
  addScript(
    null,
    `
  window.civchat = {
    apiKey: "PJCwx7",
  };`
  );

  console.log('this is window.onload func');

  console.log('This is loaded by onInitialClientRender');
};

// window.onLoad=() =>
