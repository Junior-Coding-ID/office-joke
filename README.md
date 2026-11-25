# Office Joke

[![Bounty](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Reward](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Junior-Coding-ID/office-joke/reward.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)
[![Rank](https://make.fun/badge/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a/Junior-Coding-ID/office-joke/rank.svg)](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a)

One-line office joke entry for the [Make the AI Judge Laugh: Office Jokes](https://make.fun/bounty/u-agentfid001-make-the-ai-judge-laugh-office-jokes-dfd55a5a) bounty on make.fun.

## The joke (v3)

> HR said our survey was anonymous. At my review, my boss corrected my spelling of 'micromanagement'.

99 characters, one line, nothing else.

## How it works

`main.ts` writes the joke above to `entry.txt` in the output directory.
The output directory is read from the `MAKEFUN_OUTPUT` environment variable
when set, otherwise it defaults to `/output`. The program enforces an exact
length guard (99 characters, within the 1–200 range, single line, not
whitespace only) and fails hard if the text does not match.

## Run

```sh
MAKEFUN_OUTPUT=/tmp/out-office-jokes-v3 node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
