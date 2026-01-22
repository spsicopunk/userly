export interface User {
  id: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  location: {
    street: {
      number: number;
      name: string;
    };
    city: string;
    state: string;
    country: string;
    postcode: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  dob: {
    age: number;
  };
}

export interface RandomUserResponse {
  results: User[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}
