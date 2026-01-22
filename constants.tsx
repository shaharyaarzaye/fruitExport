
import React from 'react';
import { 
  Globe, 
  Award, 
  Truck, 
  Headphones, 
  Users, 
  Package, 
  Calendar,
  CheckCircle2
} from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  description: string;
  quantity: string;
}

export interface GalleryItem {
  id: number;
  category: string;
  image: string;
  title: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Potato",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=870&auto=format&fit=crop",
    description: "Versatile, earthy, and starchy tubers perfect for mashing, roasting, or frying.",
    quantity: "100"
  },
  {
    id: 2,
    name: "Tomato",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=435&auto=format&fit=crop",
    description: "Juicy, vibrant red tomatoes, ideal for salads, sauces, and garnishes.",
    quantity: "100"
  },
  {
    id: 3,
    name: "Onion",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?q=80&w=387&auto=format&fit=crop",
    description: "Pungent and flavorful bulbs that form the essential base for savory dishes.",
    quantity: "100"
  },
  {
    id: 4,
    name: "Brinjal / Eggplant",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1683543122945-513029986574?q=80&w=774&auto=format&fit=crop",
    description: "Glossy purple skin with a tender, meaty interior that absorbs flavors beautifully.",
    quantity: "100"
  },
  {
    id: 5,
    name: "Lady finger / Okra",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1694152411105-1d8c09149382?q=80&w=879&auto=format&fit=crop",
    description: "Fresh, slender green pods known for their unique texture and high fiber content.",
    quantity: "100"
  },
  {
    id: 6,
    name: "Cauliflower",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1566842600175-97dca489844f?q=80&w=464&auto=format&fit=crop",
    description: "Compact, crunchy white florets that are excellent for steaming or roasting.",
    quantity: "100"
  },
  {
    id: 7,
    name: "Carrot",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=387&auto=format&fit=crop",
    description: "Sweet and crunchy orange root vegetables packed with Vitamin A.",
    quantity: "100"
  },
  {
    id: 8,
    name: "Peas",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1642864106922-f79b4aea18b4?q=80&w=435&auto=format&fit=crop",
    description: "Sweet, tender green seeds housed in crisp pods, perfect for stir-fries.",
    quantity: "100"
  },
  {
    id: 9,
    name: "Spinach",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=580&auto=format&fit=crop",
    description: "Dark, leafy greens rich in iron and nutrients for a healthy diet.",
    quantity: "100"
  },
  {
    id: 10,
    name: "Capsicum / Bell Pepper",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1518736114810-3f3bedfec66a?q=80&w=870&auto=format&fit=crop",
    description: "Crisp and colorful peppers that add a mild sweetness to any meal.",
    quantity: "100"
  },
  {
    id: 11,
    name: "Bottle Gourd",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1730127487636-b7fe550af030?q=80&w=387&auto=format&fit=crop",
    description: "A hydrating, light green vegetable with a mild taste and soft texture.",
    quantity: "100"
  },
  {
    id: 12,
    name: "Pumpkin",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1570586437263-ab629fccc818?q=80&w=435&auto=format&fit=crop",
    description: "Deep orange, sweet-fleshed vegetable ideal for soups and pies.",
    quantity: "100"
  },
  {
    id: 13,
    name: "Cucumber",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?q=80&w=580&auto=format&fit=crop",
    description: "Cool and refreshing with high water content, perfect for hydrating salads.",
    quantity: "100"
  },
  {
    id: 14,
    name: "Ginger",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1603431777782-912e3b76f60d?q=80&w=387&auto=format&fit=crop",
    description: "A zesty and aromatic root used to add a spicy kick to food and tea.",
    quantity: "100"
  },
  {
    id: 15,
    name: "Chili",
    category: "Fresh Vegetables",
    image: "https://images.unsplash.com/photo-1576763595295-c0371a32af78?q=80&w=1470&auto=format&fit=crop",
    description: "Hot and spicy peppers to bring heat and intensity to your favorite recipes.",
    quantity: "100"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1, title: "Rice Processing", category: "Processing Unit", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Farm Harvest", category: "Farms & Harvest", image: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=800&auto=format&fit=crop" },
  { id: 3, title: "Storage Warehouse", category: "Warehouse", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop" },
  { id: 4, title: "Global Shipment", category: "Shipments", image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Spices Inspection", category: "Processing Unit", image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=800&auto=format&fit=crop" },
  { id: 6, title: "Field Monitoring", category: "Farms & Harvest", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" },
  { id: 7, title: "Bulk Packaging", category: "Warehouse", image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?q=80&w=800&auto=format&fit=crop" },
  { id: 8, title: "Container Loading", category: "Shipments", image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop" },
];

export const STATS: Stat[] = [
  { label: "Happy Clients Worldwide", value: "500+", icon: "Users" },
  { label: "Countries Served", value: "25+", icon: "Globe" },
  { label: "Containers Shipped", value: "10,000+", icon: "Package" },
  { label: "Years of Excellence", value: "10+", icon: "Calendar" },
];

export const FEATURES: Feature[] = [
  { title: "Global Reach", description: "Exporting to 25+ Countries worldwide with efficient logistics.", icon: "Globe" },
  { title: "Certified Quality", description: "ISO | FSSAI | APEDA Certified standards for all products.", icon: "Award" },
  { title: "Fast Delivery", description: "On-Time Global Shipping via major air and sea routes.", icon: "Truck" },
  { title: "24/7 Support", description: "Dedicated Customer Care for all your import/export needs.", icon: "Headphones" },
];

export const ABOUT_POINTS = [
  "100% Quality Assurance",
  "Global Supply Chain Network",
  "Timely Delivery Guaranteed",
  "Competitive Pricing"
];

export const IconMap: Record<string, React.ElementType> = {
  Globe,
  Award,
  Truck,
  Headphones,
  Users,
  Package,
  Calendar,
  CheckCircle2
};
