import FocuslinksDemo from './focuslinks-demo';
import FocusMeetDemo from './focus-meet-demo';
import FocusCastDemo from './focus-cast-demo';
import RapdDemo from './rapd-demo';
import JccDemo from './jcc-demo';
import OptoscholarDemo from './optoscholar-demo';
import OptoLibDemo from './optolib-demo';
import MagazineDemo from './magazine-demo';

const demoMap: Record<string, React.ComponentType> = {
  focuslinks: FocuslinksDemo,
  'focus-meet': FocusMeetDemo,
  'focus-cast': FocusCastDemo,
  'rapd-simulator': RapdDemo,
  'jcc-simulator': JccDemo,
  optoscholar: OptoscholarDemo,
  optolib: OptoLibDemo,
  'focus-magazine': MagazineDemo,
};

export function getDemo(slug: string): React.ComponentType | null {
  return demoMap[slug] ?? null;
}
