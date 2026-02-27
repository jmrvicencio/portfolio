import { atom, createStore } from 'jotai';
import { useRef, RefObject, createRef } from 'react';

export const myStore = createStore();

export const activeProjectAtom = atom(0);
export const muteAtom = atom(false);
export const mobileMenuAtom = atom(false);
export const widthCheckAtom =
  atom(createRef<{ isSm: boolean; isMd: boolean; isLg: boolean }>());
