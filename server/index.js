const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const {MongoClient, ServerApiVersion, Timestamp, ObjectId} = require("mongodb");
const jwt = require("jsonwebtoken");

const port = process.env.PORT || 8000;

// middleware
const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// verify token
const verifyToken = async (req, res, next) => {
  const token = req.cookies?.token;
  console.log(token);
  if (!token) {
    return res.status(401).send({message: "unauthorized access"});
  }
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).send({message: "unauthorized access"});
    }
    req.user = decoded;
    next();
  });
};
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.aeb0oh8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    const processCollection = client
      .db("Donate4Life")
      .collection("Donation-process");
    const bloodDonationCollection = client
      .db("Donate4Life")
      .collection("all-donation-post");
    const bloodRequestCollection = client
      .db("Donate4Life")
      .collection("all-request-post");
    const usersCollection = client.db("Donate4Life").collection("users");
    const districtCollection = client.db("Donate4Life").collection("districts");
    const upazilaCollection = client.db("Donate4Life").collection("upazilas");

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "365d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({success: true});
    });

    // logout
    app.get("/logout", async (req, res) => {
      try {
        res
          .clearCookie("token", {
            maxAge: 0,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
          })
          .send({success: true});
        console.log("logout successful");
      } catch (err) {
        res.status(500).send(err);
      }
    });

    app.post("/donation-post", async (req, res) => {
      const bloodDonationPost = req.body;
      const result = await bloodDonationCollection.insertOne(bloodDonationPost);
      res.send(result);
    });

    app.post("/request-post", async (req, res) => {
      const bloodRequestPost = req.body;
      const result = await bloodRequestCollection.insertOne(bloodRequestPost);
      res.send(result);
    });

    // save user to database
    app.put("/user", async (req, res) => {
      const user = req.body;
      const query = {email: user?.email};

      // check existing user
      const isExist = await usersCollection.findOne(query);
      if (isExist) {
        if (user.status === "requested") {
          const result = await usersCollection.updateOne(query, {
            $set: {status: user?.status},
          });
          return res.send(result);
        } else {
          return res.send(isExist);
        }
      }

      const options = {upsert: true};
      const updatedDoc = {
        $set: {
          ...user,
          Timestamp: Date.now(),
        },
      };
      const result = await usersCollection.updateOne(
        query,
        updatedDoc,
        options
      );
      res.send(result);
    });

    // update use role
    app.patch("/users/role/:email", async (req, res) => {
      const email = req.params.email;
      const user = req.body;
      const query = {email};
      const updatedDoc = {
        $set: {...user, Timestamp: Date.now()},
      };
      const result = await usersCollection.updateOne(query, updatedDoc);
      res.send(result);
    });

    // Update recipient post status
    app.patch("/post/status/:id", async (req, res) => {
      const id = req.params.id;
      const query = {_id: new ObjectId(id)}; // Use the ObjectId

      const updatedDoc = {
        $set: {status: "approved"}, // Update status to "approved"
      };

      try {
        const result = await bloodRequestCollection.updateOne(
          query,
          updatedDoc
        );
        res.send(result);
      } catch (error) {
        res.status(500).send({error: "Failed to update post status"});
      }
    });

    // app.patch("/post/status/:email", async (req, res) => {
    //   const email = req.params.email;
    //   const post = req.body;
    //   const query = {email};
    //   const updatedDoc = {
    //     $set: {...post},
    //   };
    //   const result = await bloodRequestCollection.updateOne(query, updatedDoc);
    //   res.send(result);
    // });

    // get all users
    app.get("/users", async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    // get a single user info
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      const result = await usersCollection.findOne({email});
      res.send(result);
    });

    // get all post
    app.get("/all-post", async (req, res) => {
      const result = await bloodRequestCollection.find().toArray();
      res.send(result);
    });

    // get districts data
    app.get("/districts", async (req, res) => {
      const result = await districtCollection.find().toArray();
      res.send(result);
    });

    // get upazilas data
    app.get("/upazilas", async (req, res) => {
      const result = await upazilaCollection.find().toArray();
      res.send(result);
    });

    app.get("/donationProcess", async (req, res) => {
      const result = await processCollection.find().toArray();
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ping: 1});
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Donate4Life");
});

app.listen(port, () => {
  console.log(`Donate4Life running on prot ${port}`);
});
