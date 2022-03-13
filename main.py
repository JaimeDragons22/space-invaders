@namespace
class StatusBarKind:
    Points = StatusBarKind.create()
"""

La parte 2 del juego es para 3 de abril de 2023. El juego es para CodeFighters.

"""

def on_a_pressed():
    game.splash("!Un rayo nooooooooooo¡")
    game.splash("Que mal en serio te volvere a ver en la parte 2.!Adios¡")
    game.splash("Si deseas probar la nueva version espera al 3 de abril de 2023")
    game.over(True)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_b_pressed():
    game.splash("Rendirse")
    game.over(False)
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

scene.set_background_image(assets.image("""
    AssetScreen
"""))
game.set_dialog_frame(assets.image("""
    Text
"""))
game.splash("Space Invaders")
mySprite = sprites.create(assets.image("""
    Player
"""), SpriteKind.player)
mySprite2 = sprites.create(assets.image("""
    Enemy
"""), SpriteKind.player)
controller.move_sprite(mySprite, 100, 100)