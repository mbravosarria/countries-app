import type { NextApiRequest, NextApiResponse } from 'next'
import countries from '@/data.json'

type Data = {
  data: Array<any>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name } = req.query
  const answer = countries.map((item) => {
    if (name && item.name.indexOf(name?.toString()) !== -1) return item
  })
  res.status(200).json({ data: answer })
}
