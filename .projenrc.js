const { awscdk } = require('projen');

const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Josh Kellendonk',
  authorAddress: 'joshkellendonk@gmail.com',
  cdkVersion: '2.0.0',
  name: '@wheatstalk/cdk-ecs-keycloak',
  repository: 'https://github.com/misterjoshua/cdk-ecs-keycloak.git',

  keywords: [
    'ecs',
    'fargate',
    'keycloak',
  ],

  devDeps: [
    'aws-cdk',
    'ts-node',
  ],

  defaultReleaseBranch: 'master',

  autoApproveUpgrades: true,
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['github-actions', 'github-actions[bot]', 'misterjoshua'],
  },

  releaseEveryCommit: false,
  releaseToNpm: true,
});

project.gitignore.exclude('.idea', '*.iml');
project.gitignore.exclude('cdk.out');
project.synth();
