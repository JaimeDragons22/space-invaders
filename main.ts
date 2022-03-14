namespace StatusBarKind {
    export const Points = StatusBarKind.create()
}
// La parte 2 del juego es para 3 de abril de 2023. El juego es para CodeFighters.
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3 = sprites.create(assets.image`Rayo`, SpriteKind.Player)
    game.splash("!Genial tu puntuacion es 40¡ ")
    game.splash("!Si que asi podras llegar 100 puntos¡")
    game.over(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Rendirse")
    game.over(false)
})
let mySprite3: Sprite = null
scene.setBackgroundImage(assets.image`AssetScreen`)
game.setDialogFrame(assets.image`Text`)
game.splash("Space Invaders")
let mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`Enemy`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
