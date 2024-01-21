"use client"


import { useSearchParams } from "next/navigation";
import RestaurantDetailSection from "../(root)/_components/restaurantDetailSection";
import { ItemDataTable } from "../(root)/_components/itemDataTable";
import { Item } from "./itemDataModel";
import { itemColumns } from "../(root)/_components/itemColumns";




async function getRestaurantItems(restaurantId: string): Promise<Item[]> {
    // Fetch data from your API here.
    const baseURL = "https://rateeat-backend-ij7jnmwh2q-zf.a.run.app/api/v1";
    const res = await fetch(`${baseURL}/restaurants/${restaurantId}/items?limit=200`);
    const data = await res.json();

    // Ensure data is an array before mapping
    if (!res.ok) {
        throw new Error("API response is not an array");
    }

    return data.data;

}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function RestaurantDetailPage() {


    const [searchParams] = useSearchParams();
    const restaurantId = searchParams.at(1) || '';
    const data = await getRestaurantItems(restaurantId);

    return (
        <div>
            <h1 className="mb-10">Restaurant Detail and Items</h1>

            <RestaurantDetailSection />
            <ItemDataTable columns={itemColumns} data={data} />
        </div>
    )
}






