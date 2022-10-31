import {
  ArrowLeftOnRectangleIcon,
  CogIcon,
  ChatBubbleBottomCenterTextIcon,
  PencilSquareIcon,
  DocumentCheckIcon,
  ClipboardDocumentListIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";

export const NAVIGATION = [
  { name: "Dashboard", href: "#", icon: Squares2X2Icon, current: false },
  {
    name: "Master Lists",
    href: "#",
    icon: ClipboardDocumentListIcon,
    current: false,
  },
  {
    name: "Dispatch Control",
    href: "#",
    icon: DocumentCheckIcon,
    current: false,
  },
  {
    name: "Encode Master List",
    href: "#",
    icon: PencilSquareIcon,
    current: false,
  },
  {
    name: "Report",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
    current: false,
  },
  { name: "Settings", href: "#", icon: CogIcon, current: true },
];
export const SECONDARY_NAVIGATION = [
  { name: "Logout", href: "#", icon: ArrowLeftOnRectangleIcon },
];
export const TABS = [
  { name: "General", href: "#", current: true },
  { name: "Password", href: "#", current: false },
  { name: "Notifications", href: "#", current: false },
  { name: "Plan", href: "#", current: false },
  { name: "Billing", href: "#", current: false },
  { name: "Team Members", href: "#", current: false },
];
