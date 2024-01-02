import { CharacterModel } from "@/model/CharacterModel";
import { EpisodeModel } from "@/model/EpisodeModel";
import { LocationModel } from "@/model/LoactionModel";

export async function GetTopCharacters(): Promise<CharacterModel[] | null> {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8");
        const data = await response.json();
        const list: CharacterModel[] = [];
        data.map((e: CharacterModel) => list.push(e));
        return list;
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

export async function GetTopEpisodes(): Promise<EpisodeModel[] | null> {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8");
        const data = await response.json();
        const list: EpisodeModel[] = [];
        data.map((e: EpisodeModel) => list.push(e))
        return list;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function SearchCharacter(name: string): Promise<CharacterModel[] | null> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?name=$${name}`);
        const data = await response.json();
        const list: CharacterModel[] = [];
        data.results.map((e: CharacterModel) => list.push(e))
        return list;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function SearchLocation(name: string): Promise<LocationModel[] | null> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/location/?name=$${name}`);
        const data = await response.json();
        const list: LocationModel[] = [];
        data.results.map((e: LocationModel) => list.push(e))
        return list;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function SearchEpisode(name: string): Promise<EpisodeModel[] | null> {
    try {
        const response = await fetch(`https://rickandmortyapi.com/api/episode/?name=$${name}`);
        const data = await response.json();
        const list: EpisodeModel[] = [];
        data.results.map((e: EpisodeModel) => list.push(e))
        return list;
    } catch (error) {
        console.log(error);
        return null;
    }
}