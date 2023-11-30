import { createFanPages } from './scripts.js'

const classInfo = [];

/*
 * Add fan pages below
 */
classInfo.push({ name: 'Steve Her', fanPageUrl: 'https://sth84478.github.io/fan-page/' });
classInfo.push({ name: 'Stephen Green', fanPageUrl: 'https://stevegreen4.github.io/fan-page/' });
classInfo.push({ name: 'Samantha Stinchcomb', fanPageUrl: 'https://thepudgypigeon.github.io/fan-page/' });


window.addEventListener('DOMContentLoaded', event => {

    createFanPages(classInfo);

});