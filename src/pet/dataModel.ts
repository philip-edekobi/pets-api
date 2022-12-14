import { Pet } from "../types/index";

export default function model({ database }: { database: any }) {
    return Object.freeze({
        getAll,
        findByFilter,
        findById,
    });

    function getAll() {
        return database.pets;
    }

    async function findByFilter({ ...filterProps }: any) {
        let pets = [];

        for (let prop in filterProps) {
            pets = database.pets.filter(
                (pet: any) => pet[prop] === filterProps[prop]
            );
        }

        return pets;
    }

    async function findById(id: number) {
        const pet = database.pets.filter((pet: Pet) => pet.id === id);

        if (pet) return pet;

        throw new Error("pet does not exist");
    }
}
