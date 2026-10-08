import { MenuToggle } from '@/components/component-x/menu-toggle';
import { ComponentShowcase } from './component-showcase';

const MenuToggleShowcase = () => {
  return (
    <ComponentShowcase docsLink="/docs/components/menu-toggle" variant="compact" showHeader={false}>
      <MenuToggle />
    </ComponentShowcase>
  );
};

export default MenuToggleShowcase;
