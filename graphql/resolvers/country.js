const { Country, State } = require('../../db/models');
const { AuthenticationError } = require('apollo-server-express')

module.exports = {
  Mutation: {

    async CreateCountry(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      return Country.create(args);
    },

    async UpdateCountry(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      const country = await Country.findByPk(args.id)
      return country.update(args)
    },

    async DeleteCountry(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      Country.destroy({ where:{ id:args.id } })
      return true
    },

  },

  Query: {
    async getAllCountries(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
          return Country.findAll(
              {
                  where: args,
                  include:
                      { model: State, as: 'State' }
              });
    },
  },

};
