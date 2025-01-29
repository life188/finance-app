import { useQuery } from '@tanstack/react-query';
import { client } from '@/lib/hono';

export const useGetCategory = (id?: string) => {
  const query = useQuery({
    enabled: !!id,
    queryKey: ['category', { id }],
    queryFn: async (): Promise<any> => {
      const response = await client.api.categories[':id'].$get({
        param: { id },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch category');
      }

      const responseData = (await response.json()) as { data: any };
      return responseData.data;
    },
  });

  return query;
};
