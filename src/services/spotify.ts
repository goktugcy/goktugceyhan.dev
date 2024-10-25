/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

import { PAIR_DEVICES } from '@/common/constant/devices';
import { supabase } from '@/common/libs/supabase';
import {
  DeviceDataProps,
  DeviceResponseProps,
  NowPlayingResponseProps,
  SongProps,
} from '@/common/types/spotify';

const BASE_URL = 'https://api.spotify.com/v1';
const AVAILABLE_DEVICES_ENDPOINT = `${BASE_URL}/me/player/devices`;
const NOW_PLAYING_ENDPOINT = `${BASE_URL}/me/player/currently-playing`;

let currentToken = '';

const updateToken = async () => {
  const { data } = await supabase
    .from('spotify_token')
    .select('token')
    .order('created_at', { ascending: false })
    .limit(1);

  currentToken = data?.[0]?.token || '';
};

// Initialize token on startup
updateToken();

// Subscribe to real-time updates
supabase
  .channel('custom-update-channel')
  .on(
    'postgres_changes',
    { event: 'UPDATE', schema: 'public', table: 'spotify_token' },
    (payload) => {
      console.log('Token updated', payload);
      updateToken();
    }
  )
  .subscribe();

export const getAvailableDevices = async (): Promise<DeviceResponseProps> => {
  try {
    const response = await axios.get(AVAILABLE_DEVICES_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });

    const status = response.status;

    if (status === 204 || status > 400) {
      return { status, data: [] };
    }

    const responseData: DeviceDataProps = response.data;

    const devices = responseData?.devices?.map((device) => ({
      name: device.name,
      is_active: device.is_active,
      type: device.type,
      model: PAIR_DEVICES[device?.type]?.model || 'Unknown Device',
      id: PAIR_DEVICES[device?.type]?.id || 'goktugcy-device',
    }));

    return {
      status,
      data: devices,
    };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const getNowPlaying = async (): Promise<NowPlayingResponseProps> => {
  try {
    const response = await axios.get(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${currentToken}`,
      },
    });

    const status = response.status;

    if (status === 204 || status > 400) {
      return { status, isPlaying: false, data: null };
    }

    const responseData: SongProps = response.data;

    if (!responseData.item) {
      return { status, isPlaying: false, data: null };
    }

    const isPlaying: boolean = responseData?.is_playing;
    const album: string = responseData?.item?.album.name ?? '';
    const albumImageUrl: string | undefined =
      responseData?.item?.album?.images?.find((image) => image?.width === 640)
        ?.url ?? undefined;
    const artist: string =
      responseData?.item?.artists?.map((artist) => artist?.name).join(', ') ??
      '';
    const songUrl: string = responseData?.item?.external_urls?.spotify ?? '';
    const title: string = responseData?.item?.name ?? '';

    return {
      status,
      isPlaying,
      data: {
        album,
        albumImageUrl,
        artist,
        songUrl,
        title,
      },
    };
  } catch (error) {
    return { status: 500, isPlaying: false, data: null };
  }
};
