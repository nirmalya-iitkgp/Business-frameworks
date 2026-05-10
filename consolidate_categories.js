import fs from 'fs';

const filePath = '/src/constants.ts';
let content = fs.readFileSync(filePath, 'utf-8');

const mapping = {
  "'Marketing Mix'": "'Marketing & Sales'",
  "'Digital Strategy'": "'Marketing & Sales'",
  "'Advertising'": "'Marketing & Sales'",
  "'Sales'": "'Marketing & Sales'",
  "'Brand'": "'Marketing & Sales'",
  "'Communication'": "'Marketing & Sales'",
  "'Strategy'": "'Strategy & Innovation'",
  "'Planning'": "'Strategy & Innovation'",
  "'Finance'": "'Finance & Risk'",
  "'Risk Management'": "'Finance & Risk'",
  "'Operations'": "'Operations & Supply Chain'",
  "'Supply Chain'": "'Operations & Supply Chain'",
  "'Project Management'": "'Operations & Supply Chain'",
  "'Problem Solving'": "'Problem Solving & Decision Making'",
  "'Change Management'": "'Change & Communication'",
  "'Crisis Communication'": "'Change & Communication'",
  "'Coaching'": "'Leadership & Teams'"
};

for (const [oldCat, newCat] of Object.entries(mapping)) {
  const regex = new RegExp(`category: ${oldCat}`, 'g');
  content = content.replace(regex, `category: ${newCat}`);
}

fs.writeFileSync(filePath, content);
console.log('Categories consolidated successfully.');
