namespace SpriteKind {
    export const dead = SpriteKind.create()
    export const deadEnemy = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        music.play(music.createSoundEffect(WaveShape.Square, 1, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        isjumping = true
        timer.after(250, function () {
            isjumping = false
        })
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (ishittinghead) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
        )
    }
    if (islanding) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `],
        50,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 f 7 7 7 f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        50,
        characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f f 7 7 7 f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
        )
    }
    if (controller.up.isPressed() || controller.A.isPressed()) {
        if (mySprite.isHittingTile(CollisionDirection.Left)) {
            if (mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile`) || mySprite.tileKindAt(TileDirection.Left, assets.tile`myTile1`)) {
                mySprite.vy = -110
            }
        }
        if (mySprite.isHittingTile(CollisionDirection.Right)) {
            if (mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile0`) || mySprite.tileKindAt(TileDirection.Right, assets.tile`myTile1`)) {
                mySprite.vy = -110
            }
        }
    }
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        pounding = false
    }
})
events.wallEvent(SpriteKind.Player, events.simpleWallCondition(events.WallFlag.Top), events.WallEvent.StartHitting, function (sprite) {
    ishittinghead = true
    timer.after(50, function () {
        ishittinghead = false
    })
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            music.play(music.createSoundEffect(WaveShape.Square, 1, 5000, 255, 0, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
            isjumping = true
            timer.after(250, function () {
                isjumping = false
            })
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    sprinting = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.stopAllSounds()
    music.play(music.createSong(hex`0078000408010205001c000f0a006400f4010a00000400000000000000000000000000000000027a0000000100011901000200010d02000300011b03000400010f04000500011d05000600011106000700011e07000800011208000900012009000a0001140a000b00011e0b000c0001120c000d00011d0d000e0001110e000f00011b0f001000010f10001100011911001200010d1200180002081418002000020d1907001c00020a006400f40164000004000000000000000000000000000000000330000000040003191d200400080003191d2008000c00031d20240c001000031e222510001800031b1e2218001c00031d2025`), music.PlaybackMode.InBackground)
    timer.after(2000, function () {
        music.play(music.createSong(assets.song`level`), music.PlaybackMode.LoopingInBackground)
    })
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    sprinting = false
})
events.wallEvent(SpriteKind.Player, events.simpleWallCondition(events.WallFlag.Bottom), events.WallEvent.StartHitting, function (sprite) {
    music.play(music.createSoundEffect(
    WaveShape.Noise,
    400,
    400,
    255,
    0,
    200,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
    extraEffects.createSpreadEffectAt(extraEffects.createSingleColorSpreadEffectData(13, ExtraEffectPresetShape.Spark), mySprite.x, mySprite.bottom, 100)
    islanding = true
    timer.after(50, function () {
        islanding = false
    })
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    if (sprinting) {
        tiles.setTileAt(location, assets.tile`transparency16`)
    } else {
        tiles.setWallAt(location, true)
        timer.after(250, function () {
            tiles.setWallAt(location, false)
        })
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 50
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f a a a a a a a f a f a f . 
            . . f a a a a a a a 1 f 1 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a f f f a a f . 
            . . f a a a a a f a a a f a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f f 
            . . . f a a a a a a a f a f a f 
            . . . f a a a a a a a 1 f 1 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a f f f a a f 
            . . . f a a a a a f a a a f a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a a a a a a f 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    } else if (sprite.isHittingTile(CollisionDirection.Right)) {
        sprite.vx = -50
        animation.runImageAnimation(
        sprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f a f a f a a a a a a a f . . 
            . f a 1 f 1 a a a a a a a f . . 
            . f a 2 a 2 a a a a a a a f . . 
            . f a 2 a 2 a a a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . f a a f f f a a a a a a f . . 
            . f a f a a a f a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . f a a a a a a a a a a a f . . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f . . . 
            f a f a f a a a a a a a f . . . 
            f a 1 f 1 a a a a a a a f . . . 
            f a 2 a 2 a a a a a a a f . . . 
            f a 2 a 2 a a a a a a a f . . . 
            f a a a a a a a a a a a f . . . 
            f a a f f f a a a a a a f . . . 
            f a f a a a f a a a a a f . . . 
            f a a a a a a a a a a a f . . . 
            f a a a a a a a a a a a f . . . 
            . f a a a a a a a a a a a f . . 
            . f f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    }
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    if (mySprite) {
        isjumping = false
    }
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    isjumping = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
        if (location.row == value.row) {
            tiles.setTileAt(value, assets.tile`myTile5`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        tiles.setTileAt(value, assets.tile`myTile13`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        tiles.setTileAt(value, assets.tile`myTile15`)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        myenemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f a a a a a a a f a f a f . 
            . . f a a a a a a a 1 f 1 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a f f f a a f . 
            . . f a a a a a f a a a f a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `, SpriteKind.Enemy)
        myenemy.vx = 50
        myenemy.ay = 500
        tiles.placeOnTile(myenemy, value)
        animation.runImageAnimation(
        myenemy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f a a a a a a a f a f a f . 
            . . f a a a a a a a 1 f 1 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a f f f a a f . 
            . . f a a a a a f a a a f a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f f 
            . . . f a a a a a a a f a f a f 
            . . . f a a a a a a a 1 f 1 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a f f f a a f 
            . . . f a a a a a f a a a f a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a a a a a a f 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    }
    mySprite2.y += 240
    mySprite.y += 20
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallDown)))) {
        pounding = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        if (location.row == value.row) {
            tiles.setTileAt(value, assets.tile`myTile8`)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile14`)) {
        tiles.setTileAt(value, assets.tile`myTile13`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        tiles.setTileAt(value, assets.tile`myTile15`)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
        myenemy = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f a a a a a a a f a f a f . 
            . . f a a a a a a a 1 f 1 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a f f f a a f . 
            . . f a a a a a f a a a f a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `, SpriteKind.Enemy)
        myenemy.vx = 50
        myenemy.ay = 500
        tiles.placeOnTile(myenemy, value)
        animation.runImageAnimation(
        myenemy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f a a a a a a a f a f a f . 
            . . f a a a a a a a 1 f 1 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a 2 a 2 a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a f f f a a f . 
            . . f a a a a a f a a a f a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f f f f f f f f 
            . . . f a a a a a a a f a f a f 
            . . . f a a a a a a a 1 f 1 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a 2 a 2 a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a f f f a a f 
            . . . f a a a a a f a a a f a f 
            . . . f a a a a a a a a a a a f 
            . . . f a a a a a a a a a a a f 
            . . f a a a a a a a a a a a f . 
            . f f f f f f f f f f f f f f . 
            `],
        400,
        true
        )
    }
    mySprite2.y += -240
    mySprite.y += -20
})
function animations () {
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `],
    150,
    characterAnimations.rule(Predicate.NotMoving, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f f f f 
        . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
        . . . f 7 7 7 7 7 7 7 1 7 1 7 f 
        . . . f 7 7 7 7 7 7 7 f 7 f 7 f 
        . . . f 7 7 7 7 7 7 7 f 7 f 7 f 
        . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
        . . . f 7 7 7 7 7 f 7 7 7 f 7 f 
        . . . f 7 7 7 7 7 7 f f f 7 7 f 
        . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
        . . . f 7 7 7 7 7 7 7 7 7 7 7 f 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        f f f f f f f f f f f f f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 1 7 1 7 7 7 7 7 7 7 f . . . 
        f 7 f 7 f 7 7 7 7 7 7 7 f . . . 
        f 7 f 7 f 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 f 7 7 7 f 7 7 7 7 7 f . . . 
        f 7 7 f f f 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        f 7 7 7 7 7 7 7 7 7 7 7 f . . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingLeft, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
        . . f 7 7 7 7 7 7 f f f 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingRight, Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . f f f f f f f f f f f f f . . 
        . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
        . f 7 7 f f f 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
        . f f f f f f f f f f f f f f . 
        `],
    200,
    characterAnimations.rule(Predicate.MovingUp, Predicate.MovingLeft, Predicate.FacingLeft)
    )
    if (pounding) {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . f f f f f . . 
            . . . . . . . . . . f 7 7 7 f . 
            . . f f f f f f f f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 f f f f f f f f f f . 
            . . f 7 7 7 f . . . . . . . . . 
            . . . f f f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f 7 7 7 7 7 7 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 f 7 7 7 7 7 f . . 
            . . f 7 7 7 f 7 7 7 7 7 7 f . f 
            . . f 7 7 7 f 7 7 f f 1 7 f f f 
            . . f 7 7 7 f 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 f 7 f f 1 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . . . . f 7 7 7 f . . 
            . f f f f f f f f f f 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 f f f f f f f f f f . . 
            . f 7 7 7 f . . . . . . . . . . 
            . . f f f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 1 f f 7 f 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 f 7 7 7 f . . 
            f f f 7 1 f f 7 7 f 7 7 7 f . . 
            f . f 7 7 7 7 7 7 f 7 7 7 f . . 
            . . f 7 7 7 7 7 f 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 7 7 7 7 7 7 f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . f f f f f . . 
            . . . . . . . . . . f 7 7 7 f . 
            . . f f f f f f f f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 f f f f f f f f f f . 
            . . f 7 7 7 f . . . . . . . . . 
            . . . f f f f f . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f 7 7 7 7 7 7 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 7 7 7 7 f . . 
            . . f 7 7 7 7 f 7 7 7 7 7 f . . 
            . . f 7 7 7 f 7 7 7 7 7 7 f . f 
            . . f 7 7 7 f 7 7 f f 1 7 f f f 
            . . f 7 7 7 f 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 f 7 f f 1 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . f f f f f . . . 
            . . . . . . . . . f 7 7 7 f . . 
            . f f f f f f f f f f 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 f f f f f f f f f f . . 
            . f 7 7 7 f . . . . . . . . . . 
            . . f f f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 1 f f 7 f 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 f 7 7 7 f . . 
            f f f 7 1 f f 7 7 f 7 7 7 f . . 
            f . f 7 7 7 7 7 7 f 7 7 7 f . . 
            . . f 7 7 7 7 7 f 7 7 7 7 f . . 
            . . f 7 7 7 7 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 7 7 7 7 7 7 f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f f f f f f f f f f f f f . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingDown, Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . f f f f f . . . . . . . . . 
            . f 7 7 7 f . . . . . . . . . . 
            . f 7 7 f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f 7 7 f . . 
            . . . . . . . . . f 7 7 7 f . . 
            . . . . . . . . f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 7 f 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 f 7 7 7 f . . 
            f f f 7 1 f f 7 7 f 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 f 7 7 7 f . . 
            f 7 7 7 1 f f 7 f 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . . f 7 7 7 f . . . . . . . . . 
            . . f 7 7 f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f f f f f f f f f 7 7 f . 
            . . . . . . . . . . f 7 7 7 f . 
            . . . . . . . . . f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 f 7 f f 1 7 7 7 f 
            . . f 7 7 7 f 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 f 7 7 f f 1 7 f f f 
            . . f 7 7 7 f 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 f 7 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . f f f f f . . . . . . . . . 
            . f 7 7 7 f . . . . . . . . . . 
            . f 7 7 f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f 7 7 f . . 
            . . . . . . . . . f 7 7 7 f . . 
            . . . . . . . . f f f f f . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 7 7 7 7 7 7 7 f f f 
            . . f 7 7 7 7 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 7 f 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 f 7 7 7 f . . 
            f f f 7 1 f f 7 7 f 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 f 7 7 7 f . . 
            f 7 7 7 1 f f 7 f 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . f f f f f . . . . . . . . 
            . . f 7 7 7 f . . . . . . . . . 
            . . f 7 7 f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f f f f f f f f f f 7 7 f . 
            . . . . . . . . . . f 7 7 7 f . 
            . . . . . . . . . f f f f f . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 7 f 
            . . f 7 7 7 7 f 7 f f 1 7 7 7 f 
            . . f 7 7 7 f 7 7 7 7 7 7 f 7 f 
            . . f 7 7 7 f 7 7 f f 1 7 f f f 
            . . f 7 7 7 f 7 7 7 7 7 7 f . f 
            . . f 7 7 7 7 f 7 7 7 7 7 f . . 
            f . f 7 7 7 7 7 7 7 7 7 7 f . . 
            f f f 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 f 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        characterAnimations.rule(Predicate.MovingDown, Predicate.MovingLeft, Predicate.FacingLeft)
        )
    } else {
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f f f f f f f f f f f f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
            . . f 7 7 7 7 7 f 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 f f f 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown, Predicate.MovingRight, Predicate.FacingRight)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown, Predicate.FacingLeft)
        )
        characterAnimations.loopFrames(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f f f f f f f f f f f f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 1 7 1 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 f 7 f 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 f 7 7 7 7 7 f . . 
            . f 7 7 f f f 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f 7 7 7 7 7 7 7 7 7 7 7 f . . 
            . f f f f f f f f f f f f f f . 
            `],
        200,
        characterAnimations.rule(Predicate.MovingDown, Predicate.MovingLeft, Predicate.FacingLeft)
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (pounding) {
        otherSprite.vy = -200
        if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
            otherSprite.vx = -100
        } else {
            otherSprite.vx = 100
        }
        otherSprite.setKind(SpriteKind.deadEnemy)
        otherSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        timer.after(750, function () {
            sprites.destroy(otherSprite)
        })
    } else {
        sprite.vy = -200
        sprite.vx = -300
        sprite.setKind(SpriteKind.dead)
        sprite.setFlag(SpriteFlag.GhostThroughWalls, true)
        cantmove = true
        timer.after(750, function () {
            game.reset()
        })
    }
})
let cantmove = false
let sprinting = false
let pounding = false
let islanding = false
let ishittinghead = false
let isjumping = false
let myenemy: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
namespace userconfig{
    export const ARCADE_SCREEN_WIDTH = 320
    export const ARCADE_SCREEN_HEIGHT = 240
}
Keybinds.setSimulatorKeymap(
Keybinds.PlayerNumber.ONE,
Keybinds.CustomKey.UP,
Keybinds.CustomKey.DOWN,
Keybinds.CustomKey.LEFT,
Keybinds.CustomKey.RIGHT,
Keybinds.CustomKey.SPACE,
Keybinds.CustomKey.X
)
Keybinds.setSimulatorKeymap(
Keybinds.PlayerNumber.TWO,
Keybinds.CustomKey.PLUS,
Keybinds.CustomKey.MINUS,
Keybinds.CustomKey.PLUS,
Keybinds.CustomKey.MINUS,
Keybinds.CustomKey.SHIFT,
Keybinds.CustomKey.PLUS
)
scene.setBackgroundImage(img`
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777771111111777777711111117777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff7777777777777777777777777777777777777777777777777fffffff7777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777fffffff777777777777777777777fffffff7777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff777777777777777777777777777777777777777777fffffffffffffffffffff77777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999fffffff77777777777777777777777777777777777777777777777777777777777777777777777777777fffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    `)
let myTextSprite = fancyText.create("CUBE SLUG\\n\\n<black>PRESS A</black>", 0, 7, fancyText.rounded_large)
myTextSprite.setPosition(160, 80)
pauseUntil(() => controller.A.isPressed())
sprites.destroy(myTextSprite)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f f f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 7 7 1 7 1 7 f . 
    . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
    . . f 7 7 7 7 7 7 7 f 7 f 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 f 7 7 7 f 7 f . 
    . . f 7 7 7 7 7 7 f f f 7 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f 7 7 7 7 7 7 7 7 7 7 7 f . 
    . f f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
mySprite.fx = 500
mySprite2 = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
mySprite2.setFlag(SpriteFlag.Invisible, true)
scene.cameraFollowSprite(mySprite2)
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level2`)
music.play(music.createSong(assets.song`level`), music.PlaybackMode.LoopingInBackground)
animations()
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
for (let value of tiles.getTilesByType(assets.tile`myTile10`)) {
    myenemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f a a a a a a a f a f a f . 
        . . f a a a a a a a 1 f 1 a f . 
        . . f a a a a a a a 2 a 2 a f . 
        . . f a a a a a a a 2 a 2 a f . 
        . . f a a a a a a a a a a a f . 
        . . f a a a a a a f f f a a f . 
        . . f a a a a a f a a a f a f . 
        . . f a a a a a a a a a a a f . 
        . . f a a a a a a a a a a a f . 
        . . f a a a a a a a a a a a f . 
        . f f f f f f f f f f f f f f . 
        `, SpriteKind.Enemy)
    myenemy.vx = 50
    myenemy.ay = 500
    tiles.placeOnTile(myenemy, value)
    animation.runImageAnimation(
    myenemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f f f f f f f f f . 
        . . f a a a a a a a f a f a f . 
        . . f a a a a a a a 1 f 1 a f . 
        . . f a a a a a a a 2 a 2 a f . 
        . . f a a a a a a a 2 a 2 a f . 
        . . f a a a a a a a a a a a f . 
        . . f a a a a a a f f f a a f . 
        . . f a a a a a f a a a f a f . 
        . . f a a a a a a a a a a a f . 
        . . f a a a a a a a a a a a f . 
        . . f a a a a a a a a a a a f . 
        . f f f f f f f f f f f f f f . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f f f f 
        . . . f a a a a a a a f a f a f 
        . . . f a a a a a a a 1 f 1 a f 
        . . . f a a a a a a a 2 a 2 a f 
        . . . f a a a a a a a 2 a 2 a f 
        . . . f a a a a a a a a a a a f 
        . . . f a a a a a a f f f a a f 
        . . . f a a a a a f a a a f a f 
        . . . f a a a a a a a a a a a f 
        . . . f a a a a a a a a a a a f 
        . . f a a a a a a a a a a a f . 
        . f f f f f f f f f f f f f f . 
        `],
    400,
    true
    )
}
for (let value of tiles.getTilesByType(assets.tile`myTile11`)) {
    tiles.placeOnTile(mySprite2, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
game.onUpdate(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile12`)) {
        if (mySprite.y + 8 < value.y) {
            tiles.setWallAt(value, true)
        } else {
            tiles.setWallAt(value, false)
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile13`)) {
        if (mySprite.x - value.x <= 16 && mySprite.y - value.y <= 16) {
            if (mySprite.y + 8 < value.y) {
                music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                tiles.setWallAt(value, true)
                tiles.setTileAt(value, assets.tile`myTile14`)
            } else {
                tiles.setWallAt(value, false)
            }
        }
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile15`)) {
        if (mySprite.x - value.x <= 16 && mySprite.y - value.y <= 16) {
            if (mySprite.x - 8 > value.x) {
                music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                music.play(music.createSoundEffect(WaveShape.Noise, 1, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
                tiles.setWallAt(value, true)
                tiles.setTileAt(value, assets.tile`myTile16`)
            } else {
                tiles.setWallAt(value, false)
            }
        }
    }
})
game.onUpdate(function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallLeft))) {
        if (controller.up.isPressed() || controller.A.isPressed()) {
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                f f f f f f f f f f f f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 f 7 f f 1 7 f . . . . 
                f 7 7 7 f 7 7 7 7 7 7 f . . . . 
                f 7 7 7 f 7 7 f f 1 7 f . . . . 
                f 7 7 7 f 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 f 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f f f f f f f f f f f f . . . . 
                f . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . f f f f f f f f f f . . . . 
                f f 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 f 7 f f 1 7 f . . . . 
                f 7 7 7 f 7 7 7 7 7 7 f . . . . 
                f 7 7 7 f 7 7 f f 1 7 f . . . . 
                f 7 7 7 f 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 f 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 7 7 7 7 7 7 7 7 7 f . . . . 
                f 7 f f f f f f f f f f . . . . 
                f f . . . . . . . . . . . . . . 
                f . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `],
            200,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingLeft)
            )
        }
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.HittingWallRight))) {
        if (controller.up.isPressed() || controller.A.isPressed()) {
            characterAnimations.loopFrames(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . f f f f f f f f f f f f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 1 f f 7 f 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 f 7 7 7 f 
                . . . . f 7 1 f f 7 7 f 7 7 7 f 
                . . . . f 7 7 7 7 7 7 f 7 7 7 f 
                . . . . f 7 7 7 7 7 f 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f f f f f f f f f f f f 
                . . . . . . . . . . . . . . . f 
                . . . . . . . . . . . . . . . . 
                `,img`
                . . . . f f f f f f f f f f . . 
                . . . . f 7 7 7 7 7 7 7 7 7 f f 
                . . . . f 7 1 f f 7 f 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 f 7 7 7 f 
                . . . . f 7 1 f f 7 7 f 7 7 7 f 
                . . . . f 7 7 7 7 7 7 f 7 7 7 f 
                . . . . f 7 7 7 7 7 f 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f 7 7 7 7 7 7 7 7 7 7 f 
                . . . . f f f f f f f f f f 7 f 
                . . . . . . . . . . . . . . f f 
                . . . . . . . . . . . . . . . f 
                . . . . . . . . . . . . . . . . 
                `],
            200,
            characterAnimations.rule(Predicate.MovingUp, Predicate.FacingRight)
            )
        }
    } else {
        animations()
        mySprite.ay = 600
    }
})
game.onUpdate(function () {
    if (!(cantmove)) {
        if (sprinting) {
            if (controller.left.isPressed()) {
                mySprite.vx = -150
            } else if (controller.right.isPressed()) {
                mySprite.vx = 150
            }
        } else {
            if (controller.left.isPressed()) {
                mySprite.vx = -100
            } else if (controller.right.isPressed()) {
                mySprite.vx = 100
            }
        }
        if (isjumping) {
            mySprite.vy = -150
        }
        if (pounding) {
            mySprite.vy = 1000
        }
    }
})
