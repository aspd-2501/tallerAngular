export class Serie {
    num: number;
    name: String;
    channel: String;
    seasons: number;
    description: String;
    image: String;
    url: String;

    public constructor(num: number, name: String, channel: String, seasons: number, description: String, image: String, url: String) {
        this.num = num;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.image = image;
        this.url = url;
    }



}
