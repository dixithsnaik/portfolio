import portfolioData from '../data/portfolio.json';

// Icon mapping for dynamic icon imports
import {
  Code2,
  FileCode,
  Globe,
  Palette,
  Cpu,
  Image as ImageIcon,
  Sparkles,
  Zap,
  GitBranch,
  Box,
  Code,
  Users,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const iconMap = {
  Code2,
  FileCode,
  Globe,
  Palette,
  Cpu,
  ImageIcon,
  Sparkles,
  Zap,
  GitBranch,
  Box,
  Code,
  Users,
  Mail,
  Phone,
  MapPin,
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || Code2;
};

export default portfolioData;

