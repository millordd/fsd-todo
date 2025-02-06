import { lazy, Suspense, SVGAttributes, useMemo } from 'react';

/// STEP 1
const ICONS = {
  chevron: lazy(async () => ({
    default: (await import('./system/chevron.svg')).ReactComponent,
  })),
  arrow: lazy(async () => ({
    default: (await import('./system/arrow.svg')).ReactComponent,
  })),
  chat: lazy(async () => ({
    default: (await import('./system/chat.svg')).ReactComponent,
  })),
  heart: lazy(async () => ({
    default: (await import('./system/heart.svg')).ReactComponent,
  })),
  successCheck: lazy(async () => ({
    default: (await import('./system/success-check.svg')).ReactComponent,
  })),
  closeX: lazy(async () => ({
    default: (await import('./system/close-x.svg')).ReactComponent,
  })),
  clear: lazy(async () => ({
    default: (await import('./system/clear.svg')).ReactComponent,
  })),
  info: lazy(async () => ({
    default: (await import('./system/info.svg')).ReactComponent,
  })),
  upDownChevron: lazy(async () => ({
    default: (await import('./system/up-down-chevron.svg')).ReactComponent,
  })),
  questionInCircle: lazy(async () => ({
    default: (await import('./system/question-in-circle.svg')).ReactComponent,
  })),
};

// STEP FINISH
export enum IconName {
  chevron = 'chevron',
  arrow = 'arrow',
  chat = 'chat',
  heart = 'heart',
  successCheck = 'successCheck',
  closeX = 'closeX',
  clear = 'clear',
  info = 'info',
  upDownChevron = 'upDownChevron',
  questionInCircle = 'questionInCircle',
}

interface Props extends SVGAttributes<SVGElement> {
  name: IconName;
}

export const Icon = ({ name, ...rest }: Props) => {
  const SvgIcon = useMemo(() => ICONS[name], [name]);
  if (!SvgIcon) {
    throw new Error(`Icon "${name}" not found.`);
  }
  return (
    <Suspense fallback={<svg {...rest} />}>
      <SvgIcon {...rest} />
    </Suspense>
  );
};
