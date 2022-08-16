import Default from './DefaultLayout';
import {NavStyle} from 'shared/constants/AppEnums';
import BitBucket from './BitBucket';
import Standard from './Standard';
import DrawerLayout from './DrawerLayout';
import MiniSidebar from './MiniSidebar';
import MiniSidebarToggle from './MiniSidebarToggle';
import HorDefault from './HorDefault';
import HorHeaderFixed from './HorHeaderFixed';
import HorDarkLayout from './HorDarkLayout';
import UserHeader from './UserHeader';
import UserMiniHeader from './UserMiniHeader';

const Layouts = {
  [NavStyle.DEFAULT]: Default,
  [NavStyle.BIT_BUCKET]: BitBucket,
  [NavStyle.STANDARD]: Standard,
  [NavStyle.DRAWER]: DrawerLayout,
  [NavStyle.MINI]: MiniSidebar,
  [NavStyle.MINI_SIDEBAR_TOGGLE]: MiniSidebarToggle,
  [NavStyle.HEADER_USER]: UserHeader,
  [NavStyle.HEADER_USER_MINI]: UserMiniHeader,
  [NavStyle.H_DEFAULT]: HorDefault,
  [NavStyle.HOR_HEADER_FIXED]: HorHeaderFixed,
  [NavStyle.HOR_DARK_LAYOUT]: HorDarkLayout,
};
export default Layouts;
