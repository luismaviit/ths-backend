const { State, City, Country } = require('../../db/models');
const { AuthenticationError } = require('apollo-server-express')


module.exports = {
  Mutation: {

    async CreateState(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      return State.create(args);
    },

    async UpdateState(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      const state = await State.findByPk(args.id)
      return state.update(args)
    },

    async DeleteState(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      State.destroy({ where:{ id:args.id } })
      return true
    },

  },

  Query: {
    async getAllStates(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
          return State.findAll(
              {
                  where: args,
                  include: [
                      { model: Country, as: 'Country' },
                      { model: City, as: 'City' }]
              });
    },
  },

};
