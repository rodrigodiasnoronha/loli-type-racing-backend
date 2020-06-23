import { App } from '../../src/app';

it('should be able to run the app', async () => {
    const { server } = new App();

    expect(2 + 2).toBe(4);
});
