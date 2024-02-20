var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY }
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        /*
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
        sawBladeHitZone.x = 400;
        sawBladeHitZone.y = 450;
        
        game.addGameItem(sawBladeHitZone);
        
        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage);
        
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        */
        
        
        //function starts below
        
        //------------------------------
        function createSawBlade(x, y) {
            var createSawBlade = (x + y);
            
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
        sawBladeHitZone.x = x;
        sawBladeHitZone.y = y;
        
        game.addGameItem(sawBladeHitZone);
        
        var obstacleImage = draw.bitmap('img/sawblade.png');
        sawBladeHitZone.addChild(obstacleImage);
        
        obstacleImage.x = -25;
        obstacleImage.y = -25;
            
            }  
        //-----------------------------------------------
            createSawBlade(1400, 310);
            createSawBlade(800, 240);
            createSawBlade(1100, 315);
            
            //------------------------------------
            
            function createTiger(x, y) {
                
                var Tiger = (x + y);
                
                
                
                
                
                
            
            
            var hitZoneSize = 25;
            var damageFromObstacle = 40;
            var tigerZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
            tigerZone.x = x;
            tigerZone.y = y;
        
            game.addGameItem(tigerZone);
        
            var obstacleImageTiger = draw.bitmap('http://pngimg.com/uploads/tiger/tiger_PNG23248.png');
            tigerZone.addChild(obstacleImageTiger);
            
            obstacleImageTiger.scaleX = 0.06;
            obstacleImageTiger.scaleY = 0.06;
        
            obstacleImageTiger.x = -50;
            obstacleImageTiger.y = -40;
            
            
            
            
            tigerZone.onProjectileCollision = function() {
                game.changeIntegrity(20);
                game.increaseScore(100);
                tigerZone.fadeOut();
            };
            
            }
        
            createTiger(1600, groundY - 20);
            createTiger(1880, groundY - 10);
            createTiger(2200, groundY - 40);
            
            
            //-----------------------------------
            for (var i = 0; i < levelData.gameItems.length; i++) {
                var eachElement = levelData.gameItems[i];
                
                var firstGameItemObject = levelData.gameItems[i];
                var firstX = firstGameItemObject.x;
                var firstY = firstGameItemObject.y;
                createSawBlade(firstX, firstY);
            }
            //                   ----------------------------------------
            
            
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.bitmap('data:image/jpeg;base64,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');
            
            redSquare.scaleX = 0.2;
            redSquare.scaleY = 0.25;
            
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            
            enemy.x = 400;
            enemy.y = groundY-50;
            
            game.addGameItem(enemy);
            
            enemy.velocityX = - 1;
            enemy.rotationalVelocity = 10;
            
            enemy.onPlayerCollision = function() {
                
                game.increaseScore(- 10);
                game.changeIntegrity(- 10);
                enemy.fadeOut();
                
            };
            
            enemy.onProjectileCollision = function() {
                game.changeIntegrity(50);
                game.increaseScore(100);
                enemy.fadeOut();
            };
            
            
            
            
            //----------------------------------------
            
            function createEnemy(x, y) {
                
                var enemy =  game.createGameItem('enemy',25);
                var redSquare = draw.bitmap('data:image/jpeg;base64,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');
            
                
                redSquare.scaleX = 0.2;
                redSquare.scaleY = 0.25;
            
                redSquare.x = -25;
                redSquare.y = -25;
                enemy.addChild(redSquare);
                
                enemy.x = x;
                enemy.y = y;
            
                game.addGameItem(enemy);
            
                enemy.velocityX = - 1;
                enemy.rotationalVelocity = 10;
                
                
                enemy.onPlayerCollision = function() {
                
                game.increaseScore(- 10);
                game.changeIntegrity(- 10)
                enemy.fadeOut();
                
            };
            
            enemy.onProjectileCollision = function() {
                game.changeIntegrity(50)
                game.increaseScore(200);
                enemy.fadeOut();
            }
            }
            
            createEnemy(1000, groundY - 40);
            createEnemy(2300, groundY - 40); 
            createEnemy(1800, groundY - 60);
            
            
            //-----------------------------------------------------
            
            function createMedal(x, y) {
                
                var medal =  game.createGameItem('medal',25);
                var goldMedal = draw.bitmap('data:image/jpeg;base64,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');
                
                goldMedal.scaleX = 0.2;
                goldMedal.scaleY = 0.25;
            
                goldMedal.x = -25;
                goldMedal.y = -25;
                medal.addChild(goldMedal);
                
                medal.x = x;
                medal.y = y;
            
                game.addGameItem(medal);
            
                medal.velocityX = - 1;
                medal.rotationalVelocity = 10;
                
                
                medal.onPlayerCollision = function() {
                
                game.increaseScore(1000);
                game.changeIntegrity(1000)
                medal.fadeOut();
                
            };
            
            
            }
            

            createMedal(2400, groundY - 150);
            
            
            
        // DO NOT EDIT CODE BELOW HERE
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
