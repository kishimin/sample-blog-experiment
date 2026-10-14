module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: ['**/*.test.ts', '**/*.test.tsx'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/test/styleMock.cjs',
    '\\.(svg|png|jpg|jpeg|gif)$': '<rootDir>/test/fileMock.cjs',
  },
}
