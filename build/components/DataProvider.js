var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';
var fakeData = {
    "data": {
        "from": "2019-10-26T12:30Z",
        "to": "2019-10-26T13:00Z",
        "generationmix": [
            {
                "fuel": "biomass",
                "perc": 3.3
            },
            {
                "fuel": "coal",
                "perc": 1
            },
            {
                "fuel": "imports",
                "perc": 9.8
            },
            {
                "fuel": "gas",
                "perc": 39
            },
            {
                "fuel": "nuclear",
                "perc": 20.2
            },
            {
                "fuel": "other",
                "perc": 0.3
            },
            {
                "fuel": "hydro",
                "perc": 1
            },
            {
                "fuel": "solar",
                "perc": 3.2
            },
            {
                "fuel": "wind",
                "perc": 22.2
            }
        ]
    }
};
;
export var withEnergyMix = function (Component) { return function (props) {
    var _a = useState({ energyMix: {} }), energyMix = _a[0], setEnergyMix = _a[1];
    useEffect(function () {
        axios.get('https://api.carbonintensity.org.uk/generation').then(function (result) {
            setEnergyMix(result.data);
        });
    }, []);
    return React.createElement(Component, __assign({}, props, { data: energyMix }));
}; };
//# sourceMappingURL=DataProvider.js.map