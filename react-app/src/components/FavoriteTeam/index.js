import { useReducer } from "react";

return (
    <div className="team-info">
        <div className="team-header">{user.favoriteTeam.name} Info </div>
        <div> Championships: {favoriteTeam.championships} </div>
        <div> Record: {favoriteTeam.wins} - {favoriteTeam.losses} ({place}) </div>
        <div> NEXT HOME GAME</div>
    </div>
)