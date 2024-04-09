import { useMantineTheme } from '@mantine/core';

// These imports make use of svgr library
// svgr automatically transforms svg imports into React components
// See configuration in `next.config.js`
import Biography from '@/assets/icons/biography.svg';
import Degree from '@/assets/icons/degree.svg';
import Heart from '@/assets/icons/heart.svg';
import Facebook from '@/assets/icons/facebook.svg';
import Info from '@/assets/icons/info.svg';
import Language from '@/assets/icons/language.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import Location from '@/assets/icons/location.svg';
import Mail from '@/assets/icons/mail.svg';
import Moon from '@/assets/icons/moon.svg';
import PhoneCall from '@/assets/icons/phone-call.svg';
import SunSet from '@/assets/icons/sun-set.svg';
import Sun from '@/assets/icons/sun.svg';
import Youtube from '@/assets/icons/youtube.svg';
import Search from '@/assets/icons/search.svg';

const icons = {
  biography: Biography,
  degree: Degree,
  heart: Heart,
  facebook: Facebook,
  info: Info,
  language: Language,
  linkedin: LinkedIn,
  location: Location,
  mail: Mail,
  moon: Moon,
  phoneCall: PhoneCall,
  sunSet: SunSet,
  sun: Sun,
  youtube: Youtube,
  search: Search,
};

/**
 *
 * @param {{
 *  name: keyof typeof icons;
 *  width: number;
 *  height: number;
 *  color: string;
 * }} props
 *
 * Example
 * ```jsx
 *  <Icon name="sun" width={20} height={20} color="#333" />
 * ```
 *
 */
const Icon = (props) => {
  const theme = useMantineTheme();
  const {
    width = 22,
    height = 22,
    color = theme.colors.brand[2],
    name,
    ...rest
  } = props;

  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent width={width} height={height} fill={color} {...rest} />;
};

export default Icon;
