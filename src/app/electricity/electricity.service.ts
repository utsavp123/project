import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { allState, circleId, getCircle, GetDataApi, getDiscom, newData, stateId } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ElectricityService {

  constructor(private http: HttpClient) { }

  getData(data: GetDataApi) {
    return this.http.post<newData[]>("https://urjamitra.com/rec/getOutageReportStateWise", data);
  }

  getState() {
    return this.http.post<any>("https://urjamitra.com/rec/readAllState", {});
  }
  getDiscom(data: stateId) {
    return this.http.post<getDiscom[]>("https://urjamitra.com/rec/getAllDiscomByStateID", data);
  }
  getCircle(data: circleId) {
    return this.http.post<getCircle[]>("https://urjamitra.com/rec/getCircleByDisComId", data);
  }

}

