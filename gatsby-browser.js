const addScript = (url, innerHTML) => {
  const script = document.createElement('script');
  script.type = 'text/javascript';
  if (url) {
    script.src = url;
  }
  script.innerHTML = innerHTML;
  document.body.appendChild(script);
};

const addContent = (content) => {
  const test = document.createElement('div');
  document.body.appendChild(test).innerHTML = 'hey';
  document.getElementById('trustbox').appendChild(test).innerHTML = content;
};

exports.onInitialClientRender = () => {
  setTimeout(() => addScript('//cdn.dni.nimbata.com/288803921.min.js'), 2000);
  /*
  document.onscroll = function () {
    addScript('//cdn.dni.nimbata.com/288803921.min.js');
  };
  */
  /*
  setTimeout(
    () =>
      addScript(
        '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js'
      ),
    5000
  );

 

  setTimeout(() => addScript('https://mms.user.com/widget.js'), 5000);
  setTimeout(
    () =>
      addScript(
        null,
        `
  window.civchat = {
    apiKey: "PJCwx7",
  };`
      ),
    5000
  );

  setTimeout(
    () =>
      addContent(`<div class="trustpilot-widget" data-locale="en-GB" data-template-id="53aa8912dec7e10d38f59f36" data-businessunit-id="5200f51800006400057311fa" data-style-height="140px" data-style-width="100%" data-theme="light" data-stars="1,2,3,4,5" data-review-languages="en">
  <a href="https://uk.trustpilot.com/review/marymonson.co.uk" target="_blank" rel="noopener">Trustpilot</a>
</div>`),
    5000
  );
  */
};

// window.onLoad=() =>
/*
<section>
      <div
        ref={ref}
        data-locale='en-GB'
        data-template-id='53aa8912dec7e10d38f59f36'
        data-businessunit-id='5200f51800006400057311fa'
        data-no-reviews='show'
        data-style-height='140px'
        data-style-width='100%'
        data-theme='dark'
        data-stars='5'
        data-review-languages='en'
        data-font-family='PT Sans'
        data-text-color='black'
      >
        <a
          href='https://uk.trustpilot.com/review/marymonson.co.uk'
          target='_blank'
          rel='noopener noreferrer'
        >
          Trustpilot
        </a>
      </div>
    </section>*/
