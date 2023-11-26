var minWindow = function (s, t) {
  const tMap = {};
  const sTrackingMap = {};
  let need = 0;
  let ansLength = Number.MAX_SAFE_INTEGER;
  let ansIpointer = Number.MAX_SAFE_INTEGER;
  let ansJPointer = Number.MAX_SAFE_INTEGER;
  let res = "";

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (tMap[char]) {
      tMap[char]++;
    } else {
      tMap[char] = 1;
      sTrackingMap[char] = 0;
    }
  }
  let have = Object.keys(tMap).length;
  need = have;
  let prevEndedPointer = 0;
  for (let i = 0; i < s.length; i++) {
    if (need == 0) {
      if (tMap[s[i]]) {
        sTrackingMap[s[i]] = sTrackingMap[s[i]] - 1;
        if (sTrackingMap[s[i]] < tMap[s[i]]) need = need + 1;
        const currentlength = prevEndedPointer - 1 - i + 1;
        if (currentlength < ansLength) {
          ansLength = currentlength;
          ansIpointer = i;
          ansJPointer = prevEndedPointer - 1;
        }
      } else {
        //update result
        const currentlength = prevEndedPointer - 1 - i + 1;
        if (currentlength < ansLength) {
          ansLength = currentlength;
          ansIpointer = i;
          ansJPointer = prevEndedPointer - 1;
        }
      }
    } else {
      // main logic
      while (prevEndedPointer <= s.length - 1 && need > 0) {
        const char = s[prevEndedPointer];
        if (tMap[char]) {
          sTrackingMap[char] = sTrackingMap[char] + 1;
          if (sTrackingMap[char] === tMap[char]) {
            need = need - 1;
          }
        }
        prevEndedPointer += 1;
      }

      // update result
      if (need == 0) {
        if (sTrackingMap[s[i]]) {
          sTrackingMap[s[i]] = sTrackingMap[s[i]] - 1;
          if (sTrackingMap[s[i]] < tMap[s[i]]) need = need + 1;
        }

        const currentlength = prevEndedPointer - 1 - i + 1;
        if (currentlength < ansLength) {
          ansLength = currentlength;
          ansIpointer = i;
          ansJPointer = prevEndedPointer - 1;
        }
      } else if (prevEndedPointer >= s.length) {
        break;
      }
    }
  }

  if (ansLength != Number.MAX_SAFE_INTEGER) {
    for (let i = ansIpointer; i <= ansJPointer; i++) {
      res = res + s[i];
    }
  }
  return res;
};
