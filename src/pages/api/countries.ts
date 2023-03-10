import type { NextApiRequest, NextApiResponse } from 'next'
import countries from '@/data.json'

type Data = {
  data: Array<any>
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ data: countries })
}
