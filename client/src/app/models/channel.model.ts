export class Channel {

  public id: string;
  public type: string;
  public slug: string;
  public name: string;
  public picture_url: string;
  public released: boolean;

  constructor(data?: any) {
    if (data) {
      this.id = data.id;
      this.type = data.type;
      this.slug = data.slug;
      this.name = data.name;
      this.picture_url = data.picture_url;
      this.released = data.released;
    }
  }
}
