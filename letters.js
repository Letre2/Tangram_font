// Helper
let seitenLängeSmall = Math.sqrt(Math.pow(1, 2) + Math.pow(1, 2)); // Seitenlänge vom kleinem Dreieck
let seitenLängeLarge = Math.sqrt(Math.pow(2, 2) + Math.pow(2, 2)); // Seitenlänge vom großem Dreieck

// Letters
const letters = {
  "tangram1": {
    triangleLarge1: {
      r: 0,
      x: 0,
      y: 0
    },
    triangleLarge2: {
      r: 90,
      x: 0,
      y: -4
    },
    triangleMiddle1: {
      r: 45,
      x: 2,
      y: -4
    },
    triangleSmall1: {
      r: -90,
      x: 3,
      y: -1
    },
    triangleSmall2: {
      r: 180,
      x: 2,
      y: -4
    },
    rectangle1: {
      r: -45,
      x: 2,
      y: -2
    },
    parallelogram1: {
      r: -90,
      x: 4,
      y: 0
    },
    parallelogram2: {
      r: -90,
      x: 0,
      y: 0
    }
  },
  "tangram2": {
    triangleLarge1: {
      r: 0,
      x: 0,
      y: 0
    },
    triangleLarge2: {
      r: -90,
      x: 4,
      y: 0
    },
    triangleMiddle1: {
      r: -45,
      x: 0,
      y: -2
    },
    triangleSmall1: {
      r: 90,
      x: 1,
      y: -3
    },
    triangleSmall2: {
      r: 180,
      x: 4,
      y: -4
    },
    rectangle1: {
      r: -45,
      x: 2,
      y: -2
    },
    parallelogram1: {
      r: -90,
      x: 4,
      y: 0
    },
    parallelogram2: {
      r: -90,
      x: 0,
      y: 0
    }
  },
  "A": {
    triangleLarge1: {
      r: 135,
      x: seitenLängeLarge + seitenLängeSmall,
      y: -seitenLängeLarge
    },
    triangleLarge2: {
      r: 135,
      x: seitenLängeLarge,
      y: -seitenLängeLarge - seitenLängeSmall
    },
    triangleMiddle1: {
      r: 180,
      x: seitenLängeSmall + seitenLängeSmall,
      y: -seitenLängeSmall
    },
    triangleSmall1: {
      r: -45,
      x: seitenLängeLarge,
      y: -seitenLängeSmall
    },
    triangleSmall2: {
      r: 135,
      x: seitenLängeSmall,
      y: -seitenLängeLarge - seitenLängeSmall - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: seitenLängeLarge,
      y: -seitenLängeLarge
    },
    parallelogram1: {
      r: 225,
      x: seitenLängeLarge + seitenLängeSmall,
      y: -seitenLängeLarge - seitenLängeSmall
    },
  },
  "B": {
    triangleLarge1: {
      r: 225,
      x: seitenLängeSmall + seitenLängeLarge,
      y: 0
    },
    triangleLarge2: {
      r: 45,
      x: seitenLängeSmall,
      y: -seitenLängeLarge
    },
    triangleMiddle1: {
      r: 270,
      x: seitenLängeSmall,
      y: 0
    },
    triangleSmall1: {
      r: -45,
      x: 0,
      y: -seitenLängeSmall
    },
    triangleSmall2: {
      r: 225,
      x: seitenLängeSmall,
      y: -seitenLängeSmall - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: -seitenLängeSmall - seitenLängeSmall - seitenLängeSmall
    },
    parallelogram1: {
      r: 225,
      x: seitenLängeLarge + seitenLängeSmall,
      y: -seitenLängeLarge
    }
  },
  "C": {
    triangleLarge1: {
      r: 225,
      x: seitenLängeLarge,
      y: 0
    },
    triangleLarge2: {
      r: 270,
      x: seitenLängeSmall,
      y: -seitenLängeSmall
    },
    triangleMiddle1: {
      r: 270,
      x: seitenLängeSmall + seitenLängeLarge,
      y: 0
    },
    triangleSmall1: {
      r: -45,
      x: 0,
      y: -4
    },
    triangleSmall2: {
      r: 225,
      x: seitenLängeSmall + seitenLängeSmall + seitenLängeSmall,
      y: -4
    },
    rectangle1: {
      r: 0,
      x: seitenLängeSmall,
      y: -4
    },
    parallelogram1: {
      r: 225,
      x: seitenLängeLarge + seitenLängeSmall,
      y: 0
    }
  },
  "D": {
    triangleLarge1: {
      r: 315,
      x: 0,
      y: 0
    },
    triangleLarge2: {
      r: 135,
      x: seitenLängeLarge,
      y: -seitenLängeLarge
    },
    triangleMiddle1: {
      r: 90,
      x: seitenLängeLarge,
      y: -seitenLängeLarge
    },
    triangleSmall1: {
      r: 135,
      x: seitenLängeSmall + seitenLängeLarge,
      y: -seitenLängeSmall - seitenLängeLarge
    },
    triangleSmall2: {
      r: 45,
      x: seitenLängeSmall + seitenLängeSmall,
      y: -seitenLängeSmall - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: seitenLängeSmall + seitenLängeSmall,
      y: -seitenLängeSmall - seitenLängeSmall - seitenLängeSmall
    },
    parallelogram2: {
      r: 315,
      x: 0,
      y: -seitenLängeLarge
    }
  },
  "E": {
    triangleLarge1: {
      r: 180,
      x: 4,
      y: -2
    },
    triangleLarge2: {
      r: 225,
      x: seitenLängeLarge,
      y: -2
    },
    triangleMiddle1: {
      r: 135,
      x: 4,
      y: -2
    },
    triangleSmall1: {
      r: 135,
      x: seitenLängeSmall,
      y: -seitenLängeSmall - seitenLängeLarge - 2
    },
    triangleSmall2: {
      r: 225,
      x: seitenLängeSmall * 3,
      y: -seitenLängeLarge - 2
    },
    rectangle1: {
      r: 0,
      x: seitenLängeSmall,
      y: -seitenLängeLarge - 2
    },
    parallelogram2: {
      r: -45,
      x: seitenLängeSmall,
      y: -2 - seitenLängeLarge / 2
    }
  },
  "F": {
    triangleLarge1: {
      r: 270,
      x: 1 + seitenLängeSmall,
      y: 0
    },
    triangleLarge2: {
      r: 315,
      x: 1,
      y: -4
    },
    triangleMiddle1: {
      r: 135,
      x: 3,
      y: -6 - seitenLängeLarge - seitenLängeSmall
    },
    triangleSmall1: {
      r: 135,
      x: 1,
      y: -4 - seitenLängeLarge
    },
    triangleSmall2: {
      r: 135,
      x: 1 + seitenLängeSmall + seitenLängeSmall,
      y: -4 - seitenLängeLarge
    },
    rectangle1: {
      r: 0,
      x: 1,
      y: -4 - seitenLängeLarge
    },
    parallelogram1: {
      r: -45,
      x: 1,
      y: -4 + seitenLängeSmall
    }
  },
  "G": {
    triangleLarge1: {
      r: 90,
      x: 0,
      y: -4
    },
    triangleLarge2: {
      r: 135,
      x: seitenLängeLarge,
      y: -seitenLängeSmall + 0.3
    },
    triangleMiddle1: {
      r: 45,
      x: 1,
      y: -5
    },
    triangleSmall1: {
      r: 180,
      x: 3,
      y: -3
    },
    triangleSmall2: {
      r: 180,
      x: 2,
      y: seitenLängeSmall + 0.3
    },
    rectangle1: {
      r: 45,
      x: 0,
      y: -4
    },
    parallelogram2: {
      r: -45,
      x: 0,
      y: 0
    }
  },
  "H": {
    triangleLarge1: {
      r: 45,
      x: seitenLängeSmall,
      y: -seitenLängeLarge - seitenLängeSmall
    },
    triangleLarge2: {
      r: 225,
      x: seitenLängeLarge,
      y: -seitenLängeSmall - seitenLängeSmall
    },
    triangleMiddle1: {
      r: 270,
      x: seitenLängeSmall,
      y: -seitenLängeSmall - seitenLängeSmall - seitenLängeSmall
    },
    triangleSmall1: {
      r: 315,
      x: 0,
      y: -seitenLängeSmall - seitenLängeSmall - seitenLängeSmall - seitenLängeSmall
    },
    triangleSmall2: {
      r: 315,
      x: 0,
      y: 0
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: -seitenLängeSmall
    },
    parallelogram2: {
      r: 45,
      x: seitenLängeLarge,
      y: -seitenLängeLarge
    }
  },
  "I": {
    triangleLarge1: {
      r: 90,
      x: 0,
      y: -6
    },
    triangleLarge2: {
      r: 270,
      x: 2,
      y: 0
    },
    triangleMiddle1: {
      r: 225,
      x: 2,
      y: 0
    },
    triangleSmall1: {
      r: 270,
      x: 2,
      y: -4
    },
    triangleSmall2: {
      r: 270,
      x: 2,
      y: -6
    },
    rectangle1: {
      r: 45,
      x: 0,
      y: -6
    },
    parallelogram1: {
      r: -45,
      x: 2 - seitenLängeSmall,
      y: -7
    }
  },
  "J": {
    triangleLarge1: {
      r: 90,
      x: 1,
      y: -3
    },
    triangleLarge2: {
      r: 180,
      x: 3,
      y: 1
    },
    triangleMiddle1: {
      r: 135,
      x: 3,
      y: -1
    },
    triangleSmall1: {
      r: 270,
      x: 3,
      y: -1
    },
    triangleSmall2: {
      r: 270,
      x: 3,
      y: -3
    },
    rectangle1: {
      r: 45,
      x: 1,
      y: -3
    },
    parallelogram1: {
      r: -45,
      x: 3 - seitenLängeSmall,
      y: -4
    }
  },
  "K": {
    triangleLarge1: {
      r: 90,
      x: 0,
      y: -4 - seitenLängeSmall
    },
    triangleLarge2: {
      r: 270,
      x: seitenLängeSmall,
      y: -4
    },
    triangleMiddle1: {
      r: 135,
      x: 4,
      y: -4 - seitenLängeSmall
    },
    triangleSmall1: {
      r: 135,
      x: seitenLängeSmall,
      y: -seitenLängeSmall - seitenLängeSmall
    },
    triangleSmall2: {
      r: 180,
      x: 4,
      y: -2 - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: 0
    },
    parallelogram2: {
      r: 45,
      x: 2.5,
      y: -seitenLängeLarge
    }
  },
  "L": {
    triangleLarge1: {
      r: 90,
      x: 0,
      y: -seitenLängeSmall * 3 - 4
    },
    triangleLarge2: {
      r: 270,
      x: 2,
      y: -seitenLängeSmall * 3 - 2
    },
    triangleMiddle1: {
      r: 180,
      x: seitenLängeLarge,
      y: -seitenLängeSmall
    },
    triangleSmall1: {
      r: 135,
      x: seitenLängeLarge,
      y: -seitenLängeSmall
    },
    triangleSmall2: {
      r: 135,
      x: seitenLängeSmall,
      y: -seitenLängeSmall * 3
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: -seitenLängeSmall
    },
    parallelogram1: {
      r: -45,
      x: 0,
      y: -seitenLängeSmall * 2
    }
  },
  "M": {
    triangleLarge1: {
      r: 90,
      x: 0,
      y: -4
    },
    triangleLarge2: {
      r: 270,
      x: 6,
      y: 0
    },
    triangleMiddle1: {
      r: 315,
      x: 4,
      y: -2
    },
    triangleSmall1: {
      r: 270,
      x: 4,
      y: -2
    },
    triangleSmall2: {
      r: 180,
      x: 3,
      y: -3
    },
    rectangle1: {
      r: 45,
      x: 2,
      y: -2
    },
    parallelogram2: {
      r: 0,
      x: 0,
      y: -4
    }
  },
  "N": {
    triangleLarge1: {
      r: 90,
      x: 0,
      y: -4 - seitenLängeSmall
    },
    triangleLarge2: {
      r: 45,
      x: 1,
      y: -3 - seitenLängeSmall
    },
    triangleMiddle1: {
      r: 90,
      x: seitenLängeLarge / 2 + 1,
      y: -seitenLängeLarge
    },
    triangleSmall1: {
      r: 135,
      x: seitenLängeSmall,
      y: -seitenLängeSmall * 2
    },
    triangleSmall2: {
      r: 135,
      x: seitenLängeLarge + 1,
      y: -seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: 0
    },
    parallelogram2: {
      r: 0,
      x: 0,
      y: -4 - seitenLängeSmall
    }
  },

  "O": {
    triangleLarge1: {
      r: 0,
      x: 0,
      y: 0
    },
    triangleLarge2: {
      r: 180,
      x: 4,
      y: -3 * seitenLängeSmall
    },
    triangleMiddle1: {
      r: 270,
      x: 4,
      y: -seitenLängeSmall
    },
    triangleSmall1: {
      r: -45,
      x: 0,
      y: 0
    },
    triangleSmall2: {
      r: 225,
      x: seitenLängeSmall,
      y: -2 * seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: -seitenLängeSmall
    },
    parallelogram2: {
      r: 45,
      x: 4 - seitenLängeSmall,
      y: -2 * seitenLängeSmall
    }
  },
  "P": {
    triangleLarge1: {
      r: 90,
      x: 0,
      y: -2
    },
    triangleLarge2: {
      r: 45,
      x: 0,
      y: -4
    },
    triangleMiddle1: {
      r: 270,
      x: seitenLängeSmall,
      y: 2 + seitenLängeSmall
    },
    triangleSmall1: {
      r: 270,
      x: 1,
      y: -1
    },
    triangleSmall2: {
      r: 90,
      x: 0,
      y: -4
    },
    rectangle1: {
      r: -45,
      x: 2,
      y: 0
    },
    parallelogram2: {
      r: 45,
      x: 0,
      y: 2
    }
  },
  "Q": {
    triangleLarge1: {
      r: 270,
      x: 3,
      y: 2
    },
    triangleLarge2: {
      r: 315,
      x: 0,
      y: -1
    },
    triangleMiddle1: {
      r: 90,
      x: 3,
      y: 0.5
    },
    triangleSmall1: {
      r: 90,
      x: 2,
      y: -3
    },
    triangleSmall2: {
      r: 270,
      x: 3,
      y: -2
    },
    rectangle1: {
      r: 315,
      x: 1,
      y: 0
    },
    parallelogram2: {
      r: 45,
      x: 3 - seitenLängeSmall,
      y: 0.5
    }
  },
  "R": {
    triangleLarge1: {
      r: 315,
      x: 0,
      y: -seitenLängeSmall
    },
    triangleLarge2: {
      r: 270,
      x: 3 * seitenLängeSmall,
      y: 4 - 4 * seitenLängeSmall
    },
    triangleMiddle1: {
      r: 270,
      x: seitenLängeSmall,
      y: 0
    },
    triangleSmall1: {
      r: 225,
      x: seitenLängeSmall,
      y: 0
    },
    triangleSmall2: {
      r: 225,
      x: seitenLängeSmall,
      y: -4 * seitenLängeSmall
    },
    // triangleSmall2: {
    //   r: 45,
    //   x: -seitenLängeSmall,
    //   y: -4*seitenLängeSmall
    // },
    rectangle1: {
      r: 0,
      x: 0,
      y: -3 * seitenLängeSmall
    },
    parallelogram2: {
      r: -45,
      x: seitenLängeSmall,
      y: -3 * seitenLängeSmall
    }
  },

  "S": {
    triangleLarge1: {
      r: 90,
      x: 2 * seitenLängeSmall,
      y: -4
    },
    triangleLarge2: {
      r: 270,
      x: 2 * seitenLängeSmall,
      y: -2
    },
    triangleMiddle1: {
      r: 0,
      x: 0,
      y: -seitenLängeSmall
    },
    triangleSmall1: {
      r: 45,
      x: 0,
      y: -seitenLängeSmall
    },
    triangleSmall2: {
      r: 45,
      x: 2 * seitenLängeSmall,
      y: -6
    },
    // triangleSmall2: {
    //   r: 225,
    //   x: 4*seitenLängeSmall,
    //   y: -6+2*seitenLängeSmall
    // },
    rectangle1: {
      r: 0,
      x: seitenLängeSmall,
      y: 0
    },
    parallelogram2: {
      r: 45,
      x: 2 * seitenLängeSmall,
      y: -6
    }
  },

  "T": {
    triangleLarge1: {
      r: 270,
      x: seitenLängeSmall * 2,
      y: 0
    },
    triangleLarge2: {
      r: 315,
      x: seitenLängeSmall,
      y: -4
    },
    triangleMiddle1: {
      r: 90,
      x: seitenLängeSmall,
      y: -6.8 - seitenLängeSmall - seitenLängeSmall
    },
    triangleSmall1: {
      r: 45,
      x: seitenLängeSmall,
      y: -3.9 - seitenLängeLarge - seitenLängeLarge
    },
    triangleSmall2: {
      r: 135,
      x: 2 * seitenLängeSmall,
      y: -4 - seitenLängeLarge - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: -1.2 - seitenLängeSmall - seitenLängeLarge
    },
    parallelogram1: {
      r: -45,
      x: seitenLängeSmall,
      y: -4 + seitenLängeSmall
    }
  },

  "U": {
    triangleLarge1: {
      r: 270,
      x: seitenLängeLarge + seitenLängeSmall,
      y: 0
    },
    triangleLarge2: {
      r: 225,
      x: +seitenLängeLarge + seitenLängeSmall,
      y: 0
    },
    triangleMiddle1: {
      r: 270,
      x: seitenLängeSmall,
      y: 0,
    },
    triangleSmall1: {
      r: -45,
      x: 0,
      y: -seitenLängeLarge
    },
    triangleSmall2: {
      r: -45,
      x: +seitenLängeLarge,
      y: -1.2 - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: -seitenLängeLarge - seitenLängeSmall
    },
    parallelogram1: {
      r: -45,
      x: 0,
      y: -seitenLängeSmall,
    }
  },

  "V": {
    triangleLarge1: {
      r: 135,
      x: seitenLängeLarge + seitenLängeSmall,
      y: -seitenLängeLarge - seitenLängeLarge
    },
    triangleLarge2: {
      r: 315,
      x: seitenLängeSmall,
      y: 0
    },
    triangleMiddle1: {
      r: 270,
      x: seitenLängeSmall,
      y: 0,
    },
    triangleSmall1: {
      r: 315,
      x: 0,
      y: -seitenLängeLarge
    },
    triangleSmall2: {
      r: 315,
      x: +seitenLängeLarge,
      y: -seitenLängeLarge - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: 0,
      y: -seitenLängeLarge - seitenLängeSmall
    },
    parallelogram1: {
      r: 315,
      x: 0,
      y: -seitenLängeSmall,
    }
  },

  "W": {
    triangleLarge1: {
      r: 90,
      x: seitenLängeSmall,
      y: -seitenLängeLarge - 2
    },
    triangleLarge2: {
      r: 135,
      x: seitenLängeSmall + seitenLängeLarge,
      y: -seitenLängeLarge - seitenLängeSmall
    },
    triangleMiddle1: {
      r: 90,
      x: 0,
      y: -seitenLängeSmall - seitenLängeSmall - seitenLängeSmall,
    },
    triangleSmall1: {
      r: 135,
      x: seitenLängeSmall,
      y: -seitenLängeSmall - seitenLängeSmall
    },
    triangleSmall2: {
      r: 45,
      x: seitenLängeSmall,
      y: -seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: seitenLängeSmall + seitenLängeSmall,
      y: 0
    },
    parallelogram1: {
      r: 45,
      x: 0,
      y: -seitenLängeSmall,
    }
  },

  "X": {
    triangleLarge1: {
      r: 45,
      x: seitenLängeLarge,
      y: -seitenLängeLarge
    },
    triangleLarge2: {
      r: 225,
      x: seitenLängeLarge,
      y: 2 * -seitenLängeSmall
    },
    triangleMiddle1: {
      r: -45,
      x: seitenLängeLarge + 1,
      y: -1 - seitenLängeLarge,
    },
    triangleSmall1: {
      r: 135,
      x: seitenLängeSmall,
      y: -seitenLängeSmall
    },
    triangleSmall2: {
      r: 135,
      x: seitenLängeLarge,
      y: -seitenLängeSmall - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: seitenLängeSmall,
      y: 0
    },
    parallelogram2: {
      r: 270,
      x: seitenLängeLarge,
      y: -seitenLängeLarge,
    }
  },

  "Y": {
    triangleLarge1: {
      r: 270,
      x: 3,
      y: 0
    },
    triangleLarge2: {
      r: 90,
      x: 0,
      y: -5
    },
    triangleMiddle1: {
      r: 135,
      x: 3,
      y: 0,
    },
    triangleSmall1: {
      r: 90,
      x: 2,
      y: -5
    },
    triangleSmall2: {
      r: 0,
      x: 1,
      y: 0
    },
    rectangle1: {
      r: 45,
      x: 0,
      y: -1
    },
    parallelogram1: {
      r: 0,
      x: 0,
      y: 3,
    }
  },

  "Z": {
    triangleLarge1: {
      r: 135,
      x: seitenLängeLarge,
      y: -seitenLängeLarge
    },
    triangleLarge2: {
      r: 315,
      x: seitenLängeLarge,
      y: -seitenLängeSmall
    },
    triangleMiddle1: {
      r: 135,
      x: 2 + seitenLängeSmall + seitenLängeLarge,
      y: -2,
    },
    triangleSmall1: {
      r: 135,
      x: -seitenLängeSmall + seitenLängeLarge,
      y: -seitenLängeSmall - seitenLängeSmall - seitenLängeSmall
    },
    triangleSmall2: {
      r: 315,
      x: seitenLängeLarge,
      y: 0
    },
    rectangle1: {
      r: 0,
      x: -seitenLängeSmall + seitenLängeLarge,
      y: -seitenLängeSmall - seitenLängeSmall
    },
    parallelogram2: {
      r: -45,
      x: seitenLängeLarge,
      y: 0,
    }
  }
};

// Easter Eggs

var eastereggs = {
  "student": {
    triangleLarge1: {
      r: 180,
      x: 3,
      y: -4.6 - seitenLängeSmall
    },
    triangleLarge2: {
      r: 0,
      x: -2,
      y: -1.6 - seitenLängeSmall
    },
    triangleMiddle1: {
      r: 45,
      x: 0,
      y: -3
    },
    triangleSmall1: {
      r: -45,
      x: -4,
      y: -1
    },
    triangleSmall2: {
      r: -135,
      x: 3,
      y: 0
    },
    rectangle1: {
      r: -45,
      x: 1,
      y: -6
    },
    parallelogram2: {
      r: 135,
      x: 0.9 - seitenLängeSmall,
      y: -3
    }
  },
  "hfg": {
    triangleLarge1: {
      r: 0,
      x: -2.7,
      y: -4.3,
    },
    triangleLarge2: {
      r: 0,
      x: 0,
      y: -2.8,
    },
    triangleMiddle1: {
      r: 0,
      x: -seitenLängeSmall,
      y: -seitenLängeSmall
    },
    triangleSmall1: {
      r: -45,
      x: -1.41,
      y: -2.88,
    },
    triangleSmall2: {
      r: 45,
      x: 0,
      y: -1.4 - seitenLängeSmall,
    },
    rectangle1: {
      r: 0,
      x: 1.1 + seitenLängeSmall,
      y: -seitenLängeSmall
    },
    parallelogram1: {
      r: -45,
      x: -seitenLängeSmall,
      y: -seitenLängeSmall,
    }
  },
  "cat": {
    triangleLarge1: {
      r: 135,
      x: seitenLängeSmall,
      y: 0,
    },
    triangleLarge2: {
      r: 90,
      x: -0.6,
      y: -2,
    },
    triangleMiddle1: {
      r: -90,
      x: -0.6,
      y: 0.8
    },
    triangleSmall1: {
      r: 90,
      x: -1.2 - seitenLängeSmall,
      y: -2.7 - seitenLängeSmall,
    },
    triangleSmall2: {
      r: -90,
      x: -0.6,
      y: -2.1
    },
    rectangle1: {
      r: 45,
      x: -2.6,
      y: -2.1
    },
    parallelogram1: {
      r: 0,
      x: seitenLängeSmall,
      y: 2.8,
    }
  },
  "rabbit": {
    triangleLarge1: {
      r: 135,
      x: seitenLängeSmall,
      y: 0,
    },
    triangleLarge2: {
      r: 90,
      x: -0.6,
      y: -2,
    },
    triangleMiddle1: {
      r: 90,
      x: -0.6,
      y: -6.3
    },
    triangleSmall1: {
      r: 90,
      x: -1.6,
      y: 1 - seitenLängeSmall,
    },
    triangleSmall2: {
      r: -90,
      x: -0.6,
      y: 2 - seitenLängeSmall
    },
    rectangle1: {
      r: 0,
      x: -2,
      y: -2.1
    },
    parallelogram1: {
      r: -100,
      x: 0.5 - seitenLängeSmall,
      y: -3.5,
    }
  },
  "heart": {
    triangleLarge1: {
      r: 0,
      x: -3 - seitenLängeSmall,
      y: -4 - seitenLängeSmall
    },
    triangleLarge2: {
      r: 180,
      x: 0.17 + seitenLängeSmall,
      y: -4 - seitenLängeSmall
    },
    triangleMiddle1: {
      r: 45,
      x: -3 - seitenLängeSmall,
      y: -4 - seitenLängeSmall
    },
    triangleSmall1: {
      r: 90,
      x: -1.0 - seitenLängeSmall,
      y: -3.98 - seitenLängeSmall
    },
    triangleSmall2: {
      r: 0,
      x: -seitenLängeSmall,
      y: -5.04 - seitenLängeSmall
    },
    rectangle1: {
      r: 45,
      x: -1 - seitenLängeSmall,
      y: -2 - seitenLängeSmall
    },
    parallelogram2: {
      r: 0,
      x: -seitenLängeSmall,
      y: -3.6 - seitenLängeLarge
    }
  }
};