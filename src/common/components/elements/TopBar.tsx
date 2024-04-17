import { useEffect, useState } from 'react';

import { supabase } from '@/common/libs/supabase';

import Image from './Image';

export const announcement = async () => {
  const { data, error } = await supabase
    .from('announcements')
    .select('message, url, is_active')
    .eq('is_active', true)
    .single();

  if (error) {
    return null;
  }

  return data;
};

const TopBar = () => {
  const [announcementData, setAnnouncementData] = useState({
    message: '',
    url: '',
  });

  useEffect(() => {
    const fetchAnnouncement = async () => {
      const data = await announcement();
      if (data) {
        setAnnouncementData(data);
      }
    };

    fetchAnnouncement();
  }, []);

  if (!announcementData.message) {
    return null;
  }
  return (
    <div className='hidden xl:flex gap-x-2 items-center justify-center p-2.5 shadow-lg backdrop-blur-2xl bg-no-repeat bg-cover text-sm dark:text-neutral-300 dark:border-b dark:border-neutral-800'>
      <span>{announcementData?.message}</span>
      <a
        href={announcementData.url}
        target='_blank'
        className='ml-0.5 underline'
      >
        Learn more
      </a>
      <Image
        src='/images/dot_new_animated.svg'
        width={30}
        height={30}
        alt='new'
      />
    </div>
  );
};

export default TopBar;
