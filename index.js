// Create a 4 fuction that returns a number of blocks
function distanceFromHqInBlocks(lotion){
    //if statement for condtion
    if (lotion < 42){ 
        //trying to return diffence in blocks from 42
        return (42 - lotion)
     }
     //trying to re
      else {
        return (lotion - 42)
      }
}
//
function distanceFromHqInFeet(lotion){
    return (distanceFromHqInBlocks(lotion) *264);
}


function distanceTravelledInFeet(start, destination){
    return(Math.abs(start-destination) *264)
}

function calculatesFarePrice(start, destination) {
    let calculatedDis = distanceTravelledInFeet(start, destination);
    if (calculatedDis <= 400) {
        return (0);
    }
     else if (calculatedDis >= 400 && calculatedDis <= 2000) {
            return((calculatedDis -400)* 0.02);
        }
         else if (calculatedDis >= 2000&& calculatedDis <= 2500) { 
            return(25)
        }
        else if (calculatedDis > 2500){
            return "cannot travel that far"
        }
}

    