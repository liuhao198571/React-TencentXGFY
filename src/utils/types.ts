export interface TruthType{
    page?: number
}

export interface TotalType{
    lastUpdateTime?:string,
    chinaTotal?:{
        confirm: number
        suspect: number
        dead: number
        heal: number
    }
}