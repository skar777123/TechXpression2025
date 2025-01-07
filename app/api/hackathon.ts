import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../db/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const users = await prisma.hackathon.findMany();
    res.json(users );
  }
}