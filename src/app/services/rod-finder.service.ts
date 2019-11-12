import { Injectable } from '@angular/core';
import { RodMeasure } from '../model/rod-measure.model';

@Injectable({
  providedIn: 'root'
})
export class RodFinderService {

  private measures: RodMeasure[] = [];
  private diameters: number[] = [];
  constructor() {
    this.measures.push(
      ...[0.28, 0.57, 0.85, 1.13, 1.41, 1.70, 1.98, 2.26, 2.54, 2.83, 3.11, 3.39, 3.68, 3.96,
        4.24, 4.52, 4.81, 5.09, 5.37, 5.65]
        .map((val, index) => new RodMeasure(index + 1, 6, val)));
    this.measures.push(
      ...[0.50, 1.01, 1.51, 2.01, 2.51, 3.02, 3.52, 4.02, 4.52, 5.03, 5.53, 6.03, 6.53, 7.04,
        7.54, 8.04, 8.55, 9.05, 9.55, 10.05]
        .map((val, index) => new RodMeasure(index + 1, 8, val)));
    this.measures.push(
      ...[0.79, 1.57, 2.36, 3.14, 3.93, 4.71, 5.50, 6.28, 7.07, 7.85, 8.64, 9.42, 10.21, 11.00,
        11.78, 12.57, 13.35, 14.14, 14.92, 15.71]
        .map((val, index) => new RodMeasure(index + 1, 10, val)));
    this.measures.push(
      ...[1.13, 2.26, 3.39, 4.52, 5.65, 6.79, 7.92, 9.05, 10.18, 11.31, 12.44, 13.57, 14.70,
        15.83, 16.96, 18.10, 19.23, 20.36, 21.49, 22.62]
        .map((val, index) => new RodMeasure(index + 1, 12, val)));
    this.measures.push(
      ...[1.54, 3.08, 4.62, 6.16, 7.70, 9.24, 10.78, 12.32, 13.85, 15.39, 16.93, 18.47, 20.01,
        21.55, 23.09, 24.63, 26.17, 27.71, 29.25, 30.79]
        .map((val, index) => new RodMeasure(index + 1, 14, val)));
    this.measures.push(
      ...[2.01, 4.02, 6.03, 8.04, 10.05, 12.06, 14.07, 16.08, 18.10, 20.11, 22.12, 24.13, 26.14,
        28.15, 30.16, 32.17, 34.18, 36.19, 38.20, 40.21]
        .map((val, index) => new RodMeasure(index + 1, 16, val)));
    this.measures.push(
      ...[2.54, 5.09, 7.63, 10.18, 12.72, 15.27, 17.81, 20.36, 22.90, 25.45, 27.99, 30.54, 33.08,
        35.63, 38.17, 40.72, 43.26, 45.80, 48.35, 50.89]
        .map((val, index) => new RodMeasure(index + 1, 18, val)));
    this.measures.push(
      ...[3.14, 6.28, 9.42, 12.57, 15.71, 18.85, 21.99, 25.13, 28.27, 31.42, 34.56, 37.70, 40.84,
        43.98, 47.12, 50.27, 53.41, 56.55, 59.69, 62.83]
        .map((val, index) => new RodMeasure(index + 1, 20, val)));
    this.measures.push(
      ...[3.80, 7.60, 11.40, 15.21, 19.01, 22.81, 26.61, 30.41, 34.21, 38.01, 41.81, 45.62, 49.42,
        53.22, 57.02, 60.82, 64.62, 68.42, 72.23, 76.03]
        .map((val, index) => new RodMeasure(index + 1, 22, val)));
    this.measures.push(
      ...[4.91, 9.82, 14.73, 19.63, 24.54, 29.45, 34.36, 39.27, 44.18, 49.09, 54.00, 58.90, 63.81,
        68.72, 73.63, 78.54, 83.45, 88.36, 93.27, 98.17]
        .map((val, index) => new RodMeasure(index + 1, 25, val)));
    this.measures.push(
      ...[6.16, 12.32, 18.47, 24.63, 30.79, 36.95, 43.10, 49.26, 55.42, 61.58, 67.73, 73.89, 80.05,
        86.21, 92.36, 98.52, 104.68, 110.84, 116.99, 123.15]
        .map((val, index) => new RodMeasure(index + 1, 28, val)));
    this.measures.push(
      ...[8.04, 16.08, 24.13, 32.17, 40.21, 48.25, 56.30, 64.34, 72.38, 80.42, 88.47, 96.51,
        104.55, 112.59, 120.64, 128.68, 136.72, 144.76, 152.81, 160.85]
        .map((val, index) => new RodMeasure(index + 1, 32, val)));
    this.diameters = this.measures.map(m => m.diameter);
    this.diameters = this.diameters.filter((s, i) => this.diameters.indexOf(s) === i);
  }

  getRodOptions(value: number): RodMeasure[] {
    return this.diameters.map(s => {
      const measuresForCSA = this.measures.filter(m => m.diameter === s && value <= m.crossSectionalArea);
      if (measuresForCSA.length > 0) {
        return measuresForCSA[0];
      } else {
        return null;
      }
    }).filter(e => e !== null).reverse();

  }
}
