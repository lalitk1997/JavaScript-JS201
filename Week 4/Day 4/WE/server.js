// PORT NUMBER
const PORT = 3000;
// REQUIRE : SAME AS IMPORT/EXPORT
const path = require('path');
// json-server INSTALED PACKAGE IMPORT
const jsonServer = require('json-server');
// CREATE SERVER
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api', router);
server.listen(PORT, () => console.log(`JSON Server is running on port ${PORT}`));