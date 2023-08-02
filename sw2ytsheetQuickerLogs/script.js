const currentValueExecResult = /num=(\d+)/.exec(location.search);
const currentValueAsNumber = Number(currentValueExecResult[1]);
const base = document.getElementById('making-posts');

base.style = 'position:relative;';

const olderLink = document.createElement('a');
olderLink.setAttribute('href', location.href.replace(currentValueExecResult[1], currentValueAsNumber - 1));
olderLink.textContent = '＞';
olderLink.style = "position:absolute;font-size:3em;right:1em;top:4em;";
base.append(olderLink);

const newerLink = document.createElement('a');
newerLink.setAttribute('href', location.href.replace(currentValueExecResult[1], currentValueAsNumber + 1));
newerLink.textContent = '＜';
newerLink.style = "position:absolute;font-size:3em;left:1em;top:4em;";
base.append(newerLink);

