import { fetchData } from "../components/tableComponent/logic/requests";
import { IInputCoin } from "../interfaces/ICoin";
import { Coin } from "../models/Coin";

const coinsEndpoint = "https://random-data-api.com/api/crypto_coin/random_crypto_coin?size=10";

export async function getCoinsData() {
    const coins = await fetchData<IInputCoin[]>(coinsEndpoint);

    if (!Array.isArray(coins) || coins.length === 0) {
        return [];
    };

    return coins.map(x => new Coin(x));
};