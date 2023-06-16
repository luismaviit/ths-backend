const { Company, City,  State, Country } = require('../../db/models');
const { AuthenticationError } = require('apollo-server-express')
const { Op } = require('sequelize');

module.exports = {
  Mutation: {

    async CreateCompany(root, _, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      const company = await Company.create(args)
      company.addUser(args.UserId)
      return company
    },

    async UpdateCompany(root, _, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      const company = await Company.findByPk(args.id)
      company.setUser(args.UserId)
      return company.update(_)
    },

    async DeleteCompany(root, _, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      Company.destroy({ where: { id: args.id } })
      return true
    },
  },

  Query: {

    async getAllCompaniesName(root, _, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      let company = await CompanyUser.findAll({
        where: { UserId: context.user.id },
          include: [
              {
                  model: Company,
                  attributes: ['name', 'id']
              }],
      });
      const data = JSON.parse(JSON.stringify(company))
      const result = data.map(company => {
        return company.Company
      })
      return result
    },

    async getAllCompany(root, _, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
      let company = await Company.findAll({
        where: args,
        attributes: ['id', 'name', 'img' ],
        order: [['name', 'ASC']],
        include: [{
          model: City,
          as: 'City',
          attributes: ['name'],
          include: [{
            model: State,
            as: "State",
            attributes: ['name'],
            include: [{
              model: Country,
              as: "Country",
              attributes: ['name'],
            }]
          }]
        }],
      });
      const data = JSON.parse(JSON.stringify(company))
      const result = data.map(company => {
        return {
          ...company,
          City: company.City.name,
          State: company.City.State.name,
          Country: company.City.State.Country.name
        }
      })
      return result
    },

    async getCompaniesByName(root, _, context) {
      if (!context.user) throw new AuthenticationError('Session expired due to inactivity');
        return Company.findAll(
            { where: { name: { [Op.iLike]: '%' + args.name + '%' } } }
        );
    },
  },
};
