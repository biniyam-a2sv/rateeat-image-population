"use client"


import { useSearchParams } from "next/navigation";
import Image from 'next/image';
import { RestaurantDetail } from "../../[restaurantId]/restaurantDataModel";


async function getRestaurantsDetail(restaurantId: string): Promise<RestaurantDetail> {
    // Fetch data from your API here.
    const baseURL = "https://rateeat-backend-ij7jnmwh2q-zf.a.run.app/api/v1";
    const res = await fetch(`${baseURL}/restaurants/${restaurantId}`);
    const data = await res.json();

    // Ensure data is an array before mapping
    if (!res.ok) {
        throw new Error("API response is not an array");
    }

    return data.data;
}

// eslint-disable-next-line @next/next/no-async-client-component
export default async function RestaurantDetailSection() {


    const [searchParams] = useSearchParams();
    const restaurantId = searchParams.at(1) || '';

    const restaurantDetail = await getRestaurantsDetail(restaurantId);

    if (!restaurantDetail) {
        // Handle loading or error state
        return <div>Loading...</div>;
    }

    const {
        name, opening_hour, closing_hour, is_open, average_price, average_rating, number_of_reviews, popularity_index, restaurant_images, restaurant_videos, restaurant_locations, createdAt, updatedAt,
    } = restaurantDetail;


    const firstImage = restaurant_images && restaurant_images[0];

    return (
        <div className="restaurant-details">
            {/* Hero section with name and image */}
            <div className="hero">



                {firstImage && (
                    <Image
                        src={firstImage.url}
                        alt={`${name} image`}
                        className="hero-image"
                        width={500}
                        height={300}
                    />
                )}
                <div className="hero-content">
                    <h3>{name}</h3>
                    <div className="status">
                        {is_open ? 'Open' : 'Closed'}
                        <span> ({opening_hour} - {closing_hour})</span>
                    </div>
                </div>
            </div>

            {/* Additional details section */}
            <div className="details">
                <div className="rating">
                    Average Rating: {average_rating.toFixed(2)}/5 ({number_of_reviews} reviews)
                </div>
                <div className="price">
                    Average Price: $ {average_price.toFixed(2)}
                </div>
                <div className="popularity">
                    Popularity Index: {popularity_index}
                </div>
            </div>

            {/* Image gallery (optional) */}
            {restaurant_images.length > 1 && (
                <div className="image-gallery">
                    {restaurant_images.slice(1).map((image) => (
                        <Image
                            key={image.id}
                            src={image.url}
                            alt={`${name} image`}
                            className="gallery-image" />
                    ))}
                </div>
            )}
        </div>
    );
}

