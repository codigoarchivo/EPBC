import { useDisclosure } from "@chakra-ui/react";
import {
  BaseFlexCenter,
  BaseFlexEnd,
  BaseFlexStart
} from '../base';
import { MenuCollapse } from '../menu';
import { BreadcrumbNavbar } from '../breadcrumb';

export const Navbar = () => {
  const { onToggle, isOpen } = useDisclosure();
  return (
    <>
      <div className="navbar">
        {/* BaseFlexStart */}
        <BaseFlexStart onToggle={onToggle} isOpen={isOpen} />

        {/* BaseFlexCenter */}
        <BaseFlexCenter />

        {/* BaseFlexEnd */}
        <BaseFlexEnd />
      </div>
      {/* MenuCollapse */}
      <MenuCollapse isOpen={isOpen} />
      {/* BreadcrumbNavbar */}
      <BreadcrumbNavbar />
    </>
  );
}
