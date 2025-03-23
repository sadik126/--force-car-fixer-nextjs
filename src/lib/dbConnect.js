// import { MongoClient, ServerApiVersion } from 'mongodb';

// const uri = process.env.MONGODB_URI;

// if (!uri) {
//     throw new Error('MONGODB_URI is not defined');
// }

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// export default async function dbConnect(collectionName) {
//     if (typeof window !== 'undefined') {
//         throw new Error('MongoDB can only be used on the server-side');
//     }
//     return client.db('Car_fixer').collection(collectionName);
// }