export interface flightType {
  type: string;
  label: string;
}

export interface CitiesModule {
  airportCode: string;
  airportName: string;
  cityName: string;
  cityCode: string;
  countryCode: string;
  countryName: string;
  regionName: string;
  type?: string;
}
// export interface searchBoxModel{
//     flightType: string
//     Direct: boolean
//     Flights: searchBoxFlights[]
//     passengers:searchBoxPassengers
//     class:string
//     returnDate:string
// }

// export interface searchBoxFlights{
//     departing:string
//     landing:string
//     departingD:string|null
// }

// export interface searchBoxPassengers{
//     adults:number | undefined
//     child:number | undefined
//     infent:number | undefined
// }
