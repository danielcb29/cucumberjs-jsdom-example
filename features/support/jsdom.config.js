var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const DEFAULT_HTML = '<html><body><div id="container"></div></body></html>';

global.window = new JSDOM(DEFAULT_HTML, {/*JSDOM Setup*/}).window;
global.document = window.document;
global.navigator = {
	userAgent: 'node.js'
};
