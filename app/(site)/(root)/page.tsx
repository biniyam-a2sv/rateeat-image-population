import React from "react";
import { restaurantColumns } from "./_components/restaurantColumns";
import { RestaurantDataTable } from "./_components/restaurantDataTable";





async function getRestaurantsData(): Promise<Restaurant[]> {
  // Fetch data from your API here.
  const baseURL = "https://rateeat-backend-ij7jnmwh2q-zf.a.run.app/api/v1";
  const res = await fetch(`${baseURL}/restaurantAnalytics?fiftyPercentCoverage=true&limit=200`);
  const data = await res.json();

  // Ensure data is an array before mapping
  if (!res.ok) {
    throw new Error("API response is not an array");
  }

  return data.data;

}



export type Restaurant = {
  id: string
  name: string
  imageCoverage: number
  itemsWithImageCount: number
  itemsWithoutImageCount: number
  itemsWithImage: Item[]
}

export type Item = {
  id: string
  name: number
  imageUrls: string[]

}




// eslint-disable-next-line @next/next/no-async-client-component
export default async function RestaurantsTable() {
  const data = await getRestaurantsData();

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-semibold pb-10 ">Restaurants with image coverage</h2>
      <RestaurantDataTable columns={restaurantColumns} data={data} />
    </div>
  )
}




