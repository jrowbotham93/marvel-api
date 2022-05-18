import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testTimeout: 30000,
  testEnvironment: "node",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};

export default config;
