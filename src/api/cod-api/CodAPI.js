import APIRequestHandler from '../util/APIRequestHandler';
import Endpoints from './Endpoints';
import Games from './Games';
import Platforms from './Platforms';

class CodAPI {
    static validate(username, game = Games.BO4 , platform = Platforms.BATTLE_NET) {
        return APIRequestHandler.query(`${Endpoints.VALIDATE}/${game}/${sanitizeUsername(username)}/${platform}`);
    }

    static getUserStats(username, game = Games.BO4 , platform = Platforms.BATTLE_NET) {
        console.log(`${Endpoints.STATS}/${game}/${sanitizeUsername(username)}/${platform}`);
        return APIRequestHandler.query(`${Endpoints.STATS}/${game}/${sanitizeUsername(username)}/${platform}`);
    }
}

/**
 *
 * @param {string} username
 */
function sanitizeUsername(username) {
    return username.replace('#', '%23');
}

export default CodAPI;