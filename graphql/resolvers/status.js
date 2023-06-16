const { Status } = require('../../db/models');
const { Company } = require('../../db/models');
const { AuthenticationError } = require('apollo-server-express')

module.exports = {
  Mutation: {

    async CreateStatus(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      return Status.create(args);
    },

    async UpdateStatus(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      const status = await Status.findByPk(args.id)
      return status.update(args)
    },

    async DeleteStatus(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      Status.destroy({ where:{ id:args.id } })
      return true
    },

  },

  Query: {
    async getAllStatus(root, args, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      return Status.findAll({ where:args, include:{model:Company, as:'Company'} });
    },
  },

};
