//colors
const r = 'red'
const b = 'blue'
const g = 'green'
const y = 'yellow'
const o = 'orange'
const w = 'white'
//directions
const c = 'clockwise'
const cc = 'counterclockwise'
const ma = 'middleAway'
const mt = 'middleTowards'
//targets
const f = 'face'
const row = 'row'
const column = 'column'

//Rubix cube layout (US version)
//  o      
//y g w  
//  r      
//  b      
//links will be ordered clockwise (left, up, right, down) from a given face
//maybe change in perspective should be simplest shift from above
orangeFace = [[o, o, o],
            [o, o, o],
            [o, o, o]]
orangeLinks = [yellowFace, blueFace, whiteFace, greenFace]
orangeMidVert = [blueFace, redFace, greenFace]
orangeMidHor = [yellowFace, redFace, whiteFace]
yellowFace = [[y, y, y],
            [y, y, y],
            [y, y, y]]
yellowLinks = [redFace, blueFace, orangeFace, greenFace]
yellowMidVert = [redFace, whiteFace, orangeFace]
yellowMidHor = [blueFace, whiteFace, greenFace]
greenFace = [[g, g, g],
            [g, g, g],
            [g, g, g]]
greenLinks = [yellowFace, orangeFace, whiteFace, redFace]
greenMidVert = [orangeFace, blueFace, redFace]
greenMidHort = [yellowFace, blueFace, whiteFace]
whiteFace = [[w, w, w],
            [w, w, w],
            [w, w, w]]
whiteLinks = [greenFace, orangeFace, blueFace, redFace]
whiteMidVert = [orangeFace, yellowFace, blueFace]
whiteMidHor = [greenFace, yellowFace, blueFace]
redFace = [[r, r, r],
            [r, r, r],
            [r, r, r]]
redLinks = [yellowFace, greenFace, whiteFace, blueFace]
redMidVert = [greenFace, orangeFace, blueFace]
redMidHor = [yellowFace, orangeFace, whiteFace]
blueFace = [[b, b, b],
            [b, b, b],
            [b, b, b]]
blueLinks = [yellowFace, orangeFace, whiteFace, redFace]
blueMidVert = [orangeFace, greenFace, redFace]
blueMidHor = [yellowFace, greenFace, whiteFace]

//print all 6 faces
for(let x = 0; x <3; x++){
        console.log(orangeFace[x, x])
}for(let x = 0; x <3; x++){
    console.log(yellowFace[x, x])
}for(let x = 0; x <3; x++){
    console.log(greenFace[x, x])
}for(let x = 0; x <3; x++){
    console.log(whiteFace[x, x])
}for(let x = 0; x <3; x++){
    console.log(redFace[x, x])
}for(let x = 0; x <3; x++){
    console.log(blueFace[x, x])
}

holder = [blueFace[0,0], blueFace[0,1], blueFace[0,2]]

console.log(blueFace)

//TURN METHOD
//would only need 3 param: rubixcube obj, target, direction
//target could be a face, row, or column but effect will be same unless it's a middle
//need to find relevant pieces and make changes accordingly
/*turn(rubixCube, target, direction)
 if(target === face){
    if(direction === c){
        //change face
        holder = face
        face[0,0] === holder[2,0]
        face[0,1] === holder[1,0]
        face[0,2] === holder[0,0]
        face[1,0] === holder[2,1]
        face[1,1] === holder[1,1] //middle stays same
        face[1,2] === holder[0,1]
        face[2,0] === holder[2,2]
        face[2,1] === holder[1,2]
        face[2,2] === holder[0,2]
        //for loop covers the above assignments
        for(let x = 0; x < 3; x++){
            let a = 2
            for(let y = 0; y < 3; y++){
                face[x, y] === holder [a, x]
                a--
            }
        }
        //change rim (holder will be 1x3 array)
        //hold rim 4
        holder[] = [Link[3,[0,0]], Link[3,[0,1]], Link[3,[0,2]]]
        rim 4 === rim 3
        Link[3,[0,0]] === Link[2,[2,0]]
        Link[3,[0,1]] === Link[2,[1,0]]
        Link[3,[0,2]] === Link[2,[0,0]]
        rim 3 === rim 2
        Link[2,[0,0]] === Link[1,[2,0]]
        Link[2,[1,0]] === Link[1,[2,1]]
        Link[2,[2,0]] === Link[1,[2,2]]
        rim 2 === rim 1
        Link[1,[2,0]] === Link[0,[2,2]]
        Link[1,[2,1]] === Link[0,[2,1]]
        Link[1,[2,2]] === Link[0,[2,0]]
        for(let x=3; x>0; x--){//for loop needs work
            let a = 2;
            for(let y=0; y<3; y++){
                if(x===0){
                    Link[x,[0,y]] === Link[2,[a,0]]
                    a--
                }if(x===1){
                    Link[x,[y,0]] === Link[1,[2,0]]
                }if(x===2){
                    Link[x,[0,y]] === Link[0,[2,0]]
                }
            }
        }
        rim 1 === rim 4
        Link[0,[0,2]] === holder[0]
        Link[0,[1,2]] === holder[1]
        Link[0,[2,2]] === holder[2]
    }if(direction === cc){
        //change face
        holder = face
        face[0,0] === holder[0,2]
        face[0,1] === holder[1,2]
        face[0,2] === holder[2,2]
        face[1,0] === holder[0,1]
        face[1,1] === holder[1,1] //middle stays same
        face[1,2] === holder[2,1]
        face[2,0] === holder[0,0]
        face[2,1] === holder[1,0]
        face[2,2] === holder[2,0]
        var a = 2;
        for(var x=0; x<3; x++){
            for(var y=0; y<3; y++){
                face[x,y] === holder[y,a]
            }a--
        }
        //change rim
        //hold rim 1
        holder[] = [Link[0,[0,2]], Link[0,[1,2]], Link[0,[2,2]]]
        rim 1 === rim 2
        Link[0,[0,2]] === Link[1,[2,0]]
        Link[0,[1,2]] === Link[1,[2,1]]
        Link[0,[2,2]] === Link[1,[2,2]]
        rim 2 === rim 3
        Link[1,[2,0]] === Link[2,[0,0]]
        Link[1,[2,1]] === Link[2,[1,0]]
        Link[1,[2,2]] === Link[2,[2,0]]
        rim 3 === rim 4
        Link[2,[0,0]] === Link[3,[0,2]]
        Link[2,[1,0]] === Link[3,[0,1]]
        Link[2,[2,0]] === Link[3,[0,0]]
        rim 4 === rim 1
        Link[3,[0,0]] === holder[0]
        Link[3,[0,1]] === holder[1]
        Link[3,[0,2]] === holder[2]
    }
}if(target === )
    }if(direction === ma){

    }
*/