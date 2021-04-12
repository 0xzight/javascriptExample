function current_time_dif_string(startTime) {
      // Using below datetime string format
      // dd/MM/yyyy HH:mm:ss
      // e.g 23/07/2021 19:17:06
      // checking string datetime different time with current time, showing back with "hours:ss" e.g. 105:59 string.
      prev = new Date(startTime);
      current = new Date;
      usedTime = current.getTime() - prev.getTime();
      seconds = Math.floor(usedTime/1000);
      sec = ("0" + (seconds%60)).slice(-2);
      minutes = Math.floor(seconds/60);
      result = `${minutes}:${sec}`;
      return result;
    }
