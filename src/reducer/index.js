export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    //token: 'BQAOsq82vNV1USZoJUSNIpHM8wgX2sKQiPFged2QfUKczIEfAvO72xuAu8WYfaT4JJEB4ybXn8M9Bhhc7U6miMSGd8FAKj6rPW7YdXu0tU0Vburn7eJiXbxBa4XVEpQofXj0tc1w1Kai9Ak74bMI0wSnixJjoZfqkm-yznt2wpV1HnC2'
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state, token: action.token
            };

        case 'SET_PLAYLISTS':
            return {
                ...state, playlists: action.playlists
            };

        case 'SET_PLAYING':
            return {
                ...state, playing: action.playing
            };

        case 'SET_ITEM':
            return {
                ...state, item: action.item
            };

        case 'SET_TOP_ARTISTS':
            return {
                ...state, top_artists: action.top_artists
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state, discover_weekly: action.discover_weekly
            };

        case 'SET_SPOTIFY':
            return {
                ...state, spotify: action.spotify
            };

        default:
            return state;
    }
};

export default reducer;