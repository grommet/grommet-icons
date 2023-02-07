import { base } from '../themes';

type Global = { global: { colors: { [key: string]: string } } };
type Icon = { icon: { size: { [key: string]: string } } };
type Source = Global | Icon | (Global & Icon);
type Merged = Global & Icon;

export function deepMerge(target: typeof base, ...sources: Source[]): Merged;
