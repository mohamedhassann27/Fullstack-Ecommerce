import supabase from "@/supabase"
import { useQuery } from "@tanstack/react-query"

interface IProp{
  categories:string[],
  searchValue?: string,
  sort?: {sortBy:string; sortValue: string}
}

function useCollectionData({categories, searchValue, sort}:IProp) {
  return (
    useQuery({
      queryKey: ['products', categories, searchValue, sort],
      queryFn: async () => { 
        try {
          let request= supabase.from('products').select('*')
          // category filter
          if(categories.length > 0){
            request= request.in('category', categories)
          }
          // search filter
          if(searchValue){
            request= request.ilike('title', `%${searchValue}%`)
          }

          if(sort){
            request= request.order(sort.sortBy, {ascending: sort.sortValue === "asc"})
          }
          // All filters are applied AND by default in Supabase
          const { data, error } = await request
            if(error) throw error.message
            return data
        } catch (error) {
          console.log(error);
        }
      }
    })
  )
}

export default useCollectionData
