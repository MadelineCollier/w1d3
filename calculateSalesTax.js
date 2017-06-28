
// calculate sales tax function takes in sales data and tax rates
// it should then check which province the given set of data needs in order to calc tax
// so it should match the province value in CSD with the variable key form STR
// they are both strings so this should be ok
// then you need to find a way to multiply all the sales into one big lump sum, then tax it,
// then console log each section properly


var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



// try number one:



// function calculateSalesTax(salesData, taxRates) {
//   companyResultBlock = {};

//   companySalesData.forEach(function(company) {
//     if (companyResultBlock[company["name"]] !== undefined) {
//       companyResultBlock[company["name"]["totalSales"]] += calculateTotalSales(company["sales"]);
//       continue;
//     }


//     companyResultBlock[company["name"]] = {
//       totalSales: calculateTotalSales(company["sales"]),
//       totalTaxes: calculateTotalTaxes(company["province"], company["sales"])
//     };
//   });
//   console.log(companyResultBlock);
// }



// result: cant use a for each (or dont want to) because we want to use continue


// try number two:


function calculateSalesTax(salesData, taxRates) {
  companyResultBlock = {};

  for (var i = 0; i < companySalesData.length; i++) {
    var company = companySalesData[i];
    if (companyResultBlock[company["name"]] !== undefined) {
      companyResultBlock[company["name"]]["totalSales"] += calculateTotalSales(company["sales"]);
      companyResultBlock[company["name"]]["totalTaxes"] += calculateTotalTaxes(company["province"], company["sales"]);
      continue;
    }


    companyResultBlock[company["name"]] = {
      totalSales: calculateTotalSales(company["sales"]),
      totalTaxes: calculateTotalTaxes(company["province"], company["sales"])
    };
  }
  console.log(companyResultBlock);
}


function calculateTotalSales(salesData) {
  return salesData.reduce((a, b) => a + b, 0);
}


function calculateTotalTaxes(province, sales) {
  return calculateTotalSales(sales) * salesTaxRates[province];
}


var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/