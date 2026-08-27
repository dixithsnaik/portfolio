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
  Server,
  Database,
  Cloud,
  TestTube,
} from 'lucide-react';
import portfolioData from '../data/portfolio.json';

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
  Server,
  Database,
  Cloud,
  TestTube,
};

export const getIcon = (iconName) => {
  return iconMap[iconName] || Code2;
};

export default portfolioData;
