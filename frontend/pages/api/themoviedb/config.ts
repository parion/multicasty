import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  const key = 'bccf8ed0bef463be828e4c5d62d0baba';
  const movieConfig = await fetch(`https://api.themoviedb.org/3/configuration?api_key=${key}`)
    .then((movieDbRes) => movieDbRes.json);
  res.status(200).json({ movieConfig });
};
