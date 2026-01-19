
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
  { id: 1, name: "Makhana (Fox Nuts)", category: "Other", image: "https://images.unsplash.com/photo-1710421576768-ff985fa63b60?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Premium quality roasted fox nuts.", quantity: "1000" },
  { id: 2, name: "Organic Jaggery (Gur)", category: "Other", image: "/jaggery.png", description: "Pure chemical-free traditional jaggery.", quantity: "1000" },
  { id: 3, name: "Organic Turmeric Powder", category: "Organic Products", image: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "High curcumin content organic turmeric.", quantity: "100" },
  { id: 4, name: "1121 Basmati Rice", category: "Basmati Rice", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600&auto=format&fit=crop", description: "Long-grain aromatic premium basmati.", quantity: "1000" },
  { id: 5, name: "Alphonso & Kesar Mango", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1553279768-865429fa0078?q=80&w=600&auto=format&fit=crop", description: "The king of fruits exported globally.", quantity: "1000" },
  { id: 6, name: "G4 Green Chilli", category: "Fresh Vegetables", image: "https://images.unsplash.com/photo-1576763595295-c0371a32af78?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Extra spicy, long shelf-life chillies.", quantity: "1000" },
  { id: 7, name: "Pomegranate (Anar)", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1541344999736-83eca272f6fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Premium Bhagwa quality pomegranates.", quantity: "100" },
  { id: 8, name: "Dates (Khajur)", category: "Other", image: "https://images.unsplash.com/photo-1614061811858-dde54a522f5e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Natural dates sourced from best farms.", quantity: "1000" },
  { id: 9, name: "Fresh Papaya", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Sweet and high nutrient fresh papayas.", quantity: "100" },
  { id: 10, name: "Fresh Guava", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1689996647099-a7a0b67fd2f6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Crispy and juicy pink-flesh guavas.", quantity: "100" },
  { id: 11, name: "Fresh Coconut", category: "Fresh Fruits", image: "https://plus.unsplash.com/premium_photo-1675040830227-9f18e88fd1f9?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Young and tender water coconuts.", quantity: "100" },
  { id: 12, name: "Banana (Grand Naine)", category: "Fresh Fruits", image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?q=80&w=327&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Export quality uniform size bananas.", quantity: "1000" },
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
