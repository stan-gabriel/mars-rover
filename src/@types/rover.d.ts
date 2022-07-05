export default interface Rover {
    x: number,
    y: number,
    direction: directions
}

export type directions = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

export type command = 'F' | 'B' | 'L' | 'R'