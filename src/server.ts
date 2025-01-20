import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, World!');
});

const PORT = process.env.PORT || 4000;

let server: any;
export const startServer = () => {
  server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  return server;
};

export const stopServer = () => {
  server.close();
};

export default app;
