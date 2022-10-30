namespace SpriteKind {
    export const PowerUP = SpriteKind.create()
    export const Mode = SpriteKind.create()
    export const Bomb = SpriteKind.create()
    export const Shield = SpriteKind.create()
    export const Boss = SpriteKind.create()
    export const Enemyshot = SpriteKind.create()
    export const Health = SpriteKind.create()
    export const Bossshot = SpriteKind.create()
    export const Bossdie = SpriteKind.create()
    export const powerdie = SpriteKind.create()
    export const mode2 = SpriteKind.create()
    export const Minion = SpriteKind.create()
    export const boss2die = SpriteKind.create()
    export const Boss2 = SpriteKind.create()
    export const Boss2shot = SpriteKind.create()
    export const Minion2 = SpriteKind.create()
    export const Armor = SpriteKind.create()
    export const Homingminion = SpriteKind.create()
    export const Powerup2 = SpriteKind.create()
    export const Homingfire = SpriteKind.create()
    export const Enemyfiretimer = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemyshot2 = SpriteKind.create()
    export const enemy2firetimer = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Miniplayer = SpriteKind.create()
    export const indicator = SpriteKind.create()
    export const Projectiletimer = SpriteKind.create()
}
namespace StatusBarKind {
    export const bosshealth = StatusBarKind.create()
    export const boss2health = StatusBarKind.create()
    export const poweruphealth = StatusBarKind.create()
    export const Fastbomber = StatusBarKind.create()
    export const homingminionHP = StatusBarKind.create()
    export const Bigenemyhealth = StatusBarKind.create()
    export const bigenemyhealth2 = StatusBarKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        bigenemydeath(otherSprite)
    } else {
        music.bigCrash.play()
        info.changeLifeBy(-1)
        bigenemydeath(otherSprite)
        sprite.destroy()
        scene.cameraShake(4, 500)
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            tripplefire.lifespan = 0
        }
    }
})
statusbars.onZero(StatusBarKind.bigenemyhealth2, function (status) {
    callbigenemy2death(status.spriteAttachedTo())
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Powerup2, function (sprite, otherSprite) {
    if (tripplefire && tripplefire.lifespan == 0) {
        music.powerUp.play()
        otherSprite.destroy()
        powerup2.lifespan = 0
        info.changeScoreBy(1000)
        powerupactivate = false
    } else {
        music.powerUp.play()
        otherSprite.destroy()
        tripplefire = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 6 . . . . . 
            . . . . . . . . . 6 6 6 . . . . 
            . . . . . . . . . 6 6 6 . . . . 
            . . . . . . . . . 6 6 6 . . . . 
            . . . . . . . . . 6 . 6 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.mode2)
        tripplefire.setPosition(149, 108)
        tripplefire.lifespan = 9999999
        info.changeScoreBy(1000)
        powerup2activate = false
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss2, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy(effects.warmRadial, 100)
    statusbars.getStatusBarAttachedTo(StatusBarKind.boss2health, otherSprite).value += -0.4
    if (Doublefire && Doublefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.boss2health, otherSprite).value += 0.1
    }
    if (tripplefire && tripplefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.boss2health, otherSprite).value += 0.07
    }
})
statusbars.onZero(StatusBarKind.Bigenemyhealth, function (status) {
    bigenemydeath(status.spriteAttachedTo())
})
function instructions () {
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.setDialogFrame(img`
        . . . . . . . . . . . . . . . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . 8 9 9 9 9 9 9 9 9 9 9 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 1 1 1 1 1 1 1 1 1 9 8 . 
        . 8 9 9 9 9 9 9 9 9 9 9 9 8 . 
        . 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . . . . . . . . . . . . . 
        `)
    game.showLongText("Instructions                                 Use arrow keys to move the ship", DialogLayout.Center)
    music.knock.play()
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 9 1 9 9 9 6 6 . . . 
        . . . . 6 9 9 1 9 9 9 9 6 . . . 
        . . . . 6 9 9 1 9 9 9 9 6 . . . 
        . . . . 6 6 9 1 1 1 9 6 6 . . . 
        . . . . . 6 6 9 9 9 6 6 . . . . 
        . . . . . . 6 6 9 6 6 . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.showLongText("Press A to shoot                                             Hold A to use Laser. green ship cannot do use lasers but can still shoot", DialogLayout.Center)
    game.showLongText("if you are using the red ship press B to make a miniship", DialogLayout.Center)
    music.knock.play()
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888fffff8888888888fffffff8888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888ff888888888888ffff8888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888f8888888888888cf888888888888888888888888888888888888888cfffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff88888bdddddddddddd888bddddddddddddd96888888889dddddb888688888bddddddddddddb89ddddddddddddddd6888ccffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff8888b1111111111111d8889111111111111111d8888886111111d888688861111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888b11111111111111d88891111111111111111b88888911111116888888d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888d11111111111111d8889111111111111111118888811111111b88888b11111111111111198d111111111111111688696ccffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888111111999999999b8889111119999991111116888b11111111d88888b11111d99999999968d1111199999999996886966cffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff888611111b888888888888891111d888888b111116888d11111111168888911111888888888888d1111d88888888888886966cffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff888611111b888888888888891111d888888611111688611111111119888891111d888888888888d1111d88888888888889966cffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff888611111d888888888888891111d888888611111688b11111911111688891111d888888888888d1111d8888888888869996ccffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888111111111111119888891111d888888611111688d1111d611111b88891111d888699999888d111111111111168869996cfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888d11111111111111168891111d888888b1111168611111b8d1111d88891111d888699996888d111111111111168869966cfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff8886111111111111111d88911111dddddd111111689111116891111168891111d888699666888d11111111111116886996cffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff8888b1111111111111116891111111111111111d8811111d8861111198891111d8886996cc888d11111111111116886966cffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff8888869999999911111b891111111111111111b8b111119666d1111d8891111d888666688888d1111d88888888888696ccffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff8888888888888611111989111111111111111b88d111111111111111b891111d888888888888d1111d88888888888866cfffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff8888888888888861111198911111999999996888611111111111111119891111d888888888888d1111d88888888888886ccffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff88888888888888611111b891111d888888888888b111111111111111116911111888888888888d1111d888888888888866cffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888d1111111ddd111111b891111d888888888888d11111dddddd111111bb111111dd111111198d11111111111111168866ccfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888d11111111111111116891111d888888888886111119888888611111d611111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888d11111111111111198891111d88869996888911111b8888888d111116d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff888d11111111111111988891111d8886999688611111188888888b1111198d1111111111111b8d111111111111111688696ccffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff8888888886666666688888888888888699988888888888889968888888888886666666688888888888888888888888886966cffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffff8888888888888888888888888888888999688888888888869968888888888888888888888888888888888888888888889966cffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffff8888888888888888888888888888869966c8888888888899996888888888888888888888888888888888888888888869966cffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffc6666668888888869999666666699996cffc8866666699996668666666666888888866666966666666666666666699996cfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffcc699999999999999999999999999966cfffc669999999966ccc699999999999999999999999999999999999999999966cfffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffcc6666669999999996666666666666cffffcc6666666666cffcc6666699999999999999669999999666666666666666ccfffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffccccc666666666666ccccc6666cccffffffcccc6666cccffffccc66666666666666666666666666666666666666ccccffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffcccccccccccccffffccccccfffffffffffccccccfffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888f888888888888888888f888888888888888888888fffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff886dddddddddddddddd888bd11111111111968886ddddddddddddddb8886ddddddddddddddddd6888ccfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff886111111111111111d88d111111111111111b886111111111111111168611111111111111111688666cffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff886111111111111111d8b11111111111111111886111111111111111116611111111111111111688696cffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff886111111111111111d8d11111111111111111b8611111111111111111b611111111111111111688696cffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111d999999999b611111d688888b11111b8611111d99999d11111d8b9999d11111d9999b888696cffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b88888881111198611111b888888d1111d888888611111688888888996cffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888886996cffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888869996cffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8886888d111198611111b888888d1111d888888611111688699999996cffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111b88888811111d88888861111168869999966ccffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111198888886111116886999666ccfffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111111111111111b8886886111116886996cccfffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111d88866886111116886996cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d11119861111111111111119888896886111116886966cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d1111986111119666d1111d8888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111988888861111198611111b888b11111b888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b888666668881111111ddddd111111b8611111b8888d11111688898886111116886966cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b88899996888d1111111111111111168611111b8888b11111988868886111116886966cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8889999688861111111111111111988611111b88888d1111168888886111116886966cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff88611111b8889966688886111111111111119888611111b88888611111d8888886111116886966cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888888888888996ccc888888666666666668888888888888888888888888888888888888886966cfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffff888888888886996cffc88888888888888888888888888888868888888888886888888888889966cfffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffff88888888869996cfffc888888888888888888688888888869988888888886968888888886996ccfffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8866666999966cffffc66888888888888699996666666999996666666699996686666699996cffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffc66999999996cffffffc6699999999999999999999999999966699999999966669999999966cffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffc666666666ccfffffffcc6669999999999966666666666666cc6666666666ccc666666666ccffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffccc6666cccfffffffffccc666666666666ccccccc6666cccccccc6666ccccccccc666ccccfffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffcccccccccccccfffffcccccfffffffccccccfffffffcccccffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    color.FadeToBlack.startScreenEffect()
    color.pauseUntilFadeDone()
    color.startFade(color.Black, color.originalPalette)
    info.startCountdown(10)
    textSprite = textsprite.create("CHARACTER SELECT")
    textSprite.setPosition(78, 110)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff99999f99999f9fff9f9999f9999ffffffffffffffffffffffffffff77777f77777f7fff7f7777f7777ffffffffffffffffffffffff44444f44444f4fff4f4444f4444fffffffffffffff
        ffffffffffff9fff9f9fff9f9fff9f9ffff9ff9ffffffffffffffffffffffffffff7fff7f7fff7f7fff7f7ffff7ff7ffffffffffffffffffffffff4fff4f4fff4f4fff4f4ffff4ff4fffffffffffffff
        ffffffffffff9fff9f9fff9f9fff9f9ffff9f99ffffffffffffffffffffffffffff7fff7f7fff7f7fff7f7ffff7f77ffffffffffffffffffffffff4fff4f4fff4f4fff4f4ffff4f44fffffffffffffff
        ffffffffffff99999f9fff9f9fff9f99fff999fffffffffffffffffffffffffffff77777f7fff7f7fff7f77fff777fffffffffffffffffffffffff44444f4fff4f4fff4f44fff444ffffffffffffffff
        ffffffffffff9fffff9fff9f9f9f9f9ffff9f99ffffffffffffffffffffffffffff7fffff7fff7f7f7f7f7ffff7f77ffffffffffffffffffffffff4fffff4fff4f4f4f4f4ffff4f44fffffffffffffff
        ffffffffffff9fffff99999f99999f9999f9ff9ffffffffffffffffffffffffffff7fffff77777f77777f7777f7ff7ffffffffffffffffffffffff4fffff44444f44444f4444f4ff4fffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444f44444f44444fffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444f44444f44444fffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444f44444f44444fffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444f44444f44444fffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444f44444f44444fffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff9999f9999f9999f9999f999ffffffffffffffffffffffffffffffff7777f7777f7777f7777f777ffffffffffffffffffffffffffff4444f4444f4444f4444f444fffffffffffffffffff
        ffffffffffff9ffff9ff9f9ffff9ffff9ff9fffffffffffffffffffffffffffffff7ffff7ff7f7ffff7ffff7ff7fffffffffffffffffffffffffff4ffff4ff4f4ffff4ffff4ff4ffffffffffffffffff
        ffffffffffff9999f9ff9f9ffff9ffff9ff9fffffffffffffffffffffffffffffff7777f7ff7f7ffff7ffff7ff7fffffffffffffffffffffffffff4444f4ff4f4ffff4ffff4ff4ffffffffffffffffff
        fffffffffffffff9f9999f99fff99fff9ff9ffffffffffffffffffffffffffffffffff7f7777f77fff77fff7ff7ffffffffffffffffffffffffffffff4f4444f44fff44fff4ff4ffffffffffffffffff
        fffffffffffffff9f9ffff9ffff9ffff9ff9ffffffffffffffffffffffffffffffffff7f7ffff7ffff7ffff7ff7ffffffffffffffffffffffffffffff4f4ffff4ffff4ffff4ff4ffffffffffffffffff
        ffffffffffff9999f9ffff9999f9999f999ffffffffffffffffffffffffffffffff7777f7ffff7777f7777f777ffffffffffffffffffffffffffff4444f4ffff4444f4444f444fffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777f77777f77777ffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777f77777f77777ffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777f77777f77777ffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777f77777f77777ffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffff99999f99999f99999ffffffffffffffffffffffffffffffffffffff77777f77777f77777f77777f77777ffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff9999f99999f99ff9f9999f9999fffffffffffffffffffffffffffff7777f77777f77ff7f7777f7777fffffffffffffffffffffffff4444f44444f44ff4f4444f4444ffffffffffffffff
        ffffffffffff9ff9f9fff9f99ff9f9ffff9ffffffffffffffffffffffffffffffff7ff7f7fff7f77ff7f7ffff7ffffffffffffffffffffffffffff4ff4f4fff4f44ff4f4ffff4fffffffffffffffffff
        ffffffffffff9f99f9fff9f9f9f9f9ffff9ffffffffffffffffffffffffffffffff7f77f7fff7f7f7f7f7ffff7ffffffffffffffffffffffffffff4f44f4fff4f4f4f4f4ffff4fffffffffffffffffff
        ffffffffffff999ff99999f9ff99f9f99f99fffffffffffffffffffffffffffffff777ff77777f7ff77f7f77f77fffffffffffffffffffffffffff444ff44444f4ff44f4f44f44ffffffffffffffffff
        ffffffffffff9f99f9fff9f9fff9f9ff9f9ffffffffffffffffffffffffffffffff7f77f7fff7f7fff7f7ff7f7ffffffffffffffffffffffffffff4f44f4fff4f4fff4f4ff4f4fffffffffffffffffff
        ffffffffffff9ff9f9fff9f9fff9f9999f9999fffffffffffffffffffffffffffff7ff7f7fff7f7fff7f7777f7777fffffffffffffffffffffffff4ff4f4fff4f4fff4f4444f4444ffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff99999f99999f99999f99999f99999ffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffff99999f99999f99999f99999f99999ffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffff99999f99999f99999f99999f99999ffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffff99999f99999f99999f99999f99999ffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffff99999f99999f99999f99999f99999ffffffffffffffffffffffffff77777f77777f77777ffffffffffffffffffffffffffffffffff44444f44444f44444fffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Food)
    mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Food)
    mySprite3 = sprites.create(img`
        . . . . . . . . . . 
        . . . . 2 2 . . . . 
        . . . 2 2 2 2 . . . 
        . . 2 2 1 1 2 2 . . 
        . . 2 1 4 4 1 2 . . 
        . 2 2 4 2 2 4 2 2 . 
        2 2 2 4 2 2 4 2 2 2 
        5 5 5 4 2 2 4 5 5 5 
        2 2 2 4 1 1 4 2 2 2 
        . . . 2 2 2 2 . . . 
        . . . . 5 5 . . . . 
        `, SpriteKind.Food)
    inCharacterSelectionMenu = true
    characterAnimations.loopFrames(
    mySprite,
    assets.animation`myAnim19`,
    300,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite2,
    assets.animation`myAnim17`,
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.loopFrames(
    mySprite3,
    assets.animation`myAnim18`,
    400,
    characterAnimations.rule(Predicate.NotMoving)
    )
    mySprite.setPosition(24, 91)
    mySprite2.setPosition(78, 91)
    mySprite3.setPosition(133, 91)
    currentlyselectedsprite = mySprite
    selectcharindicator = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 . . . . . . 
        . . . . 9 9 1 1 1 9 9 . . . . . 
        . . . . 9 1 1 1 1 1 9 . . . . . 
        . . . . 9 1 1 1 1 1 9 . . . . . 
        . . . . 9 9 1 1 1 9 9 . . . . . 
        . . . . . 9 9 1 9 9 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.indicator)
    characterAnimations.loopFrames(
    selectcharindicator,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 9 9 9 9 9 . . . . . . 
        . . . . 9 9 1 1 1 9 9 . . . . . 
        . . . . 9 1 1 1 1 1 9 . . . . . 
        . . . . 9 1 1 1 1 1 9 . . . . . 
        . . . . 9 9 1 1 1 9 9 . . . . . 
        . . . . . 9 9 1 9 9 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.NotMoving)
    )
}
sprites.onOverlap(SpriteKind.Boss2, SpriteKind.Player, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
    	
    } else {
        music.bigCrash.play()
        scene.cameraShake(5, 1000)
        info.changeLifeBy(-1)
        otherSprite.destroy()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Minion, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        enemyDeath(otherSprite)
    } else {
        music.bigCrash.play()
        info.changeLifeBy(-1)
        enemyDeath(otherSprite)
        sprite.destroy()
        scene.cameraShake(4, 500)
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            tripplefire.lifespan = 0
        }
    }
})
statusbars.onZero(StatusBarKind.homingminionHP, function (status) {
    enemyDeath(status.spriteAttachedTo())
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.PowerUP, function (sprite, otherSprite) {
    otherSprite.destroy()
    if (Doublefire && Doublefire.lifespan == 0) {
        powerup.destroy()
        powerup.lifespan = 0
        music.powerUp.play()
        info.changeScoreBy(1000)
        powerupactivate = false
    } else {
        music.powerUp.play()
        otherSprite.destroy()
        Doublefire = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 9 . . . . . . . . . 
            . . . . . 9 9 9 . . . . . . . . 
            . . . . . 9 9 9 . . . . . . . . 
            . . . . . 9 9 9 . . . . . . . . 
            . . . . . 9 . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Mode)
        Doublefire.setPosition(149, 108)
        Doublefire.lifespan = 9999999
        info.changeScoreBy(1000)
        powerupactivate = false
    }
})
function bigenemydeath (bigenemy: Sprite) {
    bigenemy.destroy(effects.disintegrate, 500)
    enemyfiretime.lifespan = 0
    info.changeScoreBy(1000)
    if (powerup && powerup.lifespan > 0) {
        powerup.destroy()
    } else {
        if (Math.percentChance(50)) {
            powerup = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 9 9 9 9 9 9 . . . . . 
                . . . 6 9 9 1 1 1 1 9 9 6 . . . 
                . . . 6 9 9 1 9 9 1 9 9 6 . . . 
                . . . 6 9 9 1 1 1 1 9 9 6 . . . 
                . . . 6 9 9 1 9 9 9 9 9 6 . . . 
                . . . 6 9 9 1 9 9 9 9 9 6 . . . 
                . . . . . 9 9 9 9 9 9 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.PowerUP)
            characterAnimations.loopFrames(
            powerup,
            assets.animation`myAnim10`,
            700,
            characterAnimations.rule(Predicate.Moving)
            )
            powerup.x = Enemy_1.x
            powerup.y = Enemy_1.y
            powerup.lifespan = 10000
            powerup.setVelocity(randint(-40, 40), randint(-40, 40))
            powerup.setFlag(SpriteFlag.BounceOnWall, true)
            powerupactivate = true
        } else {
            powerup2 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . 6 6 6 6 6 6 . . . . . 
                . . . c 6 6 1 1 1 1 6 6 c . . . 
                . . . c 6 6 1 6 6 1 6 6 c . . . 
                . . . c 6 6 1 1 1 1 6 6 c . . . 
                . . . c 6 6 1 6 6 6 6 6 c . . . 
                . . . c 6 6 1 6 6 6 6 6 c . . . 
                . . . . . 6 6 6 6 6 6 . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Powerup2)
            characterAnimations.loopFrames(
            powerup2,
            assets.animation`myAnim15`,
            200,
            characterAnimations.rule(Predicate.Moving)
            )
            powerup2.x = Enemy_1.x
            powerup2.y = Enemy_1.y
            powerup2.lifespan = 10000
            powerup2.setVelocity(randint(-40, 40), randint(-40, 40))
            powerup2.setFlag(SpriteFlag.BounceOnWall, true)
            powerup2activate = true
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
        if (does_miniship_exist == false) {
            does_miniship_exist = true
            Miniship = sprites.create(assets.image`myImage13`, SpriteKind.Miniplayer)
            Miniship.follow(mySprite3, 1000)
            timer.after(350, function () {
                Miniship.follow(mySprite3, 0)
            })
            timer.after(2000, function () {
                Miniship.destroy()
                does_miniship_exist = false
                laser = sprites.createProjectileFromSprite(img`
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . 2 2 2 2 . . 
                    . . 2 5 5 2 . . 
                    . . 2 5 5 2 . . 
                    . . 4 5 5 4 . . 
                    . . 4 5 5 4 . . 
                    . . 4 5 5 4 . . 
                    . . 4 4 4 4 . . 
                    . . . 4 4 . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    . . . . . . . . 
                    `, Miniship, 0, -100)
            })
        }
    }
    pause(150)
    if (inCharacterSelectionMenu) {
        pause(11000)
    }
})
info.onLifeZero(function () {
    game.over(false)
})
function invincible (mySprite: Sprite) {
    music.beamUp.play()
    Shileded = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . 1 . . . 1 . . . . 
        1 . . . . . . . . . . 1 . . . . . . . . 1 . 1 . . . 1 . . . . 
        . . . . . . . . . . . . . . . . . . . . . . 1 . . . 1 . 1 1 1 
        1 . 1 1 1 . 1 . . 1 . 1 . 1 1 1 . 1 1 . 1 . 1 1 1 . 1 . 1 1 1 
        1 . 1 . 1 . . 1 . 1 . 1 . 1 . 1 . 1 . . 1 . 1 . 1 . 1 . 1 . . 
        1 . 1 . 1 . . . 1 . . 1 . 1 . 1 . 1 1 . 1 . 1 1 1 . 1 . 1 1 1 
        `, SpriteKind.Armor)
    Shileded.setPosition(18, 15)
    Shileded.lifespan = 3000
    timer.after(3000, function () {
        music.beamUp.stop()
    })
}
statusbars.onStatusReached(StatusBarKind.bosshealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 70, function (status) {
    boss1.setVelocity(70, 0)
})
controller.A.onEvent(ControllerButtonEvent.Repeated, function () {
    if (sprites.allOfKind(SpriteKind.Bomb).length > 0) {
        music.beamUp.play()
        Shileded = sprites.create(img`
            . . . . . . . . . . . . . . . . . . . . . . 1 . . . 1 . . . . 
            1 . . . . . . . . . . 1 . . . . . . . . 1 . 1 . . . 1 . . . . 
            . . . . . . . . . . . . . . . . . . . . . . 1 . . . 1 . 1 1 1 
            1 . 1 1 1 . 1 . . 1 . 1 . 1 1 1 . 1 1 . 1 . 1 1 1 . 1 . 1 1 1 
            1 . 1 . 1 . . 1 . 1 . 1 . 1 . 1 . 1 . . 1 . 1 . 1 . 1 . 1 . . 
            1 . 1 . 1 . . . 1 . . 1 . 1 . 1 . 1 1 . 1 . 1 1 1 . 1 . 1 1 1 
            `, SpriteKind.Armor)
        Shileded.setPosition(18, 15)
        Shileded.lifespan = 3000
        bonus = sprites.allOfKind(SpriteKind.Bomb).shift()
        bonus.lifespan = 0
        bonus.destroy()
    }
})
sprites.onOverlap(SpriteKind.Boss2shot, SpriteKind.Player, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        sprite.destroy()
    } else {
        music.smallCrash.play()
        scene.cameraShake(3, 500)
        otherSprite.destroy()
        sprite.destroy()
        info.changeLifeBy(-1)
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            tripplefire.lifespan = 0
        }
    }
})
info.onCountdownEnd(function () {
    if (inCharacterSelectionMenu) {
        inCharacterSelectionMenu = false
        mySprite.destroy()
        mySprite2.destroy()
        mySprite3.destroy()
        selectcharindicator.destroy()
        textSprite.setText("")
        bonus = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 6 . . . . 
            . . . . 6 6 9 9 9 9 9 6 6 . . . 
            . . . . 6 9 9 1 9 9 9 9 6 . . . 
            . . . . 6 9 9 1 9 9 9 9 6 . . . 
            . . . . 6 9 9 1 1 1 9 9 6 . . . 
            . . . . 6 6 9 9 9 9 9 6 6 . . . 
            . . . . . 6 6 9 9 9 6 6 . . . . 
            . . . . . . 6 6 9 6 6 . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Bomb)
        characterAnimations.loopFrames(
        bonus,
        assets.animation`myAnim7`,
        200,
        characterAnimations.rule(Predicate.NotMoving)
        )
        bonus.setPosition(10, 108)
        bonus.lifespan = 999999999
        if (currentlyselectedsprite == mySprite) {
            mySprite = sprites.create(img`
                . . . . . . . . . . 
                . . . . 1 1 . . . . 
                . . . 1 1 1 1 . . . 
                . . 1 1 8 8 1 1 . . 
                . . 1 8 d d 8 1 . . 
                . 1 1 d 1 1 d 1 1 . 
                1 1 1 d 1 1 d 1 1 1 
                9 9 9 d 1 1 d 9 9 9 
                1 1 1 d 8 8 d 1 1 1 
                . . . 1 1 1 1 . . . 
                . . . . 5 5 . . . . 
                `, SpriteKind.Player)
            Movement(mySprite)
            mySprite.y = 120
            mySprite.setStayInScreen(true)
            controller.moveSprite(mySprite, 100, 100)
            animation.runMovementAnimation(
            mySprite,
            animation.animationPresets(animation.flyToCenter),
            2000,
            false
            )
        } else if (currentlyselectedsprite == mySprite2) {
            mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
            Sprite2movement()
            mySprite2.y = 120
            mySprite2.setStayInScreen(true)
            controller.moveSprite(mySprite2, 200, 200)
            animation.runMovementAnimation(
            mySprite2,
            animation.animationPresets(animation.flyToCenter),
            2000,
            false
            )
        } else {
            does_miniship_exist = false
            mySprite3 = sprites.create(img`
                . . . . . . . . . . 
                . . . . 2 2 . . . . 
                . . . 2 2 2 2 . . . 
                . . 2 2 1 1 2 2 . . 
                . . 2 1 4 4 1 2 . . 
                . 2 2 4 2 2 4 2 2 . 
                2 2 2 4 2 2 4 2 2 2 
                5 5 5 4 2 2 4 5 5 5 
                2 2 2 4 1 1 4 2 2 2 
                . . . 2 2 2 2 . . . 
                . . . . 5 5 . . . . 
                `, SpriteKind.Player)
            Sprite3movement(mySprite)
            mySprite3.y = 120
            mySprite3.setStayInScreen(true)
            controller.moveSprite(mySprite3, 90, 90)
            animation.runMovementAnimation(
            mySprite3,
            animation.animationPresets(animation.flyToCenter),
            2000,
            false
            )
        }
        music.powerUp.play()
        startlevel()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Minion2, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        Powerupdeath(minion2)
    } else {
        music.bigCrash.play()
        info.changeLifeBy(-1)
        scene.cameraShake(4, 500)
        Powerupdeath(minion2)
        sprite.destroy()
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
    }
})
function spawntime () {
    EnemySpawnTime = 20000
    Enemy2spawntime = 35000
    Minionspawn = randint(3500, 6500)
    minion2spawn = 30000
    timer.after(20000, function () {
        EnemySpawnTime = randint(21000, 31000)
    })
    timer.after(6500, function () {
        Minionspawn = randint(4000, 7500)
    })
    timer.after(35000, function () {
        Enemy2spawntime = randint(35000, 50000)
    })
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Health, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        callbigenemy2death(otherSprite)
    } else {
        music.bigCrash.play()
        info.changeLifeBy(-1)
        callbigenemy2death(otherSprite)
        sprite.destroy()
        scene.cameraShake(4, 500)
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            tripplefire.lifespan = 0
        }
    }
})
function Movement (mySprite: Sprite) {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        . . . . 5 5 . . . . 
        . . . . . . . . . . 
        `,img`
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        . . . . 5 5 . . . . 
        . . . . . . . . . . 
        `,img`
        . . . . . . . . . . 
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        . . . . . . . . . . 
        `,img`
        . . . . . . . . . . 
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        . . . . 5 5 . . . . 
        `,img`
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        . . . . 5 5 . . . . 
        . . . . . . . . . . 
        `,img`
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        `],
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.runFrames(
    mySprite,
    [img`
        . . . . . . . . . . 
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 8 8 1 1 1 . . 
        . . 1 d d 8 1 1 1 . 
        . 1 1 1 1 d 1 1 1 . 
        . 1 1 1 1 d 1 1 1 . 
        . 9 1 1 1 d 9 9 9 . 
        . 1 1 8 8 d 1 1 1 . 
        . . . 1 1 1 1 . . . 
        . . . . 5 5 . . . . 
        `, img`
        . . . . . . . . . . 
        . . . . 1 . . . . . 
        . . . . 1 1 . . . . 
        . . . 1 8 1 1 . . . 
        . . . 1 d 8 1 1 . . 
        . . 1 1 1 d 1 1 1 . 
        . . 1 1 1 d 1 1 1 . 
        . . 9 1 1 d 9 9 9 . 
        . . 1 1 8 d 1 1 1 . 
        . . . 1 1 1 1 . . . 
        . . . . 5 5 . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.runFrames(
    mySprite,
    [img`
        . . . . . . . . . . 
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 1 8 8 1 . . 
        . 1 1 1 8 d d 1 . . 
        . 1 1 1 d 1 1 1 1 . 
        . 1 1 1 d 1 1 1 1 . 
        . 9 9 9 d 1 1 1 9 . 
        . 1 1 1 d 8 8 1 1 . 
        . . . 1 1 1 1 . . . 
        . . . . 5 5 . . . . 
        `, img`
        . . . . . . . . . . 
        . . . . . 1 . . . . 
        . . . . 1 1 . . . . 
        . . . 1 1 8 1 . . . 
        . . 1 1 8 d 1 . . . 
        . 1 1 1 d 1 1 1 . . 
        . 1 1 1 d 1 1 1 . . 
        . 9 9 9 d 1 1 9 . . 
        . 1 1 1 d 8 1 1 . . 
        . . . 1 1 1 1 . . . 
        . . . . 5 5 . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.runFrames(
    mySprite,
    [img`
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        . . . 9 9 9 9 . . . 
        . . . . 9 9 . . . . 
        `, img`
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        . . . 9 5 5 9 . . . 
        . . . 9 9 9 9 . . . 
        . . . . 9 9 . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.runFrames(
    mySprite,
    [img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        `, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . 1 1 . . . . 
        . . . 1 1 1 1 . . . 
        . . 1 1 8 8 1 1 . . 
        . . 1 8 d d 8 1 . . 
        . 1 1 d 1 1 d 1 1 . 
        1 1 1 d 1 1 d 1 1 1 
        9 9 9 d 1 1 d 9 9 9 
        1 1 1 d 8 8 d 1 1 1 
        . . . 1 1 1 1 . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
    Sprite1_Projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectiletimer)
    Sprite1_Projectile.lifespan = 999999
}
statusbars.onStatusReached(StatusBarKind.boss2health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    if (Math.percentChance(100)) {
        boss2.setVelocity(80, randint(40, 80))
        timer.after(3000, function () {
            animation.runMovementAnimation(
            boss2,
            animation.animationPresets(animation.easeUp),
            1000,
            false
            )
            boss2.y = 25
            boss2.setVelocity(80, 0)
        })
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inCharacterSelectionMenu) {
        pause(11000)
    }
    if (Sprite1_Projectile && Sprite1_Projectile.lifespan > 0) {
        timer.after(500, function () {
            music.pewPew.play()
        })
        if (Shileded && Shileded.lifespan > 0) {
            pause(1000)
        }
        Fire = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 9 9 . . 9 9 9 . . . . 
            . . . . 9 1 9 . . 9 1 9 . . . . 
            . . . . 9 1 9 . . 9 1 9 . . . . 
            . . . . 9 1 9 . . 9 1 9 . . . . 
            . . . . 9 1 9 . . 9 1 9 . . . . 
            . . . . 9 1 9 . . 9 1 9 . . . . 
            . . . . 9 9 9 . . 9 9 9 . . . . 
            . . . . 9 9 9 . . 9 9 9 . . . . 
            . . . . . 9 . . . . 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -150)
        if (Doublefire && Doublefire.lifespan > 0) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 9 9 9 
                . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . 9 9 9 
                . . . . . . . . . . . . . . 9 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 5, -150)
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                9 9 9 . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . 
                9 9 9 . . . . . . . . . . . . . 
                . 9 . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -5, -150)
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . 9 9 9 
                . . . . . . . . . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . . . . . . . . . 9 9 9 
                . . . . . . . . . . . . . . . . . . . . . . 9 . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                `, mySprite, 10, -150)
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . . . . . . . . . 
                9 9 9 . . . . . . . . . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . . . . . . . . . 
                9 9 9 . . . . . . . . . . . . . . . . . . . . . 
                . 9 . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                `, mySprite, -10, -150)
        }
    }
    if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
        timer.after(500, function () {
            music.pewPew.play()
        })
        if (Shileded && Shileded.lifespan > 0) {
            pause(1000)
        }
        Fire = sprites.createProjectileFromSprite(img`
            . . . . 2 2 2 . . 2 2 2 . . . . 
            . . . . 2 5 2 . . 2 5 2 . . . . 
            . . . . 4 5 4 . . 4 5 4 . . . . 
            . . . . 4 5 4 . . 4 5 4 . . . . 
            . . . . 4 5 4 . . 4 5 4 . . . . 
            . . . . 2 5 2 . . 2 5 2 . . . . 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            . . . . . 2 . . . . 2 . . . . . 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            . . . . 2 5 2 . . 4 5 2 . . . . 
            . . . . 4 5 4 . . 4 5 4 . . . . 
            . . . . 4 5 4 . . 4 5 4 . . . . 
            . . . . 4 5 4 . . 4 5 4 . . . . 
            . . . . 2 5 2 . . 2 5 2 . . . . 
            . . . . 2 2 2 . . 2 2 2 . . . . 
            . . . . . 2 . . . . 2 . . . . . 
            `, mySprite3, 0, -200)
        if (Doublefire && Doublefire.lifespan > 0) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . 2 2 2 
                . . . . . . . . . . . . . 4 5 2 
                . . . . . . . . . . . . . 4 5 4 
                . . . . . . . . . . . . . 4 5 4 
                . . . . . . . . . . . . . 4 5 4 
                . . . . . . . . . . . . . 2 5 2 
                . . . . . . . . . . . . . 2 2 2 
                . . . . . . . . . . . . . . 2 . 
                . . . . . . . . . . . . . 2 2 2 
                . . . . . . . . . . . . . 4 5 2 
                . . . . . . . . . . . . . 4 5 4 
                . . . . . . . . . . . . . 4 5 4 
                . . . . . . . . . . . . . 4 5 4 
                . . . . . . . . . . . . . 2 5 2 
                . . . . . . . . . . . . . 2 2 2 
                . . . . . . . . . . . . . . 2 . 
                `, mySprite3, 0, -200)
            Fire = sprites.createProjectileFromSprite(img`
                2 2 2 . . . . . . . . . . . . . 
                2 5 2 . . . . . . . . . . . . . 
                4 5 4 . . . . . . . . . . . . . 
                4 5 4 . . . . . . . . . . . . . 
                4 5 4 . . . . . . . . . . . . . 
                2 5 2 . . . . . . . . . . . . . 
                2 2 2 . . . . . . . . . . . . . 
                . 2 . . . . . . . . . . . . . . 
                2 2 2 . . . . . . . . . . . . . 
                2 5 2 . . . . . . . . . . . . . 
                4 5 4 . . . . . . . . . . . . . 
                4 5 4 . . . . . . . . . . . . . 
                4 5 4 . . . . . . . . . . . . . 
                2 5 2 . . . . . . . . . . . . . 
                2 2 2 . . . . . . . . . . . . . 
                . 2 . . . . . . . . . . . . . . 
                `, mySprite3, 0, -200)
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            Fire = sprites.createProjectileFromSprite(assets.image`myImage11`, mySprite3, 0, -200)
            Fire = sprites.createProjectileFromSprite(assets.image`myImage12`, mySprite3, 0, -200)
        }
        pause(120)
    }
    if (Sprite2_projetile && Sprite2_projetile.lifespan > 0) {
        timer.after(500, function () {
            music.pewPew.play()
        })
        if (Shileded && Shileded.lifespan > 0) {
            pause(1000)
        }
        Fire = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 . . 6 6 6 . . . . 
            . . . . 6 7 6 . . 6 7 6 . . . . 
            . . . . 6 7 6 . . 6 7 6 . . . . 
            . . . . 6 7 6 . . 6 7 6 . . . . 
            . . . . 6 7 6 . . 6 7 6 . . . . 
            . . . . 6 7 6 . . 6 7 6 . . . . 
            . . . . 6 6 6 . . 6 6 6 . . . . 
            . . . . 6 6 6 . . 6 6 6 . . . . 
            . . . . . 6 . . . . 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite2, 0, -200)
        if (Doublefire && Doublefire.lifespan > 0) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . 7 7 7 
                . . . . . . . . . . . . . 7 9 7 
                . . . . . . . . . . . . . 7 9 7 
                . . . . . . . . . . . . . 7 9 7 
                . . . . . . . . . . . . . 7 9 7 
                . . . . . . . . . . . . . 7 9 7 
                . . . . . . . . . . . . . 7 7 7 
                . . . . . . . . . . . . . . 7 . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite2, 0, -200)
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                7 7 7 . . . . . . . . . . . . . 
                7 9 7 . . . . . . . . . . . . . 
                7 9 7 . . . . . . . . . . . . . 
                7 9 7 . . . . . . . . . . . . . 
                7 9 7 . . . . . . . . . . . . . 
                7 9 7 . . . . . . . . . . . . . 
                7 7 7 . . . . . . . . . . . . . 
                . 7 . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite2, 0, -200)
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . 6 6 6 
                . . . . . . . . . . . . . . . . . . . . . 6 7 6 
                . . . . . . . . . . . . . . . . . . . . . 9 1 9 
                . . . . . . . . . . . . . . . . . . . . . 6 7 6 
                . . . . . . . . . . . . . . . . . . . . . 6 6 6 
                . . . . . . . . . . . . . . . . . . . . . . 6 . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                `, mySprite2, 0, -200)
            Fire = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . . . . . . . . . 
                6 6 6 . . . . . . . . . . . . . . . . . . . . . 
                6 7 6 . . . . . . . . . . . . . . . . . . . . . 
                9 1 9 . . . . . . . . . . . . . . . . . . . . . 
                6 7 6 . . . . . . . . . . . . . . . . . . . . . 
                6 6 6 . . . . . . . . . . . . . . . . . . . . . 
                . 6 . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . . . . . . . 
                `, mySprite2, 0, -200)
        }
        pause(120)
    }
    pause(150)
    Fire.setFlag(SpriteFlag.AutoDestroy, true)
})
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    if (Doublefire && Doublefire.lifespan > 0) {
        Doublefire.lifespan = 0
    }
    if (tripplefire && tripplefire.lifespan > 0) {
        tripplefire.lifespan = 0
    }
    if (Sprite1_Projectile && Sprite1_Projectile.lifespan > 0) {
        mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
        invincible(mySprite)
        mySprite.y = 120
        Movement(mySprite)
        mySprite.setStayInScreen(true)
        controller.moveSprite(mySprite, 120, 120)
        mySprite.setFlag(SpriteFlag.Invisible, true)
        timer.after(500, function () {
            mySprite.setFlag(SpriteFlag.Invisible, false)
            timer.after(500, function () {
                mySprite.setFlag(SpriteFlag.Invisible, true)
                timer.after(500, function () {
                    mySprite.setFlag(SpriteFlag.Invisible, false)
                })
            })
        })
    }
    if (Sprite2_projetile && Sprite2_projetile.lifespan > 0) {
        mySprite2 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
        invincible(mySprite)
        mySprite2.y = 120
        Sprite2movement()
        mySprite2.setStayInScreen(true)
        controller.moveSprite(mySprite2, 120, 120)
        mySprite2.setFlag(SpriteFlag.Invisible, true)
        timer.after(500, function () {
            mySprite2.setFlag(SpriteFlag.Invisible, false)
            timer.after(500, function () {
                mySprite2.setFlag(SpriteFlag.Invisible, true)
                timer.after(500, function () {
                    mySprite2.setFlag(SpriteFlag.Invisible, false)
                })
            })
        })
    }
    if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
        mySprite3 = sprites.create(img`
            . . . . . . . . . . 
            . . . . 2 2 . . . . 
            . . . 2 2 2 2 . . . 
            . . 2 2 1 1 2 2 . . 
            . . 2 1 4 4 1 2 . . 
            . 2 2 4 2 2 4 2 2 . 
            2 2 2 4 2 2 4 2 2 2 
            5 5 5 4 2 2 4 5 5 5 
            2 2 2 4 1 1 4 2 2 2 
            . . . 2 2 2 2 . . . 
            . . . . 5 5 . . . . 
            `, SpriteKind.Player)
        mySprite3.y = 120
        Sprite3invincible()
        mySprite3.setStayInScreen(true)
        controller.moveSprite(mySprite3, 90, 90)
        Sprite3movement(mySprite)
        mySprite3.setFlag(SpriteFlag.Invisible, true)
        timer.after(500, function () {
            mySprite3.setFlag(SpriteFlag.Invisible, false)
            timer.after(500, function () {
                mySprite3.setFlag(SpriteFlag.Invisible, true)
                timer.after(500, function () {
                    mySprite3.setFlag(SpriteFlag.Invisible, false)
                })
            })
        })
    }
    if (Math.percentChance(50)) {
        powerup = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . 6 9 9 1 1 1 1 9 9 6 . . . 
            . . . 6 9 9 1 9 9 1 9 9 6 . . . 
            . . . 6 9 9 1 1 1 1 9 9 6 . . . 
            . . . 6 9 9 1 9 9 9 9 9 6 . . . 
            . . . 6 9 9 1 9 9 9 9 9 6 . . . 
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.PowerUP)
        characterAnimations.loopFrames(
        powerup,
        assets.animation`myAnim10`,
        200,
        characterAnimations.rule(Predicate.Moving)
        )
        powerup.lifespan = 10000
        powerup.setVelocity(100, randint(-40, 60))
        powerup.setFlag(SpriteFlag.BounceOnWall, true)
    } else {
        powerup2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . c 6 6 1 1 1 1 6 6 c . . . 
            . . . c 6 6 1 6 6 1 6 6 c . . . 
            . . . c 6 6 1 1 1 1 6 6 c . . . 
            . . . c 6 6 1 6 6 6 6 6 c . . . 
            . . . c 6 6 1 6 6 6 6 6 c . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Powerup2)
        characterAnimations.loopFrames(
        powerup2,
        assets.animation`myAnim15`,
        200,
        characterAnimations.rule(Predicate.Moving)
        )
        powerup2.lifespan = 10000
        powerup2.setVelocity(100, randint(-40, 60))
        powerup2.setFlag(SpriteFlag.BounceOnWall, true)
    }
})
statusbars.onStatusReached(StatusBarKind.boss2health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 75, function (status) {
    if (Math.percentChance(100)) {
        boss2.setVelocity(80, randint(40, 80))
        timer.after(2000, function () {
            animation.runMovementAnimation(
            boss2,
            animation.animationPresets(animation.flyToCenter),
            1000,
            false
            )
            timer.after(3000, function () {
                animation.runMovementAnimation(
                boss2,
                animation.animationPresets(animation.easeUp),
                1000,
                false
                )
                boss2.y = 25
                boss2.setVelocity(80, 0)
            })
        })
    }
})
function enemyDeath (enemy1: Sprite) {
    enemy1.destroy(effects.disintegrate, 500)
    info.changeScoreBy(500)
}
sprites.onOverlap(SpriteKind.Boss, SpriteKind.Player, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
    	
    } else {
        music.bigCrash.play()
        scene.cameraShake(5, 1000)
        info.changeLifeBy(-1)
        otherSprite.destroy()
    }
})
function Sprite3invincible () {
    music.beamUp.play()
    Shileded = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . 1 . . . 1 . . . . 
        1 . . . . . . . . . . 1 . . . . . . . . 1 . 1 . . . 1 . . . . 
        . . . . . . . . . . . . . . . . . . . . . . 1 . . . 1 . 1 1 1 
        1 . 1 1 1 . 1 . . 1 . 1 . 1 1 1 . 1 1 . 1 . 1 1 1 . 1 . 1 1 1 
        1 . 1 . 1 . . 1 . 1 . 1 . 1 . 1 . 1 . . 1 . 1 . 1 . 1 . 1 . . 
        1 . 1 . 1 . . . 1 . . 1 . 1 . 1 . 1 1 . 1 . 1 1 1 . 1 . 1 1 1 
        `, SpriteKind.Armor)
    Shileded.setPosition(18, 15)
    Shileded.lifespan = 3000
    timer.after(3000, function () {
        music.beamUp.stop()
    })
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Minion, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy()
    otherSprite.startEffect(effects.warmRadial, 50)
    statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += -33
    info.changeScoreBy(41)
    if (Doublefire && Doublefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += 5.5
    }
    if (tripplefire && tripplefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.EnemyHealth, otherSprite).value += 4.5
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inCharacterSelectionMenu) {
        if (currentlyselectedsprite == mySprite) {
            currentlyselectedsprite = mySprite3
            music.knock.play()
        } else if (currentlyselectedsprite == mySprite3) {
            currentlyselectedsprite = mySprite2
            music.knock.play()
        } else {
            music.knock.play()
            currentlyselectedsprite = mySprite
        }
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Homingminion, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy()
    otherSprite.startEffect(effects.warmRadial, 50)
    statusbars.getStatusBarAttachedTo(StatusBarKind.homingminionHP, otherSprite).value += -100
    info.changeScoreBy(75)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Boss, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy(effects.warmRadial, 100)
    statusbars.getStatusBarAttachedTo(StatusBarKind.bosshealth, otherSprite).value += -0.6
    if (Doublefire && Doublefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.bosshealth, otherSprite).value += 0.2
    }
    if (tripplefire && tripplefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.bosshealth, otherSprite).value += 0.2
    }
})
sprites.onOverlap(SpriteKind.Bossshot, SpriteKind.Player, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        sprite.destroy()
    } else {
        scene.cameraShake(3, 500)
        music.smallCrash.play()
        sprite.destroy()
        otherSprite.destroy()
        info.changeLifeBy(-1)
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            tripplefire.lifespan = 0
        }
    }
})
function Sprite3movement (mySprite: Sprite) {
    characterAnimations.loopFrames(
    mySprite3,
    assets.animation`myAnim18`,
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.runFrames(
    mySprite3,
    [assets.image`myImage8`, assets.image`myImage7`],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.runFrames(
    mySprite3,
    [assets.image`myImage9`, assets.image`myImage10`],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.runFrames(
    mySprite3,
    [img`
        . . . . . . . . . . 
        . . . . 2 2 . . . . 
        . . . 2 2 2 2 . . . 
        . . 2 2 1 1 2 2 . . 
        . . 2 1 4 4 1 2 . . 
        . 2 2 4 2 2 4 2 2 . 
        2 2 2 4 2 2 4 2 2 2 
        5 5 5 4 2 2 4 5 5 5 
        2 2 2 4 1 1 4 2 2 2 
        . . . 2 2 2 2 . . . 
        . . . . 5 5 . . . . 
        `, img`
        . . . . . . . . . . 
        . . . . 2 2 . . . . 
        . . . 2 2 2 2 . . . 
        . . 2 2 1 1 2 2 . . 
        . . 2 1 4 4 1 2 . . 
        . 2 2 4 2 2 4 2 2 . 
        2 2 2 4 2 2 4 2 2 2 
        5 5 5 4 2 2 4 5 5 5 
        2 2 2 4 1 1 4 2 2 2 
        . . . 2 2 2 2 . . . 
        . . . . 5 5 . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.runFrames(
    mySprite3,
    [img`
        . . . . . . . . . . 
        . . . . 2 2 . . . . 
        . . . 2 2 2 2 . . . 
        . . 2 2 1 1 2 2 . . 
        . . 2 1 4 4 1 2 . . 
        . 2 2 4 2 2 4 2 2 . 
        2 2 2 4 2 2 4 2 2 2 
        5 5 5 4 2 2 4 5 5 5 
        2 2 2 4 1 1 4 2 2 2 
        . . . 2 2 2 2 . . . 
        . . . . 5 5 . . . . 
        `, img`
        . . . . . . . . . . 
        . . . . 2 2 . . . . 
        . . . 2 2 2 2 . . . 
        . . 2 2 1 1 2 2 . . 
        . . 2 1 4 4 1 2 . . 
        . 2 2 4 2 2 4 2 2 . 
        2 2 2 4 2 2 4 2 2 2 
        5 5 5 4 2 2 4 5 5 5 
        2 2 2 4 1 1 4 2 2 2 
        . . . 2 2 2 2 . . . 
        . . . . 5 5 . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
    Sprite3_Projectile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectiletimer)
    Sprite3_Projectile.lifespan = 999999
}
function startlevel () {
    music.setVolume(20)
    color.startFade(color.Black, color.originalPalette)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    info.setLife(10)
    effects.starField.startScreenEffect()
    enemySpeed = 3
    spawntime()
    timer.after(245000, function () {
        music.powerDown.loop()
    })
    timer.after(250000, function () {
        boss2 = sprites.create(img`
            ....c......c......c......c....
            ....cc.....cc....cc.....cc....
            .c..cccc...ccc99ccc...cccc..c.
            .c..ccccc.cccaccaccc.ccccc..c.
            .cc..c9ccccacaaaacacccc9c..cc.
            .ccc.cc9cccaccaaccaccc9cc.ccc.
            .ccc..ccccaacaaaacaacccc..ccc.
            .c9cc.cccccac9aa9caccccc.cc9c.
            .cc9cccaccccc9999cccccaccc9cc.
            .ccc9cccaccacc99ccaccaccc9ccc.
            ..cccc4caacaaccccaacaac4cccc..
            ...ccc4ccaaacc99ccaaacc4ccc...
            ....cccc4caaccccccaac4cccc....
            .....ccc4ccacc..ccacc4ccc.....
            .....ccccc4acc..cca4ccccc.....
            .....c.ccc4ac....ca4ccc.c.....
            .....c..cccccc..cccccc..c.....
            .........cccc....cccc.........
            ..........cacc..ccac..........
            ...........ac....ca...........
            ............cc..cc............
            ............c....c............
            ............cc..cc............
            `, SpriteKind.Boss2)
        statusbar3 = statusbars.create(90, 1, StatusBarKind.boss2health)
        statusbar3.setOffsetPadding(0, -1)
        statusbar3.attachToSprite(boss2)
        boss2.setFlag(SpriteFlag.Ghost, true)
        boss2.y = 0
        characterAnimations.loopFrames(
        boss2,
        assets.animation`myAnim0`,
        200,
        characterAnimations.rule(Predicate.Moving)
        )
        animation.runMovementAnimation(
        boss2,
        animation.animationPresets(animation.flyToCenter),
        1500,
        false
        )
        timer.after(1500, function () {
            animation.runMovementAnimation(
            boss2,
            animation.animationPresets(animation.easeUp),
            2000,
            false
            )
            boss2.y = 30
            boss2.setVelocity(40, 0)
            boss2.setFlag(SpriteFlag.BounceOnWall, true)
            timer.after(200, function () {
                Bossfiretime2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.boss2die)
                Bossfiretime2.lifespan = 150000
                boss2.setFlag(SpriteFlag.Ghost, false)
                timer.after(200000, function () {
                    boss2.destroy()
                    Bossfiretime2.lifespan = 0
                })
            })
        })
    })
    timer.after(85000, function () {
        music.powerDown.loop()
    })
    timer.after(90000, function () {
        boss1 = sprites.create(assets.image`myImage`, SpriteKind.Boss)
        statusbar = statusbars.create(70, 1, StatusBarKind.bosshealth)
        statusbar.setOffsetPadding(0, -1)
        statusbar.attachToSprite(boss1)
        boss1.setFlag(SpriteFlag.Ghost, true)
        boss1.y = 0
        characterAnimations.loopFrames(
        boss1,
        assets.animation`myAnim14`,
        200,
        characterAnimations.rule(Predicate.Moving)
        )
        animation.runMovementAnimation(
        boss1,
        animation.animationPresets(animation.flyToCenter),
        1500,
        false
        )
        timer.after(1500, function () {
            animation.runMovementAnimation(
            boss1,
            animation.animationPresets(animation.easeUp),
            2000,
            false
            )
            boss1.y = 30
            boss1.setVelocity(40, 0)
            boss1.setFlag(SpriteFlag.BounceOnWall, true)
            timer.after(2000, function () {
                bossfiretime = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Bossdie)
                bossfiretime.lifespan = 150000
                boss1.setFlag(SpriteFlag.Ghost, false)
                timer.after(100000, function () {
                    boss1.destroy()
                    bossfiretime.lifespan = 0
                })
            })
        })
    })
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Minion2, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy()
    otherSprite.startEffect(effects.warmRadial, 50)
    statusbars.getStatusBarAttachedTo(StatusBarKind.poweruphealth, otherSprite).value += -50
    info.changeScoreBy(500)
    if (Doublefire && Doublefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.poweruphealth, otherSprite).value += 10
    }
    if (tripplefire && tripplefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.poweruphealth, otherSprite).value += 7
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (inCharacterSelectionMenu) {
        if (currentlyselectedsprite == mySprite) {
            currentlyselectedsprite = mySprite2
            music.knock.play()
        } else if (currentlyselectedsprite == mySprite2) {
            currentlyselectedsprite = mySprite3
            music.knock.play()
        } else {
            currentlyselectedsprite = mySprite
            music.knock.play()
        }
    } else {
    	
    }
})
sprites.onOverlap(SpriteKind.Enemyshot, SpriteKind.Player, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        sprite.destroy()
    } else {
        music.smallCrash.play()
        sprite.destroy()
        otherSprite.destroy()
        info.changeLifeBy(-1)
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            tripplefire.lifespan = 0
        }
    }
})
statusbars.onZero(StatusBarKind.bosshealth, function (status) {
    boss1.destroy(effects.halo, 1000)
    info.changeScoreBy(50000)
    music.powerDown.stop()
    bossfiretime.lifespan = 0
    bossfiretime.lifespan += -999999
    if (Math.percentChance(100)) {
        Life = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . 2 2 2 . . . 2 2 2 . . . 
            . . 2 2 2 2 2 . 2 2 2 2 2 . . 
            . 2 2 2 2 1 2 2 2 1 2 2 2 2 . 
            . 2 2 2 2 1 2 2 2 1 2 2 2 2 . 
            . 2 2 2 2 1 1 1 1 1 2 2 2 2 . 
            . . 2 2 2 1 2 2 2 1 2 2 2 . . 
            . . . 2 2 1 2 2 2 1 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.Health)
        characterAnimations.loopFrames(
        Life,
        assets.animation`myAnim13`,
        500,
        characterAnimations.rule(Predicate.Moving)
        )
        Life.x = boss1.x
        Life.y = boss1.y
        Life.lifespan = 25000
        Life.setVelocity(randint(-40, 40), randint(-40, 40))
        Life.setFlag(SpriteFlag.BounceOnWall, true)
    }
})
function Powerupdeath (powerupenemy: Sprite) {
    powerupenemy.destroy(effects.disintegrate, 500)
    shield = sprites.create(assets.image`myImage0`, SpriteKind.Shield)
    characterAnimations.loopFrames(
    shield,
    assets.animation`myAnim16`,
    200,
    characterAnimations.rule(Predicate.Moving)
    )
    shield.x = minion2.x
    shield.y = minion2.y
    shield.lifespan = 10000
    shield.setVelocity(100, randint(-40, 48))
    shield.setFlag(SpriteFlag.BounceOnWall, true)
}
statusbars.onZero(StatusBarKind.EnemyHealth, function (status) {
    enemyDeath(status.spriteAttachedTo())
})
statusbars.onStatusReached(StatusBarKind.bosshealth, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 32, function (status) {
    boss1.setVelocity(70, randint(20, 40))
    timer.after(4000, function () {
        animation.runMovementAnimation(
        boss1,
        animation.animationPresets(animation.easeUp),
        2000,
        false
        )
        boss1.setVelocity(90, 0)
    })
})
function callbigenemy2death (bigenemy2: Sprite) {
    bigenemy2.destroy(effects.disintegrate, 500)
    enemyfiretime2.lifespan = 0
    info.changeScoreBy(1000)
    if (Math.percentChance(50)) {
        powerup = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . 6 9 9 1 1 1 1 9 9 6 . . . 
            . . . 6 9 9 1 9 9 1 9 9 6 . . . 
            . . . 6 9 9 1 1 1 1 9 9 6 . . . 
            . . . 6 9 9 1 9 9 9 9 9 6 . . . 
            . . . 6 9 9 1 9 9 9 9 9 6 . . . 
            . . . . . 9 9 9 9 9 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.PowerUP)
        characterAnimations.loopFrames(
        powerup,
        assets.animation`myAnim10`,
        700,
        characterAnimations.rule(Predicate.Moving)
        )
        powerup.x = enemyversion2.x
        powerup.y = enemyversion2.y
        powerup.lifespan = 10000
        powerup.setVelocity(randint(-40, 40), randint(-40, 40))
        powerup.setFlag(SpriteFlag.BounceOnWall, true)
        powerupactivate = true
    } else {
        powerup2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . c 6 6 1 1 1 1 6 6 c . . . 
            . . . c 6 6 1 6 6 1 6 6 c . . . 
            . . . c 6 6 1 1 1 1 6 6 c . . . 
            . . . c 6 6 1 6 6 6 6 6 c . . . 
            . . . c 6 6 1 6 6 6 6 6 c . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Powerup2)
        characterAnimations.loopFrames(
        powerup2,
        assets.animation`myAnim15`,
        200,
        characterAnimations.rule(Predicate.Moving)
        )
        powerup2.x = enemyversion2.x
        powerup2.y = enemyversion2.y
        powerup2.lifespan = 10000
        powerup2.setVelocity(randint(-40, 40), randint(-40, 40))
        powerup2.setFlag(SpriteFlag.BounceOnWall, true)
        powerup2activate = true
    }
}
statusbars.onStatusReached(StatusBarKind.boss2health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 30, function (status) {
    boss2.setVelocity(80, randint(40, 80))
    timer.after(1000, function () {
        animation.runMovementAnimation(
        boss2,
        animation.animationPresets(animation.easeUp),
        1000,
        false
        )
        boss2.y = 25
        boss2.setVelocity(80, 0)
        timer.after(3000, function () {
            animation.runMovementAnimation(
            boss2,
            animation.animationPresets(animation.flyToCenter),
            2000,
            false
            )
            timer.after(3000, function () {
                animation.runMovementAnimation(
                boss2,
                animation.animationPresets(animation.easeUp),
                2000,
                false
                )
                boss2.y = 25
                boss2.setVelocity(80, 0)
            })
        })
    })
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Homingminion, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        enemyDeath(otherSprite)
    } else {
        music.bigCrash.play()
        info.changeLifeBy(-1)
        sprite.destroy()
        enemyDeath(otherSprite)
        scene.cameraShake(4, 500)
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            tripplefire.lifespan = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shield, function (sprite, otherSprite) {
    music.powerUp.play()
    otherSprite.destroy()
    info.changeScoreBy(1000)
    bonus = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 6 6 6 . . . . 
        . . . . 6 6 9 9 9 9 9 6 6 . . . 
        . . . . 6 9 9 1 9 9 9 9 6 . . . 
        . . . . 6 9 9 1 9 9 9 9 6 . . . 
        . . . . 6 9 9 1 1 1 9 9 6 . . . 
        . . . . 6 6 9 9 9 9 9 6 6 . . . 
        . . . . . 6 6 9 9 9 6 6 . . . . 
        . . . . . . 6 6 9 6 6 . . . . . 
        . . . . . . . 6 6 6 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Bomb)
    characterAnimations.loopFrames(
    bonus,
    assets.animation`myAnim7`,
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    bonus.setPosition(10, 108)
    bonus.lifespan = 999999999
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy()
    otherSprite.startEffect(effects.warmRadial, 50)
    statusbars.getStatusBarAttachedTo(StatusBarKind.Bigenemyhealth, otherSprite).value += -3.5
    info.changeScoreBy(25)
    if (Doublefire && Doublefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Bigenemyhealth, otherSprite).value += 1
    }
    if (tripplefire && tripplefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.Bigenemyhealth, otherSprite).value += 1
    }
})
statusbars.onZero(StatusBarKind.poweruphealth, function (status) {
    Powerupdeath(status.spriteAttachedTo())
})
sprites.onOverlap(SpriteKind.Enemyshot2, SpriteKind.Player, function (sprite, otherSprite) {
    if (Shileded && Shileded.lifespan > 0) {
        sprite.destroy()
    } else {
        otherSprite.destroy()
        music.smallCrash.play()
        sprite.destroy()
        info.changeLifeBy(-1)
        if (Doublefire && Doublefire.lifespan > 0) {
            Doublefire.lifespan = 0
        }
        if (tripplefire && tripplefire.lifespan > 0) {
            tripplefire.lifespan = 0
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy2, function (sprite, otherSprite) {
    music.zapped.play()
    sprite.destroy()
    otherSprite.startEffect(effects.warmRadial, 50)
    statusbars.getStatusBarAttachedTo(StatusBarKind.bigenemyhealth2, otherSprite).value += -3.5
    info.changeScoreBy(25)
    if (Doublefire && Doublefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.bigenemyhealth2, otherSprite).value += 1
    }
    if (tripplefire && tripplefire.lifespan > 0) {
        statusbars.getStatusBarAttachedTo(StatusBarKind.bigenemyhealth2, otherSprite).value += 1
    }
})
function Sprite2movement () {
    characterAnimations.loopFrames(
    mySprite2,
    assets.animation`myAnim17`,
    200,
    characterAnimations.rule(Predicate.NotMoving)
    )
    characterAnimations.runFrames(
    mySprite2,
    [img`
        . . . . . . . . . . 
        . . . . 6 6 . . . . 
        . . . 6 6 6 6 . . . 
        . . 6 1 1 6 6 6 . . 
        . . 6 7 7 1 6 6 6 . 
        . 6 6 6 6 7 6 6 6 . 
        . 6 6 6 6 7 6 6 6 . 
        . 9 6 6 6 7 9 9 9 . 
        . 6 6 1 1 7 6 6 6 . 
        . 6 . 6 6 6 6 . 6 . 
        . . . . 5 5 . . . . 
        `, img`
        . . . . . . . . . . 
        . . . . 6 . . . . . 
        . . . . 6 6 . . . . 
        . . . 6 1 6 6 . . . 
        . . . 6 7 1 6 6 . . 
        . . 6 6 6 7 6 6 6 . 
        . . 6 6 6 7 6 6 6 . 
        . . 9 6 6 7 9 9 9 . 
        . . 6 6 1 7 6 6 6 . 
        . . . 6 6 6 6 . 6 . 
        . . . . 5 5 . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.runFrames(
    mySprite2,
    [img`
        . . . . . . . . . . 
        . . . . 6 6 . . . . 
        . . . 6 6 6 6 . . . 
        . . 6 6 6 1 1 6 . . 
        . 6 6 6 1 7 7 6 . . 
        . 6 6 6 7 6 6 6 6 . 
        . 6 6 6 7 6 6 6 6 . 
        . 9 9 9 7 6 6 6 9 . 
        . 6 6 6 7 1 1 6 6 . 
        . 6 . 6 6 6 6 . 6 . 
        . . . . 5 5 . . . . 
        `, img`
        . . . . . . . . . . 
        . . . . . 6 . . . . 
        . . . . 6 6 . . . . 
        . . . 6 6 1 6 . . . 
        . . 6 6 1 7 6 . . . 
        . 6 6 6 7 6 6 6 . . 
        . 6 6 6 7 6 6 6 . . 
        . 9 9 9 7 6 6 9 . . 
        . 6 6 6 7 1 6 6 . . 
        . 6 . 6 6 6 6 . . . 
        . . . . 5 5 . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.runFrames(
    mySprite2,
    [img`
        . . . . 6 6 . . . . 
        . . . 6 6 6 6 . . . 
        . . 6 6 1 1 6 6 . . 
        . . 6 1 7 7 1 6 . . 
        . 6 6 7 6 6 7 6 6 . 
        6 6 6 7 6 6 7 6 6 6 
        9 9 9 7 6 6 7 9 9 9 
        6 6 6 7 1 1 7 6 6 6 
        6 . . 6 6 6 6 . . 6 
        . . . 9 9 9 9 . . . 
        . . . . 9 9 . . . . 
        `, img`
        . . . . 6 6 . . . . 
        . . . 6 6 6 6 . . . 
        . . 6 6 1 1 6 6 . . 
        . . 6 1 7 7 1 6 . . 
        . 6 6 7 6 6 7 6 6 . 
        6 6 6 7 6 6 7 6 6 6 
        9 9 9 7 6 6 7 9 9 9 
        6 6 6 7 1 1 7 6 6 6 
        6 . . 6 6 6 6 . . 6 
        . . . 9 5 5 9 . . . 
        . . . 9 9 9 9 . . . 
        . . . . 9 9 . . . . 
        `],
    500,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.runFrames(
    mySprite2,
    [img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . 6 6 . . . . 
        . . . 6 6 6 6 . . . 
        . . 6 6 1 1 6 6 . . 
        . . 6 1 7 7 1 6 . . 
        . 6 6 7 6 6 7 6 6 . 
        6 6 6 7 6 6 7 6 6 6 
        9 9 9 7 6 6 7 9 9 9 
        6 6 6 7 1 1 7 6 6 6 
        6 . . 6 6 6 6 . . 6 
        `, img`
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . . . . . . . 
        . . . . 6 6 . . . . 
        . . . 6 6 6 6 . . . 
        . . 6 6 1 1 6 6 . . 
        . . 6 1 7 7 1 6 . . 
        . 6 6 7 6 6 7 6 6 . 
        6 6 6 7 6 6 7 6 6 6 
        9 9 9 7 6 6 7 9 9 9 
        6 6 6 7 1 1 7 6 6 6 
        6 . . 6 6 6 6 . . 6 
        `],
    500,
    characterAnimations.rule(Predicate.MovingDown)
    )
    Sprite2_projetile = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectiletimer)
    Sprite2_projetile.lifespan = 999999
}
statusbars.onZero(StatusBarKind.boss2health, function (status) {
    boss2.destroy(effects.fountain, 1000)
    info.changeScoreBy(50000)
    music.powerDown.stop()
    Bossfiretime2.lifespan = 0
    Bossfiretime2.lifespan += -999999
    if (Math.percentChance(100)) {
        Life = sprites.create(img`
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . 2 2 2 . . . 2 2 2 . . . 
            . . 2 2 2 2 2 . 2 2 2 2 2 . . 
            . 2 2 2 2 1 2 2 2 1 2 2 2 2 . 
            . 2 2 2 2 1 2 2 2 1 2 2 2 2 . 
            . 2 2 2 2 1 1 1 1 1 2 2 2 2 . 
            . . 2 2 2 1 2 2 2 1 2 2 2 . . 
            . . . 2 2 1 2 2 2 1 2 2 . . . 
            . . . . 2 2 2 2 2 2 2 . . . . 
            . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 . . . . . . 
            . . . . . . . 2 . . . . . . . 
            . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . 
            `, SpriteKind.Health)
        characterAnimations.loopFrames(
        Life,
        assets.animation`myAnim13`,
        500,
        characterAnimations.rule(Predicate.Moving)
        )
        Life.x = boss2.x
        Life.y = boss2.y
        Life.lifespan = 25000
        Life.setVelocity(randint(-40, 40), randint(-40, 40))
        Life.setFlag(SpriteFlag.BounceOnWall, true)
    }
})
let choose = 0
let projectile: Sprite = null
let movinf = false
let bigstatusbar2: StatusBarSprite = null
let _1shotenemyfire: Sprite = null
let minion: Sprite = null
let bigstatusbar: StatusBarSprite = null
let statusbar2: StatusBarSprite = null
let enemyversion2: Sprite = null
let enemyfiretime2: Sprite = null
let shield: Sprite = null
let Life: Sprite = null
let bossfiretime: Sprite = null
let statusbar: StatusBarSprite = null
let Bossfiretime2: Sprite = null
let statusbar3: StatusBarSprite = null
let enemySpeed = 0
let Sprite2_projetile: Sprite = null
let Fire: Sprite = null
let boss2: Sprite = null
let Sprite1_Projectile: Sprite = null
let minion2spawn = 0
let Minionspawn = 0
let Enemy2spawntime = 0
let EnemySpawnTime = 0
let minion2: Sprite = null
let bonus: Sprite = null
let boss1: Sprite = null
let laser: Sprite = null
let Miniship: Sprite = null
let does_miniship_exist = false
let Sprite3_Projectile: Sprite = null
let Enemy_1: Sprite = null
let enemyfiretime: Sprite = null
let powerup: Sprite = null
let selectcharindicator: Sprite = null
let currentlyselectedsprite: Sprite = null
let inCharacterSelectionMenu = false
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
let textSprite: TextSprite = null
let powerup2activate = false
let powerupactivate = false
let powerup2: Sprite = null
let tripplefire: Sprite = null
let Doublefire: Sprite = null
let Shileded: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888fffff8888888888fffffff8888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888ff888888888888ffff8888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888f8888888888888cf888888888888888888888888888888888888888cfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff88888bdddddddddddd888bddddddddddddd96888888889dddddb888688888bddddddddddddb89ddddddddddddddd6888ccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888b1111111111111d8889111111111111111d8888886111111d888688861111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888b11111111111111d88891111111111111111b88888911111116888888d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111d8889111111111111111118888811111111b88888b11111111111111198d111111111111111688696ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888111111999999999b8889111119999991111116888b11111111d88888b11111d99999999968d1111199999999996886966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111b888888888888891111d888888b111116888d11111111168888911111888888888888d1111d88888888888886966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111b888888888888891111d888888611111688611111111119888891111d888888888888d1111d88888888888889966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111d888888888888891111d888888611111688b11111911111688891111d888888888888d1111d8888888888869996ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888111111111111119888891111d888888611111688d1111d611111b88891111d888699999888d111111111111168869996cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111168891111d888888b1111168611111b8d1111d88891111d888699996888d111111111111168869966cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8886111111111111111d88911111dddddd111111689111116891111168891111d888699666888d11111111111116886996cffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888b1111111111111116891111111111111111d8811111d8861111198891111d8886996cc888d11111111111116886966cffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888869999999911111b891111111111111111b8b111119666d1111d8891111d888666688888d1111d88888888888696ccffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888888888888611111989111111111111111b88d111111111111111b891111d888888888888d1111d88888888888866cfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888888861111198911111999999996888611111111111111119891111d888888888888d1111d88888888888886ccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff88888888888888611111b891111d888888888888b111111111111111116911111888888888888d1111d888888888888866cffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d1111111ddd111111b891111d888888888888d11111dddddd111111bb111111dd111111198d11111111111111168866ccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111116891111d888888888886111119888888611111d611111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111198891111d88869996888911111b8888888d111116d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111988891111d8886999688611111188888888b1111198d1111111111111b8d111111111111111688696ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888886666666688888888888888699988888888888889968888888888886666666688888888888888888888888886966cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888888888888888888888888999688888888888869968888888888888888888888888888888888888888888889966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888888888888888888888888888869966c8888888888899996888888888888888888888888888888888888888888869966cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffc6666668888888869999666666699996cffc8866666699996668666666666888888866666966666666666666666699996cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffcc699999999999999999999999999966cfffc669999999966ccc699999999999999999999999999999999999999999966cfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcc6666669999999996666666666666cffffcc6666666666cffcc6666699999999999999669999999666666666666666ccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffccccc666666666666ccccc6666cccffffffcccc6666cccffffccc66666666666666666666666666666666666666ccccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffcccccccccccccffffccccccfffffffffffccccccfffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888f888888888888888888f888888888888888888888fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886dddddddddddddddd888bd11111111111968886ddddddddddddddb8886ddddddddddddddddd6888ccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d88d111111111111111b886111111111111111168611111111111111111688666cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d8b11111111111111111886111111111111111116611111111111111111688696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d8d11111111111111111b8611111111111111111b611111111111111111688696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111d999999999b611111d688888b11111b8611111d99999d11111d8b9999d11111d9999b888696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b88888881111198611111b888888d1111d888888611111688888888996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888886996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888869996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8886888d111198611111b888888d1111d888888611111688699999996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111b88888811111d88888861111168869999966ccffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111198888886111116886999666ccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111111111111111b8886886111116886996cccfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111d88866886111116886996cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d11119861111111111111119888896886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d1111986111119666d1111d8888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111988888861111198611111b888b11111b888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b888666668881111111ddddd111111b8611111b8888d11111688898886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b88899996888d1111111111111111168611111b8888b11111988868886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8889999688861111111111111111988611111b88888d1111168888886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8889966688886111111111111119888611111b88888611111d8888886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888888996ccc888888666666666668888888888888888888888888888888888888886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888886996cffc88888888888888888888888888888868888888888886888888888889966cfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff88888888869996cfffc888888888888888888688888888869988888888886968888888886996ccfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff8866666999966cffffc66888888888888699996666666999996666666699996686666699996cffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffc66999999996cffffffc6699999999999999999999999999966699999999966669999999966cffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffc666666666ccfffffffcc6669999999999966666666666666cc6666666666ccc666666666ccffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffccc6666cccfffffffffccc666666666666ccccccc6666cccccccc6666ccccccccc666ccccfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffcccccccccccccfffffcccccfffffffccccccfffffffcccccffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(200)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111112222222222222222222222222222222222111112222222222111111122222222222222222222222222222222221111111111111111111111111111111111
    1111111111111111111111111111111111222222222222222222222222222222222222221122222222222211112222222222222222222222222222222222222111111111111111111111111111111111
    111111111111111111111111111111111222222222222222222222222222222222222222212222222222222c1222222222222222222222222222222222222222c1111111111111111111111111111111
    1111111111111111111111111111111122222bdddddddddddd222bddddddddddddd54222222225dddddb222422222bddddddddddddb25ddddddddddddddd4222cc111111111111111111111111111111
    11111111111111111111111111111112222bfffffffffffffd2225fffffffffffffffd2222224ffffffd22242224ffffffffffffff52dfffffffffffffff422444c11111111111111111111111111111
    1111111111111111111111111111111222bffffffffffffffd2225ffffffffffffffffb222225fffffff4222222dffffffffffffff52dfffffffffffffff422454c11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffffd2225fffffffffffffffff22222ffffffffb22222bfffffffffffffff52dfffffffffffffff422454cc1111111111111111111111111111
    1111111111111111111111111111111222ffffff555555555b2225fffff555555ffffff4222bffffffffd22222bfffffd55555555562dfffff55555555554224544c1111111111111111111111111111
    1111111111111111111111111111112224fffffb22222222222225ffffd222222bfffff4222dfffffffff422225fffff222222222222dffffd22222222222224544c1111111111111111111111111111
    1111111111111111111111111111112224fffffb22222222222225ffffd2222224fffff4224ffffffffff522225ffffd222222222222dffffd22222222222225544c1111111111111111111111111111
    1111111111111111111111111111112224fffffd22222222222225ffffd2222224fffff422bfffff5fffff42225ffffd222222222222dffffd2222222222245554cc1111111111111111111111111111
    1111111111111111111111111111111222ffffffffffffff522225ffffd2222224fffff422dffffd4fffffb2225ffffd222455555222dfffffffffffff42245554c11111111111111111111111111111
    1111111111111111111111111111111222dfffffffffffffff4225ffffd222222bfffff424fffffb2dffffd2225ffffd222455554222dfffffffffffff42245544c11111111111111111111111111111
    11111111111111111111111111111112224fffffffffffffffd225fffffddddddffffff425fffff425fffff4225ffffd222455444222dfffffffffffff4224554c111111111111111111111111111111
    11111111111111111111111111111112222bfffffffffffffff425ffffffffffffffffd22fffffd224fffff5225ffffd2224554cc222dfffffffffffff4224544c111111111111111111111111111111
    1111111111111111111111111111111122222455555555fffffb25ffffffffffffffffb2bfffff5444dffffd225ffffd222444422222dffffd22222222222454cc111111111111111111111111111111
    1111111111111111111111111111111122222222222224fffff525fffffffffffffffb22dfffffffffffffffb25ffffd222222222222dffffd22222222222244c1111111111111111111111111111111
    1111111111111111111111111111111222222222222224fffff525fffff5555555542224ffffffffffffffff525ffffd222222222222dffffd22222222222224cc111111111111111111111111111111
    1111111111111111111111111111111222222222222224fffffb25ffffd222222222222bfffffffffffffffff45fffff222222222222dffffd222222222222244c111111111111111111111111111111
    1111111111111111111111111111111222dfffffffdddffffffb25ffffd222222222222dfffffddddddffffffbbffffffddfffffff52dfffffffffffffff42244cc11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffffff425ffffd222222222224fffff52222224fffffd4fffffffffffffff52dfffffffffffffff422444c11111111111111111111111111111
    1111111111111111111111111111111222dfffffffffffffff5225ffffd222455542225fffffb2222222dfffff4dffffffffffffff52dfffffffffffffff422454c11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffff52225ffffd22245554224ffffff22222222bfffff52dfffffffffffffb2dfffffffffffffff422454cc1111111111111111111111111111
    11111111111111111111111111111112222222224444444422222222222222455522222222222225542222222222224444444422222222222222222222222224544c1111111111111111111111111111
    11111111111111111111111111111112222222222222222222222222222222555422222222222245542222222222222222222222222222222222222222222225544c1111111111111111111111111111
    111111111111111111111111111111112222222222222222222222222222245544c2222222222255554222222222222222222222222222222222222222222245544c1111111111111111111111111111
    111111111111111111111111111111111c4444442222222245555444444455554c11c2244444455554442444444444222222244444544444444444444444455554c11111111111111111111111111111
    111111111111111111111111111111111cc455555555555555555555555555544c111c445555555544ccc455555555555555555555555555555555555555555544c11111111111111111111111111111
    1111111111111111111111111111111111cc4444445555555554444444444444c1111cc4444444444c11cc4444455555555555555445555555444444444444444cc11111111111111111111111111111
    11111111111111111111111111111111111ccccc444444444444ccccc4444ccc111111cccc4444ccc1111ccc44444444444444444444444444444444444444cccc111111111111111111111111111111
    111111111111111111111111111111111111111ccccccccccccc1111cccccc11111111111cccccc111111111ccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111122222222222222222222222222222222222221222222222222222222122222222222222222222211111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222221111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222c11111111111111111111111111111111111111
    1111111111111111111111111111111111111111224dddddddddddddddd222bdfffffffffff542224ddddddddddddddb2224ddddddddddddddddd4222cc1111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd22dfffffffffffffffb224ffffffffffffffff424fffffffffffffffff422444c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd2bfffffffffffffffff224fffffffffffffffff44fffffffffffffffff422454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd2dfffffffffffffffffb24fffffffffffffffffb4fffffffffffffffff422454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffd555555555b4fffffd422222bfffffb24fffffd55555dfffffd2b5555dfffffd5555b222454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222fffff524fffffb222222dffffd2222224fffff422222222554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffb222222dffffd2222224fffff422222224554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffb222222dffffd2222224fffff422222245554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2224222dffff524fffffb222222dffffd2222224fffff422455555554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffb222222fffffd2222224fffff42245555544cc111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffffffffffffff52222224fffff4224555444cc1111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffffffffffffffb2224224fffff4224554ccc111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524ffffffffffffffffd22244224fffff4224554c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffffffffffff5222254224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffff5444dffffd2222454224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffff52222224fffff524fffffb222bfffffb222454224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22244444222fffffffdddddffffffb24fffffb2222dfffff422252224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22255554222dfffffffffffffffff424fffffb2222bfffff522242224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb222555542224ffffffffffffffff5224fffffb22222dfffff42222224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb2225544422224ffffffffffffff52224fffffb222224fffffd2222224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222554ccc222222444444444442222222222222222222222222222222222222224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222224554c11c22222222222222222222222222222242222222222224222222222225544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111122222222245554c111c222222222222222222422222222245522222222224542222222224554cc11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111112244444555544c1111c44222222222222455554444444555554444444455554424444455554c111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111c44555555554c111111c4455555555555555555555555555544455555555544445555555544c111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111c444444444cc1111111cc4445555555555544444444444444cc4444444444ccc444444444cc111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111ccc4444ccc111111111ccc444444444444ccccccc4444cccccccc4444ccccccccc444cccc1111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111ccccc111111111111111ccccccccccccc11111ccccc1111111cccccc1111111ccccc1111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
pause(200)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888fffff8888888888fffffff8888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888ff888888888888ffff8888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888f8888888888888cf888888888888888888888888888888888888888cfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff88888bdddddddddddd888bddddddddddddd96888888889dddddb888688888bddddddddddddb89ddddddddddddddd6888ccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888b1111111111111d8889111111111111111d8888886111111d888688861111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888b11111111111111d88891111111111111111b88888911111116888888d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111d8889111111111111111118888811111111b88888b11111111111111198d111111111111111688696ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888111111999999999b8889111119999991111116888b11111111d88888b11111d99999999968d1111199999999996886966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111b888888888888891111d888888b111116888d11111111168888911111888888888888d1111d88888888888886966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111b888888888888891111d888888611111688611111111119888891111d888888888888d1111d88888888888889966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111d888888888888891111d888888611111688b11111911111688891111d888888888888d1111d8888888888869996ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888111111111111119888891111d888888611111688d1111d611111b88891111d888699999888d111111111111168869996cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111168891111d888888b1111168611111b8d1111d88891111d888699996888d111111111111168869966cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8886111111111111111d88911111dddddd111111689111116891111168891111d888699666888d11111111111116886996cffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888b1111111111111116891111111111111111d8811111d8861111198891111d8886996cc888d11111111111116886966cffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888869999999911111b891111111111111111b8b111119666d1111d8891111d888666688888d1111d88888888888696ccffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888888888888611111989111111111111111b88d111111111111111b891111d888888888888d1111d88888888888866cfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888888861111198911111999999996888611111111111111119891111d888888888888d1111d88888888888886ccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff88888888888888611111b891111d888888888888b111111111111111116911111888888888888d1111d888888888888866cffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d1111111ddd111111b891111d888888888888d11111dddddd111111bb111111dd111111198d11111111111111168866ccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111116891111d888888888886111119888888611111d611111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111198891111d88869996888911111b8888888d111116d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111988891111d8886999688611111188888888b1111198d1111111111111b8d111111111111111688696ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888886666666688888888888888699988888888888889968888888888886666666688888888888888888888888886966cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888888888888888888888888999688888888888869968888888888888888888888888888888888888888888889966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888888888888888888888888888869966c8888888888899996888888888888888888888888888888888888888888869966cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffc6666668888888869999666666699996cffc8866666699996668666666666888888866666966666666666666666699996cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffcc699999999999999999999999999966cfffc669999999966ccc699999999999999999999999999999999999999999966cfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcc6666669999999996666666666666cffffcc6666666666cffcc6666699999999999999669999999666666666666666ccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffccccc666666666666ccccc6666cccffffffcccc6666cccffffccc66666666666666666666666666666666666666ccccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffcccccccccccccffffccccccfffffffffffccccccfffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888f888888888888888888f888888888888888888888fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886dddddddddddddddd888bd11111111111968886ddddddddddddddb8886ddddddddddddddddd6888ccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d88d111111111111111b886111111111111111168611111111111111111688666cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d8b11111111111111111886111111111111111116611111111111111111688696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d8d11111111111111111b8611111111111111111b611111111111111111688696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111d999999999b611111d688888b11111b8611111d99999d11111d8b9999d11111d9999b888696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b88888881111198611111b888888d1111d888888611111688888888996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888886996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888869996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8886888d111198611111b888888d1111d888888611111688699999996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111b88888811111d88888861111168869999966ccffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111198888886111116886999666ccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111111111111111b8886886111116886996cccfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111d88866886111116886996cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d11119861111111111111119888896886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d1111986111119666d1111d8888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111988888861111198611111b888b11111b888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b888666668881111111ddddd111111b8611111b8888d11111688898886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b88899996888d1111111111111111168611111b8888b11111988868886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8889999688861111111111111111988611111b88888d1111168888886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8889966688886111111111111119888611111b88888611111d8888886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888888996ccc888888666666666668888888888888888888888888888888888888886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888886996cffc88888888888888888888888888888868888888888886888888888889966cfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff88888888869996cfffc888888888888888888688888888869988888888886968888888886996ccfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff8866666999966cffffc66888888888888699996666666999996666666699996686666699996cffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffc66999999996cffffffc6699999999999999999999999999966699999999966669999999966cffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffc666666666ccfffffffcc6669999999999966666666666666cc6666666666ccc666666666ccffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffccc6666cccfffffffffccc666666666666ccccccc6666cccccccc6666ccccccccc666ccccfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffcccccccccccccfffffcccccfffffffccccccfffffffcccccffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(200)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111112222222222222222222222222222222222111112222222222111111122222222222222222222222222222222221111111111111111111111111111111111
    1111111111111111111111111111111111222222222222222222222222222222222222221122222222222211112222222222222222222222222222222222222111111111111111111111111111111111
    111111111111111111111111111111111222222222222222222222222222222222222222212222222222222c1222222222222222222222222222222222222222c1111111111111111111111111111111
    1111111111111111111111111111111122222bdddddddddddd222bddddddddddddd54222222225dddddb222422222bddddddddddddb25ddddddddddddddd4222cc111111111111111111111111111111
    11111111111111111111111111111112222bfffffffffffffd2225fffffffffffffffd2222224ffffffd22242224ffffffffffffff52dfffffffffffffff422444c11111111111111111111111111111
    1111111111111111111111111111111222bffffffffffffffd2225ffffffffffffffffb222225fffffff4222222dffffffffffffff52dfffffffffffffff422454c11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffffd2225fffffffffffffffff22222ffffffffb22222bfffffffffffffff52dfffffffffffffff422454cc1111111111111111111111111111
    1111111111111111111111111111111222ffffff555555555b2225fffff555555ffffff4222bffffffffd22222bfffffd55555555562dfffff55555555554224544c1111111111111111111111111111
    1111111111111111111111111111112224fffffb22222222222225ffffd222222bfffff4222dfffffffff422225fffff222222222222dffffd22222222222224544c1111111111111111111111111111
    1111111111111111111111111111112224fffffb22222222222225ffffd2222224fffff4224ffffffffff522225ffffd222222222222dffffd22222222222225544c1111111111111111111111111111
    1111111111111111111111111111112224fffffd22222222222225ffffd2222224fffff422bfffff5fffff42225ffffd222222222222dffffd2222222222245554cc1111111111111111111111111111
    1111111111111111111111111111111222ffffffffffffff522225ffffd2222224fffff422dffffd4fffffb2225ffffd222455555222dfffffffffffff42245554c11111111111111111111111111111
    1111111111111111111111111111111222dfffffffffffffff4225ffffd222222bfffff424fffffb2dffffd2225ffffd222455554222dfffffffffffff42245544c11111111111111111111111111111
    11111111111111111111111111111112224fffffffffffffffd225fffffddddddffffff425fffff425fffff4225ffffd222455444222dfffffffffffff4224554c111111111111111111111111111111
    11111111111111111111111111111112222bfffffffffffffff425ffffffffffffffffd22fffffd224fffff5225ffffd2224554cc222dfffffffffffff4224544c111111111111111111111111111111
    1111111111111111111111111111111122222455555555fffffb25ffffffffffffffffb2bfffff5444dffffd225ffffd222444422222dffffd22222222222454cc111111111111111111111111111111
    1111111111111111111111111111111122222222222224fffff525fffffffffffffffb22dfffffffffffffffb25ffffd222222222222dffffd22222222222244c1111111111111111111111111111111
    1111111111111111111111111111111222222222222224fffff525fffff5555555542224ffffffffffffffff525ffffd222222222222dffffd22222222222224cc111111111111111111111111111111
    1111111111111111111111111111111222222222222224fffffb25ffffd222222222222bfffffffffffffffff45fffff222222222222dffffd222222222222244c111111111111111111111111111111
    1111111111111111111111111111111222dfffffffdddffffffb25ffffd222222222222dfffffddddddffffffbbffffffddfffffff52dfffffffffffffff42244cc11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffffff425ffffd222222222224fffff52222224fffffd4fffffffffffffff52dfffffffffffffff422444c11111111111111111111111111111
    1111111111111111111111111111111222dfffffffffffffff5225ffffd222455542225fffffb2222222dfffff4dffffffffffffff52dfffffffffffffff422454c11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffff52225ffffd22245554224ffffff22222222bfffff52dfffffffffffffb2dfffffffffffffff422454cc1111111111111111111111111111
    11111111111111111111111111111112222222224444444422222222222222455522222222222225542222222222224444444422222222222222222222222224544c1111111111111111111111111111
    11111111111111111111111111111112222222222222222222222222222222555422222222222245542222222222222222222222222222222222222222222225544c1111111111111111111111111111
    111111111111111111111111111111112222222222222222222222222222245544c2222222222255554222222222222222222222222222222222222222222245544c1111111111111111111111111111
    111111111111111111111111111111111c4444442222222245555444444455554c11c2244444455554442444444444222222244444544444444444444444455554c11111111111111111111111111111
    111111111111111111111111111111111cc455555555555555555555555555544c111c445555555544ccc455555555555555555555555555555555555555555544c11111111111111111111111111111
    1111111111111111111111111111111111cc4444445555555554444444444444c1111cc4444444444c11cc4444455555555555555445555555444444444444444cc11111111111111111111111111111
    11111111111111111111111111111111111ccccc444444444444ccccc4444ccc111111cccc4444ccc1111ccc44444444444444444444444444444444444444cccc111111111111111111111111111111
    111111111111111111111111111111111111111ccccccccccccc1111cccccc11111111111cccccc111111111ccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111122222222222222222222222222222222222221222222222222222222122222222222222222222211111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222221111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222c11111111111111111111111111111111111111
    1111111111111111111111111111111111111111224dddddddddddddddd222bdfffffffffff542224ddddddddddddddb2224ddddddddddddddddd4222cc1111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd22dfffffffffffffffb224ffffffffffffffff424fffffffffffffffff422444c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd2bfffffffffffffffff224fffffffffffffffff44fffffffffffffffff422454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd2dfffffffffffffffffb24fffffffffffffffffb4fffffffffffffffff422454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffd555555555b4fffffd422222bfffffb24fffffd55555dfffffd2b5555dfffffd5555b222454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222fffff524fffffb222222dffffd2222224fffff422222222554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffb222222dffffd2222224fffff422222224554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffb222222dffffd2222224fffff422222245554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2224222dffff524fffffb222222dffffd2222224fffff422455555554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffb222222fffffd2222224fffff42245555544cc111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffffffffffffff52222224fffff4224555444cc1111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffffffffffffffb2224224fffff4224554ccc111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524ffffffffffffffffd22244224fffff4224554c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffffffffffff5222254224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffff5444dffffd2222454224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffff52222224fffff524fffffb222bfffffb222454224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22244444222fffffffdddddffffffb24fffffb2222dfffff422252224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22255554222dfffffffffffffffff424fffffb2222bfffff522242224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb222555542224ffffffffffffffff5224fffffb22222dfffff42222224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb2225544422224ffffffffffffff52224fffffb222224fffffd2222224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222554ccc222222444444444442222222222222222222222222222222222222224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222224554c11c22222222222222222222222222222242222222222224222222222225544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111122222222245554c111c222222222222222222422222222245522222222224542222222224554cc11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111112244444555544c1111c44222222222222455554444444555554444444455554424444455554c111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111c44555555554c111111c4455555555555555555555555555544455555555544445555555544c111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111c444444444cc1111111cc4445555555555544444444444444cc4444444444ccc444444444cc111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111ccc4444ccc111111111ccc444444444444ccccccc4444cccccccc4444ccccccccc444cccc1111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111ccccc111111111111111ccccccccccccc11111ccccc1111111cccccc1111111ccccc1111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
pause(200)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888fffff8888888888fffffff8888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888ff888888888888ffff8888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888f8888888888888cf888888888888888888888888888888888888888cfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff88888bdddddddddddd888bddddddddddddd96888888889dddddb888688888bddddddddddddb89ddddddddddddddd6888ccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888b1111111111111d8889111111111111111d8888886111111d888688861111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888b11111111111111d88891111111111111111b88888911111116888888d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111d8889111111111111111118888811111111b88888b11111111111111198d111111111111111688696ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888111111999999999b8889111119999991111116888b11111111d88888b11111d99999999968d1111199999999996886966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111b888888888888891111d888888b111116888d11111111168888911111888888888888d1111d88888888888886966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111b888888888888891111d888888611111688611111111119888891111d888888888888d1111d88888888888889966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111d888888888888891111d888888611111688b11111911111688891111d888888888888d1111d8888888888869996ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888111111111111119888891111d888888611111688d1111d611111b88891111d888699999888d111111111111168869996cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111168891111d888888b1111168611111b8d1111d88891111d888699996888d111111111111168869966cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8886111111111111111d88911111dddddd111111689111116891111168891111d888699666888d11111111111116886996cffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888b1111111111111116891111111111111111d8811111d8861111198891111d8886996cc888d11111111111116886966cffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888869999999911111b891111111111111111b8b111119666d1111d8891111d888666688888d1111d88888888888696ccffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888888888888611111989111111111111111b88d111111111111111b891111d888888888888d1111d88888888888866cfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888888861111198911111999999996888611111111111111119891111d888888888888d1111d88888888888886ccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff88888888888888611111b891111d888888888888b111111111111111116911111888888888888d1111d888888888888866cffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d1111111ddd111111b891111d888888888888d11111dddddd111111bb111111dd111111198d11111111111111168866ccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111116891111d888888888886111119888888611111d611111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111198891111d88869996888911111b8888888d111116d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111988891111d8886999688611111188888888b1111198d1111111111111b8d111111111111111688696ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888886666666688888888888888699988888888888889968888888888886666666688888888888888888888888886966cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888888888888888888888888999688888888888869968888888888888888888888888888888888888888888889966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888888888888888888888888888869966c8888888888899996888888888888888888888888888888888888888888869966cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffc6666668888888869999666666699996cffc8866666699996668666666666888888866666966666666666666666699996cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffcc699999999999999999999999999966cfffc669999999966ccc699999999999999999999999999999999999999999966cfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcc6666669999999996666666666666cffffcc6666666666cffcc6666699999999999999669999999666666666666666ccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffccccc666666666666ccccc6666cccffffffcccc6666cccffffccc66666666666666666666666666666666666666ccccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffcccccccccccccffffccccccfffffffffffccccccfffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888f888888888888888888f888888888888888888888fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886dddddddddddddddd888bd11111111111968886ddddddddddddddb8886ddddddddddddddddd6888ccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d88d111111111111111b886111111111111111168611111111111111111688666cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d8b11111111111111111886111111111111111116611111111111111111688696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d8d11111111111111111b8611111111111111111b611111111111111111688696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111d999999999b611111d688888b11111b8611111d99999d11111d8b9999d11111d9999b888696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b88888881111198611111b888888d1111d888888611111688888888996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888886996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888869996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8886888d111198611111b888888d1111d888888611111688699999996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111b88888811111d88888861111168869999966ccffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111198888886111116886999666ccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111111111111111b8886886111116886996cccfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111d88866886111116886996cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d11119861111111111111119888896886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d1111986111119666d1111d8888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111988888861111198611111b888b11111b888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b888666668881111111ddddd111111b8611111b8888d11111688898886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b88899996888d1111111111111111168611111b8888b11111988868886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8889999688861111111111111111988611111b88888d1111168888886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8889966688886111111111111119888611111b88888611111d8888886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888888996ccc888888666666666668888888888888888888888888888888888888886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888886996cffc88888888888888888888888888888868888888888886888888888889966cfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff88888888869996cfffc888888888888888888688888888869988888888886968888888886996ccfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff8866666999966cffffc66888888888888699996666666999996666666699996686666699996cffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffc66999999996cffffffc6699999999999999999999999999966699999999966669999999966cffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffc666666666ccfffffffcc6669999999999966666666666666cc6666666666ccc666666666ccffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffccc6666cccfffffffffccc666666666666ccccccc6666cccccccc6666ccccccccc666ccccfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffcccccccccccccfffffcccccfffffffccccccfffffffcccccffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(200)
scene.setBackgroundImage(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111112222222222222222222222222222222222111112222222222111111122222222222222222222222222222222221111111111111111111111111111111111
    1111111111111111111111111111111111222222222222222222222222222222222222221122222222222211112222222222222222222222222222222222222111111111111111111111111111111111
    111111111111111111111111111111111222222222222222222222222222222222222222212222222222222c1222222222222222222222222222222222222222c1111111111111111111111111111111
    1111111111111111111111111111111122222bdddddddddddd222bddddddddddddd54222222225dddddb222422222bddddddddddddb25ddddddddddddddd4222cc111111111111111111111111111111
    11111111111111111111111111111112222bfffffffffffffd2225fffffffffffffffd2222224ffffffd22242224ffffffffffffff52dfffffffffffffff422444c11111111111111111111111111111
    1111111111111111111111111111111222bffffffffffffffd2225ffffffffffffffffb222225fffffff4222222dffffffffffffff52dfffffffffffffff422454c11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffffd2225fffffffffffffffff22222ffffffffb22222bfffffffffffffff52dfffffffffffffff422454cc1111111111111111111111111111
    1111111111111111111111111111111222ffffff555555555b2225fffff555555ffffff4222bffffffffd22222bfffffd55555555562dfffff55555555554224544c1111111111111111111111111111
    1111111111111111111111111111112224fffffb22222222222225ffffd222222bfffff4222dfffffffff422225fffff222222222222dffffd22222222222224544c1111111111111111111111111111
    1111111111111111111111111111112224fffffb22222222222225ffffd2222224fffff4224ffffffffff522225ffffd222222222222dffffd22222222222225544c1111111111111111111111111111
    1111111111111111111111111111112224fffffd22222222222225ffffd2222224fffff422bfffff5fffff42225ffffd222222222222dffffd2222222222245554cc1111111111111111111111111111
    1111111111111111111111111111111222ffffffffffffff522225ffffd2222224fffff422dffffd4fffffb2225ffffd222455555222dfffffffffffff42245554c11111111111111111111111111111
    1111111111111111111111111111111222dfffffffffffffff4225ffffd222222bfffff424fffffb2dffffd2225ffffd222455554222dfffffffffffff42245544c11111111111111111111111111111
    11111111111111111111111111111112224fffffffffffffffd225fffffddddddffffff425fffff425fffff4225ffffd222455444222dfffffffffffff4224554c111111111111111111111111111111
    11111111111111111111111111111112222bfffffffffffffff425ffffffffffffffffd22fffffd224fffff5225ffffd2224554cc222dfffffffffffff4224544c111111111111111111111111111111
    1111111111111111111111111111111122222455555555fffffb25ffffffffffffffffb2bfffff5444dffffd225ffffd222444422222dffffd22222222222454cc111111111111111111111111111111
    1111111111111111111111111111111122222222222224fffff525fffffffffffffffb22dfffffffffffffffb25ffffd222222222222dffffd22222222222244c1111111111111111111111111111111
    1111111111111111111111111111111222222222222224fffff525fffff5555555542224ffffffffffffffff525ffffd222222222222dffffd22222222222224cc111111111111111111111111111111
    1111111111111111111111111111111222222222222224fffffb25ffffd222222222222bfffffffffffffffff45fffff222222222222dffffd222222222222244c111111111111111111111111111111
    1111111111111111111111111111111222dfffffffdddffffffb25ffffd222222222222dfffffddddddffffffbbffffffddfffffff52dfffffffffffffff42244cc11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffffff425ffffd222222222224fffff52222224fffffd4fffffffffffffff52dfffffffffffffff422444c11111111111111111111111111111
    1111111111111111111111111111111222dfffffffffffffff5225ffffd222455542225fffffb2222222dfffff4dffffffffffffff52dfffffffffffffff422454c11111111111111111111111111111
    1111111111111111111111111111111222dffffffffffffff52225ffffd22245554224ffffff22222222bfffff52dfffffffffffffb2dfffffffffffffff422454cc1111111111111111111111111111
    11111111111111111111111111111112222222224444444422222222222222455522222222222225542222222222224444444422222222222222222222222224544c1111111111111111111111111111
    11111111111111111111111111111112222222222222222222222222222222555422222222222245542222222222222222222222222222222222222222222225544c1111111111111111111111111111
    111111111111111111111111111111112222222222222222222222222222245544c2222222222255554222222222222222222222222222222222222222222245544c1111111111111111111111111111
    111111111111111111111111111111111c4444442222222245555444444455554c11c2244444455554442444444444222222244444544444444444444444455554c11111111111111111111111111111
    111111111111111111111111111111111cc455555555555555555555555555544c111c445555555544ccc455555555555555555555555555555555555555555544c11111111111111111111111111111
    1111111111111111111111111111111111cc4444445555555554444444444444c1111cc4444444444c11cc4444455555555555555445555555444444444444444cc11111111111111111111111111111
    11111111111111111111111111111111111ccccc444444444444ccccc4444ccc111111cccc4444ccc1111ccc44444444444444444444444444444444444444cccc111111111111111111111111111111
    111111111111111111111111111111111111111ccccccccccccc1111cccccc11111111111cccccc111111111ccccccccccccccccccccccccccccccccccccccc111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111112222222111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111122222222222222222222222222222222222221222222222222222222122222222222222222222211111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222221111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222222222222222222222222222222222222222222222222222222222222222222222222c11111111111111111111111111111111111111
    1111111111111111111111111111111111111111224dddddddddddddddd222bdfffffffffff542224ddddddddddddddb2224ddddddddddddddddd4222cc1111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd22dfffffffffffffffb224ffffffffffffffff424fffffffffffffffff422444c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd2bfffffffffffffffff224fffffffffffffffff44fffffffffffffffff422454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffffd2dfffffffffffffffffb24fffffffffffffffffb4fffffffffffffffff422454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffd555555555b4fffffd422222bfffffb24fffffd55555dfffffd2b5555dfffffd5555b222454c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222fffff524fffffb222222dffffd2222224fffff422222222554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffb222222dffffd2222224fffff422222224554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffb222222dffffd2222224fffff422222245554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2224222dffff524fffffb222222dffffd2222224fffff422455555554c111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffb222222fffffd2222224fffff42245555544cc111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffffffffffffff52222224fffff4224555444cc1111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524fffffffffffffffffb2224224fffff4224554ccc111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffffffffffd224fffffb2224222dffff524ffffffffffffffffd22244224fffff4224554c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffffffffffffff5222254224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffffb2222222dffff524fffff5444dffffd2222454224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22222222224fffff52222224fffff524fffffb222bfffffb222454224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22244444222fffffffdddddffffffb24fffffb2222dfffff422252224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb22255554222dfffffffffffffffff424fffffb2222bfffff522242224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb222555542224ffffffffffffffff5224fffffb22222dfffff42222224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111224fffffb2225544422224ffffffffffffff52224fffffb222224fffffd2222224fffff4224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222222554ccc222222444444444442222222222222222222222222222222222222224544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111222222222224554c11c22222222222222222222222222222242222222222224222222222225544c11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111122222222245554c111c222222222222222222422222222245522222222224542222222224554cc11111111111111111111111111111111111111111
    1111111111111111111111111111111111111111112244444555544c1111c44222222222222455554444444555554444444455554424444455554c111111111111111111111111111111111111111111
    111111111111111111111111111111111111111111c44555555554c111111c4455555555555555555555555555544455555555544445555555544c111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111c444444444cc1111111cc4445555555555544444444444444cc4444444444ccc444444444cc111111111111111111111111111111111111111111
    11111111111111111111111111111111111111111111ccc4444ccc111111111ccc444444444444ccccccc4444cccccccc4444ccccccccc444cccc1111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111ccccc111111111111111ccccccccccccc11111ccccc1111111cccccc1111111ccccc1111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `)
pause(200)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888fffff8888888888fffffff8888888888888888888888888888888888ffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888ff888888888888ffff8888888888888888888888888888888888888fffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffff8888888888888888888888888888888888888888f8888888888888cf888888888888888888888888888888888888888cfffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff88888bdddddddddddd888bddddddddddddd96888888889dddddb888688888bddddddddddddb89ddddddddddddddd6888ccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888b1111111111111d8889111111111111111d8888886111111d888688861111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888b11111111111111d88891111111111111111b88888911111116888888d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111d8889111111111111111118888811111111b88888b11111111111111198d111111111111111688696ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888111111999999999b8889111119999991111116888b11111111d88888b11111d99999999968d1111199999999996886966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111b888888888888891111d888888b111116888d11111111168888911111888888888888d1111d88888888888886966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111b888888888888891111d888888611111688611111111119888891111d888888888888d1111d88888888888889966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffff888611111d888888888888891111d888888611111688b11111911111688891111d888888888888d1111d8888888888869996ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888111111111111119888891111d888888611111688d1111d611111b88891111d888699999888d111111111111168869996cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111168891111d888888b1111168611111b8d1111d88891111d888699996888d111111111111168869966cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8886111111111111111d88911111dddddd111111689111116891111168891111d888699666888d11111111111116886996cffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888b1111111111111116891111111111111111d8811111d8861111198891111d8886996cc888d11111111111116886966cffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888869999999911111b891111111111111111b8b111119666d1111d8891111d888666688888d1111d88888888888696ccffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888888888888611111989111111111111111b88d111111111111111b891111d888888888888d1111d88888888888866cfffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888888861111198911111999999996888611111111111111119891111d888888888888d1111d88888888888886ccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff88888888888888611111b891111d888888888888b111111111111111116911111888888888888d1111d888888888888866cffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d1111111ddd111111b891111d888888888888d11111dddddd111111bb111111dd111111198d11111111111111168866ccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111116891111d888888888886111119888888611111d611111111111111198d111111111111111688666cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111198891111d88869996888911111b8888888d111116d1111111111111198d111111111111111688696cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff888d11111111111111988891111d8886999688611111188888888b1111198d1111111111111b8d111111111111111688696ccffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888886666666688888888888888699988888888888889968888888888886666666688888888888888888888888886966cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff8888888888888888888888888888888999688888888888869968888888888888888888888888888888888888888888889966cffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff8888888888888888888888888888869966c8888888888899996888888888888888888888888888888888888888888869966cffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffc6666668888888869999666666699996cffc8866666699996668666666666888888866666966666666666666666699996cfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffcc699999999999999999999999999966cfffc669999999966ccc699999999999999999999999999999999999999999966cfffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffcc6666669999999996666666666666cffffcc6666666666cffcc6666699999999999999669999999666666666666666ccfffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffccccc666666666666ccccc6666cccffffffcccc6666cccffffccc66666666666666666666666666666666666666ccccffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffcccccccccccccffffccccccfffffffffffccccccfffffffffcccccccccccccccccccccccccccccccccccccccfffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8888888fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff8888888888888888888888888888888888888f888888888888888888f888888888888888888888fffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888888888888888888888888888888888888888888888888888888888888888888888888888cffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886dddddddddddddddd888bd11111111111968886ddddddddddddddb8886ddddddddddddddddd6888ccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d88d111111111111111b886111111111111111168611111111111111111688666cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d8b11111111111111111886111111111111111116611111111111111111688696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff886111111111111111d8d11111111111111111b8611111111111111111b611111111111111111688696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111d999999999b611111d688888b11111b8611111d99999d11111d8b9999d11111d9999b888696cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b88888881111198611111b888888d1111d888888611111688888888996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888886996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d111198611111b888888d1111d888888611111688888869996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8886888d111198611111b888888d1111d888888611111688699999996cffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111b88888811111d88888861111168869999966ccffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111198888886111116886999666ccfffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d111198611111111111111111b8886886111116886996cccfffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff8861111111111111d88611111b8886888d11119861111111111111111d88866886111116886996cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d11119861111111111111119888896886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111b8888888d1111986111119666d1111d8888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8888888888611111988888861111198611111b888b11111b888696886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b888666668881111111ddddd111111b8611111b8888d11111688898886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b88899996888d1111111111111111168611111b8888b11111988868886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8889999688861111111111111111988611111b88888d1111168888886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff88611111b8889966688886111111111111119888611111b88888611111d8888886111116886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888888996ccc888888666666666668888888888888888888888888888888888888886966cfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffff888888888886996cffc88888888888888888888888888888868888888888886888888888889966cfffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffff88888888869996cfffc888888888888888888688888888869988888888886968888888886996ccfffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff8866666999966cffffc66888888888888699996666666999996666666699996686666699996cffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffc66999999996cffffffc6699999999999999999999999999966699999999966669999999966cffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffc666666666ccfffffffcc6669999999999966666666666666cc6666666666ccc666666666ccffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffccc6666cccfffffffffccc666666666666ccccccc6666cccccccc6666ccccccccc666ccccfffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffffcccccccccccccfffffcccccfffffffccccccfffffffcccccffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
pause(2000)
game.showLongText("press A to start", DialogLayout.Bottom)
music.beamUp.play()
instructions()
forever(function () {
    if (inCharacterSelectionMenu) {
        pause(22000)
    }
    timer.after(1000, function () {
        minion2 = sprites.create(img`
            4 4 . . 4 . . 4 . . 4 4 
            4 4 4 4 5 9 9 5 4 4 4 4 
            4 4 5 5 5 4 4 5 5 5 4 4 
            . 4 4 5 5 5 5 5 5 4 4 . 
            . . 4 4 5 5 5 5 4 4 . . 
            . . 4 4 1 5 5 1 4 4 . . 
            . . . 4 1 1 1 1 4 . . . 
            . . . 4 4 1 1 4 4 . . . 
            . . . . 4 4 4 4 . . . . 
            . . . . . 4 4 . . . . . 
            `, SpriteKind.Minion2)
        characterAnimations.loopFrames(
        minion2,
        assets.animation`lightning ship`,
        100,
        characterAnimations.rule(Predicate.Moving)
        )
        minion2.setFlag(SpriteFlag.AutoDestroy, true)
        minion2.startEffect(effects.trail)
        minion2.y = 0
        minion2.vy = 12 + enemySpeed
        minion2.x = randint(0, scene.screenWidth())
        statusbar2 = statusbars.create(0, 0, StatusBarKind.poweruphealth)
        statusbar2.attachToSprite(minion2, 3, 0)
    })
    pause(minion2spawn)
})
forever(function () {
    if (inCharacterSelectionMenu) {
        pause(41000)
    } else {
    	
    }
    timer.after(randint(1000, 2000), function () {
        Enemy_1 = sprites.create(img`
            ........c....c........
            .......ccc99ccc.......
            ......cccaccaccc......
            .....9cacaaaacac9.....
            4....ccacaaaacacc....4
            4..9cc4acaaaaca4cc9..4
            44ccca4ac4aa4ca4accc44
            c4aaaaa4c4444c4aaaaa4c
            cccc44aacc44ccaa44cccc
            c..c444aaccccaa444c..c
            c..cc444cc..cc444cc..c
            ....cc444c..c444cc....
            .....cca4c..c4acc.....
            .....cca4c..c4ac......
            ......cc4c..c4cc......
            .......ccc..ccc.......
            ........cc..cc........
            `, SpriteKind.Enemy)
        Enemy_1.y = 0
        bigstatusbar = statusbars.create(18, 1, StatusBarKind.Bigenemyhealth)
        bigstatusbar.attachToSprite(Enemy_1, -1, 0)
        enemyfiretime = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemyfiretimer)
        enemyfiretime.lifespan = 100000
        characterAnimations.loopFrames(
        Enemy_1,
        assets.animation`myAnim2`,
        300,
        characterAnimations.rule(Predicate.NotMoving)
        )
        Enemy_1.setFlag(SpriteFlag.AutoDestroy, true)
        if (Math.percentChance(50)) {
            story.spriteMoveToLocation(Enemy_1, 18, 23, 50)
        } else {
            story.spriteMoveToLocation(Enemy_1, 142, 23, 50)
        }
        timer.after(500, function () {
            story.cancelSpriteMovement(Enemy_1)
            Enemy_1.setVelocity(0, 0)
        })
        timer.after(0, function () {
            timer.after(20000, function () {
                Enemy_1.setVelocity(0, 0)
                Enemy_1.vy = 3 + enemySpeed
                enemyfiretime.lifespan = 0
            })
        })
    })
    pause(EnemySpawnTime)
})
forever(function () {
    if (inCharacterSelectionMenu) {
        pause(17500)
    }
    timer.after(2000, function () {
        minion = sprites.create(img`
            . 6 . . . . . . . . . . . . 6 . 
            6 6 . . . . . . . . . . . . 6 6 
            6 9 . . . . . . . . . . . . 9 6 
            6 9 6 6 . . . . . . . . 6 6 9 6 
            6 9 6 6 6 . 5 . . 5 . 6 6 6 9 6 
            6 9 6 9 6 7 6 . . 6 7 6 9 6 9 6 
            6 9 6 9 9 7 9 6 6 9 7 9 9 6 9 6 
            6 9 6 6 9 7 9 7 7 9 7 9 6 6 9 6 
            6 9 . 6 9 6 9 7 7 9 6 9 6 . 9 6 
            6 6 . . 6 6 1 7 7 1 6 6 . . 6 6 
            . 6 . . . 6 1 1 1 1 6 . . . 6 . 
            . . . . . 6 6 1 1 6 6 . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            `, SpriteKind.Minion)
        characterAnimations.loopFrames(
        minion,
        [img`
            . 6 . . . . . . . . . . . . 6 . 
            6 6 . . . . . . . . . . . . 6 6 
            6 9 . . . . . . . . . . . . 9 6 
            6 9 6 6 . . . . . . . . 6 6 9 6 
            6 9 6 6 6 . 5 . . 5 . 6 6 6 9 6 
            6 9 6 9 6 7 6 . . 6 7 6 9 6 9 6 
            6 9 6 9 9 7 9 6 6 9 7 9 9 6 9 6 
            6 9 6 6 9 7 9 7 7 9 7 9 6 6 9 6 
            6 9 . 6 9 6 9 7 7 9 6 9 6 . 9 6 
            6 6 . . 6 6 1 7 7 1 6 6 . . 6 6 
            . 6 . . . 6 1 1 1 1 6 . . . 6 . 
            . . . . . 6 6 1 1 6 6 . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . 6 . . . . . . . . . . . . 6 . 
            6 6 . . . . . . . . . . . . 6 6 
            6 9 . . . . . . . . . . . . 9 6 
            6 9 . . . . . . . . . . . . 9 6 
            6 9 6 6 . . . . . . . . 6 6 9 6 
            6 9 6 6 6 . 5 . . 5 . 6 6 6 9 6 
            6 9 6 9 6 7 6 . . 6 7 6 9 6 9 6 
            6 9 6 9 9 7 9 6 6 9 7 9 9 6 9 6 
            6 9 6 6 9 7 9 7 7 9 7 9 6 6 9 6 
            6 6 . 6 9 6 9 7 7 9 6 9 6 . 6 6 
            . 6 . . 6 6 1 7 7 1 6 6 . . 6 . 
            . . . . . 6 1 1 1 1 6 . . . . . 
            . . . . . 6 6 1 1 6 6 . . . . . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . 6 . . . . . . . . . . . . 6 . 
            6 6 . . . . . . . . . . . . 6 6 
            6 9 6 6 . . . . . . . . 6 6 9 6 
            6 9 6 6 6 . . . . . . 6 6 6 9 6 
            6 9 6 9 6 7 6 . . 6 7 6 9 6 9 6 
            6 9 6 9 9 7 9 6 6 9 7 9 9 6 9 6 
            6 9 6 6 9 7 9 7 7 9 7 9 6 6 9 6 
            6 9 . 6 9 6 9 7 7 9 6 9 6 . 9 6 
            6 9 . . 6 6 1 7 7 1 6 6 . . 9 6 
            6 6 . . . 6 1 1 1 1 6 . . . 6 6 
            . 6 . . . 6 6 1 1 6 6 . . . 6 . 
            . . . . . . 6 6 6 6 . . . . . . 
            . . . . . . . 6 6 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        400,
        characterAnimations.rule(Predicate.Moving)
        )
        minion.y = 0
        minion.vy = 1 + enemySpeed
        minion.x = randint(0, scene.screenWidth())
        if (Math.percentChance(35)) {
            timer.after(500, function () {
                _1shotenemyfire = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 4 4 . . . . . . . . 4 4 . . 
                    . 4 5 5 4 . . . . . . 4 5 5 4 . 
                    . 2 5 5 2 . . . . . . 2 5 5 2 . 
                    . . 2 2 . . . . . . . . 2 2 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 4 4 . . . . . . . . 4 4 . . 
                    . 4 5 5 4 . . . . . . 4 5 5 4 . 
                    . 2 5 5 2 . . . . . . 2 5 5 2 . 
                    . . 2 2 . . . . . . . . 2 2 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, minion, 0, 100)
                _1shotenemyfire.setKind(SpriteKind.Enemyshot)
            })
        }
        timer.after(2000, function () {
            minion.vy = 3 + enemySpeed
        })
        statusbar2 = statusbars.create(0, 0, StatusBarKind.EnemyHealth)
        statusbar2.attachToSprite(minion, 3, 0)
        if (Math.percentChance(15)) {
            timer.after(500, function () {
                minion = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . 3 . . . . . . . . . . . . 3 . 
                    . 3 2 . . . . . . . . . . 2 3 . 
                    . 3 2 3 . . . . . . . . 3 2 3 . 
                    . 3 2 3 3 . 5 . . 5 . 3 3 2 3 . 
                    . 3 2 2 3 1 3 . . 3 1 3 2 2 3 . 
                    . 3 3 2 2 1 2 3 3 2 1 2 2 3 3 . 
                    . . 3 3 2 1 2 1 1 2 1 2 3 3 . . 
                    . . . 3 2 3 2 1 1 2 3 2 3 . . . 
                    . . . . 3 3 9 1 1 9 3 3 . . . . 
                    . . . . . 3 9 9 9 9 3 . . . . . 
                    . . . . . 3 3 9 9 3 3 . . . . . 
                    . . . . . . 3 3 3 3 . . . . . . 
                    . . . . . . . 3 3 . . . . . . . 
                    `, SpriteKind.Minion)
                characterAnimations.loopFrames(
                minion,
                [img`
                    . 3 . . . . . . . . . . . . 3 . 
                    . 3 2 . . . . . . . . . . 2 3 . 
                    . 3 2 3 . . . . . . . . 3 2 3 . 
                    . 3 2 3 3 . . . . . . 3 3 2 3 . 
                    . 3 2 2 3 . . . . . . 3 2 2 3 . 
                    . 3 3 2 2 1 3 . . 3 1 2 2 3 3 . 
                    . . 3 3 2 1 2 3 3 2 1 2 3 3 . . 
                    . . . 3 2 9 2 1 1 2 9 2 3 . . . 
                    . . . . 3 3 2 1 1 2 3 3 . . . . 
                    . . . . . 3 9 1 1 9 3 . . . . . 
                    . . . . . 3 9 9 9 9 3 . . . . . 
                    . . . . . 3 3 9 9 3 3 . . . . . 
                    . . . . . . 3 3 3 3 . . . . . . 
                    . . . . . . . 3 3 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . 3 . . . . . . . . . . . . 3 . 
                    . 3 2 . . . . . . . . . . 2 3 . 
                    . 3 2 3 . . . . . . . . 3 2 3 . 
                    . 3 2 3 3 . 9 . . 9 . 3 3 2 3 . 
                    . 3 2 2 3 1 3 . . 3 1 3 2 2 3 . 
                    . 3 3 2 2 9 2 3 3 2 9 2 2 3 3 . 
                    . . 3 3 2 1 2 1 1 2 1 2 3 3 . . 
                    . . . 3 2 3 2 1 1 2 3 2 3 . . . 
                    . . . . 3 3 9 1 1 9 3 3 . . . . 
                    . . . . . 3 9 9 9 9 3 . . . . . 
                    . . . . . 3 3 9 9 3 3 . . . . . 
                    . . . . . . 3 3 3 3 . . . . . . 
                    . . . . . . . 3 3 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . 3 . . . . . . . . . . . . 3 . 
                    . 3 2 . . . 9 . . 9 . . . 2 3 . 
                    . 3 2 3 . . . . . . . . 3 2 3 . 
                    . 3 2 3 3 . 9 . . 9 . 3 3 2 3 . 
                    . 3 2 2 3 . 9 . . 9 . 3 2 2 3 . 
                    . 3 3 2 2 9 3 . . 3 9 2 2 3 3 . 
                    . . 3 3 2 1 2 3 3 2 1 2 3 3 . . 
                    . . . 3 2 1 2 1 1 2 1 2 3 . . . 
                    . . . . 3 3 2 1 1 2 3 3 . . . . 
                    . . . . . 3 9 1 1 9 3 . . . . . 
                    . . . . . 3 9 9 9 9 3 . . . . . 
                    . . . . . 3 3 9 9 3 3 . . . . . 
                    . . . . . . 3 3 3 3 . . . . . . 
                    . . . . . . . 3 3 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                300,
                characterAnimations.rule(Predicate.Moving)
                )
                minion.y = 0
                minion.vy = 25 + enemySpeed
                minion.x = randint(0, scene.screenWidth())
                statusbar2 = statusbars.create(0, 0, StatusBarKind.EnemyHealth)
                statusbar2.attachToSprite(minion, 3, 0)
                timer.after(500, function () {
                    _1shotenemyfire = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . 4 5 5 4 . . . . . . 
                        . . . . . . 2 5 5 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, minion, mySprite.x, 100)
                    _1shotenemyfire.setKind(SpriteKind.Enemyshot)
                })
            })
        }
        if (Math.percentChance(20)) {
            timer.after(1500, function () {
                minion = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . 6 . . . . . . . . . . . . 6 . 
                    . 6 9 . . . . . . . . . . 9 6 . 
                    . 6 9 6 . . . . . . . . 6 9 6 . 
                    . 6 9 6 6 . 5 . . 5 . 6 6 9 6 . 
                    . 6 9 9 6 4 6 . . 6 4 6 9 9 6 . 
                    . 6 6 9 9 4 9 6 6 9 4 9 9 6 6 . 
                    . . 6 6 9 4 9 4 4 9 4 9 6 6 . . 
                    . . . 6 9 6 9 4 4 9 6 9 6 . . . 
                    . . . . 6 6 1 4 4 1 6 6 . . . . 
                    . . . . . 6 1 1 1 1 6 . . . . . 
                    . . . . . 6 6 1 1 6 6 . . . . . 
                    . . . . . . 6 6 6 6 . . . . . . 
                    . . . . . . . 6 6 . . . . . . . 
                    `, SpriteKind.Minion)
                characterAnimations.loopFrames(
                minion,
                [img`
                    . . . . . . . . . . . . . . . . 
                    . 6 . . . . . . . . . . . . 6 . 
                    . 6 9 . . . . . . . . . . 9 6 . 
                    . 6 9 6 . . . . . . . . 6 9 6 . 
                    . 6 9 6 6 . 5 . . 5 . 6 6 9 6 . 
                    . 6 9 1 6 4 6 . . 6 4 6 1 9 6 . 
                    . 6 6 1 1 4 9 6 6 9 4 1 1 6 . . 
                    . . 6 6 1 4 9 4 4 9 4 1 6 6 . . 
                    . . . 6 1 6 9 4 4 9 6 1 6 . . . 
                    . . . . 6 6 1 4 4 1 6 6 . . . . 
                    . . . . . 6 1 1 1 1 6 . . . . . 
                    . . . . . 6 6 1 1 6 6 . . . . . 
                    . . . . . . 6 6 6 6 . . . . . . 
                    . . . . . . . 6 6 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . 6 . . . . . . . . . . . . 6 . 
                    . 6 9 . . . . . . . . . . 1 6 . 
                    . 6 9 6 . . 9 . . 9 . . 6 1 6 . 
                    . 6 9 6 6 . 5 . . 5 . 6 6 1 6 . 
                    . 6 9 1 6 4 6 . . 6 4 6 1 1 6 . 
                    . 6 6 1 9 4 9 6 6 9 4 9 1 6 . . 
                    . . 6 6 9 4 9 4 4 9 4 9 6 6 . . 
                    . . . 6 9 6 9 4 4 9 6 9 6 . . . 
                    . . . . 6 6 1 4 4 1 6 6 . . . . 
                    . . . . . 6 1 1 1 1 6 . . . . . 
                    . . . . . 6 6 1 1 6 6 . . . . . 
                    . . . . . . 6 6 6 6 . . . . . . 
                    . . . . . . . 6 6 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `,img`
                    . . . . . . . . . . . . . . . . 
                    . 6 . . . . . . . . . . . . 6 . 
                    . 6 1 . . . 9 . . 9 . . . 1 6 . 
                    . 6 1 6 . . 9 . . 9 . . 6 1 6 . 
                    . 6 1 6 6 . 5 . . 5 . 6 6 1 6 . 
                    . 6 1 9 6 4 6 . . 6 4 6 9 1 6 . 
                    . 6 6 9 9 4 9 6 6 9 4 9 9 6 . . 
                    . . 6 6 9 4 9 4 4 9 4 9 6 6 . . 
                    . . . 6 9 6 9 4 4 9 6 9 6 . . . 
                    . . . . 6 6 1 4 4 1 6 6 . . . . 
                    . . . . . 6 1 1 1 1 6 . . . . . 
                    . . . . . 6 6 1 1 6 6 . . . . . 
                    . . . . . . 6 6 6 6 . . . . . . 
                    . . . . . . . 6 6 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `],
                300,
                characterAnimations.rule(Predicate.Moving)
                )
                minion.y = 0
                minion.vy = 13 + enemySpeed
                minion.x = randint(0, scene.screenWidth())
                statusbar2 = statusbars.create(0, 0, StatusBarKind.EnemyHealth)
                statusbar2.attachToSprite(minion, 3, 0)
                timer.after(100, function () {
                    _1shotenemyfire = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . 4 5 5 4 . . . . . . 
                        . . . . . . 2 5 5 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, minion, 0, 100)
                    _1shotenemyfire.setKind(SpriteKind.Enemyshot)
                })
            })
        }
        if (Math.percentChance(28)) {
            if (true) {
                timer.after(6000, function () {
                    minion = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 e 4 4 e 2 . . . . . 
                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . . 2 2 1 1 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Homingminion)
                    characterAnimations.loopFrames(
                    minion,
                    [img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 e 4 4 e 2 . . . . . 
                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . . 2 2 1 1 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 e 4 4 e 2 . . . . . 
                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . . 2 2 1 1 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 e 4 4 e 2 . . . . . 
                        . . . 2 2 2 e 4 4 e 2 2 2 2 . . 
                        . . . . 2 2 e 4 4 e 2 2 2 . . . 
                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . . 2 2 1 1 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . e 4 4 e 2 2 . . . . . 
                        . . . . 2 e 4 4 e 2 2 2 2 . . . 
                        . . . . 2 e 4 4 e 2 2 2 2 . . . 
                        . . . . . 1 4 4 1 2 2 2 . . . . 
                        . . . . . 1 1 1 1 2 2 . . . . . 
                        . . . . . 2 1 1 2 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . 4 4 e 2 2 . . . . . 
                        . . . . . . 4 4 e 2 2 2 . . . . 
                        . . . . . 2 4 4 e 2 2 2 . . . . 
                        . . . . . 2 4 4 1 2 2 2 . . . . 
                        . . . . . 1 1 1 1 2 2 . . . . . 
                        . . . . . 1 1 1 2 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . 4 4 e 2 2 . . . . . 
                        . . . . . . 4 4 e 2 2 2 . . . . 
                        . . . . . . 4 4 e 2 2 2 . . . . 
                        . . . . . 4 4 4 1 2 2 2 . . . . 
                        . . . . . 1 1 1 1 2 2 . . . . . 
                        . . . . . 1 1 1 2 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . 4 4 2 2 . . . . . . 
                        . . . . . . 4 2 2 4 4 . . . . . 
                        . . . . . . 4 2 2 4 4 . . . . . 
                        . . . . . 1 4 2 2 4 4 . . . . . 
                        . . . . . 1 1 2 2 4 4 . . . . . 
                        . . . . . 1 1 2 2 4 4 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . 4 4 4 . . . . . . . 
                        . . . . . . 4 4 4 4 4 . . . . . 
                        . . . . . . 4 2 4 4 . . . . . . 
                        . . . . . 1 4 2 4 4 . . . . . . 
                        . . . . . 1 1 2 4 4 . . . . . . 
                        . . . . . 1 1 2 4 4 . . . . . . 
                        . . . . . . 2 2 4 . . . . . . . 
                        . . . . . . . 2 4 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . 4 4 4 . . . . . . . 
                        . . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . . . . 4 4 4 4 4 4 . . . . . 
                        . . . . . 1 4 4 4 4 . . . . . . 
                        . . . . . 1 2 4 4 4 . . . . . . 
                        . . . . . 1 2 2 4 4 . . . . . . 
                        . . . . . . 2 2 4 . . . . . . . 
                        . . . . . . . 2 4 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
                        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                        . . . . 4 4 4 4 4 4 4 4 . . . . 
                        . . . . . 4 4 4 4 4 4 . . . . . 
                        . . . . . 4 4 4 4 4 4 . . . . . 
                        . . . . . . 4 4 4 4 . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . 4 4 4 2 2 2 . . . . . 
                        . . . . . 4 4 4 2 2 2 . . . . . 
                        . . . . . . 4 4 1 2 . . . . . . 
                        . . . . . . 4 4 1 1 . . . . . . 
                        . . . . . . 4 4 2 1 . . . . . . 
                        . . . . . . . 4 2 2 . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . . . 4 4 e . . . . . . 
                        . . . . . . 4 4 2 e 2 2 . . . . 
                        . . . . . . 4 2 2 e 2 2 . . . . 
                        . . . . . . 4 2 2 1 2 . . . . . 
                        . . . . . . 4 4 2 1 2 . . . . . 
                        . . . . . . 4 4 2 2 1 . . . . . 
                        . . . . . . . 4 2 2 . . . . . . 
                        . . . . . . . 4 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 4 2 2 e 4 2 2 . . . . 
                        . . . . . 2 2 2 e 4 2 2 . . . . 
                        . . . . . 2 2 2 e 4 2 . . . . . 
                        . . . . . 4 2 2 1 4 2 . . . . . 
                        . . . . . 4 2 2 1 1 1 . . . . . 
                        . . . . . 4 4 2 2 1 . . . . . . 
                        . . . . . . 4 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 2 e 4 2 . . . . . . 
                        . . . . 2 2 2 e 4 2 2 . . . . . 
                        . . . . 2 2 2 e 4 2 2 . . . . . 
                        . . . . 2 2 2 1 4 2 . . . . . . 
                        . . . . . 2 2 1 1 1 . . . . . . 
                        . . . . . 2 2 2 1 1 . . . . . . 
                        . . . . . . 2 2 2 . . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 2 e 4 4 . . . . . . 
                        . . . . 2 2 2 e 4 4 2 . . . . . 
                        . . . . 2 2 2 e 4 4 2 . . . . . 
                        . . . . 2 2 2 1 4 4 2 . . . . . 
                        . . . . . 2 2 1 1 1 1 . . . . . 
                        . . . . . 2 2 2 1 1 1 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 2 e 4 4 e . . . . . 
                        . . . 2 2 2 2 e 4 4 e 2 . . . . 
                        . . . 2 2 2 2 e 4 4 e 2 . . . . 
                        . . . . 2 2 2 1 4 4 1 . . . . . 
                        . . . . . 2 2 1 1 1 1 . . . . . 
                        . . . . . 2 2 2 1 1 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 e 4 4 e 2 . . . . . 
                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . . 2 2 1 1 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `,img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 . . . . . . . 
                        . . . . . 2 e 4 4 e 2 . . . . . 
                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                        . . . . . 2 1 1 1 1 2 . . . . . 
                        . . . . . 2 2 1 1 2 2 . . . . . 
                        . . . . . . 2 2 2 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `],
                    100,
                    characterAnimations.rule(Predicate.Moving)
                    )
                    minion.y = 0
                    minion.vy = 5 + enemySpeed
                    minion.x = randint(0, scene.screenWidth())
                    statusbar2 = statusbars.create(0, 0, StatusBarKind.homingminionHP)
                    statusbar2.attachToSprite(minion, 3, 0)
                    if (Sprite1_Projectile && Sprite1_Projectile.lifespan > 0) {
                        minion.follow(mySprite, 52)
                    }
                    if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
                        minion.follow(mySprite3, 52)
                    }
                    if (Math.percentChance(60)) {
                        timer.after(600, function () {
                            minion = sprites.create(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 e 4 4 e 2 . . . . . 
                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                . . . . . 2 1 1 1 1 2 . . . . . 
                                . . . . . 2 2 1 1 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, SpriteKind.Homingminion)
                            characterAnimations.loopFrames(
                            minion,
                            [img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 e 4 4 e 2 . . . . . 
                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                . . . . . 2 1 1 1 1 2 . . . . . 
                                . . . . . 2 2 1 1 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 e 4 4 e 2 . . . . . 
                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                . . . . . 2 1 1 1 1 2 . . . . . 
                                . . . . . 2 2 1 1 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 e 4 4 e 2 . . . . . 
                                . . . 2 2 2 e 4 4 e 2 2 2 2 . . 
                                . . . . 2 2 e 4 4 e 2 2 2 . . . 
                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                . . . . . 2 1 1 1 1 2 . . . . . 
                                . . . . . 2 2 1 1 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . e 4 4 e 2 2 . . . . . 
                                . . . . 2 e 4 4 e 2 2 2 2 . . . 
                                . . . . 2 e 4 4 e 2 2 2 2 . . . 
                                . . . . . 1 4 4 1 2 2 2 . . . . 
                                . . . . . 1 1 1 1 2 2 . . . . . 
                                . . . . . 2 1 1 2 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . . 4 4 e 2 2 . . . . . 
                                . . . . . . 4 4 e 2 2 2 . . . . 
                                . . . . . 2 4 4 e 2 2 2 . . . . 
                                . . . . . 2 4 4 1 2 2 2 . . . . 
                                . . . . . 1 1 1 1 2 2 . . . . . 
                                . . . . . 1 1 1 2 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . . 4 4 e 2 2 . . . . . 
                                . . . . . . 4 4 e 2 2 2 . . . . 
                                . . . . . . 4 4 e 2 2 2 . . . . 
                                . . . . . 4 4 4 1 2 2 2 . . . . 
                                . . . . . 1 1 1 1 2 2 . . . . . 
                                . . . . . 1 1 1 2 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . . 4 4 2 2 . . . . . . 
                                . . . . . . 4 2 2 4 4 . . . . . 
                                . . . . . . 4 2 2 4 4 . . . . . 
                                . . . . . 1 4 2 2 4 4 . . . . . 
                                . . . . . 1 1 2 2 4 4 . . . . . 
                                . . . . . 1 1 2 2 4 4 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . . 4 4 4 . . . . . . . 
                                . . . . . . 4 4 4 4 4 . . . . . 
                                . . . . . . 4 2 4 4 . . . . . . 
                                . . . . . 1 4 2 4 4 . . . . . . 
                                . . . . . 1 1 2 4 4 . . . . . . 
                                . . . . . 1 1 2 4 4 . . . . . . 
                                . . . . . . 2 2 4 . . . . . . . 
                                . . . . . . . 2 4 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . . 4 4 4 . . . . . . . 
                                . . . . 4 4 4 4 4 4 4 4 . . . . 
                                . . . . . 4 4 4 4 4 4 . . . . . 
                                . . . . . 1 4 4 4 4 . . . . . . 
                                . . . . . 1 2 4 4 4 . . . . . . 
                                . . . . . 1 2 2 4 4 . . . . . . 
                                . . . . . . 2 2 4 . . . . . . . 
                                . . . . . . . 2 4 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . . 4 4 4 4 . . . . . . 
                                . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
                                . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                                . . . . 4 4 4 4 4 4 4 4 . . . . 
                                . . . . . 4 4 4 4 4 4 . . . . . 
                                . . . . . 4 4 4 4 4 4 . . . . . 
                                . . . . . . 4 4 4 4 . . . . . . 
                                . . . . . . . 4 4 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . . . 4 4 . . . . . . . 
                                . . . . . 4 4 4 2 2 2 . . . . . 
                                . . . . . 4 4 4 2 2 2 . . . . . 
                                . . . . . . 4 4 1 2 . . . . . . 
                                . . . . . . 4 4 1 1 . . . . . . 
                                . . . . . . 4 4 2 1 . . . . . . 
                                . . . . . . . 4 2 2 . . . . . . 
                                . . . . . . . 4 4 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . . . 4 4 e . . . . . . 
                                . . . . . . 4 4 2 e 2 2 . . . . 
                                . . . . . . 4 2 2 e 2 2 . . . . 
                                . . . . . . 4 2 2 1 2 . . . . . 
                                . . . . . . 4 4 2 1 2 . . . . . 
                                . . . . . . 4 4 2 2 1 . . . . . 
                                . . . . . . . 4 2 2 . . . . . . 
                                . . . . . . . 4 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 4 2 2 e 4 2 2 . . . . 
                                . . . . . 2 2 2 e 4 2 2 . . . . 
                                . . . . . 2 2 2 e 4 2 . . . . . 
                                . . . . . 4 2 2 1 4 2 . . . . . 
                                . . . . . 4 2 2 1 1 1 . . . . . 
                                . . . . . 4 4 2 2 1 . . . . . . 
                                . . . . . . 4 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 2 e 4 2 . . . . . . 
                                . . . . 2 2 2 e 4 2 2 . . . . . 
                                . . . . 2 2 2 e 4 2 2 . . . . . 
                                . . . . 2 2 2 1 4 2 . . . . . . 
                                . . . . . 2 2 1 1 1 . . . . . . 
                                . . . . . 2 2 2 1 1 . . . . . . 
                                . . . . . . 2 2 2 . . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 2 e 4 4 . . . . . . 
                                . . . . 2 2 2 e 4 4 2 . . . . . 
                                . . . . 2 2 2 e 4 4 2 . . . . . 
                                . . . . 2 2 2 1 4 4 2 . . . . . 
                                . . . . . 2 2 1 1 1 1 . . . . . 
                                . . . . . 2 2 2 1 1 1 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 2 e 4 4 e . . . . . 
                                . . . 2 2 2 2 e 4 4 e 2 . . . . 
                                . . . 2 2 2 2 e 4 4 e 2 . . . . 
                                . . . . 2 2 2 1 4 4 1 . . . . . 
                                . . . . . 2 2 1 1 1 1 . . . . . 
                                . . . . . 2 2 2 1 1 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 e 4 4 e 2 . . . . . 
                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                . . . . . 2 1 1 1 1 2 . . . . . 
                                . . . . . 2 2 1 1 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `,img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 5 5 . . . . . . . 
                                . . . . . 2 e 4 4 e 2 . . . . . 
                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                . . . . . 2 1 1 1 1 2 . . . . . 
                                . . . . . 2 2 1 1 2 2 . . . . . 
                                . . . . . . 2 2 2 2 . . . . . . 
                                . . . . . . . 2 2 . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `],
                            100,
                            characterAnimations.rule(Predicate.Moving)
                            )
                            minion.y = 0
                            minion.vy = 5 + enemySpeed
                            minion.x = randint(0, scene.screenWidth())
                            statusbar2 = statusbars.create(0, 0, StatusBarKind.homingminionHP)
                            statusbar2.attachToSprite(minion, 3, 0)
                            if (Sprite1_Projectile && Sprite1_Projectile.lifespan > 0) {
                                minion.follow(mySprite, 52)
                            }
                            if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
                                minion.follow(mySprite3, 52)
                            }
                            if (Math.percentChance(70)) {
                                timer.after(600, function () {
                                    minion = sprites.create(img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 e 4 4 e 2 . . . . . 
                                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                                        . . . . . 2 1 1 1 1 2 . . . . . 
                                        . . . . . 2 2 1 1 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `, SpriteKind.Homingminion)
                                    characterAnimations.loopFrames(
                                    minion,
                                    [img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 e 4 4 e 2 . . . . . 
                                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                                        . . . . . 2 1 1 1 1 2 . . . . . 
                                        . . . . . 2 2 1 1 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 e 4 4 e 2 . . . . . 
                                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                                        . . . . . 2 1 1 1 1 2 . . . . . 
                                        . . . . . 2 2 1 1 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 e 4 4 e 2 . . . . . 
                                        . . . 2 2 2 e 4 4 e 2 2 2 2 . . 
                                        . . . . 2 2 e 4 4 e 2 2 2 . . . 
                                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                                        . . . . . 2 1 1 1 1 2 . . . . . 
                                        . . . . . 2 2 1 1 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . e 4 4 e 2 2 . . . . . 
                                        . . . . 2 e 4 4 e 2 2 2 2 . . . 
                                        . . . . 2 e 4 4 e 2 2 2 2 . . . 
                                        . . . . . 1 4 4 1 2 2 2 . . . . 
                                        . . . . . 1 1 1 1 2 2 . . . . . 
                                        . . . . . 2 1 1 2 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . . 4 4 e 2 2 . . . . . 
                                        . . . . . . 4 4 e 2 2 2 . . . . 
                                        . . . . . 2 4 4 e 2 2 2 . . . . 
                                        . . . . . 2 4 4 1 2 2 2 . . . . 
                                        . . . . . 1 1 1 1 2 2 . . . . . 
                                        . . . . . 1 1 1 2 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . . 4 4 e 2 2 . . . . . 
                                        . . . . . . 4 4 e 2 2 2 . . . . 
                                        . . . . . . 4 4 e 2 2 2 . . . . 
                                        . . . . . 4 4 4 1 2 2 2 . . . . 
                                        . . . . . 1 1 1 1 2 2 . . . . . 
                                        . . . . . 1 1 1 2 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . . 4 4 2 2 . . . . . . 
                                        . . . . . . 4 2 2 4 4 . . . . . 
                                        . . . . . . 4 2 2 4 4 . . . . . 
                                        . . . . . 1 4 2 2 4 4 . . . . . 
                                        . . . . . 1 1 2 2 4 4 . . . . . 
                                        . . . . . 1 1 2 2 4 4 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . . 4 4 4 . . . . . . . 
                                        . . . . . . 4 4 4 4 4 . . . . . 
                                        . . . . . . 4 2 4 4 . . . . . . 
                                        . . . . . 1 4 2 4 4 . . . . . . 
                                        . . . . . 1 1 2 4 4 . . . . . . 
                                        . . . . . 1 1 2 4 4 . . . . . . 
                                        . . . . . . 2 2 4 . . . . . . . 
                                        . . . . . . . 2 4 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . . 4 4 4 . . . . . . . 
                                        . . . . 4 4 4 4 4 4 4 4 . . . . 
                                        . . . . . 4 4 4 4 4 4 . . . . . 
                                        . . . . . 1 4 4 4 4 . . . . . . 
                                        . . . . . 1 2 4 4 4 . . . . . . 
                                        . . . . . 1 2 2 4 4 . . . . . . 
                                        . . . . . . 2 2 4 . . . . . . . 
                                        . . . . . . . 2 4 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . . 4 4 4 4 . . . . . . 
                                        . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
                                        . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                                        . . . . 4 4 4 4 4 4 4 4 . . . . 
                                        . . . . . 4 4 4 4 4 4 . . . . . 
                                        . . . . . 4 4 4 4 4 4 . . . . . 
                                        . . . . . . 4 4 4 4 . . . . . . 
                                        . . . . . . . 4 4 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . . . 4 4 . . . . . . . 
                                        . . . . . 4 4 4 2 2 2 . . . . . 
                                        . . . . . 4 4 4 2 2 2 . . . . . 
                                        . . . . . . 4 4 1 2 . . . . . . 
                                        . . . . . . 4 4 1 1 . . . . . . 
                                        . . . . . . 4 4 2 1 . . . . . . 
                                        . . . . . . . 4 2 2 . . . . . . 
                                        . . . . . . . 4 4 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . . . 4 4 e . . . . . . 
                                        . . . . . . 4 4 2 e 2 2 . . . . 
                                        . . . . . . 4 2 2 e 2 2 . . . . 
                                        . . . . . . 4 2 2 1 2 . . . . . 
                                        . . . . . . 4 4 2 1 2 . . . . . 
                                        . . . . . . 4 4 2 2 1 . . . . . 
                                        . . . . . . . 4 2 2 . . . . . . 
                                        . . . . . . . 4 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 4 2 2 e 4 2 2 . . . . 
                                        . . . . . 2 2 2 e 4 2 2 . . . . 
                                        . . . . . 2 2 2 e 4 2 . . . . . 
                                        . . . . . 4 2 2 1 4 2 . . . . . 
                                        . . . . . 4 2 2 1 1 1 . . . . . 
                                        . . . . . 4 4 2 2 1 . . . . . . 
                                        . . . . . . 4 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 2 e 4 2 . . . . . . 
                                        . . . . 2 2 2 e 4 2 2 . . . . . 
                                        . . . . 2 2 2 e 4 2 2 . . . . . 
                                        . . . . 2 2 2 1 4 2 . . . . . . 
                                        . . . . . 2 2 1 1 1 . . . . . . 
                                        . . . . . 2 2 2 1 1 . . . . . . 
                                        . . . . . . 2 2 2 . . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 2 e 4 4 . . . . . . 
                                        . . . . 2 2 2 e 4 4 2 . . . . . 
                                        . . . . 2 2 2 e 4 4 2 . . . . . 
                                        . . . . 2 2 2 1 4 4 2 . . . . . 
                                        . . . . . 2 2 1 1 1 1 . . . . . 
                                        . . . . . 2 2 2 1 1 1 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 2 e 4 4 e . . . . . 
                                        . . . 2 2 2 2 e 4 4 e 2 . . . . 
                                        . . . 2 2 2 2 e 4 4 e 2 . . . . 
                                        . . . . 2 2 2 1 4 4 1 . . . . . 
                                        . . . . . 2 2 1 1 1 1 . . . . . 
                                        . . . . . 2 2 2 1 1 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 e 4 4 e 2 . . . . . 
                                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                                        . . . . . 2 1 1 1 1 2 . . . . . 
                                        . . . . . 2 2 1 1 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `,img`
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . 5 5 . . . . . . . 
                                        . . . . . 2 e 4 4 e 2 . . . . . 
                                        . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                        . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                        . . . . 2 2 1 4 4 1 2 2 . . . . 
                                        . . . . . 2 1 1 1 1 2 . . . . . 
                                        . . . . . 2 2 1 1 2 2 . . . . . 
                                        . . . . . . 2 2 2 2 . . . . . . 
                                        . . . . . . . 2 2 . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        . . . . . . . . . . . . . . . . 
                                        `],
                                    100,
                                    characterAnimations.rule(Predicate.Moving)
                                    )
                                    minion.y = 0
                                    minion.vy = 5 + enemySpeed
                                    minion.x = randint(0, scene.screenWidth())
                                    statusbar2 = statusbars.create(0, 0, StatusBarKind.homingminionHP)
                                    statusbar2.attachToSprite(minion, 3, 0)
                                    if (Sprite1_Projectile && Sprite1_Projectile.lifespan > 0) {
                                        minion.follow(mySprite, 52)
                                    }
                                    if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
                                        minion.follow(mySprite3, 52)
                                    }
                                    if (Math.percentChance(60)) {
                                        timer.after(600, function () {
                                            minion = sprites.create(img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . e 5 5 e . . . . . . 
                                                . . . . . 2 e 4 4 e 2 . . . . . 
                                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                                . . . . . 2 1 1 1 1 2 . . . . . 
                                                . . . . . 2 2 1 1 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                `, SpriteKind.Homingminion)
                                            characterAnimations.loopFrames(
                                            minion,
                                            [img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 2 e 4 4 e 2 . . . . . 
                                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                                . . . . . 2 1 1 1 1 2 . . . . . 
                                                . . . . . 2 2 1 1 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 2 e 4 4 e 2 . . . . . 
                                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                                . . . . . 2 1 1 1 1 2 . . . . . 
                                                . . . . . 2 2 1 1 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 2 e 4 4 e 2 . . . . . 
                                                . . . 2 2 2 e 4 4 e 2 2 2 2 . . 
                                                . . . . 2 2 e 4 4 e 2 2 2 . . . 
                                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                                . . . . . 2 1 1 1 1 2 . . . . . 
                                                . . . . . 2 2 1 1 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . e 4 4 e 2 2 . . . . . 
                                                . . . . 2 e 4 4 e 2 2 2 2 . . . 
                                                . . . . 2 e 4 4 e 2 2 2 2 . . . 
                                                . . . . . 1 4 4 1 2 2 2 . . . . 
                                                . . . . . 1 1 1 1 2 2 . . . . . 
                                                . . . . . 2 1 1 2 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . . 4 4 e 2 2 . . . . . 
                                                . . . . . . 4 4 e 2 2 2 . . . . 
                                                . . . . . 2 4 4 e 2 2 2 . . . . 
                                                . . . . . 2 4 4 1 2 2 2 . . . . 
                                                . . . . . 1 1 1 1 2 2 . . . . . 
                                                . . . . . 1 1 1 2 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . . 4 4 e 2 2 . . . . . 
                                                . . . . . . 4 4 e 2 2 2 . . . . 
                                                . . . . . . 4 4 e 2 2 2 . . . . 
                                                . . . . . 4 4 4 1 2 2 2 . . . . 
                                                . . . . . 1 1 1 1 2 2 . . . . . 
                                                . . . . . 1 1 1 2 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . . 4 4 2 2 . . . . . . 
                                                . . . . . . 4 2 2 4 4 . . . . . 
                                                . . . . . . 4 2 2 4 4 . . . . . 
                                                . . . . . 1 4 2 2 4 4 . . . . . 
                                                . . . . . 1 1 2 2 4 4 . . . . . 
                                                . . . . . 1 1 2 2 4 4 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . . 4 4 4 . . . . . . . 
                                                . . . . . . 4 4 4 4 4 . . . . . 
                                                . . . . . . 4 2 4 4 . . . . . . 
                                                . . . . . 1 4 2 4 4 . . . . . . 
                                                . . . . . 1 1 2 4 4 . . . . . . 
                                                . . . . . 1 1 2 4 4 . . . . . . 
                                                . . . . . . 2 2 4 . . . . . . . 
                                                . . . . . . . 2 4 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . . 4 4 4 . . . . . . . 
                                                . . . . 4 4 4 4 4 4 4 4 . . . . 
                                                . . . . . 4 4 4 4 4 4 . . . . . 
                                                . . . . . 1 4 4 4 4 . . . . . . 
                                                . . . . . 1 2 4 4 4 . . . . . . 
                                                . . . . . 1 2 2 4 4 . . . . . . 
                                                . . . . . . 2 2 4 . . . . . . . 
                                                . . . . . . . 2 4 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . . 4 4 4 4 . . . . . . 
                                                . . 4 4 4 4 4 4 4 4 4 4 4 4 . . 
                                                . . . 4 4 4 4 4 4 4 4 4 4 . . . 
                                                . . . . 4 4 4 4 4 4 4 4 . . . . 
                                                . . . . . 4 4 4 4 4 4 . . . . . 
                                                . . . . . 4 4 4 4 4 4 . . . . . 
                                                . . . . . . 4 4 4 4 . . . . . . 
                                                . . . . . . . 4 4 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . . . 4 4 . . . . . . . 
                                                . . . . . 4 4 4 2 2 2 . . . . . 
                                                . . . . . 4 4 4 2 2 2 . . . . . 
                                                . . . . . . 4 4 1 2 . . . . . . 
                                                . . . . . . 4 4 1 1 . . . . . . 
                                                . . . . . . 4 4 2 1 . . . . . . 
                                                . . . . . . . 4 2 2 . . . . . . 
                                                . . . . . . . 4 4 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . . . 4 4 e . . . . . . 
                                                . . . . . . 4 4 2 e 2 2 . . . . 
                                                . . . . . . 4 2 2 e 2 2 . . . . 
                                                . . . . . . 4 2 2 1 2 . . . . . 
                                                . . . . . . 4 4 2 1 2 . . . . . 
                                                . . . . . . 4 4 2 2 1 . . . . . 
                                                . . . . . . . 4 2 2 . . . . . . 
                                                . . . . . . . 4 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 4 2 2 e 4 2 2 . . . . 
                                                . . . . . 2 2 2 e 4 2 2 . . . . 
                                                . . . . . 2 2 2 e 4 2 . . . . . 
                                                . . . . . 4 2 2 1 4 2 . . . . . 
                                                . . . . . 4 2 2 1 1 1 . . . . . 
                                                . . . . . 4 4 2 2 1 . . . . . . 
                                                . . . . . . 4 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 2 2 e 4 2 . . . . . . 
                                                . . . . 2 2 2 e 4 2 2 . . . . . 
                                                . . . . 2 2 2 e 4 2 2 . . . . . 
                                                . . . . 2 2 2 1 4 2 . . . . . . 
                                                . . . . . 2 2 1 1 1 . . . . . . 
                                                . . . . . 2 2 2 1 1 . . . . . . 
                                                . . . . . . 2 2 2 . . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 2 2 e 4 4 . . . . . . 
                                                . . . . 2 2 2 e 4 4 2 . . . . . 
                                                . . . . 2 2 2 e 4 4 2 . . . . . 
                                                . . . . 2 2 2 1 4 4 2 . . . . . 
                                                . . . . . 2 2 1 1 1 1 . . . . . 
                                                . . . . . 2 2 2 1 1 1 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 2 2 e 4 4 e . . . . . 
                                                . . . 2 2 2 2 e 4 4 e 2 . . . . 
                                                . . . 2 2 2 2 e 4 4 e 2 . . . . 
                                                . . . . 2 2 2 1 4 4 1 . . . . . 
                                                . . . . . 2 2 1 1 1 1 . . . . . 
                                                . . . . . 2 2 2 1 1 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 2 e 4 4 e 2 . . . . . 
                                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                                . . . . . 2 1 1 1 1 2 . . . . . 
                                                . . . . . 2 2 1 1 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `,img`
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . 5 5 . . . . . . . 
                                                . . . . . 2 e 4 4 e 2 . . . . . 
                                                . . 2 2 2 2 e 4 4 e 2 2 2 2 . . 
                                                . . . 2 2 2 e 4 4 e 2 2 2 . . . 
                                                . . . . 2 2 1 4 4 1 2 2 . . . . 
                                                . . . . . 2 1 1 1 1 2 . . . . . 
                                                . . . . . 2 2 1 1 2 2 . . . . . 
                                                . . . . . . 2 2 2 2 . . . . . . 
                                                . . . . . . . 2 2 . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                . . . . . . . . . . . . . . . . 
                                                `],
                                            100,
                                            characterAnimations.rule(Predicate.Moving)
                                            )
                                            minion.y = 0
                                            minion.vy = 5 + enemySpeed
                                            minion.x = randint(0, scene.screenWidth())
                                            statusbar2 = statusbars.create(0, 0, StatusBarKind.homingminionHP)
                                            statusbar2.attachToSprite(minion, 3, 0)
                                            if (Sprite1_Projectile && Sprite1_Projectile.lifespan > 0) {
                                                minion.follow(mySprite, 52)
                                            }
                                            if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
                                                minion.follow(mySprite3, 52)
                                            }
                                        })
                                    }
                                })
                            }
                        })
                    }
                    if (Math.percentChance(15)) {
                        timer.after(1500, function () {
                            minion = sprites.create(img`
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . 9 9 . . . . . . . 
                                . . . . . c b c c b c . . . . . 
                                . . c c c c b c c b c c c c . . 
                                . . . c c c b c c b c c . . . . 
                                . . . . c c a c c a c c . . . . 
                                . . . . . c a a a a c . . . . . 
                                . . . . . c c a a c c . . . . . 
                                . . . . . . c c c c . . . . . . 
                                . . . . . . . c c . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                `, SpriteKind.Homingminion)
                            characterAnimations.loopFrames(
                            minion,
                            assets.animation`quntum ship`,
                            100,
                            characterAnimations.rule(Predicate.Moving)
                            )
                            minion.y = 0
                            minion.vy = 5 + enemySpeed
                            minion.x = randint(0, scene.screenWidth())
                            statusbar2 = statusbars.create(0, 0, StatusBarKind.homingminionHP)
                            statusbar2.attachToSprite(minion, 3, 0)
                            if (Sprite1_Projectile && Sprite1_Projectile.lifespan > 0) {
                                minion.follow(mySprite, 65)
                            }
                            if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
                                minion.follow(mySprite3, 65)
                            }
                        })
                    }
                })
            } else {
                minion.destroy()
            }
        }
    })
    pause(Minionspawn)
    minion.setFlag(SpriteFlag.AutoDestroy, true)
})
forever(function () {
    if (inCharacterSelectionMenu) {
        pause(66000)
    }
    timer.after(randint(2000, 3000), function () {
        enemyversion2 = sprites.create(img`
            ........6....6........
            .......66699666.......
            ......6667557666......
            .....967677776769.....
            .....667677776766.....
            ....66176777767166....
            ...6671761771671766...
            ...7777161111617777...
            ...6557766116677556...
            ...6655776666775566...
            ....665566..665566....
            .....66556..65566.....
            ......6656..6566......
            .......666..666.......
            ........66..66........
            ......................
            ......................
            `, SpriteKind.Enemy2)
        characterAnimations.loopFrames(
        enemyversion2,
        assets.animation`myAnim6`,
        200,
        characterAnimations.rule(Predicate.Moving)
        )
        enemyversion2.setFlag(SpriteFlag.AutoDestroy, true)
        enemyversion2.y = 0
        enemyversion2.vy = 2 + enemySpeed
        enemyversion2.x = randint(0, scene.screenWidth())
        bigstatusbar2 = statusbars.create(18, 1, StatusBarKind.bigenemyhealth2)
        bigstatusbar2.attachToSprite(enemyversion2, -1, 0)
        enemyfiretime2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.enemy2firetimer)
        enemyfiretime2.lifespan = 100000
        story.spriteMoveToLocation(enemyversion2, 80, randint(12, 20), 20)
        enemyversion2.setBounceOnWall(true)
        timer.after(500, function () {
            story.cancelSpriteMovement(enemyversion2)
            enemyversion2.setVelocity(8, 0)
        })
        timer.after(0, function () {
            timer.after(30000, function () {
                enemyversion2.setVelocity(0, 0)
                enemyversion2.vy = 3 + enemySpeed
                enemyversion2.setBounceOnWall(false)
                enemyfiretime.lifespan = 0
            })
        })
    })
    pause(Enemy2spawntime)
})
forever(function () {
    if (enemyfiretime2 && enemyfiretime2.lifespan > 0) {
        timer.after(0, function () {
            enemyfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . 2 5 5 5 5 2 . . . . . 
                . . . . . 2 5 5 5 5 2 . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemyversion2, 20, 70)
            enemyfiretime2.setKind(SpriteKind.Enemyshot)
            enemyfiretime2.lifespan = 100000
            enemyfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . 2 5 5 5 5 2 . . . . . 
                . . . . . 2 5 5 5 5 2 . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemyversion2, -20, 70)
            enemyfiretime2.setKind(SpriteKind.Enemyshot2)
            enemyfiretime2.lifespan = 100000
        })
        enemyfiretime2.setFlag(SpriteFlag.AutoDestroy, true)
    }
    pause(3500)
})
forever(function () {
    if (enemyfiretime2 && enemyfiretime2.lifespan > 0) {
        timer.after(0, function () {
            enemyfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemyversion2, 100, 70)
            enemyfiretime2.setKind(SpriteKind.Enemyshot)
            enemyfiretime2.lifespan = 100000
            enemyfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemyversion2, -100, 70)
            enemyfiretime2.setKind(SpriteKind.Enemyshot2)
            enemyfiretime2.lifespan = 100000
            enemyfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemyversion2, 50, 70)
            enemyfiretime2.setKind(SpriteKind.Enemyshot)
            enemyfiretime2.lifespan = 100000
            enemyfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemyversion2, -50, 70)
            enemyfiretime2.setKind(SpriteKind.Enemyshot2)
            enemyfiretime2.lifespan = 100000
            enemyfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemyversion2, 150, 70)
            enemyfiretime2.setKind(SpriteKind.Enemyshot)
            enemyfiretime2.lifespan = 100000
            enemyfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, enemyversion2, -150, 70)
            enemyfiretime2.setKind(SpriteKind.Enemyshot2)
            enemyfiretime2.lifespan = 100000
        })
        pause(8000)
        enemyfiretime2.setFlag(SpriteFlag.AutoDestroy, true)
    }
})
forever(function () {
    if (Bossfiretime2 && Bossfiretime2.lifespan > 0) {
        Bossfiretime2 = sprites.createProjectileFromSprite(img`
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            .......11.......
            `, boss2, 0, 5000)
        timer.after(1000, function () {
            Bossfiretime2 = sprites.createProjectileFromSprite(img`
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                `, boss2, 0, 100)
            Bossfiretime2.setKind(SpriteKind.Boss2shot)
            Bossfiretime2.lifespan = 95000
            timer.after(100, function () {
                Bossfiretime2 = sprites.createProjectileFromSprite(img`
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                    `, boss2, 0, 100)
                Bossfiretime2.setKind(SpriteKind.Boss2shot)
                Bossfiretime2.lifespan = 95000
                timer.after(100, function () {
                    Bossfiretime2 = sprites.createProjectileFromSprite(img`
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                        `, boss2, 0, 100)
                    Bossfiretime2.setKind(SpriteKind.Boss2shot)
                    Bossfiretime2.lifespan = 95000
                    timer.after(100, function () {
                        Bossfiretime2 = sprites.createProjectileFromSprite(img`
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                            `, boss2, 0, 100)
                        Bossfiretime2.setKind(SpriteKind.Boss2shot)
                        Bossfiretime2.lifespan = 95000
                        timer.after(100, function () {
                            Bossfiretime2 = sprites.createProjectileFromSprite(img`
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                `, boss2, 0, 100)
                            Bossfiretime2.setKind(SpriteKind.Boss2shot)
                            Bossfiretime2.lifespan = 95000
                            timer.after(100, function () {
                                Bossfiretime2 = sprites.createProjectileFromSprite(img`
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                    `, boss2, 0, 100)
                                Bossfiretime2.setKind(SpriteKind.Boss2shot)
                                Bossfiretime2.lifespan = 95000
                                timer.after(100, function () {
                                    Bossfiretime2 = sprites.createProjectileFromSprite(img`
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        2 2 4 5 5 5 5 5 5 5 5 5 5 4 2 2 
                                        `, boss2, 0, 200)
                                    Bossfiretime2.setKind(SpriteKind.Boss2shot)
                                    Bossfiretime2.lifespan = 95000
                                })
                            })
                        })
                    })
                })
            })
        })
        Bossfiretime2.setFlag(SpriteFlag.AutoDestroy, true)
    }
    pause(4000)
})
forever(function () {
    if (Bossfiretime2 && Bossfiretime2.lifespan > 0) {
        Bossfiretime2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss2, 30, 65)
        Bossfiretime2.setKind(SpriteKind.Boss2shot)
        Bossfiretime2.lifespan = 95000
        Bossfiretime2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss2, -30, 65)
        Bossfiretime2.setKind(SpriteKind.Boss2shot)
        Bossfiretime2.lifespan = 95000
        Bossfiretime2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss2, 90, 65)
        Bossfiretime2.setKind(SpriteKind.Boss2shot)
        Bossfiretime2.lifespan = 95000
        Bossfiretime2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss2, -90, 65)
        Bossfiretime2.setKind(SpriteKind.Boss2shot)
        Bossfiretime2.lifespan = 95000
        Bossfiretime2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss2, 60, 65)
        Bossfiretime2.setKind(SpriteKind.Boss2shot)
        Bossfiretime2.lifespan = 95000
        Bossfiretime2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss2, -60, 65)
        Bossfiretime2.setKind(SpriteKind.Boss2shot)
        Bossfiretime2.lifespan = 95000
    }
    timer.after(100, function () {
        if (Bossfiretime2 && Bossfiretime2.lifespan > 0) {
            Bossfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, boss2, 30, 65)
            Bossfiretime2.setKind(SpriteKind.Boss2shot)
            Bossfiretime2.lifespan = 95000
            Bossfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, boss2, -30, 65)
            Bossfiretime2.setKind(SpriteKind.Boss2shot)
            Bossfiretime2.lifespan = 95000
            Bossfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, boss2, 90, 65)
            Bossfiretime2.setKind(SpriteKind.Boss2shot)
            Bossfiretime2.lifespan = 95000
            Bossfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, boss2, -90, 65)
            Bossfiretime2.setKind(SpriteKind.Boss2shot)
            Bossfiretime2.lifespan = 95000
            Bossfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, boss2, 60, 65)
            Bossfiretime2.setKind(SpriteKind.Boss2shot)
            Bossfiretime2.lifespan = 95000
            Bossfiretime2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, boss2, -60, 65)
            Bossfiretime2.setKind(SpriteKind.Boss2shot)
            Bossfiretime2.lifespan = 95000
        }
        timer.after(100, function () {
            if (Bossfiretime2 && Bossfiretime2.lifespan > 0) {
                Bossfiretime2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss2, 30, 65)
                Bossfiretime2.setKind(SpriteKind.Boss2shot)
                Bossfiretime2.lifespan = 95000
                Bossfiretime2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss2, -30, 65)
                Bossfiretime2.setKind(SpriteKind.Boss2shot)
                Bossfiretime2.lifespan = 95000
                Bossfiretime2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss2, 90, 65)
                Bossfiretime2.setKind(SpriteKind.Boss2shot)
                Bossfiretime2.lifespan = 95000
                Bossfiretime2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss2, -90, 65)
                Bossfiretime2.setKind(SpriteKind.Boss2shot)
                Bossfiretime2.lifespan = 95000
                Bossfiretime2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss2, 60, 65)
                Bossfiretime2.setKind(SpriteKind.Boss2shot)
                Bossfiretime2.lifespan = 95000
                Bossfiretime2 = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss2, -60, 65)
                Bossfiretime2.setKind(SpriteKind.Boss2shot)
                Bossfiretime2.lifespan = 95000
                Bossfiretime2.setFlag(SpriteFlag.AutoDestroy, true)
            }
        })
    })
    pause(1500)
})
forever(function () {
    if (bossfiretime && bossfiretime.lifespan > 0) {
        Enemy_1.destroy()
        minion.destroy()
        enemyversion2.destroy()
        _1shotenemyfire.destroy()
        if (enemyfiretime && enemyfiretime.lifespan > 0) {
            enemyfiretime2.lifespan = 0
            enemyfiretime.lifespan = 0
        }
        if (enemyfiretime2 && enemyfiretime2.lifespan > 0) {
            enemyfiretime2.lifespan = 0
            enemyfiretime.lifespan = 0
        }
    }
    if (Bossfiretime2 && Bossfiretime2.lifespan > 0) {
        Enemy_1.destroy()
        minion.destroy()
        enemyversion2.destroy()
        _1shotenemyfire.destroy()
        if (enemyfiretime && enemyfiretime.lifespan > 0) {
            enemyfiretime2.lifespan = 0
            enemyfiretime.lifespan = 0
        }
        if (enemyfiretime2 && enemyfiretime2.lifespan > 0) {
            enemyfiretime2.lifespan = 0
            enemyfiretime.lifespan = 0
        }
    }
})
forever(function () {
	
})
forever(function () {
    if (Sprite1_Projectile && Sprite1_Projectile.lifespan > 0) {
        if (Shileded && Shileded.lifespan > 0) {
            laser = sprites.createProjectileFromSprite(img`
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                6 9 9 1 1 1 1 1 1 1 1 1 1 1 1 9 9 6 
                `, mySprite, 0, -500)
            laser = sprites.createProjectileFromSprite(img`
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                9119.....................................9119
                `, mySprite, 0, -500)
            music.pewPew.stop()
            laser.setFlag(SpriteFlag.AutoDestroy, true)
        }
    }
    if (Sprite3_Projectile && Sprite3_Projectile.lifespan > 0) {
        if (Shileded && Shileded.lifespan > 0) {
            laser = sprites.createProjectileFromSprite(img`
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                244445555555555555555555544442
                `, mySprite3, 0, -700)
            music.pewPew.stop()
            laser.setFlag(SpriteFlag.AutoDestroy, true)
        }
        if (Sprite2_projetile && Sprite2_projetile.lifespan > 0) {
            if (Shileded && Shileded.lifespan > 0) {
                laser = sprites.createProjectileFromSprite(img`
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    677779999999999999999999977776
                    `, mySprite3, 0, -700)
                music.pewPew.stop()
                laser.setFlag(SpriteFlag.AutoDestroy, true)
            }
        }
    }
})
forever(function () {
    if (enemyfiretime && enemyfiretime.lifespan > 0) {
        enemyfiretime = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Enemy_1, 60, 100)
        enemyfiretime.setKind(SpriteKind.Enemyshot)
        enemyfiretime.lifespan = 100000
        enemyfiretime = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Enemy_1, -60, 100)
        enemyfiretime.setKind(SpriteKind.Enemyshot)
        enemyfiretime.lifespan = 100000
        enemyfiretime = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Enemy_1, 30, 100)
        enemyfiretime.setKind(SpriteKind.Enemyshot)
        enemyfiretime.lifespan = 100000
        enemyfiretime = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Enemy_1, -30, 100)
        enemyfiretime.setKind(SpriteKind.Enemyshot)
        enemyfiretime.lifespan = 100000
        timer.after(100, function () {
            if (enemyfiretime && enemyfiretime.lifespan > 0) {
                enemyfiretime = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Enemy_1, 60, 100)
                enemyfiretime.setKind(SpriteKind.Enemyshot)
                enemyfiretime.lifespan = 100000
                enemyfiretime = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Enemy_1, -60, 100)
                enemyfiretime.setKind(SpriteKind.Enemyshot)
                enemyfiretime.lifespan = 100000
                enemyfiretime = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Enemy_1, 30, 100)
                enemyfiretime.setKind(SpriteKind.Enemyshot)
                enemyfiretime.lifespan = 100000
                enemyfiretime = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, Enemy_1, -30, 100)
                enemyfiretime.setKind(SpriteKind.Enemyshot)
                enemyfiretime.lifespan = 100000
                timer.after(100, function () {
                    if (enemyfiretime && enemyfiretime.lifespan > 0) {
                        enemyfiretime = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . 4 4 . . . . . . . 
                            . . . . . . 4 5 5 4 . . . . . . 
                            . . . . . . 2 5 5 2 . . . . . . 
                            . . . . . . . 2 2 . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, Enemy_1, 60, 100)
                        enemyfiretime.setKind(SpriteKind.Enemyshot)
                        enemyfiretime.lifespan = 100000
                        enemyfiretime = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . 4 4 . . . . . . . 
                            . . . . . . 4 5 5 4 . . . . . . 
                            . . . . . . 2 5 5 2 . . . . . . 
                            . . . . . . . 2 2 . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, Enemy_1, -60, 100)
                        enemyfiretime.setKind(SpriteKind.Enemyshot)
                        enemyfiretime.lifespan = 100000
                        enemyfiretime = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . 4 4 . . . . . . . 
                            . . . . . . 4 5 5 4 . . . . . . 
                            . . . . . . 2 5 5 2 . . . . . . 
                            . . . . . . . 2 2 . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, Enemy_1, 30, 100)
                        enemyfiretime.setKind(SpriteKind.Enemyshot)
                        enemyfiretime.lifespan = 100000
                        enemyfiretime = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . 4 4 . . . . . . . 
                            . . . . . . 4 5 5 4 . . . . . . 
                            . . . . . . 2 5 5 2 . . . . . . 
                            . . . . . . . 2 2 . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, Enemy_1, -30, 100)
                        enemyfiretime.setKind(SpriteKind.Enemyshot)
                        enemyfiretime.lifespan = 100000
                        timer.after(1200, function () {
                            if (enemyfiretime && enemyfiretime.lifespan > 0) {
                                enemyfiretime = sprites.createProjectileFromSprite(img`
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . 2 2 . . . . . . . . 2 2 . . 
                                    . 4 5 5 4 . . . . . . 4 5 5 4 . 
                                    2 5 5 5 5 2 . . . . 2 5 5 5 5 2 
                                    2 5 5 5 5 2 . . . . 2 5 5 5 5 2 
                                    . 4 5 5 4 . . . . . . 4 5 5 4 . 
                                    . . 2 2 . . . . . . . . 2 2 . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    . . . . . . . . . . . . . . . . 
                                    `, Enemy_1, 0, 100)
                                enemyfiretime.setKind(SpriteKind.Enemyshot)
                                enemyfiretime.lifespan = 100000
                            }
                        })
                    }
                })
            }
        })
        enemyfiretime.setFlag(SpriteFlag.AutoDestroy, true)
    }
    pause(2500)
})
forever(function () {
    timer.after(5000, function () {
        if (bossfiretime && bossfiretime.lifespan > 0) {
            bossfiretime = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . 2 2 . . . . . . . . 2 2 . . 
                . 4 5 5 4 . . . . . . 4 5 5 4 . 
                2 5 5 5 5 2 . . . . 2 5 5 5 5 2 
                2 5 5 5 5 2 . . . . 2 5 5 5 5 2 
                . 4 5 5 4 . . . . . . 4 5 5 4 . 
                . . 2 2 . . . . . . . . 2 2 . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, boss1, 0, 100)
            bossfiretime.setKind(SpriteKind.Bossshot)
            bossfiretime.lifespan = 95000
            timer.after(100, function () {
                bossfiretime = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . 2 2 . . . . . . . . 2 2 . . 
                    . 4 5 5 4 . . . . . . 4 5 5 4 . 
                    2 5 5 5 5 2 . . . . 2 5 5 5 5 2 
                    2 5 5 5 5 2 . . . . 2 5 5 5 5 2 
                    . 4 5 5 4 . . . . . . 4 5 5 4 . 
                    . . 2 2 . . . . . . . . 2 2 . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss1, 0, 100)
                bossfiretime.setKind(SpriteKind.Bossshot)
                bossfiretime.lifespan = 95000
                timer.after(100, function () {
                    bossfiretime = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . 2 2 . . . . . . . . 2 2 . . 
                        . 4 5 5 4 . . . . . . 4 5 5 4 . 
                        2 5 5 5 5 2 . . . . 2 5 5 5 5 2 
                        2 5 5 5 5 2 . . . . 2 5 5 5 5 2 
                        . 4 5 5 4 . . . . . . 4 5 5 4 . 
                        . . 2 2 . . . . . . . . 2 2 . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, boss1, 0, 100)
                    bossfiretime.setKind(SpriteKind.Bossshot)
                    bossfiretime.lifespan = 95000
                })
            })
        }
    })
    if (bossfiretime && bossfiretime.lifespan > 0) {
        bossfiretime = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss1, 20, 60)
        bossfiretime.setKind(SpriteKind.Bossshot)
        bossfiretime = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, boss1, -20, 60)
        bossfiretime.setKind(SpriteKind.Bossshot)
        bossfiretime.lifespan = 75000
        timer.after(100, function () {
            if (bossfiretime && bossfiretime.lifespan > 0) {
                bossfiretime = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss1, 20, 60)
                bossfiretime.setKind(SpriteKind.Bossshot)
                bossfiretime = sprites.createProjectileFromSprite(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 4 4 . . . . . . . 
                    . . . . . . 4 5 5 4 . . . . . . 
                    . . . . . . 2 5 5 2 . . . . . . 
                    . . . . . . . 2 2 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, boss1, -20, 60)
                bossfiretime.setKind(SpriteKind.Bossshot)
                bossfiretime.lifespan = 75000
            }
            timer.after(100, function () {
                if (bossfiretime && bossfiretime.lifespan > 0) {
                    bossfiretime = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . 4 5 5 4 . . . . . . 
                        . . . . . . 2 5 5 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, boss1, 20, 60)
                    bossfiretime.setKind(SpriteKind.Bossshot)
                    bossfiretime = sprites.createProjectileFromSprite(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 4 4 . . . . . . . 
                        . . . . . . 4 5 5 4 . . . . . . 
                        . . . . . . 2 5 5 2 . . . . . . 
                        . . . . . . . 2 2 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, boss1, -20, 60)
                    bossfiretime.setKind(SpriteKind.Bossshot)
                    bossfiretime.lifespan = 75000
                }
                timer.after(100, function () {
                    if (bossfiretime && bossfiretime.lifespan > 0) {
                        bossfiretime = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . 4 4 . . . . . . . 
                            . . . . . . 4 5 5 4 . . . . . . 
                            . . . . . . 2 5 5 2 . . . . . . 
                            . . . . . . . 2 2 . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, boss1, 20, 60)
                        bossfiretime.setKind(SpriteKind.Bossshot)
                        bossfiretime = sprites.createProjectileFromSprite(img`
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . 4 4 . . . . . . . 
                            . . . . . . 4 5 5 4 . . . . . . 
                            . . . . . . 2 5 5 2 . . . . . . 
                            . . . . . . . 2 2 . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            . . . . . . . . . . . . . . . . 
                            `, boss1, -20, 60)
                        bossfiretime.setKind(SpriteKind.Bossshot)
                        bossfiretime.lifespan = 75000
                    }
                })
            })
        })
    }
    pause(3000)
})
game.onUpdate(function () {
    if (!(inCharacterSelectionMenu)) {
        movinf = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || (controller.A.isPressed() || (controller.A.isPressed() || controller.down.isPressed()))))
    } else {
        selectcharindicator.setPosition(currentlyselectedsprite.x, currentlyselectedsprite.y - 15)
    }
})
game.onUpdateInterval(0.0000000000000000000000000000000000000001, function () {
    if (does_miniship_exist == true) {
        projectile = sprites.createProjectileFromSprite(img`
            7 
            `, Miniship, 0, 0)
        choose = randint(1, 6)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
        if (choose == 1) {
            projectile.follow(minion)
        } else if (choose == 2) {
            projectile.follow(minion2)
        } else if (choose == 3) {
            projectile.follow(boss1)
        } else if (choose == 4) {
            projectile.follow(boss2)
        } else if (choose == 5) {
            projectile.follow(Enemy_1)
        } else {
            projectile.follow(enemyversion2)
        }
        projectile.lifespan = 2000
    }
})
game.onUpdateInterval(12000, function () {
    enemySpeed += 8
    enemySpeed = Math.min(enemySpeed, 60)
    EnemySpawnTime += -500
    Enemy2spawntime += -500
    Minionspawn += -850
    EnemySpawnTime = Math.max(EnemySpawnTime, 5000)
    EnemySpawnTime = Math.max(Enemy2spawntime, 5000)
    Minionspawn = Math.max(Minionspawn, 1500)
})
