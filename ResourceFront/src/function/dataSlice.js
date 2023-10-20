const ResourceSlice = function (Data) {
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

const IssueSlice = function (Data) {
  if (Data == undefined) {
    return;
  } else {
    let index = 0;
    let resourceSymbol = Data[index].resourceSymbol;
    let issueDate = [[]];
    let publisher = [[]];
    let resourceEngName = [[Data[index].resourceEngName]];
    let resourceKorName = [[Data[index].resourceKorName]];
    let resourceSymbols = [[Data[index].resourceSymbol]];
    let title = [[]];
    let url = [[]];

    Data.map((item) => {
      // console.log(item);
      if (resourceSymbol == item.resourceSymbol) {
        issueDate[index].push(item.issueDate);
        publisher[index].push(item.publisher);
        title[index].push(item.title);
        url[index].push(item.url);
      } else {
        index++;
        resourceSymbol = item.resourceSymbol;
        resourceEngName.push([item.resourceEngName]);
        resourceKorName.push([item.resourceKorName]);
        resourceSymbols.push([item.resourceSymbol]);
        issueDate.push([item.issueDate]);
        publisher.push([item.publisher]);
        title.push([item.title]);
        url.push([item.url]);
      }
    });

    let result = {
      resourceSymbols: resourceSymbols.flat(),
      resourceEngName: resourceEngName,
      resourceKorName: resourceKorName,
      issueDate: issueDate,
      publisher: publisher,
      title: title,
      url: url,
    };
    return result;
  }
};

const AiDataSlice = function (Data) {
  if (Data == undefined) {
    return;
  } else {
    let index = 0;
    let symbol = Data[index].symbol;
    let symbols = [[Data[index].symbol]];
    let engName = [[Data[index].engName]];
    let korName = [[Data[index].korName]];
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
        price.push([item.price]);
        date.push([item.date]);
      }
    });
    let result = {
      symbols: symbols.flat(),
      engName: engName,
      korName: korName,
      price: price,
      date: date,
    };

    return result;
  }
};

export { ResourceSlice, IssueSlice, AiDataSlice };
