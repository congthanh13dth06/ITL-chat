import { MyResponse } from "./api/request";
import { type IResponseApiLogout, type IPayloadApiGetRoom, type IResponseApiGetRoom, type IResponseApiCheckRoom, type IPayloadApiCreateRoom, type IResponseApiCreateRoom, type IPayloadApiGetMessage, type IResponseApiGetMessage } from "./api/types";
declare class SDK {
    private static instance;
    private client;
    private apiURL;
    private apiURLBasicAuth;
    private baseURL;
    private appId;
    private synapseDomain;
    private userId;
    private accessToken;
    private externalId;
    static init(): SDK;
    constructor();
    setApiURL(apiURL: string, username: string, password: string): this;
    setBaseURL(baseURL: string): this;
    setAppId(appId: string): this;
    setSynapseDomain(synapseDomain: string): this;
    setUserId(userId: string): this;
    private setAccessToken;
    private setExternalId;
    start(): Promise<void>;
    private login;
    logout(): Promise<MyResponse<IResponseApiLogout>>;
    getRoom(payload: IPayloadApiGetRoom): Promise<MyResponse<IResponseApiGetRoom>>;
    checkRoom(externalId: string): Promise<MyResponse<IResponseApiCheckRoom[]>>;
    createRoom(payload: IPayloadApiCreateRoom): Promise<MyResponse<IResponseApiCreateRoom[]>>;
    deleteRoom(roomIds: string[]): Promise<MyResponse>;
    muteRoom(roomId: string): Promise<MyResponse>;
    unMuteRoom(roomId: string): Promise<MyResponse>;
    getMessage(payload: IPayloadApiGetMessage): Promise<MyResponse<IResponseApiGetMessage>>;
    sendMessage(roomId: string, content: string): Promise<MyResponse>;
    private uploadMedia;
    sendMessageImage(roomId: string, image: File): Promise<MyResponse>;
    sendMessageFile(roomId: string, image: File): Promise<MyResponse>;
}
export { SDK };
