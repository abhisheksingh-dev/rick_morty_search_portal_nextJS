import { CharacterModel } from "@/model/CharacterModel";
import { LocationModel } from "@/model/LoactionModel";

export async function GetTopCharacters(): Promise<CharacterModel[] | null> {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8");
        const data = await response.json();
        try {
            const list: CharacterModel[] = [];
            data.map((e: CharacterModel) => list.push(e));
            return list;
        } catch (error) {
            console.log(error);
            return null;
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function GetTopLocations(): Promise<LocationModel[] | null> {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/location/1,2,3,4,5,6,7,8");
        const data = await response.json();
        const list: LocationModel[] = [];
        data.map((e: LocationModel) => list.push(e))
        return list;
    } catch (error) {
        console.log(error);
        return null;
    }
}