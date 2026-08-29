import { docAction, docBack, docNext } from '../navigation/docFlows';

export function createDocNav(id: string, onNavigate?: (targetId: string) => void) {
  const go = (target: string) => onNavigate?.(target);
  return {
    go,
    next: () => {
      const target = docNext(id);
      if (target) go(target);
    },
    back: () => {
      const target = docBack(id);
      if (target) go(target);
    },
    action: (name: string) => {
      const target = docAction(id, name);
      if (target) go(target);
    },
  };
}

export type DocNav = ReturnType<typeof createDocNav>;
