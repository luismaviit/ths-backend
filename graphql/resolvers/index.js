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