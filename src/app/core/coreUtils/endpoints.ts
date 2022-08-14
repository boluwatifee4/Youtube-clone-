import { environment } from "src/environments/environment";

export class Endpoints {
    public static AUTH = `${environment.baseUrl}auth`;
    public static USERS = `${environment.baseUrl}users`;
    public static VIDEOS = `${environment.baseUrl}videos`;
    public static COMMENTS = `${environment.baseUrl}comments`;
    public static REPLIES = `${environment.baseUrl}replies`;
    public static FEELINGS = `${environment.baseUrl}feelings`;
    public static SUBSCRIPTIONS = `${environment.baseUrl}subscriptions`;
    public static HISTORIES = `${environment.baseUrl}histories`;
    public static CATEGORIES = `${environment.baseUrl}categories`;
    public static SEARCH = `${environment.baseUrl}Search`;
}