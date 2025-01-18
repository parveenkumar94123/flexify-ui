/** @type {import('jest').Config} */
const config = {
    preset: "ts-jest", // Use ts-jest preset for TypeScript support
    testEnvironment: "jsdom", // Set environment to jsdom for testing React components
    transform: {
        "^.+\\.tsx?$": "ts-jest" // Transform TypeScript files using ts-jest
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"], // File types to consider
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"], // Add setupTests for jest-dom
    roots: ["<rootDir>/src"], // Specify the root directory for tests
};

module.exports = config;
