let log4js = require('log4js');
let logger = log4js.getLogger();
const readline = require('readline');
const fs = require('fs');
let convert = function convert(startYear)
{
  /* eslint eqeqeq: 0 */
  if(typeof startYear == 'string') {
   return '';
}
  if(typeof startYear !== 'number' || isNaN(startYear)) {
        throw new Error('Not a number');
}
/* applied validations to the start date*/
const rl = readline.createInterface({
  input: fs.createReadStream('../inputdata/crimedata.csv')
});
/* eslint max-len: 0 */
let moreMoney = {2001: 0, 2002: 0, 2003: 0, 2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0, 2009: 0, 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, Description: 'Theft OVER $500 for year 2001-2016'};
let lessMoney = {2001: 0, 2002: 0, 2003: 0, 2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0, 2009: 0, 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, Description: 'Theft $500 AND UNDER for year 2001-2016'};
let arrestFalse = {2001: 0, 2002: 0, 2003: 0, 2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0, 2009: 0, 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, Description: 'Arrest false for year 2001-2016'};
let arrestTrue = {2001: 0, 2002: 0, 2003: 0, 2004: 0, 2005: 0, 2006: 0, 2007: 0, 2008: 0, 2009: 0, 2010: 0, 2011: 0, 2012: 0, 2013: 0, 2014: 0, 2015: 0, 2016: 0, Description: 'Arrest true for year 2001-2016'};
/* made objects for bar graph and line graph*/
let final = [moreMoney, lessMoney, arrestFalse, arrestTrue];
/* stored objects for bar graph and line graph in an array*/
rl.on('line', (line) => {
	let cleanedLine = line.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
  /* cleared unsed special characters from input data*/
	let date = cleanedLine[2];
  let year = date.substring(6, 10);
	let money = cleanedLine[6];
	let arrest = cleanedLine[8];
  /* extracted required data from various columns and stored it in variables*/
if(year === '2001') {
    if(money === 'OVER $500') {
      moreMoney[2001] = moreMoney[2001] + 1;
      logger.debug(moreMoney[2001] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2003] = lessMoney[2003] + 1;
     logger.debug(lessMoney[2001] + ' ' + money);
    }
}
 if(year === '2002') {
    if(money === 'OVER $500') {
      moreMoney[2002] = moreMoney[2002] + 1;
      logger.debug(moreMoney[2002] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2002] = lessMoney[2002] + 1;
     logger.debug(lessMoney[2002] + ' ' + money);
    }
}
 if(year === '2003') {
    if(money === 'OVER $500') {
      moreMoney[2003] = moreMoney[2003] + 1;
      logger.debug(moreMoney[2003] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2003] = lessMoney[2003] + 1;
     logger.debug(lessMoney[2003] + ' ' + money);
    }
}
 if(year === '2004') {
    if(money === 'OVER $500') {
      moreMoney[2004] = moreMoney[2004] + 1;
      logger.debug(moreMoney[2004] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2004] = lessMoney[2004] + 1;
     logger.debug(lessMoney[2004] + ' ' + money);
    }
}
 if(year === '2005') {
    if(money === 'OVER $500') {
      moreMoney[2005] = moreMoney[2005] + 1;
      logger.debug(moreMoney[2005] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2005] = lessMoney[2005] + 1;
     logger.debug(lessMoney[2005] + ' ' + money);
    }
}
 if(year === '2006') {
    if(money === 'OVER $500') {
      moreMoney[2006] = moreMoney[2006] + 1;
      logger.debug(moreMoney[2006] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2006] = lessMoney[2006] + 1;
     logger.debug(lessMoney[2006] + ' ' + money);
    }
}
 if(year === '2007') {
    if(money === 'OVER $500') {
      moreMoney[2007] = moreMoney[2007] + 1;
      logger.debug(moreMoney[2007] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2007] = lessMoney[2007] + 1;
     logger.debug(lessMoney[2007] + ' ' + money);
    }
}
  if(year === '2008') {
    if(money === 'OVER $500') {
      moreMoney[2008] = moreMoney[2008] + 1;
      logger.debug(moreMoney[2008] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2008] = lessMoney[2008] + 1;
     logger.debug(lessMoney[2008] + ' ' + money);
    }
}
if(year === '2009') {
    if(money === 'OVER $500') {
      moreMoney[2009] = moreMoney[2009] + 1;
      logger.debug(moreMoney[2009] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2009] = lessMoney[2009] + 1;
     logger.debug(lessMoney[2009] + ' ' + money);
   }
}
if(year === '2010') {
    if(money === 'OVER $500') {
      moreMoney[2010] = moreMoney[2010] + 1;
      logger.debug(moreMoney[2010] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2010] = lessMoney[2010] + 1;
     logger.debug(lessMoney[2010] + ' ' + money);
    }
}
if(year === '2011') {
    if(money === 'OVER $500') {
      moreMoney[2011] = moreMoney[2011] + 1;
      logger.debug(moreMoney[2011] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2011] = lessMoney[2011] + 1;
     logger.debug(lessMoney[2011] + ' ' + money);
    }
}
if(year === '2012') {
    if(money === 'OVER $500') {
      moreMoney[2012] = moreMoney[2012] + 1;
      logger.debug(moreMoney[2012] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2012] = lessMoney[2012] + 1;
     logger.debug(lessMoney[2012] + ' ' + money);
    }
}
if(year === '2013') {
    if(money === 'OVER $500') {
      moreMoney[2013] = moreMoney[2013] + 1;
      logger.debug(moreMoney[2013] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2013] = lessMoney[2013] + 1;
     logger.debug(lessMoney[2013] + ' ' + money);
    }
}
if(year === '2014') {
    if(money === 'OVER $500') {
      moreMoney[2014] = moreMoney[2014] + 1;
      logger.debug(moreMoney[2014] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2014] = lessMoney[2014] + 1;
     logger.debug(lessMoney[2014] + ' ' + money);
    }
}
if(year === '2015') {
    if(money === 'OVER $500') {
      moreMoney[2015] = moreMoney[2015] + 1;
      logger.debug(moreMoney[2015] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2015] = lessMoney[2015] + 1;
     logger.debug(lessMoney[2015] + ' ' + money);
    }
}
if(year === '2016') {
    if(money === 'OVER $500') {
      moreMoney[2016] = moreMoney[2016] + 1;
      logger.debug(moreMoney[2016] + ' ' + money);
    }
  if(money === '$500 AND UNDER') {
      lessMoney[2016] = lessMoney[2016] + 1;
     logger.debug(lessMoney[2016] + ' ' + money);
    }
}
/* checked for value of theft over $500 or $500 and under*/
/* ----------end of checking values of theft-------------*/
if(year === '2001') {
    if(arrest === 'false') {
      arrestFalse[2001] = arrestFalse[2001] + 1;
      logger.debug(arrestFalse[2001] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2001] = arrestTrue[2001] + 1;
     logger.debug(arrestFalse[2001] + ' ' + arrest);
    }
}
if(year === '2002') {
    if(arrest === 'false') {
      arrestFalse[2002] = arrestFalse[2002] + 1;
      logger.debug(arrestFalse[2002] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2002] = arrestTrue[2002] + 1;
     logger.debug(arrestFalse[2002] + ' ' + arrest);
    }
}
if(year === '2003') {
    if(arrest === 'false') {
      arrestFalse[2003] = arrestFalse[2003] + 1;
      logger.debug(arrestFalse[2003] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2003] = arrestTrue[2003] + 1;
     logger.debug(arrestFalse[2003] + ' ' + arrest);
    }
}
if(year === '2004') {
    if(arrest === 'false') {
      arrestFalse[2004] = arrestFalse[2004] + 1;
      logger.debug(arrestFalse[2004] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2004] = arrestTrue[2004] + 1;
     logger.debug(arrestFalse[2004] + ' ' + arrest);
    }
}
 if(year === '2005') {
    if(arrest === 'false') {
      arrestFalse[2005] = arrestFalse[2005] + 1;
      logger.debug(arrestFalse[2005] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2005] = arrestTrue[2005] + 1;
     logger.debug(arrestFalse[2005] + ' ' + arrest);
  }
}
if(year === '2006') {
    if(arrest === 'false') {
      arrestFalse[2006] = arrestFalse[2006] + 1;
      logger.debug(arrestFalse[2006] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2006] = arrestTrue[2006] + 1;
     logger.debug(arrestFalse[2006] + ' ' + arrest);
    }
}
if(year === '2007') {
    if(arrest === 'false') {
      arrestFalse[2007] = arrestFalse[2007] + 1;
      logger.debug(arrestFalse[2007] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2007] = arrestTrue[2007] + 1;
     logger.debug(arrestFalse[2007] + ' ' + arrest);
    }
}
if(year === '2008') {
    if(arrest === 'false') {
      arrestFalse[2008] = arrestFalse[2008] + 1;
      logger.debug(arrestFalse[2008] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2008] = arrestTrue[2008] + 1;
     logger.debug(arrestFalse[2008] + ' ' + arrest);
    }
}
if(year === '2009') {
    if(arrest === 'false') {
      arrestFalse[2009] = arrestFalse[2009] + 1;
      logger.debug(arrestFalse[2009] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2009] = arrestTrue[2009] + 1;
     logger.debug(arrestFalse[2009] + ' ' + arrest);
    }
}
if(year === '2010') {
    if(arrest === 'false') {
      arrestFalse[2010] = arrestFalse[2010] + 1;
      logger.debug(arrestFalse[2010] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2010] = arrestTrue[2010] + 1;
     logger.debug(arrestFalse[2010] + ' ' + arrest);
    }
}
if(year === '2011') {
    if(arrest === 'false') {
      arrestFalse[2011] = arrestFalse[2011] + 1;
      logger.debug(arrestFalse[2011] + ' ' + arrest);
  }
  if(arrest === 'true') {
      arrestTrue[2011] = arrestTrue[2011] + 1;
     logger.debug(arrestFalse[2011] + ' ' + arrest);
  }
}
if(year === '2012') {
    if(arrest === 'false') {
      arrestFalse[2012] = arrestFalse[2012] + 1;
      logger.debug(arrestFalse[2012] + ' ' + arrest);
    }
  if(arrest === 'true') {
      arrestTrue[2012] = arrestTrue[2012] + 1;
     logger.debug(arrestFalse[2012] + ' ' + arrest);
    }
}
if(year === '2013') {
    if(arrest === 'false') {
      arrestFalse[2013] = arrestFalse[2013] + 1;
      logger.debug(arrestFalse[2013] + ' ' + arrest);
  }
  if(arrest === 'true') {
      arrestTrue[2013] = arrestTrue[2013] + 1;
     logger.debug(arrestFalse[2013] + ' ' + arrest);
  }
}
if(year === '2014') {
    if(arrest === 'false') {
      arrestFalse[2014] = arrestFalse[2014] + 1;
      logger.debug(arrestFalse[2014] + ' ' + arrest);
  }
  if(arrest === 'true') {
      arrestTrue[2014] = arrestTrue[2014] + 1;
     logger.debug(arrestFalse[2014] + ' ' + arrest);
  }
}
if(year === '2015') {
    if(arrest === 'false') {
      arrestFalse[2015] = arrestFalse[2015] + 1;
      logger.debug(arrestFalse[2015] + ' ' + arrest);
  }
  if(arrest === 'true') {
      arrestTrue[2015] = arrestTrue[2015] + 1;
     logger.debug(arrestFalse[2015] + ' ' + arrest);
  }
}
if(year === '2016') {
    if(arrest === 'false') {
      arrestFalse[2016] = arrestFalse[2016] + 1;
      logger.debug(arrestFalse[2016] + ' ' + arrest);
}
  if(arrest === 'true') {
      arrestTrue[2016] = arrestTrue[2016] + 1;
     logger.debug(arrestFalse[2016] + ' ' + arrest);
  }
}
/* checked if arrest of the convict is true or false*/
/* end of checking the arrest*/
});
/* eslint no-unused-vars: 0 */
rl.on('close', (line) => {
  let finalJson = JSON.stringify(final);
  logger.debug(finalJson);
  fs.writeFile('../outputdata/output.json', finalJson);
  /* wrote the csv data to json file*/
});
return 'JSON written successfully';
/* checking testcase for returning json*/
};
// convert(2001);
module.exports = convert;
