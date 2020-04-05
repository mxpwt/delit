const object = [
  // original --- 0
  {
    a: 4,
    b: "hola",
    NO: [],
    NOO: false,
    gf: {
      NO: 0,
      hhh: "yea",
      NOO: {},
      NOOO: "",
      g: {
        NO: undefined,
        o: 5,
        NOO: null,
        ttr: {
          NO: undefined,
          as: "12",
          NO1: NaN,
          qw: true,
          yy: {
            NO: false,
            re: "ffd",
            NO1: [],
            NO2: [{}],
            uy: [
              {},
              { tt: 15 },
              { NO: undefined, kk: true },
              [
                { b: 5 },
                {
                  NO: false,
                  NO1: null,
                  s: "llegue...",
                  p: [{ NO: "" }],
                  NO2: [],
                  NO3: 0,
                },
              ],
              NaN,
            ],
          },
        },
      },
    },
  },
  // all except [] --- 1
  {
    a: 4,
    b: "hola",
    NO: [],
    gf: {
      hhh: "yea",
      g: {
        o: 5,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            re: "ffd",
            NO1: [],
            NO2: [],
            uy: [
              {
                tt: 15,
              },
              {
                kk: true,
              },
              [
                {
                  b: 5,
                },
                {
                  s: "llegue...",
                  p: [],
                  NO2: [],
                },
              ],
            ],
          },
        },
      },
    },
  },
  // no {} --- 2
  {
    a: 4,
    b: "hola",
    NO: [],
    NOO: false,
    gf: {
      NO: 0,
      hhh: "yea",
      NOOO: "",
      g: {
        o: 5,
        NOO: null,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            NO: false,
            re: "ffd",
            NO1: [],
            NO2: [],
            uy: [
              { tt: 15 },
              { kk: true },
              [
                { b: 5 },
                {
                  NO: false,
                  NO1: null,
                  s: "llegue...",
                  p: [{ NO: "" }],
                  NO2: [],
                  NO3: 0,
                },
              ],
            ],
          },
        },
      },
    },
  },
  // no false --- 3
  {
    a: 4,
    b: "hola",
    gf: {
      NO: 0,
      hhh: "yea",
      NOOO: "",
      g: {
        o: 5,
        NOO: null,
        ttr: {
          as: "12",
          NO1: null,
          qw: true,
          yy: {
            re: "ffd",
            uy: [
              {
                tt: 15,
              },
              {
                kk: true,
              },
              [
                {
                  b: 5,
                },
                {
                  NO1: null,
                  s: "llegue...",
                  p: [
                    {
                      NO: "",
                    },
                  ],
                  NO3: 0,
                },
              ],
            ],
          },
        },
      },
    },
  },
  // no null --- 4
  {
    a: 4,
    b: "hola",
    NO: [],
    NOO: false,
    gf: {
      NO: 0,
      hhh: "yea",
      NOO: {},
      NOOO: "",
      g: {
        NO: undefined,
        o: 5,
        ttr: {
          NO: undefined,
          as: "12",
          NO1: NaN,
          qw: true,
          yy: {
            NO: false,
            re: "ffd",
            NO1: [],
            NO2: [{}],
            uy: [
              {},
              { tt: 15 },
              { NO: undefined, kk: true },
              [
                { b: 5 },
                {
                  NO: false,
                  s: "llegue...",
                  p: [{ NO: "" }],
                  NO2: [],
                  NO3: 0,
                },
              ],
              NaN,
            ],
          },
        },
      },
    },
  },
  // no "" --- 5
  {
    a: 4,
    b: "hola",
    NO: [],
    NOO: false,
    gf: {
      NO: 0,
      hhh: "yea",
      NOO: {},
      g: {
        NO: undefined,
        o: 5,
        NOO: null,
        ttr: {
          NO: undefined,
          as: "12",
          NO1: NaN,
          qw: true,
          yy: {
            NO: false,
            re: "ffd",
            NO1: [],
            NO2: [{}],
            uy: [
              {},
              { tt: 15 },
              { NO: undefined, kk: true },
              [
                { b: 5 },
                {
                  NO: false,
                  NO1: null,
                  s: "llegue...",
                  p: [{}],
                  NO2: [],
                  NO3: 0,
                },
              ],
              NaN,
            ],
          },
        },
      },
    },
  },
  // no 0 --- 6
  {
    a: 4,
    b: "hola",
    NO: [],
    NOO: false,
    gf: {
      hhh: "yea",
      NOO: {},
      NOOO: "",
      g: {
        NO: undefined,
        o: 5,
        NOO: null,
        ttr: {
          NO: undefined,
          as: "12",
          NO1: NaN,
          qw: true,
          yy: {
            NO: false,
            re: "ffd",
            NO1: [],
            NO2: [{}],
            uy: [
              {},
              { tt: 15 },
              { NO: undefined, kk: true },
              [
                { b: 5 },
                {
                  NO: false,
                  NO1: null,
                  s: "llegue...",
                  p: [{ NO: "" }],
                  NO2: [],
                },
              ],
              NaN,
            ],
          },
        },
      },
    },
  },
  // remove all --- 7
  {
    a: 4,
    b: "hola",
    gf: {
      hhh: "yea",
      g: {
        o: 5,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            re: "ffd",
            uy: [
              {
                tt: 15,
              },
              {
                kk: true,
              },
              [
                {
                  b: 5,
                },
                {
                  s: "llegue...",
                },
              ],
            ],
          },
        },
      },
    },
  },
  // all except 0 --- 8
  {
    a: 4,
    b: "hola",
    gf: {
      NO: 0,
      hhh: "yea",
      g: {
        o: 5,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            re: "ffd",
            uy: [
              {
                tt: 15,
              },
              {
                kk: true,
              },
              [
                {
                  b: 5,
                },
                {
                  s: "llegue...",
                  NO3: 0,
                },
              ],
            ],
          },
        },
      },
    },
  },
  // all except false --- 9
  {
    a: 4,
    b: "hola",
    NOO: false,
    gf: {
      hhh: "yea",
      g: {
        o: 5,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            NO: false,
            re: "ffd",
            uy: [
              { tt: 15 },
              { kk: true },
              [
                { b: 5 },
                {
                  NO: false,
                  s: "llegue...",
                },
              ],
            ],
          },
        },
      },
    },
  },
  // all except null & '' --- 10
  {
    a: 4,
    b: "hola",
    gf: {
      hhh: "yea",
      NOOO: "",
      g: {
        o: 5,
        NOO: null,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            re: "ffd",
            uy: [
              { tt: 15 },
              { kk: true },
              [
                { b: 5 },
                {
                  NO1: null,
                  s: "llegue...",
                  p: [{ NO: "" }],
                },
              ],
            ],
          },
        },
      },
    },
  },
  // all except [] --- 11
  {
    a: 4,
    b: "hola",
    NOO: false,
    gf: {
      NO: 0,
      hhh: "yea",
      NOO: {},
      NOOO: "",
      g: {
        o: 5,
        NOO: null,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            NO: false,
            re: "ffd",
            NO2: [{}],
            uy: [
              {},
              { tt: 15 },
              { kk: true },
              [
                { b: 5 },
                {
                  NO: false,
                  NO1: null,
                  s: "llegue...",
                  p: [{ NO: "" }],
                  NO3: 0,
                },
              ],
            ],
          },
        },
      },
    },
  },
  // all except '' --- 12
  {
    a: 4,
    b: "hola",
    gf: {
      hhh: "yea",
      NOOO: "",
      g: {
        o: 5,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            re: "ffd",
            uy: [
              { tt: 15 },
              { kk: true },
              [
                { b: 5 },
                {
                  s: "llegue...",
                  p: [{ NO: "" }],
                },
              ],
            ],
          },
        },
      },
    },
  },
  // all except {} --- 13
  {
    a: 4,
    b: "hola",
    gf: {
      hhh: "yea",
      NOO: {},
      g: {
        o: 5,
        ttr: {
          as: "12",
          qw: true,
          yy: {
            re: "ffd",
            NO2: [{}],
            uy: [
              {},
              { tt: 15 },
              { kk: true },
              [
                { b: 5 },
                {
                  s: "llegue...",
                  p: [{}],
                },
              ],
            ],
          },
        },
      },
    },
  },
  // all except undefined (as string) --- 14
  {
    a: 4,
    b: "hola",
    gf: {
      hhh: "yea",
      g: {
        NO: "undefined",
        o: 5,
        ttr: {
          NO: "undefined",
          as: "12",
          qw: true,
          yy: {
            re: "ffd",
            uy: [
              { tt: 15 },
              { NO: "undefined", kk: true },
              [
                { b: 5 },
                {
                  s: "llegue...",
                },
              ],
            ],
          },
        },
      },
    },
  },
  // all except NaN (as string) --- 15
  {
    a: 4,
    b: "hola",
    gf: {
      hhh: "yea",
      g: {
        o: 5,
        ttr: {
          as: "12",
          NO1: "NaN",
          qw: true,
          yy: {
            re: "ffd",
            uy: [
              { tt: 15 },
              { kk: true },
              [
                { b: 5 },
                {
                  s: "llegue...",
                },
              ],
              "NaN",
            ],
          },
        },
      },
    },
  },
  // all except 0, undefined & [] --- 16
  {
    a: 4,
    b: "hola",
    NO: [],
    gf: {
      NO: 0,
      hhh: "yea",
      g: {
        NO: "undefined",
        o: 5,
        ttr: {
          NO: "undefined",
          as: "12",
          qw: true,
          yy: {
            re: "ffd",
            NO1: [],
            NO2: [],
            uy: [
              { tt: 15 },
              { NO: "undefined", kk: true },
              [
                { b: 5 },
                {
                  s: "llegue...",
                  p: [],
                  NO2: [],
                  NO3: 0,
                },
              ],
            ],
          },
        },
      },
    },
  },
];

module.exports = object;
