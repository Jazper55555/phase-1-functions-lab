function distanceFromHqInBlocks(pickup){
    if (pickup < 42){
        return 42 - pickup
    }
    else {
        return pickup - 42
    }
}
distanceFromHqInBlocks(43)
distanceFromHqInBlocks(50)
distanceFromHqInBlocks(34)

function distanceFromHqInFeet(pickup) {
    let blocks = distanceFromHqInBlocks(pickup);
    return blocks * 264;
  }
distanceFromHqInFeet(43)
distanceFromHqInFeet(50)
distanceFromHqInFeet(34)

function distanceTravelledInFeet(start, destination){
    if (start < destination){
        return (destination - start) * 264
    }
    else {
        return (start - destination) * 264
    }
}
distanceTravelledInFeet(43, 48)
distanceTravelledInFeet(50, 60)
distanceTravelledInFeet(34, 28)

function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400){
        return 0
    }
    else if (distance > 400 && distance <= 2000){
        return (distance - 400) * .02
    }
    else if (distance > 2000 && distance <= 2500){
        return 25
    }
    else if (distance > 2500){
        return 'cannot travel that far'
    }
}
calculatesFarePrice(43, 44)
calculatesFarePrice(34, 32)
calculatesFarePrice(50, 58)
calculatesFarePrice(34, 24)