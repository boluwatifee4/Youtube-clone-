import { environment } from "src/environments/environment";

export class Endpoints {
    public static AUTH = `${environment.baseUrl}auth`;
    public static USERS = `${environment.baseUrl}users`;
    public static VIDEO = `${environment.youtubeAPI}videos`;
    public static YOUTUBE_VIDEOS = `${environment.youtubeAPI}search`;
    public static YOUTUBE_CHANNELS = `${environment.youtubeAPI}channels`;
    public static COMMENTS = `${environment.youtubeAPI}comments`;
    public static REPLIES = `${environment.baseUrl}replies`;
    public static FEELINGS = `${environment.baseUrl}feelings`;
    public static SUBSCRIPTIONS = `${environment.baseUrl}subscriptions`;
    public static HISTORIES = `${environment.baseUrl}histories`;
    public static CATEGORIES = `${environment.baseUrl}categories`;
    public static SEARCH = `${environment.baseUrl}Search`;
    public static API_KEY = `${environment.myYoutubeApiKey}`;
}