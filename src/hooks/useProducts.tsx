import supabase from "@/supabase";
import { useQuery } from "@tanstack/react-query";

function useProducts() {
  return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const { data, error } = await supabase.from("products").select();
        if (error) throw error.message;
        // console.log(data);
        return data;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  });
}

export default useProducts;
