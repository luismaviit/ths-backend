export const resolvers = {
    Query: {
        hello: () => {
            return 'hello with graphql';
        },
        greet() {
            return 2;
        }
    }
};

const countryResolvers = require('./country');
const stateResolvers = require('./state');
const cityResolvers = require('./city');
const userResolvers = require('./user');
const statusResolvers = require('./');
const companyResolvers = require('./company');

module.exports = [
  countryResolvers,
  stateResolvers,
  cityResolvers,
  userResolvers,
  statusResolvers,
  companyResolvers,
];
