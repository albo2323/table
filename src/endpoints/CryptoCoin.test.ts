import React from 'react';
import { getCoinsData } from './CryptoCoin';

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ rates: { CAD: 1.42 } }),
    })
) as any;

test('get coins data return empty array', async () => {

    (fetch as unknown as jest.Mock).mockImplementationOnce(() => Promise.resolve({ ok: true, json: () => [] }));
    const data = await getCoinsData();
    expect(data.length).toBe(0);
});

test('should throw', async () => {

    (fetch as unknown as jest.Mock).mockRejectedValueOnce(() => Promise.reject({ ok: false }));

    try {
        await getCoinsData();
    } catch (e) {
        expect((e as Error).message).toBe('Failed to fetch data');
    }
});