module.exports = {
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    '^@utils/(.*)$': '<rootDir>src/utils/$1',
    '^@components/(.*)$': '<rootDir>src/components/$1',
    '^@hooks/(.*)$': '<rootDir>src/hooks/$1',
    '^@assets/(.*)$': '<rootDir>src/assets/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    '^.+\\.js$': 'babel-jest',
  },
};
