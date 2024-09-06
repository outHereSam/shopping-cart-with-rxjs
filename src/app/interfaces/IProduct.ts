interface Image {
  main: string;
  thumbnail: string;
}

export interface Product {
  id: number;
  image: Image;
  name: string;
  category: string;
  price: number;
}
