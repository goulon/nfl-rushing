### Challenge Background

We have sets of records representing football players' rushing statistics. All records have the following attributes:

- `Player` (Player's name)
- `Team` (Player's team abbreviation)
- `Pos` (Player's position)
- `Att/G` (Rushing Attempts Per Game Average)
- `Att` (Rushing Attempts)
- `Yds` (Total Rushing Yards)
- `Avg` (Rushing Average Yards Per Attempt)
- `Yds/G` (Rushing Yards Per Game)
- `TD` (Total Rushing Touchdowns)
- `Lng` (Longest Rush -- a `T` represents a touchdown occurred)
- `1st` (Rushing First Downs)
- `1st%` (Rushing First Down Percentage)
- `20+` (Rushing 20+ Yards Each)
- `40+` (Rushing 40+ Yards Each)
- `FUM` (Rushing Fumbles)

In this repo is a sample data file [`rushing.json`](/src/rushing.json).

##### Challenge Requirements

1. Create a web app. This must be able to do the following steps
   1. Create a webpage which displays a table with the contents of [`rushing.json`](/src/rushing.json)
   2. The user should be able to sort the players by _Total Rushing Yards_, _Longest Rush_ and _Total Rushing Touchdowns_
   3. The user should be able to filter by the player's name
   4. The user should be able to download the sorted data as a CSV, as well as a filtered subset
2. The system should be able to potentially support larger sets of data on the order of 10k records.

3. Update the section `Installation and running this solution` in the README file explaining how to run your code

### Installation and running this solution

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```
