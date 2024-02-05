import axios from "axios";
import type { Address } from "@prisma/client";

export async function autocompleteAddress(
  query: string
): Promise<Partial<Address>[]> {
  const apiKey = process.env.GEOAPIFY_API_KEY;
  const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(
    query
  )}&lang=fr&limit=5&bias=countrycode:ca&format=json&apiKey=${apiKey}`;

  try {
    const response = await axios.get(url);
    return response.data.results.map(
      (result: any): Partial<Address> => ({
        streetNumber: result.housenumber,
        streetName: result.street,
        city: result.city,
        region: result.region,
        postalCode: result.postcode,
        country: result.country,
        latitude: result.lat,
        longitude: result.lon,
        formattedAddress: result.formatted || result.name,
      })
    );
  } catch (error) {
    console.error("Error fetching autocomplete addresses:", error);
    return [];
  }
}
