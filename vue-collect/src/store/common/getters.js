export default {
    getLocation(states){
      return states.location
    },
    getUrl(states){
      return states.kmUrl
    },
    getRegexp(states) {
        return states.regexp;
    },
    getToDo(states){
        return states.event.filter(function (d) {
            if (d.type === 1) {
                return d;
            }
        });
    },
    getDone(states){
        return states.event.filter(function (d) {
            if (d.type === 2) {
                return d;
            }
        });
    },
    getCancel(states){
        return states.event.filter(function (d) {
            if (d.type === 3) {
                return d;
            }
        });
    }
};