AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      var borderEl = this.border(position, item.id)

      var thumbnailEl = this.thumbnail(item);
      borderEl.appendChild(thumbnailEl)

      var titleEL = this.title(item,position);
      borderEl.appendChild(titleEL)

      this.placesContainer.appendChild(borderEl);
    }
  },
  border: function (position, id) {
    const entiteEL = document.createElement("a-entity");
    entiteEL.setAttribute("id", id);
    entiteEL.setAttribute("visible", true);
    entiteEL.setAttribute("position", position)
    entiteEL.setAttribute("geometry", {
      primitive: "ring",
      radiusInner: 9,
      radiusOuter: 10,
    });
    entiteEL.setAttribute("material", {
      color: "blue",
      opacity: 1,
    });
    return entiteEL
  },
  // Thumbnail Element
  thumbnail: function (item) {
    console.log("working")
    console.log(item.url)
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "circle",
      radius: 9,
    })
    entityEl.setAttribute("material", { src: item.url })
    return entityEl
  },
  // Title Text Element
  title: function (item, position) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    const elposition = position;
    elposition.y = -20
    entityEl.setAttribute("position", elposition)
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "red",
      value: item.title
    })
    return entityEl
  }

});
