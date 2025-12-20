// import bcrypt from "bcryptjs";
// import { v4 as uuidv4 } from "uuid";
// import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
// import { dynamo } from "../config/dynamo.js";
// import { generateToken } from "../config/jwt.js";

// const USERS_TABLE = process.env.DYNAMO_USERS_TABLE;

// /**
//  * SIGN UP
//  */
// export const signup = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     if (!name || !email || !password)
//       return res.status(400).json({ message: "All fields required" });

//     // Check if email already exists
//     const existingUser = await dynamo.send(
//       new ScanCommand({
//         TableName: USERS_TABLE,
//         FilterExpression: "email = :email",
//         ExpressionAttributeValues: {
//           ":email": email,
//         },
//       })
//     );

//     if (existingUser.Items.length > 0)
//       return res.status(409).json({ message: "Email already registered" });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = {
//       userId: uuidv4(),
//       name,
//       email,
//       password: hashedPassword,
//       plan: "FREE",
//       createdAt: new Date().toISOString(),
//     };

//     await dynamo.send(
//       new PutCommand({
//         TableName: USERS_TABLE,
//         Item: user,
//       })
//     );

//     const token = generateToken({
//       userId: user.userId,
//       email: user.email,
//       plan: user.plan,
//     });

//     res.status(201).json({
//       message: "Signup successful",
//       token,
//       user: {
//         userId: user.userId,
//         name: user.name,
//         email: user.email,
//         plan: user.plan,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Signup failed" });
//   }
// };

// /**
//  * LOGIN
//  */
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const result = await dynamo.send(
//       new ScanCommand({
//         TableName: USERS_TABLE,
//         FilterExpression: "email = :email",
//         ExpressionAttributeValues: {
//           ":email": email,
//         },
//       })
//     );

//     if (result.Items.length === 0)
//       return res.status(401).json({ message: "Invalid credentials" });

//     const user = result.Items[0];

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch)
//       return res.status(401).json({ message: "Invalid credentials" });

//     const token = generateToken({
//       userId: user.userId,
//       email: user.email,
//       plan: user.plan,
//     });

//     res.json({
//       message: "Login successful",
//       token,
//       user: {
//         userId: user.userId,
//         name: user.name,
//         email: user.email,
//         plan: user.plan,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Login failed" });
//   }
// };


// import bcrypt from "bcryptjs";
// import { v4 as uuidv4 } from "uuid";
// import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
// import { dynamo } from "../config/dynamo.js";
// import { generateToken } from "../config/jwt.js";

// const TABLE = process.env.DYNAMO_USERS_TABLE;
// console.log("USERS TABLE =", process.env.DYNAMO_USERS_TABLE);


// export const signup = async (req, res) => {
//   const { name, email, password } = req.body;
//   if (!name || !email || !password)
//     return res.status(400).json({ message: "All fields required" });

//   const existing = await dynamo.send(
//     new ScanCommand({
//       TableName: TABLE,
//       FilterExpression: "email = :e",
//       ExpressionAttributeValues: { ":e": email },
//     })
//   );

//   if (existing.Items.length)
//     return res.status(409).json({ message: "Email already exists" });

//   const user = {
//     userId: uuidv4(),
//     name,
//     email,
//     password: await bcrypt.hash(password, 10),
//     plan: "FREE",
//     createdAt: new Date().toISOString(),
//   };

//   await dynamo.send(new PutCommand({ TableName: TABLE, Item: user }));

//   const token = generateToken({
//     userId: user.userId,
//     email: user.email,
//     plan: user.plan,
//   });

//   res.status(201).json({ token, user });
// };

// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   const result = await dynamo.send(
//     new ScanCommand({
//       TableName: TABLE,
//       FilterExpression: "email = :e",
//       ExpressionAttributeValues: { ":e": email },
//     })
//   );

//   const user = result.Items[0];
//   if (!user || !(await bcrypt.compare(password, user.password)))
//     return res.status(401).json({ message: "Invalid credentials" });

//   const token = generateToken({
//     userId: user.userId,
//     email: user.email,
//     plan: user.plan,
//   });

//   res.json({ token, user });
// };

import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { dynamo } from "../config/dynamo.js";
import { generateToken } from "../config/jwt.js";


export const signup = async (req, res) => {
  // Define TABLE inside the function
  const TABLE = process.env.DYNAMO_USERS_TABLE;
  console.log("USERS TABLE (signup) =", TABLE);
  
  if (!TABLE) {
    console.error("ERROR: DYNAMO_USERS_TABLE is not defined!");
    return res.status(500).json({ message: "Server configuration error" });
  }
  
  const { name, email, password } = req.body;
  if (!name || !email || !password)
    return res.status(400).json({ message: "All fields required" });

  const existing = await dynamo.send(
    new ScanCommand({
      TableName: TABLE,
      FilterExpression: "email = :e",
      ExpressionAttributeValues: { ":e": email },
    })
  );

  if (existing.Items.length)
    return res.status(409).json({ message: "Email already exists" });

  const user = {
    userId: uuidv4(),
    name,
    email,
    password: await bcrypt.hash(password, 10),
    plan: "FREE",
    createdAt: new Date().toISOString(),
  };

  await dynamo.send(new PutCommand({ TableName: TABLE, Item: user }));

  const token = generateToken({
    userId: user.userId,
    email: user.email,
    plan: user.plan,
  });

  res.status(201).json({ token, user });
};

export const login = async (req, res) => {
  // Define TABLE inside the function
  const TABLE = process.env.DYNAMO_USERS_TABLE;
  console.log("USERS TABLE (login) =", TABLE);
  
  if (!TABLE) {
    console.error("ERROR: DYNAMO_USERS_TABLE is not defined!");
    return res.status(500).json({ message: "Server configuration error" });
  }
  
  const { email, password } = req.body;

  const result = await dynamo.send(
    new ScanCommand({
      TableName: TABLE,
      FilterExpression: "email = :e",
      ExpressionAttributeValues: { ":e": email },
    })
  );

  const user = result.Items[0];
  if (!user || !(await bcrypt.compare(password, user.password)))
    return res.status(401).json({ message: "Invalid credentials" });

  const token = generateToken({
    userId: user.userId,
    email: user.email,
    plan: user.plan,
  });

  res.json({ token, user });
};