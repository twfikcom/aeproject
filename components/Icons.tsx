import React from 'react';
import { Battery, Droplet, Disc, Laptop, Activity, Wind, Wrench, Clock, CheckCircle, Phone, MapPin, Star, Menu, X, ChevronRight, ChevronLeft } from 'lucide-react';

export const IconMap: Record<string, React.FC<any>> = {
  Battery,
  Droplet,
  Disc,
  Laptop,
  Activity,
  Wind,
  Wrench,
  Clock,
  CheckCircle,
  Phone,
  MapPin,
  Star,
  Menu,
  X,
  ChevronRight,
  ChevronLeft
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = IconMap[name] || Wrench;
  return <IconComponent className={className} size={size} />;
};