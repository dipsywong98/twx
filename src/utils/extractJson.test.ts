import { extractJson } from './extractJson'

describe('extractJson', () => {
  it('can parse normal json', () => {
    const result = extractJson('{"a": "b"}')
    expect(result).toEqual({ a: 'b' })
  })

  it('can parse json in some rubbish', () => {
    const result = extractJson('fwegds{"a": "b"}eeefds')
    expect(result).toEqual({ a: 'b' })
  })

  it('can parse json in some extra { at beginning', () => {
    const result = extractJson('{fw{egds{{"a": "b"}eeefds')
    expect(result).toEqual({ a: 'b' })
  })

  it('can parse json in some extra } at the end', () => {
    const result = extractJson('fwegds{"a": "b"}ee}efd}s}')
    expect(result).toEqual({ a: 'b' })
  })

  it('can parse json in some extra {}', () => {
    const result = extractJson('fwegds{{"a": "b"}}ee}efd}s}')
    expect(result).toEqual({ a: 'b' })
  })
})
