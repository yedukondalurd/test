export const parseSensorSummary = data => {
  const sensorTypes = ['subscription'];
  const subscriptionTypes = [];
  let summaryData = [
    {
      subscription: 'Value Band Lower',
      pressure: 54,
      flow: 18,
      hydrophone: 0,
      turbfnu: 0,
      total: 72,
    },
    {
      subscription: 'Transient',
      pressure: 21,
      flow: 0,
      hydrophone: 0,
      turbfnu: 0,
      total: 21,
    },
  ];
  Object.keys(data).forEach(headerKey => {
    if (sensorTypes.indexOf(headerKey) === -1) {
      sensorTypes.push(headerKey);
    }
    Object.keys(data[headerKey]).forEach(alertType => {
      const existingObj = subscriptionTypes.find(
        item => item.subscription === alertType,
      );
      const idxVal = subscriptionTypes.findIndex(
        item => item.subscription === alertType,
      );
      const count = data[headerKey][alertType]
        ? Object.keys(data[headerKey][alertType]).length
        : 0;
      if (!existingObj) {
        const rowObj = {
          subscription: alertType,
          [headerKey]: count,
        };
        subscriptionTypes.push(rowObj);
      } else {
        const rowObj = { [headerKey]: count };
        subscriptionTypes[idxVal] = Object.assign({}, existingObj, rowObj);
      }
    });
  });

  //   let records = [];
  //   let totalColumnCount = {
  //     subscription: 'Total',
  //     Total: 0,
  //   };
  //   if (subscriptionTypes.length > 0) {
  //     subscriptionTypes.forEach(subscriptionItem => {
  //       let rowObj = { subscription: subscriptionItem, Total: 0 };
  //       sensorTypes.forEach(sensorItem => {
  //         let count = data[sensorItem][subscriptionItem]
  //           ? Object.keys(data[sensorItem][subscriptionItem]).length
  //           : 0;
  //         rowObj['Total'] = rowObj['Total'] + count;
  //         rowObj[sensorItem] = count;

  //         if (totalColumnCount[sensorItem]) {
  //           totalColumnCount[sensorItem] = totalColumnCount[sensorItem] + count;
  //         } else {
  //           totalColumnCount[sensorItem] = count;
  //         }
  //         totalColumnCount['Total'] = totalColumnCount['Total'] + count;
  //       });
  //       records.push(rowObj);
  //     });
  //   }

  //   return {
  //     headers: sensorTypes,
  //     records,
  //     totalColumnCount,
  //   };
  return { headers: sensorTypes, records: subscriptionTypes };
};
