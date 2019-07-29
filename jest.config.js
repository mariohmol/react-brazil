module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ["tests/*.tsx", "**/?(*.)+(test).ts?(x)"],
    "setupTestFrameworkScriptFile": "<rootDir>tests/setupTests.ts",
    "roots": [
        "<rootDir>/src",
        "<rootDir>/tests",
        "<rootDir>/node_modules/js-brasil"
      ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json'
        }
    }
};
