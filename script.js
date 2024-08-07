const company = {
  name: 'Велика Компанія',
  type: 'Головна компанія',
  platform: 'Платформа для продажу квитків',
  sellsSolution: 'Рішення для продажу квитків',
  clients: [
    {
      name: 'Клієнт 1',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків',
      partners: [
        {
          name: 'Клієнт 1.1',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
        },
        {
          name: 'Клієнт 1.2',
          type: 'subSubCompany',
          uses: 'Рішення для продажу квитків',
          sells: 'Рішення для продажу квитків',
          partners: [
            {
              name: 'Клієнт 1.2.3',
              type: 'subSubCompany',
              uses: 'Рішення для продажу квитків',
              sells: 'Рішення для продажу квитків',
            }
          ]
        }
      ]
    },
    {
      name: 'Клієнт 2',
      type: 'subCompany',
      uses: 'ПО для продажу квитків',
      sells: 'Рішення для продажу квитків'
    }
  ]
};
function findValueByKey(companyObj, companyName) {
  if (companyObj.name === companyName) {
    return companyObj;
  }
// check whether company has clients
  if (companyObj.clients) {
    for (let i = 0; i < companyObj.clients.length; i++) {
      const result = findValueByKey(companyObj.clients[i], companyName);
      if (result) {
        return result;
      }
    }
  }
// check whether the company has partners
  if (companyObj.partners) {
    for (let i = 0; i < companyObj.partners.length; i++) {
      const result = findValueByKey(companyObj.partners[i], companyName);
      if (result) {
        return result;
      }
    }
  }

  // if company will not founded return null
  return null;
}

console.log(findValueByKey(company, 'Клієнт 1.2.3')); 
console.log(findValueByKey(company, 'Клієнт 2')); 
console.log(findValueByKey(company, 'Клієнт 3')); 
