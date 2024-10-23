/*let allTeams = []; // To store all teams for searchingfunction fetchAllTeams() {  
    fetch(`${baseUrl}teams?league=39`, { // Fetch all teams from the Premier League method: 'GET',  
    headers: {  
    'X-RapidAPI-Key': apiKey,  
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',  
    }  
    })  
    .then(response => response.json())  
    .then(data => {  
    allTeams = data.response; // Store all teams displayTeams(allTeams); // Display all teams initially })  
    .catch(error => console.error('Error fetching teams:', error));  
   }  
   
   function fetchFixtures(teamId) {  
    fetch(`${baseUrl}fixtures?team=${teamId}&league=39`, { // Fetch fixtures for the selected team method: 'GET',  
    headers: {  
    'X-RapidAPI-Key': apiKey,  
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',  
    }  
    })  
    .then(response => response.json())  
    .then(data => displayFixtures(data.response))  
    .catch(error => console.error('Error fetching fixtures:', error));  
   }  
   
   function fetchPlayers(teamId) {  
    fetch(`${baseUrl}players?team=${teamId}&season=2023`, { // Fetch players for the selected team method: 'GET',  
    headers: {  
    'X-RapidAPI-Key': apiKey,  
    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',  
    }  
    })  
    .then(response => response.json())  
    .then(data => displayPlayers(data.response))  
    .catch(error => console.error('Error fetching players:', error));  
   }  
   
   function displayTeams(teams) {  
    const teamsDiv = document.getElementById('teams');  
    teamsDiv.innerHTML = '';  
    teams.forEach(team => {  
    const teamDiv = document.createElement('div');  
    teamDiv.className = 'team';  
    teamDiv.innerHTML = `<h3>${team.team.name}</h3>`;  
    teamDiv.addEventListener('click', () => {  
    fetchFixtures(team.team.id);  
    fetchPlayers(team.team.id);  
    });  
    teamsDiv.appendChild(teamDiv);  
    });  
   }  
   
   function displayFixtures(fixtures) {  
    const fixturesDiv = document.getElementById('fixtures');  
    fixturesDiv.innerHTML = '';  
    fixtures.forEach(fixture => {  
    const fixtureDiv = document.createElement('div');  
    fixtureDiv.className = 'fixture';  
    fixtureDiv.innerHTML = `<h4>${fixture.teams.home.name} vs ${fixture.teams.away.name}</h4>  
    <p>Date: ${new Date(fixture.date).toLocaleString()}</p>`;  
    fixturesDiv.appendChild(fixtureDiv);  
    });  
   }  
   
   function displayPlayers(players) {  
    const playersDiv = document.getElementById('players');  
    playersDiv.innerHTML = '';  
    players.forEach(player => {  
    const playerDiv = document.createElement('div');  
    playerDiv.className = 'player';  
    playerDiv.innerHTML = `<h4>${player.firstname} ${player.lastname}</h4><p>Position: ${player.position || 'Unknown'}</p>`;  
    playersDiv.appendChild(playerDiv);  
    });  
   }  
   
   function searchTeams() {  
    const searchInput = document.getElementById('teamSearch').value.toLowerCase();  
    const filteredTeams = allTeams.filter(team => {  
    return team.team.name.toLowerCase().includes(searchInput);  
    });  
    displayTeams(filteredTeams);  
   }  
   
   document.getElementById('searchButton').addEventListener('click', searchTeams);   
   // Initialize the appfetchAllTeams();

   /*const teamName = document.getElementById("teamSearch").value.trim();  
   const resultsDiv = document.getElementById("results");  
   resultsDiv.innerHTML = ''; // Clear previous results // Fetch team ID based on team name fetch(`https://api-football.com/teams?name=${teamName}`, {  
   headers: {  
   'X-Auth-Token': API_KEY }  
   })  
   .then(response => response.json())  
   .then(data => {  
   if (data && data.teams && data.teams.length >0) {  
   const teamId = data.teams[0].id; // Get the first team's ID fetchPlayerAndFixtures(teamId);  
   } else {  
   resultsDiv.innerHTML = `<p>No results found for "${teamName}".</p>`;  
   }  
   })  
   .catch(error => {  
   console.error('Error fetching team:', error);  
   resultsDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`;  
   });  
  });  
  
  function fetchPlayerAndFixtures(teamId) {  
   const resultsDiv = document.getElementById("results");  
  
   // Fetch players fetch(`https://api-football.com/teams/${teamId}/players`, {  
   headers: {  
   'X-Auth-Token': API_KEY }  
   })  
   .then(response => response.json())  
   .then(data => {  
   const players = data.players.map(player => `<li>${player.name}</li>`).join('');  
   resultsDiv.innerHTML += `<h2>Players:</h2><ul>${players}</ul>`;  
   })  
   .catch(error => {  
   console.error('Error fetching players:', error);  
   });  
  
   // Fetch fixtures fetch(`https://api-football.com/teams/${teamId}/fixtures`, {  
   headers: {  
   'X-Auth-Token': API_KEY }  
   })  
   .then(response => response.json())  
   .then(data => {  
   const fixtures = data.fixtures.map(fixture => `<li>${fixture.date}: ${fixture.teamHome.name} vs ${fixture.teamAway.name}</li>`).join('');  
   resultsDiv.innerHTML += `<h2>Fixtures:</h2><ul>${fixtures}</ul>`;  
   })  
   .catch(error => {  
   console.error('Error fetching fixtures:', error);  
   });  
  }

//  https://rapidapi.com/api-sports/api/api-nba
//  https://rapidapi.com/developer/dashboard

let options = {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": keyRapidAPI,
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
    }
};

/**
 *  The 'Get NBA Teams' button was pushed
 *      request the list of teams in the conference selected
 *
 *      This is the start of the process. From here you can click on the
 *      team logo and get their list of games and player roster
 */
function getNBATeams() {
    //  the user has entered a conference into the entry field -- east, west, utah, sacromento
    let conference = document.getElementById('conference').value;

    fetch(`https://api-football-v1.p.rapidapi.com/teams?conference=${conference}`, options)
        .then(response => response.json())
        .then(teams => showNBATeams(teams.response))       //  this function will list all teams in the conference
        .catch(err => console.error(err));
}

/**
 *  Create the HTML to show the team logo and name
 *  clicking on the logo will trigger a request to show the players and the games
 *
 *  I added an event listener on the image to call the GetGameAndRoster function
 */
function showNBATeams(teams) {
    let teamList = document.getElementById('teamList');
    let html = `<div class="row">`;
    for (let team of teams) {
        if (!team.logo) team.logo = '/images/NBA-Logo.jpg';
        html += `<div class="w3-col m4 l2 bball-card" style="border-style: solid">
				<img src='${team.logo}' alt="" onclick='getGamesAndRoster(${team.id})'>
			    <h6>${team.name} - ${team.id}</h6>
        </div>`;
    }
    teamList.innerHTML = html +'</div>';
}

/**
 *      Using the teamId call the two methods that will
 *      request the team roster AND list of games for that team
 */
function getGamesAndRoster(teamId) {
    getNBATeamRoster(teamId);
    getNBAGameStats(teamId, "2015");
    getNBAGameStats(teamId, "2016");
    getNBAGameStats(teamId, "2017");
    getNBAGameStats(teamId, "2018");
    getNBAGameStats(teamId, "2019");
    getNBAGameStats(teamId, "2020");
    getNBAGameStats(teamId, "2021");
    getNBAGameStats(teamId, "2022");
    getNBAGameStats(teamId, "2023");
    openTab(document.getElementById('rosterBtn'), 'rosterTab')
}

/**
 *      API request to get the team roster
 */
function getNBATeamRoster(teamId) {
    fetch(`https://api-football-v1.p.rapidapi.com/players?team=${teamId}&season=2023`, options)
        .then(response => response.json())
        .then(roster => showNBATeamRoster(roster.response, teamId))
        .catch(err => console.error(err));
}

/**
 * 
 *      Roster
 *
 *      Player data is added to a <TR> tag
 *          there are a few other fields like weight and height
 *          the leagues I confess I do not understand. Who knew there was a utah, vegas and sacramento league?
 *
 *          An event is added to the player name. Click on the name to get the players list of games
 */
let row = 0;
function showNBATeamRoster(players, teamId) {
    let teamTable = document.getElementById('rosterRows');
    document.getElementById('players').innerHTML = `Players - ${teamId}`;
    let html = ``;
    for (let player of players) {
        let playerId;
        if      (player.leagues.standard   !== undefined)    playerId = player.leagues.standard;
        else if (player.leagues.utah       !== undefined)    playerId = player.leagues.utah;
        else if (player.leagues.vegas      !== undefined)    playerId = player.leagues.vegas;
        else if (player.leagues.sacramento !== undefined)    playerId = player.leagues.sacramento;
        else                                                 playerId = {pos: 'none', jersey: JSON.stringify(player.leagues)};
        row++;
        html += `
        <tr class="w3-theme-${row%2===1?'l2':'l3'}">
			<td onclick="getNBAPlayerStats(${player.id}, '${player.firstname} ${player.lastname}')"><a>${playerId.jersey} - ${player.firstname} ${player.lastname}<a/></td>
            <td>${player.college} Pro: ${player.nba.start}</td>
            <td>${player.birth.date} - ${player.birth.country}</td>
            <td>${player.height.feets}' ${player.height.inches}" - ${player.weight.pounds} lbs</td>
			<td>${playerId.pos}</td>
        </tr>`;
    }
    teamTable.innerHTML = html + '</table>';
}

/**
 * 
 *  GameStats
 * 
 *      get a list of all games played for a team
 *
 *
 */
function getNBAGameStats(teamId, season) {
    fetch(`https://api-nba-v1.p.rapidapi.com/games?team=${teamId}&season=${season}`, options)
        .then(response => response.json()) //  wait for the response and convert it to JSON
        .then(stats => showTeamGameStats(stats.response, season))
        .catch(err => console.error(err));
}

/**
 *      Show game stats
 *      Home and Visitors teams and scores and where the game was played
 *
 *      the next step for this app is to put the years each in their own tab
 */
function showTeamGameStats(games, season) {
        gamesByYear(games, 'G' + season);
}

function gamesByYear(games, tab) {
    let teamTable = document.getElementById(tab + 'Rows');
    console.log(tab);
    console.log(teamTable);
    if (teamTable == null) return;
    let html = ``;
    for (let game of games) {
        row++;
        html = `<tr class="w3-theme-${row%2>0?'l2':'l3'}">
		        <td>${game.arena.name} </td><td>${game.arena.city}</td>
		        <td onclick='getGamesAndRoster(${game.teams.home.teamId})'><img src='${game.teams.home.logo}' alt="" width=100px height=100px>${game.teams.home.name}</td><td>${game.scores.home.points}</td>
		        <td onclick='getGamesAndRoster(${game.teams.visitors.teamId})'><img src='${game.teams.visitors.logo}' alt="" width=100px height=100px>${game.teams.visitors.name}</td><td>${game.scores.visitors.points}</td>
            </tr>`;
        teamTable.innerHTML += html;
    }
}

/**
 * 
 *  PlayerStats 
 * 
 *      get a list of all games played for this player
 *
 *
 */
function getNBAPlayerStats(playerId, playerName) {
    fetch(`https://api-nba-v1.p.rapidapi.com/players/statistics?id=${playerId}&season=2023`, options)
        .then(response => response.json()) //  wait for the response and convert it to JSON
        .then(playerStats => showNBAPlayerStats(playerStats.response, playerName))
        .catch(err => console.error(err));
}

/**
 *      The player stats have a LOT of numbers
 *      which is ok since that is what this app is all about
 *      with some additional effort the team they played for and team logo could be displayed
 *      but who wants to do that?
 */
function showNBAPlayerStats(playerStats, playerName) {
    let stats = document.getElementById('playerRows');
    document.getElementById('player').innerText = `Games Stats for: ${playerName}`;

    openTab(document.getElementById('playerBtn'), 'playerTab')

    let html = ``;
    for (let stats of playerStats) {
        if (stats.points === "") continue;      //  skip games not played
        row++;
        html += `
        <tr class="w3-theme-${row%2>0?'l2':'l3'}">
            <td>${stats.points}</td>   <td>${stats.min}</td>     <td>${stats.fgm}</td>  <td>${stats.fga}</td>  <td>${stats.fgp}</td>
            <td>${stats.ftm}</td>      <td>${stats.fta}</td>     <td>${stats.ftp}</td>  <td>${stats.tpm}</td>  <td>${stats.tpa}</td>
            <td>${stats.tpp}</td>      <td>${stats.offReb}</td>  <td>${stats.defReb}</td>  <td>${stats.totReb}</td>  <td>${stats.assists}</td>
            <td>${stats.pFouls}</td>   <td>${stats.steals}</td>  <td>${stats.turnovers}</td>  <td>${stats.blocks}</td>  <td>${stats.plusMinus}</td>
        </tr>`;
    }
    stats.innerHTML = html;
}

/**
 *  OpenTab
 *        Disable all tabContent windows and show the select tab panel
 *
 */
function openTab(target, tabName) {
    var i, tabcontent, tablinks;
    //  hide all tabcontent divs
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    //  inactivate (remove the active class) from all tab buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        // tablinks[i].className = tablinks[i].className.replace(" active", "");
        tablinks[i].classList.remove("active");
    }

    //  make the desired tab content visible
    document.getElementById(tabName).style.display = "block";

    //  make the tab button display as the active tab
    target.className += " active";
}
