module.exports = {
    default: {
      require: ['hooks/**/*.ts', 'steps/**/*.ts'],
      requireModule: ['ts-node/register'],
      format: ['progress'],
      publishQuiet: true,
      timeout: 60000
    }
  };
  