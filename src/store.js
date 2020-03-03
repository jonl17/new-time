import { writable, readable } from "svelte/store";

export const tasks = writable([]);
export const colors = readable(["#ff8364", "#ffb677", "#5f6caf"]);
export const colorIndex = writable(0);
export const id = writable(0);
