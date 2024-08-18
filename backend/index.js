const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000

///middleware
app.use(cors())
app.use(express.json())



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cards.txo6j.mongodb.net/?retryWrites=true&w=majority&appName=Cards`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const CardCollection = client.db("CardDB").collection("cards");
        // const sampleData = [
        //     { title: "Branches", description: "Abstract Branches lets you manage, version, and document your designs in one place." },
        //     { title: "Manage your account", description: "Configure your account settings, such as your email, profile details, and password." },
        //     { title: "Manage organizations, teams, and projects", description: "Use Abstract organizations, teams, and projects to organize your people and your work." },
        //     { title: "Manage billing", description: "Change subscriptions and payment details." },
        //     { title: "Authenticate to Abstract", description: "Set up and configure SSO, SCIM, and Just-in-Time provisioning." },
        //     { title: "Abstract support", description: "Get in touch with a human." },
        // ];

        // const result = await CardCollection.insertMany(sampleData);
        // console.log(`${result.insertedCount} documents were inserted.`);

        // Create a new card
        app.post('/api/cards', async (req, res) => {
            try {
                const { title, description } = req.body;
                if (!title || !description) {
                    return res.status(400).json({ error: 'Title and description are required' });
                }

                const card = { title, description };
                const response = await CardCollection.collection('cards');
                const result = response.insertOne(card)

                res.status(201).json({ message: 'Card created', card: result.ops[0] });
            } catch (error) {
                res.status(500).json({ error: 'Failed to create card' });
            }
        });

        // Get all cards
        app.get('/api/cards', async (req, res) => {
            // console.log('hello')
            try {
                const response = CardCollection.find()
                const cards = await response.toArray()
                console.log(cards)
                res.status(200).json(cards);
            } catch (error) {
                res.status(500).json({ error: 'Failed to retrieve cards' });
            }
        });

        // Get a specific card by title
        app.get('/api/cards/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const card = await CardCollection.findOne({ _id: new ObjectId(id) });
                if (!card) {
                    return res.status(404).send({ message: 'Card not found' });
                }
                res.status(200).json(card);
            } catch (error) {
                console.error('Error fetching card by ID:', error);
                res.status(500).send({ message: 'Internal Server Error' });
            }
        });


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Simple crud i running')
})

app.listen(port, () => {
    console.log("SImple crud is running on" + port)
})