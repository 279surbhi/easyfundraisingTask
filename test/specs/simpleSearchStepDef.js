


describe('Find a cause', () => {
    it('should open find a cause page and should match the typed word with the search result', async () => {
        browser.url('https://www.easyfundraising.org.uk/${path}');
        const header = await $('span=Find a cause').click()
       // const pageHeader = pageHeader.click()
        const type = await $('#sagc-hero-search-input').click()
        await $('#sagc-hero-search-input').setValue('Maxwell Swim Club');
        const word = await $('span=Search cause').click()  
        const searchWord = await $('#cause-search-form-input')
       
    })
})

