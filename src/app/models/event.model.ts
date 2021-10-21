export class Event {
  constructor(
    public eventId: string,
    public eventName: string,
    public eventType: string,
    public eventDate: string,
    public eventImages: any[],
    public myImages: any[],
    public headliningArtists: any[],
    public supportingArtists: any[],
    public posterArtist: string,
    public venue: any,
    public audio: any,
    public setlist: any
  ) {}
}
