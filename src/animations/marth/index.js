var ATTACKAIRB = require("./ATTACKAIRB");
var DAMAGEN2 = require("./DAMAGEN2");
var FALLAERIAL = require("./FALLAERIAL");
var LANDINGFALLSPECIAL = require("./LANDINGFALLSPECIAL");
var SIDESPECIALGROUND = require("./SIDESPECIALGROUND");
var THROWNFOXUP = require("./THROWNFOXUP");
var ATTACKAIRD = require("./ATTACKAIRD");
var DASH = require("./DASH");
var FALLSPECIAL = require("./FALLSPECIAL");
var MISSFOOT = require("./MISSFOOT");
var SIDESPECIALGROUND2FORWARD = require("./SIDESPECIALGROUND2FORWARD");
var THROWNMARTHBACK = require("./THROWNMARTHBACK");
var ATTACKAIRF = require("./ATTACKAIRF");
var DEADDOWN = require("./DEADDOWN");
var FORWARDSMASH = require("./FORWARDSMASH");
var NEUTRALSPECIALAIR = require("./NEUTRALSPECIALAIR");
var SIDESPECIALGROUND2UP = require("./SIDESPECIALGROUND2UP");
var THROWNMARTHDOWN = require("./THROWNMARTHDOWN");
var ATTACKAIRN = require("./ATTACKAIRN");
var DEADLEFT = require("./DEADLEFT");
var FORWARDTILT = require("./FORWARDTILT");
var NEUTRALSPECIALGROUND = require("./NEUTRALSPECIALGROUND");
var SIDESPECIALGROUND3DOWN = require("./SIDESPECIALGROUND3DOWN");
var THROWNMARTHFORWARD = require("./THROWNMARTHFORWARD");
var ATTACKAIRU = require("./ATTACKAIRU");
var DEADRIGHT = require("./DEADRIGHT");
var FURAFURA = require("./FURAFURA");
var OTTOTTO = require("./OTTOTTO");
var SIDESPECIALGROUND3FORWARD = require("./SIDESPECIALGROUND3FORWARD");
var THROWNMARTHUP = require("./THROWNMARTHUP");
var ATTACKDASH = require("./ATTACKDASH");
var DEADUP = require("./DEADUP");
var FURASLEEPEND = require("./FURASLEEPEND");
var OTTOTTOWAIT = require("./OTTOTTOWAIT");
var SIDESPECIALGROUND3UP = require("./SIDESPECIALGROUND3UP");
var THROWNPUFFBACK = require("./THROWNPUFFBACK");
var CAPTURECUT = require("./CAPTURECUT");
var DOWNATTACK = require("./DOWNATTACK");
var FURASLEEPLOOP = require("./FURASLEEPLOOP");
var PASS = require("./PASS");
var SIDESPECIALGROUND4DOWN = require("./SIDESPECIALGROUND4DOWN");
var THROWNPUFFDOWN = require("./THROWNPUFFDOWN");
var CAPTUREDAMAGE = require("./CAPTUREDAMAGE");
var DOWNBOUND = require("./DOWNBOUND");
var FURASLEEPSTART = require("./FURASLEEPSTART");
var REBIRTH = require("./REBIRTH");
var SIDESPECIALGROUND4FORWARD = require("./SIDESPECIALGROUND4FORWARD");
var THROWNPUFFFORWARD = require("./THROWNPUFFFORWARD");
var CAPTUREPULLED = require("./CAPTUREPULLED");
var DOWNDAMAGE = require("./DOWNDAMAGE");
var GRAB = require("./GRAB");
var REBIRTHWAIT = require("./REBIRTHWAIT");
var SIDESPECIALGROUND4UP = require("./SIDESPECIALGROUND4UP");
var THROWNPUFFUP = require("./THROWNPUFFUP");
var CAPTUREWAIT = require("./CAPTUREWAIT");
var DOWNSMASH = require("./DOWNSMASH");
var GUARD = require("./GUARD");
var REBOUND = require("./REBOUND");
var SLEEP = require("./SLEEP");
var THROWUP = require("./THROWUP");
var CATCHATTACK = require("./CATCHATTACK");
var DOWNSPECIALAIR = require("./DOWNSPECIALAIR");
var GUARDOFF = require("./GUARDOFF");
var RUN = require("./RUN");
var SMASHTURN = require("./SMASHTURN");
var TILTTURN = require("./TILTTURN");
var CATCHCUT = require("./CATCHCUT");
var DOWNSPECIALAIR2 = require("./DOWNSPECIALAIR2");
var GUARDON = require("./GUARDON");
var RUNBRAKE = require("./RUNBRAKE");
var SQUAT = require("./SQUAT");
var UPSMASH = require("./UPSMASH");
var CATCHWAIT = require("./CATCHWAIT");
var DOWNSPECIALGROUND = require("./DOWNSPECIALGROUND");
var JAB1 = require("./JAB1");
var RUNTURN = require("./RUNTURN");
var SQUATRV = require("./SQUATRV");
var UPSPECIAL = require("./UPSPECIAL");
var CLIFFATTACKQUICK = require("./CLIFFATTACKQUICK");
var DOWNSPECIALGROUND2 = require("./DOWNSPECIALGROUND2");
var JAB2 = require("./JAB2");
var SHIELDBREAKDOWNBOUND = require("./SHIELDBREAKDOWNBOUND");
var SQUATWAIT = require("./SQUATWAIT");
var UPTILT = require("./UPTILT");
var CLIFFATTACKSLOW = require("./CLIFFATTACKSLOW");
var DOWNSTANDB = require("./DOWNSTANDB");
var JUMPAERIALB = require("./JUMPAERIALB");
var SHIELDBREAKFALL = require("./SHIELDBREAKFALL");
var STOPCEIL = require("./STOPCEIL");
var WAIT = require("./WAIT");
var CLIFFCATCH = require("./CLIFFCATCH");
var DOWNSTANDF = require("./DOWNSTANDF");
var JUMPAERIALF = require("./JUMPAERIALF");
var SHIELDBREAKSTAND = require("./SHIELDBREAKSTAND");
var TECHB = require("./TECHB");
var WALK = require("./WALK");
var CLIFFESCAPEQUICK = require("./CLIFFESCAPEQUICK");
var DOWNSTANDN = require("./DOWNSTANDN");
var JUMPB = require("./JUMPB");
var SIDESPECIALAIR = require("./SIDESPECIALAIR");
var TECHF = require("./TECHF");
var WALLDAMAGE = require("./WALLDAMAGE");
var CLIFFESCAPESLOW = require("./CLIFFESCAPESLOW");
var DOWNTILT = require("./DOWNTILT");
var JUMPF = require("./JUMPF");
var SIDESPECIALAIR2FORWARD = require("./SIDESPECIALAIR2FORWARD");
var TECHN = require("./TECHN");
var WALLJUMP = require("./WALLJUMP");
var CLIFFGETUPQUICK = require("./CLIFFGETUPQUICK");
var DOWNWAIT = require("./DOWNWAIT");
var KNEEBEND = require("./KNEEBEND");
var SIDESPECIALAIR2UP = require("./SIDESPECIALAIR2UP");
var TECHU = require("./TECHU");
var WALLTECH = require("./WALLTECH");
var CLIFFGETUPSLOW = require("./CLIFFGETUPSLOW");
var ENTRANCE = require("./ENTRANCE");
var LANDING = require("./LANDING");
var SIDESPECIALAIR3DOWN = require("./SIDESPECIALAIR3DOWN");
var THROWBACK = require("./THROWBACK");
var WALLTECHJUMP = require("./WALLTECHJUMP");
var CLIFFJUMPQUICK = require("./CLIFFJUMPQUICK");
var ESCAPEAIR = require("./ESCAPEAIR");
var LANDINGATTACKAIRB = require("./LANDINGATTACKAIRB");
var SIDESPECIALAIR3FORWARD = require("./SIDESPECIALAIR3FORWARD");
var THROWDOWN = require("./THROWDOWN");
var CLIFFJUMPSLOW = require("./CLIFFJUMPSLOW");
var ESCAPEB = require("./ESCAPEB");
var LANDINGATTACKAIRD = require("./LANDINGATTACKAIRD");
var SIDESPECIALAIR3UP = require("./SIDESPECIALAIR3UP");
var THROWFORWARD = require("./THROWFORWARD");
var CLIFFWAIT = require("./CLIFFWAIT");
var ESCAPEF = require("./ESCAPEF");
var LANDINGATTACKAIRF = require("./LANDINGATTACKAIRF");
var SIDESPECIALAIR4DOWN = require("./SIDESPECIALAIR4DOWN");
var THROWNFOXBACK = require("./THROWNFOXBACK");
var DAMAGEFALL = require("./DAMAGEFALL");
var ESCAPEN = require("./ESCAPEN");
var LANDINGATTACKAIRN = require("./LANDINGATTACKAIRN");
var SIDESPECIALAIR4FORWARD = require("./SIDESPECIALAIR4FORWARD");
var THROWNFOXDOWN = require("./THROWNFOXDOWN");
var DAMAGEFLYN = require("./DAMAGEFLYN");
var FALL = require("./FALL");
var LANDINGATTACKAIRU = require("./LANDINGATTACKAIRU");
var SIDESPECIALAIR4UP = require("./SIDESPECIALAIR4UP");
var THROWNFOXFORWARD = require("./THROWNFOXFORWARD");

module.exports = {
  ATTACKAIRB: ATTACKAIRB,
  DAMAGEN2: DAMAGEN2,
  FALLAERIAL: FALLAERIAL,
  LANDINGFALLSPECIAL: LANDINGFALLSPECIAL,
  SIDESPECIALGROUND: SIDESPECIALGROUND,
  THROWNFOXUP: THROWNFOXUP,
  ATTACKAIRD: ATTACKAIRD,
  DASH: DASH,
  FALLSPECIAL: FALLSPECIAL,
  MISSFOOT: MISSFOOT,
  SIDESPECIALGROUND2FORWARD: SIDESPECIALGROUND2FORWARD,
  THROWNMARTHBACK: THROWNMARTHBACK,
  ATTACKAIRF: ATTACKAIRF,
  DEADDOWN: DEADDOWN,
  FORWARDSMASH: FORWARDSMASH,
  NEUTRALSPECIALAIR: NEUTRALSPECIALAIR,
  SIDESPECIALGROUND2UP: SIDESPECIALGROUND2UP,
  THROWNMARTHDOWN: THROWNMARTHDOWN,
  ATTACKAIRN: ATTACKAIRN,
  DEADLEFT: DEADLEFT,
  FORWARDTILT: FORWARDTILT,
  NEUTRALSPECIALGROUND: NEUTRALSPECIALGROUND,
  SIDESPECIALGROUND3DOWN: SIDESPECIALGROUND3DOWN,
  THROWNMARTHFORWARD: THROWNMARTHFORWARD,
  ATTACKAIRU: ATTACKAIRU,
  DEADRIGHT: DEADRIGHT,
  FURAFURA: FURAFURA,
  OTTOTTO: OTTOTTO,
  SIDESPECIALGROUND3FORWARD: SIDESPECIALGROUND3FORWARD,
  THROWNMARTHUP: THROWNMARTHUP,
  ATTACKDASH: ATTACKDASH,
  DEADUP: DEADUP,
  FURASLEEPEND: FURASLEEPEND,
  OTTOTTOWAIT: OTTOTTOWAIT,
  SIDESPECIALGROUND3UP: SIDESPECIALGROUND3UP,
  THROWNPUFFBACK: THROWNPUFFBACK,
  CAPTURECUT: CAPTURECUT,
  DOWNATTACK: DOWNATTACK,
  FURASLEEPLOOP: FURASLEEPLOOP,
  PASS: PASS,
  SIDESPECIALGROUND4DOWN: SIDESPECIALGROUND4DOWN,
  THROWNPUFFDOWN: THROWNPUFFDOWN,
  CAPTUREDAMAGE: CAPTUREDAMAGE,
  DOWNBOUND: DOWNBOUND,
  FURASLEEPSTART: FURASLEEPSTART,
  REBIRTH: REBIRTH,
  SIDESPECIALGROUND4FORWARD: SIDESPECIALGROUND4FORWARD,
  THROWNPUFFFORWARD: THROWNPUFFFORWARD,
  CAPTUREPULLED: CAPTUREPULLED,
  DOWNDAMAGE: DOWNDAMAGE,
  GRAB: GRAB,
  REBIRTHWAIT: REBIRTHWAIT,
  SIDESPECIALGROUND4UP: SIDESPECIALGROUND4UP,
  THROWNPUFFUP: THROWNPUFFUP,
  CAPTUREWAIT: CAPTUREWAIT,
  DOWNSMASH: DOWNSMASH,
  GUARD: GUARD,
  REBOUND: REBOUND,
  SLEEP: SLEEP,
  THROWUP: THROWUP,
  CATCHATTACK: CATCHATTACK,
  DOWNSPECIALAIR: DOWNSPECIALAIR,
  GUARDOFF: GUARDOFF,
  RUN: RUN,
  SMASHTURN: SMASHTURN,
  TILTTURN: TILTTURN,
  CATCHCUT: CATCHCUT,
  DOWNSPECIALAIR2: DOWNSPECIALAIR2,
  GUARDON: GUARDON,
  RUNBRAKE: RUNBRAKE,
  SQUAT: SQUAT,
  UPSMASH: UPSMASH,
  CATCHWAIT: CATCHWAIT,
  DOWNSPECIALGROUND: DOWNSPECIALGROUND,
  JAB1: JAB1,
  RUNTURN: RUNTURN,
  SQUATRV: SQUATRV,
  UPSPECIAL: UPSPECIAL,
  CLIFFATTACKQUICK: CLIFFATTACKQUICK,
  DOWNSPECIALGROUND2: DOWNSPECIALGROUND2,
  JAB2: JAB2,
  SHIELDBREAKDOWNBOUND: SHIELDBREAKDOWNBOUND,
  SQUATWAIT: SQUATWAIT,
  UPTILT: UPTILT,
  CLIFFATTACKSLOW: CLIFFATTACKSLOW,
  DOWNSTANDB: DOWNSTANDB,
  JUMPAERIALB: JUMPAERIALB,
  SHIELDBREAKFALL: SHIELDBREAKFALL,
  STOPCEIL: STOPCEIL,
  WAIT: WAIT,
  CLIFFCATCH: CLIFFCATCH,
  DOWNSTANDF: DOWNSTANDF,
  JUMPAERIALF: JUMPAERIALF,
  SHIELDBREAKSTAND: SHIELDBREAKSTAND,
  TECHB: TECHB,
  WALK: WALK,
  CLIFFESCAPEQUICK: CLIFFESCAPEQUICK,
  DOWNSTANDN: DOWNSTANDN,
  JUMPB: JUMPB,
  SIDESPECIALAIR: SIDESPECIALAIR,
  TECHF: TECHF,
  WALLDAMAGE: WALLDAMAGE,
  CLIFFESCAPESLOW: CLIFFESCAPESLOW,
  DOWNTILT: DOWNTILT,
  JUMPF: JUMPF,
  SIDESPECIALAIR2FORWARD: SIDESPECIALAIR2FORWARD,
  TECHN: TECHN,
  WALLJUMP: WALLJUMP,
  CLIFFGETUPQUICK: CLIFFGETUPQUICK,
  DOWNWAIT: DOWNWAIT,
  KNEEBEND: KNEEBEND,
  SIDESPECIALAIR2UP: SIDESPECIALAIR2UP,
  TECHU: TECHU,
  WALLTECH: WALLTECH,
  CLIFFGETUPSLOW: CLIFFGETUPSLOW,
  ENTRANCE: ENTRANCE,
  LANDING: LANDING,
  SIDESPECIALAIR3DOWN: SIDESPECIALAIR3DOWN,
  THROWBACK: THROWBACK,
  WALLTECHJUMP: WALLTECHJUMP,
  CLIFFJUMPQUICK: CLIFFJUMPQUICK,
  ESCAPEAIR: ESCAPEAIR,
  LANDINGATTACKAIRB: LANDINGATTACKAIRB,
  SIDESPECIALAIR3FORWARD: SIDESPECIALAIR3FORWARD,
  THROWDOWN: THROWDOWN,
  CLIFFJUMPSLOW: CLIFFJUMPSLOW,
  ESCAPEB: ESCAPEB,
  LANDINGATTACKAIRD: LANDINGATTACKAIRD,
  SIDESPECIALAIR3UP: SIDESPECIALAIR3UP,
  THROWFORWARD: THROWFORWARD,
  CLIFFWAIT: CLIFFWAIT,
  ESCAPEF: ESCAPEF,
  LANDINGATTACKAIRF: LANDINGATTACKAIRF,
  SIDESPECIALAIR4DOWN: SIDESPECIALAIR4DOWN,
  THROWNFOXBACK: THROWNFOXBACK,
  DAMAGEFALL: DAMAGEFALL,
  ESCAPEN: ESCAPEN,
  LANDINGATTACKAIRN: LANDINGATTACKAIRN,
  SIDESPECIALAIR4FORWARD: SIDESPECIALAIR4FORWARD,
  THROWNFOXDOWN: THROWNFOXDOWN,
  DAMAGEFLYN: DAMAGEFLYN,
  FALL: FALL,
  LANDINGATTACKAIRU: LANDINGATTACKAIRU,
  SIDESPECIALAIR4UP: SIDESPECIALAIR4UP,
  THROWNFOXFORWARD: THROWNFOXFORWARD,
};