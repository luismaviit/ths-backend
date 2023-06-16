const { City, State, Country, User } = require('../../db/models');
const { AuthenticationError } = require('apollo-server-express')

module.exports = {
  Mutation: {

    async CreateCity(root, _, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      return City.create(args);
    },

    async UpdateCity(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      const city = await City.findByPk(args.id)
      return city.update(args)
    },

    async DeleteCity(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      City.destroy({ where:{ id:args.id } })
      return true
    },

  },

  Query: {
    async getAllCities(root, args, context) {
    if (!context.user) throw new AuthenticationError('Session expired due to inactivity')
          return City.findAll(
              {
                  where: args,
                  include: [
                      { model: State, as: 'State' },
                      { model: Company, as: 'Company' },
                      { model: User, as: 'User' }]
              });
    },
  },

};
