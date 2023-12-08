import { createFanPages } from './scripts.js'

const classInfo = [];

/*
 * Add fan pages below
 */
classInfo.push({ name: 'Elliott Wilkinson', fanPageUrl: 'https://elliottwilkinson.github.io/fan/' });
classInfo.push({ name: 'Ian bird', fanPageUrl: 'https://birdmandeveloper.github.io/fan/' });
classInfo.push({ name: 'David Smith', fanPageUrl: 'https://dtsmth.github.io/fan/' });
classInfo.push({ name: 'Matthew Gillott', fanPageUrl: 'https://mgillott.github.io/fan/' });
classInfo.push({ name: 'Trevor Kline', fanPageUrl: 'https://tkline12.github.io/fan/' });
classInfo.push({ name: 'Adrian Carlisle Jr', fanPageUrl: 'https://dawgzz.github.io/Fan' });


window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});