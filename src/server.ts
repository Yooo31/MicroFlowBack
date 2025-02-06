import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 4000;

let server: ReturnType<typeof app.listen>;

app.get('/', (_req: Request, res: Response): void => {
  res.send('Hello, World!');
});

export const startServer = (): typeof server => {
  server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
  return server;
};

export const stopServer = (): void => {
  server.close();
};

export default app;
