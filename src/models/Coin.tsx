import React from 'react'
import { ICoinDto, IInputCoin } from "../interfaces/ICoin";

export class Coin implements ICoinDto {
    Id: number;
    Uid: string;
    Coin_name: string;
    Acronym: string;
    LogoUrl: string;
    get LogoJSX(): JSX.Element {
        return (<div style={{ width: 30 }}>
            <img
                alt={`Logo of ${this.Coin_name}`}
                style={{ width: '100%' }}
                src={this.LogoUrl} />
        </div>);
    }

    constructor(coinDto: IInputCoin) {

        this.Id = coinDto.id;
        this.Uid = coinDto.uid;
        this.Coin_name = coinDto.coin_name;
        this.Acronym = coinDto.acronym;
        this.LogoUrl = coinDto.logo;
    }

}