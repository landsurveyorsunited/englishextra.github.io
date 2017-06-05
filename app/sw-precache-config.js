/*!
 * @see {@link https://github.com/GoogleChrome/sw-precache/issues/97}
 * @see {@link https://github.com/GoogleChrome/sw-precache#runtime-caching}
 */
module.exports = {
	staticFileGlobs: ['index.html',
		'manifest.json',
		'yandex-tableau.json',
		'**.{png,ico,svg}',
		'cdn/**/*.{png,jpg,js,json,css}',
		'fonts/**/*.{eot,ttf,woff,woff2}',
		'libs/**/img/**/*.{png,jpg}',
		'pages/**/*.html'],
	stripPrefix: './',
	runtimeCaching: [{
			urlPattern: /\/libs\/(.*?)\/css\//,
			handler: 'fastest',
			options: {
				debug: true
			}
		}, {
			urlPattern: /\/libs\/(.*?)\/js\//,
			handler: 'fastest',
			options: {
				debug: true
			}
		}, {
			urlPattern: /\/libs\/(.*?)\/json\//,
			handler: 'fastest',
			options: {
				debug: true
			}
		}
	]
};