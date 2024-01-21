
export type RestaurantDetail = {
  // Basic info
  id: string;
  name: string;
  opening_hour: string; // Consider using Date or Moment.js depending on your needs
  closing_hour: string; // Consider using Date or Moment.js depending on your needs
  is_open: boolean;
  average_price: number;
  average_rating: number;
  number_of_reviews: number;
  popularity_index: number;
  createdAt: string; // Consider using Date or Moment.js depending on your needs
  updatedAt: string; // Consider using Date or Moment.js depending on your needs

  // Additional data
  restaurant_images: RestaurantImage[]; // Define RestaurantImage type below
  restaurant_videos: RestaurantVideo[]; // Define RestaurantVideo type below (if there are any)
  restaurant_locations: RestaurantLocation[]; // Define RestaurantLocation type below

  // Phone numbers (as an array of objects)
  phoneNumbers: RestaurantPhoneNumber[]; // Define RestaurantPhoneNumber type below
};

type RestaurantImage = {
  id: string;
  url: string;
  restaurant_id: string;
  createdAt: string; // Consider using Date or Moment.js depending on your needs
  updatedAt: string; // Consider using Date or Moment.js depending on your needs
};

type RestaurantVideo = {
  id: string;
  url: string;
  restaurant_id: string;
  createdAt: string; // Consider using Date or Moment.js depending on your needs
  updatedAt: string; // Consider using Date or Moment.js depending on your needs
};

type RestaurantLocation = {
  id: string;
  restaurantId: string;
  latitude: number;
  longitude: number;
  description: string;
  createdAt: string; // Consider using Date or Moment.js depending on your needs
  updatedAt: string; // Consider using Date or Moment.js depending on your needs
};

type RestaurantPhoneNumber = {
  id: string;
  phone_number: string;
};
