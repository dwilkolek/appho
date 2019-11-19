function rpc(angle, F, G, H, I, J) {
  return {
    angle,
    F,
    G,
    H,
    I,
    J,
  };
}
function rpic(cpe10, cpe1, cpe10a, cpe1a) {
  return {
    cpe10,
    cpe1: cpe1 || cpe10,
    cpe10a,
    cpe1a: cpe10a || cpe1a,
  };
}

class PreasureCOefficientService {
  coefficients0 = [
    rpc(-45, rpic(-0.6), rpic(-0.6), rpic(-0.8), rpic(-0.7), rpic(-1, -1.5)),
    rpc(
      -30,
      rpic(-1.1, -2),
      rpic(-0.8, -1.5),
      rpic(-0.8),
      rpic(-0.6),
      rpic(-0.8, -1.4),
    ),
    rpc(
      -15,
      rpic(-2.5, -2),
      rpic(-1.3, -2.0),
      rpic(-0.9, -1.2),
      rpic(-0.5),
      rpic(-0.7, -1.2),
    ),
    rpc(
      -5,
      rpic(-2.3, -2.5),
      rpic(-1.2, -2.0),
      rpic(-0.8, -1.2),
      rpic(0.2, 0.2, -0.6, -0.6),
    ),
    rpc(
      5,
      rpic(-1.7, -2.5, 0),
      rpic(-1.2, -2.0, 0),
      rpic(-0.6, -1.2, 0),
      rpic(-0.6, -0.6, -0.6, -0.6),
      rpic(0.2, 0.2, -0.6, -0.6),
    ),
    rpc(
      15,
      rpic(-0.9, -2.0, 0.2),
      rpic(-0.8, -1.5, 0.2),
      rpic(-0.3, -0.3, 0.2, 0.2),
      rpic(-0.4, -0.4, 0, 0),
      rpic(-1, -1.5, 0, 0),
    ),
    rpc(
      30,
      rpic(-0.5, -1.5, 0.7, 0.7),
      rpic(-0.5, -1.5, 0.7, 0.7),
      rpic(-0.2, -0.2, 0.4, 0.4),
      rpic(-0.4, -0.4, 0, 0),
      rpic(-0.5, -0.5, 0, 0),
    ),
    rpc(
      45,
      rpic(0, 0, 0.7, 0.7),
      rpic(0, 0, 0.7, 0.7),
      rpic(0, 0, 0.6, 0.6),
      rpic(-0.2, -0.2, 0, 0),
      rpic(-0.3, -0.3, 0, 0),
    ),
    rpc(60, rpic(0.7), rpic(0.7), rpic(0.7), rpic(-0.2), rpic(-0.3)),
    rpc(75, rpic(0.8), rpic(0.8), rpic(0.8), rpic(-0.2), rpic(-0.3)),
  ];

  coefficients90 = [
    rpc(-45, rpic(-1.4, -2.0), rpic(-1.2, -2.0), rpic(-1.0, -1.3), rpic(-0.9, -1.2)),
    rpc(-30, rpic(-1.5, -2.1), rpic(-1.2, -2.0), rpic(-1.0, -1.3), rpic(-0.9, -1.2)),
    rpc(-15, rpic(-1.9, -2.5), rpic(-1.2, -2.0), rpic(-0.8, -1.2), rpic(-0.8, -1.2)),
    rpc(-5, rpic(-1.8, -2.5), rpic(-1.2, -2.0), rpic(-0.7, -1.2), rpic(-0.8, -1.2)),
    rpc(5, rpic(-1.6, -2.2), rpic(-1.3, -2.0), rpic(-0.7, -1.2), rpic(-0.6)),
    rpc(15, rpic(-1.3, -2.0), rpic(-1.3, -2.0), rpic(-0.6, -1.2), rpic(-0.5)),
    rpc(30, rpic(-1.1, -1.5), rpic(-1.4, -2.0), rpic(-0.8, -1.2), rpic(-0.5)),
    rpc(45, rpic(-1.1, -1.5), rpic(-1.4, -2.0), rpic(-0.9, -1.2), rpic(-0.5)),
    rpc(60, rpic(-1.1, -1.5), rpic(-1.2, -2.0), rpic(-0.8, -1.0), rpic(-0.5)),
    rpc(75, rpic(-1.1, -1.5), rpic(-1.2, -2.0), rpic(-0.8, -1.0), rpic(-0.5)),
  ]

  getCoefficientsFor0(angle) {
    return PreasureCOefficientService.getEstimation(angle, this.coefficients0);
  }

  getCoefficientsFor90(angle) {
    return PreasureCOefficientService.getEstimation(angle, this.coefficients90);
  }

  static getEstimation(angle, data) {
    angle = parseFloat(angle);
    const limits = PreasureCOefficientService.getLimits(angle, data);
    if (limits.length === 1 && limits[0].angle === angle) {
      return limits[0];
    }

    const V1 = limits[0];
    const V2 = limits[1];
    const letters = ['F', 'G', 'H', 'I', 'J'];
    const coefs = ['cpe10', 'cpe1', 'cpe10a', 'cpe1a'];
    const result = { angle };
    letters.forEach((letter) => {
      result[letter] = {};
      coefs.forEach((coef) => {
        if (V1[letter] && V2[letter]) {
          let v1;
          let v2;
          const isCoefAdditional = coef === 'Cpe10Additional' || coef === 'Cpe1Additional';
          let coefAdditionalUsed = false;
          if (coef === 'Cpe10Additional') {
            const y1 = V1[letter][coef] || V1[letter][coef] === 0
              ? V1[letter][coef]
              : V1[letter].Cpe10;
            const y2 = V2[letter][coef] || V2[letter][coef] === 0
              ? V2[letter][coef]
              : V2[letter].Cpe10;
            v1 = { x: V1.angle, y: y1 };
            v2 = { x: V2.angle, y: y2 };
            coefAdditionalUsed = y1 !== V1[letter].Cpe10 || y2 !== V2[letter].Cpe10;
          } else if (coef === 'Cpe1Additional') {
            const y1 = V1[letter][coef] || V1[letter][coef] === 0
              ? V1[letter][coef]
              : V1[letter].Cpe1;
            const y2 = V2[letter][coef] || V2[letter][coef] === 0
              ? V2[letter][coef]
              : V2[letter].Cpe1;
            v1 = { x: V1.angle, y: y1 };
            v2 = { x: V2.angle, y: y2 };
            coefAdditionalUsed = y1 !== V1[letter].Cpe1 || y2 !== V2[letter].Cpe1;
          } else {
            v1 = { x: V1.angle, y: V1[letter][coef] };
            v2 = { x: V2.angle, y: V2[letter][coef] };
          }
          if (!isCoefAdditional || (isCoefAdditional && coefAdditionalUsed)) {
            result[letter][coef] = this.getY(angle, v1, v2);
          }
        }
      });
      if (Object.keys(result[letter]).length === 0) {
        delete result[letter];
      }
    });
    return result;
  }

  static getLimits(angle, data) {
    const prefilter = data.filter(r => r.angle === angle);
    if (prefilter.length === 1) {
      return prefilter;
    }

    const angleList = [...(data.map(r => r.angle)), angle].sort((a, b) => a - b);
    const posOfAngle = angleList.indexOf(angle);


    const limits = angleList.splice(posOfAngle - 1, 3);
    limits.splice(1, 1);
    return limits.map(l => data.filter(d => d.angle === l)[0]);
  }

  static getY(angle, v1, v2) {
    const a = (v2.y - v1.y) / (v2.x - v1.x);
    return Math.round((a * (angle - v1.x) + v1.y) * 10000) / 10000;
  }
}

export default new PreasureCOefficientService();
