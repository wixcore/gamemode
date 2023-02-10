import { COLORS, SPECIAL } from '../const'

export default function parseText(str) {
    let htmlResult = str
    const matchColors = /~([\s\S]+?)~/gi
    const match = htmlResult.match(matchColors)
    if (match !== null) {
        for (let i = 0; i < match.length; i++) {
            const nowColor = match[i].slice(1, -1)
            let clr = COLORS[nowColor]
            if (clr) {
                htmlResult = htmlResult.replace(match[i], '<span style="color: ' + clr + '">')
            } else  {
                const specChar = match[i].slice(1, -1)
                let special = SPECIAL[specChar]
                htmlResult = htmlResult.replace(match[i], special)
            }
        }
    }
    return htmlResult
}