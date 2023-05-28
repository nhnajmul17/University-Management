import mongoose from "mongoose";
import app from './app';
import config from "./config";




async function boostrap() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log("🛢 Mongodb Database connected")
        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`)
        })
    } catch (error) {
        console.log("Failed to connect", error)
    }

}

boostrap()