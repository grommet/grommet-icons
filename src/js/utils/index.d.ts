type TObject = {
  global?: {
    colors?: {
      [key: string]: string;
    };
  };
  icon?: {
    size?: {
      [key: string]: string;
    };
  };
};

export function deepMerge<T extends keyof TObject>(
  target: TObject,
  ...sources: TObject[]
): T;
