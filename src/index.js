import fs from 'fs';
import path from 'path';
import parse from './parser';
import astBuilder from './astBuilder';
import render from './render';

const getData = pathToData => fs.readFileSync(pathToData, 'utf-8');

const genDiff = (pathToFile1, pathToFile2) => {
  const fileBefore = getData(pathToFile1);
  const fileAfter = getData(pathToFile2);
  const extBefore = path.extname(pathToFile1);
  const extAfter = path.extname(pathToFile2);
  const fileParseBefore = parse(extBefore, fileBefore);
  const fileParseAfter = parse(extAfter, fileAfter);
  return render(astBuilder(fileParseBefore, fileParseAfter));
};

export default genDiff;
