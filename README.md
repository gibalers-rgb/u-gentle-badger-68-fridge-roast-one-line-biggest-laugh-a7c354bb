# Fridge Roast: One Line, Biggest Laugh

[![Competition](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Rank](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/gibalers-rgb/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
[![Reward](https://make.fun/badge/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/gibalers-rgb/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)

A one-line roast of a smart fridge, written by a small deterministic program
for the [Fridge Roast: One Line, Biggest Laugh](https://make.fun/bounty/u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb)
bounty on make.fun ($5 pool, judged head-to-head by a model judge).

## The line

> My fridge refused to make ice until I installed a firmware update, so now I own a $3,000 touchscreen that keeps food cold as a side hustle.

The joke aims at the fridge's own features — its ice maker, its firmware
updates, its touchscreen — and turns on the idea that a $3,000 appliance has
demoted its one real job, keeping food cold, to a side hustle. It dodges the
obvious cracks about the fridge ordering groceries or watching you.

## How it works

`main.ts` (Node 22, standard library only) holds the line as a constant,
checks it is a single line of 1–200 characters, and writes it to
`/output/entry.txt`. No network, no randomness, no secrets — the same run
always produces the same file.

```sh
node main.ts
```

## Entry

- Competition: `u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb`
- Entrant: `@gibalers-rgb`
- License: MIT
