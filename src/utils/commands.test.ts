import {moveForward, moveBackwards, rotateRight, rotateLeft, multipleCommands} from './commands'
import Rover from "../@types/rover";

describe('Move FORWARD - test cases', () => {
    it('facing EAST', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "EAST"
        }
        expect(moveForward(roverState)).toMatchObject({x: 1, y: 0, direction: 'EAST'})
    })

    it('facing WEST', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "WEST"
        }
        expect(moveForward(roverState)).toMatchObject({x: -1, y: 0, direction: 'WEST'})
    })

    it('facing SOUTH', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "SOUTH"
        }
        expect(moveForward(roverState)).toMatchObject({x: 0, y: -1, direction: 'SOUTH'})
    })

    it('facing NORTH', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "NORTH"
        }
        expect(moveForward(roverState)).toMatchObject({x: 0, y: 1, direction: 'NORTH'})
    })
})


describe('Move BACKWARDS test cases', () => {
    it('facing EAST', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "EAST"
        }
        expect(moveBackwards(roverState)).toStrictEqual({x: -1, y: 0, direction: 'EAST'})
    })

    it('facing WEST', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "WEST"
        }
        expect(moveBackwards(roverState)).toStrictEqual({x: 1, y: 0, direction: 'WEST'})
    })

    it('facing SOUTH', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "SOUTH"
        }
        expect(moveBackwards(roverState)).toStrictEqual({x: 0, y: 1, direction: 'SOUTH'})
    })

    it('facing NORTH', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "NORTH"
        }
        expect(moveBackwards(roverState)).toStrictEqual({x: 0, y: -1, direction: 'NORTH'})
    })
})


describe('Rotate LEFT - test cases', () => {
    it('facing EAST', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "EAST"
        }
        expect(rotateLeft(roverState)).toStrictEqual({x: 0, y: 0, direction: 'NORTH'})
    })
    it('facing WEST', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "WEST"
        }
        expect(rotateLeft(roverState)).toStrictEqual({x: 0, y: 0, direction: 'SOUTH'})
    })
    it('facing SOUTH', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "SOUTH"
        }
        expect(rotateLeft(roverState)).toStrictEqual({x: 0, y: 0, direction: 'EAST'})
    })
    it('facing NORTH', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "NORTH"
        }
        expect(rotateLeft(roverState)).toStrictEqual({x: 0, y: 0, direction: 'WEST'})
    })
})


describe('Rotate RIGHT - test cases', () => {
    it('facing EAST', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "EAST"
        }
        expect(rotateRight(roverState)).toStrictEqual({x: 0, y: 0, direction: 'SOUTH'})
    })

    it('facing WEST', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "WEST"
        }
        expect(rotateRight(roverState)).toStrictEqual({x: 0, y: 0, direction: 'NORTH'})
    })

    it('facing SOUTH', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "SOUTH"
        }
        expect(rotateRight(roverState)).toStrictEqual({x: 0, y: 0, direction: 'WEST'})
    })

    it('facing NORTH', () => {
        const roverState: Rover = {
            x: 0,
            y: 0,
            direction: "NORTH"
        }
        expect(rotateRight(roverState)).toStrictEqual({x: 0, y: 0, direction: 'EAST'})
    })
})



describe('Multiple Rover COMMANDS - test cases', () => {
    const roverState: Rover = {
        x: 0,
        y: 0,
        direction: "NORTH"
    }

    it('Multiple Commands', () => {
        expect(multipleCommands(roverState,'RRLLFB')).toStrictEqual({x: 0, y: 0, direction: 'NORTH'})
    })
})
