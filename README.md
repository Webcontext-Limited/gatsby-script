# How to reduce perfomance loss caused by third party scripts?

After implementing Google Analytics/Ads tracking, User.com chat widget, Trustpilot's trustbox and Nimbata call tracking scripts to the barebones Gatsby site then the perfomance on Lighthouse goes from 100 to 88, it then takes 3.8 seconds longer for the site to become interactive and the size of the site increases by 256kb.

## Questions

1. Is it possible to delay loading User.com, Trustpilot and Nimbata scripts? It is not vital for my site them to load immediately. There could easily be a few seconds delay. Alternatively Trustpilot and User.com could start loading whenever a scroll event is triggered or if a users scrolls to a particular place.
2. Are there any better methods available perfomance wise for adding Google Analytics and Googel Ads scripts than gatsby plugin gtag?
3. Are there any other ways to improve this repo's perfomance score on Lighthouse?

**Site's URL:** https://gatsbyscript.gatsbyjs.io
**Repo:** https://github.com/Webcontext-Limited/gatsby-script

## Perfomance loss timeline

### --> Empty gatsby project

- **Lighthouse Perfomance:** 100
- **Time to Interactive:** 1.0s
- **Total Blocking Time:** 10ms
- **Transfer Size:** 62.9kb

### --> Added plugin gatsby-cloud

RESULT:

- **Lighthouse Perfomance:** 100
- **Time to Interactive:** 0.8s (-0.8 sec)
- **Total Blocking Time:** 0ms (-10 ms)
- **Transfer Size:** 62.9kb (no change)

### --> Added GUA/Ads tracking scripts

_Script added before body tag via gatsby-plugin-google-gtag_

RESULT:

- **Lighthouse Perfomance:** 100
- **Time to Interactive:** 2.3s (+1.5 sec)
- **Total Blocking Time:** 70ms (+70 ms)
- **Transfer Size:** 174.7kb (+111.8 kb)

### --> Added User.com chat widget

_Script added before body tag via SSR API using setPostBodyComponents method._

RESULT:

- **Lighthouse Perfomance:** 96 (-4)
- **Time to Interactive:** 4.1s ( +1.8 sec)
- **Total Blocking Time:** 280 ms (+210 ms)
- **Transfer Size:** 248kb (+73.3 kb)

### --> Added Nimbata call tracking

_Script added before body tag via SSR API using setPostBodyComponents method._

RESULT:

- **Lighthouse Perfomance:** 94 (-2)
- **Time to Interactive:** +4.3s ( +0.2 sec)
- **Total Blocking Time:** 320 ms (+40 ms)
- **Transfer Size:** 254kb (+6 kb)

### --> Added Trustpilot trustbox

_Script added before body tag via SSR API using setPostBodyComponents method._

RESULT:

- **Lighthouse Perfomance:** 88 (-6)
- **Time to Interactive:** +4.6s ( +0.3 sec)
- **Total Blocking Time:** 470 ms (+150 ms)
- **Transfer Size:** 319kb (+65 kb)

### --> Total change vs blank repo

- **Lighthouse Perfomance:** -12
- **Time to Interactive:** +3.8s
- **Total Blocking Time:** +460ms
- **Transfer Size:** +256.1

## Testing tips received from Ferran

# 1. html.js (asyn/defer = true)

_Removed User.com, Nimbata and Trustpilot scripts. GUA/ADS tracking scripts present._

COMPARED TO:

- **Lighthouse Perfomance:** 99
- **Time to Interactive:** +3.2s
- **Total Blocking Time:** 70 ms
- **Transfer Size:** 176kb

### -> added Trustpilot via html.js

_Async/defer = true_

RESULT:

- **Lighthouse Perfomance:** 95 (-4)
- **Time to Interactive:** +3.7s ( +0.3 sec) --> same as when added via SSR
- **Total Blocking Time:** 320 ms (+250ms) --> +100kb bigger than via SSR
- **Transfer Size:** 240kb (+64kb) --> same as when added via SSR

### -> added User.com chat via html.js

_Async/defer = true_

RESULT:

- **Lighthouse Perfomance:** 89 (-6)
- **Time to Interactive:** +4.6s ( +0.9 sec) --> 0.9 sec better than via SSR
- **Total Blocking Time:** 460 ms (+140ms) --> 70ms better than via SSR
- **Transfer Size:** 312kb (+72kb) --> same as when added via SSR

### -> added Nimbata call tracking via html.js

_Async/defer = true_

RESULT:

- **Lighthouse Perfomance:** 89
- **Time to Interactive:** +4.6s 0.2 sec better compared to SSR
- **Total Blocking Time:** 470 ms (+10ms) --> 40ms better than via SSR
- **Transfer Size:** 240kb (+7kb) --> 1kb more compared when added via SSR

### -> Removed cache & triggered new build

- **Lighthouse Perfomance:** 90 (+2 better than via SSR)
- **Time to Interactive:** +4.7s (0.1 sec worse than SSR)
- **Total Blocking Time:** 430 ms --> (50ms better than via SSR)
- **Transfer Size:** 321kb (+2kb) --> (2kb worse than via SSR)

**CONCLUSION:** no noticable wins here. Perfomance score and blocking time are a bit better but they fluctuate a bit anyway.

# 2. Scripts via onInitialClientRender() + onScroll
_User.com chat widget and Trustpilot are loaded via onInitialClientRender API after the visitor initiates scroll event_
_Nimbata is loaded via onInitialClientRender_

### -> Removed cache & triggered new build

- **Lighthouse Perfomance:** 90 (+2 better than via SSR)
- **Time to Interactive:** +4.7s (0.1 sec worse than SSR)
- **Total Blocking Time:** 430 ms --> (50ms better than via SSR)
- **Transfer Size:** 321kb (+2kb) --> (2kb worse than via SSR)
