/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(1);

	$(function(){
		$('#hoge').html('bbbb');
	});

	const ClassicEditor = __webpack_require__( 2 );
	ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
			console.log( editor );
	} )
	.catch( error => {
			console.error( error );
	} );


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.3.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2018-01-20T17:24Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

	      // Support: Chrome <=57, Firefox <=52
	      // In some browsers, typeof returns "function" for HTML <object> elements
	      // (i.e., `typeof document.createElement( "object" ) === "function"`).
	      // We don't want to classify *any* DOM node as a function.
	      return typeof obj === "function" && typeof obj.nodeType !== "number";
	  };


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};




		var preservedScriptAttributes = {
			type: true,
			src: true,
			noModule: true
		};

		function DOMEval( code, doc, node ) {
			doc = doc || document;

			var i,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {
					if ( node[ i ] ) {
						script[ i ] = node[ i ];
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.3.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && Array.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.3
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-08-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true && ("form" in elem || "label" in elem);
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							disabledAncestor( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	};
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
	        if ( nodeName( elem, "iframe" ) ) {
	            return elem.contentDocument;
	        }

	        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
	        // Treat the template element as a regular one in browsers that
	        // don't support it.
	        if ( nodeName( elem, "template" ) ) {
	            elem = elem.content || elem;
	        }

	        return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			div.style.position = "absolute";
			scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a property mapped along what jQuery.cssProps suggests or to
	// a vendor prefixed property.
	function finalPropName( name ) {
		var ret = jQuery.cssProps[ name ];
		if ( !ret ) {
			ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
		}
		return ret;
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5
			) );
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),
			val = curCSS( elem, dimension, styles ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox;

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = valueIsBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ dimension ] );

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		if ( val === "auto" ||
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

			val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

			// offsetWidth/offsetHeight provide border-box values
			valueIsBorderBox = true;
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, dimension, extra );
							} ) :
							getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),
					isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra && boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					);

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && support.scrollboxSize() === styles.position ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( isValidValue ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = Date.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	/*!
	 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md.
	 */
	!function(t){t.en=Object.assign(t.en||{},{a:"Cannot upload file:",b:"Block quote",c:"Bold",d:"Choose heading",e:"Heading",f:"Italic",g:"image widget",h:"Enter image caption",i:"Full size image",j:"Side image",k:"Left aligned image",l:"Centered image",m:"Right aligned image",n:"Numbered List",o:"Bulleted List",p:"Link",q:"Insert image",r:"Upload failed",s:"Upload in progress",t:"Paragraph",u:"Heading 1",v:"Heading 2",w:"Heading 3",x:"Change image text alternative",y:"Save",z:"Cancel",aa:"Link URL",ab:"Unlink",ac:"Edit link",ad:"Open link in new tab",ae:"This link has no URL",af:"Rich Text Editor, %0",ag:"Rich Text Editor",ah:"Text alternative",ai:"Undo",aj:"Redo"})}(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ClassicEditor=e():t.ClassicEditor=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=93)}([function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return r});const o="https://docs.ckeditor.com/ckeditor5/latest/framework/guides/support/error-codes.html";class i extends Error{constructor(t,e){t=r(t),e&&(t+=" "+JSON.stringify(e)),super(t),this.name="CKEditorError",this.data=e}static isCKEditorError(t){return t instanceof i}}function r(t){const e=t.match(/^([^:]+):/);return e?t+` Read more: ${o}#error-${e[1]}\n`:t}},function(t,e,n){var o={},i=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),r=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),s=null,a=0,c=[],l=n(35);function d(t,e){for(var n=0;n<t.length;n++){var i=t[n],r=o[i.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](i.parts[s]);for(;s<i.parts.length;s++)r.parts.push(g(i.parts[s],e))}else{var a=[];for(s=0;s<i.parts.length;s++)a.push(g(i.parts[s],e));o[i.id]={id:i.id,refs:1,parts:a}}}}function u(t,e){for(var n=[],o={},i=0;i<t.length;i++){var r=t[i],s=e.base?r[0]+e.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):n.push(o[s]={id:s,parts:[a]})}return n}function h(t,e){var n=r(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),c.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=r(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,i)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=c.indexOf(t);e>=0&&c.splice(e,1)}function p(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),m(e,t.attrs),h(t,e),e}function m(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,o,i,r;if(e.transform&&t.css){if(!(r=e.transform(t.css)))return function(){};t.css=r}if(e.singleton){var c=a++;n=s||(s=p(e)),o=w.bind(null,n,c,!1),i=w.bind(null,n,c,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(e,t.attrs),h(t,e),e}(e),o=function(t,e,n){var o=n.css,i=n.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=l(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,n,e),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),i=function(){f(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else i()}}t.exports=function(t,e){if(false)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=i()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=u(t,e);return d(n,e),function(t){for(var i=[],r=0;r<n.length;r++){var s=n[r];(a=o[s.id]).refs--,i.push(a)}t&&d(u(t,e),e);for(r=0;r<i.length;r++){var a;if(0===(a=i[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var b=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function w(t,e,n,o){var i=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}},function(t,e,n){"use strict";var o=n(0);const i={error(t,e){console.error(Object(o.a)(t),e)},warn(t,e){console.warn(Object(o.a)(t),e)}};e.a=i},function(t,e,n){"use strict";(function(t,o){var i=n(4),r={function:!0,object:!0},s=r[typeof exports]&&exports&&!exports.nodeType?exports:void 0,a=r[typeof t]&&t&&!t.nodeType?t:void 0,c=Object(i.a)(s&&a&&"object"==typeof o&&o),l=Object(i.a)(r[typeof self]&&self),d=Object(i.a)(r[typeof window]&&window),u=Object(i.a)(r[void 0]&&void 0),h=c||d!==(u&&u.window)&&d||l||u||Function("return this")();e.a=h}).call(this,n(12)(t),n(13))},function(t,e,n){"use strict";e.a=function(t){return t&&t.Object===Object?t:null}},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6.972 16.615a.997.997 0 0 1-.744-.292l-4.596-4.596a1 1 0 1 1 1.414-1.414l3.926 3.926 9.937-9.937a1 1 0 0 1 1.414 1.415L7.717 16.323a.997.997 0 0 1-.745.292z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.591 10.177l4.243 4.242a1 1 0 0 1-1.415 1.415l-4.242-4.243-4.243 4.243a1 1 0 0 1-1.414-1.415l4.243-4.242L4.52 5.934A1 1 0 0 1 5.934 4.52l4.243 4.243 4.242-4.243a1 1 0 1 1 1.415 1.414l-4.243 4.243z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM2 7.5V6h5.674v1.5zM2 10.5V9h5.674v1.5zM2 13.5V12h5.674v1.5zM10.5 7.5V12h6V7.5h-6zM9.682 6h7.636c.377 0 .682.407.682.91v5.68c0 .503-.305.91-.682.91H9.682c-.377 0-.682-.407-.682-.91V6.91c0-.503.305-.91.682-.91zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(t){t.exports={a:"11.0.1"}},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM4.5 7.5V12h11V7.5h-11zM4.061 6H15.94c.586 0 1.061.407 1.061.91v5.68c0 .503-.475.91-1.061.91H4.06C3.475 13.5 3 13.093 3 12.59V6.91C3 6.406 3.475 6 4.061 6zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18 4.5V3H2v1.5h16zm0 3V6h-5.674v1.5H18zm0 3V9h-5.674v1.5H18zm0 3V12h-5.674v1.5H18zm-8.5-6V12h-6V7.5h6zm.818-1.5H2.682C2.305 6 2 6.407 2 6.91v5.68c0 .503.305.91.682.91h7.636c.377 0 .682-.407.682-.91V6.91c0-.503-.305-.91-.682-.91zM18 16.5V15H2v1.5h16z" fill-rule="nonzero"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="nonzero"><path d="M2 4.5V3h16v1.5zM6.5 7.5V12h7V7.5h-7zM5.758 6h8.484c.419 0 .758.407.758.91v5.681c0 .502-.34.909-.758.909H5.758c-.419 0-.758-.407-.758-.91V6.91c0-.503.34-.91.758-.91zM2 16.5V15h16v1.5z"/></g></svg>\n'},function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var o=n(80);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";(function(t){var o=n(16),i=n(3),r={function:!0,object:!0},s=r[typeof exports]&&exports&&!exports.nodeType?exports:void 0,a=r[typeof t]&&t&&!t.nodeType?t:void 0,c=(a&&a.exports===s?s:void 0)?i.a.Buffer:void 0,l=c?function(t){return t instanceof c}:Object(o.a)(!1);e.a=l}).call(this,n(12)(t))},function(t,e,n){"use strict";e.a=function(t){return function(){return t}}},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.042 9.367l2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z" fill="#000" fill-rule="nonzero"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M14.958 9.367l-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z" fill="#000" fill-rule="nonzero"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z" fill="#000" fill-rule="evenodd"/></svg>\n'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.586 14.633l.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z" fill="#333" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563zM11 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.011-.563z"/></g></svg>\n'},function(t,e){t.exports='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M4 0v1H1v3H0V.5A.5.5 0 0 1 .5 0H4zm8 0h3.5a.5.5 0 0 1 .5.5V4h-1V1h-3V0zM4 16H.5a.5.5 0 0 1-.5-.5V12h1v3h3v1zm8 0v-1h3v-3h1v3.5a.5.5 0 0 1-.5.5H12z"/><path fill-opacity=".256" d="M1 1h14v14H1z"/><g class="ck-icon__selected-indicator"><path d="M7 0h2v1H7V0zM0 7h1v2H0V7zm15 0h1v2h-1V7zm-8 8h2v1H7v-1z"/><path fill-opacity=".254" d="M1 1h14v14H1z"/></g></g></svg>\n'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5.085 6.22L2.943 4.078a.75.75 0 1 1 1.06-1.06l2.592 2.59A11.094 11.094 0 0 1 10 5.068c4.738 0 8.578 3.101 8.578 5.083 0 1.197-1.401 2.803-3.555 3.887l1.714 1.713a.75.75 0 0 1-.09 1.138.488.488 0 0 1-.15.084.75.75 0 0 1-.821-.16L6.17 7.304c-.258.11-.51.233-.757.365l6.239 6.24-.006.005.78.78c-.388.094-.78.166-1.174.215l-1.11-1.11h.011L4.55 8.197a7.2 7.2 0 0 0-.665.514l-.112.098 4.897 4.897-.005.006 1.276 1.276a10.164 10.164 0 0 1-1.477-.117l-.479-.479-.009.009-4.863-4.863-.022.031a2.563 2.563 0 0 0-.124.2c-.043.077-.08.158-.108.241a.534.534 0 0 0-.028.133.29.29 0 0 0 .008.072.927.927 0 0 0 .082.226c.067.133.145.26.234.379l3.242 3.365.025.01.59.623c-3.265-.918-5.59-3.155-5.59-4.668 0-1.194 1.448-2.838 3.663-3.93zm7.07.531a4.632 4.632 0 0 1 1.108 5.992l.345.344.046-.018a9.313 9.313 0 0 0 2-1.112c.256-.187.5-.392.727-.613.137-.134.27-.277.392-.431.072-.091.141-.185.203-.286.057-.093.107-.19.148-.292a.72.72 0 0 0 .036-.12.29.29 0 0 0 .008-.072.492.492 0 0 0-.028-.133.999.999 0 0 0-.036-.096 2.165 2.165 0 0 0-.071-.145 2.917 2.917 0 0 0-.125-.2 3.592 3.592 0 0 0-.263-.335 5.444 5.444 0 0 0-.53-.523 7.955 7.955 0 0 0-1.054-.768 9.766 9.766 0 0 0-1.879-.891c-.337-.118-.68-.219-1.027-.301zm-2.85.21l-.069.002a.508.508 0 0 0-.254.097.496.496 0 0 0-.104.679.498.498 0 0 0 .326.199l.045.005c.091.003.181.003.272.012.9.093 1.676.675 2.017 1.513.024.061.043.125.069.185a.494.494 0 0 0 .45.287h.008a.496.496 0 0 0 .35-.158.482.482 0 0 0 .13-.335.638.638 0 0 0-.048-.219 3.379 3.379 0 0 0-.36-.723 3.438 3.438 0 0 0-2.791-1.543l-.028-.001h-.013z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z" fill="#000" fill-rule="nonzero"/></svg>\n'},function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 250"><g fill="#FAFAFA" fill-rule="evenodd"><rect width="700" height="250" rx="4"/></g></svg>\n'},function(t,e){t.exports='<svg width="10" height="10" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g fill="#000" fill-rule="evenodd"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184zM16.927 17.695l-1.414 1.414a.75.75 0 1 1-1.06-1.06l1.414-1.415-1.415-1.414a.75.75 0 0 1 1.061-1.06l1.414 1.414 1.414-1.415a.75.75 0 0 1 1.061 1.061l-1.414 1.414 1.414 1.415a.75.75 0 0 1-1.06 1.06l-1.415-1.414z"/></g></svg>'},function(t,e){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.3 17.37l-.061.088a1.518 1.518 0 0 1-.934.535l-4.178.663-.806-4.153a1.495 1.495 0 0 1 .187-1.058l.056-.086L8.77 2.639c.958-1.351 2.803-1.076 4.296-.03 1.497 1.047 2.387 2.693 1.433 4.055L7.3 17.37zM9.14 4.728l-5.545 8.346 3.277 2.294 5.544-8.346L9.14 4.728zM6.07 16.512l-3.276-2.295.53 2.73 2.746-.435zM9.994 3.506L13.271 5.8c.316-.452-.16-1.333-1.065-1.966-.905-.634-1.895-.78-2.212-.328zM8 18.5L9.375 17H19v1.5H8z" fill="#000" fill-rule="nonzero"/></svg>\n'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.077 15l.991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955c.02-.095.06-.189.12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z" fill="#000" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z" fill="#454545" fill-rule="evenodd"/></svg>'},function(t,e){t.exports='<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z" fill="#454545" fill-rule="evenodd"/></svg>'},function(t,e,n){"use strict";(function(t){var e=n(2),o=n(8);const i="object"==typeof window?window:t;i.CKEDITOR_VERSION?e.a.error("ckeditor-version-collision: The global CKEDITOR_VERSION constant has already been set.",{collidingVersion:i.CKEDITOR_VERSION,version:o.a}):i.CKEDITOR_VERSION=o.a}).call(this,n(13))},function(t,e,n){var o=n(34);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-hidden{display:none!important}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{box-sizing:border-box;width:auto;height:auto;position:static}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999);--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#c4c4c4;--ck-color-base-action:#61b045;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#198cf0;--ck-color-base-active-focus:#0e7fe1;--ck-color-focus-border:#47a4f5;--ck-color-focus-shadow:rgba(119,186,248,.5);--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#e6e6e6;--ck-color-button-default-active-background:#d9d9d9;--ck-color-button-default-active-shadow:#bfbfbf;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#dedede;--ck-color-button-on-hover-background:#c4c4c4;--ck-color-button-on-active-background:#bababa;--ck-color-button-on-active-shadow:#a1a1a1;--ck-color-button-on-disabled-background:#dedede;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#579e3d;--ck-color-button-action-active-background:#53973b;--ck-color-button-action-active-shadow:#498433;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#b0b0b0;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:#c7c7c7;--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:#c7c7c7;--ck-color-input-disabled-text:#5c5c5c;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-base-foreground);--ck-color-list-button-on-background:var(--ck-color-base-active);--ck-color-list-button-on-background-focus:var(--ck-color-base-active-focus);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-foreground);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#c2c2c2;--ck-color-upload-bar-background:#6cb5f9;--ck-color-upload-infinite-background:rgba(0,0,0,.1);--ck-color-link-default:#0000f0;--ck-color-link-selected-background:#ebf8ff;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck.ck-reset,.ck.ck-reset_all,.ck.ck-reset_all *{margin:0;padding:0;border:0;background:transparent;text-decoration:none;vertical-align:middle;transition:none;word-wrap:break-word}.ck.ck-reset_all,.ck.ck-reset_all *{border-collapse:collapse;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);color:var(--ck-color-text);text-align:left;white-space:nowrap;cursor:auto;float:none}.ck.ck-reset_all .ck-rtl *{text-align:right}.ck.ck-reset_all iframe{vertical-align:inherit}.ck.ck-reset_all textarea{white-space:pre-wrap}.ck.ck-reset_all input[type=password],.ck.ck-reset_all input[type=text],.ck.ck-reset_all textarea{cursor:text}.ck.ck-reset_all input[type=password][disabled],.ck.ck-reset_all input[type=text][disabled],.ck.ck-reset_all textarea[disabled]{cursor:default}.ck.ck-reset_all fieldset{padding:10px;border:2px groove #dfdee3}.ck.ck-reset_all button::-moz-focus-inner{padding:0;border:0}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit) * 1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit) * 0.8);--ck-spacing-small:calc(var(--ck-spacing-unit) * 0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit) * 0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit) * 0.16)}"},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(t,e,n){var o=n(37);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-editor__editable:not(.ck-editor__nested-editable).ck-focused{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0}.ck.ck-editor__editable_inline{overflow:auto;padding:0 var(--ck-spacing-standard);border:1px solid transparent}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-base-foreground)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-base-foreground)}"},function(t,e,n){var o=n(39);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}"},function(t,e,n){var o=n(41);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{z-index:var(--ck-z-modal);position:fixed;top:0}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{top:auto;position:absolute}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{box-shadow:var(--ck-drop-shadow),0 0;border-width:0 1px 1px;border-top-left-radius:0;border-top-right-radius:0}"},function(t,e,n){var o=n(43);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-toolbar{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-flow:row wrap;align-items:center}.ck.ck-toolbar.ck-toolbar_vertical{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating{flex-wrap:nowrap}.ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar__newline{display:block;width:100%}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);padding:0 var(--ck-spacing-small);border:1px solid var(--ck-color-toolbar-border)}.ck.ck-toolbar>*{margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);margin-bottom:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>*{width:100%;margin:0;border-radius:0;border:0}.ck.ck-toolbar>:last-child{margin-right:0}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar__separator{align-self:stretch;width:1px;margin-top:0;margin-bottom:0;background:var(--ck-color-toolbar-border)}.ck.ck-toolbar__newline{margin:0}"},function(t,e,n){var o=n(45);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}"},function(t,e,n){var o=n(47);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base) * var(--ck-font-size-normal))}.ck.ck-icon{width:var(--ck-icon-size);height:var(--ck-icon-size);font-size:.8333350694em;will-change:transform}.ck.ck-icon,.ck.ck-icon *{color:inherit;cursor:inherit}.ck.ck-icon *{fill:currentColor}"},function(t,e,n){var o=n(49);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports='.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{position:absolute;pointer-events:none;-webkit-backface-visibility:hidden}.ck-tooltip{visibility:hidden;opacity:0;display:none;z-index:var(--ck-z-modal)}.ck-tooltip .ck-tooltip__text{display:inline-block}.ck-tooltip .ck-tooltip__text:after{content:"";width:0;height:0}:root{--ck-tooltip-arrow-size:5px}.ck.ck-tooltip{left:50%}.ck.ck-tooltip.ck-tooltip_s{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(100%)}.ck.ck-tooltip.ck-tooltip_s .ck-tooltip__text:after{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-color:transparent transparent var(--ck-color-tooltip-background);border-width:0 var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size)}.ck.ck-tooltip.ck-tooltip_n{top:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateY(-100%)}.ck.ck-tooltip.ck-tooltip_n .ck-tooltip__text:after{bottom:calc(-1 * var(--ck-tooltip-arrow-size));transform:translateX(-50%);border-color:var(--ck-color-tooltip-background) transparent transparent;border-width:var(--ck-tooltip-arrow-size) var(--ck-tooltip-arrow-size) 0}.ck.ck-tooltip .ck-tooltip__text{border-radius:0}.ck-rounded-corners .ck.ck-tooltip .ck-tooltip__text,.ck.ck-tooltip .ck-tooltip__text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-tooltip .ck-tooltip__text{font-size:.9em;line-height:1.5;color:var(--ck-color-tooltip-text);padding:var(--ck-spacing-small) var(--ck-spacing-medium);background:var(--ck-color-tooltip-background);position:relative;left:-50%}.ck.ck-tooltip .ck-tooltip__text:after{border-style:solid;left:50%}.ck.ck-tooltip,.ck.ck-tooltip .ck-tooltip__text:after{transition:opacity .2s ease-in-out .2s}'},function(t,e,n){var o=n(51);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-button,a.ck.ck-button{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:block}@media (hover:none){.ck.ck-button .ck-tooltip,a.ck.ck-button .ck-tooltip{display:none}}.ck.ck-button,a.ck.ck-button{position:relative;display:inline-flex;align-items:center;justify-content:left}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button:hover .ck-tooltip,a.ck.ck-button:hover .ck-tooltip{visibility:visible;opacity:1}.ck.ck-button .ck-button__label,.ck.ck-button:focus:not(:hover) .ck-tooltip,a.ck.ck-button .ck-button__label,a.ck.ck-button:focus:not(:hover) .ck-tooltip{display:none}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-default-active-shadow)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{white-space:nowrap;cursor:default;vertical-align:middle;padding:var(--ck-spacing-tiny);text-align:center;min-width:var(--ck-ui-component-min-height);min-height:var(--ck-ui-component-min-height);line-height:1;font-size:inherit;border:1px solid transparent;transition:box-shadow .2s ease-in-out}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;border-color:transparent}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__icon{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}.ck.ck-button.ck-button_with-text .ck-button__icon,a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(-1 * var(--ck-spacing-small));margin-right:var(--ck-spacing-small)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-on-active-shadow)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{font-size:inherit;font-weight:inherit;color:inherit;cursor:inherit;vertical-align:middle}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background);box-shadow:inset 0 2px 2px var(--ck-color-button-action-active-shadow)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}"},function(t,e,n){var o=n(53);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content blockquote{overflow:hidden;padding-right:1.5em;padding-left:1.5em;margin-left:0;font-style:italic;border-left:5px solid #ccc}"},function(t,e,n){var o=n(55);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck .ck-widget.ck-widget_selectable{position:relative}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler{visibility:hidden;position:absolute}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler .ck-icon{display:block}.ck .ck-widget.ck-widget_selectable.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_selectable:hover .ck-widget__selection-handler{visibility:visible}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{margin:var(--ck-spacing-standard) 0;padding:0;outline-width:var(--ck-widget-outline-thickness);outline-style:solid;outline-color:transparent;transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;background-color:var(--ck-color-widget-editable-focus-background)}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler{padding:4px;box-sizing:border-box;background-color:transparent;opacity:0;transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;transform:translateY(-100%);left:calc(0px - var(--ck-widget-outline-thickness))}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler .ck-icon{width:var(--ck-widget-handler-icon-size);height:var(--ck-widget-handler-icon-size);color:var(--ck-color-widget-drag-handler-icon-color)}.ck .ck-widget.ck-widget_selectable .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selectable.ck-widget_selected .ck-widget__selection-handler,.ck .ck-widget.ck-widget_selectable.ck-widget_selected:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-focus-border)}.ck .ck-widget.ck-widget_selectable.ck-widget_selected .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_selectable.ck-widget_selected:hover .ck-widget__selection-handler .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_selectable:hover .ck-widget__selection-handler{opacity:1;background-color:var(--ck-color-widget-hover-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected .ck-widget__selection-handler:hover,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler,.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover .ck-widget__selection-handler:hover{background:var(--ck-color-widget-blurred-border)}"},function(t,e,n){var o=n(57);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=":root{--ck-input-text-width:18em}.ck.ck-input-text{border-radius:0}.ck-rounded-corners .ck.ck-input-text,.ck.ck-input-text.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-text{box-shadow:var(--ck-inner-shadow),0 0;background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);min-width:var(--ck-input-text-width);min-height:var(--ck-ui-component-min-height);transition-property:box-shadow,border;transition:.2s ease-in-out}.ck.ck-input-text:focus{outline:none;border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),var(--ck-inner-shadow)}.ck.ck-input-text[readonly]{border:1px solid var(--ck-color-input-disabled-border);background:var(--ck-color-input-disabled-background);color:var(--ck-color-input-disabled-text)}.ck.ck-input-text[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),var(--ck-inner-shadow)}"},function(t,e,n){var o=n(59);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-text-alternative-form .ck-labeled-input{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}.ck.ck-text-alternative-form{padding:var(--ck-spacing-standard)}.ck.ck-text-alternative-form:focus{outline:none}.ck.ck-text-alternative-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}"},function(t,e,n){var o=n(61);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{box-shadow:var(--ck-drop-shadow),0 0;min-height:15px;background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{width:0;height:0;border-style:solid}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background);margin-top:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent;margin-bottom:var(--ck-balloon-arrow-offset)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(2 * var(--ck-balloon-arrow-half-width));top:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{left:50%;margin-left:calc(-1 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{left:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{right:calc(2 * var(--ck-balloon-arrow-half-width));bottom:calc(-1 * var(--ck-balloon-arrow-height))}'},function(t,e,n){var o=n(63);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content .image{clear:both;text-align:center}.ck-content .image>img{display:block;margin:0 auto;max-width:100%}"},function(t,e,n){var o=n(65);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content .image{position:relative;overflow:hidden}.ck-content .image .ck-progress-bar{position:absolute;top:0;left:0}:root{--ck-image-upload-progress-line-width:30px}.ck-content .image.ck-appear{animation:fadeIn .7s}.ck-content .image .ck-progress-bar{height:2px;width:0;background:var(--ck-color-upload-bar-background);transition:width .1s}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}"},function(t,e,n){var o=n(67);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports='.ck-image-upload-complete-icon{display:block;position:absolute;top:10px;right:10px;border-radius:50%}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20px;--ck-image-upload-icon-width:2px}.ck-image-upload-complete-icon{width:var(--ck-image-upload-icon-size);height:var(--ck-image-upload-icon-size);opacity:0;background:var(--ck-color-image-upload-icon-background);animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;animation-fill-mode:forwards,forwards;animation-duration:.5s,.5s;font-size:var(--ck-image-upload-icon-size);animation-delay:0ms,3s}.ck-image-upload-complete-icon:after{left:25%;top:50%;opacity:0;height:0;width:0;transform:scaleX(-1) rotate(135deg);transform-origin:left top;border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);animation-name:ck-upload-complete-icon-check;animation-duration:.5s;animation-delay:.5s;animation-fill-mode:forwards;box-sizing:border-box}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{opacity:1;width:0;height:0}33%{width:.3em;height:0}to{opacity:1;width:.3em;height:.45em}}'},function(t,e,n){var o=n(69);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports='.ck .ck-upload-placeholder-loader{position:absolute;display:flex;align-items:center;justify-content:center;top:0;left:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px}.ck .ck-image-upload-placeholder{width:100%;margin:0}.ck .ck-upload-placeholder-loader{width:100%;height:100%}.ck .ck-upload-placeholder-loader:before{width:var(--ck-upload-placeholder-loader-size);height:var(--ck-upload-placeholder-loader-size);border-radius:50%;border-top:3px solid var(--ck-color-upload-placeholder-loader);border-right:2px solid transparent;animation:ck-upload-placeholder-loader 1s linear infinite}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}'},function(t,e,n){var o=n(71);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on .ck-tooltip{display:none}.ck.ck-dropdown .ck-dropdown__panel{-webkit-backface-visibility:hidden;display:none;z-index:var(--ck-z-modal);position:absolute;left:0;transform:translate3d(0,100%,0)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block;will-change:transform}:root{--ck-dropdown-arrow-size:calc(0.5 * var(--ck-icon-size))}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{right:var(--ck-spacing-standard);width:var(--ck-dropdown-arrow-size);margin-left:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{width:7em;overflow:hidden;text-overflow:ellipsis}.ck.ck-dropdown__panel{border-radius:0;box-shadow:var(--ck-drop-shadow),0 0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;min-width:100%}"},function(t,e,n){var o=n(73);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-list{-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex-direction:column}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{list-style-type:none;background:var(--ck-color-list-background)}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{min-height:unset;width:100%;text-align:left;border-radius:0;border:0;padding:calc(.2*var(--ck-line-height-base)*var(--ck-font-size-base)) calc(.4*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(1.2*var(--ck-line-height-base)*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck.ck-list__separator{height:1px;width:100%;background:var(--ck-color-base-border)}"},function(t,e,n){var o=n(75);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:1.0769230769em;--ck-switch-button-toggle-spacing:1px}.ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(2*var(--ck-spacing-large))}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto;transition:background .4s ease;width:var(--ck-switch-button-toggle-width);background:var(--ck-color-switch-button-off-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(.5*var(--ck-border-radius))}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{margin:var(--ck-switch-button-toggle-spacing);width:var(--ck-switch-button-toggle-inner-size);height:var(--ck-switch-button-toggle-inner-size);background:var(--ck-color-switch-button-inner-background);transition:transform .3s ease}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(1.3846153847em)}"},function(t,e,n){var o=n(77);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-toolbar-dropdown .ck-toolbar{flex-wrap:nowrap}.ck.ck-toolbar-dropdown .ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}"},function(t,e,n){var o=n(79);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}"},function(t,e){t.exports=".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}"},function(t,e,n){var o=n(82);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-placeholder:before,.ck .ck-placeholder:before{content:attr(data-placeholder);pointer-events:none;cursor:text;color:var(--ck-color-engine-placeholder-text)}"},function(t,e,n){var o=n(84);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck-content .image>figcaption{color:#333;background-color:#f7f7f7;padding:.6em;font-size:.75em;outline-offset:-1px}"},function(t,e,n){var o=n(86);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=":root{--ck-image-style-spacing:1.5em}.ck-content .image-style-align-center,.ck-content .image-style-align-left,.ck-content .image-style-align-right,.ck-content .image-style-side{max-width:50%}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}"},function(t,e,n){var o=n(88);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}"},function(t,e,n){var o=n(90);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-link-form .ck-labeled-input{display:inline-block}.ck.ck-link-form .ck-label{display:none}.ck.ck-link-form{padding:var(--ck-spacing-standard)}.ck.ck-link-form:focus{outline:none}.ck.ck-link-form>:not(:first-child){margin-left:var(--ck-spacing-standard)}"},function(t,e,n){var o=n(92);"string"==typeof o&&(o=[[t.i,o,""]]);var i={singleton:!0,hmr:!0,transform:void 0,insertInto:void 0};n(1)(o,i);o.locals&&(t.exports=o.locals)},function(t,e){t.exports=".ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}.ck.ck-link-actions{padding:var(--ck-spacing-standard)}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{padding:0 var(--ck-spacing-medium);color:var(--ck-color-link-default);text-overflow:ellipsis;cursor:pointer;max-width:var(--ck-input-text-width);min-width:3em;text-align:center}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions:focus{outline:none}.ck.ck-link-actions>:not(:first-child){margin-left:var(--ck-spacing-standard)}"},function(t,e,n){"use strict";n.r(e);var o=Object.getPrototypeOf;var i=function(t){return o(Object(t))};var r=function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e};var s=function(t){return!!t&&"object"==typeof t},a="[object Object]",c=Object.prototype,l=Function.prototype.toString,d=c.hasOwnProperty,u=l.call(Object),h=c.toString;var f=function(t){if(!s(t)||h.call(t)!=a||r(t))return!1;var e=i(t);if(null===e)return!0;var n=d.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&l.call(n)==u};class p{constructor(t,e){this._config={},e&&this.define(e),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}_setToTarget(t,e,n,o=!1){if(f(e))return void this._setObjectToTarget(t,e,o);const i=e.split(".");e=i.pop();for(const e of i)f(t[e])||(t[e]={}),t=t[e];if(f(n))return f(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,o);o&&void 0!==t[e]||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const e of n){if(!f(t[e])){t=null;break}t=t[e]}return t?t[e]:void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],n)})}}var m=n(0);var g=function(){return function t(){t.called=!0}};class b{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=g(),this.off=g()}}function w(){let t="e";for(let e=0;e<8;e++)t+=Math.floor(65536*(1+Math.random())).toString(16).substring(1);return t}var v={get(t){return"number"!=typeof t?this[t]||this.normal:t},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};const _=Symbol("listeningTo"),k=Symbol("emitterId");var y={on(t,e,n={}){this.listenTo(this,t,e,n)},once(t,e,n){this.listenTo(this,t,function(t,...n){t.off(),e.call(this,t,...n)},n)},off(t,e){this.stopListening(this,t,e)},listenTo(t,e,n,o={}){let i,r;this[_]||(this[_]={});const s=this[_];A(t)||x(t);const a=A(t);(i=s[a])||(i=s[a]={emitter:t,callbacks:{}}),(r=i.callbacks[e])||(r=i.callbacks[e]=[]),r.push(n),function(t,e){const n=C(t);if(n[e])return;let o=e,i=null;const r=[];for(;""!==o&&!n[o];)n[o]={callbacks:[],childEvents:[]},r.push(n[o]),i&&n[o].childEvents.push(i),i=o,o=o.substr(0,o.lastIndexOf(":"));if(""!==o){for(const t of r)t.callbacks=n[o].callbacks.slice();n[o].childEvents.push(i)}}(t,e);const c=T(t,e),l=v.get(o.priority),d={callback:n,priority:l};for(const t of c){let e=!1;for(let n=0;n<t.length;n++)if(t[n].priority<l){t.splice(n,0,d),e=!0;break}e||t.push(d)}},stopListening(t,e,n){const o=this[_];let i=t&&A(t);const r=o&&i&&o[i],s=r&&e&&r.callbacks[e];if(!(!o||t&&!r||e&&!s))if(n)E(t,e,n);else if(s){for(;n=s.pop();)E(t,e,n);delete r.callbacks[e]}else if(r){for(e in r.callbacks)this.stopListening(t,e);delete o[i]}else{for(i in o)this.stopListening(o[i].emitter);delete this[_]}},fire(t,...e){const n=t instanceof b?t:new b(this,t),o=n.name;let i=function t(e,n){let o;if(!e._events||!(o=e._events[n])||!o.callbacks.length)return n.indexOf(":")>-1?t(e,n.substr(0,n.lastIndexOf(":"))):null;return o.callbacks}(this,o);if(n.path.push(this),i){const t=[n,...e];i=Array.from(i);for(let e=0;e<i.length&&(i[e].callback.apply(this,t),n.off.called&&(delete n.off.called,E(this,o,i[e].callback)),!n.stop.called);e++);}if(this._delegations){const t=this._delegations.get(o),i=this._delegations.get("*");t&&S(t,n,e),i&&S(i,n,e)}return n.return},delegate(...t){return{to:(e,n)=>{this._delegations||(this._delegations=new Map);for(const o of t){const t=this._delegations.get(o);t?t.set(e,n):this._delegations.set(o,new Map([[e,n]]))}}}},stopDelegating(t,e){if(this._delegations)if(t)if(e){const n=this._delegations.get(t);n&&n.delete(e)}else this._delegations.delete(t);else this._delegations.clear()}};function x(t,e){t[k]||(t[k]=e||w())}function A(t){return t[k]}function C(t){return t._events||Object.defineProperty(t,"_events",{value:{}}),t._events}function T(t,e){const n=C(t)[e];if(!n)return[];let o=[n.callbacks];for(let e=0;e<n.childEvents.length;e++){const i=T(t,n.childEvents[e]);o=o.concat(i)}return o}function S(t,e,n){for(let[o,i]of t){i?"function"==typeof i&&(i=i(e.name)):i=e.name;const t=new b(e.source,i);t.path=[...e.path],o.fire(t,...n)}}function E(t,e,n){const o=T(t,e);for(const t of o)for(let e=0;e<t.length;e++)t[e].callback==n&&(t.splice(e,1),e--)}function P(t,...e){e.forEach(e=>{Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e)).forEach(n=>{if(n in t.prototype)return;const o=Object.getOwnPropertyDescriptor(e,n);o.enumerable=!1,Object.defineProperty(t.prototype,n,o)})})}var O=function(){this.__data__=[]};var R=function(t,e){return t===e||t!=t&&e!=e};var I=function(t,e){for(var n=t.length;n--;)if(R(t[n][0],e))return n;return-1},M=Array.prototype.splice;var F=function(t){var e=this.__data__,n=I(e,t);return!(n<0||(n==e.length-1?e.pop():M.call(e,n,1),0))};var V=function(t){var e=this.__data__,n=I(e,t);return n<0?void 0:e[n][1]};var N=function(t){return I(this.__data__,t)>-1};var D=function(t,e){var n=this.__data__,o=I(n,t);return o<0?n.push([t,e]):n[o][1]=e,this};function B(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}B.prototype.clear=O,B.prototype.delete=F,B.prototype.get=V,B.prototype.has=N,B.prototype.set=D;var L=B;var j=function(){this.__data__=new L};var z=function(t){return this.__data__.delete(t)};var q=function(t){return this.__data__.get(t)};var U=function(t){return this.__data__.has(t)};var W=function(t){var e=typeof t;return!!t&&("object"==e||"function"==e)},H="[object Function]",$="[object GeneratorFunction]",K=Object.prototype.toString;var G=function(t){var e=W(t)?K.call(t):"";return e==H||e==$},J=Function.prototype.toString;var Q=function(t){if(null!=t){try{return J.call(t)}catch(t){}try{return t+""}catch(t){}}return""},Y=/^\[object .+?Constructor\]$/,X=Object.prototype,Z=Function.prototype.toString,tt=X.hasOwnProperty,et=RegExp("^"+Z.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var nt=function(t){return!!W(t)&&(G(t)||r(t)?et:Y).test(Q(t))};var ot=function(t,e){var n=t[e];return nt(n)?n:void 0},it=ot(Object,"create");var rt=function(){this.__data__=it?it(null):{}};var st=function(t){return this.has(t)&&delete this.__data__[t]},at="__lodash_hash_undefined__",ct=Object.prototype.hasOwnProperty;var lt=function(t){var e=this.__data__;if(it){var n=e[t];return n===at?void 0:n}return ct.call(e,t)?e[t]:void 0},dt=Object.prototype.hasOwnProperty;var ut=function(t){var e=this.__data__;return it?void 0!==e[t]:dt.call(e,t)},ht="__lodash_hash_undefined__";var ft=function(t,e){return this.__data__[t]=it&&void 0===e?ht:e,this};function pt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}pt.prototype.clear=rt,pt.prototype.delete=st,pt.prototype.get=lt,pt.prototype.has=ut,pt.prototype.set=ft;var mt=pt,gt=n(3),bt=ot(gt.a,"Map");var wt=function(){this.__data__={hash:new mt,map:new(bt||L),string:new mt}};var vt=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t};var _t=function(t,e){var n=t.__data__;return vt(e)?n["string"==typeof e?"string":"hash"]:n.map};var kt=function(t){return _t(this,t).delete(t)};var yt=function(t){return _t(this,t).get(t)};var xt=function(t){return _t(this,t).has(t)};var At=function(t,e){return _t(this,t).set(t,e),this};function Ct(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var o=t[e];this.set(o[0],o[1])}}Ct.prototype.clear=wt,Ct.prototype.delete=kt,Ct.prototype.get=yt,Ct.prototype.has=xt,Ct.prototype.set=At;var Tt=Ct,St=200;var Et=function(t,e){var n=this.__data__;return n instanceof L&&n.__data__.length==St&&(n=this.__data__=new Tt(n.__data__)),n.set(t,e),this};function Pt(t){this.__data__=new L(t)}Pt.prototype.clear=j,Pt.prototype.delete=z,Pt.prototype.get=q,Pt.prototype.has=U,Pt.prototype.set=Et;var Ot=Pt;var Rt=function(t,e){for(var n=-1,o=t.length;++n<o&&!1!==e(t[n],n,t););return t},It=Object.prototype.hasOwnProperty;var Mt=function(t,e,n){var o=t[e];It.call(t,e)&&R(o,n)&&(void 0!==n||e in t)||(t[e]=n)};var Ft=function(t,e,n,o){n||(n={});for(var i=-1,r=e.length;++i<r;){var s=e[i],a=o?o(n[s],t[s],s,n,t):t[s];Mt(n,s,a)}return n},Vt=Object.prototype.hasOwnProperty;var Nt=function(t,e){return Vt.call(t,e)||"object"==typeof t&&e in t&&null===i(t)},Dt=Object.keys;var Bt=function(t){return Dt(Object(t))};var Lt=function(t,e){for(var n=-1,o=Array(t);++n<t;)o[n]=e(n);return o};var jt=function(t){return function(e){return null==e?void 0:e[t]}},zt=jt("length"),qt=9007199254740991;var Ut=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=qt};var Wt=function(t){return null!=t&&Ut(zt(t))&&!G(t)};var Ht=function(t){return s(t)&&Wt(t)},$t="[object Arguments]",Kt=Object.prototype,Gt=Kt.hasOwnProperty,Jt=Kt.toString,Qt=Kt.propertyIsEnumerable;var Yt=function(t){return Ht(t)&&Gt.call(t,"callee")&&(!Qt.call(t,"callee")||Jt.call(t)==$t)},Xt=Array.isArray,Zt="[object String]",te=Object.prototype.toString;var ee=function(t){return"string"==typeof t||!Xt(t)&&s(t)&&te.call(t)==Zt};var ne=function(t){var e=t?t.length:void 0;return Ut(e)&&(Xt(t)||ee(t)||Yt(t))?Lt(e,String):null},oe=9007199254740991,ie=/^(?:0|[1-9]\d*)$/;var re=function(t,e){return!!(e=null==e?oe:e)&&("number"==typeof t||ie.test(t))&&t>-1&&t%1==0&&t<e},se=Object.prototype;var ae=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||se)};var ce=function(t){var e=ae(t);if(!e&&!Wt(t))return Bt(t);var n=ne(t),o=!!n,i=n||[],r=i.length;for(var s in t)!Nt(t,s)||o&&("length"==s||re(s,r))||e&&"constructor"==s||i.push(s);return i};var le=function(t,e){return t&&Ft(e,ce(e),t)};var de=function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n};var ue=function(t,e){var n=-1,o=t.length;for(e||(e=Array(o));++n<o;)e[n]=t[n];return e},he=Object.getOwnPropertySymbols;function fe(t){return he(Object(t))}he||(fe=function(){return[]});var pe=fe;var me=function(t,e){return Ft(t,pe(t),e)};var ge=function(t,e){for(var n=-1,o=e.length,i=t.length;++n<o;)t[i+n]=e[n];return t};var be=function(t,e,n){var o=e(t);return Xt(t)?o:ge(o,n(t))};var we=function(t){return be(t,ce,pe)},ve=ot(gt.a,"DataView"),_e=ot(gt.a,"Promise"),ke=ot(gt.a,"Set"),ye=ot(gt.a,"WeakMap"),xe=Object.prototype.toString,Ae=Q(ve),Ce=Q(bt),Te=Q(_e),Se=Q(ke),Ee=Q(ye);function Pe(t){return xe.call(t)}(ve&&"[object DataView]"!=Pe(new ve(new ArrayBuffer(1)))||bt&&"[object Map]"!=Pe(new bt)||_e&&"[object Promise]"!=Pe(_e.resolve())||ke&&"[object Set]"!=Pe(new ke)||ye&&"[object WeakMap]"!=Pe(new ye))&&(Pe=function(t){var e=xe.call(t),n="[object Object]"==e?t.constructor:void 0,o=n?Q(n):void 0;if(o)switch(o){case Ae:return"[object DataView]";case Ce:return"[object Map]";case Te:return"[object Promise]";case Se:return"[object Set]";case Ee:return"[object WeakMap]"}return e});var Oe=Pe,Re=Object.prototype.hasOwnProperty;var Ie=function(t){var e=t.length,n=t.constructor(e);return e&&"string"==typeof t[0]&&Re.call(t,"index")&&(n.index=t.index,n.input=t.input),n},Me=gt.a.Uint8Array;var Fe=function(t){var e=new t.constructor(t.byteLength);return new Me(e).set(new Me(t)),e};var Ve=function(t,e){var n=e?Fe(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)};var Ne=function(t,e){return t.set(e[0],e[1]),t};var De=function(t,e,n,o){var i=-1,r=t.length;for(o&&r&&(n=t[++i]);++i<r;)n=e(n,t[i],i,t);return n};var Be=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,o){n[++e]=[o,t]}),n};var Le=function(t,e,n){var o=e?n(Be(t),!0):Be(t);return De(o,Ne,new t.constructor)},je=/\w*$/;var ze=function(t){var e=new t.constructor(t.source,je.exec(t));return e.lastIndex=t.lastIndex,e};var qe=function(t,e){return t.add(e),t};var Ue=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n};var We=function(t,e,n){var o=e?n(Ue(t),!0):Ue(t);return De(o,qe,new t.constructor)},He=gt.a.Symbol,$e=He?He.prototype:void 0,Ke=$e?$e.valueOf:void 0;var Ge=function(t){return Ke?Object(Ke.call(t)):{}};var Je=function(t,e){var n=e?Fe(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)},Qe="[object Boolean]",Ye="[object Date]",Xe="[object Map]",Ze="[object Number]",tn="[object RegExp]",en="[object Set]",nn="[object String]",on="[object Symbol]",rn="[object ArrayBuffer]",sn="[object DataView]",an="[object Float32Array]",cn="[object Float64Array]",ln="[object Int8Array]",dn="[object Int16Array]",un="[object Int32Array]",hn="[object Uint8Array]",fn="[object Uint8ClampedArray]",pn="[object Uint16Array]",mn="[object Uint32Array]";var gn=function(t,e,n,o){var i=t.constructor;switch(e){case rn:return Fe(t);case Qe:case Ye:return new i(+t);case sn:return Ve(t,o);case an:case cn:case ln:case dn:case un:case hn:case fn:case pn:case mn:return Je(t,o);case Xe:return Le(t,o,n);case Ze:case nn:return new i(t);case tn:return ze(t);case en:return We(t,o,n);case on:return Ge(t)}},bn=Object.create;var wn=function(t){return W(t)?bn(t):{}};var vn=function(t){return"function"!=typeof t.constructor||ae(t)?{}:wn(i(t))},_n=n(15),kn="[object Arguments]",yn="[object Function]",xn="[object GeneratorFunction]",An="[object Object]",Cn={};Cn[kn]=Cn["[object Array]"]=Cn["[object ArrayBuffer]"]=Cn["[object DataView]"]=Cn["[object Boolean]"]=Cn["[object Date]"]=Cn["[object Float32Array]"]=Cn["[object Float64Array]"]=Cn["[object Int8Array]"]=Cn["[object Int16Array]"]=Cn["[object Int32Array]"]=Cn["[object Map]"]=Cn["[object Number]"]=Cn[An]=Cn["[object RegExp]"]=Cn["[object Set]"]=Cn["[object String]"]=Cn["[object Symbol]"]=Cn["[object Uint8Array]"]=Cn["[object Uint8ClampedArray]"]=Cn["[object Uint16Array]"]=Cn["[object Uint32Array]"]=!0,Cn["[object Error]"]=Cn[yn]=Cn["[object WeakMap]"]=!1;var Tn=function t(e,n,o,i,s,a,c){var l;if(i&&(l=a?i(e,s,a,c):i(e)),void 0!==l)return l;if(!W(e))return e;var d=Xt(e);if(d){if(l=Ie(e),!n)return ue(e,l)}else{var u=Oe(e),h=u==yn||u==xn;if(Object(_n.a)(e))return de(e,n);if(u==An||u==kn||h&&!a){if(r(e))return a?e:{};if(l=vn(h?{}:e),!n)return me(e,le(l,e))}else{if(!Cn[u])return a?e:{};l=gn(e,u,t,n)}}c||(c=new Ot);var f=c.get(e);if(f)return f;if(c.set(e,l),!d)var p=o?we(e):ce(e);return Rt(p||e,function(r,s){p&&(r=e[s=r]),Mt(l,s,t(r,n,o,i,s,e,c))}),l};var Sn=function(t){return Tn(t,!1,!0)};function En(t,e){const n=Math.min(t.length,e.length);for(let o=0;o<n;o++)if(t[o]!=e[o])return o;return t.length==e.length?"same":t.length<e.length?"prefix":"extension"}class Pn{constructor(){this.parent=null}get index(){let t;if(!this.parent)return null;if(-1==(t=this.parent.getChildIndex(this)))throw new m.b("view-node-not-found-in-parent: The node's parent does not contain this node.");return t}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.parent instanceof Pn?this.parent.document:null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let i=0;for(;n[i]==o[i]&&n[i];)i++;return 0===i?null:n[i-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=En(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire("change:"+t,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Sn(this);return delete t.parent,t}is(t){return"node"==t}}P(Pn,y);class On extends Pn{constructor(t){super(),this._textData=t}is(t){return"text"==t||super.is(t)}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof On&&(this===t||this.data===t.data)}_clone(){return new On(this.data)}}class Rn{constructor(t,e,n){if(this.textNode=t,e<0||e>t.data.length)throw new m.b("view-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.");if(n<0||e+n>t.data.length)throw new m.b("view-textproxy-wrong-length: Given length value is incorrect.");this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;null!==n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}function In(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}function Mn(t){return!(!t||!t[Symbol.iterator])}class Fn{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)("string"==typeof e||e instanceof RegExp)&&(e={name:e}),e.classes&&("string"==typeof e.classes||e.classes instanceof RegExp)&&(e.classes=[e.classes]),this._patterns.push(e)}match(...t){for(const e of t)for(const t of this._patterns){const n=Vn(e,t);if(n)return{element:e,pattern:t,match:n}}return null}matchAll(...t){const e=[];for(const n of t)for(const t of this._patterns){const o=Vn(n,t);o&&e.push({element:n,pattern:t,match:o})}return e.length>0?e:null}getElementName(){if(1!==this._patterns.length)return null;const t=this._patterns[0],e=t.name;return"function"==typeof t||!e||e instanceof RegExp?null:e}}function Vn(t,e){if("function"==typeof e)return e(t);const n={};return e.name&&(n.name=function(t,e){if(t instanceof RegExp)return t.test(e);return t===e}(e.name,t.name),!n.name)?null:e.attributes&&(n.attributes=function(t,e){const n=[];for(const o in t){const i=t[o];if(!e.hasAttribute(o))return null;{const t=e.getAttribute(o);if(!0===i)n.push(o);else if(i instanceof RegExp){if(!i.test(t))return null;n.push(o)}else{if(t!==i)return null;n.push(o)}}}return n}(e.attributes,t),!n.attributes)?null:!(e.classes&&(n.classes=function(t,e){const n=[];for(const o of t)if(o instanceof RegExp){const t=e.getClassNames();for(const e of t)o.test(e)&&n.push(e);if(0===n.length)return null}else{if(!e.hasClass(o))return null;n.push(o)}return n}(e.classes,t),!n.classes))&&(!(e.styles&&(n.styles=function(t,e){const n=[];for(const o in t){const i=t[o];if(!e.hasStyle(o))return null;{const t=e.getStyle(o);if(i instanceof RegExp){if(!i.test(t))return null;n.push(o)}else{if(t!==i)return null;n.push(o)}}}return n}(e.styles,t),!n.styles))&&n)}class Nn extends Pn{constructor(t,e,n){if(super(),this.name=t,this._attrs=function(t){t=f(t)?In(t):new Map(t);for(const[e,n]of t)null===n?t.delete(e):"string"!=typeof n&&t.set(e,String(n));return t}(e),this._children=[],n&&this._insertChild(0,n),this._classes=new Set,this._attrs.has("class")){const t=this._attrs.get("class");Bn(this._classes,t),this._attrs.delete("class")}this._styles=new Map,this._attrs.has("style")&&(Dn(this._styles,this._attrs.get("style")),this._attrs.delete("style")),this._customProperties=new Map}get childCount(){return this._children.length}get isEmpty(){return 0===this._children.length}is(t,e=null){return e?"element"==t&&e==this.name:"element"==t||t==this.name||super.is(t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.size>0&&(yield"style");for(const t of this._attrs.keys())yield t}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.size>0&&(yield["style",this.getAttribute("style")])}getAttribute(t){if("class"==t)return this._classes.size>0?[...this._classes].join(" "):void 0;if("style"!=t)return this._attrs.get(t);if(this._styles.size>0){let t="";for(const[e,n]of this._styles)t+=`${e}:${n};`;return t}}hasAttribute(t){return"class"==t?this._classes.size>0:"style"==t?this._styles.size>0:this._attrs.has(t)}isSimilar(t){if(!(t instanceof Nn))return!1;if(this===t)return!0;if(this.name!=t.name)return!1;if(this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const[e,n]of this._styles)if(!t._styles.has(e)||t._styles.get(e)!==n)return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.get(t)}getStyleNames(){return this._styles.keys()}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new Fn(...t);let n=this.parent;for(;n;){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=Array.from(this._styles).map(t=>`${t[0]}:${t[1]}`).sort().join(";"),n=Array.from(this._attrs).map(t=>`${t[0]}="${t[1]}"`).sort().join(" ");return this.name+(""==t?"":` class="${t}"`)+(""==e?"":` style="${e}"`)+(""==n?"":` ${n}`)}_clone(t=!1){const e=[];if(t)for(const n of this.getChildren())e.push(n._clone(t));const n=new this.constructor(this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles=new Map(this._styles),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(t){if("string"==typeof t)return[new On(t)];Mn(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new On(t):t instanceof Rn?new On(t.data):t)}(e);for(const e of o)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){e=String(e),this._fireChange("attributes",this),"class"==t?Bn(this._classes,e):"style"==t?Dn(this._styles,e):this._attrs.set(t,e)}_removeAttribute(t){return this._fireChange("attributes",this),"class"==t?this._classes.size>0&&(this._classes.clear(),!0):"style"==t?this._styles.size>0&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.add(t))}_removeClass(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._classes.delete(t))}_setStyle(t,e){if(this._fireChange("attributes",this),f(t)){const e=Object.keys(t);for(const n of e)this._styles.set(n,t[n])}else this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this),(t=Array.isArray(t)?t:[t]).forEach(t=>this._styles.delete(t))}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function Dn(t,e){let n=null,o=0,i=0,r=null;if(t.clear(),""!==e){";"!=e.charAt(e.length-1)&&(e+=";");for(let s=0;s<e.length;s++){const a=e.charAt(s);if(null===n)switch(a){case":":r||(r=e.substr(o,s-o),i=s+1);break;case'"':case"'":n=a;break;case";":const c=e.substr(i,s-i);r&&t.set(r.trim(),c.trim()),r=null,o=s+1}else a===n&&(n=null)}}}function Bn(t,e){const n=e.split(/\s+/);t.clear(),n.forEach(e=>t.add(e))}class Ln extends Nn{constructor(t,e,n){super(t,e,n),this.getFillerOffset=jn}is(t,e=null){return e?"containerElement"==t&&e==this.name||super.is(t,e):"containerElement"==t||super.is(t)}}function jn(){const t=[...this.getChildren()],e=t[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const e of t)if(!e.is("uiElement"))return null;return this.childCount}var zn=function(t,e,n){if(!W(n))return!1;var o=typeof e;return!!("number"==o?Wt(n)&&re(e,n.length):"string"==o&&e in n)&&R(n[e],t)};var qn=function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)},Un="[object Symbol]",Wn=Object.prototype.toString;var Hn=function(t){return"symbol"==typeof t||s(t)&&Wn.call(t)==Un},$n=NaN,Kn=/^\s+|\s+$/g,Gn=/^[-+]0x[0-9a-f]+$/i,Jn=/^0b[01]+$/i,Qn=/^0o[0-7]+$/i,Yn=parseInt;var Xn=function(t){if("number"==typeof t)return t;if(Hn(t))return $n;if(W(t)){var e=G(t.valueOf)?t.valueOf():t;t=W(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(Kn,"");var n=Jn.test(t);return n||Qn.test(t)?Yn(t.slice(2),n?2:8):Gn.test(t)?$n:+t},Zn=1/0,to=1.7976931348623157e308;var eo=function(t){return t?(t=Xn(t))===Zn||t===-Zn?(t<0?-1:1)*to:t==t?t:0:0===t?t:0};var no=function(t){var e=eo(t),n=e%1;return e==e?n?e-n:e:0},oo="Expected a function",io=Math.max;var ro=function(t,e){if("function"!=typeof t)throw new TypeError(oo);return e=io(void 0===e?t.length-1:no(e),0),function(){for(var n=arguments,o=-1,i=io(n.length-e,0),r=Array(i);++o<i;)r[o]=n[e+o];switch(e){case 0:return t.call(this,r);case 1:return t.call(this,n[0],r);case 2:return t.call(this,n[0],n[1],r)}var s=Array(e+1);for(o=-1;++o<e;)s[o]=n[o];return s[e]=r,qn(t,this,s)}};var so=function(t){return ro(function(e,n){var o=-1,i=n.length,r=i>1?n[i-1]:void 0,s=i>2?n[2]:void 0;for(r=t.length>3&&"function"==typeof r?(i--,r):void 0,s&&zn(n[0],n[1],s)&&(r=i<3?void 0:r,i=1),e=Object(e);++o<i;){var a=n[o];a&&t(e,a,o,r)}return e})},ao=gt.a.Reflect;var co=function(t){for(var e,n=[];!(e=t.next()).done;)n.push(e.value);return n},lo=Object.prototype,uo=ao?ao.enumerate:void 0,ho=lo.propertyIsEnumerable;function fo(t){t=null==t?t:Object(t);var e=[];for(var n in t)e.push(n);return e}uo&&!ho.call({valueOf:1},"valueOf")&&(fo=function(t){return co(uo(t))});var po=fo,mo=Object.prototype.hasOwnProperty;var go=function(t){for(var e=-1,n=ae(t),o=po(t),i=o.length,r=ne(t),s=!!r,a=r||[],c=a.length;++e<i;){var l=o[e];s&&("length"==l||re(l,c))||"constructor"==l&&(n||!mo.call(t,l))||a.push(l)}return a},bo=!Object.prototype.propertyIsEnumerable.call({valueOf:1},"valueOf"),wo=so(function(t,e){if(bo||ae(e)||Wt(e))Ft(e,go(e),t);else for(var n in e)Mt(t,n,e[n])});const vo=Symbol("observableProperties"),_o=Symbol("boundObservables"),ko=Symbol("boundProperties"),yo={set(t,e){if(W(t))return void Object.keys(t).forEach(e=>{this.set(e,t[e])},this);Ao(this);const n=this[vo];if(t in this&&!n.has(t))throw new m.b("observable-set-cannot-override: Cannot override an existing property.");Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(e){const o=n.get(t);let i=this.fire("set:"+t,t,e,o);void 0===i&&(i=e),o===i&&n.has(t)||(n.set(t,i),this.fire("change:"+t,t,i,o))}}),this[t]=e},bind(...t){if(!t.length||!So(t))throw new m.b("observable-bind-wrong-properties: All properties must be strings.");if(new Set(t).size!==t.length)throw new m.b("observable-bind-duplicate-properties: Properties must be unique.");Ao(this);const e=this[ko];t.forEach(t=>{if(e.has(t))throw new m.b("observable-bind-rebind: Cannot bind the same property more that once.")});const n=new Map;return t.forEach(t=>{const o={property:t,to:[]};e.set(t,o),n.set(t,o)}),{to:Co,toMany:To,_observable:this,_bindProperties:t,_to:[],_bindings:n}},unbind(...t){if(!(vo in this))return;const e=this[ko],n=this[_o];if(t.length){if(!So(t))throw new m.b("observable-unbind-wrong-properties: Properties must be strings.");t.forEach(t=>{const o=e.get(t);if(!o)return;let i,r,s,a;o.to.forEach(t=>{i=t[0],r=t[1],s=n.get(i),(a=s[r]).delete(o),a.size||delete s[r],Object.keys(s).length||(n.delete(i),this.stopListening(i,"change"))}),e.delete(t)})}else n.forEach((t,e)=>{this.stopListening(e,"change")}),n.clear(),e.clear()},decorate(t){const e=this[t];if(!e)throw new m.b("observablemixin-cannot-decorate-undefined: Cannot decorate an undefined method.",{object:this,methodName:t});this.on(t,(t,n)=>{t.return=e.apply(this,n)}),this[t]=function(...e){return this.fire(t,e)}}};wo(yo,y);var xo=yo;function Ao(t){vo in t||(Object.defineProperty(t,vo,{value:new Map}),Object.defineProperty(t,_o,{value:new Map}),Object.defineProperty(t,ko,{value:new Map}))}function Co(...t){const e=function(...t){if(!t.length)throw new m.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");const e={to:[]};let n;"function"==typeof t[t.length-1]&&(e.callback=t.pop());return t.forEach(t=>{if("string"==typeof t)n.properties.push(t);else{if("object"!=typeof t)throw new m.b("observable-bind-to-parse-error: Invalid argument syntax in `to()`.");n={observable:t,properties:[]},e.to.push(n)}}),e}(...t),n=Array.from(this._bindings.keys()),o=n.length;if(!e.callback&&e.to.length>1)throw new m.b("observable-bind-to-no-callback: Binding multiple observables only possible with callback.");if(o>1&&e.callback)throw new m.b("observable-bind-to-extra-callback: Cannot bind multiple properties and use a callback in one binding.");e.to.forEach(t=>{if(t.properties.length&&t.properties.length!==o)throw new m.b("observable-bind-to-properties-length: The number of properties must match.");t.properties.length||(t.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(n[0]).callback=e.callback),function(t,e){e.forEach(e=>{const n=t[_o];let o;n.get(e.observable)||t.listenTo(e.observable,"change",(i,r)=>{(o=n.get(e.observable)[r])&&o.forEach(e=>{Eo(t,e.property)})})})}(this._observable,this._to),function(t){let e;t._bindings.forEach((n,o)=>{t._to.forEach(i=>{e=i.properties[n.callback?0:t._bindProperties.indexOf(o)],n.to.push([i.observable,e]),function(t,e,n,o){const i=t[_o],r=i.get(n),s=r||{};s[o]||(s[o]=new Set);s[o].add(e),r||i.set(n,s)}(t._observable,n,i.observable,e)})})}(this),this._bindProperties.forEach(t=>{Eo(this._observable,t)})}function To(t,e,n){if(this._bindings.size>1)throw new m.b("observable-bind-to-many-not-one-binding: Cannot bind multiple properties with toMany().");this.to(...function(t,e){const n=t.map(t=>[t,e]);return Array.prototype.concat.apply([],n)}(t,e),n)}function So(t){return t.every(t=>"string"==typeof t)}function Eo(t,e){const n=t[ko].get(e);let o;o=n.callback?n.callback.apply(t,n.to.map(t=>t[0][t[1]])):(o=n.to[0])[0][o[1]],t.hasOwnProperty(e)?t[e]=o:t.set(e,o)}const Po=Symbol("document");class Oo extends Ln{constructor(t,e,n){super(t,e,n),this.set("isReadOnly",!1),this.set("isFocused",!1)}get document(){return this.getCustomProperty(Po)}set _document(t){if(this.getCustomProperty(Po))throw new m.b("view-editableelement-document-already-set: View document is already set.");this._setCustomProperty(Po,t),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",e=>e&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}}P(Oo,xo);const Ro=Symbol("rootName");class Io extends Oo{constructor(t){super(t),this.rootName="main"}is(t,e=null){return e?"rootElement"==t&&e==this.name||super.is(t,e):"rootElement"==t||super.is(t)}get rootName(){return this.getCustomProperty(Ro)}set rootName(t){this._setCustomProperty(Ro,t)}set _name(t){this.name=t}}class Mo{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new m.b("view-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.");if(t.direction&&"forward"!=t.direction&&"backward"!=t.direction)throw new m.b("view-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this.position=Fo.createFromPosition(t.startPosition):this.position=Fo.createFromPosition(t.boundaries["backward"==t.direction?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}skip(t){let e,n,o;do{o=this.position,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=o)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){let t=Fo.createFromPosition(this.position);const e=this.position,n=t.parent;if(null===n.parent&&t.offset===n.childCount)return{done:!0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0};let o;if(n instanceof On){if(t.isAtEnd)return this.position=Fo.createAfter(n),this._next();o=n.data[t.offset]}else o=n.getChild(t.offset);if(o instanceof Nn)return this.shallow?t.offset++:t=new Fo(o,0),this.position=t,this._formatReturnValue("elementStart",o,e,t,1);if(o instanceof On){if(this.singleCharacters)return t=new Fo(o,0),this.position=t,this._next();{let n,i=o.data.length;return o==this._boundaryEndParent?(i=this.boundaries.end.offset,n=new Rn(o,0,i),t=Fo.createAfter(n)):(n=new Rn(o,0,o.data.length),t.offset++),this.position=t,this._formatReturnValue("text",n,e,t,i)}}if("string"==typeof o){let o;if(this.singleCharacters)o=1;else{o=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset}const i=new Rn(n,t.offset,o);return t.offset+=o,this.position=t,this._formatReturnValue("text",i,e,t,o)}return t=Fo.createAfter(n),this.position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=Fo.createFromPosition(this.position);const e=this.position,n=t.parent;if(null===n.parent&&0===t.offset)return{done:!0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0};let o;if(n instanceof On){if(t.isAtStart)return this.position=Fo.createBefore(n),this._previous();o=n.data[t.offset-1]}else o=n.getChild(t.offset-1);if(o instanceof Nn)return this.shallow?(t.offset--,this.position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new Fo(o,o.childCount),this.position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof On){if(this.singleCharacters)return t=new Fo(o,o.data.length),this.position=t,this._previous();{let n,i=o.data.length;if(o==this._boundaryStartParent){const e=this.boundaries.start.offset;i=(n=new Rn(o,e,o.data.length-e)).data.length,t=Fo.createBefore(n)}else n=new Rn(o,0,o.data.length),t.offset--;return this.position=t,this._formatReturnValue("text",n,e,t,i)}}if("string"==typeof o){let o;if(this.singleCharacters)o=1;else{const e=n===this._boundaryStartParent?this.boundaries.start.offset:0;o=t.offset-e}t.offset-=o;const i=new Rn(n,t.offset,o);return this.position=t,this._formatReturnValue("text",i,e,t,o)}return t=Fo.createBefore(n),this.position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,o,i){return e instanceof Rn&&(e.offsetInText+e.data.length==e.textNode.data.length&&("forward"!=this.direction||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=Fo.createAfter(e.textNode):(o=Fo.createAfter(e.textNode),this.position=o)),0===e.offsetInText&&("backward"!=this.direction||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=Fo.createBefore(e.textNode):(o=Fo.createBefore(e.textNode),this.position=o))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:i}}}}class Fo{constructor(t,e){this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return 0===this.offset}get isAtEnd(){const t=this.parent.is("text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof Oo);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=Fo.createFromPosition(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Mo(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return 0===o?null:e[o-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return"before"==this.compareWith(t)}isAfter(t){return"after"==this.compareWith(t)}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const o=En(e,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<n[o]?"before":"after"}}static createAt(t,e){if(t instanceof Fo)return this.createFromPosition(t);{const n=t;if("end"==e)e=n.is("text")?n.data.length:n.childCount;else{if("before"==e)return this.createBefore(n);if("after"==e)return this.createAfter(n);e||(e=0)}return new Fo(n,e)}}static createAfter(t){if(t.is("textProxy"))return new Fo(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new m.b("view-position-after-root: You can not make position after root.",{root:t});return new Fo(t.parent,t.index+1)}static createBefore(t){if(t.is("textProxy"))return new Fo(t.textNode,t.offsetInText);if(!t.parent)throw new m.b("view-position-before-root: You can not make position before root.",{root:t});return new Fo(t.parent,t.index)}static createFromPosition(t){return new this(t.parent,t.offset)}}class Vo{constructor(t,e=null){this.start=Fo.createFromPosition(t),this.end=e?Fo.createFromPosition(e):Fo.createFromPosition(t)}*[Symbol.iterator](){yield*new Mo({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(No,{direction:"backward"}),e=this.end.getLastMatchingPosition(No);return t.parent.is("text")&&t.isAtStart&&(t=Fo.createBefore(t.parent)),e.parent.is("text")&&e.isAtEnd&&(e=Fo.createAfter(e.parent)),new Vo(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(No);if(t.isAfter(this.end)||t.isEqual(this.end))return new Vo(t,t);let e=this.end.getLastMatchingPosition(No,{direction:"backward"});const n=t.nodeAfter,o=e.nodeBefore;return n&&n.is("text")&&(t=new Fo(n,0)),o&&o.is("text")&&(e=new Fo(o,o.data.length)),new Vo(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Vo(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Vo(t.end,this.end))):e.push(Vo.createFromRange(this)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Vo(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Mo(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Mo(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new Mo(t);yield e.position;for(const t of e)yield t.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static createFromParentsAndOffsets(t,e,n,o){return new this(new Fo(t,e),new Fo(n,o))}static createFromRange(t){return new this(t.start,t.end)}static createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static createIn(t){return this.createFromParentsAndOffsets(t,0,t,t.childCount)}static createOn(t){const e=t.is("textProxy")?t.offsetSize:1;return this.createFromPositionAndShift(Fo.createBefore(t),e)}static createCollapsedAt(t,e){const n=Fo.createAt(t,e),o=Fo.createFromPosition(n);return new Vo(n,o)}}function No(t){return!(!t.item.is("attributeElement")&&!t.item.is("uiElement"))}function Do(t){let e=0;for(const n of t)e++;return e}class Bo{constructor(t=null,e,n){this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",this.setTo(t,e,n)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1],e=this._lastRangeBackward?t.end:t.start;return Fo.createFromPosition(e)}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1],e=this._lastRangeBackward?t.start:t.end;return Fo.createFromPosition(e)}get isCollapsed(){return 1===this.rangeCount&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield Vo.createFromRange(t)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?Vo.createFromRange(t):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?Vo.createFromRange(t):null}getFirstPosition(){const t=this.getFirstRange();return t?Fo.createFromPosition(t.start):null}getLastPosition(){const t=this.getLastRange();return t?Fo.createFromPosition(t.end):null}isEqual(t){if(this.isFake!=t.isFake)return!1;if(this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel)return!1;if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=Do(this.getRanges());if(e!=Do(t.getRanges()))return!1;if(0==e)return!0;for(let e of this.getRanges()){e=e.getTrimmed();let n=!1;for(let o of t.getRanges())if(o=o.getTrimmed(),e.start.isEqual(o.start)&&e.end.isEqual(o.end)){n=!0;break}if(!n)return!1}return!0}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange(),e=t.start.nodeAfter,n=t.end.nodeBefore;return e instanceof Nn&&e==n?e:null}setTo(t,e,n){if(null===t)this._setRanges([]),this._setFakeOptions(e);else if(t instanceof Bo||t instanceof Lo)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof Vo)this._setRanges([t],e&&e.backward),this._setFakeOptions(e);else if(t instanceof Fo)this._setRanges([new Vo(t)]),this._setFakeOptions(e);else if(t instanceof Pn){const o=!!n&&!!n.backward;let i;if(void 0===e)throw new m.b("view-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.");i="in"==e?Vo.createIn(t):"on"==e?Vo.createOn(t):Vo.createCollapsedAt(t,e),this._setRanges([i],o),this._setFakeOptions(n)}else{if(!Mn(t))throw new m.b("view-selection-setTo-not-selectable: Cannot set selection to given place.");this._setRanges(t,e&&e.backward),this._setFakeOptions(e)}this.fire("change")}setFocus(t,e){if(null===this.anchor)throw new m.b("view-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.");const n=Fo.createAt(t,e);if("same"==n.compareWith(this.focus))return;const o=this.anchor;this._ranges.pop(),"before"==n.compareWith(o)?this._addRange(new Vo(n,o),!0):this._addRange(new Vo(o,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const e of t)this._addRange(e);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Vo))throw new m.b("view-selection-invalid-range: Invalid Range.");this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new m.b("view-selection-range-intersects: Trying to add a range that intersects with another range from selection.",{addedRange:t,intersectingRange:e});this._ranges.push(Vo.createFromRange(t))}}P(Bo,y);class Lo{constructor(t=null,e,n){this._selection=new Bo,this._selection.delegate("change").to(this),this._selection.setTo(t,e,n)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setFocus(t,e){this._selection.setFocus(t,e)}}P(Lo,y);class jo{constructor(t={}){this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[]}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){let n;const o=this._idProperty;if(o in t){if("string"!=typeof(n=t[o]))throw new m.b("collection-add-invalid-id");if(this.get(n))throw new m.b("collection-add-item-already-exists")}else t[o]=n=w();if(void 0===e)e=this._items.length;else if(e>this._items.length||e<0)throw new m.b("collection-add-item-invalid-index");return this._items.splice(e,0,t),this._itemMap.set(n,t),this.fire("add",t,e),this}get(t){let e;if("string"==typeof t)e=this._itemMap.get(t);else{if("number"!=typeof t)throw new m.b("collection-get-invalid-arg: Index or id must be given.");e=this._items[t]}return e||null}getIndex(t){let e;return e="string"==typeof t?this._itemMap.get(t):t,this._items.indexOf(e)}remove(t){let e,n,o,i=!1;const r=this._idProperty;if("string"==typeof t?(n=t,i=!(o=this._itemMap.get(n)),o&&(e=this._items.indexOf(o))):"number"==typeof t?(e=t,i=!(o=this._items[e]),o&&(n=o[r])):(n=(o=t)[r],i=-1==(e=this._items.indexOf(o))||!this._itemMap.get(n)),i)throw new m.b("collection-remove-404: Item not found.");this._items.splice(e,1),this._itemMap.delete(n);const s=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(s),this.fire("remove",o,e),o}map(t,e){return this._items.map(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){for(this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);this.length;)this.remove(0)}bindTo(t){if(this._bindToCollection)throw new m.b("collection-bind-to-rebind: The collection cannot be bound more than once.");return this._bindToCollection=t,{as:t=>{this._setUpBindToBinding(e=>new t(e))},using:t=>{"function"==typeof t?this._setUpBindToBinding(e=>t(e)):this._setUpBindToBinding(e=>e[t])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(n,o,i)=>{const r=e._bindToCollection==this,s=e._bindToInternalToExternalMap.get(o);if(r&&s)this._bindToExternalToInternalMap.set(o,s),this._bindToInternalToExternalMap.set(s,o);else{const n=t(o);if(!n)return void this._skippedIndexesFromExternal.push(i);let r=i;for(const t of this._skippedIndexesFromExternal)i>t&&r--;for(const t of e._skippedIndexesFromExternal)r>=t&&r++;this._bindToExternalToInternalMap.set(o,n),this._bindToInternalToExternalMap.set(n,o),this.add(n,r);for(let t=0;t<e._skippedIndexesFromExternal.length;t++)r<=e._skippedIndexesFromExternal[t]&&e._skippedIndexesFromExternal[t]++}};for(const t of e)n(0,t,e.getIndex(t));this.listenTo(e,"add",n),this.listenTo(e,"remove",(t,e,n)=>{const o=this._bindToExternalToInternalMap.get(e);o&&this.remove(o),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((t,e)=>(n<e&&t.push(e-1),n>e&&t.push(e),t),[])})}[Symbol.iterator](){return this._items[Symbol.iterator]()}}P(jo,y);class zo{constructor(){this.selection=new Lo,this.roots=new jo({idProperty:"rootName"}),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isComposing",!1),this._postFixers=new Set}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t))break}while(e)}}P(zo,xo);const qo=10;class Uo extends Nn{constructor(t,e,n){super(t,e,n),this.getFillerOffset=Wo,this._priority=qo,this._id=null,this._clonesGroup=null}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(null===this.id)throw new m.b("attribute-element-get-elements-with-same-id-no-id: Cannot get elements with the same id for an attribute element without id.");return new Set(this._clonesGroup)}is(t,e=null){return e?"attributeElement"==t&&e==this.name||super.is(t,e):"attributeElement"==t||super.is(t)}isSimilar(t){return null!==this.id||null!==t.id?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function Wo(){if(Ho(this))return null;let t=this.parent;for(;t&&t.is("attributeElement");){if(Ho(t)>1)return null;t=t.parent}return!t||Ho(t)>1?null:this.childCount}function Ho(t){return Array.from(t.getChildren()).filter(t=>!t.is("uiElement")).length}Uo.DEFAULT_PRIORITY=qo;class $o extends Nn{constructor(t,e,n){super(t,e,n),this.getFillerOffset=Ko}is(t,e=null){return e?"emptyElement"==t&&e==this.name||super.is(t,e):"emptyElement"==t||super.is(t)}_insertChild(t,e){if(e&&(e instanceof Pn||Array.from(e).length>0))throw new m.b("view-emptyelement-cannot-add: Cannot add child nodes to EmptyElement instance.")}}function Ko(){return null}const Go=navigator.userAgent.toLowerCase();var Jo={isMac:function(t){return t.indexOf("macintosh")>-1}(Go),isEdge:function(t){return!!t.match(/edge\/(\d+.?\d*)/)}(Go)};const Qo={"⌘":"ctrl","⇧":"shift","⌥":"alt"},Yo={ctrl:"⌘",shift:"⇧",alt:"⌥"},Xo=function(){const t={arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,cmd:1114112,shift:2228224,alt:4456448};for(let e=65;e<=90;e++){const n=String.fromCharCode(e);t[n.toLowerCase()]=e}for(let e=48;e<=57;e++)t[e-48]=e;for(let e=112;e<=123;e++)t["f"+(e-111)]=e;return t}();function Zo(t){let e;if("string"==typeof t){if(!(e=Xo[t.toLowerCase()]))throw new m.b("keyboard-unknown-key: Unknown key name.",{key:t})}else e=t.keyCode+(t.altKey?Xo.alt:0)+(t.ctrlKey?Xo.ctrl:0)+(t.shiftKey?Xo.shift:0);return e}function ti(t){return"string"==typeof t&&(t=ei(t)),t.map(t=>"string"==typeof t?Zo(t):t).reduce((t,e)=>e+t,0)}function ei(t){return t.split(/\s*\+\s*/)}class ni extends Nn{constructor(t,e,n){super(t,e,n),this.getFillerOffset=ii}is(t,e=null){return e?"uiElement"==t&&e==this.name||super.is(t,e):"uiElement"==t||super.is(t)}_insertChild(t,e){if(e&&(e instanceof Pn||Array.from(e).length>0))throw new m.b("view-uielement-cannot-add: Cannot add child nodes to UIElement instance.")}render(t){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const t of this.getAttributeKeys())e.setAttribute(t,this.getAttribute(t));return e}}function oi(t){t.document.on("keydown",(e,n)=>(function(t,e,n){if(e.keyCode==Xo.arrowright){const t=e.domTarget.ownerDocument.defaultView.getSelection(),o=1==t.rangeCount&&t.getRangeAt(0).collapsed;if(o||e.shiftKey){const e=t.focusNode,i=t.focusOffset,r=n.domPositionToView(e,i);if(null===r)return;let s=!1;const a=r.getLastMatchingPosition(t=>(t.item.is("uiElement")&&(s=!0),!(!t.item.is("uiElement")&&!t.item.is("attributeElement"))));if(s){const e=n.viewPositionToDom(a);o?t.collapse(e.parent,e.offset):t.extend(e.parent,e.offset)}}}})(0,n,t.domConverter))}function ii(){return null}class ri{constructor(t){this._children=[],t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(t){if("string"==typeof t)return[new On(t)];Mn(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new On(t):t instanceof Rn?new On(t.data):t)}(e);for(const e of o)null!==e.parent&&e._remove(),e.parent=this,this._children.splice(t,0,e),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}}P(ri,y);class si{constructor(t){this.document=t,this._cloneGroups=new Map}setSelection(t,e,n){this.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createText(t){return new On(t)}createAttributeElement(t,e,n={}){const o=new Uo(t,e);return n.priority&&(o._priority=n.priority),n.id&&(o._id=n.id),o}createContainerElement(t,e){return new Ln(t,e)}createEditableElement(t,e){const n=new Oo(t,e);return n._document=this.document,n}createEmptyElement(t,e){return new $o(t,e)}createUIElement(t,e,n){const o=new ni(t,e);return n&&(o.render=n),o}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){f(t)&&void 0===n&&(n=e),n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof Fo?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new m.b("view-writer-break-non-container-element: Trying to break an element which is not a container element.");if(!e.parent)throw new m.b("view-writer-break-root: Trying to break root element.");if(t.isAtStart)return Fo.createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(Fo.createAfter(e),n);const o=new Vo(t,Fo.createAt(e,"end")),i=new Fo(n,0);this.move(o,i)}return Fo.createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("text"))return t;if(n.is("attributeElement")&&0===n.childCount){const t=n.parent,e=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new Fo(t,e))}const o=n.getChild(e-1),i=n.getChild(e);if(!o||!i)return t;if(o.is("text")&&i.is("text"))return ui(o,i);if(o.is("attributeElement")&&i.is("attributeElement")&&o.isSimilar(i)){const t=o.childCount;return o._appendChild(i.getChildren()),i._remove(),this._removeFromClonedElementsGroup(i),this.mergeAttributes(new Fo(o,t))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new m.b("view-writer-merge-containers-invalid-position: Element before and after given position cannot be merged.");const o=e.getChild(e.childCount-1),i=o instanceof On?Fo.createAt(o,"end"):Fo.createAt(e,"end");return this.move(Vo.createIn(n),Fo.createAt(e,"end")),this.remove(Vo.createOn(n)),i}insert(t,e){(function t(e){for(const n of e){if(!hi.some(t=>n instanceof t))throw new m.b("view-writer-insert-invalid-node");n.is("text")||t(n.getChildren())}})(e=Mn(e)?[...e]:[e]);const n=ai(t);if(!n)throw new m.b("view-writer-invalid-position-container");const o=this._breakAttributes(t,!0),i=n._insertChild(o.offset,e);for(const t of e)this._addToClonedElementsGroup(t);const r=o.getShiftedBy(i),s=this.mergeAttributes(o);if(0===i)return new Vo(s,s);{s.isEqual(o)||r.offset--;const t=this.mergeAttributes(r);return new Vo(s,t)}}remove(t){if(pi(t),t.isCollapsed)return new ri;const{start:e,end:n}=this._breakAttributesRange(t,!0),o=e.parent,i=n.offset-e.offset,r=o._removeChildren(e.offset,i);for(const t of r)this._removeFromClonedElementsGroup(t);const s=this.mergeAttributes(e);return t.start=s,t.end=Fo.createFromPosition(s),new ri(r)}clear(t,e){pi(t);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const n=o.item;let i;if(n.is("element")&&e.isSimilar(n))i=Vo.createOn(n);else if(!o.nextPosition.isAfter(t.start)&&n.is("textProxy")){const t=n.getAncestors().find(t=>t.is("element")&&e.isSimilar(t));t&&(i=Vo.createIn(t))}i&&(i.end.isAfter(t.end)&&(i.end=t.end),i.start.isBefore(t.start)&&(i.start=t.start),this.remove(i))}}move(t,e){let n;if(e.isAfter(t.end)){const o=(e=this._breakAttributes(e,!0)).parent,i=o.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=o.childCount-i}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof Uo))throw new m.b("view-writer-wrap-invalid-attribute");if(pi(t),t.isCollapsed){let n=t.start;n.parent.is("element")&&!function(t){return Array.from(t.getChildren()).some(t=>!t.is("uiElement"))}(n.parent)&&(n=n.getLastMatchingPosition(t=>t.item.is("uiElement"))),n=this._wrapPosition(n,e);const o=this.document.selection;return o.isCollapsed&&o.getFirstPosition().isEqual(t.start)&&this.setSelection(n),new Vo(n)}return this._wrapRange(t,e)}unwrap(t,e){if(!(e instanceof Uo))throw new m.b("view-writer-unwrap-invalid-attribute");if(pi(t),t.isCollapsed)return t;const{start:n,end:o}=this._breakAttributesRange(t,!0);if(o.isEqual(n.getShiftedBy(1))){const t=n.nodeAfter;if(!e.isSimilar(t)&&t instanceof Uo&&this._unwrapAttributeElement(e,t)){const t=this.mergeAttributes(n);t.isEqual(n)||o.offset--;const e=this.mergeAttributes(o);return new Vo(t,e)}}const i=n.parent,r=this._unwrapChildren(i,n.offset,o.offset,e),s=this.mergeAttributes(r.start);s.isEqual(r.start)||r.end.offset--;const a=this.mergeAttributes(r.end);return new Vo(s,a)}rename(t,e){const n=new Ln(e,t.getAttributes());return this.insert(Fo.createAfter(t),n),this.move(Vo.createIn(t),Fo.createAt(n)),this.remove(Vo.createOn(t)),n}_wrapChildren(t,e,n,o){let i=e;const r=[];for(;i<n;){const e=t.getChild(i),n=e.is("text"),s=e.is("attributeElement"),a=e.is("emptyElement"),c=e.is("uiElement");if(n||a||c||s&&ci(o,e)){const n=o._clone();e._remove(),n._appendChild(e),t._insertChild(i,n),this._addToClonedElementsGroup(n),r.push(new Fo(t,i))}else s&&this._wrapChildren(e,0,e.childCount,o);i++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Vo.createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,o){let i=e;const r=[];for(;i<n;){const e=t.getChild(i);if(e.isSimilar(o)){const o=e.getChildren(),s=e.childCount;e._remove(),t._insertChild(i,o),this._removeFromClonedElementsGroup(e),r.push(new Fo(t,i),new Fo(t,i+s)),i+=s,n+=s-1}else e.is("attributeElement")&&this._unwrapChildren(e,0,e.childCount,o),i++}let s=0;for(const t of r){if(t.offset-=s,t.offset==e||t.offset==n)continue;this.mergeAttributes(t).isEqual(t)||(s++,n--)}return Vo.createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){if(function(t){return t.start.parent==t.end.parent&&t.start.parent.is("attributeElement")&&0===t.start.offset&&t.end.offset===t.start.parent.childCount}(t)&&this._wrapAttributeElement(e,t.start.parent)){const e=t.start.parent,n=this.mergeAttributes(Fo.createAfter(e)),o=this.mergeAttributes(Fo.createBefore(e));return new Vo(o,n)}const{start:n,end:o}=this._breakAttributesRange(t,!0);if(o.isEqual(n.getShiftedBy(1))){const t=n.nodeAfter;if(t instanceof Uo&&this._wrapAttributeElement(e,t)){const t=this.mergeAttributes(n);t.isEqual(n)||o.offset--;const e=this.mergeAttributes(o);return new Vo(t,e)}}const i=n.parent,r=this._unwrapChildren(i,n.offset,o.offset,e),s=this._wrapChildren(i,r.start.offset,r.end.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new Vo(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return li(Fo.createFromPosition(t));t.parent.is("text")&&(t=di(t));const n=this.createAttributeElement();n._priority=Number.POSITIVE_INFINITY,n.isSimilar=(()=>!1),t.parent._insertChild(t.offset,n);const o=new Vo(t,t.getShiftedBy(1));this.wrap(o,e);const i=new Fo(n.parent,n.index);n._remove();const r=i.nodeBefore,s=i.nodeAfter;return r instanceof On&&s instanceof On?ui(r,s):li(i)}_wrapAttributeElement(t,e){if(!mi(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!mi(t,e))return!1;if(t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if("class"!==n&&"style"!==n&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())"class"!==n&&"style"!==n&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,o=t.end;if(pi(t),t.isCollapsed){const n=this._breakAttributes(t.start,e);return new Vo(n,n)}const i=this._breakAttributes(o,e),r=i.parent.childCount,s=this._breakAttributes(n,e);return i.offset+=i.parent.childCount-r,new Vo(s,i)}_breakAttributes(t,e=!1){const n=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new m.b("view-writer-cannot-break-empty-element");if(t.parent.is("uiElement"))throw new m.b("view-writer-cannot-break-ui-element");if(!e&&o.is("text")&&fi(o.parent))return Fo.createFromPosition(t);if(fi(o))return Fo.createFromPosition(t);if(o.is("text"))return this._breakAttributes(di(t),e);if(n==o.childCount){const t=new Fo(o.parent,o.index+1);return this._breakAttributes(t,e)}if(0===n){const t=new Fo(o.parent,o.index);return this._breakAttributes(t,e)}{const t=o.index+1,i=o._clone();o.parent._insertChild(t,i),this._addToClonedElementsGroup(i);const r=o.childCount-n,s=o._removeChildren(n,r);i._appendChild(s);const a=new Fo(o.parent,t);return this._breakAttributes(a,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const e of t.getChildren())this._addToClonedElementsGroup(e);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const e of t.getChildren())this._removeFromClonedElementsGroup(e);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&(n.delete(t),0===n.size&&this._cloneGroups.delete(e))}}function ai(t){let e=t.parent;for(;!fi(e);){if(!e)return;e=e.parent}return e}function ci(t,e){return t.priority<e.priority||!(t.priority>e.priority)&&t.getIdentity()<e.getIdentity()}function li(t){const e=t.nodeBefore;if(e&&e.is("text"))return new Fo(e,e.data.length);const n=t.nodeAfter;return n&&n.is("text")?new Fo(n,0):t}function di(t){if(t.offset==t.parent.data.length)return new Fo(t.parent.parent,t.parent.index+1);if(0===t.offset)return new Fo(t.parent.parent,t.parent.index);const e=t.parent.data.slice(t.offset);return t.parent._data=t.parent.data.slice(0,t.offset),t.parent.parent._insertChild(t.parent.index+1,new On(e)),new Fo(t.parent.parent,t.parent.index+1)}function ui(t,e){const n=t.data.length;return t._data+=e.data,e._remove(),new Fo(t,n)}const hi=[On,Uo,Ln,$o,ni];function fi(t){return t&&(t.is("containerElement")||t.is("documentFragment"))}function pi(t){const e=ai(t.start),n=ai(t.end);if(!e||!n||e!==n)throw new m.b("view-writer-invalid-range-container")}function mi(t,e){return null===t.id&&null===e.id}const gi=t=>{const e=t.createElement("br");return e.dataset.ckeFiller=!0,e},bi=t=>t.createTextNode(" "),wi=7;let vi="";for(let t=0;t<wi;t++)vi+="​";function _i(t){return t instanceof Text&&t.data.substr(0,wi)===vi}function ki(t){return t.data.length==wi&&_i(t)}function yi(t){return _i(t)?t.data.slice(wi):t.data}const xi=new WeakMap;function Ai(t,e){let n=xi.get(e);return n||(n=e(window.document),xi.set(e,n)),t.isEqualNode(n)}function Ci(t,e){if(e.keyCode==Xo.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(1==t.rangeCount&&t.getRangeAt(0).collapsed){const e=t.getRangeAt(0).startContainer,n=t.getRangeAt(0).startOffset;_i(e)&&n<=wi&&t.collapse(e,0)}}}function Ti(t,e,n){let o,i;if(n=n||function(t,e){return t===e},e.length<t.length){const n=t;t=e,e=n,o="delete",i="insert"}else o="insert",i="delete";const r=t.length,s=e.length,a=s-r,c={},l={};function d(a){const d=(void 0!==l[a-1]?l[a-1]:-1)+1,u=void 0!==l[a+1]?l[a+1]:-1,h=d>u?-1:1;c[a+h]&&(c[a]=c[a+h].slice(0)),c[a]||(c[a]=[]),c[a].push(d>u?o:i);let f=Math.max(d,u),p=f-a;for(;p<r&&f<s&&n(t[p],e[f]);)p++,f++,c[a].push("equal");return f}let u,h=0;do{for(u=-h;u<a;u++)l[u]=d(u);for(u=a+h;u>a;u--)l[u]=d(u);l[a]=d(a),h++}while(l[a]!==s);return c[a].slice(1)}function Si(t,e,n){t.insertBefore(n,t.childNodes[e]||null)}function Ei(t){const e=t.parentNode;e&&e.removeChild(t)}function Pi(t){return"[object Text]"==Object.prototype.toString.call(t)}function Oi(t){if(t){if(t.defaultView)return t instanceof t.defaultView.Document;if(t.ownerDocument&&t.ownerDocument.defaultView)return t instanceof t.ownerDocument.defaultView.Node}return!1}function Ri(t,e){if(t===e)return[];return function(t,e){const n=[],{firstIndex:o,lastIndexOld:i,lastIndexNew:r}=e;r-o>0&&n.push({index:o,type:"insert",values:t.substring(o,r).split("")});i-o>0&&n.push({index:o+(r-o),type:"delete",howMany:i-o});return n}(e,function(t,e){const n=Ii(t,e),o=Mi(t,n),i=Mi(e,n),r=Ii(o,i),s=t.length-r,a=e.length-r;return{firstIndex:n,lastIndexOld:s,lastIndexNew:a}}(t,e))}function Ii(t,e){for(let n=0;n<Math.max(t.length,e.length);n++)if(t[n]!==e[n])return n}function Mi(t,e){return t.substring(e).split("").reverse().join("")}class Fi{constructor(t,e){this.domDocuments=new Set,this.domConverter=t,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this.selection=e,this.isFocused=!1,this._inlineFiller=null,this._fakeSelectionContainer=null}markToSync(t,e){if("text"===t)this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if("attributes"===t)this.markedAttributes.add(e);else{if("children"!==t)throw new m.b("view-renderer-unknown-type: Unknown type passed to Renderer.markToSync.");this.markedChildren.add(e)}}}render(){let t;for(const t of this.markedChildren)this._updateChildrenMappings(t);this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent));for(const t of this.markedAttributes)this._updateAttrs(t);for(const e of this.markedChildren)this._updateChildren(e,{inlineFillerPosition:t});for(const e of this.markedTexts)!this.markedChildren.has(e.parent)&&this.domConverter.mapViewToDom(e.parent)&&this._updateText(e,{inlineFillerPosition:t});if(t){const e=this.domConverter.viewPositionToDom(t),n=e.parent.ownerDocument;_i(e.parent)?this._inlineFiller=e.parent:this._inlineFiller=Vi(n,e.parent,e.offset)}else this._inlineFiller=null;this._updateSelection(),this._updateFocus(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=this.domConverter.mapViewToDom(t).childNodes,o=Array.from(this.domConverter.viewChildrenToDom(t,e.ownerDocument,{withChildren:!1})),i=this._diffNodeLists(n,o),r=this._findReplaceActions(i,n,o);if(-1!==r.indexOf("replace")){const e={equal:0,insert:0,delete:0};for(const i of r)if("replace"===i){const i=e.equal+e.insert,r=e.equal+e.delete,s=t.getChild(i);s&&!s.is("uiElement")&&this._updateElementMappings(s,n[r]),Ei(o[i]),e.equal++}else e[i]++}}_updateElementMappings(t,e){const n=this.domConverter.mapDomToView(e);(!n||n&&!n.isSimilar(t))&&this.markedAttributes.add(t),this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("text")?Fo.createBefore(this.selection.getFirstPosition().parent):t}_isSelectionInInlineFiller(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Pi(e.parent)&&_i(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!_i(t))throw new m.b("view-renderer-filler-was-lost: The inline filler node was lost.");ki(t)?t.parentNode.removeChild(t):t.data=t.data.substr(wi),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(1!=this.selection.rangeCount||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root))return!1;if(!e.is("element"))return!1;if(!function(t){if("false"==t.getAttribute("contenteditable"))return!1;const e=t.findAncestor(t=>t.hasAttribute("contenteditable"));return!e||"true"==e.getAttribute("contenteditable")}(e))return!1;if(n===e.getFillerOffset())return!1;const o=t.nodeBefore,i=t.nodeAfter;return!(o instanceof On||i instanceof On)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t),o=this.domConverter.viewToDom(t,n.ownerDocument),i=n.data;let r=o.data;const s=e.inlineFillerPosition;if(s&&s.parent==t.parent&&s.offset==t.index&&(r=vi+r),i!=r){const t=Ri(i,r);for(const e of t)"insert"===e.type?n.insertData(e.index,e.values.join("")):n.deleteData(e.index,e.howMany)}}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(t=>t.name),o=t.getAttributeKeys();for(const n of o)e.setAttribute(n,t.getAttribute(n));for(const o of n)t.hasAttribute(o)||e.removeAttribute(o)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;const o=e.inlineFillerPosition,i=this.domConverter.mapViewToDom(t).childNodes,r=Array.from(this.domConverter.viewChildrenToDom(t,n.ownerDocument,{bind:!0,inlineFillerPosition:o}));o&&o.parent===t&&Vi(n.ownerDocument,r,o.offset);const s=this._diffNodeLists(i,r);let a=0;const c=new Set;for(const t of s)"insert"===t?(Si(n,a,r[a]),a++):"delete"===t?(c.add(i[a]),Ei(i[a])):(this._markDescendantTextToSync(this.domConverter.domToView(r[a])),a++);for(const t of c)t.parentNode||this.domConverter.unbindDomElement(t)}_diffNodeLists(t,e){return Ti(t,e,function(t,e,n){if(e===n)return!0;if(Pi(e)&&Pi(n))return e.data===n.data;if(Ai(e,t)&&Ai(n,t))return!0;return!1}.bind(null,this.domConverter.blockFiller))}_findReplaceActions(t,e,n){if(-1===t.indexOf("insert")||-1===t.indexOf("delete"))return t;let o=[],i=[],r=[];const s={equal:0,insert:0,delete:0};for(const a of t)"insert"===a?r.push(n[s.equal+s.insert]):"delete"===a?i.push(e[s.equal+s.delete]):((o=o.concat(Ti(i,r,Ni).map(t=>"equal"===t?"replace":t))).push("equal"),i=[],r=[]),s[a]++;return o.concat(Ti(i,r,Ni).map(t=>"equal"===t?"replace":t))}_markDescendantTextToSync(t){if(t)if(t.is("text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}_updateSelection(){if(0===this.selection.rangeCount)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):(this._removeFakeSelection(),this._updateDomSelection(t)))}_updateFakeSelection(t){const e=t.ownerDocument;let n=this._fakeSelectionContainer;n||(this._fakeSelectionContainer=n=e.createElement("div"),Object.assign(n.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),n.appendChild(e.createTextNode(" "))),n.parentElement||t.appendChild(n),n.firstChild.data=this.selection.fakeSelectionLabel||" ";const o=e.getSelection(),i=e.createRange();o.removeAllRanges(),i.selectNodeContents(n),o.addRange(i),this.domConverter.bindFakeSelection(n,this.selection)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);t.focus(),e.collapse(n.parent,n.offset),e.extend(o.parent,o.offset)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_removeDomSelection(){for(const t of this.domDocuments){if(t.getSelection().rangeCount){const e=t.activeElement,n=this.domConverter.mapDomToView(e);e&&n&&t.getSelection().removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Vi(t,e,n){const o=e instanceof Array?e:e.childNodes,i=o[n];if(Pi(i))return i.data=vi+i.data,i;{const i=t.createTextNode(vi);return Array.isArray(e)?o.splice(n,0,i):Si(e,n,i),i}}function Ni(t,e){return Oi(t)&&Oi(e)&&!Pi(t)&&!Pi(e)&&t.tagName.toLowerCase()===e.tagName.toLowerCase()}P(Fi,xo);var Di={window:window,document:document};function Bi(t){let e=0;for(;t.previousSibling;)t=t.previousSibling,e++;return e}function Li(t){const e=[];for(;t&&t.nodeType!=Node.DOCUMENT_NODE;)e.unshift(t),t=t.parentNode;return e}var ji=function(t){return!!t&&1===t.nodeType&&s(t)&&!f(t)};class zi{constructor(t={}){this.blockFiller=t.blockFiller||gi,this.preElements=["pre"],this.blockElements=["p","div","h1","h2","h3","h4","h5","h6"],this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new Bo(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const e of Array.from(t.childNodes))this.unbindDomElement(e)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}viewToDom(t,e,n={}){if(t.is("text")){const n=this._processDataFromViewText(t);return e.createTextNode(n)}{if(this.mapViewToDom(t))return this.mapViewToDom(t);let o;if(t.is("documentFragment"))o=e.createDocumentFragment(),n.bind&&this.bindDocumentFragments(o,t);else{if(t.is("uiElement"))return o=t.render(e),n.bind&&this.bindElements(o,t),o;o=e.createElement(t.name),n.bind&&this.bindElements(o,t);for(const e of t.getAttributeKeys())o.setAttribute(e,t.getAttribute(e))}if(n.withChildren||void 0===n.withChildren)for(const i of this.viewChildrenToDom(t,e,n))o.appendChild(i);return o}}*viewChildrenToDom(t,e,n={}){const o=t.getFillerOffset&&t.getFillerOffset();let i=0;for(const r of t.getChildren())o===i&&(yield this.blockFiller(e)),yield this.viewToDom(r,e,n),i++;o===i&&(yield this.blockFiller(e))}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),o=document.createRange();return o.setStart(e.parent,e.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(t){const e=t.parent;if(e.is("text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let o=t.offset;return _i(n)&&(o+=wi),{parent:n,offset:o}}{let n,o,i;if(0===t.offset){if(!(n=this.mapViewToDom(e)))return null;i=n.childNodes[0]}else{const e=t.nodeBefore;if(!(o=e.is("text")?this.findCorrespondingDomText(e):this.mapViewToDom(t.nodeBefore)))return null;n=o.parentNode,i=o.nextSibling}if(Pi(i)&&_i(i))return{parent:i,offset:wi};return{parent:n,offset:o?Bi(o)+1:0}}}domToView(t,e={}){if(Ai(t,this.blockFiller))return null;const n=this.getParentUIElement(t,this._domToViewMapping);if(n)return n;if(Pi(t)){if(ki(t))return null;{const e=this._processDataFromDomText(t);return""===e?null:new On(e)}}if(this.isComment(t))return null;{if(this.mapDomToView(t))return this.mapDomToView(t);let n;if(this.isDocumentFragment(t))n=new ri,e.bind&&this.bindDocumentFragments(t,n);else{const o=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();n=new Nn(o),e.bind&&this.bindElements(t,n);const i=t.attributes;for(let t=i.length-1;t>=0;t--)n._setAttribute(i[t].name,i[t].value)}if(e.withChildren||void 0===e.withChildren)for(const o of this.domChildrenToView(t,e))n._appendChild(o);return n}}*domChildrenToView(t,e={}){for(let n=0;n<t.childNodes.length;n++){const o=t.childNodes[n],i=this.domToView(o,e);null!==i&&(yield i)}}domSelectionToView(t){if(1===t.rangeCount){let e=t.getRangeAt(0).startContainer;Pi(e)&&(e=e.parentNode);const n=this.fakeSelectionToView(e);if(n)return n}const e=this.isDomSelectionBackward(t),n=[];for(let e=0;e<t.rangeCount;e++){const o=t.getRangeAt(e),i=this.domRangeToView(o);i&&n.push(i)}return new Bo(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Vo(e,n):null}domPositionToView(t,e){if(Ai(t,this.blockFiller))return this.domPositionToView(t.parentNode,Bi(t));const n=this.mapDomToView(t);if(n&&n.is("uiElement"))return Fo.createBefore(n);if(Pi(t)){if(ki(t))return this.domPositionToView(t.parentNode,Bi(t));const n=this.findCorrespondingViewText(t);let o=e;return n?(_i(t)&&(o=(o-=wi)<0?0:o),new Fo(n,o)):null}if(0===e){const e=this.mapDomToView(t);if(e)return new Fo(e,0)}else{const n=t.childNodes[e-1],o=Pi(n)?this.findCorrespondingViewText(n):this.mapDomToView(n);if(o&&o.parent)return new Fo(o.parent,o.index+1)}return null}mapDomToView(t){return this.getParentUIElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(ki(t))return null;const e=this.getParentUIElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const t=this.mapDomToView(n);if(t){return t.nextSibling instanceof On?t.nextSibling:null}}else{const e=this.mapDomToView(t.parentNode);if(e){const t=e.getChild(0);return t instanceof On?t:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:t,scrollY:n}=Di.window,o=[];Ui(e,t=>{const{scrollLeft:e,scrollTop:n}=t;o.push([e,n])}),e.focus(),Ui(e,t=>{const[e,n]=o.shift();t.scrollLeft=e,t.scrollTop=n}),Di.window.scrollTo(t,n)}}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isComment(t){return t&&t.nodeType==Node.COMMENT_NODE}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=document.createRange();e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset);const n=e.collapsed;return e.detach(),n}getParentUIElement(t){const e=Li(t);for(e.pop();e.length;){const t=e.pop(),n=this._domToViewMapping.get(t);if(n&&n.is("uiElement"))return n}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}_isDomSelectionPositionCorrect(t,e){if(Pi(t)&&_i(t)&&e<wi)return!1;if(this.isElement(t)&&_i(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return e;if(" "==e.charAt(0)){const n=this._getTouchingViewTextNode(t,!1);!(n&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(" "==e.charAt(e.length-1)){this._getTouchingViewTextNode(t,!0)||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(t=>this.preElements.includes(t.name)))return!1;const e=this._processDataFromViewText(t);return" "==e.charAt(e.length-1)}_processDataFromDomText(t){let e=t.data;if(qi(t,this.preElements))return yi(t);e=e.replace(/[ \n\t\r]{1,}/g," ");const n=this._getTouchingInlineDomNode(t,!1),o=this._getTouchingInlineDomNode(t,!0),i=this._checkShouldLeftTrimDomText(n),r=this._checkShouldRightTrimDomText(t,o);return i&&(e=e.replace(/^ /,"")),r&&(e=e.replace(/ $/,"")),e=(e=yi(new Text(e))).replace(/ \u00A0/g,"  "),i&&(e=e.replace(/^\u00A0/," ")),Pi(o)&&" "!=o.data.charAt(0)||(e=e.replace(/\u00A0( *)$/," $1")),e}_checkShouldLeftTrimDomText(t){return!t||(!!ji(t)||/[^\S\u00A0]/.test(t.data.charAt(t.data.length-1)))}_checkShouldRightTrimDomText(t,e){return!e&&!_i(t)}_getTouchingViewTextNode(t,e){const n=new Mo({startPosition:e?Fo.createAfter(t):Fo.createBefore(t),direction:e?"forward":"backward"});for(const t of n){if(t.item.is("containerElement"))return null;if(t.item.is("br"))return null;if(t.item.is("textProxy"))return t.item}return null}_getTouchingInlineDomNode(t,e){if(!t.parentNode)return null;const n=e?"nextNode":"previousNode",o=t.ownerDocument,i=Li(t)[0],r=o.createTreeWalker(i,NodeFilter.SHOW_TEXT|NodeFilter.SHOW_ELEMENT,{acceptNode:t=>Pi(t)?NodeFilter.FILTER_ACCEPT:"BR"==t.tagName?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});r.currentNode=t;const s=r[n]();if(null!==s){const e=function(t,e){const n=Li(t),o=Li(e);let i=0;for(;n[i]==o[i]&&n[i];)i++;return 0===i?null:n[i-1]}(t,s);if(e&&!qi(t,this.blockElements,e)&&!qi(s,this.blockElements,e))return s}return null}}function qi(t,e,n){let o=Li(t);return n&&(o=o.slice(o.indexOf(n)+1)),o.some(t=>t.tagName&&e.includes(t.tagName.toLowerCase()))}function Ui(t,e){for(;t&&t!=Di.document;)e(t),t=t.parentNode}function Wi(t){const e=Object.prototype.toString.apply(t);return"[object Window]"==e||"[object global]"==e}var Hi=wo({},y,{listenTo(t,...e){if(Oi(t)||Wi(t)){const n=this._getProxyEmitter(t)||new $i(t);n.attach(...e),t=n}y.listenTo.call(this,t,...e)},stopListening(t,e,n){if(Oi(t)||Wi(t)){const e=this._getProxyEmitter(t);if(!e)return;t=e}y.stopListening.call(this,t,e,n),t instanceof $i&&t.detach(e)},_getProxyEmitter(t){return function(t,e){return t[_]&&t[_][e]?t[_][e].emitter:null}(this,Ki(t))}});class $i{constructor(t){x(this,Ki(t)),this._domNode=t}}function Ki(t){return t["data-ck-expando"]||(t["data-ck-expando"]=w())}wo($i.prototype,y,{attach(t,e,n={}){if(this._domListeners&&this._domListeners[t])return;const o=this._createDomListener(t,!!n.useCapture);this._domNode.addEventListener(t,o,!!n.useCapture),this._domListeners||(this._domListeners={}),this._domListeners[t]=o},detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()},_createDomListener(t,e){const n=e=>{this.fire(t,e)};return n.removeListener=(()=>{this._domNode.removeEventListener(t,n,e),delete this._domListeners[t]}),n}});class Gi{constructor(t){this.view=t,this.document=t.document,this.isEnabled=!1}enable(){this.isEnabled=!0}disable(){this.isEnabled=!1}destroy(){this.disable(),this.stopListening()}}P(Gi,Hi);var Ji="__lodash_hash_undefined__";var Qi=function(t){return this.__data__.set(t,Ji),this};var Yi=function(t){return this.__data__.has(t)};function Xi(t){var e=-1,n=t?t.length:0;for(this.__data__=new Tt;++e<n;)this.add(t[e])}Xi.prototype.add=Xi.prototype.push=Qi,Xi.prototype.has=Yi;var Zi=Xi;var tr=function(t,e){for(var n=-1,o=t.length;++n<o;)if(e(t[n],n,t))return!0;return!1},er=1,nr=2;var or=function(t,e,n,o,i,r){var s=i&nr,a=t.length,c=e.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(t);if(l)return l==e;var d=-1,u=!0,h=i&er?new Zi:void 0;for(r.set(t,e);++d<a;){var f=t[d],p=e[d];if(o)var m=s?o(p,f,d,e,t,r):o(f,p,d,t,e,r);if(void 0!==m){if(m)continue;u=!1;break}if(h){if(!tr(e,function(t,e){if(!h.has(e)&&(f===t||n(f,t,o,i,r)))return h.add(e)})){u=!1;break}}else if(f!==p&&!n(f,p,o,i,r)){u=!1;break}}return r.delete(t),u},ir=1,rr=2,sr="[object Boolean]",ar="[object Date]",cr="[object Error]",lr="[object Map]",dr="[object Number]",ur="[object RegExp]",hr="[object Set]",fr="[object String]",pr="[object Symbol]",mr="[object ArrayBuffer]",gr="[object DataView]",br=He?He.prototype:void 0,wr=br?br.valueOf:void 0;var vr=function(t,e,n,o,i,r,s){switch(n){case gr:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case mr:return!(t.byteLength!=e.byteLength||!o(new Me(t),new Me(e)));case sr:case ar:return+t==+e;case cr:return t.name==e.name&&t.message==e.message;case dr:return t!=+t?e!=+e:t==+e;case ur:case fr:return t==e+"";case lr:var a=Be;case hr:var c=r&rr;if(a||(a=Ue),t.size!=e.size&&!c)return!1;var l=s.get(t);return l?l==e:(r|=ir,s.set(t,e),or(a(t),a(e),o,i,r,s));case pr:if(wr)return wr.call(t)==wr.call(e)}return!1},_r=2;var kr=function(t,e,n,o,i,r){var s=i&_r,a=ce(t),c=a.length;if(c!=ce(e).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in e:Nt(e,d)))return!1}var u=r.get(t);if(u)return u==e;var h=!0;r.set(t,e);for(var f=s;++l<c;){var p=t[d=a[l]],m=e[d];if(o)var g=s?o(m,p,d,e,t,r):o(p,m,d,t,e,r);if(!(void 0===g?p===m||n(p,m,o,i,r):g)){h=!1;break}f||(f="constructor"==d)}if(h&&!f){var b=t.constructor,w=e.constructor;b!=w&&"constructor"in t&&"constructor"in e&&!("function"==typeof b&&b instanceof b&&"function"==typeof w&&w instanceof w)&&(h=!1)}return r.delete(t),h},yr={};yr["[object Float32Array]"]=yr["[object Float64Array]"]=yr["[object Int8Array]"]=yr["[object Int16Array]"]=yr["[object Int32Array]"]=yr["[object Uint8Array]"]=yr["[object Uint8ClampedArray]"]=yr["[object Uint16Array]"]=yr["[object Uint32Array]"]=!0,yr["[object Arguments]"]=yr["[object Array]"]=yr["[object ArrayBuffer]"]=yr["[object Boolean]"]=yr["[object DataView]"]=yr["[object Date]"]=yr["[object Error]"]=yr["[object Function]"]=yr["[object Map]"]=yr["[object Number]"]=yr["[object Object]"]=yr["[object RegExp]"]=yr["[object Set]"]=yr["[object String]"]=yr["[object WeakMap]"]=!1;var xr=Object.prototype.toString;var Ar=function(t){return s(t)&&Ut(t.length)&&!!yr[xr.call(t)]},Cr=2,Tr="[object Arguments]",Sr="[object Array]",Er="[object Object]",Pr=Object.prototype.hasOwnProperty;var Or=function(t,e,n,o,i,s){var a=Xt(t),c=Xt(e),l=Sr,d=Sr;a||(l=(l=Oe(t))==Tr?Er:l),c||(d=(d=Oe(e))==Tr?Er:d);var u=l==Er&&!r(t),h=d==Er&&!r(e),f=l==d;if(f&&!u)return s||(s=new Ot),a||Ar(t)?or(t,e,n,o,i,s):vr(t,e,l,n,o,i,s);if(!(i&Cr)){var p=u&&Pr.call(t,"__wrapped__"),m=h&&Pr.call(e,"__wrapped__");if(p||m){var g=p?t.value():t,b=m?e.value():e;return s||(s=new Ot),n(g,b,o,i,s)}}return!!f&&(s||(s=new Ot),kr(t,e,n,o,i,s))};var Rr=function t(e,n,o,i,r){return e===n||(null==e||null==n||!W(e)&&!s(n)?e!=e&&n!=n:Or(e,n,t,o,i,r))};var Ir=function(t,e,n){var o=(n="function"==typeof n?n:void 0)?n(t,e):void 0;return void 0===o?Rr(t,e,n):!!o};class Mr extends Gi{constructor(t){super(t),this._config={childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=[],this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.push(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(0===t.length)return;const e=this.domConverter,n=new Map,o=new Set;for(const n of t)if("childList"===n.type){const t=e.mapDomToView(n.target);if(t&&t.is("uiElement"))continue;t&&!this._isBogusBrMutation(n)&&o.add(t)}for(const i of t){const t=e.mapDomToView(i.target);if((!t||!t.is("uiElement"))&&"characterData"===i.type){const t=e.findCorrespondingViewText(i.target);t&&!o.has(t.parent)?n.set(t,{type:"text",oldText:t.data,newText:yi(i.target),node:t}):!t&&_i(i.target)&&o.add(e.mapDomToView(i.target.parentNode))}}const i=[];for(const t of n.values())this.renderer.markToSync("text",t.node),i.push(t);for(const t of o){const n=e.mapViewToDom(t),o=Array.from(t.getChildren()),r=Array.from(e.domChildrenToView(n,{withChildren:!1}));Ir(o,r,a)||(this.renderer.markToSync("children",t),i.push({type:"children",oldChildren:o,newChildren:r,node:t}))}const r=t[0].target.ownerDocument.getSelection();let s=null;if(r&&r.anchorNode){const t=e.domPositionToView(r.anchorNode,r.anchorOffset),n=e.domPositionToView(r.focusNode,r.focusOffset);t&&n&&(s=new Bo(t)).setFocus(n)}function a(t,e){if(!Array.isArray(t))return t===e||!(!t.is("text")||!e.is("text"))&&t.data===e.data}this.document.fire("mutations",i,s),this.view.render()}_isBogusBrMutation(t){let e=null;return null===t.nextSibling&&0===t.removedNodes.length&&1==t.addedNodes.length&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}class Fr{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,wo(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Vr extends Gi{constructor(t){super(t),this.useCapture=!1}observe(t){("string"==typeof this.domEventType?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(t,e)=>{this.isEnabled&&this.onDomEvent(e)},{useCapture:this.useCapture})})}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Fr(this.view,e,n))}}class Nr extends Vr{constructor(t){super(t),this.domEventType=["keydown","keyup"]}onDomEvent(t){this.fire(t.type,t,{keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey||t.metaKey,shiftKey:t.shiftKey,get keystroke(){return Zo(this)}})}}var Dr=Date.now,Br="Expected a function",Lr=Math.max,jr=Math.min;var zr=function(t,e,n){var o,i,r,s,a,c=0,l=0,d=!1,u=!1,h=!0;if("function"!=typeof t)throw new TypeError(Br);function f(e){var n=o,r=i;return o=i=void 0,l=e,s=t.apply(r,n)}function p(t){var n=t-c;return!c||n>=e||n<0||u&&t-l>=r}function m(){var t=Dr();if(p(t))return g(t);a=setTimeout(m,function(t){var n=e-(t-c);return u?jr(n,r-(t-l)):n}(t))}function g(t){return clearTimeout(a),a=void 0,h&&o?f(t):(o=i=void 0,s)}function b(){var t=Dr(),n=p(t);if(o=arguments,i=this,c=t,n){if(void 0===a)return function(t){return l=t,a=setTimeout(m,e),d?f(t):s}(c);if(u)return clearTimeout(a),a=setTimeout(m,e),f(c)}return void 0===a&&(a=setTimeout(m,e)),s}return e=Xn(e)||0,W(n)&&(d=!!n.leading,r=(u="maxWait"in n)?Lr(Xn(n.maxWait)||0,e):r,h="trailing"in n?!!n.trailing:h),b.cancel=function(){void 0!==a&&clearTimeout(a),c=l=0,o=i=a=void 0},b.flush=function(){return void 0===a?s:g(Dr())},b};class qr extends Gi{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=zr(t=>this.document.fire("selectionChangeDone",t),200)}observe(){const t=this.document;t.on("keydown",(e,n)=>{t.selection.isFake&&function(t){return t==Xo.arrowright||t==Xo.arrowleft||t==Xo.arrowup||t==Xo.arrowdown}(n.keyCode)&&this.isEnabled&&(n.preventDefault(),this._handleSelectionMove(n.keyCode))},{priority:"lowest"})}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new Bo(e.getRanges(),{backward:e.isBackward,fake:!1});t!=Xo.arrowleft&&t!=Xo.arrowup||n.setTo(n.getFirstPosition()),t!=Xo.arrowright&&t!=Xo.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}var Ur=n(2);class Wr extends Gi{constructor(t){super(t),this.mutationObserver=t.getObserver(Mr),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=zr(t=>this.document.fire("selectionChangeDone",t),200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument;this._documents.has(e)||(this.listenTo(e,"selectionchange",()=>{this._handleSelectionChange(e)}),this._documents.add(e))}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionChange(t){if(!this.isEnabled||!this.document.isFocused&&!this.document.isReadOnly)return;this.mutationObserver.flush();const e=t.defaultView.getSelection(),n=this.domConverter.domSelectionToView(e);if(!this.selection.isEqual(n)||!this.domConverter.isDomSelectionCorrect(e))if(++this._loopbackCounter>60)Ur.a.warn("selectionchange-infinite-loop: Selection change observer detected an infinite rendering loop.");else if(this.selection.isSimilar(n))this.view.render();else{const t={oldSelection:this.selection,newSelection:n,domSelection:e};this.document.fire("selectionChange",t),this._fireSelectionChangeDoneDebounced(t)}}_clearInfiniteLoop(){this._loopbackCounter=0}}class Hr extends Vr{constructor(t){super(t),this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{e.isFocused=!0,this._renderTimeoutId=setTimeout(()=>t.render(),50)}),e.on("blur",(n,o)=>{const i=e.selection.editableElement;null!==i&&i!==o.target||(e.isFocused=!1,t.render())})}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class $r extends Vr{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0}),e.on("compositionend",()=>{e.isComposing=!1})}onDomEvent(t){this.fire(t.type,t)}}function Kr(t){return"[object Range]"==Object.prototype.toString.apply(t)}function Gr(t){const e=t.ownerDocument.defaultView.getComputedStyle(t);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}class Jr{constructor(t){const e=Kr(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),ji(t)||e){const n=e?t.startContainer:t;n.ownerDocument&&n.ownerDocument.body.contains(n)||Ur.a.warn("rect-source-not-in-dom: The source of this rect does not belong to any rendered DOM tree.",{source:t}),Yr(this,e?Jr.getDomRangeRects(t)[0]:t.getBoundingClientRect())}else if(Wi(t)){const{innerWidth:e,innerHeight:n}=t;Yr(this,{top:0,right:e,bottom:n,left:0,width:e,height:n})}else Yr(this,t)}clone(){return new Jr(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left)};return e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0?null:new Jr(e)}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(!Xr(t)){let n=t.parentNode||t.commonAncestorContainer;for(;n&&!Xr(n);){const t=new Jr(n),o=e.getIntersection(t);if(!o)return null;o.getArea()<e.getArea()&&(e=o),n=n.parentNode}}return e}isEqual(t){for(const e of Qr)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}excludeScrollbarsAndBorders(){const t=this._source;let e,n;if(Wi(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight;else{const o=Gr(this._source);e=t.offsetWidth-t.clientWidth,n=t.offsetHeight-t.clientHeight,this.moveBy(o.left,o.top)}return this.width-=e,this.right-=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const t of n)e.push(new Jr(t));else{let n=t.startContainer;Pi(n)&&(n=n.parentNode);const o=new Jr(n.getBoundingClientRect());o.right=o.left,o.width=0,e.push(o)}return e}}const Qr=["top","right","bottom","left","width","height"];function Yr(t,e){for(const n of Qr)t[n]=e[n]}function Xr(t){return!!ji(t)&&t===t.ownerDocument.body}function Zr({target:t,viewportOffset:e=0}){const n=ss(t);let o=n,i=null;for(;o;){let r;es(r=as(o==n?t:i),()=>cs(t,o));const s=cs(t,o);if(ts(o,s,e),o.parent!=o){if(i=o.frameElement,o=o.parent,!i)return}else o=null}}function ts(t,e,n){const o=e.clone().moveBy(0,n),i=e.clone().moveBy(0,-n),r=new Jr(t).excludeScrollbarsAndBorders();if(![i,o].every(t=>r.contains(t))){let{scrollX:s,scrollY:a}=t;os(i,r)?a-=r.top-e.top+n:ns(o,r)&&(a+=e.bottom-r.bottom+n),is(e,r)?s-=r.left-e.left+n:rs(e,r)&&(s+=e.right-r.right+n),t.scrollTo(s,a)}}function es(t,e){const n=ss(t);let o,i;for(;t!=n.document.body;)i=e(),(o=new Jr(t).excludeScrollbarsAndBorders()).contains(i)||(os(i,o)?t.scrollTop-=o.top-i.top:ns(i,o)&&(t.scrollTop+=i.bottom-o.bottom),is(i,o)?t.scrollLeft-=o.left-i.left:rs(i,o)&&(t.scrollLeft+=i.right-o.right)),t=t.parentNode}function ns(t,e){return t.bottom>e.bottom}function os(t,e){return t.top<e.top}function is(t,e){return t.left<e.left}function rs(t,e){return t.right>e.right}function ss(t){return Kr(t)?t.startContainer.ownerDocument.defaultView:t.ownerDocument.defaultView}function as(t){if(Kr(t)){let e=t.commonAncestorContainer;return Pi(e)&&(e=e.parentNode),e}return t.parentNode}function cs(t,e){const n=ss(t),o=new Jr(t);if(n===e)return o;{let t=n;for(;t!=e;){const e=t.frameElement,n=new Jr(e).excludeScrollbarsAndBorders();o.moveBy(n.left,n.top),t=t.parent}}return o}Object.assign({},{scrollViewportToShowTarget:Zr,scrollAncestorsToShowTarget:function(t){es(as(t),()=>new Jr(t))}});class ls{constructor(){this.document=new zo,this.domConverter=new zi,this._renderer=new Fi(this.domConverter,this.document.selection),this._renderer.bind("isFocused").to(this.document),this.domRoots=new Map,this._observers=new Map,this._ongoingChange=!1,this._renderingInProgress=!1,this._postFixersInProgress=!1,this._writer=new si(this.document),this.addObserver(Mr),this.addObserver(Wr),this.addObserver(Hr),this.addObserver(Nr),this.addObserver(qr),this.addObserver($r),function(t){t.document.on("keydown",Ci)}(this),oi(this),this.on("render",()=>{this._render(),this.document.fire("layoutChanged")})}attachDomRoot(t,e="main"){const n=this.document.getRoot(e);n._name=t.tagName.toLowerCase(),this.domRoots.set(e,t),this.domConverter.bindElements(t,n),this._renderer.markToSync("children",n),this._renderer.domDocuments.add(t.ownerDocument),n.on("change:children",(t,e)=>this._renderer.markToSync("children",e)),n.on("change:attributes",(t,e)=>this._renderer.markToSync("attributes",e)),n.on("change:text",(t,e)=>this._renderer.markToSync("text",e));for(const n of this._observers.values())n.observe(t,e)}getDomRoot(t="main"){return this.domRoots.get(t)}addObserver(t){let e=this._observers.get(t);if(e)return e;e=new t(this),this._observers.set(t,e);for(const[t,n]of this.domRoots)e.observe(n,t);return e.enable(),e}getObserver(t){return this._observers.get(t)}disableObservers(){for(const t of this._observers.values())t.disable()}enableObservers(){for(const t of this._observers.values())t.enable()}scrollToTheSelection(){const t=this.document.selection.getFirstRange();t&&Zr({target:this.domConverter.viewRangeToDom(t),viewportOffset:20})}focus(){if(!this.document.isFocused){const t=this.document.selection.editableElement;t?(this.domConverter.focus(t),this.render()):Ur.a.warn("view-focus-no-selection: There is no selection in any editable to focus.")}}change(t){if(this._renderingInProgress||this._postFixersInProgress)throw new m.b("cannot-change-view-tree: Attempting to make changes to the view when it is in incorrect state: rendering or post-fixers are in progress. This may cause some unexpected behaviour and inconsistency between the DOM and the view.");this._ongoingChange?t(this._writer):(this._ongoingChange=!0,t(this._writer),this._ongoingChange=!1,this._postFixersInProgress=!0,this.document._callPostFixers(this._writer),this._postFixersInProgress=!1,this.fire("render"))}render(){this.change(()=>{})}destroy(){for(const t of this._observers.values())t.destroy();this.stopListening()}_render(){this._renderingInProgress=!0,this.disableObservers(),this._renderer.render(),this.enableObservers(),this._renderingInProgress=!1}}function ds(t){return f(t)?In(t):new Map(t)}P(ls,xo);class us{constructor(t){this.parent=null,this._attrs=ds(t)}get index(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildIndex(this)))throw new m.b("model-node-not-found-in-parent: The node's parent does not contain this node.");return t}get startOffset(){let t;if(!this.parent)return null;if(null===(t=this.parent.getChildStartOffset(this)))throw new m.b("model-node-not-found-in-parent: The node's parent does not contain this node.");return t}get offsetSize(){return 1}get endOffset(){return this.parent?this.startOffset+this.offsetSize:null}get nextSibling(){const t=this.index;return null!==t&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return null!==t&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}get document(){return this.root==this?null:this.root.document||null}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.startOffset),e=e.parent;return t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let i=0;for(;n[i]==o[i]&&n[i];)i++;return 0===i?null:n[i-1]}isBefore(t){if(this==t)return!1;if(this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=En(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&(this.root===t.root&&!this.isBefore(t))}hasAttribute(t){return this._attrs.has(t)}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}toJSON(){const t={};return this._attrs.size&&(t.attributes=[...this._attrs]),t}_clone(){return new us(this._attrs)}_remove(){this.parent._removeChildren(this.index)}_setAttribute(t,e){this._attrs.set(t,e)}_setAttributesTo(t){this._attrs=ds(t)}_removeAttribute(t){return this._attrs.delete(t)}_clearAttributes(){this._attrs.clear()}is(t){return"node"==t}}class hs extends us{constructor(t,e){super(e),this._data=t||""}get offsetSize(){return this.data.length}get data(){return this._data}is(t){return"text"==t||super.is(t)}toJSON(){const t=super.toJSON();return t.data=this.data,t}_clone(){return new hs(this.data,this.getAttributes())}static fromJSON(t){return new hs(t.data,t.attributes)}}class fs{constructor(t,e,n){if(this.textNode=t,e<0||e>t.offsetSize)throw new m.b("model-textproxy-wrong-offsetintext: Given offsetInText value is incorrect.");if(n<0||e+n>t.offsetSize)throw new m.b("model-textproxy-wrong-length: Given length value is incorrect.");this.data=t.data.substring(e,e+n),this.offsetInText=e}get startOffset(){return null!==this.textNode.startOffset?this.textNode.startOffset+this.offsetInText:null}get offsetSize(){return this.data.length}get endOffset(){return null!==this.startOffset?this.startOffset+this.offsetSize:null}get isPartial(){return this.offsetSize!==this.textNode.offsetSize}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}is(t){return"textProxy"==t}getPath(){const t=this.textNode.getPath();return t.length>0&&(t[t.length-1]+=this.offsetInText),t}getAncestors(t={includeSelf:!1,parentFirst:!1}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}hasAttribute(t){return this.textNode.hasAttribute(t)}getAttribute(t){return this.textNode.getAttribute(t)}getAttributes(){return this.textNode.getAttributes()}getAttributeKeys(){return this.textNode.getAttributeKeys()}}class ps{constructor(t){this._nodes=[],t&&this._insertNodes(0,t)}[Symbol.iterator](){return this._nodes[Symbol.iterator]()}get length(){return this._nodes.length}get maxOffset(){return this._nodes.reduce((t,e)=>t+e.offsetSize,0)}getNode(t){return this._nodes[t]||null}getNodeIndex(t){const e=this._nodes.indexOf(t);return-1==e?null:e}getNodeStartOffset(t){const e=this.getNodeIndex(t);return null===e?null:this._nodes.slice(0,e).reduce((t,e)=>t+e.offsetSize,0)}indexToOffset(t){if(t==this._nodes.length)return this.maxOffset;const e=this._nodes[t];if(!e)throw new m.b("model-nodelist-index-out-of-bounds: Given index cannot be found in the node list.");return this.getNodeStartOffset(e)}offsetToIndex(t){let e=0;for(const n of this._nodes){if(t>=e&&t<e+n.offsetSize)return this.getNodeIndex(n);e+=n.offsetSize}if(e!=t)throw new m.b("model-nodelist-offset-out-of-bounds: Given offset cannot be found in the node list.",{offset:t,nodeList:this});return this.length}_insertNodes(t,e){for(const t of e)if(!(t instanceof us))throw new m.b("model-nodelist-insertNodes-not-node: Trying to insert an object which is not a Node instance.");this._nodes.splice(t,0,...e)}_removeNodes(t,e=1){return this._nodes.splice(t,e)}toJSON(){return this._nodes.map(t=>t.toJSON())}}class ms extends us{constructor(t,e,n){super(e),this.name=t,this._children=new ps,n&&this._insertChild(0,n)}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}is(t,e=null){return e?"element"==t&&e==this.name:"element"==t||t==this.name||super.is(t)}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}offsetToIndex(t){return this._children.offsetToIndex(t)}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}toJSON(){const t=super.toJSON();if(t.name=this.name,this._children.length>0){t.children=[];for(const e of this._children)t.children.push(e.toJSON())}return t}_clone(t=!1){const e=t?Array.from(this._children).map(t=>t._clone(!0)):null;return new ms(this.name,this.getAttributes(),e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new hs(t)];Mn(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new hs(t):t instanceof fs?new hs(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}static fromJSON(t){let e=null;if(t.children){e=[];for(const n of t.children)n.name?e.push(ms.fromJSON(n)):e.push(hs.fromJSON(n))}return new ms(t.name,t.attributes,e)}}class gs{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new m.b("model-tree-walker-no-start-position: Neither boundaries nor starting position have been defined.");const e=t.direction||"forward";if("forward"!=e&&"backward"!=e)throw new m.b("model-tree-walker-unknown-direction: Only `backward` and `forward` direction allowed.",{direction:e});this.direction=e,this.boundaries=t.boundaries||null,t.startPosition?this.position=vs.createFromPosition(t.startPosition):this.position=vs.createFromPosition(this.boundaries["backward"==this.direction?"end":"start"]),this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null,this._visitedParent=this.position.parent}[Symbol.iterator](){return this}skip(t){let e,n,o,i;do{o=this.position,i=this._visitedParent,({done:e,value:n}=this.next())}while(!e&&t(n));e||(this.position=o,this._visitedParent=i)}next(){return"forward"==this.direction?this._next():this._previous()}_next(){const t=this.position,e=vs.createFromPosition(this.position),n=this._visitedParent;if(null===n.parent&&e.offset===n.maxOffset)return{done:!0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0};const o=e.textNode?e.textNode:e.nodeAfter;if(o instanceof ms)return this.shallow?e.offset++:(e.path.push(0),this._visitedParent=o),this.position=e,bs("elementStart",o,t,e,1);if(o instanceof hs){let i;if(this.singleCharacters)i=1;else{let t=o.endOffset;this._boundaryEndParent==n&&this.boundaries.end.offset<t&&(t=this.boundaries.end.offset),i=t-e.offset}const r=e.offset-o.startOffset,s=new fs(o,r,i);return e.offset+=i,this.position=e,bs("text",s,t,e,i)}return e.path.pop(),e.offset++,this.position=e,this._visitedParent=n.parent,this.ignoreElementEnd?this._next():bs("elementEnd",n,t,e)}_previous(){const t=this.position,e=vs.createFromPosition(this.position),n=this._visitedParent;if(null===n.parent&&0===e.offset)return{done:!0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0};const o=e.textNode?e.textNode:e.nodeBefore;if(o instanceof ms)return e.offset--,this.shallow?(this.position=e,bs("elementStart",o,t,e,1)):(e.path.push(o.maxOffset),this.position=e,this._visitedParent=o,this.ignoreElementEnd?this._previous():bs("elementEnd",o,t,e));if(o instanceof hs){let i;if(this.singleCharacters)i=1;else{let t=o.startOffset;this._boundaryStartParent==n&&this.boundaries.start.offset>t&&(t=this.boundaries.start.offset),i=e.offset-t}const r=e.offset-o.startOffset,s=new fs(o,r-i,i);return e.offset-=i,this.position=e,bs("text",s,t,e,i)}return e.path.pop(),this.position=e,this._visitedParent=n.parent,bs("elementStart",n,t,e,1)}}function bs(t,e,n,o,i){return{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:i}}}var ws=function(t){var e=t?t.length:0;return e?t[e-1]:void 0};class vs{constructor(t,e){if(!t.is("element")&&!t.is("documentFragment"))throw new m.b("model-position-root-invalid: Position root invalid.");if(!(e instanceof Array)||0===e.length)throw new m.b("model-position-path-incorrect: Position path must be an array with at least one item.",{path:e});e=t.getPath().concat(e),t=t.root,this.root=t,this.path=e}get offset(){return ws(this.path)}set offset(t){this.path[this.path.length-1]=t}get parent(){let t=this.root;for(let e=0;e<this.path.length-1;e++)t=t.getChild(t.offsetToIndex(this.path[e]));return t}get index(){return this.parent.offsetToIndex(this.offset)}get textNode(){const t=this.parent.getChild(this.index);return t instanceof hs&&t.startOffset<this.offset?t:null}get nodeAfter(){return null===this.textNode?this.parent.getChild(this.index):null}get nodeBefore(){return null===this.textNode?this.parent.getChild(this.index-1):null}get isAtStart(){return 0===this.offset}get isAtEnd(){return this.offset==this.parent.maxOffset}compareWith(t){if(this.root!=t.root)return"different";const e=En(this.path,t.path);switch(e){case"same":return"same";case"prefix":return"before";case"extension":return"after";default:return this.path[e]<t.path[e]?"before":"after"}}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new gs(e);return n.skip(t),n.position}getParentPath(){return this.path.slice(0,-1)}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonPath(t){if(this.root!=t.root)return[];const e=En(this.path,t.path),n="string"==typeof e?Math.min(this.path.length,t.path.length):e;return this.path.slice(0,n)}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return 0===o?null:e[o-1]}getShiftedBy(t){const e=vs.createFromPosition(this),n=e.offset+t;return e.offset=n<0?0:n,e}isAfter(t){return"after"==this.compareWith(t)}isBefore(t){return"before"==this.compareWith(t)}isEqual(t){return"same"==this.compareWith(t)}isTouching(t){let e=null,n=null;switch(this.compareWith(t)){case"same":return!0;case"before":e=vs.createFromPosition(this),n=vs.createFromPosition(t);break;case"after":e=vs.createFromPosition(t),n=vs.createFromPosition(this);break;default:return!1}let o=e.parent;for(;e.path.length+n.path.length;){if(e.isEqual(n))return!0;if(e.path.length>n.path.length){if(e.offset!==o.maxOffset)return!1;e.path=e.path.slice(0,-1),o=o.parent,e.offset++}else{if(0!==n.offset)return!1;n.path=n.path.slice(0,-1)}}}_getTransformedByDeletion(t,e){const n=vs.createFromPosition(this);if(this.root!=t.root)return n;if("same"==En(t.getParentPath(),this.getParentPath())){if(t.offset<this.offset){if(t.offset+e>this.offset)return null;n.offset-=e}}else if("prefix"==En(t.getParentPath(),this.getParentPath())){const o=t.path.length-1;if(t.offset<=this.path[o]){if(t.offset+e>this.path[o])return null;n.path[o]-=e}}return n}_getTransformedByInsertion(t,e,n){const o=vs.createFromPosition(this);if(this.root!=t.root)return o;if("same"==En(t.getParentPath(),this.getParentPath()))(t.offset<this.offset||t.offset==this.offset&&n)&&(o.offset+=e);else if("prefix"==En(t.getParentPath(),this.getParentPath())){const n=t.path.length-1;t.offset<=this.path[n]&&(o.path[n]+=e)}return o}_getTransformedByMove(t,e,n,o,i){let r=this._getTransformedByDeletion(t,n);return e=e._getTransformedByDeletion(t,n),r=null===r||i&&r.isEqual(t)?this._getCombined(t,e):r._getTransformedByInsertion(e,n,o)}_getCombined(t,e){const n=t.path.length-1,o=vs.createFromPosition(e);return o.offset=o.offset+this.path[n]-t.offset,o.path=o.path.concat(this.path.slice(n+1)),o}static createAt(t,e){if(t instanceof vs)return this.createFromPosition(t);{const n=t;if("end"==e)e=n.maxOffset;else{if("before"==e)return this.createBefore(n);if("after"==e)return this.createAfter(n);e||(e=0)}return this.createFromParentAndOffset(n,e)}}static createAfter(t){if(!t.parent)throw new m.b("model-position-after-root: You cannot make a position after root.",{root:t});return this.createFromParentAndOffset(t.parent,t.endOffset)}static createBefore(t){if(!t.parent)throw new m.b("model-position-before-root: You cannot make a position before root.",{root:t});return this.createFromParentAndOffset(t.parent,t.startOffset)}static createFromParentAndOffset(t,e){if(!t.is("element")&&!t.is("documentFragment"))throw new m.b("model-position-parent-incorrect: Position parent have to be a element or document fragment.");const n=t.getPath();return n.push(e),new this(t.root,n)}static createFromPosition(t){return new this(t.root,t.path.slice())}static fromJSON(t,e){if("$graveyard"===t.root)return new vs(e.graveyard,t.path);if(!e.getRoot(t.root))throw new m.b("model-position-fromjson-no-root: Cannot create position for document. Root with specified name does not exist.",{rootName:t.root});return new vs(e.getRoot(t.root),t.path)}}class _s{constructor(t,e=null){this.start=vs.createFromPosition(t),this.end=e?vs.createFromPosition(e):vs.createFromPosition(t)}*[Symbol.iterator](){yield*new gs({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}containsItem(t){const e=vs.createBefore(t);return this.containsPosition(e)||this.start.isEqual(e)}isEqual(t){return this.start.isEqual(t.start)&&this.end.isEqual(t.end)}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new _s(this.start,t.start)),this.containsPosition(t.end)&&e.push(new _s(t.end,this.end))):e.push(_s.createFromRange(this)),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new _s(e,n)}return null}getMinimalFlatRanges(){const t=[],e=this.start.getCommonPath(this.end).length,n=vs.createFromPosition(this.start);let o=n.parent;for(;n.path.length>e+1;){const e=o.maxOffset-n.offset;0!==e&&t.push(new _s(n,n.getShiftedBy(e))),n.path=n.path.slice(0,-1),n.offset++,o=o.parent}for(;n.path.length<=this.end.path.length;){const e=this.end.path[n.path.length-1],o=e-n.offset;0!==o&&t.push(new _s(n,n.getShiftedBy(o))),n.offset=e,n.path.push(0)}return t}getWalker(t={}){return t.boundaries=this,new gs(t)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new gs(t);for(const t of e)yield t.item}*getPositions(t={}){t.boundaries=this;const e=new gs(t);yield e.position;for(const t of e)yield t.nextPosition}getTransformedByDelta(t){const e=[_s.createFromRange(this)],n=new Set(["insert","move","remove","reinsert"]);for(const o of t.operations)if(n.has(o.type))for(let n=0;n<e.length;n++){let i;i="insert"==o.type?e[n]._getTransformedByDocumentChange(o.type,t.type,o.position,o.nodes.maxOffset):e[n]._getTransformedByDocumentChange(o.type,t.type,o.targetPosition,o.howMany,o.sourcePosition),e.splice(n,1,...i),n+=i.length-1}return e}getTransformedByDeltas(t){const e=[_s.createFromRange(this)];for(const n of t)for(let t=0;t<e.length;t++){const o=e[t].getTransformedByDelta(n);e.splice(t,1,...o),t+=o.length-1}for(let t=0;t<e.length;t++){const n=e[t];for(let o=t+1;o<e.length;o++){const t=e[o];(n.containsRange(t)||t.containsRange(n)||n.isEqual(t))&&e.splice(o,1)}}return e}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}_getTransformedByDocumentChange(t,e,n,o,i){if("insert"==t)return this._getTransformedByInsertion(n,o,!1,!1);{const t=_s.createFromPositionAndShift(i,o);if("merge"==e&&this.isCollapsed&&(this.start.isEqual(t.start)||this.start.isEqual(t.end))){const e=this.start.offset-t.start.offset;return[new _s(n.getShiftedBy(e))]}if("split"==e&&this.isCollapsed&&this.end.isEqual(t.end))return[new _s(n.getShiftedBy(o))];if((t.containsPosition(this.start)||t.start.isEqual(this.start))&&this.containsPosition(t.end)&&this.end.isAfter(n)){const t=this.start._getCombined(i,n._getTransformedByDeletion(i,o)),e=this.end._getTransformedByMove(i,n,o,!1,!1);return[new _s(t,e)]}if((t.containsPosition(this.end)||t.end.isEqual(this.end))&&this.containsPosition(t.start)&&this.start.isBefore(n)){const t=this.start._getTransformedByMove(i,n,o,!0,!1),e=this.end._getCombined(i,n._getTransformedByDeletion(i,o));return[new _s(t,e)]}return this._getTransformedByMove(i,n,o)}}_getTransformedByInsertion(t,e,n=!1,o=!1){if(n&&this.containsPosition(t))return[new _s(this.start,t),new _s(t._getTransformedByInsertion(t,e,!0),this.end._getTransformedByInsertion(t,e,this.isCollapsed))];{const n=_s.createFromRange(this),i=!o,r=!!n.isCollapsed||o;return n.start=n.start._getTransformedByInsertion(t,e,i),n.end=n.end._getTransformedByInsertion(t,e,r),[n]}}_getTransformedByMove(t,e,n){if(this.isCollapsed){const o=this.start._getTransformedByMove(t,e,n,!0,!1);return[new _s(o)]}let o;const i=new _s(t,t.getShiftedBy(n)),r=this.getDifference(i);let s=null;const a=this.getIntersection(i);1==r.length?s=new _s(r[0].start._getTransformedByDeletion(t,n),r[0].end._getTransformedByDeletion(t,n)):2==r.length&&(s=new _s(this.start,this.end._getTransformedByDeletion(t,n)));const c=e._getTransformedByDeletion(t,n);return o=s?s._getTransformedByInsertion(c,n,null!==a):[],a&&o.push(new _s(a.start._getCombined(i.start,c),a.end._getCombined(i.start,c))),o}static createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static createFromParentsAndOffsets(t,e,n,o){return new this(vs.createFromParentAndOffset(t,e),vs.createFromParentAndOffset(n,o))}static createFromRange(t){return new this(t.start,t.end)}static createIn(t){return this.createFromParentsAndOffsets(t,0,t,t.maxOffset)}static createOn(t){return this.createFromPositionAndShift(vs.createBefore(t),t.offsetSize)}static createCollapsedAt(t,e){const n=vs.createAt(t,e),o=vs.createFromPosition(n);return new _s(n,o)}static createFromRanges(t){if(0===t.length)throw new m.b("range-create-from-ranges-empty-array: At least one range has to be passed.");if(1==t.length)return this.createFromRange(t[0]);const e=t[0];t.sort((t,e)=>t.start.isAfter(e.start)?1:-1);const n=t.indexOf(e),o=new this(e.start,e.end);for(let e=n-1;e>=0&&t[e].end.isEqual(o.start);e++)o.start=vs.createFromPosition(t[e].start);for(let e=n+1;e<t.length&&t[e].start.isEqual(o.end);e++)o.end=vs.createFromPosition(t[e].end);return o}static fromJSON(t,e){return new this(vs.fromJSON(t.start,e),vs.fromJSON(t.end,e))}}class ks{constructor(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._viewToModelLengthCallbacks=new Map,this._markerNameToElements=new Map,this.on("modelToViewPosition",(t,e)=>{if(e.viewPosition)return;const n=this._modelToViewMapping.get(e.modelPosition.parent);e.viewPosition=this._findPositionIn(n,e.modelPosition.offset)},{priority:"low"}),this.on("viewToModelPosition",(t,e)=>{if(e.modelPosition)return;let n=e.viewPosition.parent,o=this._viewToModelMapping.get(n);for(;!o;)n=n.parent,o=this._viewToModelMapping.get(n);const i=this._toModelOffset(e.viewPosition.parent,e.viewPosition.offset,n);e.modelPosition=vs.createFromParentAndOffset(o,i)},{priority:"low"})}bindElements(t,e){this._modelToViewMapping.set(t,e),this._viewToModelMapping.set(e,t)}unbindViewElement(t){const e=this.toModelElement(t);this._viewToModelMapping.delete(t),this._modelToViewMapping.get(e)==t&&this._modelToViewMapping.delete(e)}unbindModelElement(t){const e=this.toViewElement(t);this._modelToViewMapping.delete(t),this._viewToModelMapping.get(e)==t&&this._viewToModelMapping.delete(e)}bindElementToMarker(t,e){const n=this._markerNameToElements.get(e)||new Set;n.add(t),this._markerNameToElements.set(e,n)}unbindElementsFromMarkerName(t){this._markerNameToElements.delete(t)}clearBindings(){this._modelToViewMapping=new WeakMap,this._viewToModelMapping=new WeakMap,this._markerNameToElements=new Map}toModelElement(t){return this._viewToModelMapping.get(t)}toViewElement(t){return this._modelToViewMapping.get(t)}toModelRange(t){return new _s(this.toModelPosition(t.start),this.toModelPosition(t.end))}toViewRange(t){return new Vo(this.toViewPosition(t.start),this.toViewPosition(t.end))}toModelPosition(t){const e={viewPosition:t,mapper:this};return this.fire("viewToModelPosition",e),e.modelPosition}toViewPosition(t,e={isPhantom:!1}){const n={modelPosition:t,mapper:this,isPhantom:e.isPhantom};return this.fire("modelToViewPosition",n),n.viewPosition}markerNameToElements(t){const e=this._markerNameToElements.get(t);if(!e)return null;const n=new Set;for(const t of e)if(t.is("attributeElement"))for(const e of t.getElementsWithSameId())n.add(e);else n.add(t);return n}registerViewToModelLength(t,e){this._viewToModelLengthCallbacks.set(t,e)}_toModelOffset(t,e,n){if(n!=t){return this._toModelOffset(t.parent,t.index,n)+this._toModelOffset(t,e,t)}if(t.is("text"))return e;let o=0;for(let n=0;n<e;n++)o+=this.getModelLength(t.getChild(n));return o}getModelLength(t){if(this._viewToModelLengthCallbacks.get(t.name)){return this._viewToModelLengthCallbacks.get(t.name)(t)}if(this._viewToModelMapping.has(t))return 1;if(t.is("text"))return t.data.length;if(t.is("uiElement"))return 0;{let e=0;for(const n of t.getChildren())e+=this.getModelLength(n);return e}}_findPositionIn(t,e){let n,o=0,i=0,r=0;if(t.is("text"))return new Fo(t,e);for(;i<e;)n=t.getChild(r),i+=o=this.getModelLength(n),r++;return i==e?this._moveViewPositionToTextNode(new Fo(t,r)):this._findPositionIn(n,e-(i-o))}_moveViewPositionToTextNode(t){const e=t.nodeBefore,n=t.nodeAfter;return e instanceof On?new Fo(e,e.data.length):n instanceof On?new Fo(n,0):t}}P(ks,y);class ys{constructor(){this._consumable=new Map,this._textProxyRegistry=new Map}add(t,e){e=xs(e),t instanceof fs&&(t=this._getSymbolForTextProxy(t)),this._consumable.has(t)||this._consumable.set(t,new Map),this._consumable.get(t).set(e,!0)}consume(t,e){return e=xs(e),t instanceof fs&&(t=this._getSymbolForTextProxy(t)),!!this.test(t,e)&&(this._consumable.get(t).set(e,!1),!0)}test(t,e){e=xs(e),t instanceof fs&&(t=this._getSymbolForTextProxy(t));const n=this._consumable.get(t);if(void 0===n)return null;const o=n.get(e);return void 0===o?null:o}revert(t,e){e=xs(e),t instanceof fs&&(t=this._getSymbolForTextProxy(t));const n=this.test(t,e);return!1===n?(this._consumable.get(t).set(e,!0),!0):!0!==n&&null}_getSymbolForTextProxy(t){let e=null;const n=this._textProxyRegistry.get(t.startOffset);if(n){const o=n.get(t.endOffset);o&&(e=o.get(t.parent))}return e||(e=this._addSymbolForTextProxy(t.startOffset,t.endOffset,t.parent)),e}_addSymbolForTextProxy(t,e,n){const o=Symbol("textProxySymbol");let i,r;return(i=this._textProxyRegistry.get(t))||(i=new Map,this._textProxyRegistry.set(t,i)),(r=i.get(e))||(r=new Map,i.set(e,r)),r.set(n,o),o}}function xs(t){const e=t.split(":");return e.length>1?e[0]+":"+e[1]:e[0]}class As{constructor(t={}){this.conversionApi=wo({dispatcher:this},t)}convertChanges(t,e){for(const n of t.getMarkersToRemove())this.convertMarkerRemove(n.name,n.range,e);for(const n of t.getChanges())"insert"==n.type?this.convertInsert(_s.createFromPositionAndShift(n.position,n.length),e):"remove"==n.type?this.convertRemove(n.position,n.length,n.name,e):this.convertAttribute(n.range,n.attributeKey,n.attributeOldValue,n.attributeNewValue,e);for(const n of t.getMarkersToAdd())this.convertMarkerAdd(n.name,n.range,e)}convertInsert(t,e){this.conversionApi.writer=e,this.conversionApi.consumable=this._createInsertConsumable(t);for(const e of t){const t=e.item,n={item:t,range:_s.createFromPositionAndShift(e.previousPosition,e.length)};this._testAndFire("insert",n);for(const e of t.getAttributeKeys())n.attributeKey=e,n.attributeOldValue=null,n.attributeNewValue=t.getAttribute(e),this._testAndFire(`attribute:${e}`,n)}this._clearConversionApi()}convertRemove(t,e,n,o){this.conversionApi.writer=o,this.fire("remove:"+n,{position:t,length:e},this.conversionApi),this._clearConversionApi()}convertAttribute(t,e,n,o,i){this.conversionApi.writer=i,this.conversionApi.consumable=this._createConsumableForRange(t,`attribute:${e}`);for(const i of t){const t={item:i.item,range:_s.createFromPositionAndShift(i.previousPosition,i.length),attributeKey:e,attributeOldValue:n,attributeNewValue:o};this._testAndFire(`attribute:${e}`,t)}this._clearConversionApi()}convertSelection(t,e,n){const o=Array.from(e.getMarkersAtPosition(t.getFirstPosition()));if(this.conversionApi.writer=n,this.conversionApi.consumable=this._createSelectionConsumable(t,o),this.fire("selection",{selection:t},this.conversionApi),t.isCollapsed){for(const e of o){const n=e.getRange();if(!Cs(t.getFirstPosition(),e,this.conversionApi.mapper))continue;const o={item:t,markerName:e.name,markerRange:n};this.conversionApi.consumable.test(t,"addMarker:"+e.name)&&this.fire("addMarker:"+e.name,o,this.conversionApi)}for(const e of t.getAttributeKeys()){const n={item:t,range:t.getFirstRange(),attributeKey:e,attributeOldValue:null,attributeNewValue:t.getAttribute(e)};this.conversionApi.consumable.test(t,"attribute:"+n.attributeKey)&&this.fire("attribute:"+n.attributeKey,n,this.conversionApi)}this._clearConversionApi()}}convertMarkerAdd(t,e,n){if(!e.root.document||"$graveyard"==e.root.rootName)return;this.conversionApi.writer=n;const o="addMarker:"+t;if(e.isCollapsed){const n=new ys;return n.add(e,o),this.conversionApi.consumable=n,void this.fire(o,{markerName:t,markerRange:e},this.conversionApi)}this.conversionApi.consumable=this._createConsumableForRange(e,o);for(const n of e.getItems()){if(!this.conversionApi.consumable.test(n,o))continue;const i={item:n,range:_s.createOn(n),markerName:t,markerRange:e};this.fire(o,i,this.conversionApi)}this._clearConversionApi()}convertMarkerRemove(t,e,n){e.root.document&&"$graveyard"!=e.root.rootName&&(this.conversionApi.writer=n,this.fire("removeMarker:"+t,{markerName:t,markerRange:e},this.conversionApi),this._clearConversionApi())}_createInsertConsumable(t){const e=new ys;for(const n of t){const t=n.item;e.add(t,"insert");for(const n of t.getAttributeKeys())e.add(t,"attribute:"+n)}return e}_createConsumableForRange(t,e){const n=new ys;for(const o of t.getItems())n.add(o,e);return n}_createSelectionConsumable(t,e){const n=new ys;n.add(t,"selection");for(const o of e)n.add(t,"addMarker:"+o.name);for(const e of t.getAttributeKeys())n.add(t,"attribute:"+e);return n}_testAndFire(t,e){if(!this.conversionApi.consumable.test(e.item,t))return;const n=e.item.name||"$text";this.fire(t+":"+n,e,this.conversionApi)}_clearConversionApi(){delete this.conversionApi.writer,delete this.conversionApi.consumable}}function Cs(t,e,n){const o=e.getRange(),i=Array.from(t.getAncestors());return i.shift(),i.reverse(),!i.some(t=>{if(o.containsItem(t)){return!!n.toViewElement(t).getCustomProperty("addHighlight")}})}P(As,y);class Ts{constructor(t,e,n){this._lastRangeBackward=!1,this._ranges=[],this._attrs=new Map,t&&this.setTo(t,e,n)}get anchor(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.end:t.start}return null}get focus(){if(this._ranges.length>0){const t=this._ranges[this._ranges.length-1];return this._lastRangeBackward?t.start:t.end}return null}get isCollapsed(){return 1===this._ranges.length&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}isEqual(t){if(this.rangeCount!=t.rangeCount)return!1;if(0===this.rangeCount)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}*getRanges(){for(const t of this._ranges)yield _s.createFromRange(t)}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?_s.createFromRange(t):null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?_s.createFromRange(t):null}getFirstPosition(){const t=this.getFirstRange();return t?vs.createFromPosition(t.start):null}getLastPosition(){const t=this.getLastRange();return t?vs.createFromPosition(t.end):null}setTo(t,e,n){if(null===t)this._setRanges([]);else if(t instanceof Ts)this._setRanges(t.getRanges(),t.isBackward);else if(t&&"function"==typeof t.getRanges)this._setRanges(t.getRanges(),t.isBackward);else if(t instanceof _s)this._setRanges([t],!!e&&!!e.backward);else if(t instanceof vs)this._setRanges([new _s(t)]);else if(t instanceof us){const o=!!n&&!!n.backward;let i;if("in"==e)i=_s.createIn(t);else if("on"==e)i=_s.createOn(t);else{if(void 0===e)throw new m.b("model-selection-setTo-required-second-parameter: selection.setTo requires the second parameter when the first parameter is a node.");i=_s.createCollapsedAt(t,e)}this._setRanges([i],o)}else{if(!Mn(t))throw new m.b("model-selection-setTo-not-selectable: Cannot set selection to given place.");this._setRanges(t,e&&!!e.backward)}}_setRanges(t,e=!1){const n=(t=Array.from(t)).some(t=>{if(!(t instanceof _s))throw new m.b("model-selection-added-not-range: Trying to add an object that is not an instance of Range.");return this._ranges.every(e=>!e.isEqual(t))});if(t.length!==this._ranges.length||n){this._removeAllRanges();for(const e of t)this._pushRange(e);this._lastRangeBackward=!!e,this.fire("change:range",{directChange:!0})}}setFocus(t,e){if(null===this.anchor)throw new m.b("model-selection-setFocus-no-ranges: Cannot set selection focus if there are no ranges in selection.");const n=vs.createAt(t,e);if("same"==n.compareWith(this.focus))return;const o=this.anchor;this._ranges.length&&this._popRange(),"before"==n.compareWith(o)?(this._pushRange(new _s(n,o)),this._lastRangeBackward=!0):(this._pushRange(new _s(o,n)),this._lastRangeBackward=!1),this.fire("change:range",{directChange:!0})}getAttribute(t){return this._attrs.get(t)}getAttributes(){return this._attrs.entries()}getAttributeKeys(){return this._attrs.keys()}hasAttribute(t){return this._attrs.has(t)}removeAttribute(t){this.hasAttribute(t)&&(this._attrs.delete(t),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}setAttribute(t,e){this.getAttribute(t)!==e&&(this._attrs.set(t,e),this.fire("change:attribute",{attributeKeys:[t],directChange:!0}))}getSelectedElement(){if(1!==this.rangeCount)return null;const t=this.getFirstRange(),e=t.start.nodeAfter,n=t.end.nodeBefore;return e instanceof ms&&e==n?e:null}*getSelectedBlocks(){const t=new WeakSet;for(const e of this.getRanges()){const n=Es(e.start,t);n&&(yield n);for(const n of e.getWalker())"elementEnd"==n.type&&Ss(n.item,t)&&(yield n.item);const o=Es(e.end,t);o&&!e.end.isTouching(vs.createAt(o))&&(yield o)}}containsEntireContent(t=this.anchor.root){const e=vs.createAt(t),n=vs.createAt(t,"end");return e.isTouching(this.getFirstPosition())&&n.isTouching(this.getLastPosition())}_pushRange(t){this._checkRange(t),this._ranges.push(_s.createFromRange(t))}_checkRange(t){for(let e=0;e<this._ranges.length;e++)if(t.isIntersecting(this._ranges[e]))throw new m.b("model-selection-range-intersects: Trying to add a range that intersects with another range from selection.",{addedRange:t,intersectingRange:this._ranges[e]})}_removeAllRanges(){for(;this._ranges.length>0;)this._popRange()}_popRange(){this._ranges.pop()}}function Ss(t,e){return!e.has(t)&&(e.add(t),t.document.model.schema.isBlock(t)&&t.parent)}function Es(t,e){const n=t.parent.getAncestors({parentFirst:!0,includeSelf:!0}),o=n.find(t=>Ss(t,e));return n.forEach(t=>e.add(t)),o}P(Ts,y);class Ps extends _s{constructor(t,e){super(t,e),function(){const t=new Set(["insert","move","remove","reinsert"]);this.listenTo(this.root.document.model,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&t.has(o.type)&&function(t){const e=t.type,n=t.delta.batch;let o,i;"insert"==e?o=_s.createFromPositionAndShift(t.position,t.nodes.maxOffset):(o=_s.createFromPositionAndShift(t.getMovedRangeStart(),t.howMany),i=t.sourcePosition);const r=o.end.offset-o.start.offset;let s=o.start;"move"!=e&&"remove"!=e&&"reinsert"!=e||(s=s._getTransformedByInsertion(i,r));const a=this._getTransformedByDocumentChange(e,t.delta.type,s,r,i);"move"!=e&&"remove"!=e&&"reinsert"!=e||3!=a.length||(a[2]=o);const c=_s.createFromRanges(a),l=!c.isEqual(this),d=this.containsPosition(s),u=i&&(this.containsPosition(i)||this.start.isEqual(i)),h=d||u;if(l){const t=_s.createFromRange(this);this.start=c.start,this.end=c.end,this.fire("change:range",t,{type:e,batch:n,range:o,sourcePosition:i})}else h&&this.fire("change:content",_s.createFromRange(this),{type:e,batch:n,range:o,sourcePosition:i})}.call(this,o)},{priority:"low"})}.call(this)}detach(){this.stopListening()}}P(Ps,y);const Os="selection:";class Rs{constructor(t){this._selection=new Is(t),this._selection.delegate("change:range").to(this),this._selection.delegate("change:attribute").to(this)}get isCollapsed(){return this._selection.isCollapsed}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get rangeCount(){return this._selection.rangeCount}get hasOwnRange(){return this._selection.hasOwnRange}get isBackward(){return this._selection.isBackward}get isGravityOverridden(){return this._selection.isGravityOverridden}get _ranges(){return this._selection._ranges}getRanges(){return this._selection.getRanges()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getSelectedBlocks(){return this._selection.getSelectedBlocks()}getSelectedElement(){return this._selection.getSelectedElement()}containsEntireContent(t){return this._selection.containsEntireContent(t)}destroy(){this._selection.destroy()}getAttributeKeys(){return this._selection.getAttributeKeys()}getAttributes(){return this._selection.getAttributes()}getAttribute(t){return this._selection.getAttribute(t)}hasAttribute(t){return this._selection.hasAttribute(t)}_setFocus(t,e){this._selection.setFocus(t,e)}_setTo(t,e,n){this._selection.setTo(t,e,n)}_setAttribute(t,e){this._selection.setAttribute(t,e)}_removeAttribute(t){this._selection.removeAttribute(t)}_getStoredAttributes(){return this._selection._getStoredAttributes()}_overrideGravity(){return this._selection.overrideGravity()}_restoreGravity(t){this._selection.restoreGravity(t)}static _getStoreAttributeKey(t){return Os+t}static _isStoreAttributeKey(t){return t.startsWith(Os)}}P(Rs,y);class Is extends Ts{constructor(t){super(),this._model=t.model,this._document=t,this._attributePriority=new Map,this._fixGraveyardRangesData=[],this._hasChangedRange=!1,this._overriddenGravityRegister=new Set,this.on("change:range",()=>{for(const t of this.getRanges())if(!this._document._validateSelectionRange(t))throw new m.b("document-selection-wrong-position: Range from document selection starts or ends at incorrect position.",{range:t})}),this.listenTo(this._document,"change",(t,e)=>{this._updateAttributes(!1),function(t,e){const n=t.document.differ;for(const o of n.getChanges()){if("insert"!=o.type)continue;const n=o.position.parent,i=o.length===n.maxOffset;i&&t.enqueueChange(e,t=>{const e=Array.from(n.getAttributeKeys()).filter(t=>t.startsWith(Os));for(const o of e)t.removeAttribute(o,n)})}}(this._model,e)}),this.listenTo(this._model,"applyOperation",()=>{for(;this._fixGraveyardRangesData.length;){const{liveRange:t,sourcePosition:e}=this._fixGraveyardRangesData.shift();this._fixGraveyardSelection(t,e)}this._hasChangedRange&&(this._hasChangedRange=!1,this.fire("change:range",{directChange:!1}))},{priority:"lowest"})}get isCollapsed(){return 0===this._ranges.length?this._document._getDefaultRange().isCollapsed:super.isCollapsed}get anchor(){return super.anchor||this._document._getDefaultRange().start}get focus(){return super.focus||this._document._getDefaultRange().end}get rangeCount(){return this._ranges.length?this._ranges.length:1}get hasOwnRange(){return this._ranges.length>0}get isGravityOverridden(){return!!this._overriddenGravityRegister.size}destroy(){for(let t=0;t<this._ranges.length;t++)this._ranges[t].detach();this.stopListening()}*getRanges(){this._ranges.length?yield*super.getRanges():yield this._document._getDefaultRange()}getFirstRange(){return super.getFirstRange()||this._document._getDefaultRange()}getLastRange(){return super.getLastRange()||this._document._getDefaultRange()}setTo(t,e,n){super.setTo(t,e,n),this._refreshAttributes()}setFocus(t,e){super.setFocus(t,e),this._refreshAttributes()}setAttribute(t,e){if(this._setAttribute(t,e)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}removeAttribute(t){if(this._removeAttribute(t)){const e=[t];this.fire("change:attribute",{attributeKeys:e,directChange:!0})}}overrideGravity(){const t=w();return this._overriddenGravityRegister.add(t),1===this._overriddenGravityRegister.size&&this._refreshAttributes(),t}restoreGravity(t){if(!this._overriddenGravityRegister.has(t))throw new m.b("document-selection-gravity-wrong-restore: Attempting to restore the selection gravity for an unknown UID.",{uid:t});this._overriddenGravityRegister.delete(t),this.isGravityOverridden||this._refreshAttributes()}_refreshAttributes(){this._updateAttributes(!0)}_popRange(){this._ranges.pop().detach()}_pushRange(t){const e=this._prepareRange(t);e&&this._ranges.push(e)}_prepareRange(t){if(this._checkRange(t),t.root==this._document.graveyard)return void Ur.a.warn("model-selection-range-in-graveyard: Trying to add a Range that is in the graveyard root. Range rejected.");const e=Ps.createFromRange(t);return e.on("change:range",(t,n,o)=>{this._hasChangedRange=!0,e.root==this._document.graveyard&&this._fixGraveyardRangesData.push({liveRange:e,sourcePosition:o.sourcePosition})}),e}_updateAttributes(t){const e=ds(this._getSurroundingAttributes()),n=ds(this.getAttributes());if(t)this._attributePriority=new Map,this._attrs=new Map;else for(const[t,e]of this._attributePriority)"low"==e&&(this._attrs.delete(t),this._attributePriority.delete(t));this._setAttributesTo(e);const o=[];for(const[t,e]of this.getAttributes())n.has(t)&&n.get(t)===e||o.push(t);for(const[t]of n)this.hasAttribute(t)||o.push(t);o.length>0&&this.fire("change:attribute",{attributeKeys:o,directChange:!1})}_setAttribute(t,e,n=!0){const o=n?"normal":"low";return("low"!=o||"normal"!=this._attributePriority.get(t))&&(super.getAttribute(t)!==e&&(this._attrs.set(t,e),this._attributePriority.set(t,o),!0))}_removeAttribute(t,e=!0){const n=e?"normal":"low";return("low"!=n||"normal"!=this._attributePriority.get(t))&&(this._attributePriority.set(t,n),!!super.hasAttribute(t)&&(this._attrs.delete(t),!0))}_setAttributesTo(t){const e=new Set;for(const[e,n]of this.getAttributes())t.get(e)!==n&&this._removeAttribute(e,!1);for(const[n,o]of t){this._setAttribute(n,o,!1)&&e.add(n)}return e}*_getStoredAttributes(){const t=this.getFirstPosition().parent;if(this.isCollapsed&&t.isEmpty)for(const e of t.getAttributeKeys())if(e.startsWith(Os)){yield[e.substr(Os.length),t.getAttribute(e)]}}_getSurroundingAttributes(){const t=this.getFirstPosition(),e=this._model.schema;let n=null;if(this.isCollapsed){const e=t.textNode?t.textNode:t.nodeBefore,o=t.textNode?t.textNode:t.nodeAfter;if(this.isGravityOverridden||(n=Ms(e)),n||(n=Ms(o)),!this.isGravityOverridden&&!n){let t=e;for(;t&&!n;)n=Ms(t=t.previousSibling)}if(!n){let t=o;for(;t&&!n;)n=Ms(t=t.nextSibling)}n||(n=this._getStoredAttributes())}else{const t=this.getFirstRange();for(const o of t){if(o.item.is("element")&&e.isObject(o.item))break;"text"==o.type&&null===n&&(n=o.item.getAttributes())}}return n}_fixGraveyardSelection(t,e){const n=vs.createFromPosition(e),o=this._model.schema.getNearestSelectionRange(n),i=this._ranges.indexOf(t);if(this._ranges.splice(i,1),t.detach(),o){const t=this._prepareRange(o);this._ranges.splice(i,0,t)}}}function Ms(t){return t instanceof fs||t instanceof hs?t.getAttributes():null}var Fs=function(t){return Tn(t,!0,!0)};function Vs(t){return(t=Fs(t)).view=Bs(t.view,"container"),e=>{e.on("insert:"+t.model,function(t){return(e,n,o)=>{const i=t(n.item,o.writer);if(!i)return;if(!o.consumable.consume(n.item,"insert"))return;const r=o.mapper.toViewPosition(n.range.start);o.mapper.bindElements(n.item,i),o.writer.insert(r,i)}}(t.view),{priority:t.converterPriority||"normal"})}}function Ns(t){let e="attribute:"+((t=Fs(t)).model.key?t.model.key:t.model);if(t.model.name&&(e+=":"+t.model.name),t.model.values)for(const e of t.model.values)t.view[e]=Bs(t.view[e],"attribute");else t.view=Bs(t.view,"attribute");const n=Ls(t);return o=>{o.on(e,function(t){return(e,n,o)=>{const i=t(n.attributeOldValue,o.writer),r=t(n.attributeNewValue,o.writer);if(!i&&!r)return;if(!o.consumable.consume(n.item,e.name))return;const s=o.writer,a=s.document.selection;if(n.item instanceof Ts||n.item instanceof Rs)s.wrap(a.getFirstRange(),r);else{let t=o.mapper.toViewRange(n.range);null!==n.attributeOldValue&&i&&(t=s.unwrap(t,i)),null!==n.attributeNewValue&&r&&s.wrap(t,r)}}}(n),{priority:t.converterPriority||"normal"})}}function Ds(t){let e="attribute:"+((t=Fs(t)).model.key?t.model.key:t.model);if(t.model.name&&(e+=":"+t.model.name),t.model.values)for(const e of t.model.values)t.view[e]=js(t.view[e]);else t.view=js(t.view);const n=Ls(t);return o=>{o.on(e,function(t){return t=t||((t,e)=>({value:t,key:e.attributeKey})),(e,n,o)=>{const i=t(n.attributeOldValue,n),r=t(n.attributeNewValue,n);if(!i&&!r)return;if(!o.consumable.consume(n.item,e.name))return;const s=o.mapper.toViewElement(n.item),a=o.writer;if(null!==n.attributeOldValue&&i)if("class"==i.key){const t=Array.isArray(i.value)?i.value:[i.value];for(const e of t)a.removeClass(e,s)}else if("style"==i.key){const t=Object.keys(i.value);for(const e of t)a.removeStyle(e,s)}else a.removeAttribute(i.key,s);if(null!==n.attributeNewValue&&r)if("class"==r.key){const t=Array.isArray(r.value)?r.value:[r.value];for(const e of t)a.addClass(e,s)}else if("style"==r.key){const t=Object.keys(r.value);for(const e of t)a.setStyle(e,r.value[e],s)}else a.setAttribute(r.key,r.value,s)}}(n),{priority:t.converterPriority||"normal"})}}function Bs(t,e){return"function"==typeof t?t:(n,o)=>(function(t,e,n){"string"==typeof t&&(t={name:t});let o;const i=Object.assign({},t.attributes);if("container"==n)o=e.createContainerElement(t.name,i);else if("attribute"==n){const n={priority:t.priority||Uo.DEFAULT_PRIORITY};o=e.createAttributeElement(t.name,i,n)}else o=e.createUIElement(t.name,i);if(t.styles){const n=Object.keys(t.styles);for(const i of n)e.setStyle(i,t.styles[i],o)}if(t.classes){const n=t.classes;if("string"==typeof n)e.addClass(n,o);else for(const t of n)e.addClass(t,o)}return o})(t,o,e)}function Ls(t){return t.model.values?(e,n)=>{const o=t.view[e];return o?o(e,n):null}:t.view}function js(t){return"string"==typeof t?e=>({key:t,value:e}):"object"==typeof t?t.value?()=>t:e=>({key:t.key,value:e}):t}class zs{constructor(t){this.model=t,this.view=new ls,this.mapper=new ks,this.downcastDispatcher=new As({mapper:this.mapper});const e=this.model.document,n=e.selection,o=this.model.markers;this.listenTo(e,"change",()=>{this.view.change(t=>{this.downcastDispatcher.convertChanges(e.differ,t),this.downcastDispatcher.convertSelection(n,o,t)})},{priority:"low"}),this.listenTo(this.view.document,"selectionChange",function(t,e){return(n,o)=>{const i=o.newSelection,r=new Ts,s=[];for(const t of i.getRanges())s.push(e.toModelRange(t));r.setTo(s,{backward:i.isBackward}),r.isEqual(t.document.selection)||t.change(t=>{t.setSelection(r)})}}(this.model,this.mapper)),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const o=n.writer,i=n.mapper.toViewPosition(e.range.start),r=o.createText(e.item.data);o.insert(i,r)},{priority:"lowest"}),this.downcastDispatcher.on("remove",(t,e,n)=>{const o=n.mapper.toViewPosition(e.position),i=e.position.getShiftedBy(e.length),r=n.mapper.toViewPosition(i,{isPhantom:!0}),s=new Vo(o,r),a=n.writer.remove(s.getTrimmed());for(const t of Vo.createIn(a).getItems())n.mapper.unbindViewElement(t)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const o=n.writer,i=o.document.selection;for(const t of i.getRanges())t.isCollapsed&&t.end.parent.document&&n.writer.mergeAttributes(t.start);o.setSelection(null)},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const o=e.selection;if(o.isCollapsed)return;if(!n.consumable.consume(o,"selection"))return;const i=[];for(const t of o.getRanges()){const e=n.mapper.toViewRange(t);i.push(e)}n.writer.setSelection(i,{backward:o.isBackward})},{priority:"low"}),this.downcastDispatcher.on("selection",(t,e,n)=>{const o=e.selection;if(!o.isCollapsed)return;if(!n.consumable.consume(o,"selection"))return;const i=n.writer,r=o.getFirstPosition(),s=n.mapper.toViewPosition(r),a=i.breakAttributes(s);i.setSelection(a)},{priority:"low"}),this.view.document.roots.bindTo(this.model.document.roots).using(t=>{if("$graveyard"==t.rootName)return null;const e=new Io(t.name);return e.rootName=t.rootName,e._document=this.view.document,this.mapper.bindElements(t,e),e})}destroy(){this.view.destroy(),this.stopListening()}}P(zs,xo);class qs{constructor(t,e=[]){this._editor=t,this._availablePlugins=new Map,this._plugins=new Map;for(const t of e)this._availablePlugins.set(t,t),t.pluginName&&this._availablePlugins.set(t.pluginName,t)}*[Symbol.iterator](){for(const t of this._plugins)"function"==typeof t[0]&&(yield t)}get(t){return this._plugins.get(t)}load(t,e=[]){const n=this,o=this._editor,i=new Set,r=[],s=u(t),a=u(e),c=function(t){const e=[];for(const n of t)d(n)||e.push(n);return e.length?e:null}(t);if(c){const t="plugincollection-plugin-not-found: Some plugins are not available and could not be loaded.";return Ur.a.error(t,{plugins:c}),Promise.reject(new m.b(t,{plugins:c}))}return Promise.all(s.map(l)).then(()=>r);function l(t){if(!a.includes(t)&&!n.get(t)&&!i.has(t))return function(t){return new Promise(s=>{i.add(t),t.requires&&t.requires.forEach(n=>{const o=d(n);if(e.includes(o))throw new m.b("plugincollection-required: Cannot load a plugin because one of its dependencies is listed inthe `removePlugins` option.",{plugin:o,requiredBy:t});l(o)});const a=new t(o);n._add(t,a),r.push(a),s()})}(t).catch(e=>{throw Ur.a.error("plugincollection-load: It was not possible to load the plugin.",{plugin:t}),e})}function d(t){return"function"==typeof t?t:n._availablePlugins.get(t)}function u(t){return t.map(t=>d(t)).filter(t=>!!t)}}destroy(){const t=Array.from(this).map(([,t])=>t).filter(t=>"function"==typeof t.destroy).map(t=>t.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;n&&(this._plugins.has(n)?Ur.a.warn("plugincollection-plugin-name-conflict: Two plugins with the same name were loaded.",{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t}):this._plugins.set(n,e))}}class Us{constructor(){this._commands=new Map}add(t,e){this._commands.set(t,e)}get(t){return this._commands.get(t)}execute(t,...e){const n=this.get(t);if(!n)throw new m.b("commandcollection-command-not-found: Command does not exist.",{commandName:t});n.execute(...e)}*names(){yield*this._commands.keys()}*commands(){yield*this._commands.values()}[Symbol.iterator](){return this._commands[Symbol.iterator]()}destroy(){for(const t of this.commands())t.destroy()}}function Ws(t,e){const n=Object.keys(window.CKEDITOR_TRANSLATIONS).length;return 1===n&&(t=Object.keys(window.CKEDITOR_TRANSLATIONS)[0]),0!==n&&function(t,e){return t in window.CKEDITOR_TRANSLATIONS&&e in window.CKEDITOR_TRANSLATIONS[t]}(t,e)?window.CKEDITOR_TRANSLATIONS[t][e].replace(/ \[context: [^\]]+\]$/,""):e.replace(/ \[context: [^\]]+\]$/,"")}window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={});class Hs{constructor(t){this.language=t||"en",this.t=((...t)=>this._t(...t))}_t(t,e){let n=Ws(this.language,t);return e&&(n=n.replace(/%(\d+)/g,(t,n)=>n<e.length?e[n]:t)),n}}class $s{constructor(){this._consumables=new Map}add(t,e){let n;t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):(this._consumables.has(t)?n=this._consumables.get(t):(n=new Ks,this._consumables.set(t,n)),n.add(e))}test(t,e){const n=this._consumables.get(t);return void 0===n?null:t.is("text")||t.is("documentFragment")?n:n.test(e)}consume(t,e){return!!this.test(t,e)&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!1):this._consumables.get(t).consume(e),!0)}revert(t,e){const n=this._consumables.get(t);void 0!==n&&(t.is("text")||t.is("documentFragment")?this._consumables.set(t,!0):n.revert(e))}static consumablesFromElement(t){const e={name:!0,attributes:[],classes:[],styles:[]},n=t.getAttributeKeys();for(const t of n)"style"!=t&&"class"!=t&&e.attributes.push(t);const o=t.getClassNames();for(const t of o)e.classes.push(t);const i=t.getStyleNames();for(const t of i)e.styles.push(t);return e}static createFrom(t,e){if(e||(e=new $s),t.is("text"))return e.add(t),e;t.is("element")&&e.add(t,$s.consumablesFromElement(t)),t.is("documentFragment")&&e.add(t);for(const n of t.getChildren())e=$s.createFrom(n,e);return e}}class Ks{constructor(){this._canConsumeName=null,this._consumables={attributes:new Map,styles:new Map,classes:new Map}}add(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._add(e,t[e])}test(t){if(t.name&&!this._canConsumeName)return this._canConsumeName;for(const e in this._consumables)if(e in t){const n=this._test(e,t[e]);if(!0!==n)return n}return!0}consume(t){t.name&&(this._canConsumeName=!1);for(const e in this._consumables)e in t&&this._consume(e,t[e])}revert(t){t.name&&(this._canConsumeName=!0);for(const e in this._consumables)e in t&&this._revert(e,t[e])}_add(t,e){const n=Xt(e)?e:[e],o=this._consumables[t];for(const e of n){if("attributes"===t&&("class"===e||"style"===e))throw new m.b("viewconsumable-invalid-attribute: Classes and styles should be handled separately.");o.set(e,!0)}}_test(t,e){const n=Xt(e)?e:[e],o=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){const t=o.get(e);if(void 0===t)return null;if(!t)return!1}else{const t="class"==e?"classes":"styles",n=this._test(t,[...this._consumables[t].keys()]);if(!0!==n)return n}return!0}_consume(t,e){const n=Xt(e)?e:[e],o=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e)o.set(e,!1);else{const t="class"==e?"classes":"styles";this._consume(t,[...this._consumables[t].keys()])}}_revert(t,e){const n=Xt(e)?e:[e],o=this._consumables[t];for(const e of n)if("attributes"!==t||"class"!==e&&"style"!==e){!1===o.get(e)&&o.set(e,!0)}else{const t="class"==e?"classes":"styles";this._revert(t,[...this._consumables[t].keys()])}}}class Gs{constructor(){this._sourceDefinitions={},this.decorate("checkChild"),this.decorate("checkAttribute"),this.on("checkAttribute",(t,e)=>{e[0]=new Js(e[0])},{priority:"highest"}),this.on("checkChild",(t,e)=>{e[0]=new Js(e[0]),e[1]=this.getDefinition(e[1])},{priority:"highest"})}register(t,e){if(this._sourceDefinitions[t])throw new m.b("schema-cannot-register-item-twice: A single item cannot be registered twice in the schema.",{itemName:t});this._sourceDefinitions[t]=[Object.assign({},e)],this._clearCache()}extend(t,e){if(!this._sourceDefinitions[t])throw new m.b("schema-cannot-extend-missing-item: Cannot extend an item which was not registered yet.",{itemName:t});this._sourceDefinitions[t].push(Object.assign({},e)),this._clearCache()}getDefinitions(){return this._compiledDefinitions||this._compile(),this._compiledDefinitions}getDefinition(t){let e;return e="string"==typeof t?t:t.is&&(t.is("text")||t.is("textProxy"))?"$text":t.name,this.getDefinitions()[e]}isRegistered(t){return!!this.getDefinition(t)}isBlock(t){const e=this.getDefinition(t);return!(!e||!e.isBlock)}isLimit(t){const e=this.getDefinition(t);return!!e&&!(!e.isLimit&&!e.isObject)}isObject(t){const e=this.getDefinition(t);return!(!e||!e.isObject)}checkChild(t,e){return!!e&&this._checkContextMatch(e,t)}checkAttribute(t,e){const n=this.getDefinition(t.last);return!!n&&n.allowAttributes.includes(e)}checkMerge(t,e=null){if(t instanceof vs){const e=t.nodeBefore,n=t.nodeAfter;if(!(e instanceof ms))throw new m.b("schema-check-merge-no-element-before: The node before the merge position must be an element.");if(!(n instanceof ms))throw new m.b("schema-check-merge-no-element-after: The node after the merge position must be an element.");return this.checkMerge(e,n)}for(const n of e.getChildren())if(!this.checkChild(t,n))return!1;return!0}addChildCheck(t){this.on("checkChild",(e,[n,o])=>{if(!o)return;const i=t(n,o);"boolean"==typeof i&&(e.stop(),e.return=i)},{priority:"high"})}addAttributeCheck(t){this.on("checkAttribute",(e,[n,o])=>{const i=t(n,o);"boolean"==typeof i&&(e.stop(),e.return=i)},{priority:"high"})}getLimitElement(t){let e;if(t instanceof vs)e=t.parent;else{e=(t instanceof _s?[t]:Array.from(t.getRanges())).reduce((t,e)=>{const n=e.getCommonAncestor();return t?t.getCommonAncestor(n,{includeSelf:!0}):n},null)}for(;!this.isLimit(e)&&e.parent;)e=e.parent;return e}checkAttributeInSelection(t,e){if(t.isCollapsed)return this.checkAttribute([...t.getFirstPosition().getAncestors(),"$text"],e);{const n=t.getRanges();for(const t of n)for(const n of t)if(this.checkAttribute(n.item,e))return!0}return!1}getValidRanges(t,e){const n=[];for(const o of t){let t=o.start,i=o.start;const r=o.end;for(const r of o.getWalker())this.checkAttribute(r.item,e)||(i.isEqual(t)||n.push(new _s(i,t)),i=r.nextPosition),t=r.nextPosition;i&&!i.isEqual(r)&&n.push(new _s(i,r))}return n}getNearestSelectionRange(t,e="both"){if(this.checkChild(t,"$text"))return new _s(t);let n,o;"both"!=e&&"backward"!=e||(n=new gs({startPosition:t,direction:"backward"})),"both"!=e&&"forward"!=e||(o=new gs({startPosition:t}));for(const t of function*(t,e){let n=!1;for(;!n;){if(n=!0,t){const e=t.next();e.done||(n=!1,yield{walker:t,value:e.value})}if(e){const t=e.next();t.done||(n=!1,yield{walker:e,value:t.value})}}}(n,o)){const e=t.walker==n?"elementEnd":"elementStart",o=t.value;if(o.type==e&&this.isObject(o.item))return _s.createOn(o.item);if(this.checkChild(o.nextPosition,"$text"))return new _s(o.nextPosition)}return null}findAllowedParent(t,e){let n=e.parent;for(;n;){if(this.checkChild(n,t))return n;if(this.isLimit(n))return null;n=n.parent}return null}removeDisallowedAttributes(t,e){for(const n of t){for(const t of n.getAttributeKeys())this.checkAttribute(n,t)||e.removeAttribute(t,n);n.is("element")&&this.removeDisallowedAttributes(n.getChildren(),e)}}_clearCache(){this._compiledDefinitions=null}_compile(){const t={},e=this._sourceDefinitions,n=Object.keys(e);for(const o of n)t[o]=Qs(e[o],o);for(const e of n)Ys(t,e);for(const e of n)Xs(t,e);for(const e of n)Zs(t,e),ta(t,e);for(const e of n)ea(t,e),na(t,e);this._compiledDefinitions=t}_checkContextMatch(t,e,n=e.length-1){const o=e.getItem(n);if(t.allowIn.includes(o.name)){if(0==n)return!0;{const t=this.getDefinition(o);return this._checkContextMatch(t,e,n-1)}}return!1}}P(Gs,xo);class Js{constructor(t){if(t instanceof Js)return t;"string"==typeof t?t=[t]:Array.isArray(t)||(t=t.getAncestors({includeSelf:!0})),t[0]&&"string"!=typeof t[0]&&t[0].is("documentFragment")&&t.shift(),this._items=t.map(ra)}get length(){return this._items.length}get last(){return this._items[this._items.length-1]}[Symbol.iterator](){return this._items[Symbol.iterator]()}push(t){const e=new Js([t]);return e._items=[...this._items,...e._items],e}getItem(t){return this._items[t]}*getNames(){yield*this._items.map(t=>t.name)}endsWith(t){return Array.from(this.getNames()).join(" ").endsWith(t)}}function Qs(t,e){const n={name:e,allowIn:[],allowContentOf:[],allowWhere:[],allowAttributes:[],allowAttributesOf:[],inheritTypesFrom:[]};return function(t,e){for(const n of t){const t=Object.keys(n).filter(t=>t.startsWith("is"));for(const o of t)e[o]=n[o]}}(t,n),oa(t,n,"allowIn"),oa(t,n,"allowContentOf"),oa(t,n,"allowWhere"),oa(t,n,"allowAttributes"),oa(t,n,"allowAttributesOf"),oa(t,n,"inheritTypesFrom"),function(t,e){for(const n of t){const t=n.inheritAllFrom;t&&(e.allowContentOf.push(t),e.allowWhere.push(t),e.allowAttributesOf.push(t),e.inheritTypesFrom.push(t))}}(t,n),n}function Ys(t,e){for(const n of t[e].allowContentOf)if(t[n]){ia(t,n).forEach(t=>{t.allowIn.push(e)})}delete t[e].allowContentOf}function Xs(t,e){for(const n of t[e].allowWhere){const o=t[n];if(o){const n=o.allowIn;t[e].allowIn.push(...n)}}delete t[e].allowWhere}function Zs(t,e){for(const n of t[e].allowAttributesOf){const o=t[n];if(o){const n=o.allowAttributes;t[e].allowAttributes.push(...n)}}delete t[e].allowAttributesOf}function ta(t,e){const n=t[e];for(const e of n.inheritTypesFrom){const o=t[e];if(o){const t=Object.keys(o).filter(t=>t.startsWith("is"));for(const e of t)e in n||(n[e]=o[e])}}delete n.inheritTypesFrom}function ea(t,e){const n=t[e],o=n.allowIn.filter(e=>t[e]);n.allowIn=Array.from(new Set(o))}function na(t,e){const n=t[e];n.allowAttributes=Array.from(new Set(n.allowAttributes))}function oa(t,e,n){for(const o of t)"string"==typeof o[n]?e[n].push(o[n]):Array.isArray(o[n])&&e[n].push(...o[n])}function ia(t,e){const n=t[e];return function(t){return Object.keys(t).map(e=>t[e])}(t).filter(t=>t.allowIn.includes(n.name))}function ra(t){return"string"==typeof t?{name:t,*getAttributeKeys(){},getAttribute(){}}:{name:t.is("element")?t.name:"$text",*getAttributeKeys(){yield*t.getAttributeKeys()},getAttribute:e=>t.getAttribute(e)}}class sa{constructor(t={}){this._removeIfEmpty=new Set,this._modelCursor=null,this.conversionApi=Object.assign({},t),this.conversionApi.convertItem=this._convertItem.bind(this),this.conversionApi.convertChildren=this._convertChildren.bind(this),this.conversionApi.splitToAllowedParent=this._splitToAllowedParent.bind(this)}convert(t,e,n=["$root"]){this.fire("viewCleanup",t),this._modelCursor=function(t,e){let n;for(const o of new Js(t)){const t={};for(const e of o.getAttributeKeys())t[e]=o.getAttribute(e);const i=e.createElement(o.name,t);n&&e.append(i,n),n=vs.createAt(i)}return n}(n,e),this.conversionApi.writer=e,this.conversionApi.consumable=$s.createFrom(t),this.conversionApi.store={};const{modelRange:o}=this._convertItem(t,this._modelCursor),i=e.createDocumentFragment();if(o){this._removeEmptyElements();for(const t of Array.from(this._modelCursor.parent.getChildren()))e.append(t,i);i.markers=function(t,e){const n=new Set,o=new Map,i=_s.createIn(t).getItems();for(const t of i)"$marker"==t.name&&n.add(t);for(const t of n){const n=t.getAttribute("data-name"),i=vs.createBefore(t);o.has(n)?o.get(n).end=vs.createFromPosition(i):o.set(n,new _s(vs.createFromPosition(i))),e.remove(t)}return o}(i,e)}return this._modelCursor=null,this._removeIfEmpty.clear(),this.conversionApi.writer=null,this.conversionApi.store=null,i}_convertItem(t,e){const n=Object.assign({viewItem:t,modelCursor:e,modelRange:null});if(t.is("element")?this.fire("element:"+t.name,n,this.conversionApi):t.is("text")?this.fire("text",n,this.conversionApi):this.fire("documentFragment",n,this.conversionApi),n.modelRange&&!(n.modelRange instanceof _s))throw new m.b("view-conversion-dispatcher-incorrect-result: Incorrect conversion result was dropped.");return{modelRange:n.modelRange,modelCursor:n.modelCursor}}_convertChildren(t,e){const n=new _s(e);let o=e;for(const e of Array.from(t.getChildren())){const t=this._convertItem(e,o);t.modelRange instanceof _s&&(n.end=t.modelRange.end,o=t.modelCursor)}return{modelRange:n,modelCursor:o}}_splitToAllowedParent(t,e){const n=this.conversionApi.schema.findAllowedParent(t,e);if(!n)return null;if(n===e.parent)return{position:e};if(this._modelCursor.parent.getAncestors().includes(n))return null;const o=this.conversionApi.writer.split(e,n);for(const t of o.range.getPositions())t.isEqual(o.position)||this._removeIfEmpty.add(t.parent);return{position:o.position,cursorParent:o.range.end.parent}}_removeEmptyElements(){let t=!1;for(const e of this._removeIfEmpty)e.isEmpty&&(this.conversionApi.writer.remove(e),this._removeIfEmpty.delete(e),t=!0);t&&this._removeEmptyElements()}}function aa(t){const e=function(t){const e=new Fn(t.view);return(n,o,i)=>{const r=e.match(o.viewItem);if(!r)return;r.match.name=!0;const s=function(t,e,n){return t instanceof Function?t(e,n):n.createElement(t)}(t.model,o.viewItem,i.writer);if(!s)return;if(!i.consumable.test(o.viewItem,r.match))return;const a=i.splitToAllowedParent(s,o.modelCursor);if(!a)return;i.writer.insert(s,a.position);const c=i.convertChildren(o.viewItem,vs.createAt(s));i.consumable.consume(o.viewItem,r.match),o.modelRange=new _s(vs.createBefore(s),vs.createAfter(c.modelCursor.parent)),a.cursorParent?o.modelCursor=vs.createAt(a.cursorParent):o.modelCursor=o.modelRange.end}}(t=Fs(t)),n=da(t),o=n?"element:"+n:"element";return n=>{n.on(o,e,{priority:t.converterPriority||"normal"})}}function ca(t){ua(t=Fs(t));const e=ha(t,!1),n=da(t),o=n?"element:"+n:"element";return n=>{n.on(o,e,{priority:t.converterPriority||"normal"})}}function la(t){let e=null;("string"==typeof(t=Fs(t)).view||t.view.key)&&(e=function(t){"string"==typeof t.view&&(t.view={key:t.view});const e=t.view.key;let n;if("class"==e||"style"==e){const o="class"==e?"classes":"styles";n={[o]:t.view.value}}else{const o=void 0===t.view.value?/[\s\S]*/:t.view.value;n={attributes:{[e]:o}}}t.view.name&&(n.name=t.view.name);return t.view=n,e}(t)),ua(t,e);const n=ha(t,!0);return e=>{e.on("element",n,{priority:t.converterPriority||"low"})}}function da(t){return"string"==typeof t.view?t.view:"object"==typeof t.view&&"string"==typeof t.view.name?t.view.name:null}function ua(t,e=null){const n=null===e||(t=>t.getAttribute(e)),o="object"!=typeof t.model?t.model:t.model.key,i="object"!=typeof t.model||void 0===t.model.value?n:t.model.value;t.model={key:o,value:i}}function ha(t,e){const n=new Fn(t.view);return(o,i,r)=>{const s=n.match(i.viewItem);if(!s)return;const a=t.model.key,c="function"==typeof t.model.value?t.model.value(i.viewItem):t.model.value;null!==c&&(!function(t){if("object"==typeof t.view&&!da(t))return!1;return!t.view.classes&&!t.view.attributes&&!t.view.styles}(t)?delete s.match.name:s.match.name=!0,r.consumable.test(i.viewItem,s.match)&&(i.modelRange||(i=Object.assign(i,r.convertChildren(i.viewItem,i.modelCursor))),function(t,e,n,o){let i=!1;for(const r of Array.from(t.getItems({shallow:n})))o.schema.checkAttribute(r,e.key)&&(o.writer.setAttribute(e.key,e.value,r),i=!0);return i}(i.modelRange,{key:a,value:c},e,r)&&r.consumable.consume(i.viewItem,s.match)))}}P(sa,y);class fa{constructor(t,e){this.model=t,this.processor=e,this.mapper=new ks,this.downcastDispatcher=new As({mapper:this.mapper}),this.downcastDispatcher.on("insert:$text",(t,e,n)=>{if(!n.consumable.consume(e.item,"insert"))return;const o=n.writer,i=n.mapper.toViewPosition(e.range.start),r=o.createText(e.item.data);o.insert(i,r)},{priority:"lowest"}),this.upcastDispatcher=new sa({schema:t.schema}),this.upcastDispatcher.on("text",(t,e,n)=>{if(n.schema.checkChild(e.modelCursor,"$text")&&n.consumable.consume(e.viewItem)){const t=n.writer.createText(e.viewItem.data);n.writer.insert(t,e.modelCursor),e.modelRange=_s.createFromPositionAndShift(e.modelCursor,t.offsetSize),e.modelCursor=e.modelRange.end}},{priority:"lowest"}),this.upcastDispatcher.on("element",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:o}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=o}},{priority:"lowest"}),this.upcastDispatcher.on("documentFragment",(t,e,n)=>{if(!e.modelRange&&n.consumable.consume(e.viewItem,{name:!0})){const{modelRange:t,modelCursor:o}=n.convertChildren(e.viewItem,e.modelCursor);e.modelRange=t,e.modelCursor=o}},{priority:"lowest"}),this.decorate("init")}get(t="main"){return this.stringify(this.model.document.getRoot(t))}stringify(t){const e=this.toView(t);return this.processor.toData(e)}toView(t){const e=_s.createIn(t),n=new ri,o=new si(new zo);if(this.mapper.bindElements(t,n),this.downcastDispatcher.convertInsert(e,o),!t.is("documentFragment")){const e=function(t){const e=[],n=t.root.document;if(!n)return[];const o=_s.createIn(t);for(const t of n.model.markers){const n=o.getIntersection(t.getRange());n&&e.push([t.name,n])}return e}(t);for(const[t,n]of e)this.downcastDispatcher.convertMarkerAdd(t,n,o)}return this.mapper.clearBindings(),n}init(t,e="main"){if(this.model.document.version)throw new m.b("datacontroller-init-document-not-empty: Trying to set initial data to not empty document.");const n=this.model.document.getRoot(e);return this.model.enqueueChange("transparent",e=>{e.insert(this.parse(t,n),n)}),Promise.resolve()}set(t,e="main"){const n=this.model.document.getRoot(e);this.model.enqueueChange("transparent",e=>{e.setSelection(null),e.removeSelectionAttribute(this.model.document.selection.getAttributeKeys()),e.remove(_s.createIn(n)),e.insert(this.parse(t,n),n)})}parse(t,e="$root"){const n=this.processor.toView(t);return this.toModel(n,e)}toModel(t,e="$root"){return this.model.change(n=>this.upcastDispatcher.convert(t,n,e))}destroy(){}}P(fa,xo);class pa{constructor(){this._dispatchersGroups=new Map}register(t,e){if(this._dispatchersGroups.has(t))throw new m.b("conversion-register-group-exists: Trying to register a group name that was already registered.");this._dispatchersGroups.set(t,e)}for(t){const e=this._getDispatchers(t);return{add(t){return function(t,e){for(const n of t)e(n)}(e,t),this}}}elementToElement(t){this.for("downcast").add(Vs(t));for(const{model:e,view:n}of ma(t))this.for("upcast").add(aa({model:e,view:n,converterPriority:t.converterPriority}))}attributeToElement(t){this.for("downcast").add(Ns(t));for(const{model:e,view:n}of ma(t))this.for("upcast").add(ca({view:n,model:e,priority:t.priority}))}attributeToAttribute(t){this.for("downcast").add(Ds(t));for(const{model:e,view:n}of ma(t))this.for("upcast").add(la({view:n,model:e}))}_getDispatchers(t){const e=this._dispatchersGroups.get(t);if(!e)throw new m.b("conversion-for-unknown-group: Trying to add a converter to an unknown dispatchers group.");return e}}function*ma(t){if(t.model.values)for(const e of t.model.values){yield*ga({key:t.model.key,value:e},t.view[e],t.upcastAlso?t.upcastAlso[e]:void 0)}else yield*ga(t.model,t.view,t.upcastAlso)}function*ga(t,e,n){if(yield{model:t,view:e},n){n=Array.isArray(n)?n:[n];for(const e of n)yield{model:t,view:e}}}class ba{constructor(t){this.baseVersion=t,this.isDocumentOperation=null!==this.baseVersion}_validate(){}toJSON(){const t=Sn(this,!0);return t.__className=this.constructor.className,delete t.delta,delete t.isDocumentOperation,t}static get className(){return"engine.model.operation.Operation"}static fromJSON(t){return new this(t.baseVersion)}}class wa{constructor(t){this.markers=new Map,this._children=new ps,t&&this._insertChild(0,t)}[Symbol.iterator](){return this.getChildren()}get childCount(){return this._children.length}get maxOffset(){return this._children.maxOffset}get isEmpty(){return 0===this.childCount}get root(){return this}get parent(){return null}is(t){return"documentFragment"==t}getChild(t){return this._children.getNode(t)}getChildren(){return this._children[Symbol.iterator]()}getChildIndex(t){return this._children.getNodeIndex(t)}getChildStartOffset(t){return this._children.getNodeStartOffset(t)}getPath(){return[]}getNodeByPath(t){let e=this;for(const n of t)e=e.getChild(e.offsetToIndex(n));return e}offsetToIndex(t){return this._children.offsetToIndex(t)}toJSON(){const t=[];for(const e of this._children)t.push(e.toJSON());return t}static fromJSON(t){const e=[];for(const n of t)n.name?e.push(ms.fromJSON(n)):e.push(hs.fromJSON(n));return new wa(e)}_appendChild(t){this._insertChild(this.childCount,t)}_insertChild(t,e){const n=function(t){if("string"==typeof t)return[new hs(t)];Mn(t)||(t=[t]);return Array.from(t).map(t=>"string"==typeof t?new hs(t):t instanceof fs?new hs(t.data,t.getAttributes()):t)}(e);for(const t of n)null!==t.parent&&t._remove(),t.parent=this;this._children._insertNodes(t,n)}_removeChildren(t,e=1){const n=this._children._removeNodes(t,e);for(const t of n)t.parent=null;return n}}function va(t,e){const n=(e=ka(e)).reduce((t,e)=>t+e.offsetSize,0),o=t.parent;xa(t);const i=t.index;return o._insertChild(i,e),ya(o,i+e.length),ya(o,i),new _s(t,t.getShiftedBy(n))}function _a(t){if(!t.isFlat)throw new m.b("operation-utils-remove-range-not-flat: Trying to remove a range which starts and ends in different element.");const e=t.start.parent;xa(t.start),xa(t.end);const n=e._removeChildren(t.start.index,t.end.index-t.start.index);return ya(e,t.start.index),n}function ka(t){const e=[];t instanceof Array||(t=[t]);for(let n=0;n<t.length;n++)if("string"==typeof t[n])e.push(new hs(t[n]));else if(t[n]instanceof fs)e.push(new hs(t[n].data,t[n].getAttributes()));else if(t[n]instanceof wa||t[n]instanceof ps)for(const o of t[n])e.push(o);else t[n]instanceof us&&e.push(t[n]);for(let t=1;t<e.length;t++){const n=e[t],o=e[t-1];n instanceof hs&&o instanceof hs&&Aa(n,o)&&(e.splice(t-1,2,new hs(o.data+n.data,o.getAttributes())),t--)}return e}function ya(t,e){const n=t.getChild(e-1),o=t.getChild(e);if(n&&o&&n.is("text")&&o.is("text")&&Aa(n,o)){const i=new hs(n.data+o.data,n.getAttributes());t._removeChildren(e-1,2),t._insertChild(e-1,i)}}function xa(t){const e=t.textNode,n=t.parent;if(e){const o=t.offset-e.startOffset,i=e.index;n._removeChildren(i,1);const r=new hs(e.data.substr(0,o),e.getAttributes()),s=new hs(e.data.substr(o),e.getAttributes());n._insertChild(i,[r,s])}}function Aa(t,e){const n=t.getAttributes(),o=e.getAttributes();for(const t of n){if(t[1]!==e.getAttribute(t[0]))return!1;o.next()}return o.next().done}var Ca=function(t,e){return Rr(t,e)};class Ta extends ba{constructor(t,e,n,o,i){super(i),this.range=_s.createFromRange(t),this.key=e,this.oldValue=void 0===n?null:n,this.newValue=void 0===o?null:o}get type(){return null===this.oldValue?"addAttribute":null===this.newValue?"removeAttribute":"changeAttribute"}clone(){return new Ta(this.range,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Ta(this.range,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){for(const t of this.range.getItems()){if(null!==this.oldValue&&!Ca(t.getAttribute(this.key),this.oldValue))throw new m.b("attribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",{item:t,key:this.key,value:this.oldValue});if(null===this.oldValue&&null!==this.newValue&&t.hasAttribute(this.key))throw new m.b("attribute-operation-attribute-exists: The attribute with given key already exists.",{node:t,key:this.key})}}_execute(){Ca(this.oldValue,this.newValue)||function(t,e,n){xa(t.start),xa(t.end);for(const o of t.getItems()){const t=o.is("textProxy")?o.textNode:o;null!==n?t._setAttribute(e,n):t._removeAttribute(e),ya(t.parent,t.index)}ya(t.end.parent,t.end.index)}(this.range,this.key,this.newValue)}static get className(){return"engine.model.operation.AttributeOperation"}static fromJSON(t,e){return new Ta(_s.fromJSON(t.range,e),t.key,t.oldValue,t.newValue,t.baseVersion)}}class Sa extends ba{constructor(t,e,n,o){super(o),this.sourcePosition=vs.createFromPosition(t),this.howMany=e,this.targetPosition=vs.createFromPosition(n),this.isSticky=!1}get type(){return"move"}clone(){const t=new this.constructor(this.sourcePosition,this.howMany,this.targetPosition,this.baseVersion);return t.isSticky=this.isSticky,t}getMovedRangeStart(){return this.targetPosition._getTransformedByDeletion(this.sourcePosition,this.howMany)}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany),e=new this.constructor(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1);return e.isSticky=this.isSticky,e}_validate(){const t=this.sourcePosition.parent,e=this.targetPosition.parent,n=this.sourcePosition.offset,o=this.targetPosition.offset;if(!t||!e)throw new m.b("move-operation-position-invalid: Source position or target position is invalid.");if(n+this.howMany>t.maxOffset)throw new m.b("move-operation-nodes-do-not-exist: The nodes which should be moved do not exist.");if(t===e&&n<o&&o<n+this.howMany)throw new m.b("move-operation-range-into-itself: Trying to move a range of nodes to the inside of that range.");if(this.sourcePosition.root==this.targetPosition.root&&"prefix"==En(this.sourcePosition.getParentPath(),this.targetPosition.getParentPath())){const t=this.sourcePosition.path.length-1;if(this.targetPosition.path[t]>=n&&this.targetPosition.path[t]<n+this.howMany)throw new m.b("move-operation-node-into-itself: Trying to move a range of nodes into one of nodes from that range.")}}_execute(){!function(t,e){if(!t.isFlat)throw new m.b("operation-utils-move-range-not-flat: Trying to move a range which starts and ends in different element.");const n=_a(t);va(e=e._getTransformedByDeletion(t.start,t.end.offset-t.start.offset),n)}(_s.createFromPositionAndShift(this.sourcePosition,this.howMany),this.targetPosition)}static get className(){return"engine.model.operation.MoveOperation"}static fromJSON(t,e){const n=vs.fromJSON(t.sourcePosition,e),o=vs.fromJSON(t.targetPosition,e),i=new this(n,t.howMany,o,t.baseVersion);return t.isSticky&&(i.isSticky=!0),i}}class Ea extends Sa{get position(){return this.targetPosition}set position(t){this.targetPosition=t}get type(){return"reinsert"}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new Pa(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){if(super._validate(),!this.sourcePosition.root.document)throw new m.b("reinsert-operation-on-detached-item: Cannot reinsert detached item.");if(!this.targetPosition.root.document)throw new m.b("reinsert-operation-to-detached-parent: Cannot reinsert item to detached parent.")}static get className(){return"engine.model.operation.ReinsertOperation"}}class Pa extends Sa{get type(){return"remove"}getReversed(){const t=this.sourcePosition._getTransformedByInsertion(this.targetPosition,this.howMany);return new Ea(this.getMovedRangeStart(),this.howMany,t,this.baseVersion+1)}_validate(){if(super._validate(),!this.sourcePosition.root.document)throw new m.b("remove-operation-on-detached-item: Cannot remove detached item.")}static get className(){return"engine.model.operation.RemoveOperation"}}class Oa extends ba{constructor(t,e,n){super(n),this.position=vs.createFromPosition(t),this.nodes=new ps(ka(e))}get type(){return"insert"}clone(){const t=new ps([...this.nodes].map(t=>t._clone(!0)));return new Oa(this.position,t,this.baseVersion)}getReversed(){const t=this.position.root.document.graveyard,e=new vs(t,[0]);return new Pa(this.position,this.nodes.maxOffset,e,this.baseVersion+1)}_validate(){const t=this.position.parent;if(!t||t.maxOffset<this.position.offset)throw new m.b("insert-operation-position-invalid: Insertion position is invalid.")}_execute(){const t=this.nodes;this.nodes=new ps([...t].map(t=>t._clone(!0))),va(this.position,t)}static get className(){return"engine.model.operation.InsertOperation"}static fromJSON(t,e){const n=[];for(const e of t.nodes)e.name?n.push(ms.fromJSON(e)):n.push(hs.fromJSON(e));return new Oa(vs.fromJSON(t.position,e),n,t.baseVersion)}}class Ra extends ba{constructor(t,e,n,o,i,r){super(i),this.name=t,this.oldRange=e?_s.createFromRange(e):null,this.newRange=n?_s.createFromRange(n):null,this.affectsData=r,this._markers=o}get type(){return"marker"}clone(){return new Ra(this.name,this.oldRange,this.newRange,this._markers,this.baseVersion,this.affectsData)}getReversed(){return new Ra(this.name,this.newRange,this.oldRange,this._markers,this.baseVersion+1,this.affectsData)}_execute(){const t=this.newRange?"_set":"_remove";this._markers[t](this.name,this.newRange,!0,this.affectsData)}toJSON(){const t=super.toJSON();return delete t._markers,t}static get className(){return"engine.model.operation.MarkerOperation"}static fromJSON(t,e){return new Ra(t.name,t.oldRange?_s.fromJSON(t.oldRange,e):null,t.newRange?_s.fromJSON(t.newRange,e):null,e.model.markers,t.baseVersion,t.affectsData)}}class Ia extends ba{get type(){return"noop"}clone(){return new Ia(this.baseVersion)}getReversed(){return new Ia(this.baseVersion+1)}_execute(){}static get className(){return"engine.model.operation.NoOperation"}}class Ma extends ba{constructor(t,e,n,o){super(o),this.position=t,this.oldName=e,this.newName=n}get type(){return"rename"}clone(){return new Ma(vs.createFromPosition(this.position),this.oldName,this.newName,this.baseVersion)}getReversed(){return new Ma(vs.createFromPosition(this.position),this.newName,this.oldName,this.baseVersion+1)}_validate(){const t=this.position.nodeAfter;if(!(t instanceof ms))throw new m.b("rename-operation-wrong-position: Given position is invalid or node after it is not an instance of Element.");if(t.name!==this.oldName)throw new m.b("rename-operation-wrong-name: Element to change has different name than operation's old name.")}_execute(){this.position.nodeAfter.name=this.newName}static get className(){return"engine.model.operation.RenameOperation"}static fromJSON(t,e){return new Ma(vs.fromJSON(t.position,e),t.oldName,t.newName,t.baseVersion)}}class Fa extends ba{constructor(t,e,n,o,i){super(i),this.root=t,this.key=e,this.oldValue=n,this.newValue=o}get type(){return null===this.oldValue?"addRootAttribute":null===this.newValue?"removeRootAttribute":"changeRootAttribute"}clone(){return new Fa(this.root,this.key,this.oldValue,this.newValue,this.baseVersion)}getReversed(){return new Fa(this.root,this.key,this.newValue,this.oldValue,this.baseVersion+1)}_validate(){if(this.root!=this.root.root||this.root.is("documentFragment"))throw new m.b("rootattribute-operation-not-a-root: The element to change is not a root element.",{root:this.root,key:this.key});if(null!==this.oldValue&&this.root.getAttribute(this.key)!==this.oldValue)throw new m.b("rootattribute-operation-wrong-old-value: Changed node has different attribute value than operation's old attribute value.",{root:this.root,key:this.key});if(null===this.oldValue&&null!==this.newValue&&this.root.hasAttribute(this.key))throw new m.b("rootattribute-operation-attribute-exists: The attribute with given key already exists.",{root:this.root,key:this.key})}_execute(){null!==this.newValue?this.root._setAttribute(this.key,this.newValue):this.root._removeAttribute(this.key)}static get className(){return"engine.model.operation.RootAttributeOperation"}static fromJSON(t,e){if(!e.getRoot(t.root))throw new m.b("rootattribute-operation-fromjson-no-root: Cannot create RootAttributeOperation. Root with specified name does not exist.",{rootName:t});return new Fa(e.getRoot(t.root),t.key,t.oldValue,t.newValue,t.baseVersion)}}const Va={};Va[Ta.className]=Ta,Va[Oa.className]=Oa,Va[Ra.className]=Ra,Va[Sa.className]=Sa,Va[Ia.className]=Ia,Va[ba.className]=ba,Va[Ea.className]=Ea,Va[Pa.className]=Pa,Va[Ma.className]=Ma,Va[Fa.className]=Fa;class Na{static fromJSON(t,e){return Va[t.__className].fromJSON(t,e)}}const Da=new Map;class Ba{static fromJSON(t,e){if(!Da.has(t.__className))throw new m.b("delta-fromjson-no-deserializer: This delta has no defined deserializer",{name:t.__className});const n=new(Da.get(t.__className));for(const o of t.operations)n.addOperation(Na.fromJSON(o,e));for(const e in t)"__className"!=e&&void 0===n[e]&&(n[e]=t[e]);return n}static register(t){Da.set(t.className,t)}}class La{constructor(){this.batch=null,this.operations=[]}get baseVersion(){return this.operations.length>0?this.operations[0].baseVersion:null}set baseVersion(t){for(const e of this.operations)e.baseVersion=t++}get _reverseDeltaClass(){return La}addOperation(t){return t.delta=this,this.operations.push(t),t}clone(){const t=new this.constructor;for(const e of this.operations)t.addOperation(e.clone());return t}getReversed(){const t=new this._reverseDeltaClass;for(const e of this.operations)t.addOperation(e.getReversed());t.operations.reverse();for(let e=0;e<t.operations.length;e++)t.operations[e].baseVersion=this.operations[this.operations.length-1].baseVersion+e+1;return t}toJSON(){const t=Sn(this);return t.__className=this.constructor.className,delete t.batch,t}static get className(){return"engine.model.delta.Delta"}}Ba.register(La);class ja extends La{get type(){return"attribute"}get key(){return this.operations[0]?this.operations[0].key:null}get value(){return this.operations[0]?this.operations[0].newValue:null}get range(){if(this._range)return this._range;let t=null,e=null;for(const n of this.operations)n instanceof Ia||((null===t||t.isAfter(n.range.start))&&(t=n.range.start),(null===e||e.isBefore(n.range.end))&&(e=n.range.end));return t&&e?(this._range=new _s(t,e),this._range):null}get _reverseDeltaClass(){return ja}toJSON(){const t=super.toJSON();return delete t._range,t}static get className(){return"engine.model.delta.AttributeDelta"}}Ba.register(ja);class za extends La{get type(){return"split"}get position(){return this._moveOperation?this._moveOperation.sourcePosition:null}get _cloneOperation(){return this.operations[0]||null}get _moveOperation(){return this.operations[1]&&this.operations[1]instanceof Sa?this.operations[1]:null}get _reverseDeltaClass(){return qa}static get className(){return"engine.model.delta.SplitDelta"}}Ba.register(za);class qa extends La{get type(){return"merge"}get position(){return this._removeOperation?this._removeOperation.sourcePosition:null}get _removeOperation(){return this.operations[1]||null}get _reverseDeltaClass(){return za}static get className(){return"engine.model.delta.MergeDelta"}}Ba.register(qa);class Ua extends La{get type(){return"move"}get howMany(){return this._moveOperation?this._moveOperation.howMany:null}get sourcePosition(){return this._moveOperation?this._moveOperation.sourcePosition:null}get targetPosition(){return this._moveOperation?this._moveOperation.targetPosition:null}get _moveOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return Ua}static get className(){return"engine.model.delta.MoveDelta"}}Ba.register(Ua);class Wa extends Ua{static get className(){return"engine.model.delta.RemoveDelta"}}Ba.register(Wa);class Ha extends La{get type(){return"rename"}get _reverseDeltaClass(){return Ha}static get className(){return"engine.model.delta.RenameDelta"}}Ba.register(Ha);class $a extends La{get type(){return"wrap"}get range(){const t=this._moveOperation;return t?_s.createFromPositionAndShift(t.sourcePosition,t.howMany):null}get howMany(){const t=this.range;return t?t.end.offset-t.start.offset:0}get _insertOperation(){return this.operations[0]||null}get _moveOperation(){return this.operations[1]||null}get _reverseDeltaClass(){return Ka}static get className(){return"engine.model.delta.WrapDelta"}}Ba.register($a);class Ka extends La{get type(){return"unwrap"}get position(){return this._moveOperation?this._moveOperation.targetPosition:null}get _moveOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return $a}static get className(){return"engine.model.delta.UnwrapDelta"}}Ba.register(Ka);class Ga extends La{get type(){return"insert"}get position(){return this._insertOperation?this._insertOperation.position:null}get nodes(){return this._insertOperation?this._insertOperation.nodes:null}get _insertOperation(){return this.operations[0]||null}get _reverseDeltaClass(){return Wa}static get className(){return"engine.model.delta.InsertDelta"}}Ba.register(Ga);class Ja extends Ga{static get className(){return"engine.model.delta.WeakInsertDelta"}}Ba.register(Ja);var Qa=function(t,e,n={isStrong:!1}){let o,i;t instanceof Oa?o=Ya.InsertOperation:t instanceof Ta?o=Ya.AttributeOperation:t instanceof Fa?o=Ya.RootAttributeOperation:t instanceof Ma?o=Ya.RenameOperation:t instanceof Ra?o=Ya.MarkerOperation:t instanceof Sa?o=Ya.MoveOperation:i=Xa;o&&(i=e instanceof Oa?o.InsertOperation:e instanceof Ta?o.AttributeOperation:e instanceof Fa?o.RootAttributeOperation:e instanceof Ma?o.RenameOperation:e instanceof Ra?o.MarkerOperation:e instanceof Sa?o.MoveOperation:Xa);const r=i(t,e,n);return function(t,e){for(let n=0;n<e.length;n++)e[n].baseVersion=t+n+1;return e}(t.baseVersion,r)};const Ya={InsertOperation:{InsertOperation(t,e,n){const o=t.clone(),i=void 0===n.insertBefore?!n.isStrong:n.insertBefore;return o.position=o.position._getTransformedByInsertion(e.position,e.nodes.maxOffset,i),[o]},AttributeOperation:Xa,RootAttributeOperation:Xa,RenameOperation:Xa,MarkerOperation:Xa,MoveOperation(t,e,n){const o=t.clone(),i=void 0===n.insertBefore?!n.isStrong:n.insertBefore;return o.position=t.position._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,i,e.isSticky&&!n.forceNotSticky),[o]}},AttributeOperation:{InsertOperation:(t,e)=>t.range._getTransformedByInsertion(e.position,e.nodes.maxOffset,!0,!1).reverse().map(e=>new Ta(e,t.key,t.oldValue,t.newValue,t.baseVersion)),AttributeOperation(t,e,n){if(t.key===e.key){const o=t.range.getDifference(e.range).map(e=>new Ta(e,t.key,t.oldValue,t.newValue,t.baseVersion)),i=t.range.getIntersection(e.range);return i&&(n.isStrong?o.push(new Ta(i,e.key,e.newValue,t.newValue,t.baseVersion)):0===o.length&&o.push(new Ia(0))),o}return[t.clone()]},RootAttributeOperation:Xa,RenameOperation:Xa,MarkerOperation:Xa,MoveOperation(t,e){const n=_s.createFromPositionAndShift(e.sourcePosition,e.howMany);let o=[];const i=function(t){return 0===t.length?null:1==t.length?t[0]:(t[0].end=t[t.length-1].end,t[0])}(t.range.getDifference(n)),r=t.range.getIntersection(n);return null!==i&&(i.start=i.start._getTransformedByDeletion(e.sourcePosition,e.howMany),i.end=i.end._getTransformedByDeletion(e.sourcePosition,e.howMany),o=i._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,!0,!1).reverse()),null!==r&&(r.start=r.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),r.end=r.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),o.push(r)),o.map(e=>new Ta(e,t.key,t.oldValue,t.newValue,t.baseVersion))}},RootAttributeOperation:{InsertOperation:Xa,AttributeOperation:Xa,RootAttributeOperation:(t,e,n)=>t.root!==e.root||t.key!==e.key||(t.newValue===e.newValue||n.isStrong)&&t.newValue!==e.newValue?[t.clone()]:[new Ia(t.baseVersion)],RenameOperation:Xa,MarkerOperation:Xa,MoveOperation:Xa},RenameOperation:{InsertOperation(t,e){const n=t.clone();return n.position=n.position._getTransformedByInsertion(e.position,e.nodes.maxOffset,!0),[n]},AttributeOperation:Xa,RootAttributeOperation:Xa,RenameOperation(t,e,n){const o=t.clone();if(t.position.isEqual(e.position)){if(!n.isStrong)return[new Ia(t.baseVersion)];o.oldName=e.newName}return[o]},MarkerOperation:Xa,MoveOperation(t,e){const n=t.clone(),o=n.position.isEqual(e.sourcePosition);return n.position=n.position._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!0,o),[n]}},MarkerOperation:{InsertOperation(t,e){const n=t.clone();return n.oldRange&&(n.oldRange=n.oldRange._getTransformedByInsertion(e.position,e.nodes.maxOffset,!1,!1)[0]),n.newRange&&(n.newRange=n.newRange._getTransformedByInsertion(e.position,e.nodes.maxOffset,!1,!1)[0]),[n]},AttributeOperation:Xa,RootAttributeOperation:Xa,RenameOperation:Xa,MarkerOperation(t,e,n){const o=t.clone();if(t.name==e.name){if(!n.isStrong)return[new Ia(t.baseVersion)];o.oldRange=e.newRange}return[o]},MoveOperation(t,e){const n=t.clone();if(n.oldRange){const t=n.oldRange._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany);n.oldRange=_s.createFromRanges(t)}if(n.newRange){const t=n.newRange._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany);n.newRange=_s.createFromRanges(t)}return[n]}},MoveOperation:{InsertOperation(t,e,n){let o=_s.createFromPositionAndShift(t.sourcePosition,t.howMany);const i=t.isSticky&&!n.forceNotSticky;o=o._getTransformedByInsertion(e.position,e.nodes.maxOffset,!1,i)[0];const r=void 0===n.insertBefore?!n.isStrong:n.insertBefore,s=new t.constructor(o.start,o.end.offset-o.start.offset,t.targetPosition._getTransformedByInsertion(e.position,e.nodes.maxOffset,r),t.baseVersion);return s.isSticky=t.isSticky,[s]},AttributeOperation:Xa,RootAttributeOperation:Xa,RenameOperation:Xa,MarkerOperation:Xa,MoveOperation(t,e,n){const o=_s.createFromPositionAndShift(t.sourcePosition,t.howMany),i=_s.createFromPositionAndShift(e.sourcePosition,e.howMany);let r=n.isStrong;const s=t.isSticky&&!n.forceNotSticky,a=void 0===n.insertBefore?!r:n.insertBefore,c=t.targetPosition._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,a,e.isSticky&&!n.forceNotSticky);if(Za(t,e)&&Za(e,t))return[e.getReversed()];const l=o.containsPosition(e.targetPosition)||o.start.isEqual(e.targetPosition)&&s||o.end.isEqual(e.targetPosition)&&s;if(l&&o.containsRange(i,!0))return o.start=o.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!s),o.end=o.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,s),tc([o],c,t);if((i.containsPosition(t.targetPosition)||i.start.isEqual(t.targetPosition)&&e.isSticky&&!n.forceNotSticky||i.end.isEqual(t.targetPosition)&&e.isSticky&&!n.forceNotSticky)&&i.containsRange(o,!0))return o.start=o.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),o.end=o.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),tc([o],c,t);const d=En(t.sourcePosition.getParentPath(),e.sourcePosition.getParentPath());if("prefix"==d||"extension"==d)return o.start=o.start._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!s),o.end=o.end._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,s),tc([o],c,t);n.forceWeakRemove||(t instanceof Pa&&!(e instanceof Pa)?r=!0:!(t instanceof Pa)&&e instanceof Pa&&(r=!1));const u=[],h=o.getDifference(i);for(const t of h){t.start=t.start._getTransformedByDeletion(e.sourcePosition,e.howMany),t.end=t.end._getTransformedByDeletion(e.sourcePosition,e.howMany);const n="same"==En(t.start.getParentPath(),e.getMovedRangeStart().getParentPath()),o=t._getTransformedByInsertion(e.getMovedRangeStart(),e.howMany,n,s);u.push(...o)}const f=o.getIntersection(i);return null!==f&&r&&!l&&(f.start=f.start._getCombined(e.sourcePosition,e.getMovedRangeStart()),f.end=f.end._getCombined(e.sourcePosition,e.getMovedRangeStart()),0===u.length?u.push(f):1==u.length?i.start.isBefore(o.start)||i.start.isEqual(o.start)?u.unshift(f):u.push(f):u.splice(1,0,f)),0===u.length?[new Ia(t.baseVersion)]:tc(u,c,t)}}};function Xa(t){return[t.clone()]}function Za(t,e){return null===t.targetPosition._getTransformedByDeletion(e.sourcePosition,e.howMany)}function tc(t,e,n){const o=[];for(let i=0;i<t.length;i++){const r=ec(t[i],e,n.isSticky);o.push(r);for(let e=i+1;e<t.length;e++)t[e]=t[e]._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany)[0];e=e._getTransformedByMove(r.sourcePosition,r.targetPosition,r.howMany,!0,!1)}return o}function ec(t,e,n){let o;const i=new(o="$graveyard"==e.root.rootName?Pa:"$graveyard"==t.start.root.rootName?Ea:Sa)(t.start,t.end.offset-t.start.offset,e,0);return i.isSticky=n,i}var nc=function(t,e,n){var o=-1,i=t.length;e<0&&(e=-e>i?0:i+e),(n=n>i?i:n)<0&&(n+=i),i=e>n?0:n-e>>>0,e>>>=0;for(var r=Array(i);++o<i;)r[o]=t[o+e];return r},oc=Math.ceil,ic=Math.max;var rc=function(t,e,n){e=(n?zn(t,e,n):void 0===e)?1:ic(no(e),0);var o=t?t.length:0;if(!o||e<1)return[];for(var i=0,r=0,s=Array(oc(o/e));i<o;)s[r++]=nc(t,i,i+=e);return s};var sc=function(t){for(var e=-1,n=t?t.length:0,o=0,i=[];++e<n;){var r=t[e];r&&(i[o++]=r)}return i};var ac=function(t){return Xt(t)||Yt(t)};var cc=function t(e,n,o,i,r){var s=-1,a=e.length;for(o||(o=ac),r||(r=[]);++s<a;){var c=e[s];n>0&&o(c)?n>1?t(c,n-1,o,i,r):ge(r,c):i||(r[r.length]=c)}return r};var lc=function(){for(var t=arguments.length,e=Array(t?t-1:0),n=arguments[0],o=t;o--;)e[o-1]=arguments[o];return t?ge(Xt(n)?ue(n):[n],cc(e,1)):[]};var dc=function(t,e,n){for(var o=t.length,i=e+(n?0:-1);n?i--:++i<o;){var r=t[i];if(r!=r)return i}return-1};var uc=function(t,e,n){if(e!=e)return dc(t,n);for(var o=n-1,i=t.length;++o<i;)if(t[o]===e)return o;return-1};var hc=function(t,e){return!!t.length&&uc(t,e,0)>-1};var fc=function(t,e,n){for(var o=-1,i=t.length;++o<i;)if(n(e,t[o]))return!0;return!1};var pc=function(t,e){for(var n=-1,o=t.length,i=Array(o);++n<o;)i[n]=e(t[n],n,t);return i};var mc=function(t){return function(e){return t(e)}};var gc=function(t,e){return t.has(e)},bc=200;var wc=function(t,e,n,o){var i=-1,r=hc,s=!0,a=t.length,c=[],l=e.length;if(!a)return c;n&&(e=pc(e,mc(n))),o?(r=fc,s=!1):e.length>=bc&&(r=gc,s=!1,e=new Zi(e));t:for(;++i<a;){var d=t[i],u=n?n(d):d;if(d=o||0!==d?d:0,s&&u==u){for(var h=l;h--;)if(e[h]===u)continue t;c.push(d)}else r(e,u,o)||c.push(d)}return c},vc=ro(function(t,e){return Ht(t)?wc(t,cc(e,1,Ht,!0)):[]}),_c=1,kc=2;var yc=function(t,e,n,o){var i=n.length,r=i,s=!o;if(null==t)return!r;for(t=Object(t);i--;){var a=n[i];if(s&&a[2]?a[1]!==t[a[0]]:!(a[0]in t))return!1}for(;++i<r;){var c=(a=n[i])[0],l=t[c],d=a[1];if(s&&a[2]){if(void 0===l&&!(c in t))return!1}else{var u=new Ot;if(o)var h=o(l,d,c,t,e,u);if(!(void 0===h?Rr(d,l,o,_c|kc,u):h))return!1}}return!0};var xc=function(t){return t==t&&!W(t)};var Ac=function(t,e){return pc(e,function(e){return[e,t[e]]})};var Cc=function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=[t,t]}),n},Tc="[object Map]",Sc="[object Set]";var Ec=function(t){return function(e){var n=Oe(e);return n==Tc?Be(e):n==Sc?Cc(e):Ac(e,t(e))}}(ce);var Pc=function(t){for(var e=Ec(t),n=e.length;n--;)e[n][2]=xc(e[n][1]);return e};var Oc=function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}};var Rc=function(t){var e=Pc(t);return 1==e.length&&e[0][2]?Oc(e[0][0],e[0][1]):function(n){return n===t||yc(n,t,e)}},Ic="Expected a function";function Mc(t,e){if("function"!=typeof t||e&&"function"!=typeof e)throw new TypeError(Ic);var n=function(){var o=arguments,i=e?e.apply(this,o):o[0],r=n.cache;if(r.has(i))return r.get(i);var s=t.apply(this,o);return n.cache=r.set(i,s),s};return n.cache=new(Mc.Cache||Tt),n}Mc.Cache=Tt;var Fc=Mc,Vc=1/0,Nc=He?He.prototype:void 0,Dc=Nc?Nc.toString:void 0;var Bc=function(t){if("string"==typeof t)return t;if(Hn(t))return Dc?Dc.call(t):"";var e=t+"";return"0"==e&&1/t==-Vc?"-0":e};var Lc=function(t){return null==t?"":Bc(t)},jc=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g,zc=/\\(\\)?/g,qc=Fc(function(t){var e=[];return Lc(t).replace(jc,function(t,n,o,i){e.push(o?i.replace(zc,"$1"):n||t)}),e});var Uc=function(t){return Xt(t)?t:qc(t)},Wc=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Hc=/^\w*$/;var $c=function(t,e){if(Xt(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!Hn(t))||Hc.test(t)||!Wc.test(t)||null!=e&&t in Object(e)},Kc=1/0;var Gc=function(t){if("string"==typeof t||Hn(t))return t;var e=t+"";return"0"==e&&1/t==-Kc?"-0":e};var Jc=function(t,e){for(var n=0,o=(e=$c(e,t)?[e]:Uc(e)).length;null!=t&&n<o;)t=t[Gc(e[n++])];return n&&n==o?t:void 0};var Qc=function(t,e,n){var o=null==t?void 0:Jc(t,e);return void 0===o?n:o};var Yc=function(t,e){return e in Object(t)};var Xc=function(t,e,n){for(var o,i=-1,r=(e=$c(e,t)?[e]:Uc(e)).length;++i<r;){var s=Gc(e[i]);if(!(o=null!=t&&n(t,s)))break;t=t[s]}return o||!!(r=t?t.length:0)&&Ut(r)&&re(s,r)&&(Xt(t)||ee(t)||Yt(t))};var Zc=function(t,e){return null!=t&&Xc(t,e,Yc)},tl=1,el=2;var nl=function(t,e){return $c(t)&&xc(e)?Oc(Gc(t),e):function(n){var o=Qc(n,t);return void 0===o&&o===e?Zc(n,t):Rr(e,o,void 0,tl|el)}};var ol=function(t){return t};var il=function(t){return function(e){return Jc(e,t)}};var rl=function(t){return $c(t)?jt(Gc(t)):il(t)};var sl=function(t){return"function"==typeof t?t:null==t?ol:"object"==typeof t?Xt(t)?nl(t[0],t[1]):Rc(t):rl(t)},al=ro(function(t,e){var n=ws(e);return Ht(n)&&(n=void 0),Ht(t)?wc(t,cc(e,1,Ht,!0),sl(n)):[]}),cl=ro(function(t,e){var n=ws(e);return Ht(n)&&(n=void 0),Ht(t)?wc(t,cc(e,1,Ht,!0),void 0,n):[]});var ll=function(t,e,n){var o=t?t.length:0;return o?(e=n||void 0===e?1:no(e),nc(t,e<0?0:e,o)):[]};var dl=function(t,e,n){var o=t?t.length:0;return o?(e=n||void 0===e?1:no(e),nc(t,0,(e=o-e)<0?0:e)):[]};var ul=function(t,e,n,o){for(var i=t.length,r=o?i:-1;(o?r--:++r<i)&&e(t[r],r,t););return n?nc(t,o?0:r,o?r+1:i):nc(t,o?r+1:0,o?i:r)};var hl=function(t,e){return t&&t.length?ul(t,sl(e,3),!0,!0):[]};var fl=function(t,e){return t&&t.length?ul(t,sl(e,3),!0):[]};var pl=function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t},ml=4294967295;var gl=function(t){return t?pl(no(t),0,ml):0};var bl=function(t,e,n,o){var i=t.length;for((n=no(n))<0&&(n=-n>i?0:i+n),(o=void 0===o||o>i?i:no(o))<0&&(o+=i),o=n>o?0:gl(o);n<o;)t[n++]=e;return t};var wl=function(t,e,n,o){var i=t?t.length:0;return i?(n&&"number"!=typeof n&&zn(t,e,n)&&(n=0,o=i),bl(t,e,n,o)):[]};var vl=function(t,e,n){for(var o=t.length,i=n?o:-1;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1};var _l=function(t,e){return t&&t.length?vl(t,sl(e,3)):-1};var kl=function(t,e){return t&&t.length?vl(t,sl(e,3),!0):-1};var yl=function(t){return t&&t.length?t[0]:void 0};var xl=function(t){return t&&t.length?cc(t,1):[]},Al=1/0;var Cl=function(t){return t&&t.length?cc(t,Al):[]};var Tl=function(t,e){return t&&t.length?(e=void 0===e?1:no(e),cc(t,e)):[]};var Sl=function(t){for(var e=-1,n=t?t.length:0,o={};++e<n;){var i=t[e];o[i[0]]=i[1]}return o},El=Math.max;var Pl=function(t,e,n){var o=t?t.length:0;return o?((n=no(n))<0&&(n=El(o+n,0)),uc(t,e,n)):-1};var Ol=function(t){return dl(t,1)},Rl=Math.min;var Il=function(t,e,n){for(var o=n?fc:hc,i=t[0].length,r=t.length,s=r,a=Array(r),c=1/0,l=[];s--;){var d=t[s];s&&e&&(d=pc(d,mc(e))),c=Rl(d.length,c),a[s]=!n&&(e||i>=120&&d.length>=120)?new Zi(s&&d):void 0}d=t[0];var u=-1,h=a[0];t:for(;++u<i&&l.length<c;){var f=d[u],p=e?e(f):f;if(f=n||0!==f?f:0,!(h?gc(h,p):o(l,p,n))){for(s=r;--s;){var m=a[s];if(!(m?gc(m,p):o(t[s],p,n)))continue t}h&&h.push(p),l.push(f)}}return l};var Ml=function(t){return Ht(t)?t:[]},Fl=ro(function(t){var e=pc(t,Ml);return e.length&&e[0]===t[0]?Il(e):[]}),Vl=ro(function(t){var e=ws(t),n=pc(t,Ml);return e===ws(n)?e=void 0:n.pop(),n.length&&n[0]===t[0]?Il(n,sl(e)):[]}),Nl=ro(function(t){var e=ws(t),n=pc(t,Ml);return e===ws(n)?e=void 0:n.pop(),n.length&&n[0]===t[0]?Il(n,void 0,e):[]}),Dl=Array.prototype.join;var Bl=function(t,e){return t?Dl.call(t,e):""},Ll=Math.max,jl=Math.min;var zl=function(t,e,n){var o=t?t.length:0;if(!o)return-1;var i=o;if(void 0!==n&&(i=((i=no(n))<0?Ll(o+i,0):jl(i,o-1))+1),e!=e)return dc(t,i,!0);for(;i--;)if(t[i]===e)return i;return-1};var ql=function(t,e){var n=t.length;if(n)return re(e+=e<0?n:0,n)?t[e]:void 0};var Ul=function(t,e){return t&&t.length?ql(t,no(e)):void 0};var Wl=function(t,e,n,o){for(var i=n-1,r=t.length;++i<r;)if(o(t[i],e))return i;return-1},Hl=Array.prototype.splice;var $l=function(t,e,n,o){var i=o?Wl:uc,r=-1,s=e.length,a=t;for(n&&(a=pc(t,mc(n)));++r<s;)for(var c=0,l=e[r],d=n?n(l):l;(c=i(a,d,c,o))>-1;)a!==t&&Hl.call(a,c,1),Hl.call(t,c,1);return t};var Kl=function(t,e){return t&&t.length&&e&&e.length?$l(t,e):t},Gl=ro(Kl);var Jl=function(t,e,n){return t&&t.length&&e&&e.length?$l(t,e,sl(n)):t};var Ql=function(t,e,n){return t&&t.length&&e&&e.length?$l(t,e,void 0,n):t};var Yl=function(t,e){for(var n=-1,o=null==t,i=e.length,r=Array(i);++n<i;)r[n]=o?void 0:Qc(t,e[n]);return r};var Xl=function(t,e){return 1==e.length?t:Jc(t,nc(e,0,-1))},Zl=Array.prototype.splice;var td=function(t,e){for(var n=t?e.length:0,o=n-1;n--;){var i=e[n];if(n==o||i!==r){var r=i;if(re(i))Zl.call(t,i,1);else if($c(i,t))delete t[Gc(i)];else{var s=Uc(i),a=Xl(t,s);null!=a&&delete a[Gc(ws(s))]}}}return t};var ed=function(t,e){if(t!==e){var n=void 0!==t,o=null===t,i=t==t,r=Hn(t),s=void 0!==e,a=null===e,c=e==e,l=Hn(e);if(!a&&!l&&!r&&t>e||r&&s&&c&&!a&&!l||o&&s&&c||!n&&c||!i)return 1;if(!o&&!r&&!l&&t<e||l&&n&&i&&!o&&!r||a&&n&&i||!s&&i||!c)return-1}return 0},nd=ro(function(t,e){e=cc(e,1);var n=t?t.length:0,o=Yl(t,e);return td(t,pc(e,function(t){return re(t,n)?+t:t}).sort(ed)),o});var od=function(t,e){var n=[];if(!t||!t.length)return n;var o=-1,i=[],r=t.length;for(e=sl(e,3);++o<r;){var s=t[o];e(s,o,t)&&(n.push(s),i.push(o))}return td(t,i),n},id=Array.prototype.reverse;var rd=function(t){return t?id.call(t):t};var sd=function(t,e,n){var o=t?t.length:0;return o?(n&&"number"!=typeof n&&zn(t,e,n)?(e=0,n=o):(e=null==e?0:no(e),n=void 0===n?o:no(n)),nc(t,e,n)):[]},ad=4294967294,cd=Math.floor,ld=Math.min;var dd=function(t,e,n,o){e=n(e);for(var i=0,r=t?t.length:0,s=e!=e,a=null===e,c=Hn(e),l=void 0===e;i<r;){var d=cd((i+r)/2),u=n(t[d]),h=void 0!==u,f=null===u,p=u==u,m=Hn(u);if(s)var g=o||p;else g=l?p&&(o||h):a?p&&h&&(o||!f):c?p&&h&&!f&&(o||!m):!f&&!m&&(o?u<=e:u<e);g?i=d+1:r=d}return ld(r,ad)},ud=2147483647;var hd=function(t,e,n){var o=0,i=t?t.length:o;if("number"==typeof e&&e==e&&i<=ud){for(;o<i;){var r=o+i>>>1,s=t[r];null!==s&&!Hn(s)&&(n?s<=e:s<e)?o=r+1:i=r}return i}return dd(t,e,ol,n)};var fd=function(t,e){return hd(t,e)};var pd=function(t,e,n){return dd(t,e,sl(n))};var md=function(t,e){var n=t?t.length:0;if(n){var o=hd(t,e);if(o<n&&R(t[o],e))return o}return-1};var gd=function(t,e){return hd(t,e,!0)};var bd=function(t,e,n){return dd(t,e,sl(n),!0)};var wd=function(t,e){if(t&&t.length){var n=hd(t,e,!0)-1;if(R(t[n],e))return n}return-1};var vd=function(t,e){for(var n=-1,o=t.length,i=0,r=[];++n<o;){var s=t[n],a=e?e(s):s;if(!n||!R(a,c)){var c=a;r[i++]=0===s?0:s}}return r};var _d=function(t){return t&&t.length?vd(t):[]};var kd=function(t,e){return t&&t.length?vd(t,sl(e)):[]};var yd=function(t){return ll(t,1)};var xd=function(t,e,n){return t&&t.length?(e=n||void 0===e?1:no(e),nc(t,0,e<0?0:e)):[]};var Ad=function(t,e,n){var o=t?t.length:0;return o?(e=n||void 0===e?1:no(e),nc(t,(e=o-e)<0?0:e,o)):[]};var Cd=function(t,e){return t&&t.length?ul(t,sl(e,3),!1,!0):[]};var Td=function(t,e){return t&&t.length?ul(t,sl(e,3)):[]};var Sd=function(){},Ed=ke&&1/Ue(new ke([,-0]))[1]==1/0?function(t){return new ke(t)}:Sd,Pd=200;var Od=function(t,e,n){var o=-1,i=hc,r=t.length,s=!0,a=[],c=a;if(n)s=!1,i=fc;else if(r>=Pd){var l=e?null:Ed(t);if(l)return Ue(l);s=!1,i=gc,c=new Zi}else c=e?[]:a;t:for(;++o<r;){var d=t[o],u=e?e(d):d;if(d=n||0!==d?d:0,s&&u==u){for(var h=c.length;h--;)if(c[h]===u)continue t;e&&c.push(u),a.push(d)}else i(c,u,n)||(c!==a&&c.push(u),a.push(d))}return a},Rd=ro(function(t){return Od(cc(t,1,Ht,!0))}),Id=ro(function(t){var e=ws(t);return Ht(e)&&(e=void 0),Od(cc(t,1,Ht,!0),sl(e))}),Md=ro(function(t){var e=ws(t);return Ht(e)&&(e=void 0),Od(cc(t,1,Ht,!0),void 0,e)});var Fd=function(t){return t&&t.length?Od(t):[]};var Vd=function(t,e){return t&&t.length?Od(t,sl(e)):[]};var Nd=function(t,e){return t&&t.length?Od(t,void 0,e):[]};var Dd=function(t,e){for(var n=-1,o=t.length,i=0,r=[];++n<o;){var s=t[n];e(s,n,t)&&(r[i++]=s)}return r},Bd=Math.max;var Ld=function(t){if(!t||!t.length)return[];var e=0;return t=Dd(t,function(t){if(Ht(t))return e=Bd(t.length,e),!0}),Lt(e,function(e){return pc(t,jt(e))})};var jd=function(t,e){if(!t||!t.length)return[];var n=Ld(t);return null==e?n:pc(n,function(t){return qn(e,void 0,t)})},zd=ro(function(t,e){return Ht(t)?wc(t,e):[]});var qd=function(t,e,n){for(var o=-1,i=t.length;++o<i;)var r=r?ge(wc(r,t[o],e,n),wc(t[o],r,e,n)):t[o];return r&&r.length?Od(r,e,n):[]},Ud=ro(function(t){return qd(Dd(t,Ht))}),Wd=ro(function(t){var e=ws(t);return Ht(e)&&(e=void 0),qd(Dd(t,Ht),sl(e))}),Hd=ro(function(t){var e=ws(t);return Ht(e)&&(e=void 0),qd(Dd(t,Ht),void 0,e)}),$d=ro(Ld);var Kd=function(t,e,n){for(var o=-1,i=t.length,r=e.length,s={};++o<i;){var a=o<r?e[o]:void 0;n(s,t[o],a)}return s};var Gd=function(t,e){return Kd(t||[],e||[],Mt)};var Jd=function(t,e,n,o){for(var i=-1,r=(e=$c(e,t)?[e]:Uc(e)).length,s=r-1,a=t;null!=a&&++i<r;){var c=Gc(e[i]);if(W(a)){var l=n;if(i!=s){var d=a[c];void 0===(l=o?o(d,c,a):void 0)&&(l=null==d?re(e[i+1])?[]:{}:d)}Mt(a,c,l)}a=a[c]}return t};var Qd=function(t,e){return Kd(t||[],e||[],Jd)},Yd=ro(function(t){var e=t.length,n=e>1?t[e-1]:void 0;return n="function"==typeof n?(t.pop(),n):void 0,jd(t,n)}),Xd={chunk:rc,compact:sc,concat:lc,difference:vc,differenceBy:al,differenceWith:cl,drop:ll,dropRight:dl,dropRightWhile:hl,dropWhile:fl,fill:wl,findIndex:_l,findLastIndex:kl,first:yl,flatten:xl,flattenDeep:Cl,flattenDepth:Tl,fromPairs:Sl,head:yl,indexOf:Pl,initial:Ol,intersection:Fl,intersectionBy:Vl,intersectionWith:Nl,join:Bl,last:ws,lastIndexOf:zl,nth:Ul,pull:Gl,pullAll:Kl,pullAllBy:Jl,pullAllWith:Ql,pullAt:nd,remove:od,reverse:rd,slice:sd,sortedIndex:fd,sortedIndexBy:pd,sortedIndexOf:md,sortedLastIndex:gd,sortedLastIndexBy:bd,sortedLastIndexOf:wd,sortedUniq:_d,sortedUniqBy:kd,tail:yd,take:xd,takeRight:Ad,takeRightWhile:Cd,takeWhile:Td,union:Rd,unionBy:Id,unionWith:Md,uniq:Fd,uniqBy:Vd,uniqWith:Nd,unzip:Ld,unzipWith:jd,without:zd,xor:Ud,xorBy:Wd,xorWith:Hd,zip:$d,zipObject:Gd,zipObjectDeep:Qd,zipWith:Yd};const Zd=new Map,tu={transform(t,e,n){const o=(tu.getTransformationCase(t,e)||tu.defaultTransform)(t,e,Object.assign({},n));return function(t,e){for(const n of e)for(const e of n.operations)e.baseVersion=++t;return e}(Xd.last(e.operations).baseVersion,o)},defaultTransform(t,e,n){const o=[];let i=e.operations,r=[];for(const e of t.operations){const t=[e];for(const e of i)for(let o=0;o<t.length;o++){const i=t[o],s=Qa(i,e,n);Array.prototype.splice.apply(t,[o,1].concat(s)),o+=s.length-1;const a=Object.assign({},n);a.isStrong=!n.isStrong,a.insertBefore=void 0!==n.insertBefore?!n.insertBefore:void 0;const c=Qa(e,i,a);Array.prototype.push.apply(r,c)}i=r,r=[];for(const e of t)o.push(e)}return function t(e,n){let o=[];let i=null;let r;switch(e){case Ua:case Wa:for(const t of n)(i=t instanceof Ia?new La:t instanceof Pa?new Wa:new Ua).addOperation(t),o.push(i);return o;case za:case $a:return(i=new e).addOperation(n[0]),i.addOperation(n[1]),o=t(Ua,n.slice(2)),[i].concat(o);case qa:case Ka:return o=t(Ua,n.slice(0,-2)),(i=new e).addOperation(n[n.length-2]),i.addOperation(n[n.length-1]),o.concat(i);case Ha:return(i=n[0]instanceof Ia?new La:new Ha).addOperation(n[0]),[i];case ja:for(r=0;r<n.length&&n[r]instanceof Ia;r++);r==n.length?i=new La:(i=new ja,0!=r&&n.unshift(n.splice(r,1)[0]));for(const t of n)i.addOperation(t);return[i];default:i=new e;for(const t of n)i.addOperation(t);return[i]}}(t.constructor,o)},addTransformationCase(t,e,n){let o=Zd.get(t);o||(o=new Map,Zd.set(t,o)),o.set(e,n)},getTransformationCase(t,e){let n=Zd.get(t.constructor);if(!n||!n.get(e.constructor)){const o=Zd.keys();for(const i of o)if(t instanceof i&&Zd.get(i).get(e.constructor)){n=Zd.get(i);break}}if(n)return n.get(e.constructor)},transformDeltaSets(t,e,n=null){const o=Array.from(t),i=Array.from(e),r=null!==n,s={isStrong:!0};if(r){s.wasAffected=new Map,s.originalDelta=new Map,s.document=n,s.undoMode=!0;for(const t of i)s.originalDelta.set(t,t)}for(let t=0;t<o.length;t++){const e=[o[t]];for(let t=0;t<i.length;t++){const n=[i[t]];for(let t=0;t<e.length;t++)for(let o=0;o<n.length;o++){r&&iu(e[t],n[o],s);const i=tu.transform(e[t],n[o],{insertBefore:s.insertBefore,forceNotSticky:s.forceNotSticky,isStrong:s.isStrong,forceWeakRemove:s.forceWeakRemove,undoMode:s.undoMode}),a=tu.transform(n[o],e[t],{insertBefore:!s.insertBefore,forceNotSticky:s.forceNotSticky,isStrong:!s.isStrong,forceWeakRemove:s.forceWeakRemove,undoMode:s.undoMode});if(r){su(e[t],i,s);const r=s.originalDelta.get(n[o]);for(const t of a)s.originalDelta.set(t,r)}e.splice(t,1,...i),t+=i.length-1,n.splice(o,1,...a),o+=a.length-1}i.splice(t,1,...n),t+=n.length-1}o.splice(t,1,...e),t+=e.length-1}const a=nu(o)-nu(t),c=nu(i)-nu(e);return c<a?ou(i,a-c):a<c&&ou(o,c-a),{deltasA:o,deltasB:i}}};var eu=tu;function nu(t){return t.reduce((t,e)=>t+e.operations.length,0)}function ou(t,e){const n=t[t.length-1];let o=n.operations.length+n.baseVersion;const i=new La;for(let t=0;t<e;t++)i.addOperation(new Ia(o++));t.push(i)}function iu(t,e,n){!function(t,e,n){n.wasAffected.get(t)||n.wasAffected.set(t,new Map);const o=n.originalDelta.get(e);let i=!!n.wasAffected.get(t).get(o);for(const n of t.operations){for(const t of e.operations)if(n instanceof Sa&&t instanceof Sa&&ru(n,t)){i=!0;break}if(i)break}n.wasAffected.get(t).set(o,i)}(t,e,n),function(t,e,n){const o=n.originalDelta.get(e);if(n.document.history.isUndoingDelta(o)){const e=n.document.history.getUndoneDelta(o),i=n.wasAffected.get(t),r=i.get(e);void 0!==r&&(n.insertBefore=r)}}(t,e,n),function(t,e){const n=e.document.history,o=e.originalDelta.get(t);e.forceWeakRemove=n.isUndoneDelta(o)}(e,n),function(t,e){const n=e.originalDelta.get(t),o=e.document.history;e.forceNotSticky=o.isUndoneDelta(n)||o.isUndoingDelta(n)}(e,n)}function ru(t,e){const n=t.targetPosition,o=e.sourcePosition,i=En(o.getParentPath(),n.getParentPath());return n.root==o.root&&("same"==i&&o.offset<n.offset)}function su(t,e,n){delete n.insertBefore,delete n.forceNotSticky,delete n.forceWeakRemove;const o=n.wasAffected.get(t);n.wasAffected.delete(t);for(const t of e)n.wasAffected.set(t,new Map(o))}class au extends La{get type(){return"marker"}get _reverseDeltaClass(){return au}static get className(){return"engine.model.delta.MarkerDelta"}}Ba.register(au);const cu=eu.addTransformationCase,lu=eu.defaultTransform;function du(t,e){const n=t.clone(),o=n.operations[0];return o.oldRange&&(o.oldRange=o.oldRange.getTransformedByDelta(e)[0]),o.newRange&&(o.newRange=o.newRange.getTransformedByDelta(e)[0]),[n]}function uu(t,e){const n=new ja,o=t.nodes;let i=o.getNode(0).getAttribute(e.key),r=0,s=o.getNode(0).offsetSize;for(let t=1;t<o.length;t++){const n=o.getNode(t),c=n.getAttribute(e.key);c!=i&&(i!=e.value&&a(),i=c,r=s),s+=n.offsetSize}return a(),n;function a(){const o=new _s(t.position.getShiftedBy(r),t.position.getShiftedBy(s)),a=new Ta(o,e.key,i,e.value,0);n.addOperation(a)}}function hu(){const t=new La;return t.addOperation(new Ia(0)),t}cu(ja,Ja,(t,e,n)=>{const o=lu(t,e,n);return t.range.containsPosition(e.position)&&o.push(uu(e,t)),o}),cu(ja,za,(t,e,n)=>{if(!e.position)return lu(t,e,n);const o=n.undoMode,i=new vs(e.position.root,e.position.path.slice(0,-1)),r=lu(t,e,n);if(o||!(e._cloneOperation instanceof Oa))return r;for(const n of t.operations)if(n.range.containsPosition(i)||n.range.start.isEqual(i)){const t=new ja,o=i.getShiftedBy(1),s=vs.createFromPosition(o);s.path.push(0);const a=e._cloneOperation.nodes.getNode(0).getAttribute(n.key);t.addOperation(new Ta(new _s(o,s),n.key,void 0===a?null:a,n.newValue,0)),r.push(t);break}return r}),cu(Ga,qa,(t,e,n)=>{if(!e.position)return lu(t,e,n);return!n.undoMode&&t.position.isEqual(e.position)?[e.getReversed(),t.clone()]:lu(t,e,n)}),cu(au,za,du),cu(au,qa,du),cu(au,$a,du),cu(au,Ka,du),cu(au,Ua,du),cu(au,Ha,du),cu(Ua,qa,(t,e,n)=>{if(n.undoMode||!e.position)return lu(t,e,n);const o=t.sourcePosition.root==e.position.root&&"same"===En(t.sourcePosition.getParentPath(),e.position.getParentPath()),i=t.sourcePosition.offset<=e.position.offset&&t.sourcePosition.offset+t.howMany>e.position.offset;return o&&i?[e.getReversed(),t.clone()]:lu(t,e,n)}),cu(qa,Ga,(t,e,n)=>{if(!t.position)return lu(t,e,n);return!n.undoMode&&t.position.isEqual(e.position)?[hu()]:lu(t,e,n)}),cu(qa,Ua,(t,e,n)=>{if(n.undoMode||!t.position)return lu(t,e,n);const o=t.position.root==e.sourcePosition.root&&"same"===En(t.position.getParentPath(),e.sourcePosition.getParentPath()),i=e.sourcePosition.offset<=t.position.offset&&e.sourcePosition.offset+e.howMany>t.position.offset;return o&&i?[hu()]:lu(t,e,n)}),cu(za,za,(t,e,n)=>{if(n.undoMode)return lu(t,e,n);if(!t.position||!e.position)return lu(t,e,n);const o=t.position.getParentPath(),i=e.position.getParentPath();if(t.position.root==e.position.root&&"same"==En(o,i)){if((t=t.clone()).position.offset<e.position.offset||t.position.offset==e.position.offset&&n.isStrong){t._cloneOperation instanceof Ea&&e._cloneOperation instanceof Ea&&t._cloneOperation.sourcePosition.offset>e._cloneOperation.sourcePosition.offset&&t._cloneOperation.sourcePosition.offset--;const n=_s.createFromPositionAndShift(t.position,t._moveOperation.howMany),o=_s.createFromPositionAndShift(e.position,e._moveOperation.howMany),i=n.getDifference(o);let r=0;for(const t of i)r+=t.end.offset-t.start.offset;return 0===r?(t.operations.pop(),t.addOperation(new Ia(t.operations[0].baseVersion+1))):t.operations[1].howMany=r,[t]}{const o=Object.assign({},n);return o.isStrong=!0,o.insertBefore=!0,lu(t,e,o)}}return lu(t,e,n)}),cu(za,Ka,(t,e,n)=>t.position&&t.position.root==e.position.root&&"same"===En(e.position.path,t.position.getParentPath())?[hu()]:lu(t,e,n)),cu(za,$a,(t,e,n)=>{if(!t.position)return lu(t,e,n);const o=t.position.root==e.range.start.root,i=o&&"same"===En(t.position.getParentPath(),e.range.start.getParentPath()),r=e.range.start.offset<t.position.offset&&e.range.end.offset>=t.position.offset;if(i&&r)return[hu()];if(o&&"same"===En(t.position.getParentPath(),e.range.end.getShiftedBy(-1).path)){const n=t.clone(),o=vs.createFromPosition(e.range.start);o.path.push(e.howMany-1);const i=o.getShiftedBy(1);n._cloneOperation.position=i;const r=vs.createFromPosition(o);r.path.push(t.position.offset),n._moveOperation.sourcePosition=r;const s=vs.createFromPosition(i);return s.path.push(0),n._moveOperation.targetPosition=s,[n]}return lu(t,e,n)}),cu(za,ja,(t,e,n)=>{if(!t.position)return lu(t,e,n);t=t.clone();const o=n.undoMode,i=new vs(t.position.root,t.position.path.slice(0,-1));if(o||!(t._cloneOperation instanceof Oa))return[t];for(const n of e.operations)if(n.range.containsPosition(i)||n.range.start.isEqual(i)){null!==n.newValue?t._cloneOperation.nodes.getNode(0)._setAttribute(n.key,n.newValue):t._cloneOperation.nodes.getNode(0)._removeAttribute(n.key);break}return[t]}),cu(Ka,za,(t,e,n)=>e.position&&t.position.root==e.position.root&&"same"===En(t.position.path,e.position.getParentPath())?[e.getReversed(),t.clone()]:lu(t,e,n)),cu(Ja,ja,(t,e)=>{const n=[t.clone()];return e.range.containsPosition(t.position)&&n.push(uu(t,e)),n}),cu($a,za,(t,e,n)=>{if(!e.position)return lu(t,e,n);const o=t.range.start.root==e.position.root,i=o&&"same"===En(t.range.start.getParentPath(),e.position.getParentPath()),r=t.range.start.offset<e.position.offset&&t.range.end.offset>=e.position.offset;if(i&&r)return[e.getReversed(),t.clone()];if(o&&"same"===En(e.position.getParentPath(),t.range.end.getShiftedBy(-1).path)){const e=t.clone();return e._insertOperation.position.offset++,e._moveOperation.howMany++,e._moveOperation.targetPosition.path[e._moveOperation.targetPosition.path.length-2]++,[e]}return lu(t,e,n)}),cu(Ha,za,(t,e,n)=>{const o=n.undoMode,i=lu(t,e,n);if(o||!(e._cloneOperation instanceof Oa))return i;const r=e._cloneOperation.position.getShiftedBy(-1);if(r&&t.operations[0].position.isEqual(r)){const e=t.clone();e.operations[0].position=r.getShiftedBy(1),i.push(e)}return i}),cu(za,Ha,(t,e,n)=>{t=t.clone();const o=n.undoMode;if(o||!(t._cloneOperation instanceof Oa))return[t];const i=t._cloneOperation.position.getShiftedBy(-1);if(i&&!o&&e.operations[0].position.isEqual(i)){const n=e.clone();return n.operations[0].position=i.getShiftedBy(1),n.operations[0].oldName=t._cloneOperation.nodes.getNode(0).name,[t,n]}return[t]}),cu(Wa,za,(t,e,n)=>{const o=lu(t,e,n),i=e._cloneOperation.position||e._cloneOperation.targetPosition;if(!i)return lu(t,e,n);if(n.undoMode)return o;for(const t of o)if(t instanceof Wa){const e=t._moveOperation;e.sourcePosition.getShiftedBy(e.howMany).isEqual(i)&&(e.howMany+=1)}return o}),cu(za,Wa,(t,e,n)=>{if(n.undoMode)return lu(t,e,n);const o=t._cloneOperation.position||t._cloneOperation.targetPosition;if(!o)return lu(t,e,n);const i=(e=e.clone())._moveOperation;return i.sourcePosition.getShiftedBy(i.howMany).isEqual(o)&&(i.howMany+=1),lu(t,e,n)});class fu{constructor(t="default"){this.deltas=[],this.type=t}get baseVersion(){for(const t of this.deltas)if(null!==t.baseVersion)return t.baseVersion;return null}addDelta(t){return t.batch=this,this.deltas.push(t),t}*getOperations(){for(const t of this.deltas)yield*t.operations}}class pu extends La{static get className(){return"engine.model.delta.RootAttributeDelta"}}Ba.register(pu);class mu extends ba{constructor(t,e){super(null),this.sourcePosition=vs.createFromPosition(t),this.howMany=e}get type(){return"detach"}_validate(){if(this.sourcePosition.root.document)throw new m.b("detach-operation-on-document-node: Cannot detach document node.")}_execute(){_a(_s.createFromPositionAndShift(this.sourcePosition,this.howMany))}static get className(){return"engine.model.operation.DetachOperation"}}class gu extends ms{constructor(t,e,n="main"){super(e),this._doc=t,this.rootName=n}get document(){return this._doc}is(t,e){return e?"rootElement"==t&&e==this.name||super.is(t,e):"rootElement"==t||super.is(t)}toJSON(){return this.rootName}}class bu{constructor(t,e){this.model=t,this.batch=e}createText(t,e){return new hs(t,e)}createElement(t,e){return new ms(t,e)}createDocumentFragment(){return new wa}insert(t,e,n){this._assertWriterUsedCorrectly();const o=vs.createAt(e,n),i=t instanceof hs&&!t.parent?new Ja:new Ga;if(t.parent){if(yu(t.root,o.root))return void this.move(_s.createOn(t),o);if(t.root.document)throw new Error("model-writer-insert-forbidden-move: Cannot move a node from a document to a different tree.");this.remove(t)}const r=o.root.document?o.root.document.version:null,s=new Oa(o,t,r);if(this.batch.addDelta(i),i.addOperation(s),this.model.applyOperation(s),t instanceof wa)for(const[e,n]of t.markers){const t=vs.createAt(n.root),i=new _s(n.start._getCombined(t,o),n.end._getCombined(t,o));this.addMarker(e,{range:i,usingOperation:!0})}}insertText(t,e,n,o){e instanceof wa||e instanceof ms||e instanceof vs?this.insert(this.createText(t),e,n):this.insert(this.createText(t,e),n,o)}insertElement(t,e,n,o){e instanceof wa||e instanceof ms||e instanceof vs?this.insert(this.createElement(t),e,n):this.insert(this.createElement(t,e),n,o)}append(t,e){this.insert(t,e,"end")}appendText(t,e,n){e instanceof wa||e instanceof ms?this.insert(this.createText(t),e,"end"):this.insert(this.createText(t,e),n,"end")}appendElement(t,e,n){e instanceof wa||e instanceof ms?this.insert(this.createElement(t),e,"end"):this.insert(this.createElement(t,e),n,"end")}setAttribute(t,e,n){this._assertWriterUsedCorrectly(),n instanceof _s?wu(this,t,e,n):vu(this,t,e,n)}setAttributes(t,e){for(const[n,o]of ds(t))this.setAttribute(n,o,e)}removeAttribute(t,e){this._assertWriterUsedCorrectly(),e instanceof _s?wu(this,t,null,e):vu(this,t,null,e)}clearAttributes(t){this._assertWriterUsedCorrectly();const e=t=>{for(const e of t.getAttributeKeys())this.removeAttribute(e,t)};if(t instanceof _s)for(const n of t.getItems())e(n);else e(t)}move(t,e,n){if(this._assertWriterUsedCorrectly(),!(t instanceof _s))throw new m.b("writer-move-invalid-range: Invalid range to move.");if(!t.isFlat)throw new m.b("writer-move-range-not-flat: Range to move is not flat.");const o=vs.createAt(e,n);if(!yu(t.root,o.root))throw new m.b("writer-move-different-document: Range is going to be moved between different documents.");const i=new Ua;this.batch.addDelta(i);const r=t.root.document?t.root.document.version:null,s=new Sa(t.start,t.end.offset-t.start.offset,o,r);i.addOperation(s),this.model.applyOperation(s)}remove(t){this._assertWriterUsedCorrectly();const e=(t,e)=>{const n=new Wa;this.batch.addDelta(n),ku(t,e,n,this.model)};if(t instanceof _s){const n=t.getMinimalFlatRanges().reverse();for(const t of n)e(t.start,t.end.offset-t.start.offset)}else{const n=t.is("text")?t.offsetSize:1;e(vs.createBefore(t),n)}}merge(t){this._assertWriterUsedCorrectly();const e=new qa;this.batch.addDelta(e);const n=t.nodeBefore,o=t.nodeAfter;if(!(n instanceof ms))throw new m.b("writer-merge-no-element-before: Node before merge position must be an element.");if(!(o instanceof ms))throw new m.b("writer-merge-no-element-after: Node after merge position must be an element.");const i=vs.createFromParentAndOffset(o,0),r=vs.createFromParentAndOffset(n,n.maxOffset),s=t.root.document?t.root.document.version:null,a=new Sa(i,o.maxOffset,r,s);a.isSticky=!0,e.addOperation(a),this.model.applyOperation(a),ku(t,1,e,this.model)}rename(t,e){if(this._assertWriterUsedCorrectly(),!(t instanceof ms))throw new m.b("writer-rename-not-element-instance: Trying to rename an object which is not an instance of Element.");const n=new Ha;this.batch.addDelta(n);const o=t.root.document?t.root.document.version:null,i=new Ma(vs.createBefore(t),t.name,e,o);n.addOperation(i),this.model.applyOperation(i)}split(t,e){this._assertWriterUsedCorrectly();let n,o,i=t.parent;if(!i.parent)throw new m.b("writer-split-element-no-parent: Element with no parent can not be split.");if(e||(e=i.parent),!t.parent.getAncestors({includeSelf:!0}).includes(e))throw new m.b("writer-split-invalid-limit-element: Limit element is not a position ancestor.");do{const e=new za;this.batch.addDelta(e);const r=new ms(i.name,i.getAttributes()),s=i.root.document?i.root.document.version:null,a=new Oa(vs.createAfter(i),r,s);e.addOperation(a),this.model.applyOperation(a);const c=null!==s?s+1:null,l=new Sa(t,i.maxOffset-t.offset,vs.createFromParentAndOffset(r,0),c);l.isSticky=!0,e.addOperation(l),this.model.applyOperation(l),n||o||(n=i,o=r),i=(t=vs.createBefore(r)).parent}while(i!==e);return{position:t,range:new _s(vs.createAt(n,"end"),vs.createAt(o))}}wrap(t,e){if(this._assertWriterUsedCorrectly(),!t.isFlat)throw new m.b("writer-wrap-range-not-flat: Range to wrap is not flat.");const n=e instanceof ms?e:new ms(e);if(n.childCount>0)throw new m.b("writer-wrap-element-not-empty: Element to wrap with is not empty.");if(null!==n.parent)throw new m.b("writer-wrap-element-attached: Element to wrap with is already attached to tree model.");const o=new $a;this.batch.addDelta(o);const i=t.root.document?t.root.document.version:null,r=new Oa(t.end,n,i);o.addOperation(r),this.model.applyOperation(r);const s=null!==i?i+1:null,a=vs.createFromParentAndOffset(n,0),c=new Sa(t.start,t.end.offset-t.start.offset,a,s);o.addOperation(c),this.model.applyOperation(c)}unwrap(t){if(this._assertWriterUsedCorrectly(),null===t.parent)throw new m.b("writer-unwrap-element-no-parent: Trying to unwrap an element which has no parent.");const e=new Ka;this.batch.addDelta(e);const n=vs.createFromParentAndOffset(t,0),o=n.root.document?n.root.document.version:null,i=new Sa(n,t.maxOffset,vs.createBefore(t),o);i.isSticky=!0,e.addOperation(i),this.model.applyOperation(i),ku(vs.createBefore(t),1,e,this.model)}addMarker(t,e){if(this._assertWriterUsedCorrectly(),!e||"boolean"!=typeof e.usingOperation)throw new m.b("writer-addMarker-no-usingOperations: The options.usingOperations parameter is required when adding a new marker.");const n=e.usingOperation,o=e.range,i=void 0!==e.affectsData&&e.affectsData;if(this.model.markers.has(t))throw new m.b("writer-addMarker-marker-exists: Marker with provided name already exists.");if(!o)throw new m.b("writer-addMarker-no-range: Range parameter is required when adding a new marker.");return n?(_u(this,t,null,o,i),this.model.markers.get(t)):this.model.markers._set(t,o,n,i)}updateMarker(t,e={}){this._assertWriterUsedCorrectly();const n="string"==typeof t?t:t.name,o=this.model.markers.get(n);if(!o)throw new m.b("writer-updateMarker-marker-not-exists: Marker with provided name does not exists.");const i="boolean"==typeof e.usingOperation,r="boolean"==typeof e.affectsData,s=r?e.affectsData:o.affectsData;if(!i&&!e.range&&!r)throw new m.b("writer-updateMarker-wrong-options: One of the options is required - provide range, usingOperations or affectsData.");const a=o.getRange(),c=e.range?e.range:a;i&&e.usingOperation!==o.managedUsingOperations?e.usingOperation?_u(this,n,null,c,s):(_u(this,n,a,null,s),this.model.markers._set(n,c,void 0,s)):o.managedUsingOperations?_u(this,n,a,c,s):this.model.markers._set(n,c,void 0,s)}removeMarker(t){this._assertWriterUsedCorrectly();const e="string"==typeof t?t:t.name;if(!this.model.markers.has(e))throw new m.b("writer-removeMarker-no-marker: Trying to remove marker which does not exist.");const n=this.model.markers.get(e);n.managedUsingOperations?_u(this,e,n.getRange(),null,n.affectsData):this.model.markers._remove(e)}setSelection(t,e,n){this._assertWriterUsedCorrectly(),this.model.document.selection._setTo(t,e,n)}setSelectionFocus(t,e){this._assertWriterUsedCorrectly(),this.model.document.selection._setFocus(t,e)}setSelectionAttribute(t,e){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._setSelectionAttribute(t,e);else for(const[e,n]of ds(t))this._setSelectionAttribute(e,n)}removeSelectionAttribute(t){if(this._assertWriterUsedCorrectly(),"string"==typeof t)this._removeSelectionAttribute(t);else for(const e of t)this._removeSelectionAttribute(e)}overrideSelectionGravity(){return this.model.document.selection._overrideGravity()}restoreSelectionGravity(t){this.model.document.selection._restoreGravity(t)}_setSelectionAttribute(t,e){const n=this.model.document.selection;if(n.isCollapsed&&n.anchor.parent.isEmpty){const o=Rs._getStoreAttributeKey(t);this.setAttribute(o,e,n.anchor.parent)}n._setAttribute(t,e)}_removeSelectionAttribute(t){const e=this.model.document.selection;if(e.isCollapsed&&e.anchor.parent.isEmpty){const n=Rs._getStoreAttributeKey(t);this.removeAttribute(n,e.anchor.parent)}e._removeAttribute(t)}_assertWriterUsedCorrectly(){if(this.model._currentWriter!==this)throw new m.b("writer-incorrect-use: Trying to use a writer outside the change() block.")}}function wu(t,e,n,o){const i=new ja,r=t.model,s=r.document;let a,c,l,d=o.start;for(const t of o)l=t.item.getAttribute(e),a&&c!=l&&(c!=n&&u(),d=a),a=t.nextPosition,c=l;function u(){0===i.operations.length&&t.batch.addDelta(i);const o=new _s(d,a),l=o.root.document?s.version:null,u=new Ta(o,e,c,n,l);i.addOperation(u),r.applyOperation(u)}a instanceof vs&&a!=d&&c!=n&&u()}function vu(t,e,n,o){const i=t.model,r=i.document,s=o.getAttribute(e);let a,c;if(s!=n){const l=o.root===o,d=l?new pu:new ja;if(t.batch.addDelta(d),l){const t=o.document?r.version:null;c=new Fa(o,e,s,n,t)}else{const t=(a=o.is("element")?new _s(vs.createBefore(o),vs.createFromParentAndOffset(o,0)):new _s(vs.createBefore(o),vs.createAfter(o))).root.document?r.version:null;c=new Ta(a,e,s,n,t)}d.addOperation(c),i.applyOperation(c)}}function _u(t,e,n,o,i){const r=t.model,s=r.document,a=new au,c=new Ra(e,n,o,r.markers,s.version,i);t.batch.addDelta(a),a.addOperation(c),r.applyOperation(c)}function ku(t,e,n,o){let i;if(t.root.document){const n=o.document,r=new vs(n.graveyard,[0]);i=new Pa(t,e,r,n.version)}else i=new mu(t,e);n.addOperation(i),o.applyOperation(i)}function yu(t,e){return t===e||t instanceof gu&&e instanceof gu}class xu{constructor(t){this._markerCollection=t,this._changesInElement=new Map,this._elementSnapshots=new Map,this._changedMarkers=new Map,this._changeCount=0,this._cachedChanges=null,this._cachedChangesWithGraveyard=null}get isEmpty(){return 0==this._changesInElement.size&&0==this._changedMarkers.size}bufferOperation(t){switch(t.type){case"insert":if(this._isInInsertedElement(t.position.parent))return;this._markInsert(t.position.parent,t.position.offset,t.nodes.maxOffset);break;case"addAttribute":case"removeAttribute":case"changeAttribute":for(const e of t.range.getItems())this._isInInsertedElement(e.parent)||this._markAttribute(e);break;case"remove":case"move":case"reinsert":{const e=this._isInInsertedElement(t.sourcePosition.parent),n=this._isInInsertedElement(t.targetPosition.parent);e||this._markRemove(t.sourcePosition.parent,t.sourcePosition.offset,t.howMany),n||this._markInsert(t.targetPosition.parent,t.getMovedRangeStart().offset,t.howMany);break}case"rename":{if(this._isInInsertedElement(t.position.parent))return;this._markRemove(t.position.parent,t.position.offset,1),this._markInsert(t.position.parent,t.position.offset,1);const e=_s.createFromPositionAndShift(t.position,1);for(const t of this._markerCollection.getMarkersIntersectingRange(e)){const e=t.getRange();this.bufferMarkerChange(t.name,e,e,t.affectsData)}break}}this._cachedChanges=null}bufferMarkerChange(t,e,n,o){const i=this._changedMarkers.get(t);i?(i.newRange=n,i.affectsData=o,null==i.oldRange&&null==i.newRange&&this._changedMarkers.delete(t)):this._changedMarkers.set(t,{oldRange:e,newRange:n,affectsData:o})}getMarkersToRemove(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.oldRange&&t.push({name:e,range:n.oldRange});return t}getMarkersToAdd(){const t=[];for(const[e,n]of this._changedMarkers)null!=n.newRange&&t.push({name:e,range:n.newRange});return t}hasDataChanges(){for(const[,t]of this._changedMarkers)if(t.affectsData)return!0;return this._changesInElement.size>0}getChanges(t={includeChangesInGraveyard:!1}){if(this._cachedChanges)return t.includeChangesInGraveyard?this._cachedChangesWithGraveyard.slice():this._cachedChanges.slice();const e=[];for(const t of this._changesInElement.keys()){const n=this._changesInElement.get(t).sort((t,e)=>t.offset===e.offset?t.type!=e.type?"remove"==t.type?-1:1:0:t.offset<e.offset?-1:1),o=this._elementSnapshots.get(t),i=Au(t.getChildren()),r=Cu(o.length,n);let s=0,a=0;for(const n of r)if("i"===n)e.push(this._getInsertDiff(t,s,i[s].name)),s++;else if("r"===n)e.push(this._getRemoveDiff(t,s,o[a].name)),a++;else if("a"===n){const n=i[s].attributes,r=o[a].attributes;let c;if("$text"==i[s].name)c=_s.createFromParentsAndOffsets(t,s,t,s+1);else{const e=t.offsetToIndex(s);c=_s.createFromParentsAndOffsets(t,s,t.getChild(e),0)}e.push(...this._getAttributesDiff(c,r,n)),s++,a++}else s++,a++}e.sort((t,e)=>t.position.root!=e.position.root?t.position.root.rootName<e.position.root.rootName?-1:1:t.position.isEqual(e.position)?t.changeCount<e.changeCount?-1:1:t.position.isBefore(e.position)?-1:1);for(let t=1;t<e.length;t++){const n=e[t-1],o=e[t],i="remove"==n.type&&"remove"==o.type&&"$text"==n.name&&"$text"==o.name&&n.position.isEqual(o.position),r="insert"==n.type&&"insert"==o.type&&"$text"==n.name&&"$text"==o.name&&n.position.parent==o.position.parent&&n.position.offset+n.length==o.position.offset,s="attribute"==n.type&&"attribute"==o.type&&n.position.parent==o.position.parent&&n.range.isFlat&&o.range.isFlat&&n.position.offset+n.length==o.position.offset&&n.attributeKey==o.attributeKey&&n.attributeOldValue==o.attributeOldValue&&n.attributeNewValue==o.attributeNewValue;(i||r||s)&&(e[t-1].length++,s&&(e[t-1].range.end=e[t-1].range.end.getShiftedBy(1)),e.splice(t,1),t--)}for(const t of e)delete t.changeCount,"attribute"==t.type&&(delete t.position,delete t.length);return this._changeCount=0,this._cachedChangesWithGraveyard=e.slice(),this._cachedChanges=e.slice().filter(Tu),t.includeChangesInGraveyard?this._cachedChangesWithGraveyard:this._cachedChanges}reset(){this._changesInElement.clear(),this._elementSnapshots.clear(),this._changedMarkers.clear(),this._cachedChanges=null}_markInsert(t,e,n){const o={type:"insert",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o)}_markRemove(t,e,n){const o={type:"remove",offset:e,howMany:n,count:this._changeCount++};this._markChange(t,o),this._removeAllNestedChanges(t,e,n)}_markAttribute(t){const e={type:"attribute",offset:t.startOffset,howMany:t.offsetSize,count:this._changeCount++};this._markChange(t.parent,e)}_markChange(t,e){this._makeSnapshot(t);const n=this._getChangesForElement(t);this._handleChange(e,n),n.push(e);for(let t=0;t<n.length;t++)n[t].howMany<1&&(n.splice(t,1),t--)}_getChangesForElement(t){let e;return this._changesInElement.has(t)?e=this._changesInElement.get(t):(e=[],this._changesInElement.set(t,e)),e}_makeSnapshot(t){this._elementSnapshots.has(t)||this._elementSnapshots.set(t,Au(t.getChildren()))}_handleChange(t,e){t.nodesToHandle=t.howMany;for(const n of e){const o=t.offset+t.howMany,i=n.offset+n.howMany;if("insert"==t.type&&("insert"==n.type&&(t.offset<=n.offset?n.offset+=t.howMany:t.offset<i&&(n.howMany+=t.nodesToHandle,t.nodesToHandle=0)),"remove"==n.type&&t.offset<n.offset&&(n.offset+=t.howMany),"attribute"==n.type))if(t.offset<=n.offset)n.offset+=t.howMany;else if(t.offset<i){const i=n.howMany;n.howMany=t.offset-n.offset,e.unshift({type:"attribute",offset:o,howMany:i-n.howMany,count:this._changeCount++})}if("remove"==t.type){if("insert"==n.type)if(o<=n.offset)n.offset-=t.howMany;else if(o<=i)if(t.offset<n.offset){const e=o-n.offset;n.offset=t.offset,n.howMany-=e,t.nodesToHandle-=e}else n.howMany-=t.nodesToHandle,t.nodesToHandle=0;else if(t.offset<=n.offset)t.nodesToHandle-=n.howMany,n.howMany=0;else if(t.offset<i){const e=i-t.offset;n.howMany-=e,t.nodesToHandle-=e}if("remove"==n.type&&(o<=n.offset?n.offset-=t.howMany:t.offset<n.offset&&(t.nodesToHandle+=n.howMany,n.howMany=0)),"attribute"==n.type)if(o<=n.offset)n.offset-=t.howMany;else if(t.offset<n.offset){const e=o-n.offset;n.offset=t.offset,n.howMany-=e}else if(t.offset<i)if(o<=i){const o=n.howMany;n.howMany=t.offset-n.offset;const i=o-n.howMany-t.nodesToHandle;e.unshift({type:"attribute",offset:t.offset,howMany:i,count:this._changeCount++})}else n.howMany-=i-t.offset}if("attribute"==t.type){if("insert"==n.type)if(t.offset<n.offset&&o>n.offset){if(o>i){const t={type:"attribute",offset:i,howMany:o-i,count:this._changeCount++};this._handleChange(t,e),e.push(t)}t.nodesToHandle=n.offset-t.offset,t.howMany=t.nodesToHandle}else t.offset>=n.offset&&t.offset<i&&(o>i?(t.nodesToHandle=o-i,t.offset=i):t.nodesToHandle=0);"attribute"==n.type&&(t.offset>=n.offset&&o<=i?(t.nodesToHandle=0,t.howMany=0,t.offset=0):t.offset<=n.offset&&o>=i&&(n.howMany=0))}}t.howMany=t.nodesToHandle,delete t.nodesToHandle}_getInsertDiff(t,e,n){return{type:"insert",position:vs.createFromParentAndOffset(t,e),name:n,length:1,changeCount:this._changeCount++}}_getRemoveDiff(t,e,n){return{type:"remove",position:vs.createFromParentAndOffset(t,e),name:n,length:1,changeCount:this._changeCount++}}_getAttributesDiff(t,e,n){const o=[];n=new Map(n);for(const[i,r]of e){const e=n.has(i)?n.get(i):null;e!==r&&o.push({type:"attribute",position:t.start,range:_s.createFromRange(t),length:1,attributeKey:i,attributeOldValue:r,attributeNewValue:e,changeCount:this._changeCount++}),n.delete(i)}for(const[e,i]of n)o.push({type:"attribute",position:t.start,range:_s.createFromRange(t),length:1,attributeKey:e,attributeOldValue:null,attributeNewValue:i,changeCount:this._changeCount++});return o}_isInInsertedElement(t){const e=t.parent;if(!e)return!1;const n=this._changesInElement.get(e),o=t.startOffset;if(n)for(const t of n)if("insert"==t.type&&o>=t.offset&&o<t.offset+t.howMany)return!0;return this._isInInsertedElement(e)}_removeAllNestedChanges(t,e,n){const o=_s.createFromParentsAndOffsets(t,e,t,e+n);for(const t of o.getItems({shallow:!0}))t.is("element")&&(this._elementSnapshots.delete(t),this._changesInElement.delete(t),this._removeAllNestedChanges(t,0,t.maxOffset))}}function Au(t){const e=[];for(const n of t)if(n.is("text"))for(let t=0;t<n.data.length;t++)e.push({name:"$text",attributes:new Map(n.getAttributes())});else e.push({name:n.name,attributes:new Map(n.getAttributes())});return e}function Cu(t,e){const n=[];let o=0,i=0;for(const t of e)t.offset>o&&(n.push(..."e".repeat(t.offset-o).split("")),i+=t.offset-o),"insert"==t.type?(n.push(..."i".repeat(t.howMany).split("")),o=t.offset+t.howMany):"remove"==t.type?(n.push(..."r".repeat(t.howMany).split("")),o=t.offset,i+=t.howMany):(n.push(..."a".repeat(t.howMany).split("")),o=t.offset+t.howMany,i+=t.howMany);return i<t&&n.push(..."e".repeat(t-i).split("")),n}function Tu(t){const e=t.position&&"$graveyard"==t.position.root.rootName,n=t.range&&"$graveyard"==t.range.root.rootName;return!e&&!n}class Su{constructor(){this._deltas=[],this._historyPoints=new Map,this._undoPairs=new Map,this._undoneDeltas=new Set}addDelta(t){if(t.operations.length>0&&!this._historyPoints.has(t.baseVersion)){const e=this._deltas.length;this._deltas[e]=t,this._historyPoints.set(t.baseVersion,e)}}*getDeltas(t=0,e=Number.POSITIVE_INFINITY){if(0===this._deltas.length)return;let n=this._getIndex(t);if(-1!=n)for(;n<this._deltas.length;){const t=this._deltas[n++];if(t.baseVersion>=e)break;yield t}}getDelta(t){const e=this._historyPoints.get(t);return void 0===e?null:this._deltas[e]}setDeltaAsUndone(t,e){this._undoPairs.set(e,t),this._undoneDeltas.add(t)}isUndoingDelta(t){return this._undoPairs.has(t)}isUndoneDelta(t){return this._undoneDeltas.has(t)}getUndoneDelta(t){return this._undoPairs.get(t)}_getIndex(t){const e=this._historyPoints.get(t);if(void 0===e){const e=this._deltas[this._deltas.length-1],n=e.baseVersion+e.operations.length;if(t<0||t>=n)return-1;throw new m.b("model-history-wrong-version: Given base version points to the middle of a delta.")}return e}}function Eu(t,e){return function(t){return!!t&&1==t.length&&/[\ud800-\udbff]/.test(t)}(t.charAt(e-1))&&function(t){return!!t&&1==t.length&&/[\udc00-\udfff]/.test(t)}(t.charAt(e))}function Pu(t,e){return function(t){return!!t&&1==t.length&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t)}(t.charAt(e))}const Ou="$graveyard";class Ru{constructor(t){this.model=t,this.version=0,this.history=new Su(this),this.selection=new Rs(this),this.roots=new jo({idProperty:"rootName"}),this.differ=new xu(t.markers),this._postFixers=new Set,this.createRoot("$root",Ou),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];if(n.isDocumentOperation&&n.baseVersion!==this.version)throw new m.b("model-document-applyOperation-wrong-version: Only operations with matching versions can be applied.",{operation:n})},{priority:"highest"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&this.differ.bufferOperation(n)},{priority:"high"}),this.listenTo(t,"applyOperation",(t,e)=>{const n=e[0];n.isDocumentOperation&&(this.version++,this.history.addDelta(n.delta))},{priority:"low"});let e=!1;this.listenTo(this.selection,"change",()=>{e=!0}),this.listenTo(t,"_change",(t,n)=>{this.differ.isEmpty&&!e||(this._callPostFixers(n),this.differ.hasDataChanges()?this.fire("change:data",n.batch):this.fire("change",n.batch),this.differ.reset(),e=!1)}),this.listenTo(t.markers,"update",(t,e,n,o)=>{this.differ.bufferMarkerChange(e.name,n,o,e.affectsData),null===n&&e.on("change",(t,n)=>{this.differ.bufferMarkerChange(e.name,n,e.getRange(),e.affectsData)})})}get graveyard(){return this.getRoot(Ou)}createRoot(t="$root",e="main"){if(this.roots.get(e))throw new m.b("model-document-createRoot-name-exists: Root with specified name already exists.",{name:e});const n=new gu(this,t,e);return this.roots.add(n),n}destroy(){this.selection.destroy(),this.stopListening()}getRoot(t="main"){return this.roots.get(t)}getRootNames(){return Array.from(this.roots,t=>t.rootName).filter(t=>t!=Ou)}registerPostFixer(t){this._postFixers.add(t)}toJSON(){const t=Sn(this);return t.selection="[engine.model.DocumentSelection]",t.model="[engine.model.Model]",t}_getDefaultRoot(){for(const t of this.roots)if(t!==this.graveyard)return t;return this.graveyard}_getDefaultRange(){const t=this._getDefaultRoot(),e=this.model.schema,n=new vs(t,[0]);return e.getNearestSelectionRange(n)||new _s(n)}_validateSelectionRange(t){return Iu(t.start)&&Iu(t.end)}_callPostFixers(t){let e=!1;do{for(const n of this._postFixers)if(e=n(t))break}while(e)}}function Iu(t){const e=t.textNode;if(e){const n=e.data,o=t.offset-e.startOffset;return!Eu(n,o)&&!Pu(n,o)}return!0}P(Ru,y);class Mu{constructor(){this._markers=new Map}[Symbol.iterator](){return this._markers.values()}has(t){return this._markers.has(t)}get(t){return this._markers.get(t)||null}_set(t,e,n=!1,o=!1){const i=t instanceof Fu?t.name:t,r=this._markers.get(i);if(r){const t=r.getRange();let s=!1;return t.isEqual(e)||(r._attachLiveRange(Ps.createFromRange(e)),s=!0),n!=r.managedUsingOperations&&(r._managedUsingOperations=n,s=!0),"boolean"==typeof o&&o!=r.affectsData&&(r._affectsData=o,s=!0),s&&this.fire("update:"+i,r,t,e),r}const s=Ps.createFromRange(e),a=new Fu(i,s,n,o);return this._markers.set(i,a),this.fire("update:"+i,a,null,e),a}_remove(t){const e=t instanceof Fu?t.name:t,n=this._markers.get(e);return!!n&&(this._markers.delete(e),this.fire("update:"+e,n,n.getRange(),null),this._destroyMarker(n),!0)}*getMarkersAtPosition(t){for(const e of this)e.getRange().containsPosition(t)&&(yield e)}*getMarkersIntersectingRange(t){for(const e of this)null!==e.getRange().getIntersection(t)&&(yield e)}destroy(){for(const t of this._markers.values())this._destroyMarker(t);this._markers=null,this.stopListening()}*getMarkersGroup(t){for(const e of this._markers.values())e.name.startsWith(t+":")&&(yield e)}_destroyMarker(t){t.stopListening(),t._detachLiveRange()}}P(Mu,y);class Fu{constructor(t,e,n,o){this.name=t,this._liveRange=this._attachLiveRange(e),this._managedUsingOperations=n,this._affectsData=o}get managedUsingOperations(){if(!this._liveRange)throw new m.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._managedUsingOperations}get affectsData(){if(!this._liveRange)throw new m.b("marker-destroyed: Cannot use a destroyed marker instance.");return this._affectsData}getStart(){if(!this._liveRange)throw new m.b("marker-destroyed: Cannot use a destroyed marker instance.");return vs.createFromPosition(this._liveRange.start)}getEnd(){if(!this._liveRange)throw new m.b("marker-destroyed: Cannot use a destroyed marker instance.");return vs.createFromPosition(this._liveRange.end)}getRange(){if(!this._liveRange)throw new m.b("marker-destroyed: Cannot use a destroyed marker instance.");return _s.createFromRange(this._liveRange)}_attachLiveRange(t){return this._liveRange&&this._detachLiveRange(),t.delegate("change:range").to(this),t.delegate("change:content").to(this),this._liveRange=t,t}_detachLiveRange(){this._liveRange.stopDelegating("change:range",this),this._liveRange.stopDelegating("change:content",this),this._liveRange.detach(),this._liveRange=null}}P(Fu,y);class Vu extends vs{constructor(t,e,n){if(super(t,e),!this.root.is("rootElement"))throw new m.b("model-liveposition-root-not-rootelement: LivePosition's root has to be an instance of RootElement.");this.stickiness=n||"sticksToNext",function(){const t=new Set(["insert","move","remove","reinsert"]);this.listenTo(this.root.document.model,"applyOperation",(e,n)=>{const o=n[0];o.isDocumentOperation&&t.has(o.type)&&function(t){let e,n;"insert"==t.type?e=_s.createFromPositionAndShift(t.position,t.nodes.maxOffset):(e=_s.createFromPositionAndShift(t.getMovedRangeStart(),t.howMany),n=t.sourcePosition);const o=e.end.offset-e.start.offset;let i;switch(t.type){case"insert":const r="sticksToNext"==this.stickiness;i=this._getTransformedByInsertion(e.start,o,r);break;case"move":case"remove":case"reinsert":const s=_s.createFromPositionAndShift(n,o),a=s.containsPosition(this)||s.start.isEqual(this)&&"sticksToNext"==this.stickiness||s.end.isEqual(this)&&"sticksToPrevious"==this.stickiness;if(a)i=this._getCombined(n,e.start);else{const t="sticksToNext"==this.stickiness,r=e.start._getTransformedByInsertion(n,o);i=this._getTransformedByMove(n,r,o,t)}}if(!this.isEqual(i)){const t=vs.createFromPosition(this);this.path=i.path,this.root=i.root,this.fire("change",t)}}.call(this,o)},{priority:"low"})}.call(this)}detach(){this.stopListening()}}P(Vu,y);class Nu{constructor(t,e,n){this.model=t,this.writer=e,this.position=n,this.canMergeWith=new Set([this.position.parent]),this.schema=t.schema,this._filterAttributesOf=[]}handleNodes(t,e){t=Array.from(t);for(let n=0;n<t.length;n++){const o=t[n];this._handleNode(o,{isFirst:0===n&&e.isFirst,isLast:n===t.length-1&&e.isLast})}this.schema.removeDisallowedAttributes(this._filterAttributesOf,this.writer),this._filterAttributesOf=[]}getSelectionRange(){return this.nodeToSelect?_s.createOn(this.nodeToSelect):this.model.schema.getNearestSelectionRange(this.position)}_handleNode(t,e){if(this.schema.isObject(t))return void this._handleObject(t,e);this._checkAndSplitToAllowedPosition(t,e)?(this._insert(t),this._mergeSiblingsOf(t,e)):this._handleDisallowedNode(t,e)}_handleObject(t,e){this._checkAndSplitToAllowedPosition(t)?this._insert(t):this._tryAutoparagraphing(t,e)}_handleDisallowedNode(t,e){t.is("element")?this.handleNodes(t.getChildren(),e):this._tryAutoparagraphing(t,e)}_insert(t){if(!this.schema.checkChild(this.position,t))return void Ur.a.error("insertcontent-wrong-position: The node cannot be inserted on the given position.",{node:t,position:this.position});const e=Vu.createFromPosition(this.position);this.writer.insert(t,this.position),this.position=vs.createFromPosition(e),e.detach(),this.schema.isObject(t)&&!this.schema.checkChild(this.position,"$text")?this.nodeToSelect=t:this.nodeToSelect=null,this._filterAttributesOf.push(t)}_mergeSiblingsOf(t,e){if(!(t instanceof ms))return;const n=this._canMergeLeft(t,e),o=this._canMergeRight(t,e),i=Vu.createBefore(t),r=Vu.createAfter(t);if(n){const t=Vu.createFromPosition(this.position);this.writer.merge(i),this.position=vs.createFromPosition(t),t.detach()}if(o){this.position.isEqual(r)||Ur.a.error("insertcontent-wrong-position-on-merge: The insertion position should equal the merge position"),this.position=vs.createAt(r.nodeBefore,"end");const t=new Vu(this.position.root,this.position.path,"sticksToPrevious");this.writer.merge(r),this.position=vs.createFromPosition(t),t.detach()}(n||o)&&this._filterAttributesOf.push(this.position.parent),i.detach(),r.detach()}_canMergeLeft(t,e){const n=t.previousSibling;return e.isFirst&&n instanceof ms&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(n,t)}_canMergeRight(t,e){const n=t.nextSibling;return e.isLast&&n instanceof ms&&this.canMergeWith.has(n)&&this.model.schema.checkMerge(t,n)}_tryAutoparagraphing(t,e){const n=this.writer.createElement("paragraph");this._getAllowedIn(n,this.position.parent)&&this.schema.checkChild(n,t)&&(n._appendChild(t),this._handleNode(n,e))}_checkAndSplitToAllowedPosition(t){const e=this._getAllowedIn(t,this.position.parent);if(!e)return!1;for(;e!=this.position.parent;){if(this.schema.isLimit(this.position.parent))return!1;if(this.position.isAtStart){const t=this.position.parent;this.position=vs.createBefore(t),t.isEmpty&&this.writer.remove(t)}else if(this.position.isAtEnd)this.position=vs.createAfter(this.position.parent);else{const t=vs.createAfter(this.position.parent);this.writer.split(this.position),this.position=t,this.canMergeWith.add(this.position.nodeAfter)}}return!0}_getAllowedIn(t,e){return this.schema.checkChild(e,t)?e:e.parent?this._getAllowedIn(t,e.parent):null}}function Du(t,e,n={}){if(e.isCollapsed)return;const o=t.schema;t.change(t=>{if(!n.doNotResetEntireContent&&function(t,e){const n=t.getLimitElement(e);if(!e.containsEntireContent(n))return!1;const o=e.getFirstRange();if(o.start.parent==o.end.parent)return!1;return t.checkChild(n,"paragraph")}(o,e))return void function(t,e){const n=t.model.schema.getLimitElement(e);t.remove(_s.createIn(n)),Bu(t,vs.createAt(n),e)}(t,e);const i=e.getFirstRange(),r=i.start,s=Vu.createFromPosition(i.end);i.start.isTouching(i.end)||t.remove(i),n.leaveUnmerged||(!function t(e,n,o){const i=n.parent;const r=o.parent;if(i==r)return;if(!i.parent||!r.parent)return;if(!function(t,e,n){const o=new _s(t,e);for(const t of o.getWalker())if(n.isLimit(t.item))return!1;return!0}(n,o,e.model.schema))return;n=vs.createAfter(i);o=vs.createBefore(r);o.isEqual(n)||e.insert(r,n);e.merge(n);for(;o.parent.isEmpty;){const t=o.parent;o=vs.createBefore(t),e.remove(t)}t(e,n,o)}(t,r,s),o.removeDisallowedAttributes(r.parent.getChildren(),t)),e instanceof Rs?t.setSelection(r):e.setTo(r),function(t,e){const n=t.checkChild(e,"$text"),o=t.checkChild(e,"paragraph");return!n&&o}(o,r)&&Bu(t,r,e),s.detach()})}function Bu(t,e,n){const o=t.createElement("paragraph");t.insert(o,e),n instanceof Rs?t.setSelection(o,0):n.setTo(o,0)}const Lu=' ,.?!:;"-()';function ju(t,e,n={}){const o=t.schema,i="backward"!=n.direction,r=n.unit?n.unit:"character",s=e.focus,a=new gs({boundaries:function(t,e){const n=t.root,o=vs.createAt(n,e?"end":0);return e?new _s(t,o):new _s(o,t)}(s,i),singleCharacters:!0,direction:i?"forward":"backward"}),c={walker:a,schema:o,isForward:i,unit:r};let l;for(;l=a.next();){if(l.done)return;const n=zu(c,l.value);if(n)return void(e instanceof Rs?t.change(t=>{t.setSelectionFocus(n)}):e.setFocus(n))}}function zu(t,e){if("text"==e.type)return"word"===t.unit?function(t,e){let n=t.position.textNode;if(n){let o=t.position.offset-n.startOffset;for(;!qu(n.data,o,e)&&!Uu(n,o,e);){t.next();const i=e?t.position.nodeAfter:t.position.nodeBefore;if(i&&i.is("text")){const o=i.data.charAt(e?0:i.data.length-1);Lu.includes(o)||(t.next(),n=t.position.textNode)}o=t.position.offset-n.startOffset}}return t.position}(t.walker,t.isForward):function(t,e){const n=t.position.textNode;if(n){const o=n.data;let i=t.position.offset-n.startOffset;for(;Eu(o,i)||"character"==e&&Pu(o,i);)t.next(),i=t.position.offset-n.startOffset}return t.position}(t.walker,t.unit,t.isForward);if(e.type==(t.isForward?"elementStart":"elementEnd")){if(t.schema.isObject(e.item))return vs.createAt(e.item,t.isForward?"after":"before");if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}else{if(t.schema.isLimit(e.item))return void t.walker.skip(()=>!0);if(t.schema.checkChild(e.nextPosition,"$text"))return e.nextPosition}}function qu(t,e,n){const o=e+(n?0:-1);return Lu.includes(t.charAt(o))}function Uu(t,e,n){return e===(n?t.endOffset:0)}function Wu(t,e){const n=[];Array.from(t.getItems({direction:"backward"})).map(t=>_s.createOn(t)).filter(e=>{return(e.start.isAfter(t.start)||e.start.isEqual(t.start))&&(e.end.isBefore(t.end)||e.end.isEqual(t.end))}).forEach(t=>{n.push(t.start.parent),e.remove(t)}),n.forEach(t=>{let n=t;for(;n.parent&&n.isEmpty;){const t=_s.createOn(n);n=n.parent,e.remove(t)}})}function Hu(t){t.document.registerPostFixer(e=>(function(t,e){const n=e.document.selection,o=e.schema,i=[];let r=!1;for(const t of n.getRanges()){const e=$u(t,o);e?(i.push(e),r=!0):i.push(t)}if(r){let e=i;if(i.length>1){const t=i[0].start,n=i[i.length-1].end;e=[new _s(t,n)]}t.setSelection(e,{backward:n.isBackward})}})(e,t))}function $u(t,e){return t.isCollapsed?function(t,e){const n=t.start,o=e.getNearestSelectionRange(n);if(!o)return null;const i=o.start;if(n.isEqual(i))return null;if(i.nodeAfter&&e.isLimit(i.nodeAfter))return new _s(i,vs.createAfter(i.nodeAfter));return new _s(i)}(t,e):function(t,e){const n=t.start,o=t.end,i=e.checkChild(n,"$text"),r=e.checkChild(o,"$text"),s=e.getLimitElement(n),a=e.getLimitElement(o);if(s===a){if(i&&r)return null;if(function(t,e,n){const o=t.nodeAfter&&!n.isLimit(t.nodeAfter)||n.checkChild(t,"$text"),i=e.nodeBefore&&!n.isLimit(e.nodeBefore)||n.checkChild(e,"$text");return o&&i}(n,o,e)){const t=e.getNearestSelectionRange(n,"forward"),i=e.getNearestSelectionRange(o,"backward");return new _s(t?t.start:n,i?i.start:o)}}const c=s&&!s.is("rootElement"),l=a&&!a.is("rootElement");if(c||l){const t=c?Ku(vs.createAt(s),e,"start"):n,i=l?Ku(vs.createAt(a),e,"end"):o;return new _s(t,i)}return null}(t,e)}function Ku(t,e,n){let o=t.parent,i=o;for(;e.isLimit(i)&&i.parent;)o=i,i=i.parent;return"start"===n?vs.createBefore(o):vs.createAfter(o)}class Gu{constructor(){this.markers=new Mu,this.document=new Ru(this),this.schema=new Gs,this._pendingChanges=[],this._currentWriter=null,["insertContent","deleteContent","modifySelection","getSelectedContent","applyOperation"].forEach(t=>this.decorate(t)),this.on("applyOperation",(t,e)=>{e[0]._validate()},{priority:"highest"}),this.schema.register("$root",{isLimit:!0}),this.schema.register("$block",{allowIn:"$root",isBlock:!0}),this.schema.register("$text",{allowIn:"$block"}),this.schema.register("$clipboardHolder",{allowContentOf:"$root",isLimit:!0}),this.schema.extend("$text",{allowIn:"$clipboardHolder"}),this.schema.register("$marker",{allowIn:["$root","$block"]}),Hu(this)}change(t){return 0===this._pendingChanges.length?(this._pendingChanges.push({batch:new fu,callback:t}),this._runPendingChanges()[0]):t(this._currentWriter)}enqueueChange(t,e){"string"==typeof t?t=new fu(t):"function"==typeof t&&(e=t,t=new fu),this._pendingChanges.push({batch:t,callback:e}),1==this._pendingChanges.length&&this._runPendingChanges()}applyOperation(t){t._execute()}transformDeltas(t,e,n=!1){return eu.transformDeltaSets(t,e,n?this.document:null)}insertContent(t,e){!function(t,e,n){t.change(o=>{n.isCollapsed||t.deleteContent(n);const i=new Nu(t,o,n.anchor);let r;r=e.is("documentFragment")?e.getChildren():[e],i.handleNodes(r,{isFirst:!0,isLast:!0});const s=i.getSelectionRange();s?n instanceof Rs?o.setSelection(s):n.setTo(s):Ur.a.warn("insertcontent-no-range: Cannot determine a proper selection range after insertion.")})}(this,t,e)}deleteContent(t,e){Du(this,t,e)}modifySelection(t,e){ju(this,t,e)}getSelectedContent(t){return function(t,e){return t.change(t=>{const n=t.createDocumentFragment(),o=e.getFirstRange();if(!o||o.isCollapsed)return n;const i=o.start.root,r=o.start.getCommonPath(o.end),s=i.getNodeByPath(r);let a;const c=(a=o.start.parent==o.end.parent?o:_s.createFromParentsAndOffsets(s,o.start.path[r.length],s,o.end.path[r.length]+1)).end.offset-a.start.offset;for(const e of a.getItems({shallow:!0}))e.is("textProxy")?t.appendText(e.data,e.getAttributes(),n):t.append(e._clone(!0),n);if(a!=o){const e=o._getTransformedByMove(a.start,vs.createAt(n,0),c)[0],i=new _s(vs.createAt(n),e.start);Wu(new _s(e.end,vs.createAt(n,"end")),t),Wu(i,t)}return n})}(this,t)}hasContent(t){if(t instanceof ms&&(t=_s.createIn(t)),t.isCollapsed)return!1;for(const e of t.getItems())if(e.is("textProxy")||this.schema.isObject(e))return!0;return!1}destroy(){this.document.destroy(),this.stopListening()}_runPendingChanges(){const t=[];for(;this._pendingChanges.length;){const e=this._pendingChanges[0].batch;this._currentWriter=new bu(this,e);const n=this._pendingChanges[0].callback(this._currentWriter);t.push(n),this.fire("_change",this._currentWriter),this._pendingChanges.shift(),this._currentWriter=null}return t}}P(Gu,xo);class Ju{constructor(){this._listener=Object.create(Hi)}listenTo(t){this._listener.listenTo(t,"keydown",(t,e)=>{this._listener.fire("_keydown:"+Zo(e),e)})}set(t,e,n={}){const o=ti(t),i=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(t,n)=>{e(n,()=>{n.preventDefault(),n.stopPropagation(),t.stop()}),t.return=!0},{priority:i})}press(t){return!!this._listener.fire("_keydown:"+Zo(t),t)}destroy(){this._listener.stopListening()}}class Qu extends Ju{constructor(t){super(),this.editor=t}set(t,e,n={}){if("string"==typeof e){const t=e;e=((e,n)=>{this.editor.execute(t),n()})}super.set(t,e,n)}}n(32);class Yu{constructor(t){const e=this.constructor.builtinPlugins;this.config=new p(t,this.constructor.defaultConfig),this.config.define("plugins",e),this.plugins=new qs(this,e),this.commands=new Us,this.locale=new Hs(this.config.get("language")),this.t=this.locale.t,this.set("state","initializing"),this.once("ready",()=>this.state="ready",{priority:"high"}),this.once("destroy",()=>this.state="destroyed",{priority:"high"}),this.set("isReadOnly",!1),this.model=new Gu,this.data=new fa(this.model),this.editing=new zs(this.model),this.editing.view.document.bind("isReadOnly").to(this),this.conversion=new pa,this.conversion.register("downcast",[this.editing.downcastDispatcher,this.data.downcastDispatcher]),this.conversion.register("editingDowncast",[this.editing.downcastDispatcher]),this.conversion.register("dataDowncast",[this.data.downcastDispatcher]),this.conversion.register("upcast",[this.data.upcastDispatcher]),this.keystrokes=new Qu(this),this.keystrokes.listenTo(this.editing.view.document)}initPlugins(){const t=this,e=this.config;return function(){const n=e.get("plugins")||[],o=e.get("removePlugins")||[];return t.plugins.load(n,o)}().then(t=>n(t,"init").then(()=>n(t,"afterInit"))).then(()=>this.fire("pluginsReady"));function n(t,e){return t.reduce((t,n)=>n[e]?t.then(n[e].bind(n)):t,Promise.resolve())}}destroy(){let t=Promise.resolve();return"initializing"==this.state&&(t=new Promise(t=>this.once("ready",t))),t.then(()=>{this.fire("destroy"),this.stopListening(),this.commands.destroy()}).then(()=>this.plugins.destroy()).then(()=>{this.model.destroy(),this.data.destroy(),this.editing.destroy(),this.keystrokes.destroy()})}execute(...t){this.commands.execute(...t)}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>{n.fire("dataReady"),n.fire("ready")}).then(()=>n))})}}P(Yu,xo);var Xu={setData(t){this.data.set(t)},getData(){return this.data.get()}};var Zu={updateSourceElement(){if(!this.sourceElement)throw new m.b("editor-missing-sourceelement: Cannot update the source element of a detached editor.");!function(t,e){t instanceof HTMLTextAreaElement&&(t.value=e),t.innerHTML=e}(this.sourceElement,this.data.get())}};class th{getHtml(t){const e=document.implementation.createHTMLDocument("").createElement("div");return e.appendChild(t),e.innerHTML}}class eh{constructor(){this._domParser=new DOMParser,this._domConverter=new zi({blockFiller:bi}),this._htmlWriter=new th}toData(t){const e=this._domConverter.viewToDom(t,document);return this._htmlWriter.getHtml(e)}toView(t){const e=this._toDom(t);return this._domConverter.domToView(e)}_toDom(t){const e=this._domParser.parseFromString(t,"text/html"),n=e.createDocumentFragment(),o=e.body.childNodes;for(;o.length>0;)n.appendChild(o[0]);return n}}class nh{constructor(t){this.editor=t,this._components=new Map}*names(){for(const t of this._components.values())yield t.originalName}add(t,e){if(this.has(t))throw new m.b("componentfactory-item-exists: The item already exists in the component factory.",{name:t});this._components.set(oh(t),{callback:e,originalName:t})}create(t){if(!this.has(t))throw new m.b("componentfactory-item-missing: The required component is not registered in the factory.",{name:t});return this._components.get(oh(t)).callback(this.editor.locale)}has(t){return this._components.has(oh(t))}}function oh(t){return String(t).toLowerCase()}class ih{constructor(){this.set("isFocused",!1),this.focusedElement=null,this._elements=new Set,this._nextEventLoopTimeout=null}add(t){if(this._elements.has(t))throw new m.b("focusTracker-add-element-already-exist");this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(t),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}P(ih,Hi),P(ih,xo);class rh{constructor(t,e){this.editor=t,this.view=e,this.componentFactory=new nh(t),this.focusTracker=new ih,this.listenTo(t.editing.view.document,"layoutChanged",()=>this.update())}update(){this.fire("update")}destroy(){this.stopListening(),this.view.destroy()}}P(rh,y);class sh extends rh{constructor(t,e){super(t,e),this._toolbarConfig=function(t){return Array.isArray(t)?{items:t}:t?Object.assign({items:[]},t):{items:[]}}(t.config.get("toolbar"))}init(){const t=this.editor,e=this.view;e.render(),e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,this._toolbarConfig.viewportTopOffset&&(e.stickyPanel.viewportTopOffset=this._toolbarConfig.viewportTopOffset);const n=t.editing.view.document.getRoot();e.editable.bind("isReadOnly").to(n),e.editable.bind("isFocused").to(t.editing.view.document),e.editable.name=n.rootName,this.focusTracker.add(this.view.editableElement),this.view.toolbar.fillFromConfig(this._toolbarConfig.items,this.componentFactory),function({origin:t,originKeystrokeHandler:e,originFocusTracker:n,toolbar:o,beforeFocus:i,afterBlur:r}){n.add(o.element),e.set("Alt+F10",(t,e)=>{n.isFocused&&!o.focusTracker.isFocused&&(i&&i(),o.focus(),e())}),o.keystrokes.set("Esc",(e,n)=>{o.focusTracker.isFocused&&(t.focus(),r&&r(),n())})}({origin:t.editing.view,originFocusTracker:this.focusTracker,originKeystrokeHandler:t.keystrokes,toolbar:this.view.toolbar})}}class ah extends jo{constructor(t){super({idProperty:"viewUid"}),this.on("add",(t,e,n)=>{e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[n])}),this.on("remove",(t,e)=>{e.element&&this._parentElement&&e.element.remove()}),this.locale=t,this._parentElement=null}destroy(){this.map(t=>t.destroy())}setParent(t){this._parentElement=t}delegate(...t){if(!t.length||!function(t){return t.every(t=>"string"==typeof t)}(t))throw new m.b("ui-viewcollection-delegate-wrong-events: All event names must be strings.");return{to:e=>{for(const n of this)for(const o of t)n.delegate(o).to(e);this.on("add",(n,o)=>{for(const n of t)o.delegate(n).to(e)}),this.on("remove",(n,o)=>{for(const n of t)o.stopDelegating(n,e)})}}}}P(jo,xo);var ch=function(t,e){return Tn(t,!0,!0,e)};const lh="http://www.w3.org/1999/xhtml";class dh{constructor(t){Object.assign(this,vh(wh(t))),this._isRendered=!1,this._revertData=null}render(){const t=this._renderNode({intoFragment:!0});return this._isRendered=!0,t}apply(t){return this._revertData={children:[],bindings:[],attributes:{}},this._renderNode({node:t,isApplying:!0,revertData:this._revertData}),t}revert(t){if(!this._revertData)throw new m.b("ui-template-revert-not-applied: Attempting to revert a template which has not been applied yet.");this._revertTemplateFromNode(t,this._revertData)}*getViews(){yield*function*t(e){if(e.children)for(const n of e.children)Ah(n)?yield n:Ch(n)&&(yield*t(n))}(this)}static bind(t,e){return{to:(n,o)=>new hh({eventNameOrFunction:n,attribute:n,observable:t,emitter:e,callback:o}),if:(n,o,i)=>new fh({observable:t,emitter:e,attribute:n,valueIfTrue:o,callback:i})}}static extend(t,e){t._isRendered&&Ur.a.warn("template-extend-render: Attempting to extend a template which has already been rendered."),function t(e,n){n.attributes&&(e.attributes||(e.attributes={}),yh(e.attributes,n.attributes));n.eventListeners&&(e.eventListeners||(e.eventListeners={}),yh(e.eventListeners,n.eventListeners));n.text&&e.text.push(...n.text);if(n.children&&n.children.length){if(e.children.length!=n.children.length)throw new m.b("ui-template-extend-children-mismatch: The number of children in extended definition does not match.");let o=0;for(const i of n.children)t(e.children[o++],i)}}(t,vh(wh(e)))}_renderNode(t){let e;if(e=t.node?this.tag&&this.text:this.tag?this.text:!this.text)throw new m.b('ui-template-wrong-syntax: Node definition must have either "tag" or "text" when rendering a new Node.');return this.text?this._renderText(t):this._renderElement(t)}_renderElement(t){let e=t.node;return e||(e=t.node=document.createElementNS(this.ns||lh,this.tag)),this._renderAttributes(t),this._renderElementChildren(t),this._setUpListeners(t),e}_renderText(t){let e=t.node;return e?t.revertData.text=e.textContent:e=t.node=document.createTextNode(""),ph(this.text)?this._bindToObservable({schema:this.text,updater:function(t){return{set(e){t.textContent=e},remove(){t.textContent=""}}}(e),data:t}):e.textContent=this.text.join(""),e}_renderAttributes(t){let e,n,o,i;if(!this.attributes)return;const r=t.node,s=t.revertData;for(e in this.attributes)if(o=r.getAttribute(e),n=this.attributes[e],s&&(s.attributes[e]=o),i=W(n[0])&&n[0].ns?n[0].ns:null,ph(n)){const a=i?n[0].value:n;s&&Sh(e)&&a.unshift(o),this._bindToObservable({schema:a,updater:gh(r,e,i),data:t})}else"style"==e&&"string"!=typeof n[0]?this._renderStyleAttribute(n[0],t):(s&&o&&Sh(e)&&n.unshift(o),xh(n=n.map(t=>t&&t.value||t).reduce((t,e)=>t.concat(e),[]).reduce(kh,""))||r.setAttributeNS(i,e,n))}_renderStyleAttribute(t,e){const n=e.node;for(const o in t){const i=t[o];ph(i)?this._bindToObservable({schema:[i],updater:bh(n,o),data:e}):n.style[o]=i}}_renderElementChildren(t){const e=t.node,n=t.intoFragment?document.createDocumentFragment():e,o=t.isApplying;let i=0;for(const r of this.children)if(Th(r)){if(!o){r.setParent(e);for(const t of r)n.appendChild(t.element)}}else if(Ah(r))o||(r.isRendered||r.render(),n.appendChild(r.element));else if(Oi(r))n.appendChild(r);else if(o){const e={children:[],bindings:[],attributes:{}};t.revertData.children.push(e),r._renderNode({node:n.childNodes[i++],isApplying:!0,revertData:e})}else n.appendChild(r.render());t.intoFragment&&e.appendChild(n)}_setUpListeners(t){if(this.eventListeners)for(const e in this.eventListeners){const n=this.eventListeners[e].map(n=>{const[o,i]=e.split("@");return n.activateDomEventListener(o,i,t)});t.revertData&&t.revertData.bindings.push(n)}}_bindToObservable({schema:t,updater:e,data:n}){const o=n.revertData;mh(t,e,n);const i=t.filter(t=>!xh(t)).filter(t=>t.observable).map(o=>o.activateAttributeListener(t,e,n));o&&o.bindings.push(i)}_revertTemplateFromNode(t,e){for(const t of e.bindings)for(const e of t)e();if(e.text)t.textContent=e.text;else{for(const n in e.attributes){const o=e.attributes[n];null===o?t.removeAttribute(n):t.setAttribute(n,o)}for(let n=0;n<e.children.length;++n)this._revertTemplateFromNode(t.childNodes[n],e.children[n])}}}P(dh,y);class uh{constructor(t){Object.assign(this,t)}getValue(t){const e=this.observable[this.attribute];return this.callback?this.callback(e,t):e}activateAttributeListener(t,e,n){const o=()=>mh(t,e,n);return this.emitter.listenTo(this.observable,"change:"+this.attribute,o),()=>{this.emitter.stopListening(this.observable,"change:"+this.attribute,o)}}}class hh extends uh{activateDomEventListener(t,e,n){const o=(t,n)=>{e&&!n.target.matches(e)||("function"==typeof this.eventNameOrFunction?this.eventNameOrFunction(n):this.observable.fire(this.eventNameOrFunction,n))};return this.emitter.listenTo(n.node,t,o),()=>{this.emitter.stopListening(n.node,t,o)}}}class fh extends uh{getValue(t){return!xh(super.getValue(t))&&(this.valueIfTrue||!0)}}function ph(t){return!!t&&(t.value&&(t=t.value),Array.isArray(t)?t.some(ph):t instanceof uh)}function mh(t,e,{node:n}){let o=function(t,e){return t.map(t=>t instanceof uh?t.getValue(e):t)}(t,n);xh(o=1==t.length&&t[0]instanceof fh?o[0]:o.reduce(kh,""))?e.remove():e.set(o)}function gh(t,e,n){return{set(o){t.setAttributeNS(n,e,o)},remove(){t.removeAttributeNS(n,e)}}}function bh(t,e){return{set(n){t.style[e]=n},remove(){t.style[e]=null}}}function wh(t){return ch(t,t=>{if(t&&(t instanceof uh||Ch(t)||Ah(t)||Th(t)))return t})}function vh(t){if("string"==typeof t?t=function(t){return{text:[t]}}(t):t.text&&function(t){Array.isArray(t.text)||(t.text=[t.text])}(t),t.on&&(t.eventListeners=function(t){for(const e in t)_h(t,e);return t}(t.on),delete t.on),!t.text){t.attributes&&function(t){for(const e in t)t[e].value&&(t[e].value=[].concat(t[e].value)),_h(t,e)}(t.attributes);const e=[];if(t.children)if(Th(t.children))e.push(t.children);else for(const n of t.children)Ch(n)||Ah(n)||Oi(n)?e.push(n):e.push(new dh(n));t.children=e}return t}function _h(t,e){Array.isArray(t[e])||(t[e]=[t[e]])}function kh(t,e){return xh(e)?t:xh(t)?e:`${t} ${e}`}function yh(t,e){for(const n in e)t[n]?t[n].push(...e[n]):t[n]=e[n]}function xh(t){return!t&&0!==t}function Ah(t){return t instanceof Eh}function Ch(t){return t instanceof dh}function Th(t){return t instanceof ah}function Sh(t){return"class"==t||"style"==t}n(33);class Eh{constructor(t){this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new jo,this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(e,n)=>{n.locale=t}),this.decorate("render")}get bindTemplate(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=dh.bind(this,this)}createCollection(){const t=new ah;return this._viewCollections.add(t),t}registerChild(t){Mn(t)||(t=[t]);for(const e of t)this._unboundChildren.add(e)}deregisterChild(t){Mn(t)||(t=[t]);for(const e of t)this._unboundChildren.remove(e)}setTemplate(t){this.template=new dh(t)}extendTemplate(t){dh.extend(this.template,t)}render(){if(this.isRendered)throw new m.b("ui-view-render-already-rendered: This View has already been rendered.");this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}destroy(){this.stopListening(),this._viewCollections.map(t=>t.destroy())}}P(Eh,Hi),P(Eh,xo);n(36);class Ph extends Eh{constructor(t){super(t),this.body=this.createCollection()}render(){super.render(),this._renderBodyCollection()}destroy(){return this._bodyCollectionContainer.remove(),super.destroy()}_renderBodyCollection(){const t=this._bodyCollectionContainer=new dh({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"]},children:this.body}).render();document.body.appendChild(t)}}n(38);class Oh extends Eh{constructor(t){super(t),this.set("text"),this.set("for");const e=this.bindTemplate;this.setTemplate({tag:"label",attributes:{class:["ck","ck-label"],for:e.to("for")},children:[{text:e.to("text")}]})}}class Rh extends Ph{constructor(t){super(t);const e=w();this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:"ltr",lang:t.language,"aria-labelledby":`ck-editor__aria-label_${e}`},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(t){const e=this.t,n=new Oh;return n.text=e("ag"),n.extendTemplate({attributes:{id:`ck-editor__aria-label_${t}`,class:"ck-voice-label"}}),n}}class Ih extends Eh{constructor(t,e){super(t);const n=this.bindTemplate;e&&(this.element=this.editableElement=e),this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners",n.to("isFocused",t=>t?"ck-focused":"ck-blurred")],contenteditable:n.to("isReadOnly",t=>!t)}}),this.set("isReadOnly",!1),this.set("isFocused",!1),this.externalElement=e}render(){super.render(),this.externalElement?this.template.apply(this.element=this.externalElement):this.editableElement=this.element}destroy(){this.externalElement&&this.template.revert(this.externalElement),super.destroy()}}class Mh extends Ih{constructor(t,e){super(t,e);const n=this.bindTemplate,o=this.t;this.set("name",null);this.extendTemplate({attributes:{role:"textbox","aria-label":n.to("name",t=>o("af",[t])),class:"ck-editor__editable_inline"}})}}function Fh(t){return e=>e+t}n(40);const Vh=Fh("px");class Nh extends Eh{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheLimiter",!1),this.set("_hasViewportTopOffset",!1),this.content=this.createCollection(),this._contentPanelPlaceholder=new dh({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",t=>t?"block":"none"),height:e.to("isSticky",t=>t?Vh(this._panelRect.height):null)}}}).render(),this._contentPanel=new dh({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",t=>t?Vh(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_hasViewportTopOffset",t=>t?Vh(this.viewportTopOffset):null),bottom:e.to("_isStickyToTheLimiter",t=>t?Vh(this.limiterBottomOffset):null),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this._contentPanel]})}render(){super.render(),this._checkIfShouldBeSticky(),this.listenTo(Di.window,"scroll",()=>{this._checkIfShouldBeSticky()}),this.listenTo(this,"change:isActive",()=>{this._checkIfShouldBeSticky()})}_checkIfShouldBeSticky(){const t=this._panelRect=this._contentPanel.getBoundingClientRect();let e;this.limiterElement?(e=this._limiterRect=this.limiterElement.getBoundingClientRect(),this.isSticky=this.isActive&&e.top<this.viewportTopOffset&&this._panelRect.height+this.limiterBottomOffset<e.height):this.isSticky=!1,this.isSticky?(this._isStickyToTheLimiter=e.bottom<t.height+this.limiterBottomOffset+this.viewportTopOffset,this._hasViewportTopOffset=!this._isStickyToTheLimiter&&!!this.viewportTopOffset,this._marginLeft=this._isStickyToTheLimiter?null:Vh(-Di.window.scrollX)):(this._isStickyToTheLimiter=!1,this._hasViewportTopOffset=!1,this._marginLeft=null)}}class Dh{constructor(t){if(Object.assign(this,t),t.actions&&t.keystrokeHandler)for(const e in t.actions){let n=t.actions[e];"string"==typeof n&&(n=[n]);for(const o of n)t.keystrokeHandler.set(o,(t,n)=>{this[e](),n()})}}get first(){return this.focusables.find(Bh)||null}get last(){return this.focusables.filter(Bh).slice(-1)[0]||null}get next(){return this._getFocusableItem(1)}get previous(){return this._getFocusableItem(-1)}get current(){let t=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((e,n)=>{const o=e.element===this.focusTracker.focusedElement;return o&&(t=n),o}),t)}focusFirst(){this._focus(this.first)}focusLast(){this._focus(this.last)}focusNext(){this._focus(this.next)}focusPrevious(){this._focus(this.previous)}_focus(t){t&&t.focus()}_getFocusableItem(t){const e=this.current,n=this.focusables.length;if(!n)return null;if(null===e)return this[1===t?"first":"last"];let o=(e+n+t)%n;do{const e=this.focusables.get(o);if(Bh(e))return e;o=(o+n+t)%n}while(o!==e);return null}}function Bh(t){return!(!t.focus||"none"==Di.window.getComputedStyle(t.element).display)}class Lh extends Eh{constructor(t){super(t),this.setTemplate({tag:"span",attributes:{class:["ck","ck-toolbar__separator"]}})}}n(42);class jh extends Eh{constructor(t){super(t);const e=this.bindTemplate;this.items=this.createCollection(),this.focusTracker=new ih,this.keystrokes=new Ju,this.set("isVertical",!1),this.set("className"),this._focusCycler=new Dh({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:["arrowleft","arrowup"],focusNext:["arrowright","arrowdown"]}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-toolbar",e.if("isVertical","ck-toolbar_vertical"),e.to("className")]},children:this.items,on:{mousedown:function(t){return t.bindTemplate.to(e=>{e.target===t.element&&e.preventDefault()})}(this)}})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}fillFromConfig(t,e){t.map(t=>{"|"==t?this.items.add(new Lh):e.has(t)?this.items.add(e.create(t)):Ur.a.warn("toolbarview-item-unavailable: The requested toolbar item is unavailable.",{name:t})})}}n(44);class zh extends Rh{constructor(t){super(t),this.stickyPanel=new Nh(t),this.toolbar=new jh(t),this.editable=new Mh(t)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}get editableElement(){return this.editable.element}}class qh{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}class Uh extends Yu{constructor(t,e){super(e),ji(t)&&(this.sourceElement=t),this._elementReplacer=new qh,this.data.processor=new eh,this.model.document.createRoot(),this.ui=new sh(this,new zh(this.locale)),function(t){if(!G(t.updateSourceElement))throw new m.b("attachtoform-missing-elementapi-interface: Editor passed to attachToForm() must implement ElementApi.");const e=t.sourceElement;if(e&&"textarea"===e.tagName.toLowerCase()&&e.form){let n;const o=e.form,i=()=>t.updateSourceElement();G(o.submit)&&(n=o.submit,o.submit=(()=>{i(),n.apply(o)})),o.addEventListener("submit",i),t.on("destroy",()=>{o.removeEventListener("submit",i),n&&(o.submit=n)})}}(this)}get element(){return this.ui.view.element}destroy(){return this.sourceElement&&this.updateSourceElement(),this._elementReplacer.restore(),this.ui.destroy(),super.destroy()}static create(t,e){return new Promise(n=>{const o=new this(t,e);n(o.initPlugins().then(()=>o.ui.init()).then(()=>{ji(t)&&o._elementReplacer.replace(t,o.element),o.fire("uiReady")}).then(()=>o.editing.view.attachDomRoot(o.ui.view.editableElement)).then(()=>{const e=ji(t)?function(t){return t instanceof HTMLTextAreaElement?t.value:t.innerHTML}(t):t;return o.data.init(e)}).then(()=>{o.fire("dataReady"),o.fire("ready")}).then(()=>o))})}}P(Uh,Xu),P(Uh,Zu);class Wh{constructor(t){this.editor=t}destroy(){this.stopListening()}}P(Wh,xo);class Hh{constructor(t){this.files=function(t){const e=t.files?Array.from(t.files):[],n=t.items?Array.from(t.items):[];if(e.length)return e;return n.filter(t=>"file"===t.kind).map(t=>t.getAsFile())}(t),this._native=t}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}}class $h extends Vr{constructor(t){super(t);const e=this.document;function n(t,n){n.preventDefault();const o=n.dropRange?[n.dropRange]:Array.from(e.selection.getRanges());e.fire("clipboardInput",{dataTransfer:n.dataTransfer,targetRanges:o})}this.domEventType=["paste","copy","cut","drop","dragover"],this.listenTo(e,"paste",n,{priority:"low"}),this.listenTo(e,"drop",n,{priority:"low"})}onDomEvent(t){const e={dataTransfer:new Hh(t.clipboardData?t.clipboardData:t.dataTransfer)};"drop"==t.type&&(e.dropRange=function(t,e){const n=e.target.ownerDocument,o=e.clientX,i=e.clientY;let r;n.caretRangeFromPoint&&n.caretRangeFromPoint(o,i)?r=n.caretRangeFromPoint(o,i):e.rangeParent&&((r=n.createRange()).setStart(e.rangeParent,e.rangeOffset),r.collapse(!0));return r?t.domConverter.domRangeToView(r):t.document.selection.getFirstRange()}(this.view,t)),this.fire(t.type,t,e)}}const Kh=["figcaption","li"];class Gh extends Wh{static get pluginName(){return"Clipboard"}init(){const t=this.editor,e=t.model.document,n=t.editing.view,o=n.document;function i(n,i){const r=i.dataTransfer;i.preventDefault();const s=t.data.toView(t.model.getSelectedContent(e.selection));o.fire("clipboardOutput",{dataTransfer:r,content:s,method:n.name})}this._htmlDataProcessor=new eh,n.addObserver($h),this.listenTo(o,"clipboardInput",e=>{t.isReadOnly&&e.stop()},{priority:"highest"}),this.listenTo(o,"clipboardInput",(t,e)=>{const o=e.dataTransfer;let i="";o.getData("text/html")?i=function(t){return t.replace(/<span(?: class="Apple-converted-space"|)>(\s+)<\/span>/g,(t,e)=>1==e.length?" ":e)}(o.getData("text/html")):o.getData("text/plain")&&(i=function(t){return(t=t.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n\n/g,"</p><p>").replace(/\n/g,"<br>").replace(/^\s/,"&nbsp;").replace(/\s$/,"&nbsp;").replace(/\s\s/g," &nbsp;")).indexOf("</p><p>")>-1&&(t=`<p>${t}</p>`),t}(o.getData("text/plain"))),i=this._htmlDataProcessor.toView(i),this.fire("inputTransformation",{content:i}),n.scrollToTheSelection()},{priority:"low"}),this.listenTo(this,"inputTransformation",(t,n)=>{if(!n.content.isEmpty){const t=this.editor.data,o=this.editor.model,i=t.toModel(n.content,"$clipboardHolder");if(0==i.childCount)return;o.insertContent(i,e.selection)}},{priority:"low"}),this.listenTo(o,"copy",i,{priority:"low"}),this.listenTo(o,"cut",(e,n)=>{t.isReadOnly?n.preventDefault():i(e,n)},{priority:"low"}),this.listenTo(o,"clipboardOutput",(n,o)=>{o.content.isEmpty||(o.dataTransfer.setData("text/html",this._htmlDataProcessor.toData(o.content)),o.dataTransfer.setData("text/plain",function t(e){let n="";if(e.is("text")||e.is("textProxy"))n=e.data;else if(e.is("img")&&e.hasAttribute("alt"))n=e.getAttribute("alt");else{let o=null;for(const i of e.getChildren()){const e=t(i);o&&(o.is("containerElement")||i.is("containerElement"))&&(Kh.includes(o.name)||Kh.includes(i.name)?n+="\n":n+="\n\n"),n+=e,o=i}}return n}(o.content))),"cut"==o.method&&t.model.deleteContent(e.selection)},{priority:"low"})}}class Jh{constructor(t){this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"}),this.listenTo(t,"change:isReadOnly",(t,e,n)=>{n?(this.on("set:isEnabled",Qh,{priority:"highest"}),this.isEnabled=!1):(this.off("set:isEnabled",Qh),this.refresh())})}refresh(){this.isEnabled=!0}execute(){}destroy(){this.stopListening()}}function Qh(t){t.return=!1,t.stop()}P(Jh,xo);class Yh extends Jh{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n,o){const i=n.isCollapsed,r=n.getFirstRange(),s=r.start.parent,a=r.end.parent;if(o.isLimit(s)||o.isLimit(a))return void(i||s!=a||t.deleteContent(n));if(i)Xh(e,n,r.start);else{const o=!(r.start.isAtStart&&r.end.isAtEnd),i=s==a;t.deleteContent(n,{leaveUnmerged:o}),o&&(i?Xh(e,n,n.focus):e.setSelection(a,0))}}(this.editor.model,n,e.selection,t.schema),this.fire("afterExecute",{writer:n})})}}function Xh(t,e,n){const o=n.parent,i=new o.constructor(o.name,o.getAttributes());n.isAtEnd?t.insert(i,n.parent,"after"):n.isAtStart?t.insert(i,n.parent,"before"):t.split(n),t.setSelection(n.parent.nextSibling,0)}class Zh extends Gi{constructor(t){super(t);const e=this.document;e.on("keydown",(t,n)=>{if(this.isEnabled&&n.keyCode==Xo.enter){let o;e.once("enter",t=>o=t,{priority:"highest"}),e.fire("enter",new Fr(e,n.domEvent,{isSoft:n.shiftKey})),o&&o.stop.called&&t.stop()}})}observe(){}}class tf extends Wh{static get pluginName(){return"Enter"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(Zh),t.commands.add("enter",new Yh(t)),this.listenTo(n,"enter",(n,o)=>{o.isSoft||(t.execute("enter"),o.preventDefault(),e.scrollToTheSelection())},{priority:"low"})}}class ef extends Jh{execute(){const t=this.editor.model,e=t.document;t.change(n=>{!function(t,e,n){const o=n.isCollapsed,i=n.getFirstRange(),r=i.start.parent,s=i.end.parent,a=r==s;if(o)nf(e,i.end);else{const o=!(i.start.isAtStart&&i.end.isAtEnd);t.deleteContent(n,{leaveUnmerged:o}),a?nf(e,n.focus):o&&e.setSelection(s,0)}}(t,n,e.selection),this.fire("afterExecute",{writer:n})})}refresh(){const t=this.editor.model,e=t.document;this.isEnabled=function(t,e){if(e.rangeCount>1)return!1;const n=e.anchor;if(!n||!t.checkChild(n,"softBreak"))return!1;const o=e.getFirstRange(),i=o.start.parent,r=o.end.parent;if((of(i,t)||of(r,t))&&i!==r)return!1;return!0}(t.schema,e.selection)}}function nf(t,e){const n=t.createElement("softBreak");t.insert(n,e),t.setSelection(n,"after")}function of(t,e){return!t.is("rootElement")&&(e.isLimit(t)||of(t.parent,e))}class rf extends Wh{static get pluginName(){return"ShiftEnter"}init(){const t=this.editor,e=t.model.schema,n=t.conversion,o=t.editing.view,i=o.document;e.register("softBreak",{allowWhere:"$text"}),n.for("upcast").add(aa({model:"softBreak",view:"br"})),n.for("downcast").add(Vs({model:"softBreak",view:(t,e)=>e.createEmptyElement("br")})),o.addObserver(Zh),t.commands.add("shiftEnter",new ef(t)),this.listenTo(i,"enter",(e,n)=>{n.isSoft&&(t.execute("shiftEnter"),n.preventDefault(),o.scrollToTheSelection())},{priority:"low"})}}class sf{constructor(t,e=20){this.model=t,this.size=0,this.limit=e,this.isLocked=!1,this._changeCallback=((t,e)=>{"transparent"!=e.type&&e!==this._batch&&this._reset(!0)}),this._selectionChangeCallback=(()=>{this._reset()}),this.model.document.on("change",this._changeCallback),this.model.document.selection.on("change:range",this._selectionChangeCallback),this.model.document.selection.on("change:attribute",this._selectionChangeCallback)}get batch(){return this._batch||(this._batch=new fu),this._batch}input(t){this.size+=t,this.size>=this.limit&&this._reset(!0)}lock(){this.isLocked=!0}unlock(){this.isLocked=!1}destroy(){this.model.document.off("change",this._changeCallback),this.model.document.selection.off("change:range",this._selectionChangeCallback),this.model.document.selection.off("change:attribute",this._selectionChangeCallback)}_reset(t){this.isLocked&&!t||(this._batch=null,this.size=0)}}class af extends Jh{constructor(t,e){super(t),this._buffer=new sf(t.model,e)}get buffer(){return this._buffer}destroy(){super.destroy(),this._buffer.destroy()}execute(t={}){const e=this.editor.model,n=e.document,o=t.text||"",i=o.length,r=t.range||n.selection.getFirstRange(),s=t.resultRange;e.enqueueChange(this._buffer.batch,t=>{const e=r.isCollapsed;this._buffer.lock(),e||t.remove(r),o&&t.insertText(o,n.selection.getAttributes(),r.start),s?t.setSelection(s):e&&t.setSelection(r.start.getShiftedBy(i)),this._buffer.unlock(),this._buffer.input(i)})}}function cf(t){let e=null;const n=t.model,o=t.editing.view,i=t.commands.get("input");function r(){const t=i.buffer;t.lock(),n.enqueueChange(t.batch,()=>{n.deleteContent(n.document.selection)}),t.unlock()}o.document.on("keydown",(t,s)=>(function(t){const s=n.document,a=o.document.isComposing,c=e&&e.isEqual(s.selection);if(e=null,!i.isEnabled)return;if(function(t){if(t.ctrlKey)return!0;return lf.includes(t.keyCode)}(t)||s.selection.isCollapsed)return;if(a&&229===t.keyCode)return;if(!a&&229===t.keyCode&&c)return;r()})(s),{priority:"lowest"}),o.document.on("compositionstart",function(){const t=n.document,e=1!==t.selection.rangeCount||t.selection.getFirstRange().isFlat;if(t.selection.isCollapsed||e)return;r()},{priority:"lowest"}),o.document.on("compositionend",()=>{e=new Ts(n.document.selection)},{priority:"lowest"})}const lf=[Zo("arrowUp"),Zo("arrowRight"),Zo("arrowDown"),Zo("arrowLeft"),9,16,17,18,20,27,33,34,35,36];for(let t=112;t<=135;t++)lf.push(t);function df(t){if(0==t.length)return!1;for(const e of t)if("children"===e.type&&!uf(e))return!0;return!1}function uf(t){if(t.newChildren.length-t.oldChildren.length!=1)return;const e=function(t,e){const n=[];let o,i=0;return t.forEach(t=>{"equal"==t?(r(),i++):"insert"==t?(s("insert")?o.values.push(e[i]):(r(),o={type:"insert",index:i,values:[e[i]]}),i++):s("delete")?o.howMany++:(r(),o={type:"delete",index:i,howMany:1})}),r(),n;function r(){o&&(n.push(o),o=null)}function s(t){return o&&o.type==t}}(Ti(t.oldChildren,t.newChildren,hf),t.newChildren);if(e.length>1)return;const n=e[0];return n.values[0]instanceof On?n:void 0}function hf(t,e){return t instanceof On&&e instanceof On?t.data===e.data:t===e}class ff{constructor(t){this.editor=t,this.editing=this.editor.editing}handle(t,e){if(df(t))this._handleContainerChildrenMutations(t,e);else for(const n of t)this._handleTextMutation(n,e),this._handleTextNodeInsertion(n)}_handleContainerChildrenMutations(t,e){const n=function(t){const e=t.map(t=>t.node).reduce((t,e)=>t.getCommonAncestor(e,{includeSelf:!0}));if(!e)return;return e.getAncestors({includeSelf:!0,parentFirst:!0}).find(t=>t.is("containerElement")||t.is("rootElement"))}(t);if(!n)return;const o=this.editor.editing.view.domConverter.mapViewToDom(n),i=new zi,r=this.editor.data.toModel(i.domToView(o)).getChild(0),s=this.editor.editing.mapper.toModelElement(n);if(!s)return;const a=Array.from(r.getChildren()),c=Array.from(s.getChildren()),l=a[a.length-1],d=c[c.length-1];if(l&&l.is("softBreak")&&d&&!d.is("softBreak")&&a.pop(),!pf(a)||!pf(c))return;const u=a.map(t=>t.is("text")?t.data:"@").join("").replace(/\u00A0/g," "),h=c.map(t=>t.is("text")?t.data:"@").join("");if(h===u)return;const f=Ti(h,u),{firstChangeAt:p,insertions:m,deletions:g}=mf(f);let b=null;e&&(b=this.editing.mapper.toModelRange(e.getFirstRange()));const w=u.substr(p,m),v=_s.createFromParentsAndOffsets(s,p,s,p+g);this.editor.execute("input",{text:w,range:v,resultRange:b})}_handleTextMutation(t,e){if("text"!=t.type)return;const n=t.newText.replace(/\u00A0/g," "),o=Ti(t.oldText.replace(/\u00A0/g," "),n),{firstChangeAt:i,insertions:r,deletions:s}=mf(o);let a=null;e&&(a=this.editing.mapper.toModelRange(e.getFirstRange()));const c=new Fo(t.node,i),l=this.editing.mapper.toModelPosition(c),d=_s.createFromPositionAndShift(l,s),u=n.substr(i,r);this.editor.execute("input",{text:u,range:d,resultRange:a})}_handleTextNodeInsertion(t){if("children"!=t.type)return;const e=uf(t),n=new Fo(t.node,e.index),o=this.editing.mapper.toModelPosition(n),i=e.values[0].data;this.editor.execute("input",{text:i.replace(/\u00A0/g," "),range:new _s(o)})}}function pf(t){return t.every(t=>t.is("text")||t.is("softBreak"))}function mf(t){let e=null,n=null;for(let o=0;o<t.length;o++){"equal"!=t[o]&&(e=null===e?o:e,n=o)}let o=0,i=0;for(let r=e;r<=n;r++)"insert"!=t[r]&&o++,"delete"!=t[r]&&i++;return{insertions:i,deletions:o,firstChangeAt:e}}class gf extends Wh{static get pluginName(){return"Input"}init(){const t=this.editor,e=new af(t,t.config.get("typing.undoStep")||20);t.commands.add("input",e),cf(t),function(t){t.editing.view.document.on("mutations",(e,n,o)=>{new ff(t).handle(n,o)})}(t)}}class bf extends Jh{constructor(t,e){super(t),this.direction=e,this._buffer=new sf(t.model,t.config.get("typing.undoStep"))}execute(t={}){const e=this.editor.model,n=e.document;e.enqueueChange(this._buffer.batch,o=>{this._buffer.lock();const i=new Ts(n.selection),r=i.isCollapsed;if(i.isCollapsed&&e.modifySelection(i,{direction:this.direction,unit:t.unit}),this._shouldEntireContentBeReplacedWithParagraph(t.sequence||1))return void this._replaceEntireContentWithParagraph(o);if(i.isCollapsed)return;let s=0;i.getFirstRange().getMinimalFlatRanges().forEach(t=>{s+=Do(t.getWalker({singleCharacters:!0,ignoreElementEnd:!0,shallow:!0}))}),e.deleteContent(i,{doNotResetEntireContent:r}),this._buffer.input(s),o.setSelection(i),this._buffer.unlock()})}_shouldEntireContentBeReplacedWithParagraph(t){if(t>1)return!1;const e=this.editor.model,n=e.document.selection,o=e.schema.getLimitElement(n);if(!(n.isCollapsed&&n.containsEntireContent(o)))return!1;if(!e.schema.checkChild(o,"paragraph"))return!1;const i=o.getChild(0);return!i||"paragraph"!==i.name}_replaceEntireContentWithParagraph(t){const e=this.editor.model,n=e.document.selection,o=e.schema.getLimitElement(n),i=new ms("paragraph");t.remove(_s.createIn(o)),t.insert(i,o),t.setSelection(i,0)}}class wf extends Gi{constructor(t){super(t);const e=t.document;let n=0;e.on("keyup",(t,e)=>{e.keyCode!=Xo.delete&&e.keyCode!=Xo.backspace||(n=0)}),e.on("keydown",(t,o)=>{const i={};if(o.keyCode==Xo.delete)i.direction="forward",i.unit="character";else{if(o.keyCode!=Xo.backspace)return;i.direction="backward",i.unit="codePoint"}const r=Jo.isMac?o.altKey:o.ctrlKey;let s;i.unit=r?"word":i.unit,i.sequence=++n,e.once("delete",t=>s=t,{priority:"highest"}),e.fire("delete",new Fr(e,o.domEvent,i)),s&&s.stop.called&&t.stop()})}observe(){}}function vf(t){const e=t.model,n=t.editing.view,o=200;let i=null,r=new Ts(e.document.selection),s=Date.now();e.document.selection.on("change",function(t){const e=new Ts(t.source);r.isEqual(e)||(i=r,r=e,s=Date.now())}),n.document.on("mutations",function(n,a){df(a)&&function(t){for(const e of t){if("children"!==e.type)continue;const t=e.oldChildren,n=e.newChildren;if(!_f(t))continue;const o=Ti(t,n),i=o.some(t=>"delete"===t),r=o.some(t=>"insert"===t);if(i&&!r)return!0}return!1}(a)&&(!function(){Date.now()-s<o&&i&&!i.isCollapsed&&r.isCollapsed&&r.getLastPosition().isEqual(i.getLastPosition())&&e.enqueueChange(t=>{t.setSelection(i)});t.execute("delete")}(),n.stop())},{priority:"highest"})}function _f(t){return t.every(t=>t.is("containerElement"))}class kf extends Wh{static get pluginName(){return"Delete"}init(){const t=this.editor,e=t.editing.view,n=e.document;e.addObserver(wf),t.commands.add("forwardDelete",new bf(t,"forward")),t.commands.add("delete",new bf(t,"backward")),this.listenTo(n,"delete",(n,o)=>{t.execute("forward"==o.direction?"forwardDelete":"delete",{unit:o.unit,sequence:o.sequence}),o.preventDefault(),e.scrollToTheSelection()}),vf(t)}}class yf extends Wh{static get requires(){return[gf,kf]}static get pluginName(){return"Typing"}}class xf extends Jh{constructor(t){super(t),this._stack=[],this._createdBatches=new WeakSet,this.refresh()}refresh(){this.isEnabled=this._stack.length>0}addBatch(t){const e=this.editor.model.document.selection,n={ranges:e.hasOwnRange?Array.from(e.getRanges()):[],isBackward:e.isBackward};this._stack.push({batch:t,selection:n}),this.refresh()}clearStack(){this._stack=[],this.refresh()}_restoreSelection(t,e,n){const o=this.editor.model,i=o.document,r=[];for(const e of t){const t=Af(e,n).find(t=>t.start.root!=i.graveyard);t&&r.push(t)}r.length&&o.change(t=>{t.setSelection(r,{backward:e})})}_undo(t,e){const n=this.editor.model,o=n.document;this._createdBatches.add(e);const i=t.deltas.slice();i.reverse();for(const t of i)if(t.operations.some(t=>t.isDocumentOperation)){const i=t.baseVersion+t.operations.length,r=Array.from(o.history.getDeltas(i)),s=n.transformDeltas([t.getReversed()],r,!0).deltasA;for(const i of s){i.baseVersion=o.version,e.addDelta(i);for(const t of i.operations)n.applyOperation(t);o.history.setDeltaAsUndone(t,i)}}}}function Af(t,e){const n=function(t,e){for(const n of e)for(const e of n.operations)for(let n=0;n<t.length;n++){let o;switch(e.type){case"insert":o=t[n]._getTransformedByInsertion(e.position,e.nodes.maxOffset,!0);break;case"move":case"remove":case"reinsert":o=t[n]._getTransformedByMove(e.sourcePosition,e.targetPosition,e.howMany,!0)}o&&(t.splice(n,1,...o),n=n+o.length-1)}return t}([t],e);n.sort((t,e)=>t.start.isBefore(e.start)?-1:1);for(let t=1;t<n.length;t++){const e=n[t-1],o=n[t];e.end.isTouching(o.start)&&(e.end=o.end,n.splice(t,1),t--)}return n}class Cf extends xf{execute(t=null){const e=t?this._stack.findIndex(e=>e.batch==t):this._stack.length-1,n=this._stack.splice(e,1)[0],o=new fu;this.editor.model.enqueueChange(o,()=>{this._undo(n.batch,o);const t=this.editor.model.document.history.getDeltas(n.batch.baseVersion);this._restoreSelection(n.selection.ranges,n.selection.isBackward,t),this.fire("revert",n.batch,o)}),this.refresh()}}class Tf extends xf{execute(){const t=this._stack.pop(),e=new fu;this.editor.model.enqueueChange(e,()=>{const n=t.batch.deltas[t.batch.deltas.length-1],o=n.baseVersion+n.operations.length,i=this.editor.model.document.history.getDeltas(o);this._restoreSelection(t.selection.ranges,t.selection.isBackward,i),this._undo(t.batch,e)}),this.refresh()}}class Sf extends Wh{constructor(t){super(t),this._batchRegistry=new WeakSet}init(){const t=this.editor;this._undoCommand=new Cf(t),this._redoCommand=new Tf(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(t,e)=>{const n=e[0];if(!n.isDocumentOperation)return;const o=n.delta.batch;this._batchRegistry.has(o)||"transparent"==o.type||(this._redoCommand._createdBatches.has(o)?this._undoCommand.addBatch(o):this._undoCommand._createdBatches.has(o)||(this._undoCommand.addBatch(o),this._redoCommand.clearStack()),this._batchRegistry.add(o))},{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(t,e,n)=>{this._redoCommand.addBatch(n)}),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}n(46);class Ef extends Eh{constructor(){super();const t=this.bindTemplate;this.set("content",""),this.set("viewBox","0 0 20 20"),this.set("fillColor",""),this.setTemplate({tag:"svg",ns:"http://www.w3.org/2000/svg",attributes:{class:["ck","ck-icon"],viewBox:t.to("viewBox")}})}render(){super.render(),this._updateXMLContent(),this._colorFillPaths(),this.on("change:content",()=>{this._updateXMLContent(),this._colorFillPaths()}),this.on("change:fillColor",()=>{this._colorFillPaths()})}_updateXMLContent(){if(this.content){const t=(new DOMParser).parseFromString(this.content.trim(),"image/svg+xml").querySelector("svg"),e=t.getAttribute("viewBox");for(e&&(this.viewBox=e),this.element.innerHTML="";t.childNodes.length>0;)this.element.appendChild(t.childNodes[0])}}_colorFillPaths(){this.fillColor&&this.element.querySelectorAll(".ck-icon__fill").forEach(t=>{t.style.fill=this.fillColor})}}n(48);class Pf extends Eh{constructor(t){super(t),this.set("text",""),this.set("position","s");const e=this.bindTemplate;this.setTemplate({tag:"span",attributes:{class:["ck","ck-tooltip",e.to("position",t=>"ck-tooltip_"+t),e.if("text","ck-hidden",t=>!t.trim())]},children:[{tag:"span",attributes:{class:["ck","ck-tooltip__text"]},children:[{text:e.to("text")}]}]})}}n(50);class Of extends Eh{constructor(t){super(t);const e=this.bindTemplate,n=w();this.set("class"),this.set("labelStyle"),this.set("icon"),this.set("isEnabled",!0),this.set("isOn",!1),this.set("isVisible",!0),this.set("keystroke"),this.set("label"),this.set("tabindex",-1),this.set("tooltip"),this.set("tooltipPosition","s"),this.set("type","button"),this.set("withText",!1),this.children=this.createCollection(),this.tooltipView=this._createTooltipView(),this.labelView=this._createLabelView(n),this.iconView=new Ef,this.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),this.bind("_tooltipString").to(this,"tooltip",this,"label",this,"keystroke",this._getTooltipString.bind(this)),this.setTemplate({tag:"button",attributes:{class:["ck","ck-button",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("isVisible","ck-hidden",t=>!t),e.to("isOn",t=>t?"ck-on":"ck-off"),e.if("withText","ck-button_with-text")],type:e.to("type",t=>t||"button"),tabindex:e.to("tabindex"),"aria-labelledby":`ck-editor__aria-label_${n}`,"aria-disabled":e.if("isEnabled",!0,t=>!t),"aria-pressed":e.if("isOn",!0)},children:this.children,on:{mousedown:e.to(t=>{t.preventDefault()}),click:e.to(t=>{this.isEnabled?this.fire("execute"):t.preventDefault()})}})}render(){super.render(),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView)}focus(){this.element.focus()}_createTooltipView(){const t=new Pf;return t.bind("text").to(this,"_tooltipString"),t.bind("position").to(this,"tooltipPosition"),t}_createLabelView(t){const e=new Eh,n=this.bindTemplate;return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:`ck-editor__aria-label_${t}`},children:[{text:this.bindTemplate.to("label")}]}),e}_getTooltipString(t,e,n){return t?"string"==typeof t?t:(n&&(n=function(t){return Jo.isMac?ei(t).map(t=>Yo[t.toLowerCase()]||t).reduce((t,e)=>t.slice(-1)in Qo?t+e:t+"+"+e):t}(n)),t instanceof Function?t(e,n):`${e}${n?` (${n})`:""}`):""}}var Rf=n(17),If=n.n(Rf),Mf=n(18),Ff=n.n(Mf);class Vf extends Wh{init(){const t=this.editor.t;this._addButton("undo",t("ai"),"CTRL+Z",If.a),this._addButton("redo",t("aj"),"CTRL+Y",Ff.a)}_addButton(t,e,n,o){const i=this.editor;i.ui.componentFactory.add(t,r=>{const s=i.commands.get(t),a=new Of(r);return a.set({label:e,icon:o,keystroke:n,tooltip:!0}),a.bind("isEnabled").to(s,"isEnabled"),this.listenTo(a,"execute",()=>i.execute(t)),a})}}class Nf extends Wh{static get requires(){return[Sf,Vf]}static get pluginName(){return"Undo"}}class Df extends Wh{static get pluginName(){return"PendingActions"}init(){this.set("hasAny",!1),this._actions=new jo({idProperty:"_id"}),this._actions.delegate("add","remove").to(this)}add(t){if("string"!=typeof t)throw new m.b("pendingactions-add-invalid-message: The message must be a string.");const e=Object.create(xo);return e.set("message",t),this._actions.add(e),this.hasAny=!0,e}remove(t){this._actions.remove(t),this.hasAny=!!this._actions.length}get first(){return this._actions.get(0)}[Symbol.iterator](){return this._actions[Symbol.iterator]()}}class Bf{constructor(){const t=new window.FileReader;this._reader=t,this.set("loaded",0),t.onprogress=(t=>{this.loaded=t.loaded})}get error(){return this._reader.error}read(t){const e=this._reader;return this.total=t.size,new Promise((n,o)=>{e.onload=(()=>{n(e.result)}),e.onerror=(()=>{o("error")}),e.onabort=(()=>{o("aborted")}),this._reader.readAsDataURL(t)})}abort(){this._reader.abort()}}P(Bf,xo);class Lf extends Wh{static get pluginName(){return"FileRepository"}static get requires(){return[Df]}init(){this.loaders=new jo,this.loaders.on("add",()=>this._updatePendingAction()),this.loaders.on("remove",()=>this._updatePendingAction()),this._pendingAction=null,this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0)}getLoader(t){for(const e of this.loaders)if(e.file==t)return e;return null}createLoader(t){if(!this.createUploadAdapter)return Ur.a.error("filerepository-no-upload-adapter: Upload adapter is not defined."),null;const e=new jf(t);return e._adapter=this.createUploadAdapter(e),this.loaders.add(e),e.on("change:uploaded",()=>{let t=0;for(const e of this.loaders)t+=e.uploaded;this.uploaded=t}),e.on("change:uploadTotal",()=>{let t=0;for(const e of this.loaders)e.uploadTotal&&(t+=e.uploadTotal);this.uploadTotal=t}),e}destroyLoader(t){const e=t instanceof jf?t:this.getLoader(t);e._destroy(),this.loaders.remove(e)}_updatePendingAction(){const t=this.editor.plugins.get(Df);if(this.loaders.length){if(!this._pendingAction){const e=this.editor.t,n=t=>`${e("s")} ${parseInt(t)}%.`;this._pendingAction=t.add(n(this.uploadedPercent)),this._pendingAction.bind("message").to(this,"uploadedPercent",n)}}else t.remove(this._pendingAction),this._pendingAction=null}}P(Lf,xo);class jf{constructor(t,e){this.id=w(),this.file=t,this._adapter=e,this._reader=new Bf,this.set("status","idle"),this.set("uploaded",0),this.set("uploadTotal",null),this.bind("uploadedPercent").to(this,"uploaded",this,"uploadTotal",(t,e)=>e?t/e*100:0),this.set("uploadResponse",null)}read(){if("idle"!=this.status)throw new m.b("filerepository-read-wrong-status: You cannot call read if the status is different than idle.");return this.status="reading",this._reader.read(this.file).then(t=>(this.status="idle",t)).catch(t=>{if("aborted"===t)throw this.status="aborted","aborted";throw this.status="error",this._reader.error})}upload(){if("idle"!=this.status)throw new m.b("filerepository-upload-wrong-status: You cannot call upload if the status is different than idle.");return this.status="uploading",this._adapter.upload().then(t=>(this.uploadResponse=t,this.status="idle",t)).catch(t=>{if("aborted"===this.status)throw"aborted";throw this.status="error",t})}abort(){const t=this.status;this.status="aborted","reading"==t&&this._reader.abort(),"uploading"==t&&this._adapter.abort&&this._adapter.abort(),this._destroy()}_destroy(){this._reader=void 0,this._adapter=void 0,this.data=void 0,this.uploadResponse=void 0,this.file=void 0}}P(jf,xo);const zf="ckCsrfToken",qf=40,Uf="abcdefghijklmnopqrstuvwxyz0123456789";function Wf(){let t=function(t){t=t.toLowerCase();const e=document.cookie.split(";");for(const n of e){const e=n.split("="),o=decodeURIComponent(e[0].trim().toLowerCase());if(o===t)return decodeURIComponent(e[1])}return null}(zf);return t&&t.length==qf||(t=function(t){let e="";const n=new Uint8Array(t);window.crypto.getRandomValues(n);for(let t=0;t<n.length;t++){const o=Uf.charAt(n[t]%Uf.length);e+=Math.random()>.5?o.toUpperCase():o}return e}(qf),function(t,e){document.cookie=encodeURIComponent(t)+"="+encodeURIComponent(e)+";path=/"}(zf,t)),t}class Hf{constructor(t,e,n){this.loader=t,this.url=e,this.t=n}upload(){return new Promise((t,e)=>{this._initRequest(),this._initListeners(t,e),this._sendRequest()})}abort(){this.xhr&&this.xhr.abort()}_initRequest(){const t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}_initListeners(t,e){const n=this.xhr,o=this.loader,i=(0,this.t)("a")+` ${o.file.name}.`;n.addEventListener("error",()=>e(i)),n.addEventListener("abort",()=>e()),n.addEventListener("load",()=>{const o=n.response;if(!o||!o.uploaded)return e(o&&o.error&&o.error.message?o.error.message:i);t({default:o.url})}),n.upload&&n.upload.addEventListener("progress",t=>{t.lengthComputable&&(o.uploadTotal=t.total,o.uploaded=t.loaded)})}_sendRequest(){const t=new FormData;t.append("upload",this.loader.file),t.append("ckCsrfToken",Wf()),this.xhr.send(t)}}class $f{constructor(t,e,n){let o;if("function"==typeof n)o=n;else{const e=n;o=(()=>{t.execute(e)})}t.model.document.on("change",(n,i)=>{if("transparent"==i.type)return;const r=Array.from(t.model.document.differ.getChanges()),s=r[0];if(1!=r.length||"insert"!==s.type||"$text"!=s.name||1!=s.length)return;const a=s.position.textNode||s.position.nodeAfter;if(!a.parent.is("paragraph"))return;const c=e.exec(a.data);c&&t.model.enqueueChange(t=>{const e=_s.createFromParentsAndOffsets(a.parent,0,a.parent,c[0].length);t.remove(e),o({match:c})})})}}class Kf{constructor(t,e,n){let o,i,r,s;e instanceof RegExp?o=e:r=e,"string"==typeof n?i=n:s=n,r=r||(t=>{let e;const n=[],i=[];for(;null!==(e=o.exec(t))&&!(e&&e.length<4);){let{index:t,1:o,2:r,3:s}=e;const a=o+r+s,c=[t+=e[0].length-a.length,t+o.length],l=[t+o.length+r.length,t+o.length+r.length+s.length];n.push(c),n.push(l),i.push([t+o.length,t+o.length+r.length])}return{remove:n,format:i}}),s=s||((t,e)=>{for(const n of e)t.setAttribute(i,!0,n);t.removeSelectionAttribute(i)}),t.model.document.on("change",(e,n)=>{if("transparent"==n.type)return;const o=t.model.document.selection;if(!o.isCollapsed)return;const a=Array.from(t.model.document.differ.getChanges()),c=a[0];if(1!=a.length||"insert"!==c.type||"$text"!=c.name||1!=c.length)return;const l=o.focus.parent,d=function(t){return Array.from(t.getChildren()).reduce((t,e)=>t+e.data,"")}(l).slice(0,o.focus.offset),u=r(d),h=Gf(l,u.format),f=Gf(l,u.remove);h.length&&f.length&&t.model.enqueueChange(e=>{const n=t.model.schema.getValidRanges(h,i);s(e,n);for(const t of f.reverse())e.remove(t)})})}}function Gf(t,e){return e.filter(t=>void 0!==t[0]&&void 0!==t[1]).map(e=>_s.createFromParentsAndOffsets(t,e[0],t,e[1]))}class Jf extends Jh{constructor(t,e){super(t),this.attributeKey=e}refresh(){const t=this.editor.model,e=t.document;this.value=this._getValueFromFirstAllowedNode(),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,this.attributeKey)}execute(t={}){const e=this.editor.model,n=e.document.selection,o=void 0===t.forceValue?!this.value:t.forceValue;e.change(t=>{if(n.isCollapsed)o?t.setSelectionAttribute(this.attributeKey,!0):t.removeSelectionAttribute(this.attributeKey);else{const i=e.schema.getValidRanges(n.getRanges(),this.attributeKey);for(const e of i)o?t.setAttribute(this.attributeKey,o,e):t.removeAttribute(this.attributeKey,e)}})}_getValueFromFirstAllowedNode(){const t=this.editor.model,e=t.schema,n=t.document.selection;if(n.isCollapsed)return n.hasAttribute(this.attributeKey);for(const t of n.getRanges())for(const n of t.getItems())if(e.checkAttribute(n,this.attributeKey))return n.hasAttribute(this.attributeKey);return!1}}const Qf="bold";class Yf extends Wh{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:Qf}),t.conversion.attributeToElement({model:Qf,view:"strong",upcastAlso:["b",{styles:{"font-weight":"bold"}}]}),t.commands.add(Qf,new Jf(t,Qf)),t.keystrokes.set("CTRL+B",Qf)}}var Xf=n(19),Zf=n.n(Xf);const tp="bold";class ep extends Wh{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(tp,n=>{const o=t.commands.get(tp),i=new Of(n);return i.set({label:e("c"),icon:Zf.a,keystroke:"CTRL+B",tooltip:!0}),i.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(i,"execute",()=>t.execute(tp)),i})}}const np="italic";class op extends Wh{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:np}),t.conversion.attributeToElement({model:np,view:"i",upcastAlso:["em",{styles:{"font-style":"italic"}}]}),t.commands.add(np,new Jf(t,np)),t.keystrokes.set("CTRL+I",np)}}var ip=n(20),rp=n.n(ip);const sp="italic";class ap extends Wh{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add(sp,n=>{const o=t.commands.get(sp),i=new Of(n);return i.set({label:e("f"),icon:rp.a,keystroke:"CTRL+I",tooltip:!0}),i.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(i,"execute",()=>t.execute(sp)),i})}}function cp(t){const e=t.next();return e.done?null:e.value}class lp extends Jh{refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document,n=t.schema,o=Array.from(e.selection.getSelectedBlocks());t.change(t=>{if(this.value)this._removeQuote(t,o.filter(dp));else{const e=o.filter(t=>dp(t)||hp(n,t));this._applyQuote(t,e)}})}_getValue(){const t=cp(this.editor.model.document.selection.getSelectedBlocks());return!(!t||!dp(t))}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=cp(t.getSelectedBlocks());return!!n&&hp(e,n)}_removeQuote(t,e){up(e).reverse().forEach(e=>{if(e.start.isAtStart&&e.end.isAtEnd)return void t.unwrap(e.start.parent);if(e.start.isAtStart){const n=vs.createBefore(e.start.parent);return void t.move(e,n)}e.end.isAtEnd||t.split(e.end);const n=vs.createAfter(e.end.parent);t.move(e,n)})}_applyQuote(t,e){const n=[];up(e).reverse().forEach(e=>{let o=dp(e.start);o||(o=new ms("blockQuote"),t.wrap(e,o)),n.push(o)}),n.reverse().reduce((e,n)=>e.nextSibling==n?(t.merge(vs.createAfter(e)),e):n)}}function dp(t){return"blockQuote"==t.parent.name?t.parent:null}function up(t){let e,n=0;const o=[];for(;n<t.length;){const i=t[n],r=t[n+1];e||(e=vs.createBefore(i)),r&&i.nextSibling==r||(o.push(new _s(e,vs.createAfter(i))),e=null),n++}return o}function hp(t,e){const n=t.checkChild(e.parent,"blockQuote"),o=t.checkChild(["$root","blockQuote"],e);return n&&o}class fp extends Wh{init(){const t=this.editor,e=t.model.schema;t.commands.add("blockQuote",new lp(t)),e.register("blockQuote",{allowWhere:"$block",allowContentOf:"$root"}),e.addChildCheck((t,e)=>{if(t.endsWith("blockQuote")&&"blockQuote"==e.name)return!1}),t.conversion.elementToElement({model:"blockQuote",view:"blockquote"})}afterInit(){const t=this.editor.commands.get("blockQuote");this.listenTo(this.editor.editing.view.document,"enter",(e,n)=>{const o=this.editor.model.document,i=o.selection.getLastPosition().parent;o.selection.isCollapsed&&i.isEmpty&&t.value&&(this.editor.execute("blockQuote"),this.editor.editing.view.scrollToTheSelection(),n.preventDefault(),e.stop())})}}var pp=n(21),mp=n.n(pp);n(52);class gp extends Wh{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("blockQuote",n=>{const o=t.commands.get("blockQuote"),i=new Of(n);return i.set({label:e("b"),icon:mp.a,tooltip:!0}),i.bind("isOn","isEnabled").to(o,"value","isEnabled"),this.listenTo(i,"execute",()=>t.execute("blockQuote")),i})}}const bp=/^data:(\S*?);base64,/;class wp{constructor(t,e,n){if(!t)throw new Error("File must be provided");if(!e)throw new Error("Token must be provided");if(!n)throw new Error("Api address must be provided");this.file=function(t){if("string"!=typeof t)return!1;const e=t.match(bp);return!(!e||!e.length)}(t)?function(t,e=512){try{const n=t.match(bp)[1],o=atob(t.replace(bp,"")),i=[];for(let t=0;t<o.length;t+=e){const n=o.slice(t,t+e),r=new Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);i.push(new Uint8Array(r))}return new Blob(i,{type:n})}catch(t){throw new Error("Problem with decoding Base64 image data.")}}(t):t,this._token=e,this._apiAddress=n}onProgress(t){return this.on("progress",(e,n)=>t(n)),this}onError(t){return this.once("error",(e,n)=>t(n)),this}abort(){this.xhr.abort()}send(){return this._prepareRequest(),this._attachXHRListeners(),this._sendRequest()}_prepareRequest(){const t=new XMLHttpRequest;t.open("POST",this._apiAddress),t.setRequestHeader("Authorization",this._token.value),t.responseType="json",this.xhr=t}_attachXHRListeners(){const t=this,e=this.xhr;function n(e){return()=>t.fire("error",e)}e.addEventListener("error",n("Network Error")),e.addEventListener("abort",n("Abort")),e.upload&&e.upload.addEventListener("progress",t=>{t.lengthComputable&&this.fire("progress",{total:t.total,uploaded:t.loaded})}),e.addEventListener("load",()=>{const t=e.status,n=e.response;if(t<200||t>299)return this.fire("error",n.message||n.error)})}_sendRequest(){const t=new FormData,e=this.xhr;return t.append("file",this.file),new Promise((n,o)=>{e.addEventListener("load",()=>{const t=e.status,i=e.response;return t<200||t>299?o(i.message||i.error):n(i)}),e.addEventListener("error",()=>o("Network Error")),e.addEventListener("abort",()=>o("Abort")),e.send(t)})}}P(wp,y);var vp=wp;const _p={refreshInterval:36e5,autoRefresh:!0};class kp{constructor(t,e=_p){if(!t)throw new Error("`tokenUrl` must be provided");this.set("value",e.initValue),this._tokenUrl=t,this._options=Object.assign({},_p,e)}init(){return new Promise((t,e)=>{this._options.autoRefresh&&this._startRefreshing(),this.value?t(this):this._refreshToken().then(t).catch(e)})}_refreshToken(){return new Promise((t,e)=>{const n=new XMLHttpRequest;n.open("GET",this._tokenUrl),n.addEventListener("load",()=>{const o=n.status,i=n.response;return o<200||o>299?e("Cannot download new token!"):(this.set("value",i),t(this))}),n.addEventListener("error",()=>e("Network Error")),n.addEventListener("abort",()=>e("Abort")),n.send()})}_startRefreshing(){this._refreshInterval=setInterval(this._refreshToken.bind(this),this._options.refreshInterval)}_stopRefreshing(){clearInterval(this._refreshInterval)}static create(t,e=_p){return new kp(t,e).init()}}P(kp,xo);var yp=kp;class xp extends Wh{init(){const t=this.editor.config.get("cloudServices")||{};for(const e in t)this[e]=t[e];if(this.tokenUrl)return this.token=new xp.Token(this.tokenUrl),this.token.init();this.token=null}}xp.Token=yp;class Ap extends Wh{static get requires(){return[Lf,xp]}init(){const t=this.editor,e=t.plugins.get(xp),n=e.token,o=e.uploadUrl;n&&(this._uploadGateway=new Ap._UploadGateway(n,o),t.plugins.get(Lf).createUploadAdapter=(t=>new Cp(this._uploadGateway,t)))}}class Cp{constructor(t,e){this.uploadGateway=t,this.loader=e}upload(){return this.fileUploader=this.uploadGateway.upload(this.loader.file),this.fileUploader.on("progress",(t,e)=>{this.loader.uploadTotal=e.total,this.loader.uploaded=e.uploaded}),this.fileUploader.send()}abort(){this.fileUploader.abort()}}Ap._UploadGateway=class{constructor(t,e){if(!t)throw new Error("Token must be provided");if(!e)throw new Error("Api address must be provided");this._token=t,this._apiAddress=e}upload(t){return new vp(t,this._token,this._apiAddress)}};class Tp extends Gi{constructor(t){super(t),this._observedElements=new Set}observe(t,e){this.document.getRoot(e).on("change:children",(e,n)=>{this.view.once("render",()=>this._updateObservedElements(t,n))})}_updateObservedElements(t,e){if(!e.is("element")||e.is("attributeElement"))return;const n=this.view.domConverter.mapViewToDom(e);if(n){for(const t of n.querySelectorAll("img"))this._observedElements.has(t)||(this.listenTo(t,"load",(t,e)=>this._fireEvents(e)),this._observedElements.add(t));for(const e of this._observedElements)t.contains(e)||(this.stopListening(e),this._observedElements.delete(e))}}_fireEvents(t){this.isEnabled&&(this.document.fire("layoutChanged"),this.document.fire("imageLoaded",t))}destroy(){this._observedElements.clear(),super.destroy()}}function Sp(t){return n=>{n.on(`attribute:${t}:image`,e)};function e(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const o=n.writer,i=n.mapper.toViewElement(e.item).getChild(0);null!==e.attributeNewValue?o.setAttribute(e.attributeKey,e.attributeNewValue,i):o.removeAttribute(e.attributeKey,i)}}class Ep{constructor(){this._stack=[]}add(t,e){const n=this._stack,o=n[0];this._insertDescriptor(t);const i=n[0];o===i||Pp(o,i)||this.fire("change:top",{oldDescriptor:o,newDescriptor:i,writer:e})}remove(t,e){const n=this._stack,o=n[0];this._removeDescriptor(t);const i=n[0];o===i||Pp(o,i)||this.fire("change:top",{oldDescriptor:o,newDescriptor:i,writer:e})}_insertDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t.id);if(Pp(t,e[n]))return;n>-1&&e.splice(n,1);let o=0;for(;e[o]&&Op(e[o],t);)o++;e.splice(o,0,t)}_removeDescriptor(t){const e=this._stack,n=e.findIndex(e=>e.id===t);n>-1&&e.splice(n,1)}}function Pp(t,e){return t&&e&&t.priority==e.priority&&Rp(t.classes)==Rp(e.classes)}function Op(t,e){return t.priority>e.priority||!(t.priority<e.priority)&&Rp(t.classes)>Rp(e.classes)}function Rp(t){return Array.isArray(t)?t.sort().join(","):t}P(Ep,y);var Ip=n(22),Mp=n.n(Ip);const Fp=Symbol("isWidget"),Vp=Symbol("label"),Np="ck-widget",Dp="ck-widget_selected";function Bp(t){return!!t.getCustomProperty(Fp)}function Lp(t,e,n={}){return Jo.isEdge||e.setAttribute("contenteditable","false",t),e.addClass(Np,t),e.setCustomProperty(Fp,!0,t),t.getFillerOffset=zp,n.label&&function(t,e,n){n.setCustomProperty(Vp,e,t)}(t,n.label,e),n.hasSelectionHandler&&function(t,e){const n=e.createUIElement("div",{class:"ck ck-widget__selection-handler"},function(t){const e=this.toDomElement(t),n=new Ef;return n.set("content",Mp.a),n.render(),e.appendChild(n.element),e});e.insert(Fo.createAt(t),n),e.addClass(["ck-widget_selectable"],t)}(t,e),function(t,e,n,o){const i=new Ep;i.on("change:top",(e,i)=>{i.oldDescriptor&&o(t,i.oldDescriptor,i.writer),i.newDescriptor&&n(t,i.newDescriptor,i.writer)}),e.setCustomProperty("addHighlight",(t,e,n)=>i.add(e,n),t),e.setCustomProperty("removeHighlight",(t,e,n)=>i.remove(e,n),t)}(t,e,(t,e,n)=>n.addClass(o(e.classes),t),(t,e,n)=>n.removeClass(o(e.classes),t)),t;function o(t){return Array.isArray(t)?t:[t]}}function jp(t){const e=t.getCustomProperty(Vp);return e?"function"==typeof e?e():e:""}function zp(){return null}const qp=Symbol("isImage");function Up(t){const e=t.getSelectedElement();return!(!e||!function(t){return!!t.getCustomProperty(qp)&&Bp(t)}(e))}function Wp(t){return t instanceof ms&&"image"==t.name}class Hp extends Wh{init(){const t=this.editor,e=t.model.schema,n=t.t,o=t.conversion;t.editing.view.addObserver(Tp),e.register("image",{isObject:!0,isBlock:!0,allowWhere:"$block",allowAttributes:["alt","src","srcset"]}),o.for("dataDowncast").add(Vs({model:"image",view:(t,e)=>$p(e)})),o.for("editingDowncast").add(Vs({model:"image",view:(t,e)=>(function(t,e,n){return e.setCustomProperty(qp,!0,t),Lp(t,e,{label:function(){const e=t.getChild(0).getAttribute("alt");return e?`${e} ${n}`:n}})})($p(e),e,n("g"))})),o.for("downcast").add(Sp("src")).add(Sp("alt")).add(function(){return e=>{e.on("attribute:srcset:image",t)};function t(t,e,n){if(!n.consumable.consume(e.item,t.name))return;const o=n.writer,i=n.mapper.toViewElement(e.item).getChild(0);if(null===e.attributeNewValue){const t=e.attributeOldValue;t.data&&(o.removeAttribute("srcset",i),o.removeAttribute("sizes",i),t.width&&o.removeAttribute("width",i))}else{const t=e.attributeNewValue;t.data&&(o.setAttribute("srcset",t.data,i),o.setAttribute("sizes","100vw",i),t.width&&o.setAttribute("width",t.width,i))}}}()),o.for("upcast").add(aa({view:{name:"img",attributes:{src:!0}},model:(t,e)=>e.createElement("image",{src:t.getAttribute("src")})})).add(la({view:{name:"img",key:"alt"},model:"alt"})).add(la({view:{name:"img",key:"srcset"},model:{key:"srcset",value:t=>{const e={data:t.getAttribute("srcset")};return t.hasAttribute("width")&&(e.width=t.getAttribute("width")),e}}})).add(function(){return e=>{e.on("element:figure",t)};function t(t,e,n){if(!n.consumable.test(e.viewItem,{name:!0,classes:"image"}))return;const o=Array.from(e.viewItem.getChildren()).find(t=>t.is("img"));if(!o||!o.hasAttribute("src")||!n.consumable.test(o,{name:!0}))return;const i=n.convertItem(o,e.modelCursor),r=cp(i.modelRange.getItems());r&&(n.convertChildren(e.viewItem,vs.createAt(r)),e.modelRange=i.modelRange,e.modelCursor=i.modelCursor)}}())}}function $p(t){const e=t.createEmptyElement("img"),n=t.createContainerElement("figure",{class:"image"});return t.insert(Fo.createAt(n),e),n}class Kp extends Vr{constructor(t){super(t),this.domEventType="mousedown"}onDomEvent(t){this.fire(t.type,t)}}n(54);const Gp=ti("Ctrl+A");class Jp extends Wh{static get pluginName(){return"Widget"}init(){const t=this.editor.editing.view,e=t.document;this._previouslySelected=new Set,this.editor.editing.downcastDispatcher.on("selection",(t,e,n)=>{this._clearPreviouslySelectedWidgets(n.writer);const o=n.writer,i=o.document.selection,r=i.getSelectedElement();for(const t of i.getRanges())for(const e of t){const t=e.item;t.is("element")&&Bp(t)&&(o.addClass(Dp,t),this._previouslySelected.add(t),t==r&&o.setSelection(i.getRanges(),{fake:!0,label:jp(r)}))}},{priority:"low"}),t.addObserver(Kp),this.listenTo(e,"mousedown",(...t)=>this._onMousedown(...t)),this.listenTo(e,"keydown",(...t)=>this._onKeydown(...t),{priority:"high"}),this.listenTo(e,"delete",(t,e)=>{this._handleDelete("forward"==e.direction)&&(e.preventDefault(),t.stop())},{priority:"high"})}_onMousedown(t,e){const n=this.editor,o=n.editing.view,i=o.document;let r=e.target;if(function(t){for(;t;){if(t instanceof Oo&&!(t instanceof Io))return!0;t=t.parent}return!1}(r))return;if(!Bp(r)&&!(r=r.findAncestor(Bp)))return;e.preventDefault(),i.isFocused||o.focus();const s=n.editing.mapper.toModelElement(r);this._setSelectionOverElement(s)}_onKeydown(t,e){const n=e.keyCode,o=n==Xo.delete||n==Xo.arrowdown||n==Xo.arrowright;let i=!1;!function(t){return t==Xo.arrowright||t==Xo.arrowleft||t==Xo.arrowup||t==Xo.arrowdown}(n)?!function(t){return Zo(t)==Gp}(e)?n===Xo.enter&&(i=this._handleEnterKey(e.shiftKey)):i=this._selectAllNestedEditableContent()||this._selectAllContent():i=this._handleArrowKeys(o),i&&(e.preventDefault(),t.stop())}_handleDelete(t){if(this.editor.isReadOnly)return;const e=this.editor.model.document.selection;if(!e.isCollapsed)return;const n=this._getObjectElementNextToSelection(t);return n?(this.editor.model.change(t=>{let o=e.anchor.parent;for(;o.isEmpty;){const e=o;o=e.parent,t.remove(e)}this._setSelectionOverElement(n)}),!0):void 0}_handleArrowKeys(t){const e=this.editor.model,n=e.schema,o=e.document.selection,i=o.getSelectedElement();if(i&&n.isObject(i)){const i=t?o.getLastPosition():o.getFirstPosition(),r=n.getNearestSelectionRange(i,t?"forward":"backward");return r&&e.change(t=>{t.setSelection(r)}),!0}if(!o.isCollapsed)return;const r=this._getObjectElementNextToSelection(t);return r instanceof ms&&n.isObject(r)?(this._setSelectionOverElement(r),!0):void 0}_handleEnterKey(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();if(n&&e.schema.isObject(n))return e.change(e=>{const o=e.createElement("paragraph");e.insert(o,n,t?"before":"after"),e.setSelection(o,"in")}),!0}_selectAllNestedEditableContent(){const t=this.editor.model,e=t.document.selection,n=t.schema.getLimitElement(e);return e.getFirstRange().root!=n&&(t.change(t=>{t.setSelection(_s.createIn(n))}),!0)}_selectAllContent(){const t=this.editor.model,e=this.editor.editing,n=e.view.document.selection.getSelectedElement();if(n&&Bp(n)){const o=e.mapper.toModelElement(n.parent);return t.change(t=>{t.setSelection(_s.createIn(o))}),!0}return!1}_setSelectionOverElement(t){this.editor.model.change(e=>{e.setSelection(_s.createOn(t))})}_getObjectElementNextToSelection(t){const e=this.editor.model,n=e.schema,o=e.document.selection,i=new Ts(o);e.modifySelection(i,{direction:t?"forward":"backward"});const r=t?i.focus.nodeBefore:i.focus.nodeAfter;return r instanceof ms&&n.isObject(r)?r:null}_clearPreviouslySelectedWidgets(t){for(const e of this._previouslySelected)t.removeClass(Dp,e);this._previouslySelected.clear()}}class Qp extends Jh{refresh(){const t=this.editor.model.document.selection.getSelectedElement();this.isEnabled=Wp(t),Wp(t)&&t.hasAttribute("alt")?this.value=t.getAttribute("alt"):this.value=!1}execute(t){const e=this.editor.model,n=e.document.selection.getSelectedElement();e.change(e=>{e.setAttribute("alt",t.newValue,n)})}}class Yp extends Wh{init(){this.editor.commands.add("imageTextAlternative",new Qp(this.editor))}}function Xp({emitter:t,activator:e,callback:n,contextElements:o}){t.listenTo(document,"mousedown",(t,{target:i})=>{if(e()){for(const t of o)if(t.contains(i))return;n()}})}class Zp extends Eh{constructor(t,e){super(t);const n=`ck-input-${w()}`;this.set("label"),this.set("value"),this.set("isReadOnly",!1),this.labelView=this._createLabelView(n),this.inputView=this._createInputView(e,n);const o=this.bindTemplate;this.setTemplate({tag:"div",attributes:{class:["ck","ck-labeled-input",o.if("isReadOnly","ck-disabled")]},children:[this.labelView,this.inputView]})}_createLabelView(t){const e=new Oh(this.locale);return e.for=t,e.bind("text").to(this,"label"),e}_createInputView(t,e){const n=new t(this.locale);return n.id=e,n.bind("value").to(this),n.bind("isReadOnly").to(this),n}select(){this.inputView.select()}focus(){this.inputView.focus()}}n(56);class tm extends Eh{constructor(t){super(t),this.set("value"),this.set("id"),this.set("placeholder"),this.set("isReadOnly",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{type:"text",class:["ck","ck-input","ck-input-text"],id:e.to("id"),placeholder:e.to("placeholder"),readonly:e.to("isReadOnly")}})}render(){super.render();const t=t=>{this.element.value=t||0===t?t:""};t(this.value),this.on("change:value",(e,n,o)=>{t(o)})}select(){this.element.select()}focus(){this.element.focus()}}function em({view:t}){t.listenTo(t.element,"submit",(e,n)=>{n.preventDefault(),t.fire("submit")},{useCapture:!0})}var nm=n(5),om=n.n(nm),im=n(6),rm=n.n(im);n(58);class sm extends Eh{constructor(t){super(t);const e=this.locale.t;this.focusTracker=new ih,this.keystrokes=new Ju,this.labeledInput=this._createLabeledInputView(),this.saveButtonView=this._createButton(e("y"),om.a,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("z"),rm.a,"ck-button-cancel","cancel"),this._focusables=new ah,this._focusCycler=new Dh({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-text-alternative-form"],tabindex:"-1"},children:[this.labeledInput,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),this.keystrokes.listenTo(this.element),em({view:this}),[this.labeledInput,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)})}_createButton(t,e,n,o){const i=new Of(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.extendTemplate({attributes:{class:n}}),o&&i.delegate("execute").to(this,o),i}_createLabeledInputView(){const t=this.locale.t,e=new Zp(this.locale,tm);return e.label=t("ah"),e.inputView.placeholder=t("ah"),e}}function am(t,e,n){const{left:o,top:i,name:r}=t(e,n);return[r,n.clone().moveTo(o,i)]}function cm({left:t,top:e}){const{scrollX:n,scrollY:o}=Di.window;return{left:t+n,top:e+o}}n(60);const lm=Fh("px"),dm=Di.document.body;class um extends Eh{constructor(t){super(t);const e=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("position","arrow_nw"),this.set("isVisible",!1),this.set("withArrow",!0),this.set("className"),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-panel",e.to("position",t=>`ck-balloon-panel_${t}`),e.if("isVisible","ck-balloon-panel_visible"),e.if("withArrow","ck-balloon-panel_with-arrow"),e.to("className")],style:{top:e.to("top",lm),left:e.to("left",lm)}},children:this.content})}show(){this.isVisible=!0}hide(){this.isVisible=!1}attachTo(t){this.show();const e=um.defaultPositions,n=Object.assign({},{element:this.element,positions:[e.southArrowNorth,e.southArrowNorthWest,e.southArrowNorthEast,e.northArrowSouth,e.northArrowSouthWest,e.northArrowSouthEast],limiter:dm,fitInViewport:!0},t),{top:o,left:i,name:r}=um._getOptimalPosition(n);Object.assign(this,{top:o,left:i,position:r})}pin(t){this.unpin(),this._pinWhenIsVisibleCallback=(()=>{this.isVisible?this._startPinning(t):this._stopPinning()}),this._startPinning(t),this.listenTo(this,"change:isVisible",this._pinWhenIsVisibleCallback)}unpin(){this._pinWhenIsVisibleCallback&&(this._stopPinning(),this.stopListening(this,"change:isVisible",this._pinWhenIsVisibleCallback),this._pinWhenIsVisibleCallback=null,this.hide())}_startPinning(t){this.attachTo(t);const e=hm(t.target),n=t.limiter?hm(t.limiter):dm;this.listenTo(Di.document,"scroll",(o,i)=>{const r=i.target,s=e&&r.contains(e),a=n&&r.contains(n);!s&&!a&&e&&n||this.attachTo(t)},{useCapture:!0}),this.listenTo(Di.window,"resize",()=>{this.attachTo(t)})}_stopPinning(){this.stopListening(Di.document,"scroll"),this.stopListening(Di.window,"resize")}}function hm(t){return ji(t)?t:Kr(t)?t.commonAncestorContainer:"function"==typeof t?hm(t()):null}function fm(t,e){return t.top-e.height-um.arrowVerticalOffset}function pm(t){return t.bottom+um.arrowVerticalOffset}um.arrowHorizontalOffset=25,um.arrowVerticalOffset=10,um._getOptimalPosition=function({element:t,target:e,positions:n,limiter:o,fitInViewport:i}){G(e)&&(e=e()),G(o)&&(o=o());const r=function(t){for(;t&&"html"!=t.tagName.toLowerCase();){if("static"!=Di.window.getComputedStyle(t).position)return t;t=t.parentElement}return null}(t.parentElement),s=new Jr(t),a=new Jr(e);let c,l;if(o||i){const t=o&&new Jr(o).getVisible(),e=i&&new Jr(Di.window);[l,c]=function(t,e,n,o,i){let r,s,a=0,c=0;const l=n.getArea();return t.some(t=>{const[d,u]=am(t,e,n);let h,f;if(o)if(i){const t=o.getIntersection(i);h=t?t.getIntersectionArea(u):0}else h=o.getIntersectionArea(u);function p(){c=f,a=h,r=u,s=d}return i&&(f=i.getIntersectionArea(u)),i&&!o?f>c&&p():!i&&o?h>a&&p():f>c&&h>=a?p():f>=c&&h>a&&p(),h===l}),r?[s,r]:null}(n,a,s,t,e)||am(n[0],a,s)}else[l,c]=am(n[0],a,s);let{left:d,top:u}=cm(c);if(r){const t=cm(new Jr(r)),e=Gr(r);d-=t.left,u-=t.top,d+=r.scrollLeft,u+=r.scrollTop,d-=e.left,u-=e.top}return{left:d,top:u,name:l}},um.defaultPositions={northArrowSouth:(t,e)=>({top:fm(t,e),left:t.left+t.width/2-e.width/2,name:"arrow_s"}),northArrowSouthEast:(t,e)=>({top:fm(t,e),left:t.left+t.width/2-e.width+um.arrowHorizontalOffset,name:"arrow_se"}),northArrowSouthWest:(t,e)=>({top:fm(t,e),left:t.left+t.width/2-um.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouth:(t,e)=>({top:fm(t,e),left:t.left-e.width/2,name:"arrow_s"}),northWestArrowSouthWest:(t,e)=>({top:fm(t,e),left:t.left-um.arrowHorizontalOffset,name:"arrow_sw"}),northWestArrowSouthEast:(t,e)=>({top:fm(t,e),left:t.left-e.width+um.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouth:(t,e)=>({top:fm(t,e),left:t.right-e.width/2,name:"arrow_s"}),northEastArrowSouthEast:(t,e)=>({top:fm(t,e),left:t.right-e.width+um.arrowHorizontalOffset,name:"arrow_se"}),northEastArrowSouthWest:(t,e)=>({top:fm(t,e),left:t.right-um.arrowHorizontalOffset,name:"arrow_sw"}),southArrowNorth:(t,e)=>({top:pm(t),left:t.left+t.width/2-e.width/2,name:"arrow_n"}),southArrowNorthEast:(t,e)=>({top:pm(t),left:t.left+t.width/2-e.width+um.arrowHorizontalOffset,name:"arrow_ne"}),southArrowNorthWest:(t,e)=>({top:pm(t),left:t.left+t.width/2-um.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorth:(t,e)=>({top:pm(t),left:t.left-e.width/2,name:"arrow_n"}),southWestArrowNorthWest:(t,e)=>({top:pm(t),left:t.left-um.arrowHorizontalOffset,name:"arrow_nw"}),southWestArrowNorthEast:(t,e)=>({top:pm(t),left:t.left-e.width+um.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorth:(t,e)=>({top:pm(t),left:t.right-e.width/2,name:"arrow_n"}),southEastArrowNorthEast:(t,e)=>({top:pm(t),left:t.right-e.width+um.arrowHorizontalOffset,name:"arrow_ne"}),southEastArrowNorthWest:(t,e)=>({top:pm(t),left:t.right-um.arrowHorizontalOffset,name:"arrow_nw"})};class mm extends Wh{static get pluginName(){return"ContextualBalloon"}init(){this.view=new um,this.positionLimiter=(()=>{const t=this.editor.editing.view,e=t.document.selection.editableElement;return e?t.domConverter.mapViewToDom(e.root):null}),this._stack=new Map,this.editor.ui.view.body.add(this.view),this.editor.ui.focusTracker.add(this.view.element)}get visibleView(){const t=this._stack.get(this.view.content.get(0));return t?t.view:null}hasView(t){return this._stack.has(t)}add(t){if(this.hasView(t.view))throw new m.b("contextualballoon-add-view-exist: Cannot add configuration of the same view twice.");this.visibleView&&this.view.content.remove(this.visibleView),this._stack.set(t.view,t),this._show(t)}remove(t){if(!this.hasView(t))throw new m.b("contextualballoon-remove-view-not-exist: Cannot remove configuration of not existing view.");if(this.visibleView===t){this.view.content.remove(t),this._stack.delete(t);const e=Array.from(this._stack.values()).pop();e?this._show(e):this.view.hide()}else this._stack.delete(t)}updatePosition(t){t&&(this._stack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition())}_show({view:t,balloonClassName:e=""}){this.view.className=e,this.view.content.add(t),this.view.pin(this._getBalloonPosition())}_getBalloonPosition(){let t=Array.from(this._stack.values()).pop().position;return t&&!t.limiter&&(t=Object.assign({},t,{limiter:this.positionLimiter})),t}}var gm=n(23),bm=n.n(gm);function wm(t){const e=t.plugins.get("ContextualBalloon");if(Up(t.editing.view.document.selection)){const n=vm(t);e.updatePosition(n)}}function vm(t){const e=t.editing.view,n=um.defaultPositions;return{target:e.domConverter.viewToDom(e.document.selection.getSelectedElement()),positions:[n.northArrowSouth,n.northArrowSouthWest,n.northArrowSouthEast,n.southArrowNorth,n.southArrowNorthWest,n.southArrowNorthEast]}}class _m extends Wh{static get requires(){return[mm]}init(){this._createButton(),this._createForm()}_createButton(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageTextAlternative",n=>{const o=t.commands.get("imageTextAlternative"),i=new Of(n);return i.set({label:e("x"),icon:bm.a,tooltip:!0}),i.bind("isEnabled").to(o,"isEnabled"),this.listenTo(i,"execute",()=>this._showForm()),i})}_createForm(){const t=this.editor,e=t.editing.view.document;this._balloon=this.editor.plugins.get("ContextualBalloon"),this._form=new sm(t.locale),this._form.render(),this.listenTo(this._form,"submit",()=>{t.execute("imageTextAlternative",{newValue:this._form.labeledInput.inputView.element.value}),this._hideForm(!0)}),this.listenTo(this._form,"cancel",()=>{this._hideForm(!0)}),this._form.keystrokes.set("Esc",(t,e)=>{this._hideForm(!0),e()}),this.listenTo(t.ui,"update",()=>{Up(e.selection)?this._isVisible&&wm(t):this._hideForm(!0)}),Xp({emitter:this._form,activator:()=>this._isVisible,contextElements:[this._form.element],callback:()=>this._hideForm()})}_showForm(){if(this._isVisible)return;const t=this.editor,e=t.commands.get("imageTextAlternative"),n=this._form.labeledInput;this._balloon.hasView(this._form)||this._balloon.add({view:this._form,position:vm(t)}),n.value=n.inputView.element.value=e.value||"",this._form.labeledInput.select()}_hideForm(t){this._isVisible&&(this._balloon.remove(this._form),t&&this.editor.editing.view.focus())}get _isVisible(){return this._balloon.visibleView==this._form}}class km extends Wh{static get requires(){return[Yp,_m]}static get pluginName(){return"ImageTextAlternative"}}n(62);class ym extends Wh{static get requires(){return[Hp,Jp,km]}static get pluginName(){return"Image"}}class xm extends Eh{constructor(t){super(t),this.buttonView=new Of(t),this._fileInputView=new Am(t),this._fileInputView.bind("acceptedType").to(this),this._fileInputView.bind("allowMultipleFiles").to(this),this._fileInputView.delegate("done").to(this),this.setTemplate({tag:"span",attributes:{class:"ck-file-dialog-button"},children:[this.buttonView,this._fileInputView]}),this.buttonView.on("execute",()=>{this._fileInputView.open()})}focus(){this.buttonView.focus()}}class Am extends Eh{constructor(t){super(t),this.set("acceptedType"),this.set("allowMultipleFiles",!1);const e=this.bindTemplate;this.setTemplate({tag:"input",attributes:{class:["ck-hidden"],type:"file",tabindex:"-1",accept:e.to("acceptedType"),multiple:e.to("allowMultipleFiles")},on:{change:e.to(()=>{this.element&&this.element.files&&this.element.files.length&&this.fire("done",this.element.files),this.element.value=""})}})}open(){this.element.click()}}var Cm=n(24),Tm=n.n(Cm);function Sm(t){return/^image\/(jpeg|png|gif|bmp)$/.test(t.type)}function Em(t){const e=t.getSelectedElement();if(e)return vs.createAfter(e);const n=t.getSelectedBlocks().next().value;if(n){if(n.isEmpty)return vs.createAt(n);const e=vs.createAfter(n);return t.focus.isTouching(e)?e:vs.createBefore(n)}return t.focus}class Pm extends Wh{init(){const t=this.editor,e=t.t;t.ui.componentFactory.add("imageUpload",n=>{const o=new xm(n),i=t.commands.get("imageUpload");return o.set({acceptedType:"image/*",allowMultipleFiles:!0}),o.buttonView.set({label:e("q"),icon:Tm.a,tooltip:!0}),o.buttonView.bind("isEnabled").to(i),o.on("done",(e,n)=>{for(const e of Array.from(n)){const n=Em(t.model.document.selection);Sm(e)&&t.execute("imageUpload",{file:e,insertAt:n})}}),o})}}var Om=n(25),Rm=n.n(Om);n(64),n(66),n(68);class Im extends Wh{constructor(t){super(t),this.placeholder="data:image/svg+xml;utf8,"+encodeURIComponent(Rm.a)}init(){this.editor.editing.downcastDispatcher.on("attribute:uploadStatus:image",(...t)=>this.uploadStatusChange(...t))}uploadStatusChange(t,e,n){const o=this.editor,i=e.item,r=i.getAttribute("uploadId");if(!n.consumable.consume(e.item,t.name))return;const s=o.plugins.get(Lf),a=r?e.attributeNewValue:null,c=this.placeholder,l=o.editing.mapper.toViewElement(i),d=n.writer;if("reading"==a)return Vm(l,d),void Nm(c,l,d);if("uploading"==a){const t=s.loaders.get(r);return Vm(l,d),void(t?(Dm(l,d),function(t,e,n,o){const i=function(t){const e=t.createUIElement("div",{class:"ck-progress-bar"});return t.setCustomProperty(Mm,!0,e),e}(e);e.insert(Fo.createAt(t,"end"),i),n.on("change:uploadedPercent",(t,e,n)=>{o.change(t=>{t.setStyle("width",n+"%",i)})})}(l,d,t,o.editing.view)):Nm(c,l,d))}"complete"==a&&s.loaders.get(r)&&!Jo.isEdge&&function(t,e,n){const o=new ni("div",{class:"ck-image-upload-complete-icon"});e.insert(Fo.createAt(t,"end"),o),setTimeout(()=>{n.change(t=>t.remove(Vo.createOn(o)))},3e3)}(l,d,o.editing.view),function(t,e){Lm(t,e,Mm)}(l,d),Dm(l,d),function(t,e){e.removeClass("ck-appear",t)}(l,d)}}const Mm=Symbol("progress-bar"),Fm=Symbol("placeholder");function Vm(t,e){t.hasClass("ck-appear")||e.addClass("ck-appear",t)}function Nm(t,e,n){e.hasClass("ck-image-upload-placeholder")||n.addClass("ck-image-upload-placeholder",e);const o=e.getChild(0);o.getAttribute("src")!==t&&n.setAttribute("src",t,o),Bm(e,Fm)||n.insert(Fo.createAfter(o),function(t){const e=t.createUIElement("div",{class:"ck-upload-placeholder-loader"});return t.setCustomProperty(Fm,!0,e),e}(n))}function Dm(t,e){t.hasClass("ck-image-upload-placeholder")&&e.removeClass("ck-image-upload-placeholder",t),Lm(t,e,Fm)}function Bm(t,e){for(const n of t.getChildren())if(n.getCustomProperty(e))return n}function Lm(t,e,n){const o=Bm(t,n);o&&e.remove(Vo.createOn(o))}class jm extends Jh{execute(t){const e=this.editor,n=e.model.document,o=t.file,i=e.plugins.get(Lf);e.model.change(r=>{const s=i.createLoader(o);if(!s)return;const a=r.createElement("image",{uploadId:s.id});let c;c=t.insertAt?new Ts([new _s(t.insertAt)]):n.selection,e.model.insertContent(a,c),a.parent&&r.setSelection(a,"on")})}}class zm extends Wh{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=`show:${t.type}`+(t.namespace?`:${t.namespace}`:"");this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class qm extends Wh{static get requires(){return[Lf,zm]}init(){const t=this.editor,e=t.model.document,n=t.model.schema,o=t.plugins.get(Lf);n.extend("image",{allowAttributes:["uploadId","uploadStatus"]}),t.commands.add("imageUpload",new jm(t)),this.listenTo(t.editing.view.document,"clipboardInput",(n,i)=>{if(function(t){return Array.from(t.types).includes("text/html")&&""!==t.getData("text/html")}(i.dataTransfer))return;let r=new Ts(i.targetRanges.map(e=>t.editing.mapper.toModelRange(e)));for(const s of i.dataTransfer.files){if(Sm(s)){const e=Em(r);t.model.change(n=>{const i=o.createLoader(s);if(!i)return;const r=n.createElement("image",{uploadId:i.id}),a=new Ts([new _s(e)]);t.model.insertContent(r,a),r.parent&&n.setSelection(r,"on")}),n.stop()}r=e.selection}}),t.editing.view.document.on("dragover",(t,e)=>{e.preventDefault()}),e.on("change",()=>{const t=e.differ.getChanges({includeChangesInGraveyard:!0});for(const e of t)if("insert"==e.type&&"image"==e.name){const t=e.position.nodeAfter,n="$graveyard"==e.position.root.rootName,i=t.getAttribute("uploadId");if(!i)continue;const r=o.loaders.get(i);if(!r)continue;n?r.abort():"idle"==r.status&&this._load(r,t)}})}_load(t,e){const n=this.editor,o=n.model,i=n.locale.t,r=n.plugins.get(Lf),s=n.plugins.get(zm);return o.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","reading",e)}),t.read().then(i=>{const r=n.editing.mapper.toViewElement(e).getChild(0),s=t.upload();return n.editing.view.change(t=>{t.setAttribute("src",i,r)}),o.enqueueChange("transparent",t=>{t.setAttribute("uploadStatus","uploading",e)}),s}).then(t=>{o.enqueueChange("transparent",n=>{n.setAttributes({uploadStatus:"complete",src:t.default},e);let o=0;const i=Object.keys(t).filter(t=>{const e=parseInt(t,10);if(!isNaN(e))return o=Math.max(o,e),!0}).map(e=>`${t[e]} ${e}w`).join(", ");""!=i&&n.setAttribute("srcset",{data:i,width:o},e)}),a()}).catch(n=>{if("error"!==t.status&&"aborted"!==t.status)throw n;"error"==t.status&&s.showWarning(n,{title:i("r"),namespace:"upload"}),a(),o.enqueueChange("transparent",t=>{t.remove(e)})});function a(){o.enqueueChange("transparent",t=>{t.removeAttribute("uploadId",e),t.removeAttribute("uploadStatus",e)}),r.destroyLoader(t)}}}class Um extends Wh{static get pluginName(){return"ImageUpload"}static get requires(){return[qm,Pm,Im]}}class Wm extends Jh{refresh(){const t=this.editor.model,e=cp(t.document.selection.getSelectedBlocks());this.value=!!e&&e.is("paragraph"),this.isEnabled=!!e&&Hm(e,t.schema)}execute(t={}){const e=this.editor.model,n=e.document;e.change(o=>{const i=(t.selection||n.selection).getSelectedBlocks();for(const t of i)!t.is("paragraph")&&Hm(t,e.schema)&&o.rename(t,"paragraph")})}}function Hm(t,e){return e.checkChild(t.parent,"paragraph")&&!e.isObject(t)}class $m extends Wh{static get pluginName(){return"Paragraph"}init(){const t=this.editor,e=t.model,n=t.data;t.commands.add("paragraph",new Wm(t)),e.schema.register("paragraph",{inheritAllFrom:"$block"}),t.conversion.elementToElement({model:"paragraph",view:"p"}),n.upcastDispatcher.on("element",(t,e,n)=>{if(n.consumable.test(e.viewItem,{name:e.viewItem.name}))if($m.paragraphLikeElements.has(e.viewItem.name)){if(e.viewItem.isEmpty)return;const t=n.writer.createElement("paragraph"),o=n.splitToAllowedParent(t,e.modelCursor);if(!o)return;n.writer.insert(t,o.position);const{modelRange:i}=n.convertChildren(e.viewItem,vs.createAt(t));e.modelRange=new _s(vs.createBefore(t),i.end),e.modelCursor=e.modelRange.end}else Gm(e.viewItem,e.modelCursor,n.schema)&&(e=Object.assign(e,Km(e.viewItem,e.modelCursor,n)))},{priority:"low"}),n.upcastDispatcher.on("text",(t,e,n)=>{e.modelRange||Gm(e.viewItem,e.modelCursor,n.schema)&&(e=Object.assign(e,Km(e.viewItem,e.modelCursor,n)))},{priority:"lowest"}),e.document.registerPostFixer(t=>this._autoparagraphEmptyRoots(t)),t.on("dataReady",()=>{e.enqueueChange("transparent",t=>this._autoparagraphEmptyRoots(t))},{priority:"lowest"})}_autoparagraphEmptyRoots(t){const e=this.editor.model;for(const n of e.document.getRootNames()){const o=e.document.getRoot(n);if(o.isEmpty&&"$graveyard"!=o.rootName&&e.schema.checkChild(o,"paragraph"))return t.insertElement("paragraph",o),!0}}}function Km(t,e,n){const o=n.writer.createElement("paragraph");return n.writer.insert(o,e),n.convertItem(t,vs.createAt(o))}function Gm(t,e,n){const o=new Js(e);return!!n.checkChild(o,"paragraph")&&!!n.checkChild(o.push("paragraph"),t)}$m.paragraphLikeElements=new Set(["blockquote","dd","div","dt","h1","h2","h3","h4","h5","h6","li","p","td"]);class Jm extends Jh{constructor(t,e){super(t),this.modelElements=e}refresh(){const t=cp(this.editor.model.document.selection.getSelectedBlocks());this.value=!!t&&this.modelElements.includes(t.name)&&t.name,this.isEnabled=!!t&&this.modelElements.some(e=>Qm(t,e,this.editor.model.schema))}execute(t){const e=this.editor.model,n=e.document,o=t.value;e.change(t=>{const i=Array.from(n.selection.getSelectedBlocks()).filter(t=>Qm(t,o,e.schema));for(const e of i)e.is(o)||t.rename(e,o)})}}function Qm(t,e,n){return n.checkChild(t.parent,e)&&!n.isObject(t)}const Ym="paragraph";class Xm extends Wh{constructor(t){super(t),t.config.define("heading",{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h2",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h3",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h4",title:"Heading 3",class:"ck-heading_heading3"}]})}static get requires(){return[$m]}init(){const t=this.editor,e=t.config.get("heading.options"),n=[];for(const o of e)o.model!==Ym&&(t.model.schema.register(o.model,{inheritAllFrom:"$block"}),t.conversion.elementToElement(o),n.push(o.model));t.commands.add("heading",new Jm(t,n))}afterInit(){const t=this.editor,e=t.commands.get("enter"),n=t.config.get("heading.options");e&&this.listenTo(e,"afterExecute",(e,o)=>{const i=t.model.document.selection.getFirstPosition().parent;n.some(t=>i.is(t.model))&&!i.is(Ym)&&0===i.childCount&&o.writer.rename(i,Ym)})}}class Zm{constructor(t,e){e&&wo(this,e),t&&this.set(t)}}P(Zm,xo);class tg extends Eh{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",e.if("isVisible","ck-dropdown__panel-visible")]},children:this.children,on:{selectstart:e.to(t=>t.preventDefault())}})}focus(){this.children.length&&this.children.first.focus()}focusLast(){if(this.children.length){const t=this.children.last;"function"==typeof t.focusLast?t.focusLast():t.focus()}}}n(70);class eg extends Eh{constructor(t,e,n){super(t);const o=this.bindTemplate;this.buttonView=e,this.panelView=n,this.set("isOpen",!1),this.set("isEnabled",!0),this.focusTracker=new ih,this.keystrokes=new Ju,this.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",o.if("isEnabled","ck-disabled",t=>!t)]},children:[e,n]}),e.extendTemplate({attributes:{class:["ck-dropdown__button"]}})}render(){super.render(),this.listenTo(this.buttonView,"open",()=>{this.isOpen=!this.isOpen}),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes.listenTo(this.element),this.focusTracker.add(this.element);const t=(t,e)=>{this.isOpen&&(this.buttonView.focus(),this.isOpen=!1,e())};this.keystrokes.set("arrowdown",(t,e)=>{this.buttonView.isEnabled&&!this.isOpen&&(this.isOpen=!0,e())}),this.keystrokes.set("arrowright",(t,e)=>{this.isOpen&&e()}),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}focus(){this.buttonView.focus()}}var ng=n(26),og=n.n(ng);class ig extends Of{constructor(t){super(t),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{"aria-haspopup":!0}}),this.delegate("execute").to(this,"open")}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new Ef;return t.content=og.a,t.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),t}}n(72);class rg extends Eh{constructor(){super(),this.items=this.createCollection(),this.focusTracker=new ih,this.keystrokes=new Ju,this._focusCycler=new Dh({focusables:this.items,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"arrowup",focusNext:"arrowdown"}}),this.setTemplate({tag:"ul",attributes:{class:["ck","ck-reset","ck-list"]},children:this.items})}render(){super.render();for(const t of this.items)this.focusTracker.add(t.element);this.items.on("add",(t,e)=>{this.focusTracker.add(e.element)}),this.items.on("remove",(t,e)=>{this.focusTracker.remove(e.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}class sg extends Eh{constructor(t){super(t),this.children=this.createCollection(),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__item"]},children:this.children})}focus(){this.children.first.focus()}}class ag extends Eh{constructor(t){super(t),this.setTemplate({tag:"li",attributes:{class:["ck","ck-list__separator"]}})}}n(74);class cg extends Of{constructor(t){super(t),this.toggleSwitchView=this._createToggleView(),this.extendTemplate({attributes:{class:"ck-switchbutton"}})}render(){super.render(),this.children.add(this.toggleSwitchView)}_createToggleView(){const t=new Eh;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),t}}n(76),n(78);function lg(t,e=ig){const n=new e(t),o=new tg(t),i=new eg(t,n,o);return n.bind("isEnabled").to(i),n instanceof ig?n.bind("isOn").to(i,"isOpen"):n.arrowView.bind("isOn").to(i,"isOpen"),function(t){(function(t){t.on("render",()=>{Xp({emitter:t,activator:()=>t.isOpen,callback:()=>{t.isOpen=!1},contextElements:[t.element]})})})(t),function(t){t.on("execute",e=>{e.source instanceof cg||(t.isOpen=!1)})}(t),function(t){t.keystrokes.set("arrowdown",(e,n)=>{t.isOpen&&(t.panelView.focus(),n())}),t.keystrokes.set("arrowup",(e,n)=>{t.isOpen&&(t.panelView.focusLast(),n())})}(t)}(i),i}n(14);class dg extends Wh{init(){const t=this.editor,e=t.t,n=function(t){const e=t.t,n={Paragraph:e("t"),"Heading 1":e("u"),"Heading 2":e("v"),"Heading 3":e("w")};return t.config.get("heading.options").map(t=>{const e=n[t.title];return e&&e!=t.title&&(t=Object.assign({},t,{title:e})),t})}(t),o=e("d"),i=e("e");t.ui.componentFactory.add("heading",e=>{const r={},s=new jo,a=t.commands.get("heading"),c=t.commands.get("paragraph"),l=[a];for(const t of n){const e={type:"button",model:new Zm({label:t.title,class:t.class,withText:!0})};"paragraph"===t.model?(e.model.bind("isOn").to(c,"value"),e.model.set("commandName","paragraph"),l.push(c)):(e.model.bind("isOn").to(a,"value",e=>e===t.model),e.model.set({commandName:"heading",commandValue:t.model})),s.add(e),r[t.model]=t.title}const d=lg(e);return function(t,e){const n=t.locale,o=t.listView=new rg(n);o.items.bindTo(e).using(({type:t,model:e})=>{if("separator"===t)return new ag(n);if("button"===t||"switchbutton"===t){const o=new sg(n);let i;return(i="button"===t?new Of(n):new cg(n)).bind(...Object.keys(e)).to(e),i.delegate("execute").to(o),o.children.add(i),o}}),t.panelView.children.add(o),o.items.delegate("execute").to(t)}(d,s),d.buttonView.set({isOn:!1,withText:!0,tooltip:i}),d.extendTemplate({attributes:{class:["ck-heading-dropdown"]}}),d.bind("isEnabled").toMany(l,"isEnabled",(...t)=>t.some(t=>t)),d.buttonView.bind("label").to(a,"value",c,"value",(t,e)=>{const n=t||e&&"paragraph";return r[n]?r[n]:o}),this.listenTo(d,"execute",e=>{t.execute(e.source.commandName,e.source.commandValue?{value:e.source.commandValue}:void 0),t.editing.view.focus()}),d})}}n(81);const ug=new WeakMap;function hg(t,e,n,o){const i=t.document;ug.has(i)||(ug.set(i,new Map),i.registerPostFixer(t=>(function(t,e){const n=ug.get(t);let o=!1;for(const[t,i]of n)fg(e,t,i)&&(o=!0);return o})(i,t))),ug.get(i).set(e,{placeholderText:n,checkFunction:o}),t.render()}function fg(t,e,n){const o=e.document,i=n.placeholderText;let r=!1;if(!o)return!1;e.getAttribute("data-placeholder")!==i&&(t.setAttribute("data-placeholder",i,e),r=!0);const s=o.selection.anchor,a=n.checkFunction;if(a&&!a())return e.hasClass("ck-placeholder")&&(t.removeClass("ck-placeholder",e),r=!0),r;const c=!Array.from(e.getChildren()).some(t=>!t.is("uiElement"));return!o.isFocused&&c?(e.hasClass("ck-placeholder")||(t.addClass("ck-placeholder",e),r=!0),r):(c&&s&&s.parent!==e?e.hasClass("ck-placeholder")||(t.addClass("ck-placeholder",e),r=!0):e.hasClass("ck-placeholder")&&(t.removeClass("ck-placeholder",e),r=!0),r)}const pg=Symbol("imageCaption");function mg(t,e){return n=>{const o=n.createEditableElement("figcaption");return n.setCustomProperty(pg,!0,o),hg(t,o,e),function(t,e){return e.addClass(["ck-editor__editable","ck-editor__nested-editable"],t),Jo.isEdge||(e.setAttribute("contenteditable",t.isReadOnly?"false":"true",t),t.on("change:isReadOnly",(n,o,i)=>{e.setAttribute("contenteditable",i?"false":"true",t)})),t.on("change:isFocused",(n,o,i)=>{i?e.addClass("ck-editor__nested-editable_focused",t):e.removeClass("ck-editor__nested-editable_focused",t)}),t}(o,n)}}function gg(t){for(const e of t.getChildren())if(e instanceof ms&&"caption"==e.name)return e;return null}function bg(t){const e=t.parent;return"figcaption"==t.name&&e&&"figure"==e.name&&e.hasClass("image")?{name:!0}:null}class wg extends Wh{init(){const t=this.editor,e=t.editing.view,n=t.model.schema,o=t.data,i=t.editing,r=t.t;n.register("caption",{allowIn:"image",allowContentOf:"$block",isLimit:!0}),t.model.document.registerPostFixer(t=>this._insertMissingModelCaptionElement(t)),t.conversion.for("upcast").add(aa({view:bg,model:"caption"}));o.downcastDispatcher.on("insert:caption",vg(t=>t.createContainerElement("figcaption"),!1));const s=mg(e,r("h"));i.downcastDispatcher.on("insert:caption",vg(s)),i.downcastDispatcher.on("insert",this._fixCaptionVisibility(t=>t.item),{priority:"high"}),i.downcastDispatcher.on("remove",this._fixCaptionVisibility(t=>t.position.parent),{priority:"high"}),e.document.registerPostFixer(t=>this._updateCaptionVisibility(t))}_updateCaptionVisibility(t){const e=this.editor.editing.mapper,n=this._lastSelectedCaption;let o;const i=this.editor.model.document.selection,r=i.getSelectedElement();if(r&&r.is("image")){const t=gg(r);o=e.toViewElement(t)}const s=_g(i.getFirstPosition().parent);if(s&&(o=e.toViewElement(s)),o)return n?n===o?yg(o,t):(kg(n,t),this._lastSelectedCaption=o,yg(o,t)):(this._lastSelectedCaption=o,yg(o,t));if(n){const e=kg(n,t);return this._lastSelectedCaption=null,e}return!1}_fixCaptionVisibility(t){return(e,n,o)=>{const i=_g(t(n)),r=this.editor.editing.mapper,s=o.writer;if(i){const t=r.toViewElement(i);t&&(i.childCount?s.removeClass("ck-hidden",t):s.addClass("ck-hidden",t))}}}_insertMissingModelCaptionElement(t){const e=this.editor.model.document.differ.getChanges();for(const n of e)if("insert"==n.type&&"image"==n.name){const e=n.position.nodeAfter;if(!gg(e))return t.appendElement("caption",e),!0}}}function vg(t,e=!0){return(n,o,i)=>{const r=o.item;if((r.childCount||e)&&Wp(r.parent)){if(!i.consumable.consume(o.item,"insert"))return;const e=i.mapper.toViewElement(o.range.start.parent),n=t(i.writer),s=i.writer;r.childCount||s.addClass("ck-hidden",n),function(t,e,n,o){const i=Fo.createAt(n,"end");o.writer.insert(i,t),o.mapper.bindElements(e,t)}(n,o.item,e,i)}}}function _g(t){const e=t.getAncestors({includeSelf:!0}).find(t=>"caption"==t.name);return e&&e.parent&&"image"==e.parent.name?e:null}function kg(t,e){return!t.childCount&&!t.hasClass("ck-hidden")&&(e.addClass("ck-hidden",t),!0)}function yg(t,e){return!!t.hasClass("ck-hidden")&&(e.removeClass("ck-hidden",t),!0)}n(83);class xg extends Jh{constructor(t,e){super(t),this._defaultStyle=!1,this.styles=e.reduce((t,e)=>(t[e.name]=e,e.isDefault&&(this._defaultStyle=e.name),t),{})}refresh(){const t=this.editor.model.document.selection.getSelectedElement();if(this.isEnabled=Wp(t),t)if(t.hasAttribute("imageStyle")){const e=t.getAttribute("imageStyle");this.value=!!this.styles[e]&&e}else this.value=this._defaultStyle;else this.value=!1}execute(t){const e=t.value,n=this.editor.model,o=n.document.selection.getSelectedElement();n.change(t=>{this.styles[e].isDefault?t.removeAttribute("imageStyle",o):t.setAttribute("imageStyle",e,o)})}}function Ag(t,e){for(const n of e)if(n.name===t)return n}var Cg=n(9),Tg=n.n(Cg),Sg=n(10),Eg=n.n(Sg),Pg=n(11),Og=n.n(Pg),Rg=n(7),Ig=n.n(Rg);const Mg={full:{name:"full",title:"Full size image",icon:Tg.a,isDefault:!0},side:{name:"side",title:"Side image",icon:Ig.a,className:"image-style-side"},alignLeft:{name:"alignLeft",title:"Left aligned image",icon:Eg.a,className:"image-style-align-left"},alignCenter:{name:"alignCenter",title:"Centered image",icon:Og.a,className:"image-style-align-center"},alignRight:{name:"alignRight",title:"Right aligned image",icon:Ig.a,className:"image-style-align-right"}},Fg={full:Tg.a,left:Eg.a,right:Ig.a,center:Og.a};function Vg(t=[]){return t.map(Ng).map(t=>Object.assign({},t))}function Ng(t){if("string"==typeof t){const e=t;Mg[e]?t=Object.assign({},Mg[e]):(Ur.a.warn("image-style-not-found: There is no such image style of given name.",{name:e}),t={name:e})}else if(Mg[t.name]){const e=Mg[t.name],n=Object.assign({},t);for(const o in e)t.hasOwnProperty(o)||(n[o]=e[o]);t=n}return"string"==typeof t.icon&&Fg[t.icon]&&(t.icon=Fg[t.icon]),t}class Dg extends Wh{static get requires(){return[Hp]}static get pluginName(){return"ImageStyleEditing"}init(){const t=this.editor,e=t.model.schema,n=t.data,o=t.editing;t.config.define("image.styles",["full","side"]);const i=Vg(t.config.get("image.styles"));e.extend("image",{allowAttributes:"imageStyle"});const r=function(t){return(e,n,o)=>{if(!o.consumable.consume(n.item,e.name))return;const i=Ag(n.attributeNewValue,t),r=Ag(n.attributeOldValue,t),s=o.mapper.toViewElement(n.item),a=o.writer;r&&a.removeClass(r.className,s),i&&a.addClass(i.className,s)}}(i);o.downcastDispatcher.on("attribute:imageStyle:image",r),n.downcastDispatcher.on("attribute:imageStyle:image",r),n.upcastDispatcher.on("element:figure",function(t){const e=t.filter(t=>!t.isDefault);return(t,n,o)=>{if(!n.modelRange)return;const i=n.viewItem,r=cp(n.modelRange.getItems());if(o.schema.checkAttribute(r,"imageStyle"))for(const t of e)o.consumable.consume(i,{classes:t.className})&&o.writer.setAttribute("imageStyle",t.name,r)}}(i),{priority:"low"}),t.commands.add("imageStyle",new xg(t,i))}}n(85);class Bg extends Wh{get localizedDefaultStylesTitles(){const t=this.editor.t;return{"Full size image":t("i"),"Side image":t("j"),"Left aligned image":t("k"),"Centered image":t("l"),"Right aligned image":t("m")}}init(){const t=function(t,e){for(const n of t)e[n.title]&&(n.title=e[n.title]);return t}(Vg(this.editor.config.get("image.styles")),this.localizedDefaultStylesTitles);for(const e of t)this._createButton(e)}_createButton(t){const e=this.editor,n=`imageStyle:${t.name}`;e.ui.componentFactory.add(n,n=>{const o=e.commands.get("imageStyle"),i=new Of(n);return i.set({label:t.title,icon:t.icon,tooltip:!0}),i.bind("isEnabled").to(o,"isEnabled"),i.bind("isOn").to(o,"value",e=>e===t.name),this.listenTo(i,"execute",()=>e.execute("imageStyle",{value:t.name})),i})}}const Lg="ck-toolbar-container";function jg(t,e){return new _s(zg(t,e,!0),zg(t,e,!1))}function zg(t,e,n){let o=t.textNode||(n?t.nodeBefore:t.nodeAfter),i=null;for(;o&&o.getAttribute("linkHref")==e;)i=o,o=n?o.previousSibling:o.nextSibling;return i?vs.createAt(i,n?"before":"after"):t}class qg extends Jh{refresh(){const t=this.editor.model,e=t.document;this.value=e.selection.getAttribute("linkHref"),this.isEnabled=t.schema.checkAttributeInSelection(e.selection,"linkHref")}execute(t){const e=this.editor.model,n=e.document.selection;e.change(o=>{if(n.isCollapsed){const e=n.getFirstPosition();if(n.hasAttribute("linkHref")){const e=jg(n.getFirstPosition(),n.getAttribute("linkHref"));o.setAttribute("linkHref",t,e),o.setSelection(e)}else if(""!==t){const i=ds(n.getAttributes());i.set("linkHref",t);const r=o.createText(t,i);o.insert(r,e),o.setSelection(_s.createOn(r))}}else{const i=e.schema.getValidRanges(n.getRanges(),"linkHref");for(const e of i)o.setAttribute("linkHref",t,e)}})}}class Ug extends Jh{refresh(){this.isEnabled=this.editor.model.document.selection.hasAttribute("linkHref")}execute(){const t=this.editor.model,e=t.document.selection;t.change(t=>{const n=e.isCollapsed?[jg(e.getFirstPosition(),e.getAttribute("linkHref"))]:e.getRanges();for(const e of n)t.removeAttribute("linkHref",e)})}}const Wg=Symbol("linkElement"),Hg=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,$g=/^(?:(?:https?|ftps?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.:-]|$))/i;function Kg(t,e){const n=e.createAttributeElement("a",{href:t},{priority:5});return e.setCustomProperty(Wg,!0,n),n}function Gg(t){return function(t){return t.replace(Hg,"").match($g)}(t=String(t))?t:"#"}class Jg{constructor(t,e,n){this.model=t,this.attribute=n,this._modelSelection=t.document.selection,this._overrideUid=null,this._isNextGravityRestorationSkipped=!1,e.listenTo(this._modelSelection,"change:range",(t,e)=>{this._isNextGravityRestorationSkipped?this._isNextGravityRestorationSkipped=!1:this._isGravityOverridden&&(!e.directChange&&Qg(this._modelSelection.getFirstPosition(),n)||this._restoreGravity())})}handleForwardMovement(t,e){const n=this.attribute;if(!(this._isGravityOverridden||t.isAtStart&&this._hasSelectionAttribute))return Zg(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._removeSelectionAttribute(),!0):Yg(t,n)?(this._preventCaretMovement(e),this._overrideGravity(),!0):Xg(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._overrideGravity(),!0):void 0}handleBackwardMovement(t,e){const n=this.attribute;return this._isGravityOverridden?Zg(t,n)&&this._hasSelectionAttribute?(this._preventCaretMovement(e),this._restoreGravity(),this._removeSelectionAttribute(),!0):(this._preventCaretMovement(e),this._restoreGravity(),t.isAtStart&&this._removeSelectionAttribute(),!0):Zg(t,n)&&!this._hasSelectionAttribute?(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtEnd&&Xg(t,n)?this._hasSelectionAttribute?void(tb(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity())):(this._preventCaretMovement(e),this._setSelectionAttributeFromTheNodeBefore(t),!0):t.isAtStart?this._hasSelectionAttribute?(this._removeSelectionAttribute(),this._preventCaretMovement(e),!0):void 0:void(tb(t,n)&&(this._skipNextAutomaticGravityRestoration(),this._overrideGravity()))}get _isGravityOverridden(){return!!this._overrideUid}get _hasSelectionAttribute(){return this._modelSelection.hasAttribute(this.attribute)}_overrideGravity(){this._overrideUid=this.model.change(t=>t.overrideSelectionGravity())}_restoreGravity(){this.model.change(t=>{t.restoreSelectionGravity(this._overrideUid),this._overrideUid=null})}_preventCaretMovement(t){t.preventDefault()}_removeSelectionAttribute(){this.model.change(t=>{t.removeSelectionAttribute(this.attribute)})}_setSelectionAttributeFromTheNodeBefore(t){const e=this.attribute;this.model.change(n=>{n.setSelectionAttribute(this.attribute,t.nodeBefore.getAttribute(e))})}_skipNextAutomaticGravityRestoration(){this._isNextGravityRestorationSkipped=!0}}function Qg(t,e){return Yg(t,e)||Xg(t,e)}function Yg(t,e){const{nodeBefore:n,nodeAfter:o}=t,i=!!n&&n.hasAttribute(e);return!!o&&o.hasAttribute(e)&&(!i||n.getAttribute(e)!==o.getAttribute(e))}function Xg(t,e){const{nodeBefore:n,nodeAfter:o}=t,i=!!n&&n.hasAttribute(e),r=!!o&&o.hasAttribute(e);return i&&(!r||n.getAttribute(e)!==o.getAttribute(e))}function Zg(t,e){const{nodeBefore:n,nodeAfter:o}=t,i=!!n&&n.hasAttribute(e);if(!!o&&o.hasAttribute(e)&&i)return o.getAttribute(e)!==n.getAttribute(e)}function tb(t,e){return Qg(t.getShiftedBy(-1),e)}n(87);const eb="ck-link_selected";class nb extends Wh{init(){const t=this.editor;t.model.schema.extend("$text",{allowAttributes:"linkHref"}),t.conversion.for("dataDowncast").add(Ns({model:"linkHref",view:Kg})),t.conversion.for("editingDowncast").add(Ns({model:"linkHref",view:(t,e)=>Kg(Gg(t),e)})),t.conversion.for("upcast").add(ca({view:{name:"a",attributes:{href:!0}},model:{key:"linkHref",value:t=>t.getAttribute("href")}})),t.commands.add("link",new qg(t)),t.commands.add("unlink",new Ug(t)),function(t,e,n,o){const i=new Jg(e,n,o),r=e.document.selection;n.listenTo(t.document,"keydown",(t,e)=>{if(!r.isCollapsed)return;if(e.shiftKey||e.altKey||e.ctrlKey)return;const n=e.keyCode==Xo.arrowright,o=e.keyCode==Xo.arrowleft;if(!n&&!o)return;const s=r.getFirstPosition();let a;(a=n?i.handleForwardMovement(s,e):i.handleBackwardMovement(s,e))&&t.stop()},{priority:v.get("high")+1})}(t.editing.view,t.model,this,"linkHref"),this._setupLinkHighlight()}_setupLinkHighlight(){const t=this.editor,e=t.editing.view,n=new Set;e.document.registerPostFixer(e=>{const o=t.model.document.selection;if(o.hasAttribute("linkHref")){const i=jg(o.getFirstPosition(),o.getAttribute("linkHref")),r=t.editing.mapper.toViewRange(i);for(const t of r.getItems())t.is("a")&&(e.addClass(eb,t),n.add(t))}}),t.conversion.for("editingDowncast").add(t=>{function o(){e.change(t=>{for(const e of n.values())t.removeClass(eb,e),n.delete(e)})}t.on("insert",o,{priority:"highest"}),t.on("remove",o,{priority:"highest"}),t.on("attribute",o,{priority:"highest"}),t.on("selection",o,{priority:"highest"})})}}class ob extends Vr{constructor(t){super(t),this.domEventType="click"}onDomEvent(t){this.fire(t.type,t)}}n(89);class ib extends Eh{constructor(t){super(t);const e=t.t;this.focusTracker=new ih,this.keystrokes=new Ju,this.urlInputView=this._createUrlInput(),this.saveButtonView=this._createButton(e("y"),om.a,"ck-button-save"),this.saveButtonView.type="submit",this.cancelButtonView=this._createButton(e("z"),rm.a,"ck-button-cancel","cancel"),this._focusables=new ah,this._focusCycler=new Dh({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"form",attributes:{class:["ck","ck-link-form"],tabindex:"-1"},children:[this.urlInputView,this.saveButtonView,this.cancelButtonView]})}render(){super.render(),em({view:this}),[this.urlInputView,this.saveButtonView,this.cancelButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createUrlInput(){const t=this.locale.t,e=new Zp(this.locale,tm);return e.label=t("aa"),e.inputView.placeholder="https://example.com",e}_createButton(t,e,n,o){const i=new Of(this.locale);return i.set({label:t,icon:e,tooltip:!0}),i.extendTemplate({attributes:{class:n}}),o&&i.delegate("execute").to(this,o),i}}var rb=n(27),sb=n.n(rb),ab=n(28),cb=n.n(ab);n(91);class lb extends Eh{constructor(t){super(t);const e=t.t;this.focusTracker=new ih,this.keystrokes=new Ju,this.previewButtonView=this._createPreviewButton(),this.unlinkButtonView=this._createButton(e("ab"),sb.a,"unlink"),this.editButtonView=this._createButton(e("ac"),cb.a,"edit"),this.set("href"),this._focusables=new ah,this._focusCycler=new Dh({focusables:this._focusables,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-link-actions"],tabindex:"-1"},children:[this.previewButtonView,this.editButtonView,this.unlinkButtonView]})}render(){super.render(),[this.previewButtonView,this.editButtonView,this.unlinkButtonView].forEach(t=>{this._focusables.add(t),this.focusTracker.add(t.element)}),this.keystrokes.listenTo(this.element)}focus(){this._focusCycler.focusFirst()}_createButton(t,e,n){const o=new Of(this.locale);return o.set({label:t,icon:e,tooltip:!0}),o.delegate("execute").to(this,n),o}_createPreviewButton(){const t=new Of(this.locale),e=this.bindTemplate,n=this.t;return t.set({withText:!0,tooltip:n("ad")}),t.extendTemplate({attributes:{class:["ck","ck-link-actions__preview"],href:e.to("href",t=>t&&Gg(t)),target:"_blank"}}),t.bind("label").to(this,"href",t=>t||n("ae")),t.bind("isEnabled").to(this,"href",t=>!!t),t.template.tag="a",t.template.eventListeners={},t}}var db=n(29),ub=n.n(db);const hb="Ctrl+K";class fb extends Wh{static get requires(){return[mm]}init(){const t=this.editor;t.editing.view.addObserver(ob),this.actionsView=this._createActionsView(),this.formView=this._createFormView(),this._balloon=t.plugins.get(mm),this._createToolbarLinkButton(),this._enableUserBalloonInteractions()}_createActionsView(){const t=this.editor,e=new lb(t.locale),n=t.commands.get("link"),o=t.commands.get("unlink");return e.bind("href").to(n,"value"),e.editButtonView.bind("isEnabled").to(n),e.unlinkButtonView.bind("isEnabled").to(o),this.listenTo(e,"edit",()=>{this._addFormView()}),this.listenTo(e,"unlink",()=>{t.execute("unlink"),this._hideUI()}),e.keystrokes.set("Esc",(t,e)=>{this._hideUI(),e()}),e.keystrokes.set(hb,(t,e)=>{this._addFormView(),e()}),e}_createFormView(){const t=this.editor,e=new ib(t.locale),n=t.commands.get("link");return e.urlInputView.bind("value").to(n,"value"),e.urlInputView.bind("isReadOnly").to(n,"isEnabled",t=>!t),e.saveButtonView.bind("isEnabled").to(n),this.listenTo(e,"submit",()=>{t.execute("link",e.urlInputView.inputView.element.value),this._removeFormView()}),this.listenTo(e,"cancel",()=>{this._removeFormView()}),e.keystrokes.set("Esc",(t,e)=>{this._removeFormView(),e()}),e}_createToolbarLinkButton(){const t=this.editor,e=t.commands.get("link"),n=t.t;t.keystrokes.set(hb,(t,n)=>{n(),e.isEnabled&&this._showUI()}),t.ui.componentFactory.add("link",t=>{const o=new Of(t);return o.isEnabled=!0,o.label=n("p"),o.icon=ub.a,o.keystroke=hb,o.tooltip=!0,o.bind("isEnabled").to(e,"isEnabled"),this.listenTo(o,"execute",()=>this._showUI()),o})}_enableUserBalloonInteractions(){const t=this.editor.editing.view.document;this.listenTo(t,"click",()=>{this._getSelectedLinkElement()&&this._showUI()}),this.editor.keystrokes.set("Tab",(t,e)=>{this._areActionsVisible&&!this.actionsView.focusTracker.isFocused&&(this.actionsView.focus(),e())},{priority:"high"}),this.editor.keystrokes.set("Esc",(t,e)=>{this._isUIVisible&&(this._hideUI(),e())}),Xp({emitter:this.formView,activator:()=>this._isUIVisible,contextElements:[this._balloon.view.element],callback:()=>this._hideUI()})}_addActionsView(){this._areActionsInPanel||this._balloon.add({view:this.actionsView,position:this._getBalloonPositionData()})}_addFormView(){if(this._isFormInPanel)return;const t=this.editor.commands.get("link");this._balloon.add({view:this.formView,position:this._getBalloonPositionData()}),this.formView.urlInputView.select(),this.formView.urlInputView.inputView.element.value=t.value||""}_removeFormView(){this._isFormInPanel&&(this._balloon.remove(this.formView),this.editor.editing.view.focus())}_showUI(){this.editor.commands.get("link").isEnabled&&(this._getSelectedLinkElement()?this._areActionsVisible?this._addFormView():this._addActionsView():(this._addActionsView(),this._addFormView()),this._startUpdatingUI())}_hideUI(){if(!this._isUIInPanel)return;const t=this.editor;this.stopListening(t.ui,"update"),this._removeFormView(),this._balloon.remove(this.actionsView),t.editing.view.focus()}_startUpdatingUI(){const t=this.editor,e=t.editing.view.document;let n=this._getSelectedLinkElement(),o=i();function i(){return e.selection.focus.getAncestors().reverse().find(t=>t.is("element"))}this.listenTo(t.ui,"update",()=>{const t=this._getSelectedLinkElement(),e=i();n&&!t||!n&&e!==o?this._hideUI():this._balloon.updatePosition(this._getBalloonPositionData()),n=t,o=e})}get _isFormInPanel(){return this._balloon.hasView(this.formView)}get _areActionsInPanel(){return this._balloon.hasView(this.actionsView)}get _areActionsVisible(){return this._balloon.visibleView===this.actionsView}get _isUIInPanel(){return this._isFormInPanel||this._areActionsInPanel}get _isUIVisible(){return this._balloon.visibleView==this.formView||this._areActionsVisible}_getBalloonPositionData(){const t=this.editor.editing.view,e=t.document,n=this._getSelectedLinkElement();return{target:n?t.domConverter.mapViewToDom(n):t.domConverter.viewRangeToDom(e.selection.getFirstRange())}}_getSelectedLinkElement(){const t=this.editor.editing.view.document.selection;if(t.isCollapsed)return pb(t.getFirstPosition());{const e=t.getFirstRange().getTrimmed(),n=pb(e.start),o=pb(e.end);return n&&n==o&&Vo.createIn(n).getTrimmed().isEqual(e)?n:null}}}function pb(t){return t.getAncestors().find(t=>(function(t){return t.is("attributeElement")&&!!t.getCustomProperty(Wg)})(t))}class mb extends Jh{constructor(t,e){super(t),this.type="bulleted"==e?"bulleted":"numbered"}refresh(){this.value=this._getValue(),this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document,n=Array.from(e.selection.getSelectedBlocks()).filter(e=>bb(e,t.schema)),o=!0===this.value;t.change(t=>{if(o){let e=n[n.length-1].nextSibling,o=Number.POSITIVE_INFINITY,i=[];for(;e&&"listItem"==e.name&&0!==e.getAttribute("listIndent");){const t=e.getAttribute("listIndent");t<o&&(o=t);const n=t-o;i.push({element:e,listIndent:n}),e=e.nextSibling}i=i.reverse();for(const e of i)t.setAttribute("listIndent",e.listIndent,e.element)}if(!o){let t=Number.POSITIVE_INFINITY;for(const e of n)e.is("listItem")&&e.getAttribute("listIndent")<t&&(t=e.getAttribute("listIndent"));gb(n,!0,t=0===t?1:t),gb(n,!1,t)}for(const e of n.reverse())o&&"listItem"==e.name?t.rename(e,"paragraph"):o||"listItem"==e.name?o||"listItem"!=e.name||e.getAttribute("listType")==this.type||t.setAttribute("listType",this.type,e):(t.setAttributes({listType:this.type,listIndent:0},e),t.rename(e,"listItem"))})}_getValue(){const t=cp(this.editor.model.document.selection.getSelectedBlocks());return!!t&&t.is("listItem")&&t.getAttribute("listType")==this.type}_checkEnabled(){if(this.value)return!0;const t=this.editor.model.document.selection,e=this.editor.model.schema,n=cp(t.getSelectedBlocks());return!!n&&bb(n,e)}}function gb(t,e,n){const o=e?t[0]:t[t.length-1];if(o.is("listItem")){let i=o[e?"previousSibling":"nextSibling"],r=o.getAttribute("listIndent");for(;i&&i.is("listItem")&&i.getAttribute("listIndent")>=n;)r>i.getAttribute("listIndent")&&(r=i.getAttribute("listIndent")),i.getAttribute("listIndent")==r&&t[e?"unshift":"push"](i),i=i[e?"previousSibling":"nextSibling"]}}function bb(t,e){return e.checkChild(t.parent,"listItem")&&!e.isObject(t)}class wb extends Jh{constructor(t,e){super(t),this._indentBy="forward"==e?1:-1}refresh(){this.isEnabled=this._checkEnabled()}execute(){const t=this.editor.model,e=t.document;let n=Array.from(e.selection.getSelectedBlocks());t.change(t=>{const e=n[n.length-1];let o=e.nextSibling;for(;o&&"listItem"==o.name&&o.getAttribute("listIndent")>e.getAttribute("listIndent");)n.push(o),o=o.nextSibling;this._indentBy<0&&(n=n.reverse());for(const e of n){const n=e.getAttribute("listIndent")+this._indentBy;n<0?t.rename(e,"paragraph"):t.setAttribute("listIndent",n,e)}})}_checkEnabled(){const t=cp(this.editor.model.document.selection.getSelectedBlocks());if(!t||!t.is("listItem"))return!1;if(this._indentBy>0){const e=t.getAttribute("listIndent"),n=t.getAttribute("listType");let o=t.previousSibling;for(;o&&o.is("listItem")&&o.getAttribute("listIndent")>=e;){if(o.getAttribute("listIndent")==e)return o.getAttribute("listType")==n;o=o.previousSibling}return!1}return!0}}function vb(){const t=!this.isEmpty&&("ul"==this.getChild(0).name||"ol"==this.getChild(0).name);return this.isEmpty||t?0:null}function _b(t,e,n){const o=n.consumable;if(!o.test(e.item,"insert")||!o.test(e.item,"attribute:listType")||!o.test(e.item,"attribute:listIndent"))return;o.consume(e.item,"insert"),o.consume(e.item,"attribute:listType"),o.consume(e.item,"attribute:listIndent");const i=e.item;Fb(i,function(t,e){const n=e.mapper,o=e.writer,i="numbered"==t.getAttribute("listType")?"ol":"ul",r=function(t){const e=t.createContainerElement("li");return e.getFillerOffset=vb,e}(o),s=o.createContainerElement(i,null);return o.insert(Fo.createAt(s),r),n.bindElements(t,r),r}(i,n),n)}function kb(t,e,n){const o=n.mapper.toViewPosition(e.position).getLastMatchingPosition(t=>!t.item.is("li")).nodeAfter,i=n.writer;i.breakContainer(Fo.createBefore(o)),i.breakContainer(Fo.createAfter(o));const r=o.parent,s=r.previousSibling,a=Vo.createOn(r),c=i.remove(a);s&&s.nextSibling&&Mb(i,s,s.nextSibling),Vb(n.mapper.toModelElement(o).getAttribute("listIndent")+1,e.position,a.start,o,n);for(const t of Vo.createIn(c).getItems())n.mapper.unbindViewElement(t);t.stop()}function yb(t,e,n){if(!n.consumable.consume(e.item,"attribute:listType"))return;const o=n.mapper.toViewElement(e.item),i=n.writer;i.breakContainer(Fo.createBefore(o)),i.breakContainer(Fo.createAfter(o));let r=o.parent;const s="numbered"==e.attributeNewValue?"ol":"ul";Mb(i,r=i.rename(r,s),r.nextSibling),Mb(i,r.previousSibling,r);for(const t of e.item.getChildren())n.consumable.consume(t,"insert")}function xb(t,e,n){if(!n.consumable.consume(e.item,"attribute:listIndent"))return;const o=n.mapper.toViewElement(e.item),i=n.writer;i.breakContainer(Fo.createBefore(o)),i.breakContainer(Fo.createAfter(o));const r=o.parent,s=r.previousSibling,a=Vo.createOn(r);i.remove(a),s&&s.nextSibling&&Mb(i,s,s.nextSibling),Vb(e.attributeOldValue+1,e.range.start,a.start,o,n),Fb(e.item,o,n);for(const t of e.item.getChildren())n.consumable.consume(t,"insert")}function Ab(t,e,n){if("listItem"!=e.item.name){let t=n.mapper.toViewPosition(e.range.start);const o=n.writer,i=[];for(;("ul"==t.parent.name||"ol"==t.parent.name)&&"li"==(t=o.breakContainer(t)).parent.name;){const e=t,n=Fo.createAt(t.parent,"end");if(!e.isEqual(n)){const t=o.remove(new Vo(e,n));i.push(t)}t=Fo.createAfter(t.parent)}if(i.length>0){for(let e=0;e<i.length;e++){const n=t.nodeBefore;if(t=o.insert(t,i[e]).end,e>0){const e=Mb(o,n,n.nextSibling);e&&e.parent==n&&t.offset--}}Mb(o,t.nodeBefore,t.nodeAfter)}}}function Cb(t,e,n){const o=n.mapper.toViewPosition(e.position),i=o.nodeBefore,r=o.nodeAfter;Mb(n.writer,i,r)}function Tb(t,e,n){if(n.consumable.consume(e.viewItem,{name:!0})){const t=n.writer,o=this.conversionApi.store,i=t.createElement("listItem");o.indent=o.indent||0,t.setAttribute("listIndent",o.indent,i);const r=e.viewItem.parent&&"ol"==e.viewItem.parent.name?"numbered":"bulleted";t.setAttribute("listType",r,i),o.indent++;const s=n.splitToAllowedParent(i,e.modelCursor);if(!s)return;t.insert(i,s.position);let a=vs.createAfter(i);for(const t of e.viewItem.getChildren())"ul"==t.name||"ol"==t.name?a=n.convertItem(t,a).modelCursor:n.convertItem(t,vs.createAt(i,"end"));o.indent--,e.modelRange=new _s(e.modelCursor,a),s.cursorParent?e.modelCursor=vs.createAt(s.cursorParent):e.modelCursor=e.modelRange.end}}function Sb(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){const t=Array.from(e.viewItem.getChildren());for(const e of t)e.is("li")||e._remove()}}function Eb(t,e,n){if(n.consumable.test(e.viewItem,{name:!0})){if(0===e.viewItem.childCount)return;const t=[...e.viewItem.getChildren()];let n=!1,o=!0;for(const e of t)!n||e.is("ul")||e.is("ol")||e._remove(),e.is("text")?(o&&(e._data=e.data.replace(/^\s+/,"")),(!e.nextSibling||e.nextSibling.is("ul")||e.nextSibling.is("ol"))&&(e._data=e.data.replace(/\s+$/,""))):(e.is("ul")||e.is("ol"))&&(n=!0),o=!1}}function Pb(t,e){if(e.isPhantom)return;const n=e.modelPosition.nodeBefore;if(n&&n.is("listItem")){const t=e.mapper.toViewElement(n),o=t.getAncestors().find(t=>t.is("ul")||t.is("ol")),i=new Mo({startPosition:Fo.createAt(t,0)});for(const t of i){if("elementStart"==t.type&&t.item.is("li")){e.viewPosition=t.previousPosition;break}if("elementEnd"==t.type&&t.item==o){e.viewPosition=t.nextPosition;break}}}}function Ob(t,e){const n=e.viewPosition,o=n.parent,i=e.mapper;if("ul"==o.name||"ol"==o.name){if(n.isAtEnd){const t=i.toModelElement(n.nodeBefore),o=i.getModelLength(n.nodeBefore);e.modelPosition=vs.createBefore(t).getShiftedBy(o)}else{const t=i.toModelElement(n.nodeAfter);e.modelPosition=vs.createBefore(t)}t.stop()}else if("li"==o.name&&n.nodeBefore&&("ul"==n.nodeBefore.name||"ol"==n.nodeBefore.name)){const r=i.toModelElement(o);let s=1,a=n.nodeBefore;for(;a&&(a.is("ul")||a.is("ol"));)s+=i.getModelLength(a),a=a.previousSibling;e.modelPosition=vs.createBefore(r).getShiftedBy(s),t.stop()}}function Rb(t,[e,n]){let o=e.is("documentFragment")?e.getChild(0):e;if(o&&o.is("listItem")){const t=n.getFirstPosition();let e=null;if(t.parent.is("listItem")?e=t.parent:t.nodeBefore&&t.nodeBefore.is("listItem")&&(e=t.nodeBefore),e){const t=e.getAttribute("listIndent");if(t>0)for(;o&&o.is("listItem");)o._setAttribute("listIndent",o.getAttribute("listIndent")+t),o=o.nextSibling}}}function Ib(t,e){const n=!!e.sameIndent,o=!!e.smallerIndent,i=t instanceof ms?t.getAttribute("listIndent"):e.listIndent;let r=t instanceof ms?t.previousSibling:t.nodeBefore;for(;r&&"listItem"==r.name;){const t=r.getAttribute("listIndent");if(n&&i==t||o&&i>t)return r;r=r.previousSibling}return null}function Mb(t,e,n){return e&&n&&("ul"==e.name||"ol"==e.name)&&e.name==n.name?t.mergeContainers(Fo.createAfter(e)):null}function Fb(t,e,n){const o=e.parent,i=n.mapper,r=n.writer;let s=i.toViewPosition(vs.createBefore(t));const a=Ib(t,{sameIndent:!0,smallerIndent:!0}),c=t.previousSibling;if(a&&a.getAttribute("listIndent")==t.getAttribute("listIndent")){const t=i.toViewElement(a);s=r.breakContainer(Fo.createAfter(t))}else s=c&&"listItem"==c.name?i.toViewPosition(vs.createAt(c,"end")):i.toViewPosition(vs.createBefore(t));if(s=Nb(s),r.insert(s,o),c&&"listItem"==c.name){const t=i.toViewElement(c),n=new Mo({boundaries:new Vo(Fo.createAt(t,0),s),ignoreElementEnd:!0});for(const t of n)if(t.item.is("li")){const o=r.breakContainer(Fo.createBefore(t.item)),i=t.item.parent,s=Fo.createAt(e,"end");Mb(r,s.nodeBefore,s.nodeAfter),r.move(Vo.createOn(i),s),n.position=o}}else{const n=o.nextSibling;if(n&&(n.is("ul")||n.is("ol"))){let o=null;for(const e of n.getChildren()){const n=i.toModelElement(e);if(!(n&&n.getAttribute("listIndent")>t.getAttribute("listIndent")))break;o=e}o&&(r.breakContainer(Fo.createAfter(o)),r.move(Vo.createOn(o.parent),Fo.createAt(e,"end")))}}Mb(r,o,o.nextSibling),Mb(r,o.previousSibling,o)}function Vb(t,e,n,o,i){const r=Ib(e,{sameIndent:!0,smallerIndent:!0,listIndent:t}),s=i.mapper,a=i.writer,c=r?r.getAttribute("listIndent"):null;let l;if(r)if(c==t){const t=s.toViewElement(r).parent;l=Fo.createAfter(t)}else{const t=vs.createAt(r,"end");l=s.toViewPosition(t)}else l=n;l=Nb(l);for(const t of[...o.getChildren()])(t.is("ul")||t.is("ol"))&&(l=a.move(Vo.createOn(t),l).end,Mb(a,t,t.nextSibling),Mb(a,t.previousSibling,t))}function Nb(t){return t.getLastMatchingPosition(t=>t.item.is("uiElement"))}class Db extends Wh{static get requires(){return[$m]}init(){const t=this.editor;t.model.schema.register("listItem",{inheritAllFrom:"$block",allowAttributes:["listType","listIndent"]});const e=t.data,n=t.editing;t.model.document.registerPostFixer(e=>(function(t,e){const n=t.document.differ.getChanges(),o=new Map;let i=!1;for(const t of n)if("insert"==t.type&&"listItem"==t.name)r(t.position);else if("insert"==t.type&&"listItem"!=t.name){if("$text"!=t.name){const n=t.position.nodeAfter;n.hasAttribute("listIndent")&&(e.removeAttribute("listIndent",n),i=!0),n.hasAttribute("listType")&&(e.removeAttribute("listType",n),i=!0)}r(t.position.getShiftedBy(t.length))}else"remove"==t.type&&"listItem"==t.name?r(t.position):"attribute"==t.type&&"listIndent"==t.attributeKey?r(t.range.start):"attribute"==t.type&&"listType"==t.attributeKey&&r(t.range.start);for(const t of o.values())s(t),a(t);return i;function r(t){const e=t.nodeBefore;if(e&&e.is("listItem")){let n=e;if(o.has(n))return;for(;n.previousSibling&&n.previousSibling.is("listItem");)if(n=n.previousSibling,o.has(n))return;o.set(t.nodeBefore,n)}else{const e=t.nodeAfter;e&&e.is("listItem")&&o.set(e,e)}}function s(t){let n=0,o=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(r>n){let s;null===o?(o=r-n,s=n):(o>r&&(o=r),s=r-o),e.setAttribute("listIndent",s,t),i=!0}else o=null,n=t.getAttribute("listIndent")+1;t=t.nextSibling}}function a(t){let n=[],o=null;for(;t&&t.is("listItem");){const r=t.getAttribute("listIndent");if(o&&o.getAttribute("listIndent")>r&&(n=n.slice(0,r+1)),0!=r)if(n[r]){const o=n[r];t.getAttribute("listType")!=o&&(e.setAttribute("listType",o,t),i=!0)}else n[r]=t.getAttribute("listType");o=t,t=t.nextSibling}}})(t.model,e)),n.mapper.registerViewToModelLength("li",Bb),e.mapper.registerViewToModelLength("li",Bb),n.mapper.on("modelToViewPosition",Pb),n.mapper.on("viewToModelPosition",Ob),e.mapper.on("modelToViewPosition",Pb),n.downcastDispatcher.on("insert",Ab,{priority:"high"}),n.downcastDispatcher.on("insert:listItem",_b),e.downcastDispatcher.on("insert",Ab,{priority:"high"}),e.downcastDispatcher.on("insert:listItem",_b),n.downcastDispatcher.on("attribute:listType:listItem",yb),e.downcastDispatcher.on("attribute:listType:listItem",yb),n.downcastDispatcher.on("attribute:listIndent:listItem",xb),e.downcastDispatcher.on("attribute:listIndent:listItem",xb),n.downcastDispatcher.on("remove:listItem",kb),n.downcastDispatcher.on("remove",Cb,{priority:"low"}),e.downcastDispatcher.on("remove:listItem",kb),e.downcastDispatcher.on("remove",Cb,{priority:"low"}),e.upcastDispatcher.on("element:ul",Sb,{priority:"high"}),e.upcastDispatcher.on("element:ol",Sb,{priority:"high"}),e.upcastDispatcher.on("element:li",Eb,{priority:"high"}),e.upcastDispatcher.on("element:li",Tb),t.model.on("insertContent",Rb,{priority:"high"}),t.commands.add("numberedList",new mb(t,"numbered")),t.commands.add("bulletedList",new mb(t,"bulleted")),t.commands.add("indentList",new wb(t,"forward")),t.commands.add("outdentList",new wb(t,"backward"));const o=this.editor.editing.view.document;this.listenTo(o,"enter",(t,e)=>{const n=this.editor.model.document,o=n.selection.getLastPosition().parent;n.selection.isCollapsed&&"listItem"==o.name&&o.isEmpty&&(this.editor.execute("outdentList"),e.preventDefault(),t.stop())}),this.listenTo(o,"delete",(t,e)=>{if("backward"!==e.direction)return;const n=this.editor.model.document.selection;if(!n.isCollapsed)return;const o=n.getFirstPosition();if(!o.isAtStart)return;const i=o.parent;"listItem"===i.name&&(i.previousSibling&&"listItem"===i.previousSibling.name||(this.editor.execute("outdentList"),e.preventDefault(),t.stop()))},{priority:"high"});const i=t=>(e,n)=>{this.editor.commands.get(t).isEnabled&&(this.editor.execute(t),n())};this.editor.keystrokes.set("Tab",i("indentList")),this.editor.keystrokes.set("Shift+Tab",i("outdentList"))}}function Bb(t){let e=1;for(const n of t.getChildren())if("ul"==n.name||"ol"==n.name)for(const t of n.getChildren())e+=Bb(t);return e}var Lb=n(30),jb=n.n(Lb),zb=n(31),qb=n.n(zb);class Ub extends Wh{init(){const t=this.editor.t;this._addButton("numberedList",t("n"),jb.a),this._addButton("bulletedList",t("o"),qb.a)}_addButton(t,e,n){const o=this.editor;o.ui.componentFactory.add(t,i=>{const r=o.commands.get(t),s=new Of(i);return s.set({label:e,icon:n,tooltip:!0}),s.bind("isOn","isEnabled").to(r,"value","isEnabled"),this.listenTo(s,"execute",()=>o.execute(t)),s})}}n.d(e,"default",function(){return Wb});class Wb extends Uh{}Wb.builtinPlugins=[class extends Wh{static get requires(){return[Gh,tf,rf,yf,Nf]}static get pluginName(){return"Essentials"}},class extends Wh{static get requires(){return[Lf]}static get pluginName(){return"CKFinderUploadAdapter"}init(){const t=this.editor.config.get("ckfinder.uploadUrl");t&&(this.editor.plugins.get(Lf).createUploadAdapter=(e=>new Hf(e,t,this.editor.t)))}},class extends Wh{static get pluginName(){return"Autoformat"}afterInit(){this._addListAutoformats(),this._addBasicStylesAutoformats(),this._addHeadingAutoformats(),this._addBlockQuoteAutoformats()}_addListAutoformats(){const t=this.editor.commands;t.get("bulletedList")&&new $f(this.editor,/^[*-]\s$/,"bulletedList"),t.get("numberedList")&&new $f(this.editor,/^\d+[.|)]\s$/,"numberedList")}_addBasicStylesAutoformats(){const t=this.editor.commands;t.get("bold")&&(new Kf(this.editor,/(\*\*)([^*]+)(\*\*)$/g,"bold"),new Kf(this.editor,/(__)([^_]+)(__)$/g,"bold")),t.get("italic")&&(new Kf(this.editor,/(?:^|[^*])(\*)([^*_]+)(\*)$/g,"italic"),new Kf(this.editor,/(?:^|[^_])(_)([^_]+)(_)$/g,"italic")),t.get("code")&&new Kf(this.editor,/(`)([^`]+)(`)$/g,"code")}_addHeadingAutoformats(){const t=this.editor.commands.get("heading");t&&t.modelElements.filter(t=>t.match(/^heading[1-6]$/)).forEach(t=>{const e=t[7],n=new RegExp(`^(#{${e}})\\s$`);new $f(this.editor,n,()=>{this.editor.execute("heading",{value:t})})})}_addBlockQuoteAutoformats(){this.editor.commands.get("blockQuote")&&new $f(this.editor,/^>\s$/,"blockQuote")}},class extends Wh{static get requires(){return[Yf,ep]}static get pluginName(){return"Bold"}},class extends Wh{static get requires(){return[op,ap]}static get pluginName(){return"Italic"}},class extends Wh{static get requires(){return[fp,gp]}static get pluginName(){return"BlockQuote"}},class extends Wh{static get requires(){return[Ap,ym,Um]}static get pluginName(){return"EasyImage"}},class extends Wh{static get requires(){return[Xm,dg]}static get pluginName(){return"Heading"}},ym,class extends Wh{static get requires(){return[wg]}static get pluginName(){return"ImageCaption"}},class extends Wh{static get requires(){return[Dg,Bg]}static get pluginName(){return"ImageStyle"}},class extends Wh{static get requires(){return[mm]}static get pluginName(){return"ImageToolbar"}init(){const t=this.editor,e=t.plugins.get("BalloonToolbar");e&&this.listenTo(e,"show",e=>{Up(t.editing.view.document.selection)&&e.stop()},{priority:"high"})}afterInit(){const t=this.editor,e=t.config.get("image.toolbar");e&&e.length&&(this._balloon=this.editor.plugins.get("ContextualBalloon"),this._toolbar=new jh,this._toolbar.fillFromConfig(e,t.ui.componentFactory),this.listenTo(t.ui,"update",()=>{this._checkIsVisible()}),this.listenTo(t.ui.focusTracker,"change:isFocused",()=>{this._checkIsVisible()},{priority:"low"}))}_checkIsVisible(){const t=this.editor;t.ui.focusTracker.isFocused&&Up(t.editing.view.document.selection)?this._showToolbar():this._hideToolbar()}_showToolbar(){const t=this.editor;this._isVisible?wm(t):this._balloon.hasView(this._toolbar)||this._balloon.add({view:this._toolbar,position:vm(t),balloonClassName:Lg})}_hideToolbar(){this._isVisible&&this._balloon.remove(this._toolbar)}get _isVisible(){return this._balloon.visibleView==this._toolbar}},Um,class extends Wh{static get requires(){return[nb,fb]}static get pluginName(){return"Link"}},class extends Wh{static get requires(){return[Db,Ub]}static get pluginName(){return"List"}},$m],Wb.defaultConfig={toolbar:{items:["heading","|","bold","italic","link","bulletedList","numberedList","imageUpload","blockQuote","undo","redo"]},image:{toolbar:["imageStyle:full","imageStyle:side","|","imageTextAlternative"]},language:"en"}}]).default});
	//# sourceMappingURL=ckeditor.js.map

/***/ })
/******/ ]);