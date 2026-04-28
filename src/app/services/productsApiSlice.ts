import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import supabase from "../../supabase";

const productsApiSlice = createApi({
    tagTypes: ["products"],
    reducerPath: "productsApi",
    refetchOnReconnect: true,
    // refetchOnMountOrArgChange:true,

    // {not use basequery because i use supabase sdk}
    baseQuery: fetchBaseQuery({
        // baseUrl: supabase.from('products')
    }),
    endpoints: (build) => ({
        // Get
        getDashboardProducts: build.query({
        async queryFn() {
            const { data, error } = await supabase.from("products").select("*");
            // console.log({data,error});
            if (error) {
            return { error: { status: "CUSTOM_ERROR", error: error.message } };
            }
            return { data };
        },
        providesTags: ["products"],
        }),
        // Delete
        deleteDashboardProduct: build.mutation({
        async queryFn(id) {
            const { data, error } = await supabase
            .from("products")
            .delete()
            .eq("id", id);
            if (error) {
            return { error: { status: "CUSTOM_ERROR", error: error.message } };
            }
            return { data };
        },
        invalidatesTags: ["products"],
        }),
    }),
});

export default productsApiSlice;
export const {useGetDashboardProductsQuery, useDeleteDashboardProductMutation} = productsApiSlice;
