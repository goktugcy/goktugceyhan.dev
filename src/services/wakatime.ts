/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

const STATS_ENDPOINT = 'https://wakatime.com/api/v1/users/current/stats';
const ALL_TIME_SINCE_TODAY =
  'https://wakatime.com/api/v1/users/current/all_time_since_today';

export const getReadStats = async (): Promise<{
  status: number;
  data: any;
}> => {
  const response = await axios.get(`${STATS_ENDPOINT}/last_30_days`, {
    params: {
      api_key: process.env.WAKATIME_API_KEY,
    },
  });

  const status = response.status;
  if (status > 400) return { status, data: [] };

  const getData = response.data;
  const start_date = getData?.data?.start ?? null;
  const end_date = getData?.data?.end ?? null;
  const last_update = getData?.data?.modified_at ?? null;

  const categories = getData?.data?.categories ?? null;

  const best_day = {
    date: getData?.data?.best_day?.date ?? null,
    text: getData?.data?.best_day?.text ?? null,
  };
  const human_readable_daily_average =
    getData?.data?.human_readable_daily_average_including_other_language ??
    null;
  const human_readable_total =
    getData?.data?.human_readable_total_including_other_language ?? null;

  const languages = getData?.data?.languages?.slice(0, 3) ?? [];
  const editors = getData?.data?.editors ?? [];

  return {
    status,
    data: {
      last_update,
      start_date,
      end_date,
      categories,
      best_day,
      human_readable_daily_average,
      human_readable_total,
      languages,
      editors,
    },
  };
};

export const getALLTimeSinceToday = async (): Promise<{
  status: number;
  data: any;
}> => {
  const response = await axios.get(ALL_TIME_SINCE_TODAY, {
    params: {
      api_key: process.env.WAKATIME_API_KEY,
    },
  });

  const status = response.status;

  if (status > 400) return { status, data: {} };

  const getData = response.data;

  const data = {
    text: getData?.data?.text,
    total_seconds: getData?.data?.total_seconds,
  };

  return {
    status,
    data,
  };
};
