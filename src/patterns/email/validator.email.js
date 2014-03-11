/*
 * validator plugin
 *
 * Copyright (c) 2013 Filament Group, Inc.
 * Licensed under MIT
 */

/* global Validator:true */
(function( Validator, $, window, undefined ) {

	Validator.prototype.validateemail = function( address ){
		var validator = this.data.config.validator,
			result = false;

		if ( new RegExp( validator.email.pattern ).test( address ) ) {
			result = address;
		}

		return result;
	};
}( this.Validator, this.jQuery, this ));