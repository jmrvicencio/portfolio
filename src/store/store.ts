import { atom, createStore } from 'jotai';

export const myStore = createStore();

export const activeProjectAtom = atom(0);
