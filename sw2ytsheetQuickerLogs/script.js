const currentValueExecResult = /num=(\d+)/.exec(location.search);
const currentValueAsNumber = Number(currentValueExecResult[1]);
const base = document.getElementById('making-posts');

base.style = 'position:relative;';

const olderLink = document.createElement('a');
olderLink.setAttribute('href', `./?mode=making&num=${currentValueAsNumber - 1}`);
olderLink.style = "outline: 3px double #000; transform: rotate(45deg);background: linear-gradient(-45deg, #679, #cdf);position: absolute; font-size: 2.5em; right: 1em; top: 4em;width:1.2em;height:1.2em;text-align:right;color:white;";
olderLink.title = "古いダイス結果へ";
const olderText = document.createElement('span');
olderText.textContent = '→';
olderText.style = "display: block;transform: rotate(-45deg);";
olderLink.append(olderText);
base.append(olderLink);

const newerLink = document.createElement('a');
newerLink.setAttribute('href', `./?mode=making&num=${currentValueAsNumber + 1}`);
newerLink.style = "outline: 3px double #000; transform: rotate(-45deg);background: linear-gradient(-45deg, #679, #cdf);position: absolute; font-size: 2.5em; left: 1em; top: 4em;width:1.2em;height:1.2em;text-align:left;color:white;";
newerLink.title = "新しいダイス結果へ";
const newerText = document.createElement('span');
newerText.textContent = '←';
newerText.style = "display: block; transform: rotate(45deg);";
newerLink.append(newerText);
base.append(newerLink);
