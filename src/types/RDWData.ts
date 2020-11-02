type RawAreaManager = {
  areamanagerid: number
  areamanagerdesc: string
  startdateareamanagerid: number
  enddateareamanagerid: number
  url: string
}

type RawFarePart = {
  areamanagerid: number
  farecalculationcode: string
  startdatefarepart: number
  enddatefarepart: number
  startdurationfarepart: number
  enddurationfarepart: number
  amountfarepart: number
  stepsizefarepart: number
  amountcumulative: number
}

type RawFareCalculation = {
  areamanagerid: number
  farecalculationcode: string
  startdatefare: number
  enddatefare: number
  farecalculationdesc: string
  vatpercentage: number
}

type RawArea = {
  areamanagerid: number
  areaid: string
  areadesc: string
  startdatearea: string
  enddatearea: string
  usageid: string
}

type RawUsageGoal = {
  areamanagerid: number
  usageid: string
  usageiddesc: string
  startdateusageid: number
  enddateusageid: number
  specificationindicator: string
  superiorareamanagerid: number
  superiorusageid: string
}

type RawAreaSpecification = {
  areamanagerid: number
  areaid: string
  startdatespecifications: number
  capacity: number
  enddatespecifications: number
  chargingpointcapacity: number
  disabledaccess: number
  maximumvehicleheight: number
}

type RawGeometry = {
  areamanagerid: string
  areaid: string
  startdatearea: string
  areageometryastext: string
}

type RawParkingOpen = {
  areamanagerid: number
  areaid: string
  periodname: string
  startofperiod: number
  endofperiod: number
  exitpossibleallday: number
  openallyear: number
}

type RawParkingEntrance = {
  areamanagerid: number
  areaid: string
  startofperiod: number
  endofperiod: number
  days: string
  enterfrom: number
  enteruntil: number
}

type RawData = [
  RawAreaManager[],
  RawFarePart[],
  RawFareCalculation[],
  RawArea[],
  RawUsageGoal[],
  RawAreaSpecification[],
  RawGeometry[],
  RawParkingOpen[]
]

type Fare = {
  description: string
  amount: number
  stepSize: number
  dateFirstUsed: Date
  dateLastUsed: Date
}

type Coordinates = {
  long: number
  lat: number
}

type ExitPossibleAllDay = {
  exitPossibleAllDay: boolean
  dateFirstUsed: Date
  dateLastUsed: Date
}

type Area = {
  id: string
  description: string
  usage: string
  capacity: number
  coordinates: Coordinates
  exitPossibleAllDay: ExitPossibleAllDay[]
}

//eslint-disable-next-line
type AreaManager = {
  id: number
  description: string
  fares: Fare[]
  parkingAreas: Area[]
}
