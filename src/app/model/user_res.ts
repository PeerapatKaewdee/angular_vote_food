export interface UserPostResp {
    uid:       number;
    name:      string;
    type:      number;
    email:     string;
    pass:      string;
    avatar:    string;
    last_name: string;
}
export interface profile {
    avatar:    string;
    uid:       number;

}
export interface foodsImg {
    img:    string;
    fid:       number;

}
export interface foodsData {
    url:    string;
    fid:       number;

}
export interface foods_day_score {
    score:    number;
    // fid:       number;

}
export interface RankingPostResp {
    fid:            number;
    name:           string;
    img:            string;
    score:          number;
    date:           string;
    today_rank:     number;
    yesterday_rank: number;
}