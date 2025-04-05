type Config = import("eslint").Linter.Config;

declare const d: {
  configs: {
    common: Config[];
  };
};

export default d;
