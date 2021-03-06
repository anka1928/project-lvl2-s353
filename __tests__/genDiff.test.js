import fs from 'fs';
import path from 'path';
import genDiff from '../src';

test('flat json test', () => {
  const before = path.join(__dirname, '__fixtures__', 'before.json');
  const after = path.join(__dirname, '__fixtures__', 'after.json');
  const expectedFilePath = path.join(__dirname, '__fixtures__', 'diffJson');
  expect(genDiff(before, after)).toBe(fs.readFileSync(expectedFilePath, 'utf-8'));
});

test('flat yaml test', () => {
  const before = path.join(__dirname, '__fixtures__', 'before.yaml');
  const after = path.join(__dirname, '__fixtures__', 'after.yaml');
  const expectedFilePath = path.join(__dirname, '__fixtures__', 'diffYaml');
  expect(genDiff(before, after)).toBe(fs.readFileSync(expectedFilePath, 'utf-8'));
});

test('flat ini test', () => {
  const before = path.join(__dirname, '__fixtures__', 'before.ini');
  const after = path.join(__dirname, '__fixtures__', 'after.ini');
  const expectedFilePath = path.join(__dirname, '__fixtures__', 'diffIni');
  expect(genDiff(before, after)).toBe(fs.readFileSync(expectedFilePath, 'utf-8'));
});

test('recursive json test', () => {
  const before = path.join(__dirname, '__fixtures__', 'beforeRecursive.json');
  const after = path.join(__dirname, '__fixtures__', 'afterRecursive.json');
  const expectedFilePath = path.join(__dirname, '__fixtures__', 'recursiveResultJson');
  expect(genDiff(before, after)).toBe(fs.readFileSync(expectedFilePath, 'utf-8'));
});

test('plain ini test', () => {
  const before = path.join(__dirname, '__fixtures__', 'before.ini');
  const after = path.join(__dirname, '__fixtures__', 'after.ini');
  const expectedFilePath = path.join(__dirname, '__fixtures__', 'diffPlainIni');
  expect(genDiff(before, after, 'plain')).toBe(fs.readFileSync(expectedFilePath, 'utf-8'));
});

test('recursive plain json test', () => {
  const before = path.join(__dirname, '__fixtures__', 'beforeRecursive.json');
  const after = path.join(__dirname, '__fixtures__', 'afterRecursive.json');
  const expectedFilePath = path.join(__dirname, '__fixtures__', 'diffPlainRecursive');
  expect(genDiff(before, after, 'plain')).toBe(fs.readFileSync(expectedFilePath, 'utf-8'));
});

test('recursive test output json', () => {
  const before = path.join(__dirname, '__fixtures__', 'beforeRecursive.json');
  const after = path.join(__dirname, '__fixtures__', 'afterRecursive.json');
  const expectedFilePath = path.join(__dirname, '__fixtures__', 'formatJsonResult');
  expect(genDiff(before, after, 'json')).toBe(fs.readFileSync(expectedFilePath, 'utf-8'));
});
