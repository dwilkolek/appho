export default class RoofPressureCoefficients {
    constructor(
        public angle: number,
        public F: RoofPressureInternalCoefficients,
        public G: RoofPressureInternalCoefficients,
        public H: RoofPressureInternalCoefficients,
        public I: RoofPressureInternalCoefficients,
        public J: RoofPressureInternalCoefficients
    ) { }

    public static internal = ['F', 'G', 'H', 'I', 'J'];

    public static empty(angle: number) {
        return new RoofPressureCoefficients(angle, null, null, null, null, null);
    }
}

export class RoofPressureInternalCoefficients {
    constructor(
        public Cpe10: number,
        public Cpe1: number,
        public Cpe10Additional?: number,
        public Cpe1Additional?: number) { }
    public static internal = ['Cpe10', 'Cpe1', 'Cpe10Additional', 'Cpe1Additional'];
}

