var Rooms = {
  _data: new Set,

  selected: 'lobby',

  items: function() {
    return _.chain([...Rooms._data]);
  },

  isSelected: function(roomname) {
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'lobby';
  },

  update: function(messages, callback = ()=>{}) {
    var length = Rooms._data.size;

    _.chain(messages).pluck('roomname').each(function (room) {
      return Rooms._data.add(room);
    });
    if (Rooms.selected === null) {
      Rooms.selected = Rooms._data.values().next().value;
    }

    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  },

  add: function() {
    return;
  }
};

