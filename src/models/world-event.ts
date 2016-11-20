export class WorldEvent {
    constructor(
        public actor_quotes: any,
        public datetime_end: Date,
        public datetime_start: Date,
        public id: number,
        public location_name: string,
        public present_actors: string[],
        public secondary_actors: string[],
        public source: string[],
        public subject: string,
        public summary: string,
        public title: string,
        public type: string,
        public wgs84_lat: number,
        public wgs84_long: number
    ){}
}