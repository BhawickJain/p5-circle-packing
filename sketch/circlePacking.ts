interface Circle {
    pos: Position;
    radius: number;
}
interface Position {
    x: number;
    y: number;
}

function calculatePackedCircles(areaWidth: number, areaHeight: number): Circle[] {
    //TODO: you need to implement this function properly!  
    //These are just a couple of random circles, with no consideration yet for overlap.
    
    const validatedCircles: Circle[] = [];

    for (let i = 0; i <=2000; i++) {
       const candidate: Circle = { pos: { x: random(0, areaWidth), y: random(0, areaHeight) }, radius: random(0,40)} 
       if (!isOverlapping(candidate, validatedCircles)) {
        validatedCircles.push(candidate) 
       }
    }

    return validatedCircles;
}

function isOverlapping(candidate: Circle, validatedCircles: Circle[]): boolean {
    let doesOverlap: boolean = false

    for (let validated of validatedCircles) {
        console.log(doesOverlap)
        doesOverlap = distance(candidate.pos, validated.pos) < (candidate.radius + validated.radius)
        if (doesOverlap === true) {break};
    } 

    return doesOverlap
}

/** Returns the distance between two given positions.
    This function doesn't require p5.js 
 */
function distance(p1: Position, p2: Position): number {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    const hyp = Math.sqrt(x * x + y * y);
    return hyp;
}