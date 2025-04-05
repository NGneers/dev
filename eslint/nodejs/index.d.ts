type Config = import("eslint").Linter.Config;

declare const d: {
  configs: {
    nodejs: Config[];
  };
};

export default d;
