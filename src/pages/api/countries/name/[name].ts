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
  const answer = countries.filter(
    (item) =>
      name &&
      item.name.toLowerCase().indexOf(name?.toString().toLowerCase()) !== -1
  )
  res.status(200).json({ data: answer })
}
