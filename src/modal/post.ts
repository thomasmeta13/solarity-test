export type PostType = 'featured' | 'announcement' | 'normal'

export type Tag = {
  title: string
  type: 'secondary' | 'error' | 'info' | 'warning'
}
export type  Post = {
  title: string;
  subtitle?: string;
  tags?: Tag[];
  likes: number;
  type: PostType;
  progress?:number;
  vr?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vr1?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vr2?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vr3?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vr4?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vr5?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
  vrmarket?: {
    imageUrl: string;
    featured: boolean;
    price?: number;
  };
};