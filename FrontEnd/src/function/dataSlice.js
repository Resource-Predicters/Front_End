const dataSlice = function (Data) {
  if (Data == undefined) {
    return;
  } else {
    let index = 0;
    let symbol = Data[index].symbol;
    let symbols = [[Data[index].symbol]];
    let engName = [[Data[index].engName]];
    let korName = [[Data[index].korName]];
    let unit = [[Data[index].unit]];
    let price = [[]];
    let date = [[]];

    Data.map((item) => {
      if (symbol == item.symbol) {
        price[index].push(item.price);
        date[index].push(item.date);
      } else {
        index++;
        symbol = item.symbol;
        symbols.push([item.symbol]);
        engName.push([item.engName]);
        korName.push([item.korName]);
        unit.push([item.unit]);
        price.push([item.price]);
        date.push([item.date]);
      }
    });
    let result = {
      symbols: symbols.flat(),
      engName: engName,
      korName: korName,
      unit: unit,
      price: price,
      date: date,
    };
    return result;
  }
};

export default dataSlice;
