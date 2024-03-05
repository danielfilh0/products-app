module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/styles/**',
    '!src/utils/**',
    '!src/contexts/**', // should be tested in e2e
    '!src/services/**', // should be tested in e2e
    '!src/app/**', // should be tested in e2e
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/**/mock.ts'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1'
  }
}
