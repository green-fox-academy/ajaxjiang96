'use strict';

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crutial component, find out what it is and insert it too!

let url = 'https//www.reddit.com/r/nevertellmethebots';
url = url.replace('bots', 'odds');
url = `${url.substr(0, 5)}:${url.substr(5)}`;
console.log(url);
