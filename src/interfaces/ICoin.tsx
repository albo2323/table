export interface IInputCoin {
    id: number;
    uid: string;
    coin_name: string;
    acronym: string;
    logo: string;
}

export interface ICoinDto {
    Id: number;
    Uid: string;
    Coin_name: string;
    Acronym: string;
    LogoUrl: string;
    LogoJSX: JSX.Element;
}