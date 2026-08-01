const app = require("./app")
const dotenv = require("dotenv")
const dbConnection = require("./config/db")

dotenv.config({
    path: "./backend/config/config.env"
})

const startServer = async () => {
    try {
        // Wait for database connection
        await dbConnection();

        // Start server only after DB is connected
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on PORT: ${process.env.PORT}`);
        });
    } catch (error) {
        console.log("Failed to connect to database:", error.message);
        process.exit(1);
    }
};

startServer();