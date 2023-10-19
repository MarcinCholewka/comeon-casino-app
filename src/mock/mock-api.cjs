const players = {
  rebecka: {
    name: 'Rebecka Awesome',
    avatar: 'src/assets/avatar/rebecka.jpg',
    event: 'Last seen gambling on Starburst.',
    password: 'secret',
  },
  eric: {
    name: 'Eric Beard',
    avatar: 'src/assets/avatar/eric.jpg',
    event: 'I saw you won 500 SEK last time!',
    password: 'dad',
  },
  stoffe: {
    name: 'Stoffe Rocker',
    avatar: 'src/assets/avatar/stoffe.jpg',
    event: 'Your are a rock star',
    password: 'rock',
  },
};

module.exports = (request, response, next) => {
  if (request.method === 'POST') {
    if (request.path === '/login') {
      const username = request.body.username;
      const password = request.body.password;

      console.log(username);

      if (username in players && players[username].password === password) {
        //Creating a copy of player
        const player = Object.assign({}, players[username]);

        delete player.password;

        response.status(200).json({
          status: 'success',
          player,
        });
      } else {
        response.status(400).json({
          status: 'fail',
          error: 'player does not exist or wrong password',
        });
      }
    } else if (request.path === '/logout') {
      const username = request.body.username;

      if (username in players) {
        response.status(200).json({
          status: 'success',
        });
      } else {
        response.status(400).json({
          status: 'fail',
          error: 'Username do not match!',
        });
      }
    }
  } else {
    next();
  }
};
