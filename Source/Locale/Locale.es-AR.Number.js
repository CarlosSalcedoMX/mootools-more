/*
---

name: Locale.es-AR.Number

description: Number messages for es Argentina.

license: MIT-style license

authors:
  - Oscar Kuchuk

requires:
  - Locale

provides: [Locale.es-AR.Number]

...
*/

Locale.define('es-AR', 'Number', {

	decimal: ',',
	group: '.',

/* 	Commented properties are the defaults for Number.format
	decimals: 0,
	precision: 0,
	scientific: null,

	prefix: null,
	suffic: null,

	// Negative/Currency/percentage will mixin Number
	negative: {
		prefix: '-'
	},*/

	currency: {
		decimals: 2,
		prefix: '$ '
	}/*,

	percentage: {
		decimals: 2,
		suffix: '%'
	}*/

});

