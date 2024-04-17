/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '@/common/libs/supabase';

type Data = {
  status: boolean;
  data?: any;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await supabase.from('projects').select('*');
    res.status(200).json({ status: true, data: response });
  } catch (error) {
    res.status(200).json({ status: false, error: error });
  }
}
