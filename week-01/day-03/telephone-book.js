const telephoneBook = {
  'William A.Lathan': '405-709-1865',
  'John K.Miller': '402-247-8568',
  'Hortensia E.Foster': '606-481-6467',
  'Amanda D.Newland': '319-243-5613',
  'Brooke P.Askew': '307-687-2982',
};

console.log(telephoneBook['John K.Miller']);
console.log(Object.keys(telephoneBook).filter((name) => (telephoneBook[name] === '307-687-2982'))[0]);
console.log('Chris E. Myers' in telephoneBook);
