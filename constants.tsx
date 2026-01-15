
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
  { id: 1, name: "Makhana (Fox Nuts)", category: "Other", image: "https://images.unsplash.com/photo-1610444583731-9282362b9a10?q=80&w=600&auto=format&fit=crop", description: "Premium quality roasted fox nuts.", quantity: "1000" },
  { id: 2, name: "Organic Jaggery (Gur)", category: "Other", image: "https://images.unsplash.com/photo-1617474039397-27017604f5e2?q=80&w=600&auto=format&fit=crop", description: "Pure chemical-free traditional jaggery.", quantity: "1000" },
  { id: 3, name: "Organic Turmeric Powder", category: "Organic Products", image: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=600&auto=format&fit=crop", description: "High curcumin content organic turmeric.", quantity: "100" },
  { id: 4, name: "1121 Basmati Rice", category: "Basmati Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop", description: "Long-grain aromatic premium basmati.", quantity: "1000" },
  { id: 5, name: "Alphonso & Kesar Mango", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop", description: "The king of fruits exported globally.", quantity: "1000" },
  { id: 6, name: "G4 Green Chilli", category: "Fresh Vegetables", image: "https://images.unsplash.com/photo-1588252303782-cb80119cb6d3?q=80&w=600&auto=format&fit=crop", description: "Extra spicy, long shelf-life chillies.", quantity: "1000" },
  { id: 7, name: "Pomegranate (Anar)", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1615484477778-ca3b77942253?q=80&w=600&auto=format&fit=crop", description: "Premium Bhagwa quality pomegranates.", quantity: "100" },
  { id: 8, name: "Dates (Khajur)", category: "Other", image: "https://images.unsplash.com/photo-1584306670957-acf935f5033c?q=80&w=600&auto=format&fit=crop", description: "Natural dates sourced from best farms.", quantity: "1000" },
  { id: 9, name: "Fresh Papaya", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1517282002779-9ec39d33673e?q=80&w=600&auto=format&fit=crop", description: "Sweet and high nutrient fresh papayas.", quantity: "100" },
  { id: 10, name: "Fresh Guava", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=600&auto=format&fit=crop", description: "Crispy and juicy pink-flesh guavas.", quantity: "100" },
  { id: 11, name: "Fresh Coconut", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?q=80&w=600&auto=format&fit=crop", description: "Young and tender water coconuts.", quantity: "100" },
  { id: 12, name: "Banana (Grand Naine)", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1571771894821-ad9b588647d7?q=80&w=600&auto=format&fit=crop", description: "Export quality uniform size bananas.", quantity: "1000" },
  { id: 13, name: "Fresh Apple", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=600&auto=format&fit=crop", description: "Crisp and fresh mountain apples.", quantity: "100" },
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
