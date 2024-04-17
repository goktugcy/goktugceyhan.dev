import { supabase } from '@/common/libs/supabase';

export const sendMessage = async (formData: FormData) => {
  const { data, error } = await supabase.from('contacts').insert([formData]);

  if (error) {
    return {
      status: 500,
      data: error,
    };
  }

  return {
    status: 200,
    data,
  };
};
