import express from "express";
import { graphqlHTTP } from 'express-graphql';
const cors = require('cors');
import schema from '../graphql/schemas/index';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.json({
        message: 'THS BACKEND'
    })
});    


app.use('/graphql', graphqlHTTP({
    qraphql: true,
    schema: schema
    
}));
app.listen(3005, () => console.log('🚀 Server on port 3005'));