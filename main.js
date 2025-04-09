class Robot{
    constructor() {
        this.item = document.getElementById("ROBOT")
        this.item.style.left = "7px"
        this.item.style.top  = "7px"
        this.x        = 0
        this.y        = 0
        this.barriers = [
            [0, 1, 0, 0 ,0,], 
            [0, 1, 0, 1 ,0,], 
            [0, 1, 0, 1 ,0,], 
            [0, 0, 0, 1 ,0,], 
        ]
    }
    async move_left(){
        let position = parseInt(this.item.style.left)
        this.item.style.left = `${position-52}px`
        await new Promise(res=>setTimeout(res,600))
        this.x-=1
        await this.check_success()
    }
    async move_right(){
        let position = parseInt(this.item.style.left)
        this.item.style.left = `${position+52}px`
        await new Promise(res=>setTimeout(res,600))
        this.x+=1
        await this.check_success()
    }
    async move_up(){
        let position = parseInt(this.item.style.top)
        this.item.style.top = `${position-52}px`
        await new Promise(res=>setTimeout(res,600))
        this.y-=1
        await this.check_success()
    }
    async move_down(){
        let position = parseInt(this.item.style.top)
        this.item.style.top = `${position+52}px`
        await new Promise(res=>setTimeout(res,600))
        this.y+=1
        await this.check_success()
    }
    async check_success(){
        // Check if we hit a rock
        if (this.barriers[this.y][this.x] == 1){
            document.body.style.background="red"
            await new Promise(res=>setTimeout(res,100))
            alert("Ahhhh you hit a wall! Try moving the robot where there aren't a bunch of rocks")
            document.location.reload()
        }
        // check if we got to the goal
        else if (this.x == 4 && this.y==3 ){
            document.getElementById("g").style['background-image'] = 'url("glitter.gif")'
            document.body.style['background-image'] = 'url("glitter.gif")'
        }
    }
}

async function main(){
    let robot = new Robot()
    /**** Code within here to start  ****/
    // Mission: Try and get to the end without going through a wall
    // Details: There are 4 options to move the robot, combine them in sequence, 
    // and click run and watch the robot follow your commands!
    // Options:
    //      1. await robot.move_down()
    //      2. await robot.move_up()
    //      3. await robot.move_right()
    //      4. await robot.move_left()

    await robot.move_down()
    await robot.move_down()
    await robot.move_down()
    await robot.move_right()
    await robot.move_right()
    await robot.move_up()
    await robot.move_up()
    await robot.move_up()
    await robot.move_right()
    await robot.move_right()
    await robot.move_down()
    await robot.move_down()
    await robot.move_down()



    /**** Code within here to start  ****/
}
