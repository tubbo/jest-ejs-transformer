import Template from "./template.ejs"


describe('jest-ejs-transformer', () => {
  it('transforms ejs within jest', () => {
    const result = Template({ foo: 'bar' })

    expect(result).toEqual("<div>foo: bar</div>\n")
  })
})
