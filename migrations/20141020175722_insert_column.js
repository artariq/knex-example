'use strict';

exports.up = function(knex, Promise) {
	knex.schema.dropTable('users');


};

exports.down = function(knex, Promise) {
  
};
