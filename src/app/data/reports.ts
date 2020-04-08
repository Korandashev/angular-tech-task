function id() {
  // tslint:disable-next-line:no-bitwise
  return (~~(Math.random() * 1e8)).toString(16);
}

const ACADEMIC = {id: '1', name: 'Academic'};
const INTERMEDIATE = {id: '2', name: 'Intermediate'};
const ADVANCED = {id: '3', name: 'Advanced'};
const HARDCORE = {id: '4', name: 'Hardcore'};

export const tags = [
  ACADEMIC,
  INTERMEDIATE,
  ADVANCED,
  HARDCORE,
];

export const reports = [{
  id: id(),
  title: 'Client rendering, server rendering, pre rendering. The full spectrum of JS website and application performance delivery',
  author: 'Guillermo Rauch',
  lang: 'en',
  tags: [ADVANCED]
}, {
  id: id(),
  title: 'GraphQL - фрагменты на клиенте: История появления, ошибки использования',
  author: 'Павел Черторогов',
  lang: 'ru',
  tags: [ADVANCED]
}, {
  id: id(),
  title: '@babel/how-to',
  author: 'Nicolo Ribaudo',
  lang: 'en',
  tags: [ADVANCED]
}, {
  id: id(),
  title: 'Разработка компилятора для TypeScript на TypeScript на базе LLVM',
  author: 'Дмитрий Пацура',
  lang: 'ru',
  tags: [HARDCORE]
}, {
  id: id(),
  title: 'CSS definition syntax',
  author: 'Роман Дворнов',
  lang: 'ru',
  tags: [HARDCORE]
}, {
  id: id(),
  title: 'Может ли компьютер молиться на блого всех живых существ? Молитва на Javascript и WebGL',
  author: 'Денис Радин',
  lang: 'ru',
  tags: [ACADEMIC]
}, {
  id: id(),
  title: 'Карьерная эффективность и карьерный путь в ИТ',
  author: 'Дмитрий Волошин',
  lang: 'en',
  tags: [ACADEMIC]
}];
