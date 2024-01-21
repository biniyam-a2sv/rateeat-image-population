export type Item = {
    id: string;
    name: string;
    description: string;
    number_of_reviews: number;
    average_rating: number;
    price: number;
    category_id: string;
    fasting: boolean;
    popularity_index: number;
    createdAt: string;
    updatedAt: string;
    ingredients: Ingredient[];
    categories: {
        id: string;
        name: string;
        menu: {
            id: string;
            restaurant_id: string;
            createdAt: string;
            updatedAt: string;
            restaurant: {
                id: string;
                name: string;
                opening_hour: string;
                closing_hour: string;
                restaurant_locations: {
                    id: string;
                    latitude: number;
                    longitude: number;
                    description: string;
                }[];
            };
        };
    };
    item_tags: {
        id: string;
        name: string;
    }[];
    item_images: ItemImage[];
    item_videos: any[]; // Adjust type if videos have a specific structure
    isFavorite: boolean;
}

export type ItemImage =
    {
        id: string;
        url: string;
    }

export type Ingredient = {
    id: string;
    name: string;
}
