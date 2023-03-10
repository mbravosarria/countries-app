import type { NextApiRequest, NextApiResponse } from 'next'
import countries from '@/data.json'

type Data = {
  data: Array<any>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { region } = req.query
  const answer = countries.filter((item) => item.region === region)
  res.status(200).json({ data: answer })
}
