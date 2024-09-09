This project uses the following dependencies:

axios: ^1.4.0
body-parser: ^1.19.0
cookie-parser: ^1.4.5
cors: ^2.8.5
dotenv: ^16.3.1
express: ^4.18.2
express-session: ^1.17.3
google-auth-library: ^9.1.0
googleapis: ^123.0.0
morgan: ^1.10.0
pg: ^8.11.1
pg-hstore: ^2.3.4
sequelize: ^6.32.1
Development dependencies:

@types/express-session: ^1.17.10
nodemon: ^3.0.1
Installation
To set up the backend server, follow these steps:

Clone the Repository:

bash

git clone <repository-url>
cd <repository-directory>
Install Dependencies:

Make sure you have Node.js installed. Then, run the following command to install the necessary packages:

bash

In the project directory, you can run:
### `npm install --legacy-peer-deps`
Configure Environment Variables:

Create a .env file in the root directory of the project and add the necessary environment variables. Example:

makefile

PORT=5432
DATABASE_URL=your-database-url
SESSION_SECRET=your-session-secret
Start the Server:

Use the following command to start the server with Nodemon:

bash

npm start
The server will start and listen on the port specified in the .env file.

the endpoint checkBorderCountries dont work becouse the documentation is not up to this date 