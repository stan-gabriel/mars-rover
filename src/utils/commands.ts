import Rover from "../@types/rover";

export const moveForward = (roverState: Rover) => {
    // let rover = { ...roverState};
    switch (roverState.direction) {
        case "EAST":
            roverState.x++;
            break
        case "NORTH":
            roverState.y++;
            break
        case "SOUTH":
            roverState.y--;
            break
        case "WEST":
            roverState.x--;
            break
    }
    return roverState
}

export const moveBackwards = (roverState: Rover) => {
    if (roverState.direction === 'EAST') {
        roverState.x--;
    } else if (roverState.direction === 'NORTH') {
        roverState.y--;
    } else if (roverState.direction === 'SOUTH') {
        roverState.y++;
    } else if (roverState.direction === 'WEST') {
        roverState.x++;
    }

    return roverState
}

export const rotateLeft = (roverState: Rover) => {
    switch (roverState.direction) {
        case "EAST":
            roverState.direction = "NORTH";
            break
        case "NORTH":
            roverState.direction = "WEST";
            break
        case "SOUTH":
            roverState.direction = "EAST";
            break
        case "WEST":
            roverState.direction = "SOUTH";
            break
    }
    return roverState
}

export const rotateRight = (roverState: Rover) => {
    switch (roverState.direction) {
        case "EAST":
            roverState.direction = "SOUTH";
            break
        case "NORTH":
            roverState.direction = "EAST";
            break
        case "SOUTH":
            roverState.direction = "WEST";
            break
        case "WEST":
            roverState.direction = "NORTH";
            break
    }

    return roverState
}

export const multipleCommands = (roverState: Rover, commands: String) => {
    commands.toUpperCase().split('').forEach(command => {
        switch (command) {
            case "F":
                moveForward(roverState)
                break
            case "B":
                moveBackwards(roverState)
                break
            case "L":
                rotateLeft(roverState)
                break
            case "R":
                rotateRight(roverState)
                break
        }
    })

    return roverState
}