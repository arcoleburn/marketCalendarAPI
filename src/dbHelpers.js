'use strict';

const CalService = {
  getCalendar(knex, start, end) {
    return knex
      .select('*')
      .from('market_calendar')
      .where('date', '>=', start)
      .where('date', '<=', end);
  },
  
};


module.exports = CalService 