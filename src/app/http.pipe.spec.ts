import { HttpPipe } from './http.pipe';

describe('HttpPipe', () => {
  const pipe = new HttpPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('Deve transformar http em https', () => {
    const url = '://www.google.com';
    expect(pipe.transform(`http${url}`)).toBe(`https${url}`);
  });
});
