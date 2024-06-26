
import { formats } from "src/config/constants";
import {  ViewColumn, ViewEntity } from "typeorm";

@ViewEntity({
    name: "view_results_with_names",
    expression: `
    SELECT 
        p.id_player AS "id_player",
        t.id_tournament AS "id_tournament",
        p.name AS "player_name",
        p.picture AS "picture",
        t.picture AS "t_picture",
        t.name AS "tournament_name",
        r.sets_played AS "sets_played",
        r.sets_winned AS "sets_winned",
        r.games_played AS "games_played",
        r.games_winned AS "games_winned",
        r.format AS format
        
    FROM
        tbl_results_nrex r
    JOIN
        tbl_players_nrex p ON p.id_player = r.id_player_fk
    JOIN
        tbl_tournament_nrex t ON t.id_tournament = r.id_tournament_fk;
    `
})
export class ResultsViewEntity{

    @ViewColumn()
    id_player: number

    @ViewColumn()
    id_tournament:number

    @ViewColumn()
    player_name: string

    @ViewColumn()
    picture: string

    @ViewColumn()
    t_picture: string

    @ViewColumn()
    tournament_name : string

    @ViewColumn()
    sets_played: number

    @ViewColumn()
    sets_winned: number

    @ViewColumn()
    games_played: number

    @ViewColumn()
    games_winned: number

    @ViewColumn()
    format: formats



}