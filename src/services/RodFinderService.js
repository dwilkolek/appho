class RodFinderService {
  getResults(value) {
    return this.diameters.map((s) => {
      const measuresForCSA = this.measures.filter(
        m => m.diameter === s && value <= m.crossSectionalArea,
      );
      if (measuresForCSA.length > 0) {
        return measuresForCSA[0];
      }
      return null;
    }).filter(e => e !== null).reverse();
  }

  diameters = [6, 8, 10, 12, 14, 16, 18, 20, 22, 25, 28, 32]

  measures = [
    {
      count: 1,
      diameter: 6,
      crossSectionalArea: 0.28,
    },
    {
      count: 2,
      diameter: 6,
      crossSectionalArea: 0.57,
    },
    {
      count: 3,
      diameter: 6,
      crossSectionalArea: 0.85,
    },
    {
      count: 4,
      diameter: 6,
      crossSectionalArea: 1.13,
    },
    {
      count: 5,
      diameter: 6,
      crossSectionalArea: 1.41,
    },
    {
      count: 6,
      diameter: 6,
      crossSectionalArea: 1.7,
    },
    {
      count: 7,
      diameter: 6,
      crossSectionalArea: 1.98,
    },
    {
      count: 8,
      diameter: 6,
      crossSectionalArea: 2.26,
    },
    {
      count: 9,
      diameter: 6,
      crossSectionalArea: 2.54,
    },
    {
      count: 10,
      diameter: 6,
      crossSectionalArea: 2.83,
    },
    {
      count: 11,
      diameter: 6,
      crossSectionalArea: 3.11,
    },
    {
      count: 12,
      diameter: 6,
      crossSectionalArea: 3.39,
    },
    {
      count: 13,
      diameter: 6,
      crossSectionalArea: 3.68,
    },
    {
      count: 14,
      diameter: 6,
      crossSectionalArea: 3.96,
    },
    {
      count: 15,
      diameter: 6,
      crossSectionalArea: 4.24,
    },
    {
      count: 16,
      diameter: 6,
      crossSectionalArea: 4.52,
    },
    {
      count: 17,
      diameter: 6,
      crossSectionalArea: 4.81,
    },
    {
      count: 18,
      diameter: 6,
      crossSectionalArea: 5.09,
    },
    {
      count: 19,
      diameter: 6,
      crossSectionalArea: 5.37,
    },
    {
      count: 20,
      diameter: 6,
      crossSectionalArea: 5.65,
    },
    {
      count: 1,
      diameter: 8,
      crossSectionalArea: 0.5,
    },
    {
      count: 2,
      diameter: 8,
      crossSectionalArea: 1.01,
    },
    {
      count: 3,
      diameter: 8,
      crossSectionalArea: 1.51,
    },
    {
      count: 4,
      diameter: 8,
      crossSectionalArea: 2.01,
    },
    {
      count: 5,
      diameter: 8,
      crossSectionalArea: 2.51,
    },
    {
      count: 6,
      diameter: 8,
      crossSectionalArea: 3.02,
    },
    {
      count: 7,
      diameter: 8,
      crossSectionalArea: 3.52,
    },
    {
      count: 8,
      diameter: 8,
      crossSectionalArea: 4.02,
    },
    {
      count: 9,
      diameter: 8,
      crossSectionalArea: 4.52,
    },
    {
      count: 10,
      diameter: 8,
      crossSectionalArea: 5.03,
    },
    {
      count: 11,
      diameter: 8,
      crossSectionalArea: 5.53,
    },
    {
      count: 12,
      diameter: 8,
      crossSectionalArea: 6.03,
    },
    {
      count: 13,
      diameter: 8,
      crossSectionalArea: 6.53,
    },
    {
      count: 14,
      diameter: 8,
      crossSectionalArea: 7.04,
    },
    {
      count: 15,
      diameter: 8,
      crossSectionalArea: 7.54,
    },
    {
      count: 16,
      diameter: 8,
      crossSectionalArea: 8.04,
    },
    {
      count: 17,
      diameter: 8,
      crossSectionalArea: 8.55,
    },
    {
      count: 18,
      diameter: 8,
      crossSectionalArea: 9.05,
    },
    {
      count: 19,
      diameter: 8,
      crossSectionalArea: 9.55,
    },
    {
      count: 20,
      diameter: 8,
      crossSectionalArea: 10.05,
    },
    {
      count: 1,
      diameter: 10,
      crossSectionalArea: 0.79,
    },
    {
      count: 2,
      diameter: 10,
      crossSectionalArea: 1.57,
    },
    {
      count: 3,
      diameter: 10,
      crossSectionalArea: 2.36,
    },
    {
      count: 4,
      diameter: 10,
      crossSectionalArea: 3.14,
    },
    {
      count: 5,
      diameter: 10,
      crossSectionalArea: 3.93,
    },
    {
      count: 6,
      diameter: 10,
      crossSectionalArea: 4.71,
    },
    {
      count: 7,
      diameter: 10,
      crossSectionalArea: 5.5,
    },
    {
      count: 8,
      diameter: 10,
      crossSectionalArea: 6.28,
    },
    {
      count: 9,
      diameter: 10,
      crossSectionalArea: 7.07,
    },
    {
      count: 10,
      diameter: 10,
      crossSectionalArea: 7.85,
    },
    {
      count: 11,
      diameter: 10,
      crossSectionalArea: 8.64,
    },
    {
      count: 12,
      diameter: 10,
      crossSectionalArea: 9.42,
    },
    {
      count: 13,
      diameter: 10,
      crossSectionalArea: 10.21,
    },
    {
      count: 14,
      diameter: 10,
      crossSectionalArea: 11,
    },
    {
      count: 15,
      diameter: 10,
      crossSectionalArea: 11.78,
    },
    {
      count: 16,
      diameter: 10,
      crossSectionalArea: 12.57,
    },
    {
      count: 17,
      diameter: 10,
      crossSectionalArea: 13.35,
    },
    {
      count: 18,
      diameter: 10,
      crossSectionalArea: 14.14,
    },
    {
      count: 19,
      diameter: 10,
      crossSectionalArea: 14.92,
    },
    {
      count: 20,
      diameter: 10,
      crossSectionalArea: 15.71,
    },
    {
      count: 1,
      diameter: 12,
      crossSectionalArea: 1.13,
    },
    {
      count: 2,
      diameter: 12,
      crossSectionalArea: 2.26,
    },
    {
      count: 3,
      diameter: 12,
      crossSectionalArea: 3.39,
    },
    {
      count: 4,
      diameter: 12,
      crossSectionalArea: 4.52,
    },
    {
      count: 5,
      diameter: 12,
      crossSectionalArea: 5.65,
    },
    {
      count: 6,
      diameter: 12,
      crossSectionalArea: 6.79,
    },
    {
      count: 7,
      diameter: 12,
      crossSectionalArea: 7.92,
    },
    {
      count: 8,
      diameter: 12,
      crossSectionalArea: 9.05,
    },
    {
      count: 9,
      diameter: 12,
      crossSectionalArea: 10.18,
    },
    {
      count: 10,
      diameter: 12,
      crossSectionalArea: 11.31,
    },
    {
      count: 11,
      diameter: 12,
      crossSectionalArea: 12.44,
    },
    {
      count: 12,
      diameter: 12,
      crossSectionalArea: 13.57,
    },
    {
      count: 13,
      diameter: 12,
      crossSectionalArea: 14.7,
    },
    {
      count: 14,
      diameter: 12,
      crossSectionalArea: 15.83,
    },
    {
      count: 15,
      diameter: 12,
      crossSectionalArea: 16.96,
    },
    {
      count: 16,
      diameter: 12,
      crossSectionalArea: 18.1,
    },
    {
      count: 17,
      diameter: 12,
      crossSectionalArea: 19.23,
    },
    {
      count: 18,
      diameter: 12,
      crossSectionalArea: 20.36,
    },
    {
      count: 19,
      diameter: 12,
      crossSectionalArea: 21.49,
    },
    {
      count: 20,
      diameter: 12,
      crossSectionalArea: 22.62,
    },
    {
      count: 1,
      diameter: 14,
      crossSectionalArea: 1.54,
    },
    {
      count: 2,
      diameter: 14,
      crossSectionalArea: 3.08,
    },
    {
      count: 3,
      diameter: 14,
      crossSectionalArea: 4.62,
    },
    {
      count: 4,
      diameter: 14,
      crossSectionalArea: 6.16,
    },
    {
      count: 5,
      diameter: 14,
      crossSectionalArea: 7.7,
    },
    {
      count: 6,
      diameter: 14,
      crossSectionalArea: 9.24,
    },
    {
      count: 7,
      diameter: 14,
      crossSectionalArea: 10.78,
    },
    {
      count: 8,
      diameter: 14,
      crossSectionalArea: 12.32,
    },
    {
      count: 9,
      diameter: 14,
      crossSectionalArea: 13.85,
    },
    {
      count: 10,
      diameter: 14,
      crossSectionalArea: 15.39,
    },
    {
      count: 11,
      diameter: 14,
      crossSectionalArea: 16.93,
    },
    {
      count: 12,
      diameter: 14,
      crossSectionalArea: 18.47,
    },
    {
      count: 13,
      diameter: 14,
      crossSectionalArea: 20.01,
    },
    {
      count: 14,
      diameter: 14,
      crossSectionalArea: 21.55,
    },
    {
      count: 15,
      diameter: 14,
      crossSectionalArea: 23.09,
    },
    {
      count: 16,
      diameter: 14,
      crossSectionalArea: 24.63,
    },
    {
      count: 17,
      diameter: 14,
      crossSectionalArea: 26.17,
    },
    {
      count: 18,
      diameter: 14,
      crossSectionalArea: 27.71,
    },
    {
      count: 19,
      diameter: 14,
      crossSectionalArea: 29.25,
    },
    {
      count: 20,
      diameter: 14,
      crossSectionalArea: 30.79,
    },
    {
      count: 1,
      diameter: 16,
      crossSectionalArea: 2.01,
    },
    {
      count: 2,
      diameter: 16,
      crossSectionalArea: 4.02,
    },
    {
      count: 3,
      diameter: 16,
      crossSectionalArea: 6.03,
    },
    {
      count: 4,
      diameter: 16,
      crossSectionalArea: 8.04,
    },
    {
      count: 5,
      diameter: 16,
      crossSectionalArea: 10.05,
    },
    {
      count: 6,
      diameter: 16,
      crossSectionalArea: 12.06,
    },
    {
      count: 7,
      diameter: 16,
      crossSectionalArea: 14.07,
    },
    {
      count: 8,
      diameter: 16,
      crossSectionalArea: 16.08,
    },
    {
      count: 9,
      diameter: 16,
      crossSectionalArea: 18.1,
    },
    {
      count: 10,
      diameter: 16,
      crossSectionalArea: 20.11,
    },
    {
      count: 11,
      diameter: 16,
      crossSectionalArea: 22.12,
    },
    {
      count: 12,
      diameter: 16,
      crossSectionalArea: 24.13,
    },
    {
      count: 13,
      diameter: 16,
      crossSectionalArea: 26.14,
    },
    {
      count: 14,
      diameter: 16,
      crossSectionalArea: 28.15,
    },
    {
      count: 15,
      diameter: 16,
      crossSectionalArea: 30.16,
    },
    {
      count: 16,
      diameter: 16,
      crossSectionalArea: 32.17,
    },
    {
      count: 17,
      diameter: 16,
      crossSectionalArea: 34.18,
    },
    {
      count: 18,
      diameter: 16,
      crossSectionalArea: 36.19,
    },
    {
      count: 19,
      diameter: 16,
      crossSectionalArea: 38.2,
    },
    {
      count: 20,
      diameter: 16,
      crossSectionalArea: 40.21,
    },
    {
      count: 1,
      diameter: 18,
      crossSectionalArea: 2.54,
    },
    {
      count: 2,
      diameter: 18,
      crossSectionalArea: 5.09,
    },
    {
      count: 3,
      diameter: 18,
      crossSectionalArea: 7.63,
    },
    {
      count: 4,
      diameter: 18,
      crossSectionalArea: 10.18,
    },
    {
      count: 5,
      diameter: 18,
      crossSectionalArea: 12.72,
    },
    {
      count: 6,
      diameter: 18,
      crossSectionalArea: 15.27,
    },
    {
      count: 7,
      diameter: 18,
      crossSectionalArea: 17.81,
    },
    {
      count: 8,
      diameter: 18,
      crossSectionalArea: 20.36,
    },
    {
      count: 9,
      diameter: 18,
      crossSectionalArea: 22.9,
    },
    {
      count: 10,
      diameter: 18,
      crossSectionalArea: 25.45,
    },
    {
      count: 11,
      diameter: 18,
      crossSectionalArea: 27.99,
    },
    {
      count: 12,
      diameter: 18,
      crossSectionalArea: 30.54,
    },
    {
      count: 13,
      diameter: 18,
      crossSectionalArea: 33.08,
    },
    {
      count: 14,
      diameter: 18,
      crossSectionalArea: 35.63,
    },
    {
      count: 15,
      diameter: 18,
      crossSectionalArea: 38.17,
    },
    {
      count: 16,
      diameter: 18,
      crossSectionalArea: 40.72,
    },
    {
      count: 17,
      diameter: 18,
      crossSectionalArea: 43.26,
    },
    {
      count: 18,
      diameter: 18,
      crossSectionalArea: 45.8,
    },
    {
      count: 19,
      diameter: 18,
      crossSectionalArea: 48.35,
    },
    {
      count: 20,
      diameter: 18,
      crossSectionalArea: 50.89,
    },
    {
      count: 1,
      diameter: 20,
      crossSectionalArea: 3.14,
    },
    {
      count: 2,
      diameter: 20,
      crossSectionalArea: 6.28,
    },
    {
      count: 3,
      diameter: 20,
      crossSectionalArea: 9.42,
    },
    {
      count: 4,
      diameter: 20,
      crossSectionalArea: 12.57,
    },
    {
      count: 5,
      diameter: 20,
      crossSectionalArea: 15.71,
    },
    {
      count: 6,
      diameter: 20,
      crossSectionalArea: 18.85,
    },
    {
      count: 7,
      diameter: 20,
      crossSectionalArea: 21.99,
    },
    {
      count: 8,
      diameter: 20,
      crossSectionalArea: 25.13,
    },
    {
      count: 9,
      diameter: 20,
      crossSectionalArea: 28.27,
    },
    {
      count: 10,
      diameter: 20,
      crossSectionalArea: 31.42,
    },
    {
      count: 11,
      diameter: 20,
      crossSectionalArea: 34.56,
    },
    {
      count: 12,
      diameter: 20,
      crossSectionalArea: 37.7,
    },
    {
      count: 13,
      diameter: 20,
      crossSectionalArea: 40.84,
    },
    {
      count: 14,
      diameter: 20,
      crossSectionalArea: 43.98,
    },
    {
      count: 15,
      diameter: 20,
      crossSectionalArea: 47.12,
    },
    {
      count: 16,
      diameter: 20,
      crossSectionalArea: 50.27,
    },
    {
      count: 17,
      diameter: 20,
      crossSectionalArea: 53.41,
    },
    {
      count: 18,
      diameter: 20,
      crossSectionalArea: 56.55,
    },
    {
      count: 19,
      diameter: 20,
      crossSectionalArea: 59.69,
    },
    {
      count: 20,
      diameter: 20,
      crossSectionalArea: 62.83,
    },
    {
      count: 1,
      diameter: 22,
      crossSectionalArea: 3.8,
    },
    {
      count: 2,
      diameter: 22,
      crossSectionalArea: 7.6,
    },
    {
      count: 3,
      diameter: 22,
      crossSectionalArea: 11.4,
    },
    {
      count: 4,
      diameter: 22,
      crossSectionalArea: 15.21,
    },
    {
      count: 5,
      diameter: 22,
      crossSectionalArea: 19.01,
    },
    {
      count: 6,
      diameter: 22,
      crossSectionalArea: 22.81,
    },
    {
      count: 7,
      diameter: 22,
      crossSectionalArea: 26.61,
    },
    {
      count: 8,
      diameter: 22,
      crossSectionalArea: 30.41,
    },
    {
      count: 9,
      diameter: 22,
      crossSectionalArea: 34.21,
    },
    {
      count: 10,
      diameter: 22,
      crossSectionalArea: 38.01,
    },
    {
      count: 11,
      diameter: 22,
      crossSectionalArea: 41.81,
    },
    {
      count: 12,
      diameter: 22,
      crossSectionalArea: 45.62,
    },
    {
      count: 13,
      diameter: 22,
      crossSectionalArea: 49.42,
    },
    {
      count: 14,
      diameter: 22,
      crossSectionalArea: 53.22,
    },
    {
      count: 15,
      diameter: 22,
      crossSectionalArea: 57.02,
    },
    {
      count: 16,
      diameter: 22,
      crossSectionalArea: 60.82,
    },
    {
      count: 17,
      diameter: 22,
      crossSectionalArea: 64.62,
    },
    {
      count: 18,
      diameter: 22,
      crossSectionalArea: 68.42,
    },
    {
      count: 19,
      diameter: 22,
      crossSectionalArea: 72.23,
    },
    {
      count: 20,
      diameter: 22,
      crossSectionalArea: 76.03,
    },
    {
      count: 1,
      diameter: 25,
      crossSectionalArea: 4.91,
    },
    {
      count: 2,
      diameter: 25,
      crossSectionalArea: 9.82,
    },
    {
      count: 3,
      diameter: 25,
      crossSectionalArea: 14.73,
    },
    {
      count: 4,
      diameter: 25,
      crossSectionalArea: 19.63,
    },
    {
      count: 5,
      diameter: 25,
      crossSectionalArea: 24.54,
    },
    {
      count: 6,
      diameter: 25,
      crossSectionalArea: 29.45,
    },
    {
      count: 7,
      diameter: 25,
      crossSectionalArea: 34.36,
    },
    {
      count: 8,
      diameter: 25,
      crossSectionalArea: 39.27,
    },
    {
      count: 9,
      diameter: 25,
      crossSectionalArea: 44.18,
    },
    {
      count: 10,
      diameter: 25,
      crossSectionalArea: 49.09,
    },
    {
      count: 11,
      diameter: 25,
      crossSectionalArea: 54,
    },
    {
      count: 12,
      diameter: 25,
      crossSectionalArea: 58.9,
    },
    {
      count: 13,
      diameter: 25,
      crossSectionalArea: 63.81,
    },
    {
      count: 14,
      diameter: 25,
      crossSectionalArea: 68.72,
    },
    {
      count: 15,
      diameter: 25,
      crossSectionalArea: 73.63,
    },
    {
      count: 16,
      diameter: 25,
      crossSectionalArea: 78.54,
    },
    {
      count: 17,
      diameter: 25,
      crossSectionalArea: 83.45,
    },
    {
      count: 18,
      diameter: 25,
      crossSectionalArea: 88.36,
    },
    {
      count: 19,
      diameter: 25,
      crossSectionalArea: 93.27,
    },
    {
      count: 20,
      diameter: 25,
      crossSectionalArea: 98.17,
    },
    {
      count: 1,
      diameter: 28,
      crossSectionalArea: 6.16,
    },
    {
      count: 2,
      diameter: 28,
      crossSectionalArea: 12.32,
    },
    {
      count: 3,
      diameter: 28,
      crossSectionalArea: 18.47,
    },
    {
      count: 4,
      diameter: 28,
      crossSectionalArea: 24.63,
    },
    {
      count: 5,
      diameter: 28,
      crossSectionalArea: 30.79,
    },
    {
      count: 6,
      diameter: 28,
      crossSectionalArea: 36.95,
    },
    {
      count: 7,
      diameter: 28,
      crossSectionalArea: 43.1,
    },
    {
      count: 8,
      diameter: 28,
      crossSectionalArea: 49.26,
    },
    {
      count: 9,
      diameter: 28,
      crossSectionalArea: 55.42,
    },
    {
      count: 10,
      diameter: 28,
      crossSectionalArea: 61.58,
    },
    {
      count: 11,
      diameter: 28,
      crossSectionalArea: 67.73,
    },
    {
      count: 12,
      diameter: 28,
      crossSectionalArea: 73.89,
    },
    {
      count: 13,
      diameter: 28,
      crossSectionalArea: 80.05,
    },
    {
      count: 14,
      diameter: 28,
      crossSectionalArea: 86.21,
    },
    {
      count: 15,
      diameter: 28,
      crossSectionalArea: 92.36,
    },
    {
      count: 16,
      diameter: 28,
      crossSectionalArea: 98.52,
    },
    {
      count: 17,
      diameter: 28,
      crossSectionalArea: 104.68,
    },
    {
      count: 18,
      diameter: 28,
      crossSectionalArea: 110.84,
    },
    {
      count: 19,
      diameter: 28,
      crossSectionalArea: 116.99,
    },
    {
      count: 20,
      diameter: 28,
      crossSectionalArea: 123.15,
    },
    {
      count: 1,
      diameter: 32,
      crossSectionalArea: 8.04,
    },
    {
      count: 2,
      diameter: 32,
      crossSectionalArea: 16.08,
    },
    {
      count: 3,
      diameter: 32,
      crossSectionalArea: 24.13,
    },
    {
      count: 4,
      diameter: 32,
      crossSectionalArea: 32.17,
    },
    {
      count: 5,
      diameter: 32,
      crossSectionalArea: 40.21,
    },
    {
      count: 6,
      diameter: 32,
      crossSectionalArea: 48.25,
    },
    {
      count: 7,
      diameter: 32,
      crossSectionalArea: 56.3,
    },
    {
      count: 8,
      diameter: 32,
      crossSectionalArea: 64.34,
    },
    {
      count: 9,
      diameter: 32,
      crossSectionalArea: 72.38,
    },
    {
      count: 10,
      diameter: 32,
      crossSectionalArea: 80.42,
    },
    {
      count: 11,
      diameter: 32,
      crossSectionalArea: 88.47,
    },
    {
      count: 12,
      diameter: 32,
      crossSectionalArea: 96.51,
    },
    {
      count: 13,
      diameter: 32,
      crossSectionalArea: 104.55,
    },
    {
      count: 14,
      diameter: 32,
      crossSectionalArea: 112.59,
    },
    {
      count: 15,
      diameter: 32,
      crossSectionalArea: 120.64,
    },
    {
      count: 16,
      diameter: 32,
      crossSectionalArea: 128.68,
    },
    {
      count: 17,
      diameter: 32,
      crossSectionalArea: 136.72,
    },
    {
      count: 18,
      diameter: 32,
      crossSectionalArea: 144.76,
    },
    {
      count: 19,
      diameter: 32,
      crossSectionalArea: 152.81,
    },
    {
      count: 20,
      diameter: 32,
      crossSectionalArea: 160.85,
    },
  ]
}

export default new RodFinderService();
