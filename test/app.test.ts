import { SynthUtils } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { IntegFargateStack } from '../src/integ-fargate-stack';

test('fargate', () => {
  const app = new cdk.App();
  const stack = new IntegFargateStack(app, 'integ-fargate');

  const actual = SynthUtils.toCloudFormation(stack);
  expect(actual).toMatchSnapshot();
});