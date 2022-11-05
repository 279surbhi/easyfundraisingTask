

const Page = require('./page');

class simpleSearchPageObject extends Page {


get pageHeader ()
{
    return $('span=Find a cause')
}


get searchBar ()
{
    return $('//*[@id="sagc-hero-search-input"]')
}

get result()
{
    return $('//*[@id="sagc-hero-search-input-auto-suggest"]/li[3]')
}
async search () {
   
    await this.pageHeader.click();
}

async open (){
await this.searchBar.click();
await $('//*[@id="sagc-hero-search-input"]').setValue('Max')

}

async select (){
    await this.result.click();
}

/**
 * overwrite specific options to adapt it to page object
 */
open () {
    return super.open('login');
}
}

module.exports = new simpleSearchPageObject();