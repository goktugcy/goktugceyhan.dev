import { NextApiRequest, NextApiResponse } from 'next';

import { supabase } from '@/common/libs/supabase';

interface ResponseData {
  views: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { slug } = req.query;

  if (req.method === 'GET') {
    try {
      const contentMeta = await supabase
        .from('content_meta')
        .select('views')
        .eq('slug', slug);

      const contentViewsCount = contentMeta.count;

      const response: ResponseData = {
        views: contentViewsCount as number,
      };

      return res.json(response);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch content meta' });
    }
  } else if (req.method === 'POST') {
    try {
      const contentMeta = await supabase
        .from('content_meta')
        .select('views')
        .eq('slug', slug);

      return res.json(contentMeta);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update views count' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
