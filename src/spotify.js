export const authEndpoint ="https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientID="9bad0f44737547dcb5a379c51be8117c";


// MY ACCESS-RIGHTS
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state", 
];
// After login getting token from url and split it 
export const getTokenFromUrl=()=>{
    return window.location.hash
    .substring(1).split("&").reduce((initial,item)=>{
        let parts=item.split("=");
        initial[parts[0]]=decodeURIComponent(parts[1]);
        return initial;
    },{});
};
// login url
export const loginUrl = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;