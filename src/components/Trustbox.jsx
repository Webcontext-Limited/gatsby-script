import React, { useRef, useEffect } from 'react';

const TrustBox = ({
  widget = `53aa8912dec7e10d38f59f36`,
  height = '140px',
  width = '100%',
  sku = null,
  noReviews = 'show',
  theme = 'dark',
}) => {
  // Create a reference to the <> element which will represent the TrustBox
  const ref = useRef(null);
  useEffect(() => {
    // If window.Trustpilot is available it means that we need to load the TrustBox from our ref.
    // If it's not, it means the script you pasted into <head /> isn't loaded  just yet.
    // When it is, it will automatically load the TrustBox.
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);
  return (
    <section>
      <div
        ref={ref}
        data-locale='en-GB'
        data-template-id={widget}
        data-businessunit-id='5200f51800006400057311fa'
        data-sku={sku}
        data-no-reviews={noReviews}
        data-style-height={height}
        data-style-width={width}
        data-theme={theme}
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
    </section>
  );
};
export default TrustBox;
