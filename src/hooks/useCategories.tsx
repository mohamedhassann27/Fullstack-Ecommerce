import { useQuery } from '@tanstack/react-query'
import supabase from '../../supabase'

function useCategories() {
    return (
        useQuery({
            queryKey:['categories'],
            queryFn: async()=>{
                try {
                    const {data, error} = await supabase.from('categories').select()
                    if(error) throw error.message
                    // console.log(data);
                    return data
                } catch (error) {
                    console.log(error);
                    return error
                }
            }
        })
    )
}

export default useCategories
