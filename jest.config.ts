import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testTimeout: 30000,
  testEnvironment: "node",
};

export default config;
