import DD_ENGINE from './assets/images/ENGINE.png'; 
import WEATHER from './assets/images/Weather_Prediction.png'
import SPACE_INVADERS from './assets/images/Space_Invaders.png'

class Project {
    constructor(id, name, image, info) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.info = info;
    }
}

var arr = [];

arr[0] = new Project(0,'Doudizhu Engine', DD_ENGINE, 'Created a game engine for the chinese card game Doudizhu in the language racket it involves player ');
arr[1] = new Project(1,'Weather Prediction Algorithm', WEATHER,'')
arr[2] = new Project(2,'Space Invaders', SPACE_INVADERS, '')


export default arr;
