namespace StatusBarKind {
    export const Points = StatusBarKind.create()
}
/**
 * La parte 2 del juego es para 3 de abril de 2023. El juego es para CodeFighters.
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("!Un rayo nooooooooooo¡")
    game.splash("Que mal en serio te volvere a ver en la parte 2.!Adios¡")
    game.splash("Si deseas probar la nueva version espera al 3 de abril de 2023")
    game.over(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("Rendirse")
    game.over(false)
})
scene.setBackgroundImage(assets.image`AssetScreen`)
game.setDialogFrame(assets.image`Text`)
game.splash("Space Invaders")
let mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
let mySprite2 = sprites.create(assets.image`Enemy`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
