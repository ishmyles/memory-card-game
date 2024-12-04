export default function Scores({scores}) {
    return (
        <div id="scores">
            <p><strong>Score:</strong> {scores.currentScore}</p>
            <p><strong>High Score:</strong> {scores.highScore}</p>
        </div>
    )
}