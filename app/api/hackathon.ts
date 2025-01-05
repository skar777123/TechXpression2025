"use server";
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/db/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const hackathons = await prisma.hackathon.findMany();
    res.status(200).json({hackathons});
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch hackathons' });
  }
}