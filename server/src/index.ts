import server from "./app";
import { connectDB } from "./db";

connectDB();
server.listen(3000)
console.log('Server listen on port 3000')